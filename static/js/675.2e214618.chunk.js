"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{675:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),s=t(439),a=t(757),c=t.n(a),i=t(791),u=t(689),o=t(87),l="NewsDetailsPage_main__HUVny",d="NewsDetailsPage_article__mDx+k",h="NewsDetailsPage_backLink__q+pcB",f=function(e){var n=e.slice(0,4);return e.slice(8,10)+" "+p(e.slice(5,7))+" "+n+"  "+e.slice(12,16)},p=function(e){switch(e){case"01":return"Stycze\u0144";case"02":return"Luty";case"03":return"Marzec";case"04":return"Kwiecie\u0144";case"05":return"Maj";case"06":return"Czerwiec";case"07":return"Lipiec";case"08":return"Sierpie\u0144";case"09":return"Wrzesie\u0144";case"10":return"Pa\u017adziernik";case"11":return"Listopad";case"12":return"Grudzie\u0144";default:return""}},m=t(184),v=function(){var e,n,t,a=(0,u.UO)().newsId,p=(0,i.useState)(!1),v=(0,s.Z)(p,2),w=v[0],k=v[1],x=(0,i.useState)(null),j=(0,s.Z)(x,2),_=j[0],y=j[1],b=(0,i.useState)([]),g=(0,s.Z)(b,2),P=g[0],S=g[1];(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,fetch("https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clr82i1dt043r01wadskebz7p/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n              query News {\n                news(where: {id: "'.concat(a,'"}) {\n                  content {\n                    html\n                  }\n                  page\n                  publishedAt\n                  title\n                  id\n                }\n              }\n            ')})});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(n.status));case 7:return e.next=9,n.json();case 9:t=e.sent,S(t.data.news),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),y("Error fetching data. Please check the console for details.");case 16:return e.prev=16,k(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var z=(0,u.TH)(),N=(0,i.useRef)(null!==(e=null===(n=z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return console.log("komunikat",P),(0,m.jsxs)(m.Fragment,{children:[w&&(0,m.jsx)("p",{children:"\u0141adowanie..."}),_&&(0,m.jsx)("p",{children:"Co\u015b posz\u0142o nie tak..."}),(0,m.jsxs)("main",{className:l,children:[(0,m.jsx)(o.rU,{to:N.current,className:h,children:(0,m.jsx)("button",{children:"Powr\xf3t"})}),(0,m.jsxs)("article",{className:d,children:[(0,m.jsx)("h1",{children:P.title}),(0,m.jsx)("hr",{}),(0,m.jsx)("time",{dateTime:P.publishedAt,children:P.publishedAt&&f(P.publishedAt)}),(0,m.jsx)("hr",{}),(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(t=P.content)||void 0===t?void 0:t.html}})]})]})]})}},861:function(e,n,t){function r(e,n,t,r,s,a,c){try{var i=e[a](c),u=i.value}catch(o){return void t(o)}i.done?n(u):Promise.resolve(u).then(r,s)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(s,a){var c=e.apply(n,t);function i(e){r(c,s,a,i,u,"next",e)}function u(e){r(c,s,a,i,u,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return s}})}}]);
//# sourceMappingURL=675.2e214618.chunk.js.map