(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{6674:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=n(5893),r=n(2962),s=n(4155);function l(t){var e=s.env.PAGE_URL_ENDPOINT;"".concat(e,"/").concat(t.slug);return(0,i.jsx)(r.PB,{titleTemplate:"%s| My blog",title:t.title,defaultTitle:"My blog",description:t.description,canonical:e,additionalLinkTags:[{rel:"icon",href:"/favicon.ico"}],openGraph:{url:e,title:"My blog",description:"Informative articles about web development. Find tutorials that will boost your next web development project.",site_name:"My Blog"},twitter:{handle:"@yenniferha",site:"@yenniferha",cardType:"summary_large_image"}})}},6180:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u},default:function(){return d}});var i=n(5893),r=n(3855),s=n(4790);function l(t){var e=t.dateString,n=(0,r.Z)(e);return(0,i.jsx)("time",{dateTime:e,children:(0,s.Z)(n,"LLLL d, yyyy")})}var a=n(6674),c=n(8456),o=n.n(c),u=!0;function d(t){var e=t.post;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{title:e.seo.title,description:e.seo.description,slug:e.slug,isArticle:!0,imageUrl:e.cover.url}),(0,i.jsxs)("article",{children:[(0,i.jsx)("img",{src:e.cover.url,alt:e.title,className:"h-72 w-full object-cover"}),(0,i.jsxs)("div",{className:"my-8 mx-4 md:mx-40",children:[(0,i.jsx)("h1",{className:"text-3xl md:text-5xl my-2 md:my-4 font-semibold text-blue-600 tracking-tight md:leading-loose",children:e.title}),(0,i.jsx)(l,{dateString:e.createdAt}),(0,i.jsx)("div",{className:"my-4 prose prose-lg",children:(0,i.jsx)(o(),{children:e.content})}),(0,i.jsxs)("small",{className:"text-sm text-gray-900 font-medium",children:["Tags:",e.category.map((function(t){return(0,i.jsx)("span",{className:"text-sm text-gray-500 font-light leading-tight mx-1",children:t},t)}))]})]})]})]})}},9035:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(6180)}])}},function(t){t.O(0,[774,542,26,888,179],(function(){return e=9035,t(t.s=e);var e}));var e=t.O();_N_E=e}]);