// 对象描述索引表
var mappingList = {
    '0':{
        name: '地面',
        isSingle:true,
        aniArray:[],
        type: 'still'
    },
    '1':{
        name: '墙壁',
        isSingle:true,
        aniArray:[],
        type: 'still'
    },
    '2':{
        name: '楼梯-上',
        isSingle:true,
        aniArray:[],
        type: 'goUp'
    },
    '3':{
        name: '楼梯-下',
        isSingle:true,
        aniArray:[],
        type: 'goDown'
    },
    '4':{
        name: '主角',
        type: 'hero',
        life: 1000,
        attack: 10,
        defense: 10,
        money:0,
        exp:0,
        isSingle:true,
        aniArray:[]
    },
    '5':{
        name: '红钥匙',
        type: 'key',
        keyIndex: 'key3',
        isSingle:true,
        aniArray:[]
    },
    '6':{
        name: '黄钥匙',
        keyIndex: 'key1',
        type: 'key',
        isSingle:true,
        aniArray:[]
    },
    '7':{
        name: '蓝钥匙',
        keyIndex: 'key2',
        type: 'key',
        isSingle:true,
        aniArray:[]
    },
    '8':{
        name: '红药水',
        type: 'life',
        life: 200,
        isSingle:true,
        aniArray:[]
    },
    '9':{
        name: '蓝药水',
        type: 'life',
        life: 500,
        isSingle:true,
        aniArray:[]
    },
    '10':{
        name: '红宝石',
        type: 'defense',
        defense: 3,
        isSingle:true,
        aniArray:[]
    },
    '11':{
        name: '蓝宝石',
        type: 'defense',
        defense: 3,
        isSingle:true,
        aniArray:[]
    },
    '12':{
        name: '骷髅怪',
        type: 'monster',
        life: 110,
        attack: 25,
        defense: 5,
        money:5,
        exp:4,
        isSingle:true,
        aniArray:['12','12-1']
    },
    '13':{
        name: '骷髅小兵',
        type: 'monster',
        life: 150,
        attack: 40,
        defense: 20,
        money:8,
        exp:6,
        isSingle:true,
        aniArray:['13','13-1']
    }
};
