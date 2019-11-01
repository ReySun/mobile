const { UrlResolved } = require('../config/util');
module.exports = [
  {
    filename: "index",
    templateUrl: UrlResolved('./src/home/index.ejs'), // 模板ejs
    scriptUrl: UrlResolved('./src/home/index.ts'), // 入口ts
    commonJs:[ // 公共ts
      UrlResolved('./src/common/index.ts'),
      UrlResolved('./src/common/polyfill.ts')
    ]
  },
  {
    filename: "list",
    templateUrl: UrlResolved('./src/list/index.ejs'),
    scriptUrl: UrlResolved('./src/list/index.ts'),
    commonJs:[
      UrlResolved('./src/common/index.ts'),
      UrlResolved('./src/common/polyfill.ts')
    ]
  },
  {
    filename: "login",
    templateUrl: UrlResolved('./src/login/index.ejs'),
    scriptUrl: UrlResolved('./src/login/index.ts'),
    commonJs:[
      UrlResolved('./src/common/index.ts'),
      UrlResolved('./src/common/polyfill.ts')
    ]
  },
  {
    filename: "cart",
    templateUrl: UrlResolved('./src/cart/index.ejs'),
    scriptUrl: UrlResolved('./src/cart/index.ts'),
    commonJs:[
      UrlResolved('./src/common/index.ts'),
      UrlResolved('./src/common/polyfill.ts')
    ]
  },
  {
    filename: "webportal",
    templateUrl: UrlResolved('./src/webportal/index.ejs'),
    scriptUrl: UrlResolved('./src/webportal/index.ts'),
    commonJs:[
      UrlResolved('./src/common/index.ts'),
      UrlResolved('./src/common/polyfill.ts')
    ]
  },
];
