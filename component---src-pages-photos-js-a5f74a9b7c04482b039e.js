(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var a=n(0),r=n.n(a),i=n(151),o=n(153),s=(n(147),n(150),n(155));t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Photos"}),r.a.createElement(s.a,{styling:"HeaderGroup",title:"Photos",LinkedOne:"Harrison Tate",LinkedTwo:"Flare",firstLink:"/Photos",secondLink:"",thirdLink:"/flare"}),r.a.createElement("div",{className:"altPhotos"}),r.a.createElement("div",{id:"img-container",className:"row"},r.a.createElement("div",{className:"column"},t.allContentfulImages.edges.map(function(e){return r.a.createElement("img",{src:"https:"+e.node.image.file.url,key:"i"+e.node.title,id:"i"+e.node.title,alt:e.node.alternative})}))),r.a.createElement("footer",null,r.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson"))))};var c="3342030422"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(142),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(145),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(51),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(149),l=n.n(c),u=n(144);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},153:function(e,t,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(144),l=n(149),u=n.n(l),d=function(e){e.props;var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:a})};d.propTypes={children:s.a.node.isRequired},t.a=d},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},155:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(142),o=n.n(i),s=n(4),c=n.n(s),l=n(0),u=n.n(l),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?n.setState({hasScrolled:!0}):n.setState({hasScrolled:!1})},n.state={hasScrolled:!1},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},n.render=function(){return u.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},u.a.createElement("div",{className:this.props.styling},u.a.createElement(o.a,{to:this.props.firstLink},u.a.createElement("h1",null,this.props.title)),u.a.createElement(o.a,{className:"Photos",to:this.props.secondLink},this.props.LinkedOne),u.a.createElement(o.a,{className:"Lookbook",to:this.props.thirdLink},this.props.LinkedTwo)))},t}(u.a.Component);d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""},t.a=d}}]);
//# sourceMappingURL=component---src-pages-photos-js-a5f74a9b7c04482b039e.js.map