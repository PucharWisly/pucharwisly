"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{553:function(e,t,n){n.d(t,{Z:function(){return f}});n(791);var r="NewsItem_articleContainer__TVoV5",a="NewsItem_articleItem__sFCyh",s="NewsItem_articleImg__eQRLF",i="NewsItem_dateTime__fIIgD",c="NewsItem_articleRef__ttw0y",u=n(87),o=function(e){var t=e.slice(0,4);return e.slice(8,10)+" "+l(e.slice(5,7))+" "+t},l=function(e){switch(e){case"01":return"Sty";case"02":return"Lut";case"03":return"Mar";case"04":return"Kwi";case"05":return"Maj";case"06":return"Cze";case"07":return"Lip";case"08":return"Sie";case"09":return"Wrz";case"10":return"Pa\u017a";case"11":return"Lis";case"12":return"Gru";default:return""}},d=n(184),h=function(e){var t,n=e.article,l=e.location,h=null!==(t=n.articleImg)&&void 0!==t&&t.url?n.articleImg.url:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ2i0cFr-RgR4-Gp-9wKW0MWhTne_MQDdnL-jwdJYBtpRT32lLxkzvyh2e4gCdCcSz9SfPtxqnDD6kJoiTdv4arrkfJFzu3vopPtcIXdNY",m="Teren"===n.page?"/teren":"/aktualnosci/"+n.id,f=n.id;return f="clruv2b635onz0bw52fn7lohx"===n.id&&"https://itgrudziadz.pl/en/must-see-monuments/",(0,d.jsxs)("div",{className:r,children:[(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("time",{className:i,dateTime:n.publishedAt,children:o(n.publishedAt)}),(0,d.jsx)("img",{src:h,alt:"",width:"300",height:"174"})]}),(0,d.jsx)("article",{className:a,children:(0,d.jsx)("h3",{children:(0,d.jsx)(u.rU,{target:"clrds6uk6if5d0but4mf0j8s2"===n.id?"_blank":"_self",className:c,to:f,state:{from:l},children:n.title})})})]})},m="NewsList_articleContainer__QOjXD",f=function(e){var t=e.komunikaty;return(0,d.jsx)("article",{className:m,children:t.map((function(e){return(0,d.jsx)(h,{article:e},e.id)}))})}},736:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(553),u=n(791),o="Komunikaty_container__-gkhO",l="Komunikaty_newsContainer__AvjfO",d=n(689),h=n(184),m=function(){var e=(0,u.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],m=(0,u.useState)(null),f=(0,a.Z)(m,2),p=f[0],v=f[1],_=(0,u.useState)([]),k=(0,a.Z)(_,2),w=k[0],x=k[1],j=(0,d.TH)();return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n            query Komunikaty {\n              newses(where: {page: "Komunikaty"}) {\n                id\n                title\n                publishedAt\n                articleImg {\n                  url\n                }\n              }\n            }\n            '})});case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:n=e.sent,x(n.data.newses.reverse()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),v("Error fetching data. Please check the console for details.");case 16:return e.prev=16,s(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)("div",{children:"Loading..."}),p&&(0,h.jsx)("div",{children:"Co\u015b posz\u0142o nie tak"}),(0,h.jsx)("main",{className:o,children:(0,h.jsx)("article",{className:l,children:(0,h.jsx)(c.Z,{komunikaty:w,location:j})})})]})}},861:function(e,t,n){function r(e,t,n,r,a,s,i){try{var c=e[s](i),u=c.value}catch(o){return void n(o)}c.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function c(e){r(i,a,s,c,u,"next",e)}function u(e){r(i,a,s,c,u,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=736.9a9ae0c5.chunk.js.map