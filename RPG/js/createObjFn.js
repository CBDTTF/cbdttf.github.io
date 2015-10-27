// 对象创建函数

// 英雄函数构造器
function hero(argObj) {
    this.i = argObj.i;
    this.j = argObj.j;
    this.x = argObj.x;
    this.y = argObj.y;
    this.index = argObj.index;
    this.w = argObj.w;
    this.h = argObj.h;
    this.hasAni = argObj.aniArray.length;
    this.aniArray = argObj.aniArray;
    this.type = argObj.type;

    // 主角私有变量
    this.currentMap = argObj.currentMap;
    this.life = argObj.life;
    this.level = argObj.level;
    this.attack = argObj.attack;
    this.defense = argObj.defense;
    this.money = argObj.money;
    this.exp = argObj.exp;
    // 钥匙的数量
    this.key1 = argObj.key1;
    this.key2 = argObj.key2;
    this.key3 = argObj.key3;
}

hero.prototype = {
    draw: function (cxt, sprit) {
        // 绘制主角
        cxt.clearRect(x, y, w, h);
        cxt.drawImage(sprit, this.x, this.y, this.w, this.h, x, y, w, h);
    },
    update: function () {
        // 对主角的状态进行更新
    },
    die: function () {
        // 对死亡做处理
    }
};

// 怪物函数构造器
function monster(argObj) {
    this.i = argObj.i;
    this.j = argObj.j;
    this.x = argObj.x;
    this.y = argObj.y;
    this.index = argObj.index;
    this.w = argObj.w;
    this.h = argObj.h;
    this.hasAni = argObj.aniArray.length;
    this.aniArray = argObj.aniArray;
    this.type = argObj.type;

    // 怪物私有变量
    this.life = argObj.life;
    this.attack = argObj.attack;
    this.defense = argObj.defense;
    this.money = argObj.money;
    this.exp = argObj.exp;
}

monster.prototype = {
    draw: function (cxt, sprit) {
        // 绘制怪物
        cxt.clearRect(x, y, w, h);
        cxt.drawImage(sprit, this.x, this.y, this.w, this.h, x, y, w, h);
    },
    update: function () {
        // 对怪物的状态进行更新
    },
    die: function () {
        // 对死亡做处理
    }
};

// 道具函数构造器
function prop(argObj) {
    this.i = argObj.i;
    this.j = argObj.j;
    this.x = argObj.x;
    this.y = argObj.y;
    this.index = argObj.index;
    this.w = argObj.w;
    this.h = argObj.h;
    this.hasAni = argObj.aniArray.length;
    this.aniArray = argObj.aniArray;
    this.type = argObj.type;

    // 道具私有变量
    this[argObj.type] = argObj[argObj.type];
}

prop.prototype = {
    draw: function (cxt, sprit) {
        // 绘制
        cxt.clearRect(x, y, w, h);
        cxt.drawImage(sprit, this.x, this.y, this.w, this.h, x, y, w, h);
    },
    update: function () {
        // 对钥匙做处理
        if (this.type == 'key') {
            hero[this[this.type]] += 1;
        } else {
            hero[this.type] += this[this.type];
        }

    },
    die: function (hero) {

    }
};

// 静体函数构造器
function prop(argObj) {
    this.i = argObj.i;
    this.j = argObj.j;
    this.x = argObj.x;
    this.y = argObj.y;
    this.index = argObj.index;
    this.w = argObj.w;
    this.h = argObj.h;
    this.hasAni = argObj.aniArray.length;
    this.aniArray = argObj.aniArray;
    this.type = argObj.type;
}

prop.prototype = {
    draw: function (cxt, sprit) {
        // 绘制
        cxt.clearRect(x, y, w, h);
        cxt.drawImage(sprit, this.x, this.y, this.w, this.h, x, y, w, h);
    },
    update: function () {

    },
    die: function (hero) {

    }
};

function tipFn(tipObj) {
    this.r = tipObj.i;
    this.c = tipObj.j;
    this.startTime = +new Date();
//    this.endTime = 0;
    this.aniTime = tipObj.aniTime;
    this.img = tipObj.img;
    this.type = 'tip';
}
