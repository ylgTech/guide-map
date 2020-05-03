//此js文件用于存储地图组件上的所有坐标点
//由home.js调用

//标题栏
var init = [{
    head: '发热门诊',
    varName: 'menzhen'
  },
  {
    head: '定点医院',
    varName: 'yiyuan'
  },
  // {
  //   head: '快递点',
  //   varName: 'kuaididian'
  // },
  // {
  //   head: '宿舍',
  //   varName: 'sushe'
  // },
  {
    head: '食堂',
    varName: 'shitang'
  },
  {
    head: '教学实验楼',
    varName: 'jiaoxuelou'
  },
  // {
  //   head: '打印店',
  //   varName: 'dayindian'
  // },
  // {
  //   head: '业务办理点',
  //   varName: 'yewu'
  // },
  // {
  //   head: '失物招领处',
  //   varName: 'shiwuzhaoling'
  // },
  {
    head: '体育场馆',
    varName: 'tiyuchangguan'
  },
  {
    head: '医疗点',
    varName: 'yiliaodian'
  },
  {
    head: '图书馆',
    varName: 'tushuguan'
  },
  // {
  //   head: '自习室',
  //   varName: 'zixishi'
  // },
  {
    head: '礼堂',
    varName: 'litang'
  },
  // {
  //   head: '其他',
  //   varName: 'qita'
  // }
]
// var sushe = [{
//   head: '宿舍',
//   content: [
//   ]
// }]
var shitang = [{
  head: '食堂',
  content: [{
      id: 'b1',
      name: '铁道校区一食堂',
      longitude: 112.994713,
      latitude: 28.141219,
      iconPath: '../../img/shitang.png',
      width: 27,
      height: 40,
    },
    {
      id: 'b2',
      name: '铁道校区二食堂',
      longitude: 112.993553,
      latitude: 28.139537,
      iconPath: '../../img/shitang.png',
      width: 27,
      height: 40,
    },
    {
      id: 'b3',
      name: '铁道校区四食堂',
      longitude: 112.992690,
      latitude: 28.138241,
      iconPath: '../../img/shitang.png',
      width: 27,
      height: 40,
    },
  ]
}]
var jiaoxuelou = [{
  head: '教学实验楼',
  content: [{
      id: 'c1',
      name: '建工楼',
      longitude: 112.993600,
      latitude: 28.141881,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c2',
      name: '世纪楼',
      longitude: 112.990471,
      latitude: 28.140062,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c3',
      name: '创业楼',
      longitude: 112.991710,
      latitude: 28.139821,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c4',
      name: '电子楼',
      longitude: 112.989490,
      latitude: 28.140181,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c5',
      name: '交通楼',
      longitude: 112.989434,
      latitude: 28.140634,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c6',
      name: '综合实验楼',
      longitude: 112.989510,
      latitude: 28.139491,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c7',
      name: '轨道交通安全实验室',
      longitude: 112.990570,
      latitude: 28.138681,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
    {
      id: 'c8',
      name: '高速铁路建造技术国家工程实验室',
      longitude: 112.990870,
      latitude: 28.135991,
      iconPath: '../../img/jiaoxuelou.png',
      width: 27,
      height: 40,
    },
  ]
}]
// var dayindian = [{
//   head: '打印店',
//   content: [
//   ]
// }]
// var kuaididian = [{
//   head: '快递点',
//   content: [
    
//   ]
// }]
// var yewu = [{
//   head: '业务办理点',
//   content: [
    
//   ]
// }]
// var shiwuzhaoling = [{
//   head: '失物招领处',
//   content: [
//   ]
// }]
var tiyuchangguan = [{
  head: '体育场馆',
  content: [{
      id: 'h1',
      name: '游泳场',
      longitude: 112.993400,
      latitude: 28.141091,
      iconPath: '../../img/tiyuchangguan.png',
      width: 27,
      height: 40,
    },
    {
      id: 'h2',
      name: '体育馆',
      longitude: 112.991770,
      latitude: 28.141201,
      iconPath: '../../img/tiyuchangguan.png',
      width: 27,
      height: 40,
    },
    {
      id: 'h3',
      name: '足球场',
      longitude: 112.990635,
      latitude: 28.141263,
      iconPath: '../../img/tiyuchangguan.png',
      width: 27,
      height: 40,
    },
    {
      id: 'h4',
      name: '篮球场',
      longitude: 112.991381,
      latitude: 28.141126,
      iconPath: '../../img/tiyuchangguan.png',
      width: 27,
      height: 40,
    },
    {
      id: 'h5',
      name: '体育场',
      longitude: 112.988151,
      latitude: 28.141254,
      iconPath: '../../img/tiyuchangguan.png',
      width: 27,
      height: 40,
    },
    
  ]
}]
var yiliaodian = [{
  head: '医疗点',
  content: [{
      id: 'i1',
      name: '校医院',
      longitude: 112.993167,
      latitude: 28.138496,
      iconPath: '../../img/yiliaodian.png',
      width: 27,
      height: 40,
    },
    
  ]
}]
var tushuguan = [{
  head: '图书馆',
  content: [{
      id: 'j1',
      name: '铁道学院图书馆',
      longitude: 112.990490,
      latitude: 28.139501,
      iconPath: '../../img/tushuguan.png',
      width: 27,
      height: 40,
    },
    
  ]
}]
// var zixishi = [{
//   head: '自习室',
//   content: [
//   ]
// }]
var litang = [{
  head: '礼堂',
  content: [{
      id: 'l1',
      name: '铁道学院礼堂',
      longitude: 112.994881,
      latitude: 28.141719,
      iconPath: '../../img/litang.png',
      width: 27,
      height: 40,
    },
    
  ]
}]
// var qita = [{
//   head: '其他',
//   content: [
//   ]
// }]

var yiyuan = [{
  head: '定点医院',
  content: [{
      id: 'n1',
      name: '长沙市公共卫生救治医院',
      longitude: 113.007619,
      latitude: 28.302902,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,

    },
    {
      id: 'n2',
      name: '长沙县第一人民医院',
      longitude: 113.288846,
      latitude: 28.397869,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,

    },
    {
      id: 'n3',
      name: '望城区人民医院',
      longitude: 112.813890,
      latitude: 28.372000,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,

    },
    {
      id: 'n4',
      name: '浏阳市人民医院',
      longitude: 113.630569,
      latitude: 28.139177,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,

    },
    {
      id: 'n5',
      name: '宁乡市人民医院',
      longitude: 112.546885,
      latitude: 28.266113,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,

    }
  ]
}]
var menzhen = [{
  head: '发热门诊',
  content: [{
      id: 'o1',
      name: '中南大学湘雅二医院',
      longitude: 112.993823,
      latitude: 28.186460,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o2',
      name: '湖南省人民医院(马王堆院区)',
      longitude: 113.029300,
      latitude: 28.204640,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o3',
      name: '长沙市中医医院(东院)',
      longitude: 113.009126,
      latitude: 28.193351,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o4',
      name: '湖南旺旺医院',
      longitude: 113.032330,
      latitude: 28.183135,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o5',
      name: '湖南省人民医院(天心阁院区)',
      longitude: 112.981815,
      latitude: 28.190463,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o6',
      name: '长沙市第三医院',
      longitude: 112.977770,
      latitude: 28.175727,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o7',
      name: '长沙融城医院',
      longitude: 112.985330,
      latitude: 28.017100,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o8',
      name: '中南大学湘雅三医院',
      longitude: 112.945534,
      latitude: 28.220068,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o9',
      name: '湖南省中医药研究院附属医院',
      longitude: 112.949342,
      latitude: 28.195530,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o10',
      name: '长沙市第四医院',
      longitude: 112.949825,
      latitude: 28.194280,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o11',
      name: '湖南航天医院',
      longitude: 112.902056,
      latitude: 28.206457,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o12',
      name: '长沙长好医院',
      longitude: 112.904789,
      latitude: 28.133094,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o13',
      name: '中南大学湘雅医院',
      longitude: 112.984940,
      latitude: 28.212003,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o14',
      name: '湖南省妇幼保健院',
      longitude: 112.983430,
      latitude: 28.208064,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o15',
      name: '湖南中医药大学第二附属医院',
      longitude: 112.980946,
      latitude: 28.203367,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o16',
      name: '长沙市第一医院',
      longitude: 112.981720,
      latitude: 28.204430,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o17',
      name: '湖南省脑科医院',
      longitude: 112.985971,
      latitude: 28.155176,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o18',
      name: '湖南省儿童医院',
      longitude: 112.988440,
      latitude: 28.173370,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o19',
      name: '湖南中医药大学第一附属医院',
      longitude: 112.995669,
      latitude: 28.165096,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o20',
      name: '长沙市中心医院',
      longitude: 112.998556,
      latitude: 28.142469,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o21',
      name: '长沙县第一人民医院',
      longitude: 113.288846,
      latitude: 28.397869,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o22',
      name: '长沙县第二人民医院',
      longitude: 113.110657,
      latitude: 28.182668,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o23',
      name: '长沙县星沙医院',
      longitude: 113.089140,
      latitude: 28.245880,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o24',
      name: '长沙县妇幼保健院',
      longitude: 113.126184,
      latitude: 28.244083,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o25',
      name: '长沙县中医院',
      longitude: 113.113890,
      latitude: 28.375020,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o26',
      name: '长沙市第八医院(本部)',
      longitude: 113.086649,
      latitude: 28.235420,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o27',
      name: '望城区人民医院',
      longitude: 112.813890,
      latitude: 28.372000,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o28',
      name: '望城区桥驿镇中心卫生院',
      longitude: 112.931990,
      latitude: 28.406270,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o29',
      name: '望城区白箬铺镇中心卫生院',
      longitude: 112.755610,
      latitude: 28.200930,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o30',
      name: '望城区茶亭镇中心卫生院',
      longitude: 112.925970,
      latitude: 28.494800,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o31',
      name: '望城区靖港镇中心卫生院',
      longitude: 112.739640,
      latitude: 28.450770,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o32',
      name: '浏阳市人民医院',
      longitude: 113.630569,
      latitude: 28.139177,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o33',
      name: '浏阳市中医医院',
      longitude: 113.628993,
      latitude: 28.142893,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o34',
      name: '浏阳市集里医院',
      longitude: 113.614472,
      latitude: 28.152790,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o35',
      name: '浏阳市妇幼保健院',
      longitude: 113.627185,
      latitude: 28.149315,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o36',
      name: '浏阳市精神病医院',
      longitude: 113.633040,
      latitude: 28.128740,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o37',
      name: '浏阳市官渡镇中心卫生院',
      longitude: 113.884350,
      latitude: 28.343140,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o38',
      name: '浏阳市古港镇中心卫生院',
      longitude: 113.753056,
      latitude: 28.278481,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o39',
      name: '浏阳市镇头镇中心卫生院',
      longitude: 113.333499,
      latitude: 28.009809,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o40',
      name: '浏阳市北盛镇中心卫生院',
      longitude: 113.412380,
      latitude: 28.260140,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o41',
      name: '浏阳市永安镇中心卫生院',
      longitude: 113.287872,
      latitude: 28.211427,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o42',
      name: '宁乡市人民医院',
      longitude: 112.546885,
      latitude: 28.266113,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o43',
      name: '宁乡市中医医院',
      longitude: 112.545090,
      latitude: 28.251370,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o44',
      name: '长沙南雅医院',
      longitude: 112.540562,
      latitude: 28.254549,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o45',
      name: '宁乡市妇幼保健院',
      longitude: 112.546760,
      latitude: 28.237900,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    },
    {
      id: 'o46',
      name: '宁乡县双凫铺中心卫生院',
      longitude: 112.290810,
      latitude: 28.133100,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    }
  ]
}]

//为数据的使用留好接口
module.exports = {
  init: init,
  // sushe: sushe,
  shitang: shitang,
  jiaoxuelou: jiaoxuelou,
  // dayindian: dayindian,
  // kuaididian: kuaididian,
  // yewu: yewu,
  // shiwuzhaoling: shiwuzhaoling,
  tiyuchangguan: tiyuchangguan,
  yiliaodian: yiliaodian,
  // zixishi: zixishi,
  tushuguan: tushuguan,
  litang: litang,
  // qita: qita,
  menzhen: menzhen,
  yiyuan: yiyuan
}