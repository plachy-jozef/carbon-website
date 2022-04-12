"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[15256],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(67294),n=a(88650),i=a.n(n),l=a(1597),s=a(64905),o=a(68636),c=a(75900),u=a.n(c);var d=e=>{let{title:t,theme:a,tabs:n=[]}=e;return r.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:s,branch:o}=a||n,c=`${i}/edit/${o}${s}/src/pages${t}`;return i?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),h=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),s=t===n,o=new RegExp(`${n}/?(#.*)?$`),c=a.replace(o,t);return r.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},r.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(r.Component);var k=b,w=a(17680),g=a(75387),y=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:u={},relativePagePath:h,titleType:b}=t,{tabs:y,title:v,theme:N,description:C,keywords:A,date:T}=u,{interiorTheme:E}=(0,g.Z)(),{site:{pathPrefix:L}}=(0,l.useStaticQuery)("2456312558"),S=L?n.pathname.replace(L,""):n.pathname,x=y?S.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",P=N||E;return r.createElement(o.Z,{tabs:y,homepage:!1,theme:P,pageTitle:v,pageDescription:C,pageKeywords:A,titleType:b},r.createElement(d,{title:c?r.createElement(c,null):v,label:"label",tabs:y,theme:P}),y&&r.createElement(k,{title:v,slug:S,tabs:y,currentTab:x}),r.createElement(w.Z,{padded:!0},a,r.createElement(m,{relativePagePath:h}),r.createElement(f,{date:T})),r.createElement(p.Z,{pageContext:t,location:n,slug:S,tabs:y,currentTab:x}),r.createElement(s.Z,null))}},58732:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return w}});var r=a(45987),n=(a(67294),a(64983)),i=a(28399),l=a(41400);const s=["components"],o={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("PageDescription"),d=c("AnchorLinks"),m=c("AnchorLink"),p=c("Row"),h=c("Column"),b={_frontmatter:o},k=i.Z;function w(e){let{components:t}=e,a=(0,r.Z)(e,s);return(0,n.kt)(k,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The file uploader React Carbon component has been tested against the latest\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),"\nand violations have been identified as high priority issues. This document will\nbe updated when these accessibility issues are resolved.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"After the file uploader closes, focus should retain the user’s point of\nregard and return to the element that invoked it."),(0,n.kt)("li",{parentName:"ol"},"The file uploader button can be activated using both the ",(0,n.kt)("inlineCode",{parentName:"li"},"Space")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Enter"),"\nkey."),(0,n.kt)("li",{parentName:"ol"},"The file uploader button should have text or label that accurately describes\nthe action of the button.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_4_13"},"1.4.13 Content on Hover or Focus"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"},"1.4.13"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_1_2"},"2.1.2 No Keyboard Traps"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html"},"2.1.2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_3"},"2.4.3 Focus Order"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"2.4.3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_2_2"},"3.2.2 On Input"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/consistent-behavior-unpredictable-change.html"},"3.2.2"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the file uploader React Carbon Component.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(h,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.2 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- No violations")))))))}w.isMDXComponent=!0}}]);