(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),c=a(149),o=a(147),s=(a(163),function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{className:"leftCard",alt:e.alternative,src:e.image}),r.a.createElement("a",{target:"_blank",class:"igtag",href:e.credits},r.a.createElement("p",null,e.igtag)))});t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"container flareLayout"},r.a.createElement(o.a,{title:"Flare"}),r.a.createElement(i.a,{title:"Flare",LinkedOne:"Photos",LinkedTwo:"Harrison Tate",firstLink:"/flare",secondLink:"/Photos",thirdLink:""}),r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{className:"FlareLogo",alt:"",src:a(164)})),r.a.createElement(s,{image:a(165),credits:"https://www.instagram.com/aida.n_/",igtag:"@aida.n_",alternative:""}),r.a.createElement(s,{image:a(166),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement(s,{image:a(167),credits:"https://www.instagram.com/abibeckramdesignz/",igtag:"@abibeckram",alternative:""}),r.a.createElement(s,{image:a(168),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement(s,{image:a(169),credits:"https://www.instagram.com/abibeckram/",igtag:"@abibeckram",alternative:""}),r.a.createElement("div",{className:"heroTitles"},r.a.createElement("iframe",{title:"lookbook2",allowFullScreen:!0,src:"https://www.youtube.com/embed/sjHPpqmbYNo",rel:"0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(142),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(144),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},145:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(146),l=a.n(s),d=a(143);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var m="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(143),l=a(146),d=a.n(l),u=function(e){e.props;var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:n})};u.propTypes={children:o.a.node.isRequired},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},151:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(142),r=a.n(n),i=(a(151),a(0)),c=a.n(i);t.a=function(e){return c.a.createElement("div",{className:"HeaderScrolled"},c.a.createElement("div",{className:"HeaderGroup"},c.a.createElement(r.a,{to:e.firstLink},c.a.createElement("h1",null,e.title)),c.a.createElement(r.a,{className:"Photos",to:e.secondLink},e.LinkedOne),c.a.createElement(r.a,{className:"Lookbook",to:e.thirdLink},e.LinkedTwo)))}},163:function(e,t,a){},164:function(e,t,a){e.exports=a.p+"static/FlareLogoCompressed-min-3ac27a64999d842945c0a64490754fa6.png"},165:function(e,t,a){e.exports=a.p+"static/AIDAN2GIF-30955d892655dd627668698a689255bb.gif"},166:function(e,t,a){e.exports=a.p+"static/MEGIF-39deb0a335e51c2b875859ccb3f76a25.gif"},167:function(e,t,a){e.exports=a.p+"static/MOSHED-8fad1fafe6ac18ec98d370fff817cd7d.gif"},168:function(e,t,a){e.exports=a.p+"static/giffy3-04232e1a06a19d66880737bf444076cd.gif"},169:function(e,t,a){e.exports=a.p+"static/giffy1-0c2daf612f3bcfd60f35d94237d6f429.gif"}}]);
//# sourceMappingURL=component---src-pages-flare-js-9ef825910b7e872f72b8.js.map