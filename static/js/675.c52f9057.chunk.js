"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{675:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),u=t(689),o=t(87),l="NewsDetailsPage_main__HUVny",h="NewsDetailsPage_article__mDx+k",d="NewsDetailsPage_backLink__q+pcB",f=function(e){var n=e.slice(0,4);return e.slice(8,10)+" "+p(e.slice(5,7))+" "+n+"  "+e.slice(12,16)},p=function(e){switch(e){case"01":return"Stycze\u0144";case"02":return"Luty";case"03":return"Marzec";case"04":return"Kwiecie\u0144";case"05":return"Maj";case"06":return"Czerwiec";case"07":return"Lipiec";case"08":return"Sierpie\u0144";case"09":return"Wrzesie\u0144";case"10":return"Pa\u017adziernik";case"11":return"Listopad";case"12":return"Grudzie\u0144";default:return""}},v=t(184),m=function(){var e,n,t,s=(0,u.UO)().newsId,p=(0,i.useState)(!1),m=(0,a.Z)(p,2),w=m[0],x=m[1],k=(0,i.useState)(null),j=(0,a.Z)(k,2),_=j[0],b=j[1],y=(0,i.useState)([]),g=(0,a.Z)(y,2),P=g[0],S=g[1];(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,fetch("https://api-eu-central-1-shared-euc1-02.hygraph.com/41f9b4e645c641648a8cbd6184297a5b",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n              query News {\n                news(where: {id: "'.concat(s,'"}) {\n                  content {\n                    html\n                  }\n                  page\n                  publishedAt\n                  title\n                  id\n                }\n              }\n            ')})});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(n.status));case 7:return e.next=9,n.json();case 9:t=e.sent,S(t.data.news),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),b("Error fetching data. Please check the console for details.");case 16:return e.prev=16,x(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var N=(0,u.TH)(),z=(0,i.useRef)(null!==(e=null===(n=N.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return console.log("komunikat",P),(0,v.jsxs)(v.Fragment,{children:[w&&(0,v.jsx)("p",{children:"\u0141adowanie..."}),_&&(0,v.jsx)("p",{children:"Co\u015b posz\u0142o nie tak..."}),(0,v.jsxs)("main",{className:l,children:[(0,v.jsx)(o.rU,{to:z.current,className:d,children:(0,v.jsx)("button",{children:"Powr\xf3t"})}),(0,v.jsxs)("article",{className:h,children:[(0,v.jsx)("h1",{children:P.title}),(0,v.jsx)("hr",{}),(0,v.jsx)("time",{dateTime:P.publishedAt,children:P.publishedAt&&f(P.publishedAt)}),(0,v.jsx)("hr",{}),(0,v.jsx)("div",{dangerouslySetInnerHTML:{__html:null===(t=P.content)||void 0===t?void 0:t.html}})]})]})]})}},861:function(e,n,t){function r(e,n,t,r,a,s,c){try{var i=e[s](c),u=i.value}catch(o){return void t(o)}i.done?n(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,s){var c=e.apply(n,t);function i(e){r(c,a,s,i,u,"next",e)}function u(e){r(c,a,s,i,u,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=675.c52f9057.chunk.js.map