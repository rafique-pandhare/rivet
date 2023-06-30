"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5913],{6593:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(5227);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4198:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(5227),i=n(156),o=n(3840),r=n(7600);const l={admonition:"admonition_sz1_",admonitionHeading:"admonitionHeading_xwjo",admonitionIcon:"admonitionIcon_pI1Y",admonitionContent:"admonitionContent_PUiD"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function p(e){const{children:t,type:n,title:r,icon:p}=d(e),c=function(e){const t=u[e]??e,n=s[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),m=r??c.label,{iconComponent:h}=c,g=p??a.createElement(h,null);return a.createElement("div",{className:(0,i.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},g),m),a.createElement("div",{className:l.admonitionContent},t))}},7026:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(5227),i=n(156);const o={tabItem:"tabItem_hFhF"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,r),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(373),i=n(5227),o=n(156),r=n(1476),l=n(2824),s=n(9643),u=n(7190),d=n(6985);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function c(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(8810);const k={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},r,{className:(0,o.Z)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},i.createElement(N,(0,a.Z)({},e,t)),i.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return i.createElement(v,(0,a.Z)({key:String(t)},e))}},7785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(373),i=(n(5227),n(6593)),o=n(6663),r=n(7026);n(4198);const l={id:"join",title:"Join Node",sidebar_label:"Join"},s=void 0,u={unversionedId:"node-reference/join",id:"node-reference/join",title:"Join Node",description:"Overview",source:"@site/docs/node-reference/join.mdx",sourceDirName:"node-reference",slug:"/node-reference/join",permalink:"/node-reference/join",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/join.mdx",tags:[],version:"current",frontMatter:{id:"join",title:"Join Node",sidebar_label:"Join"},sidebar:"nodeReference",previous:{title:"To JSON",permalink:"/node-reference/to-json"},next:{title:"Chat",permalink:"/node-reference/chat"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Joining Two Text Nodes",id:"example-1-joining-two-text-nodes",level:3},{value:"Example 2: Joining an Array with a Custom Delimiter",id:"example-2-joining-an-array-with-a-custom-delimiter",level:3},{value:"Example 3: Connecting a Split Node to a Join Node",id:"example-3-connecting-a-split-node-to-a-join-node",level:3},{value:"Flattening Arrays",id:"flattening-arrays",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...l}=e;return(0,i.kt)(m,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Join Node is used to concatenate multiple strings using a specified delimiter. The delimiter can be set directly in the node or provided as an input."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join Node Screenshot",src:n(1350).Z,width:"662",height:"556"})),(0,i.kt)(o.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"inputs",mdxType:"TabItem"},(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Join String (optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The string to be used as a delimiter when ",(0,i.kt)("inlineCode",{parentName:"td"},"Use Join String Input")," is enabled"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\n")),(0,i.kt)("td",{parentName:"tr",align:null},"Only appears if the ",(0,i.kt)("inlineCode",{parentName:"td"},"Use Join String Input")," setting is enabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Input ","[i]"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The ith string input to be joined"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Dynamic number of inputs based on how many connections there are"))))),(0,i.kt)(r.Z,{value:"outputs",mdxType:"TabItem"},(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Joined"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The concatenated string"),(0,i.kt)("td",{parentName:"tr",align:null},"The output will be a single string resulting from joining all valid string inputs"))))),(0,i.kt)(r.Z,{value:"settings",mdxType:"TabItem"},(0,i.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flatten"),(0,i.kt)("td",{parentName:"tr",align:null},"If enabled, array inputs will be flattened before joining"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Join String"),(0,i.kt)("td",{parentName:"tr",align:null},"The string to be used as a delimiter when joining inputs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\n")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))))),(0,i.kt)("h3",{id:"example-1-joining-two-text-nodes"},"Example 1: Joining Two Text Nodes"),(0,i.kt)("p",null,"Let's say you have two Text nodes: one with the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello"')," and the other with the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"World"'),". If you want to concatenate these two strings with a newline in between, you can do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a Join Node to your graph."),(0,i.kt)("li",{parentName:"ol"},"Connect the output of the first Text node to ",(0,i.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Join Node."),(0,i.kt)("li",{parentName:"ol"},"Connect the output of the second Text node to ",(0,i.kt)("inlineCode",{parentName:"li"},"Input 2")," of the Join Node."),(0,i.kt)("li",{parentName:"ol"},"Leave the ",(0,i.kt)("inlineCode",{parentName:"li"},"Join String")," setting as the default value (",(0,i.kt)("inlineCode",{parentName:"li"},"\\n"),").")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Joined")," output of the Join Node will now be ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello\\nWorld"'),"."),(0,i.kt)("h3",{id:"example-2-joining-an-array-with-a-custom-delimiter"},"Example 2: Joining an Array with a Custom Delimiter"),(0,i.kt)("p",null,"Imagine you have an Array node with the value ",(0,i.kt)("inlineCode",{parentName:"p"},'["One", "Two", "Three"]')," and you want to join these values with a ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," delimiter. Here's how to do it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a Join Node to your graph."),(0,i.kt)("li",{parentName:"ol"},"Connect the output of the Array node to ",(0,i.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Join Node."),(0,i.kt)("li",{parentName:"ol"},"Change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Join String")," setting to ",(0,i.kt)("inlineCode",{parentName:"li"},'"/"'),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Joined")," output of the Join Node will now be ",(0,i.kt)("inlineCode",{parentName:"p"},'"One/Two/Three"'),"."),(0,i.kt)("h3",{id:"example-3-connecting-a-split-node-to-a-join-node"},"Example 3: Connecting a Split Node to a Join Node"),(0,i.kt)("p",null,"Suppose you have a node with ",(0,i.kt)("inlineCode",{parentName:"p"},"Split")," enabled, which runs N times in parallel and outputs an array of results. If you want to join these results into a single string, you can do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a Join Node to your graph."),(0,i.kt)("li",{parentName:"ol"},"Connect the output of the node with ",(0,i.kt)("inlineCode",{parentName:"li"},"Split")," enabled to ",(0,i.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Join Node."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"Join String")," setting to the delimiter you want to use.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Joined")," output of the Join Node will now be a string that joins all the results from the Split node. For instance, if the Split node outputs ",(0,i.kt)("inlineCode",{parentName:"p"},'["Hello", "World"]')," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join String")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'" "'),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Joined")," output will be ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello World"'),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dynamic Join String:")," The Join Node allows for dynamic join strings. If you have a node that generates a delimiter string dynamically, you can use this as your join string by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Use Join String Input")," setting and connecting the output of that node to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join String")," input of the Join Node.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multiple Inputs:")," The Join Node can handle any number of inputs. If you have several nodes generating strings and you want to join all of them, you can simply connect all of them to the Join Node. The Join Node will automatically adjust the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"Input [i]")," inputs based on the number of connections.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Handling Missing Inputs:")," If an input is missing or not a string, the Join Node will simply ignore it during the joining process. This can be useful when dealing with optional inputs that may not always be present.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Special Characters as Delimiters:")," You can use special characters as delimiters. This includes newline (",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),"), tab (",(0,i.kt)("inlineCode",{parentName:"p"},"\\t"),"), and space (",(0,i.kt)("inlineCode",{parentName:"p"}," "),")."))),(0,i.kt)("h2",{id:"flattening-arrays"},"Flattening Arrays"),(0,i.kt)("p",null,"The Join Node has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Flatten")," setting. When enabled, this setting treats each element of an array input as a separate string to be joined. This is particularly useful when you're dealing with array inputs and want to concatenate all elements of an array into a single string."),(0,i.kt)("p",null,"Flattening in the Join Node works similarly to the ",(0,i.kt)("a",{parentName:"p",href:"./array"},"Array Node"),". For more information on how flattening works, refer to the documentation for the Array Node."),(0,i.kt)("h2",{id:"error-handling"},"Error Handling"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"Use Join String Input")," is enabled but no valid ",(0,i.kt)("inlineCode",{parentName:"p"},"Join String")," input is provided, the Join Node will default to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join String")," specified in the node data. If no valid string inputs are provided, the output will be an empty string."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: What happens if I connect a non-string node to the Join Node?")),(0,i.kt)("p",null,"A: The Join Node is designed to work with string inputs. If a non-string input is connected, the node will attempt to convert it to a string. If this conversion isn't possible, the input will be ignored during the joining process."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Can I connect an Array Node to the Join Node?")),(0,i.kt)("p",null,"A: Yes, you can connect an Array Node to the Join Node. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flatten")," setting is enabled, each element of the array will be treated as a separate string to be joined. If ",(0,i.kt)("inlineCode",{parentName:"p"},"Flatten")," is disabled, the array will be converted to a string representation and then joined."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: What happens if I use a dynamic join string but the input is missing or not a string?")),(0,i.kt)("p",null,"A: If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Use Join String Input")," setting is enabled but no valid ",(0,i.kt)("inlineCode",{parentName:"p"},"Join String")," input is provided, the Join Node will default to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join String")," specified in the node data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How does the Join Node handle empty strings or null values?")),(0,i.kt)("p",null,"A: The Join Node will ignore any inputs that are null or not a string. Empty strings, however, will be included in the join operation. For example, if your inputs are ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'"World"'),", and your join string is ",(0,i.kt)("inlineCode",{parentName:"p"},'" "'),", the output will be ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello  World"'),' (note the extra space between "Hello" and "World").'),(0,i.kt)("h2",{id:"see-also"},"See Also"))}h.isMDXComponent=!0},1350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/join-node-1d6f0a6eecfb4046dbf63b38756d1dd3.png"}}]);