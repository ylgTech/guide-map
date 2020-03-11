# 途解中南

> 用于帮助新生寻找校园地点的地图小程序



## Build Setup

```bash
# 克隆项目
git clone https://github.com/yunlugutechnicaldepartment/guide-map.git

# 进入项目目录
cd guide-map

# 安装依赖
npm install

# 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org
```

- 微信开发工具 -> 工具 -> 构建npm

- 微信开发工具 -> 详情 -> 本地设置 -> 使用npm模块

`vant`组件库：[使用详情](https://youzan.github.io/vant-weapp/#/intro)



## 小程序

<img src="qr-code.png" alt="qr-code" style="zoom: 50%;" />

## 目录结构

```bash
├── data                       # 页面数据
│   └── list.js                # 地点信息
├── img                        # 图片资源
├── pages                      # 页面代码
│   ├── index                  # 小程序首页页面
│   ├── home                   # 地图页面
│   └── test                   # 测试页面
├── .gitignore                 # git忽略文件
├── app.js                     # 全局js
├── app.json                   # 小程序页面配置
├── app.wxss                   # 全局样式
├── package.json               # npm 配置
├── project-lock.json          # 项目配置文件
├── project.config.json        # 项目配置文件
└── sitemap.json               # sitemap.json
```



## License

MIT license.

Copyright (c) 2020-present yunlugutechnicaldepartment