(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{293:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#开篇"}},[s._v("开篇")])]),t("li",[t("a",{attrs:{href:"#停用mock服务"}},[s._v("停用mock服务")])]),t("li",[t("a",{attrs:{href:"#vue-config-js-配置"}},[s._v("vue.config.js 配置")])]),t("li",[t("a",{attrs:{href:"#config-index-js-配置"}},[s._v("config -> index.js 配置")])]),t("li",[t("a",{attrs:{href:"#axios-请求配置"}},[s._v("axios 请求配置")])]),t("li",[t("a",{attrs:{href:"#完结"}},[s._v("完结")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"开篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开篇","aria-hidden":"true"}},[s._v("#")]),s._v(" 开篇")]),s._v(" "),t("p",[s._v("使用 "),t("a",{attrs:{href:"https://github.com/iview/iview-admin",target:"_blank",rel:"noopener noreferrer"}},[s._v("iview-admin 2.0"),t("OutboundLink")],1),s._v(" 开发项目的时候，需要与服务端接口实时联调。由于本地运行vue项目，与接口服务通信就存在跨域问题。\n这里记录如何在客户端解决跨域axios请求，服务端不需要做处理的解决方法。")]),s._v(" "),t("h2",{attrs:{id:"停用mock服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停用mock服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 停用mock服务")]),s._v(" "),t("p",[s._v("在项目根目录的main.js 文件中修改：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要注释掉这里 开发环境调用mock 接口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/mock'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("这里的逻辑是 判断当前运行的环境如果是开发环境，则请求mock接口。我们可以注释掉，那么开发请求的axios接口则会访问实际配置的接口；后面继续操作，配置接口代理转发。")])]),s._v(" "),t("h2",{attrs:{id:"vue-config-js-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-config-js-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" vue.config.js 配置")]),s._v(" "),t("p",[s._v("在项目根目录vue.config.js 文件中修改：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 添加代理配置\ndevServer: {\n    proxy: {\n\n       // 这里/api/* 表示通配符所有/api/ 的url地址 指向代理的地址\n      '/api/*': {\n\n        // target 标记代理的服务地址 就是你的服务端地址\n        target: 'http://localhost',\n\n        // 这里重定义请求地址替换/api 为空白\n        pathRewrite: {\n          '^/api': ''\n        }\n      }\n    }\n  }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("这里的配置主要完成2点：")]),s._v(" "),t("ul",[t("li",[s._v("所有开发的请求url带/api/ 字串的转发到代理地址")]),s._v(" "),t("li",[s._v("所有url中的/api 字串替换为空")])]),s._v(" "),t("p",[t("code",[s._v("举个栗子")]),s._v("：")]),s._v(" "),t("blockquote",[t("p",[s._v("你要代理的服务地址是http://localhost;\n你的axios请求url为： /api/user/login ;\n你本地的开发服务接口为：http://localhost：8080;\n最终的请求地址会变成 http://localhost/user/login")])])]),s._v(" "),t("p",[s._v("代理的参数详细解释 参阅："),t("a",{attrs:{href:"https://webpack.js.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack dev-server"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://www.bing.com/search?q=proxy+table+webpack&qs=SC&pq=proxytable+webpack&sc=4-18&cvid=D618D5010AA047B082781CC5BFEB3750&FORM=QBRE&sp=1",target:"_blank",rel:"noopener noreferrer"}},[s._v("必应"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"config-index-js-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-index-js-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" config -> index.js 配置")]),s._v(" "),t("p",[s._v("在项目目录config中修改你开发的服务地址：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v(" baseUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    pro"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost/'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("原始项目这里是iview-admin2.0的默认配置，需要改成自己本机开发的地址。")])]),s._v(" "),t("h2",{attrs:{id:"axios-请求配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios-请求配置","aria-hidden":"true"}},[s._v("#")]),s._v(" axios 请求配置")]),s._v(" "),t("p",[s._v("以上配置完成之后，最后需要axios的请求地址需要统一加上/api/前缀。例如：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("return axios.request({\n    // 用户登录请求\n    url: '/api/login/doLogin',\n    headers: {\n      'Content-Type': 'text/plain'\n    },\n    data: JSON.stringify(jobj),\n    method: 'post'\n  })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("return axios.request({\n    // 注销登录\n    url: '/api/login/logout',\n    headers: {\n      'token': token\n    },\n    method: 'get'\n  })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("以上示例代码而已")])]),s._v(" "),t("h2",{attrs:{id:"完结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完结","aria-hidden":"true"}},[s._v("#")]),s._v(" 完结")])])}),[],!1,null,null,null);a.default=e.exports}}]);