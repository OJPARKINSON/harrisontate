(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),o=a(151),c=(a(147),function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("video",{className:"leftCard",alt:e.alternative,src:e.vid,controls:!1,loop:!0,autoPlay:!0,muted:!0}),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"igtag",href:e.credits},r.a.createElement("p",null,e.igtag)))}),s=a(155),l=(a(150),a(157));t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container flareLayout"},r.a.createElement(o.a,{title:"Flare"}),r.a.createElement(s.a,{styling:"HeaderGroup",title:"Flare",LinkedOne:"Photos",LinkedTwo:"Harrison Tate",firstLink:"/flare",secondLink:"/Photos",thirdLink:""}),r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{className:"FlareLogo",alt:"",src:a(186)})),r.a.createElement(c,{vid:a(187),credits:"https://www.instagram.com/aida.n_/",igtag:"@aida.n_",alternative:""}),r.a.createElement(c,{vid:a(188),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement(c,{vid:a(189),credits:"https://www.instagram.com/abibeckramdesigns/",igtag:"@abibeckramdesigns",alternative:""}),r.a.createElement(c,{vid:a(190),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement(c,{vid:a(191),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement("div",{className:"heroTitles",id:"harrisonVid"},r.a.createElement(l.a,null)),r.a.createElement("footer",{style:{color:"white"}},r.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson")))))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(145),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(149),l=a.n(s),u=a(144);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(144),l=a(149),u=a.n(l),d=function(e){e.props;var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:n})};d.propTypes={children:c.a.node.isRequired},t.a=d},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},155:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=(a(142),a(4)),o=a.n(i),c=a(0),s=a.n(c),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return s.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},s.a.createElement("div",{className:this.props.styling},s.a.createElement("link",{href:this.props.firstLink},s.a.createElement("h1",null,this.props.title)),s.a.createElement("link",{className:"Photos",href:this.props.secondLink},this.props.LinkedOne),s.a.createElement("link",{className:"Lookbook",href:this.props.thirdLink},this.props.LinkedTwo)))},t}(s.a.Component);l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""},t.a=l},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(165),s=a.n(c),l=(a(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"player-wrapper"},o.a.createElement(s.a,{className:"react-player",preload:"true",playing:!0,muted:!0,controls:!0,autoPlay:!0,url:a(163),width:"100%",height:"100%",loop:!0}))},t}(o.a.Component));t.a=l},163:function(e,t,a){e.exports=a.p+"static/Flare2-9a68447ef5cfa67c95fb14630f7909ca.mp4"},186:function(e,t,a){e.exports=a.p+"static/FlareLogoCompressed-min-49c0c7383ebedd91af07eee709ec139f.png"},187:function(e,t,a){e.exports=a.p+"static/AIDAN2-fb300e848a5382851085167a96e44731.mp4"},188:function(e,t,a){e.exports=a.p+"static/ME-ca65d5e6ee726166e475e438023c92c7.mp4"},189:function(e,t,a){e.exports=a.p+"static/moshed-38ef771f5e08c38627e447ad9cfca9ac.mp4"},190:function(e,t,a){e.exports=a.p+"static/giffy3-9633394cd2b070306fc36bf5ccab24bb.mp4"},191:function(e,t,a){e.exports=a.p+"static/giffy1-4070c795f6c5b8a47f7a46be0b9f66d2.mp4"}}]);
//# sourceMappingURL=component---src-pages-flare-js-98a5fc691c4bd22d9be8.js.map