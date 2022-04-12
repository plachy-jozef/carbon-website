"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[13888],{28399:function(t,e,a){a.d(e,{Z:function(){return w}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),m=a(68636),p=a(75900),o=a.n(p);var g=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var s=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:m}=a||l,p=`${r}/edit/${m}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},c=a(56328),u=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,m=new RegExp(`${l}/?(#.*)?$`),p=a.replace(m,e);return n.createElement("li",{key:t,className:o()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var N=k,h=a(17680),b=a(75387),y=a(50041);var A=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=t=>{let{pageContext:e,children:a,location:l,Title:p}=t;const{frontmatter:o={},relativePagePath:u,titleType:k}=e,{tabs:y,title:w,theme:C,description:f,keywords:E,date:v}=o,{interiorTheme:x}=(0,b.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),T=P?l.pathname.replace(P,""):l.pathname,B=y?T.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",S=C||x;return n.createElement(m.Z,{tabs:y,homepage:!1,theme:S,pageTitle:w,pageDescription:f,pageKeywords:E,titleType:k},n.createElement(g,{title:p?n.createElement(p,null):w,label:"label",tabs:y,theme:S}),y&&n.createElement(N,{title:w,slug:T,tabs:y,currentTab:B}),n.createElement(h.Z,{padded:!0},a,n.createElement(s,{relativePagePath:u}),n.createElement(A,{date:v})),n.createElement(c.Z,{pageContext:e,location:l,slug:T,tabs:y,currentTab:B}),n.createElement(d.Z,null))}},84801:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return u}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},p=m("Row"),o=m("Column"),g=m("Caption"),s={_frontmatter:d},c=r.Z;function u(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(c,Object.assign({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("p",null,"The UI Shell can be customized to use any of the four IBM themes by applying an\ninline theme to the shell zone."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Panel"),(0,l.kt)("td",{parentName:"tr",align:null},"background color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-left"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Header action"),(0,l.kt)("td",{parentName:"tr",align:null},"border-left, border-right"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle"))))),(0,l.kt)(p,{mdxType:"Row"},(0,l.kt)(o,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVQ4y62TzYrbMBSFNWaguxib6F5d2caOqZMybYIxSVbZza59kG6KnyCP2WVr9wWyKaGO/KdBJi7TzGSmixEcBEJ8HJ17xKqqYpvNhtm2zYQQDABeFCIO94yIiHHOWZZlrCxLprVm7HQ63W2322QymSRCiAQArgoR/5G5P51OkyzLFmVZRlrrG1bXdbXb7ZRt24qIFCJe04lzfiSiYxiGxyiKBhHR7/V63RRF8V1r/Y41TdPnef6VMXYfRdEXKeXnC5mzeyL65nmeJiIthBh2KaV2XVevVitdFMWvAdj3faW1lnmeM7NMLo815sU5T+I4boMg6AGgQ8ROCNE5jtMsl0sD/DEC28Ph8MkEut/vb4nIeiwp5a0JHgCyOI67IAg0APSIODh1HKc7A3+OwD9Kqfd1XZvn37CLFQSBZYCc83SxWHRhGGrO+YvAVil11zQNa9vWugT6vm+ZuhjgfD7/L2CllErODp8APc+zTPcQMQ3DsPN9XyNiPw7Gdd3uPJS/wFop9cEAn3M4AgEgnc1mA/C1DAfgWz/56lDMpM/fLDU1MaDXHHZKqY/XHAohrHMnU9M/ABgyNPtzwAcTnF+pOCPZZwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"UI shell right panel example.",title:"UI shell right panel example.",src:"/static/705697735daaeb067d81262120727ed8/3cbba/right-panel-style-1.png",srcSet:["/static/705697735daaeb067d81262120727ed8/7fc1e/right-panel-style-1.png 288w","/static/705697735daaeb067d81262120727ed8/a5df1/right-panel-style-1.png 576w","/static/705697735daaeb067d81262120727ed8/3cbba/right-panel-style-1.png 1152w","/static/705697735daaeb067d81262120727ed8/392b1/right-panel-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)(g,{mdxType:"Caption"},"UI shell switcher example"))),(0,l.kt)("h3",null,"Item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"background color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-hover"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"background color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Selected"),(0,l.kt)("td",{parentName:"tr",align:null},"background color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-selected"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"SemiBold / 600"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$heading-compact-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"The panel spans the full height of the browser and is fixed to the right edge of\nthe window."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px/rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Panel"),(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"256 / 16"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding left, padding right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Header action"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 8"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},"20 / 1.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC30lEQVQoz03S3UtTYRzA8Z91Vy1cezk7O4875+y4o0f34kRnZSWVUmIZvWCBFlkr6UKNCnpViUwqzyiplhB1GTGyKCuIRBx1Lbb00j+gF2Zzs23OnV8800kHfpybHx++PM8DiAh0YrEYuFwu0Ol0YLfbQRTF3DgcDhgZGSmgO+FwGOhX7HKBq6YGnD4flLjdwIsilLBWKLPZAFbAwrm5uRsej+eOTqe7zfP8AM/z/YIgBCRJOhwKheiOd2JiIgAA/bwkDTgUZUAqLe2XZFm1i2KJbLOBLAgFeVDQNE0LBoPIMAyyLItWqzU3PM+HhoeH6Y7/18+f2NXXh86GBqyor0fXzp1Y2dSEdd3dR5pO+2Fva9uaHBiNRm2I+GN2dlYjhKSNRuMiwzBJs9mMhJCng4OD8CcWa0NE/Dg5mbTa7YsWll00GQ2p4spKPPrwUeOe27dgW3fnmvz5UfD31NQUchyXNZlMtDRDawkhzwOBAMQTieMUHPn0OSNyPPIGs0Y26pcUxYlnL/YeqOq7Asq59lWQR8RoJBKhwCq4UpgHT1LwTfhLpqxmCyoeryaXO5e8u+vxWODBvpabt6D5/IVlcH5+XkTEP/+B2n+FzyiYWFg4lSv88jVTvmuXVrZ1q1bi82Uq9+/Hg0+CzSdUFVquXlsFBVr4LfINOUK0lcKlfKGqqhCPx9sp+HJ8PGtgGDTp9ajfsCErKAoeunu3seHyZaj1+9fmwHg8bkfExVwhRyiUtTBM2sIwaCsqejY0NASJRKKDgi/Gxv4WMkyGpZdiMKSkCg8eUtW9jdevQ11Hx3JhKpnUIWLLTOT75mILqa4mjm07ipQ6hRNqvVKp9OHdKKTSaRkRj95/P+o1i6KXWK0ei9Holny+qu3qvU21vT1Q3dW5/LCTyWTuPzM9DTJrg/UWAwCzDkQrAbddhrevXhek0+nczodwGEwsCxzHAWMygexyw6XHQWjt6YF9Z87CP1wkjY8deQ7cAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"UI shell right panel example.",title:"UI shell right panel example.",src:"/static/c401617e662e7710e7c016684d7ca34a/3cbba/right-panel-style-2.png",srcSet:["/static/c401617e662e7710e7c016684d7ca34a/7fc1e/right-panel-style-2.png 288w","/static/c401617e662e7710e7c016684d7ca34a/a5df1/right-panel-style-2.png 576w","/static/c401617e662e7710e7c016684d7ca34a/3cbba/right-panel-style-2.png 1152w","/static/c401617e662e7710e7c016684d7ca34a/0b124/right-panel-style-2.png 1728w","/static/c401617e662e7710e7c016684d7ca34a/99571/right-panel-style-2.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)(g,{mdxType:"Caption"},"Structure and spacing measurements for right panel | px | rem."))}u.isMDXComponent=!0}}]);