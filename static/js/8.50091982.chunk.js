(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[8],{176:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(5),r=a(19),l=a(63),c=a(162),i=a.n(c),o=a(44),u=a(164),b=a(20),j=a(53),h=a(61),d=a.n(h),p=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return d()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],f=a(1),m=function(){var e=Object(s.useState)(p),t=Object(b.a)(e,2),a=t[0],n=t[1],r=Object(s.useCallback)(Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(p.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){r()}),[r]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Some stats about this site"}),Object(f.jsx)(j.a,{data:a})]})};t.default=function(){return Object(f.jsx)(r.a,{title:"Stats",description:"Some statistics about Syed Mahbubuz Zaman and mldangelo.com",children:Object(f.jsxs)("article",{className:"post",id:"stats",children:[Object(f.jsx)("header",{children:Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("h2",{"data-testid":"heading",children:Object(f.jsx)(n.b,{to:"/stats",children:"Stats"})})})}),Object(f.jsx)(l.a,{}),Object(f.jsx)(m,{})]})})}},53:function(e,t,a){"use strict";a(0);var s=a(1),n=function(e){var t=e.label,a=e.link,n=e.value,r=e.format;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{width:"70%",children:t}),Object(s.jsx)("td",{children:a?Object(s.jsx)("a",{href:a,children:r(n)}):r(n)})]})};n.defaultProps={format:function(e){return e},link:null,value:null};var r=n;t.a=function(e){var t=e.data;return Object(s.jsx)("table",{children:Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(r,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})}},63:function(e,t,a){"use strict";var s=a(0),n=a(53),r=a(20),l=a(1),c=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1996-08-16T09:24:00");n(((Date.now()-e)/31556925190.079998).toFixed(0))}()}),25);return function(){clearInterval(e)}}),[]),Object(l.jsx)(l.Fragment,{children:a})},i=[{key:"age",label:"Current age",value:Object(l.jsx)(c,{})},{key:"location",label:"Current city",value:"Dhaka, Bangladesh"},{key:"update",label:"Website last updated",value:"30th November"}];t.a=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"STATS:"}),Object(l.jsx)(n.a,{data:i})]})}}}]);
//# sourceMappingURL=8.50091982.chunk.js.map