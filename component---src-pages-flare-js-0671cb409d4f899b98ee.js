(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),o=a(150),c=(a(152),function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{className:"leftCard",alt:e.alternative,src:e.image}),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"igtag",href:e.credits},r.a.createElement("p",null,e.igtag)))}),s=a(155),l=(a(149),a(156));t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container flareLayout"},r.a.createElement(o.a,{title:"Flare"}),r.a.createElement(s.a,{styling:"HeaderGroup",title:"Flare",LinkedOne:"Photos",LinkedTwo:"Harrison Tate",firstLink:"/flare",secondLink:"/Photos",thirdLink:""}),r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{className:"FlareLogo",alt:"",src:a(186)})),r.a.createElement(c,{image:a(187),credits:"https://www.instagram.com/aida.n_/",igtag:"@aida.n_",alternative:""}),r.a.createElement(c,{image:a(188),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement(c,{image:a(189),credits:"https://www.instagram.com/abibeckramdesignz/",igtag:"@abibeckram",alternative:""}),r.a.createElement(c,{image:a(190),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement(c,{image:a(191),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement("div",{className:"heroTitles"},r.a.createElement(l.a,null)),r.a.createElement("footer",{style:{color:"white"}},r.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson")))))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(145),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(148),l=a.n(s),u=a(144);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},152:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(144),l=a(148),u=a.n(l),d=function(e){e.props;var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:n})};d.propTypes={children:c.a.node.isRequired},t.a=d},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},155:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(142),o=a.n(i),c=a(4),s=a.n(c),l=a(0),u=a.n(l),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return u.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},u.a.createElement("div",{className:this.props.styling},u.a.createElement(o.a,{to:this.props.firstLink},u.a.createElement("h1",null,this.props.title)),u.a.createElement(o.a,{className:"Photos",to:this.props.secondLink},this.props.LinkedOne),u.a.createElement(o.a,{className:"Lookbook",to:this.props.thirdLink},this.props.LinkedTwo)))},t}(u.a.Component);d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""},t.a=d},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(165),s=a.n(c),l=(a(152),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"player-wrapper"},o.a.createElement(s.a,{className:"react-player",preload:"true",playing:"true",muted:!0,controls:!0,url:a(163),width:"100%",height:"100%"}))},t}(o.a.Component));t.a=l},163:function(e,t,a){e.exports=a.p+"static/Flare2-9a68447ef5cfa67c95fb14630f7909ca.mp4"},186:function(e,t,a){e.exports=a.p+"static/FlareLogoCompressed-min-3ac27a64999d842945c0a64490754fa6.png"},187:function(e,t,a){e.exports=a.p+"static/AIDAN2GIF-85390af6073fd1b226a828274324e0ba.gif"},188:function(e,t,a){e.exports=a.p+"static/MEGIF-39deb0a335e51c2b875859ccb3f76a25.gif"},189:function(e,t,a){e.exports=a.p+"static/MOSHED-9e1f715436883641e2b27c147bccb302.gif"},190:function(e,t,a){e.exports=a.p+"static/giffy3-8ee440793448d11f1cb3dca52d117e0c.gif"},191:function(e,t,a){e.exports=a.p+"static/giffy1-76bc5d9192d6173678a0cf9f9e69fa74.gif"}}]);
//# sourceMappingURL=component---src-pages-flare-js-0671cb409d4f899b98ee.js.map