// 游戏事件

// 获取事件相对于obj的位置信息
function getPosition(obj, e) {
    e.preventDefault();
    if (obj === undefined) return;

    var c = obj.getBoundingClientRect(), p = {};

    switch (e.type) {
        case 'mousedown':
        case 'mousemove':
        case 'mouseup':
        case 'click':
            p.x = e.clientX - c.left;
            p.y = e.clientY - c.top;
            break;
        case 'touchend':
        case 'touchmove':
            p.x = e.changedTouches[0].clientX - c.left;
            p.y = e.changedTouches[0].clientY - c.top;
            break;
        case 'touchstart':
            p.x = e.touches[0].clientX - c.left;
            p.y = e.touches[0].clientY - c.top;
            break;
        default :
            break;
    }

    return p;
}

// 向上移动
function moveUp(){

}

// 向下移动
function moveDown(){

}

// 向左移动
function moveLeft(){

}

// 向右移动
function moveRight(){

}
