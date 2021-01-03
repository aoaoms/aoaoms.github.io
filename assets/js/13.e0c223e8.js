(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{513:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目标"}},[s._v("目标")])]),a("li",[a("a",{attrs:{href:"#注册github账号"}},[s._v("注册github账号")])]),a("li",[a("a",{attrs:{href:"#使用vuepress"}},[s._v("使用vuepress")])]),a("li",[a("a",{attrs:{href:"#github新建仓库"}},[s._v("github新建仓库")])]),a("li",[a("a",{attrs:{href:"#配置vuepress"}},[s._v("配置vuepress")]),a("ul",[a("li",[a("a",{attrs:{href:"#package-json"}},[s._v("package.json")])]),a("li",[a("a",{attrs:{href:"#config-js"}},[s._v("config.js")])]),a("li",[a("a",{attrs:{href:"#新增本地仓库文件夹"}},[s._v("新增本地仓库文件夹")])]),a("li",[a("a",{attrs:{href:"#新增部署文件"}},[s._v("新增部署文件")])])])]),a("li",[a("a",{attrs:{href:"#github设置域名绑定"}},[s._v("github设置域名绑定")])]),a("li",[a("a",{attrs:{href:"#完成"}},[s._v("完成")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标","aria-hidden":"true"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("p",[s._v("通过浏览器访问 "),a("a",{attrs:{href:"https://blog.aoaoms.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("blog.aoaoms.com"),a("OutboundLink")],1),s._v(" 个人域名（一级或二级）可以直接跳转到github page页面。")]),s._v(" "),a("h2",{attrs:{id:"注册github账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册github账号","aria-hidden":"true"}},[s._v("#")]),s._v(" 注册github账号")]),s._v(" "),a("p",[s._v("需要注册github账号, 自行去 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1),s._v(" 官网注册就好。")]),s._v(" "),a("h2",{attrs:{id:"使用vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用vuepress")]),s._v(" "),a("p",[s._v("使用VuePress-theme-reco 的主题\n我这里使用 "),a("a",{attrs:{href:"https://github.com/aoaoms/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress-theme-reco"),a("OutboundLink")],1),s._v(" 定制的主题，可以访问并操作获取最新版本到本地编辑；过程参见其部署手册，不再赘述。")]),s._v(" "),a("h2",{attrs:{id:"github新建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github新建仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" github新建仓库")]),s._v(" "),a("p",[s._v("新建仓库名时，必须按照特定规范创建；才能达到想要的效果。\n例如：你的github用户名是 aoaoms ，那么你创建的仓库名应该写为 "),a("a",{attrs:{href:"aoaoms.github.io"}},[s._v("aoaoms.github.io")]),s._v(" 。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/aoaoms/public-ansets/master/blog/img/githubRepositorName.png",alt:"仓库名称"}})]),s._v(" "),a("blockquote",[a("p",[s._v("为什么要这样设置？")])]),s._v(" "),a("p",[s._v("因为github page服务针对个人只能有一个可访问首页绑定的域名；并且必须是 "),a("code",[s._v("master")]),s._v(" 分支。官方说明如下：")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Source\nYour GitHub Pages site is currently being built from the master branch. Learn more.\n\nUser pages must be built from the master branch.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("Learn more"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"配置vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置vuepress","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置vuepress")]),s._v(" "),a("h3",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),a("p",[s._v("此文件存在于项目根目录下，打开编辑：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aoaobaba"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里的scripts 指定允许npm代理执行的指令代码 即在执行：npm run docs:dev 的时候，")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实际上会执行`vuepress dev` docs ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里定义了2个npm 执行指令，分别是开发模式构建docs、生产构建docs")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此节点包括项目的依赖包")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vuepress/plugin-medium-zoom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gh-pages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-flowchart"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.4.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-theme-reco"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.8-alpha.3"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-js","aria-hidden":"true"}},[s._v("#")]),s._v(" config.js")]),s._v(" "),a("p",[s._v("此文件存在于 \\docs.vuepress 目录下,可以对vuepress项目属性进行配置。这里我更改项目输出的默认目录（个人习惯而已）：")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("注意")]),s._v(" "),a("a",{attrs:{href:"https://github.com/aoaoms/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress-theme-reco"),a("OutboundLink")],1),s._v(" 初始设置输出文件在public 一样可以使用，不打井~")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 这里定义输出构建目录为项目根目录下的dist文件夹\n"dest": "./dist",\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[a("font",{attrs:{color:"red"}},[s._v("重要")])],1),s._v("：网上很多文章说了要设置base属性；这里完全没有必要，设置了反而会有其他问题。如后续在github 中设置page时无法绑定自己的域名到你设置的目录；届时可能仓库的访问地址变成blog.aoaoms.io/blog/ 啦，后续绑定域名就不好处理。就使用vuepress 默认base设置，使用项目根目录。")]),s._v(" "),a("h3",{attrs:{id:"新增本地仓库文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增本地仓库文件夹","aria-hidden":"true"}},[s._v("#")]),s._v(" 新增本地仓库文件夹")]),s._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"red"}},[s._v("重点")])],1),s._v("：这里我在项目根目录下分别创建了2个文件夹 dist 和 blog ;文件夹作用如下：\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/aoaoms/public-ansets/master/blog/img/dir.png",alt:"目录"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("dist")]),s._v(" "),a("p",[a("code",[s._v("用途")]),s._v("：存放vuepress build构建后的输出文件，因为每次构建都会清空文件夹。")])]),s._v(" "),a("li",[a("p",[s._v("blog")]),s._v(" "),a("p",[a("code",[s._v("用途")]),s._v("：这里存放本地git仓库内容；每次构建完成后，需要从dist 文件夹里面拷贝最新的文件再提交git.")])])]),s._v(" "),a("h3",{attrs:{id:"新增部署文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增部署文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 新增部署文件")]),s._v(" "),a("p",[s._v("可以在项目根目录下创一个sh类型文件，用于shell指令自动部署git。我这里创建了 deploy.sh 文件，如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("deploy.sh 内容如下：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("# 确保脚本抛出遇到的错误\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e\n\n# npm vuepress build doc 执行"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json中定义的scripts 执行指令\nnpm run docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("build\n\n# 拷贝build文件 到blog 目录 当前目录时blog 以下使用相对路径\ncp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("aoaobaba"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("blog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* F:/aoaobaba-blog/blog\n\n# 进入git仓库文件夹 初始化仓库\ncd ./blog\n\n#初始化仓库\ngit init\n\n#提交所有被修改和新增的文件到缓存区\ngit add .\n\n# 创建 提交描述\ngit commit -m 'deploy'\n\n# 如果发布到\ngit push -f git@github.com:aoaoms/aoaoms.github.io.git master\n\ncd -\n")])])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("配置好部署sh后，打开git bash在项目目录执行sh deploy.sh 。等待运行完成就好了。")]),s._v(" "),a("p",[s._v("经过以上部署文件的配置后，当你在git bash里面执行sh的时候，会依次按指令执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("设置执行错误抛出\n执行npm run docs:build   -- 这个是在package.json里面配置过的, 记得吗？实际执行`vuepress build docs` 指令；\n执行文件拷贝    -- 这里在执行第二步后，把构建的最新文件拷贝到指定的本地仓库目录中；\n进入仓库文件夹\ngit init  -- 初始化git仓库\ngit add all  -- 添加被修改和新增的文件到缓冲区\ngit commit -m    -- 设置本次提交代码的描述\ngit push -f      -- 提交最新代码到远程仓库的master分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"github设置域名绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github设置域名绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" github设置域名绑定")]),s._v(" "),a("p",[s._v("在github 打开你的仓库，进入setting设置绑定个人域名：\n"),a("img",{attrs:{src:"https://github.com/aoaoms/public-ansets/raw/master/blog/img/CustomDS.png",alt:"绑定域名"}})]),s._v(" "),a("p",[s._v("绑定域名操作后，会在仓库根目录创建一个CNAME文件，这个是用于绑定解析域名的。每次提交代码到master分支后，可能会删除此文件，导致需要重新操作绑定域名地址。这个时候，可以在CNAME生成好后，复制到本地仓库blog 目录中；进而在后续每次提交的时候，都会再次提交给master分支。")]),s._v(" "),a("h2",{attrs:{id:"完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成","aria-hidden":"true"}},[s._v("#")]),s._v(" 完成")]),s._v(" "),a("p",[s._v("设置完成后，打开自己的网站吧！"),a("a",{attrs:{href:"https://www.aoaoms.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("aoaobaba的博客"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=e.exports}}]);