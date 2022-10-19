(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{540:function(t,s,a){"use strict";a.r(s);var n=a(20),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"命令相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令相关"}},[t._v("#")]),t._v(" 命令相关")]),t._v(" "),a("h2",{attrs:{id:"常用git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用git命令"}},[t._v("#")]),t._v(" 常用git命令")]),t._v(" "),a("h3",{attrs:{id:"设置git用户和邮件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置git用户和邮件"}},[t._v("#")]),t._v(" 设置git用户和邮件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git 远程地址"')]),t._v("\n\ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("\n")])])]),a("h3",{attrs:{id:"提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交代码"}},[t._v("#")]),t._v(" 提交代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提交代码流程")]),t._v("\ngit add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是备注"')]),t._v("\n\ngit push origin master\n")])])]),a("h3",{attrs:{id:"创建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建本地分支")]),t._v("\ngit branch xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除本地分支")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除远程分支")]),t._v("\ngit push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//切换本地分支")]),t._v("\ngit checkout xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个分支，并切换")]),t._v("\ngit checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b xxx\n")])])]),a("h3",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("开发分支（dev）上的代码达到上线的标准后，要合并到 master 分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout dev\ngit pull\ngit checkout master\ngit marge dev\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master\n")])])]),a("h3",{attrs:{id:"tag命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag命令"}},[t._v("#")]),t._v(" tag命令")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打轻量标签")]),t._v("\ngit tag v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 打附加标签\n * -a 指定附加标签，-m指定附加信息\n*/")]),t._v("\ngit tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v0.1"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推送tag 到远程")]),t._v("\ngit push origin "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除本地tag")]),t._v("\ngit tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除远程tag")]),t._v("\ngit push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("refs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 列出已有tag")]),t._v("\ngit tag\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换tag")]),t._v("\ngit checkout "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n")])])]),a("h2",{attrs:{id:"其他资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他资源"}},[t._v("#")]),t._v(" 其他资源")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://registry.npmmirror.com/binary.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("node镜像服务器"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);