"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[40459],{28399:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(67294),o=n(88650),l=n.n(o),r=n(1597),s=n(64905),c=n(68636),m=n(75900),i=n.n(m);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:c}=n||o,m=`${l}/edit/${c}${s}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=n(56328),g=n(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===o,c=new RegExp(`${o}/?(#.*)?$`),m=n.replace(c,t);return a.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component);var b=h,y=n(17680),k=n(75387),f=n(50041);var v=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:n,location:o,Title:m}=e;const{frontmatter:i={},relativePagePath:g,titleType:h}=t,{tabs:f,title:E,theme:T,description:x,keywords:C,date:w}=i,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:N}}=(0,r.useStaticQuery)("2456312558"),L=N?o.pathname.replace(N,""):o.pathname,D=f?L.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",M=T||P;return a.createElement(c.Z,{tabs:f,homepage:!1,theme:M,pageTitle:E,pageDescription:x,pageKeywords:C,titleType:h},a.createElement(d,{title:m?a.createElement(m,null):E,label:"label",tabs:f,theme:M}),f&&a.createElement(b,{title:E,slug:L,tabs:f,currentTab:D}),a.createElement(y.Z,{padded:!0},n,a.createElement(u,{relativePagePath:g}),a.createElement(v,{date:w})),a.createElement(p.Z,{pageContext:t,location:o,slug:L,tabs:f,currentTab:D}),a.createElement(s.Z,null))}},33608:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return k}});var a=n(45987),o=(n(67294),n(64983)),l=n(28399);const r=["components"],s={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=c("PageDescription"),i=c("Row"),d=c("Column"),u=c("ResourceCard"),p=c("MdxIcon"),g=c("ComponentDemo"),h=c("ComponentVariant"),b={_frontmatter:s},y=l.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,o.kt)(y,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the link component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(i,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-link--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-link--basic",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvlink--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"vue",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-link--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(g,{components:[{id:"link",label:"Link"}],mdxType:"ComponentDemo"},(0,o.kt)(h,{id:"link",knobs:{Link:["disabled","inline"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-link--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-link--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvlink--a",Vanilla:"https://the-carbon-components.netlify.com/?nav=link","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-link--default"},mdxType:"ComponentVariant"},'\n  <Link href="#">Link</Link>\n  ')))}k.isMDXComponent=!0}}]);