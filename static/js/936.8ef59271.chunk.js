"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{553:function(e,t,n){n.d(t,{Z:function(){return m}});n(791);var r="NewsItem_articleContainer__TVoV5",a="NewsItem_articleItem__sFCyh",s="NewsItem_articleImg__eQRLF",c="NewsItem_dateTime__fIIgD",i="NewsItem_articleRef__ttw0y",u=n(87),o=function(e){var t=e.slice(0,4);return e.slice(8,10)+" "+l(e.slice(5,7))+" "+t},l=function(e){switch(e){case"01":return"Sty";case"02":return"Lut";case"03":return"Mar";case"04":return"Kwi";case"05":return"Maj";case"06":return"Cze";case"07":return"Lip";case"08":return"Sie";case"09":return"Wrz";case"10":return"Pa\u017a";case"11":return"Lis";case"12":return"Gru";default:return""}},d=n(184),h=function(e){var t,n=e.article,l=e.location,h=null!==(t=n.articleImg)&&void 0!==t&&t.url?n.articleImg.url:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ2i0cFr-RgR4-Gp-9wKW0MWhTne_MQDdnL-jwdJYBtpRT32lLxkzvyh2e4gCdCcSz9SfPtxqnDD6kJoiTdv4arrkfJFzu3vopPtcIXdNY",f="Teren"===n.page?"/teren":"/aktualnosci/"+n.id,m=n.id;return m="clruv2b635onz0bw52fn7lohx"===n.id&&"https://itgrudziadz.pl/en/must-see-monuments/",(0,d.jsxs)("div",{className:r,children:[(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("time",{className:c,dateTime:n.publishedAt,children:o(n.publishedAt)}),(0,d.jsx)("img",{src:h,alt:"",width:"300",height:"174"})]}),(0,d.jsx)("article",{className:a,children:(0,d.jsx)("h3",{children:(0,d.jsx)(u.rU,{target:"clrds6uk6if5d0but4mf0j8s2"===n.id?"_blank":"_self",className:i,to:m,state:{from:l},children:n.title})})})]})},f="NewsList_articleContainer__QOjXD",m=function(e){var t=e.komunikaty;return(0,d.jsx)("article",{className:f,children:t.map((function(e){return(0,d.jsx)(h,{article:e},e.id)}))})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),u=n(689),o="Home_container__w+u63",l="Home_newsContainer__ZRiE7",d=n(553),h=n(184),f=function(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],f=(0,i.useState)(null),m=(0,a.Z)(f,2),p=m[0],v=m[1],w=(0,i.useState)([]),x=(0,a.Z)(w,2),k=x[0],_=x[1],j=(0,i.useState)([]),y=(0,a.Z)(j,2),g=y[0],N=y[1],b="https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master",T=(0,u.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n            query Komunikaty {\n              newses(first: 3){\n                id\n                title\n                publishedAt\n                articleImg {\n                  url\n                }\n              }\n            }\n            "})});case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:n=e.sent,_(n.data.newses),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),v("Error fetching data. Please check the console for details.");case 16:return e.prev=16,s(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n            query Latest {\n              newses(last: 3) {\n                articleImg {\n                  url\n                }\n                publishedAt\n                page\n                id\n                title\n              }\n            }\n            "})});case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:n=e.sent,N(n.data.newses.reverse()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),v("Error fetching data. Please check the console for details.");case 16:return e.prev=16,s(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)("p",{children:"\u0141adowanie..."}),p&&(0,h.jsx)("p",{children:"Co\u015b posz\u0142o nie tak..."}),(0,h.jsxs)("main",{className:o,children:[(0,h.jsx)("article",{className:l,children:(0,h.jsx)(d.Z,{komunikaty:k,location:T})}),(0,h.jsxs)("article",{className:l,children:[(0,h.jsx)("h2",{children:"AKTUALNO\u015aCI"}),(0,h.jsx)(d.Z,{komunikaty:g,location:T})]})]})]})}},861:function(e,t,n){function r(e,t,n,r,a,s,c){try{var i=e[s](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var c=e.apply(t,n);function i(e){r(c,a,s,i,u,"next",e)}function u(e){r(c,a,s,i,u,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=936.8ef59271.chunk.js.map