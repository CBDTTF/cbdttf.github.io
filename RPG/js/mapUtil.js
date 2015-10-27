// A*
// 1.现将地图数组转换成A*的对象数组 mapUtil.convertArrToAS();
// 2.进行A*路径算法 mapUtil.findPathA();

var mapUtil = {
    Point: function (x, y) {
        this.x = x;
        this.y = y;
        this.parent = null;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.state = -1;
        this.flag = 0;
    },

    convertArrToAS: function (arr) {
        var r = arr.length, c = arr[0].length;

        var a = new Array(c);
        for (var i = 0; i < r; ++i) {
            a[i] = new Array(c);
            for (var j = 0; j < c; ++j) {
                var pos = new mapUtil.Point(i, j);
                pos.flag = arr[i][j] == 0 ? 0 : 1;  // 需要改动一下
                a[i][j] = pos;
            }
        }
        return a;
    },

    findPathA: function (pathArr, start, end, row, col) {
        // 添加数据到排序数组中
        function addArrSort(descSortedArr, element, compare) {
            var left = 0,
                right = descSortedArr.length - 1,
                idx = -1,
                mid = (left + right) >> 1;

            while (left <= right) {
                mid = (left + right) >> 1;
                if (compare(descSortedArr[mid], element) == 1) {
                    left = mid + 1;
                } else if (compare(descSortedArr[mid], element == -1)) {
                    right = mid - 1;
                } else {
                    break;
                }
            }

            for (var i = descSortedArr.length - 1; i >= left; --i) {
                descSortedArr[i + 1] = descSortedArr[i];
            }

            descSortedArr[left] = element;
            return idx;
        }

        // 判断两个点是否相同
        function pEqual(p1, p2) {
            return p1.x == p2.x && p1.y == p2.y;
        }

        // 获取两个点的距离
        function posDist(p1, p2) {
            return (Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y));
        }

        function between(val, min, max) {
            return (val >= min && val <= max );
        }

        // 比较两个点F值的大小
        function compPointF(p1, p2) {
            return p1.f - p2.f;
        }

        // 处理当前节点
        function processCurrPoint(arr, openList, row, col, currPoint, destPoint) {
            var ltx = currPoint.x - 1,
                lty = currPoint.y - 1;
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    var cx = ltx + i,
                        cy = lty + j;

                    if ((cx == currPoint.x || cy == currPoint.y) && between(cx, 0, row - 1) && between(cy, 0, col - 1)) {

                        var tp = arr[cx][cy];

                        // 该点是可通过，并且未处理或者在open表中
                        if (tp.flag == 0 && tp.state != 1) {

                            // 找到最终的点，说明有路径
                            if (pEqual(tp, destPoint)) {
                                tp.parent = currPoint;
                                return true;
                            }

                            // 该点还没有处理
                            if (tp.state == -1) {
                                tp.parent = currPoint;
                                tp.g = 1 + currPoint.g;
                                tp.h = posDist(tp, destPoint);
                                tp.f = tp.h + tp.g;
                                tp.state = 0;
                                addArrSort(openList, tp, compPointF);
                            } else {
                                var g = 1 + currPoint.g;
                                if (g < tp.g) {
                                    tp.parent = currPoint;
                                    tp.g = g;
                                    tp.f = tp.g + tp.h;
                                    openList.sort(compPointF);
                                }
                            }
                        }
                    }
                }
            }

            return false;
        }

        var openList = [], closeList = [];

        start = pathArr[start.r][start.c];
        end = pathArr[end.r][end.c];

        addArrSort(openList, start, compPointF);

        var isFined = false;

        while (openList.length > 0) {
            var currPoint = openList.pop();
            currPoint.state = 1;
            closeList.push(currPoint);
            isFined = processCurrPoint(pathArr, openList, row, col, currPoint, end);
            if (isFined) {
                var farr = [],
                    tp = end.parent;
                farr.push(end);
                while (tp != null) {
                    farr.push(tp);
                    tp = tp.parent;
                }
                return farr;
            }
        }
        return null;
    }
};
