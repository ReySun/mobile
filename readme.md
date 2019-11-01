#### 项目初衷
- 展示移动端作品面试用，对京东商城并无恶意「我经常上京东😂」，内部图片均来自京东下载，如需使用图片或者其他京东版权信息，请征求京东意见。
- 采用`原生+webpack+ejs`代替以前`express+ejs`的方式开发页面 

#### 亮点
- 手动封装类似jq对选择器，可以进行简单对链式操作，未兼容ie，待优化迭代
- 采用`webpack`+`typescript`+`less`搭建原生开发环境
- 展示京东移动端首页，并做了简单的交互操作
- 布局采用的技术：`rem`+`float`+`flex`

#### 关于项目配置
- `postcss`+`autoprefixer`自动添加浏览器兼容性css前缀
- 可以ts/js混用
- 可以在html中直接引入图片
- 编译压缩html/css/js
- 提取公共html，可以用ejs的include功能
- 支持多页面公共ts/less自动导入，见`config.routes.js`

#### 特殊说明
- 实际项目中可能还会配置更多，比如字体，跨域，service worker，webpack缓存
- 团队合作的话还需要配置.editorconfig等

#### 开发环境
```bash
# 安装依赖包
yarn
# npm i

# 启动
npm run dev
```

#### 编译压缩
```bash
npm run build
# 运行之后查看build文件夹
```
#### 目录结构
```bash
|____src
| |____util               # 工具ts文件夹
| |____components         # 公共html，类似于组件化
| |____common             # 公共ts，如引入公共less，浏览器补丁文件等
| |____home               # 页面1，包含html和ts
| |____list               # 页面2，包含html和ts
| |____webportal          # 页面3，包含html和ts
| |____cart               # 页面4，包含html和ts
| |____login              # 页面5，包含html和ts
| |____assets             # 静态文件夹，包含样式、图片以及字体
| | |____images
| | |____fonts
| | |____style
| | | |____home            # 页面1的less
| | | |____common          # 公共less，供其他页面引入
| | | |____list            # 页面2的less
| | | |____webportal       # 页面3的less
| | | |____cart            # 页面4的less
| | | |____login           # 页面5的less
| |____config.routes.js    # 路由配置
```