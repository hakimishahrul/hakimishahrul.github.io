(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{20:function(e,s,t){},23:function(e,s,t){},37:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(11),i=t.n(a),n=(t(20),t(8)),r=t(12),l=t.n(r),j=(t(23),t(13)),d=t(4),o=t(1);class h extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,c=this.props.data.description;return Object(o.jsxs)("header",{id:"home",children:[Object(o.jsx)(j.a,{type:"circle",bg:!0}),Object(o.jsxs)("nav",{id:"nav-wrap",children:[Object(o.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(o.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(o.jsxs)("ul",{id:"nav",className:"nav",children:[Object(o.jsx)("li",{className:"current",children:Object(o.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(o.jsx)("div",{className:"row banner",children:Object(o.jsxs)("div",{className:"banner-text",children:[Object(o.jsx)(d.a,{bottom:!0,children:Object(o.jsx)("h1",{className:"responsive-headline",children:t})}),Object(o.jsx)(d.a,{bottom:!0,duration:1200,children:Object(o.jsxs)("h3",{children:[c,"."]})}),Object(o.jsx)("hr",{}),Object(o.jsx)(d.a,{bottom:!0,duration:2e3,children:Object(o.jsxs)("ul",{className:"social",children:[Object(o.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(o.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(o.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(o.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(o.jsx)("p",{className:"scrolldown",children:Object(o.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(o.jsx)("i",{className:"icon-down-circle"})})})]})}}var b=h;class m extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.social.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("i",{className:e.className})})},e.name)}));return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d.a,{bottom:!0,children:Object(o.jsxs)("div",{className:"twelve columns",children:[Object(o.jsx)("ul",{className:"social-links",children:e}),Object(o.jsxs)("ul",{className:"copyright",children:[Object(o.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(o.jsxs)("li",{children:["Design by"," ",Object(o.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(o.jsx)("div",{id:"go-top",children:Object(o.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(o.jsx)("i",{className:"icon-up-open"})})})]})})}}var x=m;class O extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(o.jsx)("section",{id:"about",children:Object(o.jsx)(d.a,{duration:1e3,children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"three columns",children:Object(o.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(o.jsxs)("div",{className:"nine columns main-col",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("p",{children:t}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"columns contact-details",children:[Object(o.jsx)("h2",{children:"Contact Details"}),Object(o.jsxs)("p",{className:"address",children:[Object(o.jsx)("span",{children:e}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[c,Object(o.jsx)("br",{}),a," ",i,", ",n]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:r}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:l})]})]}),Object(o.jsx)("div",{className:"columns download",children:Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:j,className:"button",children:[Object(o.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}var p=O;class u extends c.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){if(!this.props.data)return null;const e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.school}),Object(o.jsxs)("p",{className:"info",children:[e.degree," ",Object(o.jsx)("span",{children:"\u2022"}),Object(o.jsx)("em",{className:"date",children:e.graduated})]}),Object(o.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.company}),Object(o.jsxs)("p",{className:"info",children:[e.title,Object(o.jsx)("span",{children:"\u2022"})," ",Object(o.jsx)("em",{className:"date",children:e.years})]}),Object(o.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((e=>{const s=this.getRandomColor(),t="bar-expand "+e.name.toLowerCase(),c=e.level;return Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{style:{width:c,backgroundColor:s},className:t}),Object(o.jsx)("em",{children:e.name})]},e.name)}));return Object(o.jsxs)("section",{id:"resume",children:[Object(o.jsx)(d.b,{left:!0,duration:1300,children:Object(o.jsxs)("div",{className:"row education",children:[Object(o.jsx)("div",{className:"three columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Education"})})}),Object(o.jsx)("div",{className:"nine columns main-col",children:Object(o.jsx)("div",{className:"row item",children:Object(o.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(o.jsx)(d.b,{left:!0,duration:1300,children:Object(o.jsxs)("div",{className:"row work",children:[Object(o.jsx)("div",{className:"three columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Work"})})}),Object(o.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(o.jsx)(d.b,{left:!0,duration:1300,children:Object(o.jsxs)("div",{className:"row skill",children:[Object(o.jsx)("div",{className:"three columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Skills"})})}),Object(o.jsxs)("div",{className:"nine columns main-col",children:[Object(o.jsx)("p",{children:e}),Object(o.jsx)("div",{className:"bars",children:Object(o.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}var N=u;class v extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(o.jsxs)("section",{id:"contact",children:[Object(o.jsx)(d.a,{bottom:!0,duration:1e3,children:Object(o.jsxs)("div",{className:"row section-head",children:[Object(o.jsx)("div",{className:"two columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Get In Touch."})})}),Object(o.jsx)("div",{className:"ten columns",children:Object(o.jsx)("p",{className:"lead",children:n})})]})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d.b,{left:!0,duration:1e3,children:Object(o.jsxs)("div",{className:"eight columns",children:[Object(o.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(o.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"submit",children:"Submit"}),Object(o.jsx)("span",{id:"image-loader",children:Object(o.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(o.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(o.jsxs)("div",{id:"message-success",children:[Object(o.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(o.jsx)("br",{})]})]})}),Object(o.jsx)(d.b,{right:!0,duration:1e3,children:Object(o.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(o.jsxs)("div",{className:"widget widget_contact",children:[Object(o.jsx)("h4",{children:"Address and Phone"}),Object(o.jsxs)("p",{className:"address",children:[e,Object(o.jsx)("br",{}),s," ",Object(o.jsx)("br",{}),t,", ",c," ",a,Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:i})]})]}),Object(o.jsxs)("div",{className:"widget widget_tweets",children:[Object(o.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(o.jsxs)("ul",{id:"twitter",children:[Object(o.jsxs)("li",{children:[Object(o.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(o.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(o.jsx)("b",{children:Object(o.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(o.jsxs)("li",{children:[Object(o.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(o.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(o.jsx)("b",{children:Object(o.jsx)("a",{href:"./",children:"3 Days Ago"})})]})]})]})]})})]})]})}}var f=v,g=t(15),w=t.n(g);let C=0;class y extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.projects.map((function(e){let s="images/portfolio/"+e.image;return Object(o.jsx)("div",{className:"columns portfolio-item",children:Object(o.jsxs)("div",{className:"item-wrap",children:[Object(o.jsx)(w.a,{alt:e.title,src:s}),Object(o.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},C++)}));return Object(o.jsx)("section",{id:"portfolio",children:Object(o.jsx)(d.a,{left:!0,duration:1e3,distance:"40px",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"twelve columns collapsed",children:[Object(o.jsx)("h1",{children:"Check Out Some of My Works."}),Object(o.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}var k=y;var S=()=>{const[e,s]=Object(c.useState)({});Object(c.useEffect)((()=>{n.a.initialize("UA-110570651-1"),n.a.pageview(window.location.pathname),t()}),[]);const t=()=>{l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){s(e)},error:function(e,s,t){console.log(t),alert(t)}})};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{data:e.main}),Object(o.jsx)(p,{data:e.main}),Object(o.jsx)(N,{data:e.resume}),Object(o.jsx)(k,{data:e.portfolio}),Object(o.jsx)(f,{data:e.main}),Object(o.jsx)(x,{data:e.main})]})};var q=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((s=>{let{getCLS:t,getFID:c,getFCP:a,getLCP:i,getTTFB:n}=s;t(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(o.jsx)(S,{}),document.getElementById("root")),q()}},[[37,1,2]]]);
//# sourceMappingURL=main.a150d5af.chunk.js.map