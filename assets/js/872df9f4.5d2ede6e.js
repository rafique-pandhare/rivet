"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1422],{6593:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(5227);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4198:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(5227),r=n(156),l=n(3840),o=n(7600);const i={admonition:"admonition_sz1_",admonitionHeading:"admonitionHeading_xwjo",admonitionIcon:"admonitionIcon_pI1Y",admonitionContent:"admonitionContent_PUiD"};const u={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function p(e){const{children:t,type:n,title:o,icon:p}=d(e),c=function(e){const t=s[e]??e,n=u[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),u.info)}(n),m=o??c.label,{iconComponent:h}=c,f=p??a.createElement(h,null);return a.createElement("div",{className:(0,r.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,i.admonition)},a.createElement("div",{className:i.admonitionHeading},a.createElement("span",{className:i.admonitionIcon},f),m),a.createElement("div",{className:i.admonitionContent},t))}},7026:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5227),r=n(156);const l={tabItem:"tabItem_hFhF"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(373),r=n(5227),l=n(156),o=n(1476),i=n(2824),u=n(9643),s=n(7190),d=n(6985);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var y=n(8810);const g={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,y.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},1407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(373),r=(n(5227),n(6593)),l=n(6663),o=n(7026);n(4198);const i={id:"array",title:"Array Node",sidebar_label:"Array"},u=void 0,s={unversionedId:"node-reference/array",id:"node-reference/array",title:"Array Node",description:"Overview",source:"@site/docs/node-reference/array.mdx",sourceDirName:"node-reference",slug:"/node-reference/array",permalink:"/node-reference/array",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/array.mdx",tags:[],version:"current",frontMatter:{id:"array",title:"Array Node",sidebar_label:"Array"},sidebar:"nodeReference",previous:{title:"Extract Object Path",permalink:"/node-reference/extract-object-path"},next:{title:"Pop",permalink:"/node-reference/pop"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Creating an Array from Multiple Inputs",id:"example-1-creating-an-array-from-multiple-inputs",level:3},{value:"Example 2: Creating an Array from Array Inputs",id:"example-2-creating-an-array-from-array-inputs",level:3},{value:"Example 3: Creating an Array without Flattening",id:"example-3-creating-an-array-without-flattening",level:3},{value:"Example 4: Using the Indices Output",id:"example-4-using-the-indices-output",level:3},{value:"Flattening Arrays",id:"flattening-arrays",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Array Node is used to construct an array from one or more inputs of any type. It can also be used to merge multiple arrays into a single array using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting."),(0,r.kt)("p",null,"By default, inputs will be flattened, so if any of the inputs are arrays themselves, they will be merged into the output array. This behavior can be disabled by unchecking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Array Node Screenshot",src:n(4586).Z,width:"776",height:"894"})),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input ","[i]"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"The ith input to be added to the array"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic number of inputs based on how many connections there are"))))),(0,r.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output"),(0,r.kt)("td",{parentName:"tr",align:null},"any[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The array created from the inputs"),(0,r.kt)("td",{parentName:"tr",align:null},"The output will be a single array containing all valid inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indices"),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The indices of the elements in the array"),(0,r.kt)("td",{parentName:"tr",align:null},"The output will be an array of numbers representing the array indices"))))),(0,r.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flatten"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, array inputs will be flattened before joining"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))))),(0,r.kt)("h3",{id:"example-1-creating-an-array-from-multiple-inputs"},"Example 1: Creating an Array from Multiple Inputs"),(0,r.kt)("p",null,"Let's say you have three Text nodes: one with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello"'),", another with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"World"'),", and the last one with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"!"'),". If you want to create an array from these three strings, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add an Array Node to your graph."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the first Text node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the second Text node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 2")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the third Text node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 3")," of the Array Node.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Array Node will now be ",(0,r.kt)("inlineCode",{parentName:"p"},'["Hello", "World", "!"]'),"."),(0,r.kt)("h3",{id:"example-2-creating-an-array-from-array-inputs"},"Example 2: Creating an Array from Array Inputs"),(0,r.kt)("p",null,"Imagine you have two Array nodes: one with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'["One", "Two"]')," and the other with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'["Three", "Four"]'),". If you want to create a new array from these two arrays, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add an Array Node to your graph."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the first Array node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the second Array node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 2")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Flatten")," setting.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Array Node will now be ",(0,r.kt)("inlineCode",{parentName:"p"},'["One", "Two", "Three", "Four"]'),"."),(0,r.kt)("h3",{id:"example-3-creating-an-array-without-flattening"},"Example 3: Creating an Array without Flattening"),(0,r.kt)("p",null,"If you want to create an array from arrays without flattening them, you can do the same steps as in Example 2, but leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting disabled. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Array Node will then be ",(0,r.kt)("inlineCode",{parentName:"p"},'[["One", "Two"], ["Three", "Four"]]'),"."),(0,r.kt)("h3",{id:"example-4-using-the-indices-output"},"Example 4: Using the Indices Output"),(0,r.kt)("p",null,"Let's say you have an Array Node with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'["Apple", "Banana", "Cherry"]'),". If you want to create a new array where each element is a string that includes the index and the corresponding fruit name from the original array, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a Text Node to your graph with the text ",(0,r.kt)("inlineCode",{parentName:"li"},'"[{{index}}] - {{fruit}}"'),"."),(0,r.kt)("li",{parentName:"ol"},"Connect the ",(0,r.kt)("inlineCode",{parentName:"li"},"Output")," of the Array Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Fruit")," input of the Text Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the ",(0,r.kt)("inlineCode",{parentName:"li"},"Indices")," output of the Array Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Index")," input of the Text Node."),(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Split")," setting on the Text Node.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Text Node will now be ",(0,r.kt)("inlineCode",{parentName:"p"},'["[0] - Apple", "[1] - Banana", "[2] - Cherry"]'),"."),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Indices")," output of the Array Node gives us an array of indices that corresponds to the elements of the original array. We then use these indices along with the original array elements to create a new array of formatted strings. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Split")," setting ensures that the Text Node generates a separate output for each element of the input arrays."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Array Node Example 4",src:n(8061).Z,width:"1420",height:"954"})),(0,r.kt)("h2",{id:"flattening-arrays"},"Flattening Arrays"),(0,r.kt)("p",null,"The Array Node has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting. When enabled, this setting treats each element of an array input as a separate element to be added to the main array. This is particularly useful when you're dealing with array inputs and want to merge all elements of these arrays into a single array."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that with flatten disabled you can get arrays of arrays. These are not well supported in Rivet and you may have to use a ",(0,r.kt)("a",{parentName:"p",href:"./code"},"Code Node")," to work with them.")),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"If an input is missing or null, the Array Node will simply ignore it during the array creation process. This can be useful when dealing with optional inputs that may not always be present."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if I connect a non-array node to the Array Node?")),(0,r.kt)("p",null,"A: The Array Node is designed to work with any type of inputs. If a non-array input is connected, the node will treat it as a single element to be added to the array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I connect an Array Node to another Array Node?")),(0,r.kt)("p",null,"A: Yes, you can connect an Array Node to another Array Node. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting is enabled, each element of the input array will be treated as a separate element to be added to the main array. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," is disabled, the input array will be added as a single element to the main array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if an input is missing or null?")),(0,r.kt)("p",null,"A: If an input is missing or null, the Array Node will simply ignore it during the array creation process. This can be useful when dealing with optional inputs that may not always be present."),(0,r.kt)("h2",{id:"see-also"},"See Also"))}h.isMDXComponent=!0},8061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/array-node-example-04-95a5d9a94e944282c085234416f5ae1a.png"},4586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/array-node-99e6a62f120414de323471c7f92b56af.png"}}]);