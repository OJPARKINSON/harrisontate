(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(157),s=(a(154),a(158),a(160)),c=(a(187),function(e){return r.a.createElement("a",{href:e.siteLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:e.alt,id:e.id,src:e.link}))});a.d(t,"query",function(){return l});t.default=function(e){var t=e.data;return r.a.createElement("div",{className:"container"},r.a.createElement("img",{alt:"Harrison Tate",preload:!0,className:"loader",src:a(189)}),r.a.createElement(i.a,{title:"Home",keywords:["Harrison Tate","Portfolio","Photography"]}),r.a.createElement(o.a,{styling:"HeaderGroup",title:"Harrison Tate",LinkedOne:"Photos",LinkedTwo:"Lookbook",firstLink:"/",secondLink:"/Photos",thirdLink:"/flare"}),r.a.createElement("div",{className:"Hero-Image"},r.a.createElement("div",{className:"scroll-downs"},r.a.createElement("div",{className:"mousey"},r.a.createElement("div",{className:"scroller"})))),r.a.createElement("div",{className:"heroTitles"},r.a.createElement("h2",null,"Pictures")),r.a.createElement("div",{className:"imageContainer"},r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BkMxMMZH1bW/",alt:"Chimney",link:a(190)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BpEXqeoBfRJ/",alt:"Person and red pipe",link:a(191)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BkMxOQ5nhG9/",alt:"Dock through ship window",link:a(192)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BkMx1iSniv_/",alt:"Ship corridor",link:a(193)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/Bg3SYQIDuQr/",alt:"Old office block with person stood infront",link:a(194)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BoJIIT3h-9I/",alt:"Person at art gallery",link:a(195)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BkMxNGAH_wc/",alt:"Old TV",link:a(196)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BpEXh0LBNDt/",alt:"Person walking down street",link:a(197)}),r.a.createElement(c,{siteLink:"https://www.instagram.com/p/BoJIQR-hdet/",alt:"Far crane though fence",id:"lastImg",link:a(198)})),r.a.createElement("div",{className:"heroTitles"},r.a.createElement("h2",null,"Lookbook"),r.a.createElement("div",{className:"heroTitles",id:"harrisonVid"},t.allContentfulVideo.edges.map(function(e){return r.a.createElement(s.a,{playsinline:!0,key:e.node.title,url:"https:"+e.node.video.file.url})}))),r.a.createElement("footer",null,r.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson"))))};var l="892170933"},146:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(148);var l=r.a.createContext({}),p=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(151),l=a.n(c),p=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(p.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var u="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(4),o=a.n(i),s=a(0),c=a.n(s),l=a(146),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return c.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},c.a.createElement("div",{className:this.props.styling},c.a.createElement(l.a,{to:this.props.firstLink},c.a.createElement("h1",null,this.props.title)),c.a.createElement(l.a,{className:"Photos",to:this.props.secondLink},this.props.LinkedOne),c.a.createElement(l.a,{className:"Lookbook",to:this.props.thirdLink},this.props.LinkedTwo)))},t}(c.a.Component);p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""},t.a=p},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(167),o=a.n(i);a(154);t.a=function(e){return r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(o.a,{className:"react-player",preload:"auto",muted:!0,playing:!0,controls:!0,url:e.url,width:"100%",height:"100%",loop:!0,playsInline:!0}))}},187:function(e,t,a){"use strict";a(188)("link",function(e){return function(t){return e(this,"a","href",t)}})},188:function(e,t,a){var n=a(11),r=a(24),i=a(18),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},189:function(e,t,a){e.exports=a.p+"static/harrisonlanding-1528e39be644bf578e4213a43d43b680.jpg"},190:function(e,t,a){e.exports=a.p+"static/4-9c7dd0e9ebf401deb78e7630e2884f30.jpg"},191:function(e,t,a){e.exports=a.p+"static/Dfg-ed7a58f5b04f76b9bf6b2e5536f54fef.jpg"},192:function(e,t,a){e.exports=a.p+"static/90-a8f1edd2a749a1f2bb33959a9f45a858.jpg"},193:function(e,t,a){e.exports=a.p+"static/Blas-bf2efa96a5fdf993430610fcf9c7a163.jpg"},194:function(e,t,a){e.exports=a.p+"static/BLJ-504426da271b614d6ea3652028e733f0.jpg"},195:function(e,t,a){e.exports=a.p+"static/Bluy2-93b159a2dd4eaef89c6fcb02fcb93eee.jpg"},196:function(e,t,a){e.exports=a.p+"static/D-f8bb8ba3f7a7e0e3a4326ca4f9281676.jpg"},197:function(e,t,a){e.exports=a.p+"static/64tygh-7545fcbb0b09788b371f8913ab3cabbf.jpg"},198:function(e,t,a){e.exports=a.p+"static/ktcg-242a0df12faa0efc1180232359f014b7.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-877b0d3101908a9d5b3b.js.map