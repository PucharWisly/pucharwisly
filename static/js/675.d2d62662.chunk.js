"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{675:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),s=n(439),a=n(757),c=n.n(a),i=n(791),u=n(689),o=n(87),l="NewsDetailsPage_main__HUVny",d="NewsDetailsPage_article__mDx+k",h="NewsDetailsPage_backLink__q+pcB",p=function(e){var t=e.slice(0,4);return e.slice(8,10)+" "+f(e.slice(5,7))+" "+t+"  "+e.slice(12,16)},f=function(e){switch(e){case"01":return"Stycze\u0144";case"02":return"Luty";case"03":return"Marzec";case"04":return"Kwiecie\u0144";case"05":return"Maj";case"06":return"Czerwiec";case"07":return"Lipiec";case"08":return"Sierpie\u0144";case"09":return"Wrzesie\u0144";case"10":return"Pa\u017adziernik";case"11":return"Listopad";case"12":return"Grudzie\u0144";default:return""}},v=n(184),m=function(){var e,t,n,a=(0,u.UO)().newsId,f=(0,i.useState)(!1),m=(0,s.Z)(f,2),w=m[0],k=m[1],x=(0,i.useState)(null),j=(0,s.Z)(x,2),_=j[0],y=j[1],b=(0,i.useState)([]),g=(0,s.Z)(b,2),P=g[0],S=g[1];(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,fetch("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n              query News {\n                news(where: {id: "'.concat(a,'"}) {\n                  content {\n                    html\n                  }\n                  page\n                  publishedAt\n                  title\n                  id\n                }\n              }\n            ')})});case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:n=e.sent,S(n.data.news),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),y("Error fetching data. Please check the console for details.");case 16:return e.prev=16,k(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var z=(0,u.TH)(),N=(0,i.useRef)(null!==(e=null===(t=z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return console.log("komunikat",P),(0,v.jsxs)(v.Fragment,{children:[w&&(0,v.jsx)("p",{children:"\u0141adowanie..."}),_&&(0,v.jsx)("p",{children:"Co\u015b posz\u0142o nie tak..."}),(0,v.jsxs)("main",{className:l,children:[(0,v.jsx)(o.rU,{to:N.current,className:h,children:(0,v.jsx)("button",{children:"Powr\xf3t"})}),(0,v.jsxs)("article",{className:d,children:[(0,v.jsx)("h1",{children:P.title}),(0,v.jsx)("hr",{}),(0,v.jsx)("time",{dateTime:P.publishedAt,children:P.publishedAt&&p(P.publishedAt)}),(0,v.jsx)("hr",{}),(0,v.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(n=P.content)||void 0===n?void 0:n.html}})]})]})]})}},861:function(e,t,n){function r(e,t,n,r,s,a,c){try{var i=e[a](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var c=e.apply(t,n);function i(e){r(c,s,a,i,u,"next",e)}function u(e){r(c,s,a,i,u,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=675.d2d62662.chunk.js.map