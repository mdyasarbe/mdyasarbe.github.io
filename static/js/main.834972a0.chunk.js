(this.webpackJsonpmdyasarbe=this.webpackJsonpmdyasarbe||[]).push([[0],{124:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":50,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},129:function(e,t,c){},475:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(42),i=c.n(n),r=(c(129),c(23)),l=c(24),j=c(26),d=c(25),b=c(18),o=c(17),h=(c(89),c(36)),x=c(19),O=c(478),p=c(479),u=c(480),g=c(31),m=c(32),y=c(0),A=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).handleType=function(){var e=["Programmer;","Engineer;","Web Developer;"],t=s.state,c=t.isDeleting,a=t.loopNum,n=t.text,i=t.typingSpeed,r=e[a],l=["gold","aqua","greenyellow"][a];s.setState({text:c?r.substring(0,n.length-1):r.substring(0,n.length+1),typingSpeed:c?100:30}),c||n!==r?c&&""===n&&s.setState({isDeleting:!1,loopNum:a===e.length-1?0:a+1,color:l}):setTimeout((function(){return s.setState({isDeleting:!0})}),500),setTimeout(s.handleType,i)},s.state={text:"",typingSpeed:100,isDeleting:!1,loopNum:0,color:"yellow"},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsxs)("h2",{children:["I'm ",Object(y.jsx)("span",{children:"{"})," ",Object(y.jsx)("span",{style:{color:this.state.color},children:this.state.text})," ",Object(y.jsx)("span",{children:"}"})," "]})})}}]),c}(a.a.Component),v=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={currentTab:"",location:""},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=window.location.pathname;e=e.substring(1,e.length).toLocaleLowerCase(),this.setState({currentTab:e}),console.log(e)}},{key:"onTabClick",value:function(e){this.setState({currentTab:e})}},{key:"render",value:function(){var e=this,t={},c={};return"/"===window.location.pathname?(t={display:"block"},c={display:"none"}):(t={display:"none"},c={display:"block"}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"home",style:t,children:[Object(y.jsx)("div",{className:"NavbarforMobile",children:Object(y.jsx)(h.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",children:Object(y.jsxs)(O.a,{children:[Object(y.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(y.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(y.jsx)(x.a,{className:"me-auto"}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("")},eventKey:"1",active:""===this.state.currentTab,as:b.b,to:"/",children:"Home"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("about")},eventKey:"2",active:"about"===this.state.currentTab,as:b.b,to:"/About",children:"About"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("education")},eventKey:"3",active:"education"===this.state.currentTab,as:b.b,to:"/Education",children:"Education"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("experience")},eventKey:"4",active:"experience"===this.state.currentTab,as:b.b,to:"/Experience",children:"Experience"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("contact")},eventKey:"5",active:"contact"===this.state.currentTab,as:b.b,to:"/Contact",children:"Contact"})]})]})]})})}),Object(y.jsx)("div",{className:"HomeMain",children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"heading",children:[Object(y.jsx)("h1",{style:{font:"sans-serif"},children:"Mohamad Yasar J"}),Object(y.jsx)(A,{})]}),Object(y.jsx)("div",{className:"NavbarforLargeDiplay",children:Object(y.jsx)(h.a,{collapseOnSelect:!0,expand:"sm",style:{backgroundColor:"#212123"},variant:"dark",children:Object(y.jsx)(h.a.Collapse,{style:{paddingLeft:"5%"},id:"responsive-navbar-nav",children:Object(y.jsxs)(x.a,{className:"justify-content-end",children:[Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("")},active:""===this.state.currentTab,as:b.b,to:"/",children:"Home"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("about")},active:"about"===this.state.currentTab,as:b.b,to:"/About",children:"About"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("education")},active:"education"===this.state.currentTab,as:b.b,to:"/Education",children:"Education"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("experience")},active:"experience"===this.state.currentTab,as:b.b,to:"/Experience",children:"Experience"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("contact")},active:"contact"===this.state.currentTab,as:b.b,to:"/Contact",children:"Contact"})]})})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{children:Object(y.jsx)("div",{className:"largetext heading",style:{textAlign:"left",textJustify:"center",paddingTop:"10px"},children:Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("a",{href:"https://www.hackerrank.com/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--hackerrank",children:Object(y.jsx)(g.a,{title:"HackerRank",icon:m.b,size:"3x"})}),Object(y.jsx)("a",{href:"https://github.com/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--github",children:Object(y.jsx)(g.a,{title:"Github",icon:m.a,size:"3x"})}),Object(y.jsx)("a",{href:"https://www.linkedin.com/in/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--linkedin",children:Object(y.jsx)(g.a,{title:"Linkedin",icon:m.d,size:"3x"})}),Object(y.jsx)("a",{href:"https://www.instagram.com/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--instagram",children:Object(y.jsx)(g.a,{title:"Instagram",icon:m.c,size:"3x"})})]})})})})]})})]}),Object(y.jsx)("div",{style:c,className:"main",children:Object(y.jsx)(h.a,{collapseOnSelect:!0,expand:"md",style:{backgroundColor:"#212123"},variant:"dark",children:Object(y.jsxs)(O.a,{children:[Object(y.jsx)(h.a.Brand,{style:{color:"white"},onClick:function(){return e.onTabClick("")},as:b.b,to:"",children:Object(y.jsx)("h2",{className:"NavbarName",style:{font:"YesterYear"},children:"Mohamad Yasar J"})}),Object(y.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(y.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(y.jsx)(x.a,{className:"me-auto"}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("")},eventKey:"1",active:""===this.state.currentTab,as:b.b,to:"/",children:"Home"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("about")},eventKey:"2",active:"about"===this.state.currentTab,as:b.b,to:"/About",children:"About"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("education")},eventKey:"3",active:"education"===this.state.currentTab,as:b.b,to:"/Education",children:"Education"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("experience")},eventKey:"4",active:"experience"===this.state.currentTab,as:b.b,to:"/Experience",children:"Experience"}),Object(y.jsx)(x.a.Link,{onClick:function(){return e.onTabClick("contact")},eventKey:"5",active:"contact"===this.state.currentTab,as:b.b,to:"/Contact",children:"Contact"})]})]})]})})})]})}}]),c}(a.a.Component),f=c(483),k=c(481),C=c(482),L=c.p+"static/media/angular.47530200.svg",T=c.p+"static/media/AuLogo.d1da1224.svg",w=c.p+"static/media/csharp.34f27bd2.svg",N=c.p+"static/media/coder.a23f0aa2.svg",I=c.p+"static/media/css3.64fa1d1c.svg",S=c.p+"static/media/Efset.60482759.svg",E=c.p+"static/media/firebase.adcc58a0.svg",F=c.p+"static/media/html5.a026abbb.svg",z=c.p+"static/media/bootstrap.99ff40c9.svg",H=c.p+"static/media/java.e09b59c6.svg",D=c.p+"static/media/javascript.fabe1e9b.svg",K=c.p+"static/media/nodejs.1261604a.svg",P=c.p+"static/media/react.9235e8f8.svg",M=(c.p,c.p+"static/media/database.d0d9839c.svg"),X=c.p+"static/media/mail.e1bc2ceb.svg",J=c.p+"static/media/social.44cb8d64.svg",R=c.p+"static/media/google.619b6909.png",W=c.p+"static/media/photoshop.17d3a9a4.png",Z=c.p+"static/media/cognizant.1e471144.png",q=L,V=T,U=w,B=N,Y=I,G=S,Q=E,_=F,$=z,ee=H,te=D,ce=K,se=P,ae=R,ne=W,ie=M,re=Z,le=J,je=X,de=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(O.a,{style:{paddingTop:"50px",paddingBottom:"50px"},children:[Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:4,children:Object(y.jsx)("img",{src:B,alt:"Profile",className:"profileImage"})}),Object(y.jsx)(u.a,{md:8,style:{backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px"},children:Object(y.jsxs)("div",{className:"largetext",style:{textAlign:"left",textJustify:"center"},children:[Object(y.jsx)("h5",{className:"resumeHeader",children:"ABOUT"}),Object(y.jsx)("p",{children:"An enthusiastic Engineer and aims to work in a dynamic environment, to get the best out of my skills which can be productive for the company as well as me and I would like to enhance myself by discharging my duties in a versatile manner"}),Object(y.jsxs)(p.a,{style:{paddingBottom:"10px"},children:[Object(y.jsxs)(u.a,{md:"auto",children:[" ",Object(y.jsxs)("p",{children:[" ",Object(y.jsx)(k.a,{color:"yellow",size:20})," ",Object(y.jsx)("b",{children:" Qualification"})," : B.E - Electrical and Electronic Engineer"]})]}),Object(y.jsxs)(u.a,{md:"auto",children:[" ",Object(y.jsxs)("p",{children:[" ",Object(y.jsx)(C.a,{color:"#69f0ae",size:20})," ",Object(y.jsx)("b",{children:"City "}),": Chennai, TN, India "]})]})," ",Object(y.jsx)("br",{})]})]})})]}),Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{children:Object(y.jsxs)("div",{className:"largetext",style:{textAlign:"left",textJustify:"center",paddingTop:"50px"},children:[Object(y.jsx)("h5",{className:"resumeHeader",children:"Skills and Interest"}),Object(y.jsx)("div",{style:{backgroundColor:"rgba(9, 30, 73,0.7)",paddingTop:"10px",borderRadius:"8px"},children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{lg:6,children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(y.jsxs)("p",{className:"html iconAlignCenter",children:[Object(y.jsx)("img",{title:"Html",alt:"Html",style:{width:"60px",height:"70px"},src:_}),Object(y.jsx)("span",{children:"HTML"})]}),Object(y.jsxs)("p",{className:"css iconAlignCenter",children:[Object(y.jsx)("img",{title:"CSS",alt:"CSS",style:{width:"60px",height:"70px"},src:Y}),Object(y.jsx)("span",{children:"Css3"})]}),Object(y.jsxs)("p",{className:"Bootstrap iconAlignCenter",children:[Object(y.jsx)("img",{title:"Bootstrap",alt:"Bootstrap",style:{width:"60px",height:"70px"},src:$}),Object(y.jsx)("span",{children:"Bootstrap"})]})]})}),Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(y.jsxs)("p",{className:"Angular iconAlignCenter",children:[Object(y.jsx)("img",{title:"Angular",alt:"Angular",style:{width:"60px",height:"70px"},src:q}),Object(y.jsx)("span",{children:"Angular"})]}),Object(y.jsxs)("p",{className:"React iconAlignCenter",children:[Object(y.jsx)("img",{title:"React",alt:"React",style:{width:"60px",height:"70px"},src:se}),Object(y.jsx)("span",{children:"React"})]}),Object(y.jsxs)("p",{className:"Csharp iconAlignCenter",children:[Object(y.jsx)("img",{title:"csharp",alt:"csharp",style:{width:"60px",height:"70px"},src:U}),Object(y.jsx)("span",{children:"C#"})]})]})})]})}),Object(y.jsx)(u.a,{lg:6,children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(y.jsxs)("p",{className:"Js iconAlignCenter",children:[Object(y.jsx)("img",{title:"javascript",alt:"javascript",style:{width:"60px",height:"70px"},src:te}),Object(y.jsx)("span",{children:"Js"})]}),Object(y.jsxs)("p",{className:"Java iconAlignCenter",children:[Object(y.jsx)("img",{title:"Java",alt:"Java",style:{width:"60px",height:"70px"},src:ee}),Object(y.jsx)("span",{children:"Java"})]}),Object(y.jsxs)("p",{className:"NodeJs iconAlignCenter",children:[Object(y.jsx)("img",{title:"nodejs",alt:"nodejs",style:{width:"60px",height:"70px"},src:ce}),Object(y.jsx)("span",{children:"NodeJs"})]})]})}),Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(y.jsxs)("p",{className:"Database iconAlignCenter",children:[Object(y.jsx)("img",{title:"database",alt:"database",style:{width:"60px",height:"70px"},src:ie}),Object(y.jsx)("span",{children:"SQL"})]}),Object(y.jsxs)("p",{className:"firebase iconAlignCenter",children:[Object(y.jsx)("img",{title:"firebase",alt:"firebase",style:{width:"60px",height:"70px"},src:Q}),Object(y.jsx)("span",{children:"Firebase"})]}),Object(y.jsxs)("p",{className:"Database iconAlignCenter",children:[Object(y.jsx)("img",{title:"photoshop",alt:"photoshop",style:{width:"60px",height:"70px"},src:ne}),Object(y.jsx)("span",{children:"Photoshop"})]})]})})]})})]})})]})})}),Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)("div",{className:"largetext",style:{textAlign:"left",textJustify:"center",paddingTop:"50px"},children:[Object(y.jsx)("h5",{className:"resumeHeader",children:"Social Media"}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("a",{href:"https://www.hackerrank.com/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--hackerrank",children:Object(y.jsx)(g.a,{title:"HackerRank",icon:m.b,size:"4x"})}),Object(y.jsx)("a",{href:"https://github.com/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--github",children:Object(y.jsx)(g.a,{title:"Github",icon:m.a,size:"3x"})}),Object(y.jsx)("a",{href:"https://www.linkedin.com/in/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--linkedin",children:Object(y.jsx)(g.a,{title:"Linkedin",icon:m.d,size:"3x"})})]})]})}),Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)("div",{className:"largetext",style:{zIndex:2,textAlign:"left",textJustify:"center",paddingTop:"50px"},children:[Object(y.jsx)("h5",{className:"resumeHeader",children:"Resume"}),Object(y.jsx)("div",{style:{display:"flex",position:"relative",paddingTop:"10px"},children:Object(y.jsx)("a",{href:"https://drive.google.com/file/d/1zLdw3bPOzvMEjoqzzJ1ZJzHU-LAbPfZz/view?usp=sharing",children:Object(y.jsx)(f.a,{children:" View Resume "})})})]})})]})]})})}}]),c}(a.a.Component),be=c(11),oe=c(15),he=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(O.a,{children:[Object(y.jsx)("h4",{style:{textAlign:"left",paddingTop:"20px"},className:"resumeHeader",children:"Qualification"}),Object(y.jsx)(O.a,{style:{fontSize:"larger",color:"white"},children:Object(y.jsx)(p.a,{children:Object(y.jsx)(be.a,{style:{paddingLeft:"0px"},children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{className:"cardImage",md:3,children:Object(y.jsx)(be.a.Header,{style:{background:"transparent"},children:Object(y.jsx)(be.a.Img,{src:V})})}),Object(y.jsx)(u.a,{md:9,className:"cardbody",children:Object(y.jsx)(be.a.Body,{children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsxs)("h5",{children:[Object(y.jsx)("b",{children:"B.E"})," -  Electrical and Electronics Engineering"]}),Object(y.jsx)("hr",{}),Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{sm:8,children:Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Year: ",Object(y.jsx)("b",{children:"2016 - 2020"})]}),Object(y.jsxs)(u.a,{sm:"auto",children:["CGPA: ",Object(y.jsx)("b",{children:" 7.6 "})]})]})})}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["University: ",Object(y.jsx)("b",{children:"Anna University"})]}),Object(y.jsx)(u.a,{sm:2,children:"  "}),Object(y.jsxs)(u.a,{sm:"auto",children:["College: ",Object(y.jsx)("b",{children:" Velammal Institute Of Technology "})]})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Academic Projects",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"7 level Dual Boost Inverter"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Rover Using MyRio "}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Audio Signal Transmission Through Light"})]})]})})})})]})})})}),Object(y.jsx)("h4",{style:{textAlign:"left",paddingTop:"20px"},className:"resumeHeader",children:"Certifications"}),Object(y.jsxs)(O.a,{style:{fontSize:"larger",color:"white"},children:[Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{style:{paddingBottom:"10px"},xs:12,sm:12,md:6,lg:4,children:Object(y.jsxs)(be.a,{style:{backgroundColor:"#374045"},children:[Object(y.jsx)(be.a.Header,{style:{backgroundColor:"white"},children:Object(y.jsx)(be.a.Img,{variant:"top",src:"data:image/png;base64,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",style:{width:"100%",height:"100%"}})}),Object(y.jsx)(be.a.Body,{className:"cardbody",children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsx)("h6",{children:Object(y.jsx)("b",{children:" Certified LabVIEW Associate Developer (CLAD)"})}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Year: ",Object(y.jsx)("b",{children:"2019"})]}),Object(y.jsx)(u.a,{sm:"auto",children:"Percentage: 78%"})]}),Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{sm:12,children:["Certifier: ",Object(y.jsx)("b",{children:"LabVIEW - National Instruments"})]})}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Skills",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"LabVIEW"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"MyRio "}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"MyDAQ"})]})]})})})]})}),Object(y.jsx)(u.a,{xs:12,sm:12,md:6,lg:4,children:Object(y.jsxs)(be.a,{style:{backgroundColor:"#374045"},children:[Object(y.jsx)(be.a.Header,{style:{backgroundColor:"white"},children:Object(y.jsx)(be.a.Img,{variant:"top",src:G,style:{width:"200px",height:"150px"}})}),Object(y.jsx)(be.a.Body,{className:"cardbody",children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsx)("h6",{children:Object(y.jsx)("b",{children:" EF Standard English Test Certificate (C2 Proficient)"})}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{md:"auto",children:["Year: ",Object(y.jsx)("b",{children:"2021"})]}),Object(y.jsxs)(u.a,{md:"auto",children:["Percentage: ",Object(y.jsx)("b",{children:"82%"})]})]}),Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{sm:12,children:["Certifier: ",Object(y.jsx)("b",{children:"EF Standard English Test"})]})}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{xl:12,children:["Certificate: ",Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.efset.org/cert/DAokrC",children:"EFSET"})]}),Object(y.jsx)(u.a,{children:"   "})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Skills",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Reading"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Listening "}),"  "]})]})})})]})})]}),Object(y.jsx)("div",{style:{padding:"20px"},children:"  "})]})]})})}}]),c}(a.a.Component),xe=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(O.a,{style:{paddingBottom:"50px"},children:[Object(y.jsx)("h4",{style:{textAlign:"left",paddingTop:"20px"},className:"resumeHeader",children:"Experience"}),Object(y.jsxs)(O.a,{style:{fontSize:"larger",color:"white"},children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(be.a,{style:{paddingLeft:"0px"},children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:3,className:"cardImage",children:Object(y.jsx)(be.a.Header,{style:{background:"transparent"},children:Object(y.jsx)(be.a.Img,{variant:"top",src:re})})}),Object(y.jsx)(u.a,{md:9,className:"cardbody",children:Object(y.jsx)(be.a.Body,{children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsx)("h5",{children:Object(y.jsx)("b",{children:"Programmer Analyst Trainee"})}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Organization: ",Object(y.jsx)("b",{children:" Cognizant Technology Solutions "})]}),Object(y.jsxs)(u.a,{sm:"auto",children:["Year: ",Object(y.jsx)("b",{children:" Dec 2020 - Present"})]})]}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Technology: ",Object(y.jsx)("b",{children:".Net Development"})]}),Object(y.jsx)(u.a,{sm:3,children:"       "}),Object(y.jsxs)(u.a,{sm:"auto",children:["Location: ",Object(y.jsx)("b",{children:" Chennai "})]})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Technical Tools",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:".Net Core"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Angular"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"GitHub"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"SQL"})]})]})})})})]})})}),Object(y.jsx)("div",{style:{padding:"20px"},children:"  "}),Object(y.jsx)(p.a,{children:Object(y.jsx)(be.a,{style:{paddingLeft:"0px"},children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:3,className:"cardImage",children:Object(y.jsx)(be.a.Header,{style:{background:"transparent"},children:Object(y.jsx)(be.a.Img,{variant:"top",src:re})})}),Object(y.jsx)(u.a,{md:9,className:"cardbody",children:Object(y.jsx)(be.a.Body,{children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsxs)("h5",{children:[Object(y.jsx)("b",{children:"Full Time Intern"})," "]}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Organization: ",Object(y.jsx)("b",{children:" Cognizant Technology Solutions "})]}),Object(y.jsxs)(u.a,{sm:"auto",children:["Year: ",Object(y.jsx)("b",{children:" Jan 2020 - June 2020"})]})]}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Technology: ",Object(y.jsx)("b",{children:"Web Development"})]}),Object(y.jsx)(u.a,{sm:3,children:"       "}),Object(y.jsxs)(u.a,{sm:"auto",children:["Location: ",Object(y.jsx)("b",{children:" Chennai "})]})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Technical Tools",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"React"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Angular"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"HTML/CSS"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"SQL"})]})]})})})})]})})})]}),Object(y.jsx)("h4",{style:{textAlign:"left",paddingTop:"20px"},className:"resumeHeader",children:"FreeLancing"}),Object(y.jsxs)(O.a,{children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(be.a,{style:{paddingLeft:"0px"},children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:3,className:"cardImage",children:Object(y.jsx)(be.a.Header,{style:{background:"transparent"},children:Object(y.jsx)(be.a.Img,{variant:"top",src:ae})})}),Object(y.jsx)(u.a,{md:9,className:"cardbody",children:Object(y.jsx)(be.a.Body,{children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsxs)("h5",{children:[Object(y.jsx)("b",{children:"Online Registration Form For Political Party"})," "]}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Technology: ",Object(y.jsx)("b",{children:"Web Development"})]}),Object(y.jsx)(u.a,{sm:3,children:"       "}),Object(y.jsxs)(u.a,{sm:"auto",children:["Months: ",Object(y.jsx)("b",{children:" 2 Months"})]})]}),Object(y.jsx)("hr",{}),Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{sm:"auto",children:Object(y.jsx)("b",{children:"Created a Online Registration Form for Political Party and Integrated Payment Gateway. On Successful Registration of Individual ID card in pdf will be generated."})})}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Technical Tools",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"React"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Google Cloud Platform"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"HTML/CSS"}),"  ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Bootstrap"})]})]})})})})]})})}),Object(y.jsx)("div",{style:{padding:"20px"},children:"  "}),Object(y.jsx)(p.a,{children:Object(y.jsx)(be.a,{style:{paddingLeft:"0px"},children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(u.a,{md:3,className:"cardImage",children:Object(y.jsx)(be.a.Header,{style:{background:"transparent"},children:Object(y.jsx)(be.a.Img,{variant:"top",src:ne})})}),Object(y.jsx)(u.a,{md:9,className:"cardbody",children:Object(y.jsx)(be.a.Body,{children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{md:12,style:{textAlign:"left"},children:[Object(y.jsxs)("h5",{children:[Object(y.jsx)("b",{children:"Logo Design"})," "]}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p.a,{children:[Object(y.jsxs)(u.a,{sm:"auto",children:["Technology: ",Object(y.jsx)("b",{children:"Designing"})]}),Object(y.jsx)(u.a,{sm:3,children:"       "}),Object(y.jsxs)(u.a,{sm:"auto",children:["Client: ",Object(y.jsx)("b",{children:"Ethereal Jewelery"})]})]}),Object(y.jsx)("hr",{}),Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{sm:"auto",children:Object(y.jsx)("b",{children:"Created Logo and Visiting Card For Online Jewelery Seller Using Photoshop"})})}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h6",{children:["Technical Tools",":   ",Object(y.jsx)(oe.a,{pill:!0,text:"dark",bg:"info",children:"Adobe Photoshop"}),"  "]})]})})})})]})})})]})]})})}}]),c}(a.a.Component),Oe=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)(O.a,{style:{paddingTop:"50px"},children:Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{md:12,style:{backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px"},children:Object(y.jsxs)("div",{className:"largetext",style:{textAlign:"left",textJustify:"center"},children:[Object(y.jsx)("h4",{className:"resumeHeader",children:"Contact"}),Object(y.jsxs)(p.a,{style:{paddingBottom:"10px"},children:[Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)(be.a,{children:[Object(y.jsx)(be.a.Header,{children:Object(y.jsxs)("h5",{children:[Object(y.jsx)("img",{src:je,alt:"mail",width:"35px"}),"  "," ",Object(y.jsx)("span",{style:{color:"yellow"},children:"Email"})]})}),Object(y.jsx)(be.a.Body,{style:{height:"80px"},children:Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{md:"auto",children:Object(y.jsx)("a",{style:{color:"white"},href:"mailto:mdyasarbe@gmail.com",children:Object(y.jsx)("h5",{children:"mdyasarbe@gmail.com"})})})})})]})}),Object(y.jsx)(u.a,{md:6,children:Object(y.jsxs)(be.a,{children:[Object(y.jsx)(be.a.Header,{children:Object(y.jsxs)("h5",{children:[Object(y.jsx)("img",{src:le,alt:"Social",width:"35px"}),"  ",Object(y.jsx)("span",{style:{color:"yellow"},children:"Social Media"})]})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{md:"auto",children:Object(y.jsx)(be.a.Body,{style:{height:"80px"},children:Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("a",{href:"https://www.instagram.com/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--instagram",children:Object(y.jsx)(g.a,{title:"Instagram",icon:m.c,size:"3x"})}),Object(y.jsx)("a",{href:"https://www.linkedin.com/in/mdyasarbe",target:"_blank",rel:"noreferrer",className:"social-buttons__button social-button social-button--linkedin",children:Object(y.jsx)(g.a,{title:"Linkedin",icon:m.d,size:"3x"})})]})})})})]})})]})]})})})})})}}]),c}(a.a.Component),pe=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsx)(O.a,{children:Object(y.jsx)("h2",{children:"Sorry Page Not Found !...."})})}}]),c}(a.a.Component),ue=(c(91),c(123)),ge=c.n(ue),me=c(124),ye=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(ge.a,{style:{position:"absolute"},params:me}),Object(y.jsx)("div",{className:"App",style:{color:"white"},children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(v,{}),Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{path:"/Education",children:Object(y.jsx)(he,{})}),Object(y.jsx)(o.a,{path:"/Experience",children:Object(y.jsx)(xe,{})}),Object(y.jsx)(o.a,{path:"/About",children:Object(y.jsx)(de,{})}),Object(y.jsx)(o.a,{path:"/Contact",children:Object(y.jsx)(Oe,{})}),Object(y.jsx)(o.a,{exact:!0,path:"/"}),Object(y.jsx)(o.a,{exact:!0,path:"*",children:Object(y.jsx)(pe,{})})]})]})})]})}}]),c}(a.a.Component),Ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,484)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(b.a,{children:Object(y.jsx)(ye,{})})}),document.getElementById("root")),Ae()},89:function(e,t,c){}},[[475,1,2]]]);
//# sourceMappingURL=main.834972a0.chunk.js.map