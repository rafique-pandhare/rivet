"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1089],{6593:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(1644);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),h=a,y=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(373),a=(r(1644),r(6593));const i={},o="Trivet Library",s={unversionedId:"user-guide/trivet-library",id:"user-guide/trivet-library",title:"Trivet Library",description:"The Trivet Library is a powerful tool for running tests on your Rivet projects programmatically. It provides a way to validate and test the functionality of your Rivet graphs. All code examples in this documentation are written in TypeScript.",source:"@site/docs/user-guide/trivet-library.md",sourceDirName:"user-guide",slug:"/user-guide/trivet-library",permalink:"/user-guide/trivet-library",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/trivet-library.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"Tutorial",permalink:"/user-guide/trivet-tutorial"},next:{title:"Data Types",permalink:"/user-guide/data-types"}},p={},l=[{value:"How to Use the Trivet Library",id:"how-to-use-the-trivet-library",level:2},{value:"Step 1: Install the Trivet Library",id:"step-1-install-the-trivet-library",level:3},{value:"Step 2: Import the necessary functions and types",id:"step-2-import-the-necessary-functions-and-types",level:3},{value:"Step 3: Load your project",id:"step-3-load-your-project",level:3},{value:"Step 4: Create your test suites",id:"step-4-create-your-test-suites",level:3},{value:"Step 5: Create your Trivet options",id:"step-5-create-your-trivet-options",level:3},{value:"Step 6: Run your tests",id:"step-6-run-your-tests",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Types",id:"types",level:3},{value:"Functions",id:"functions",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trivet-library"},"Trivet Library"),(0,a.kt)("p",null,"The Trivet Library is a powerful tool for running tests on your Rivet projects programmatically. It provides a way to validate and test the functionality of your Rivet graphs. All code examples in this documentation are written in TypeScript."),(0,a.kt)("h2",{id:"how-to-use-the-trivet-library"},"How to Use the Trivet Library"),(0,a.kt)("h3",{id:"step-1-install-the-trivet-library"},"Step 1: Install the Trivet Library"),(0,a.kt)("p",null,"You can install the Trivet Library using yarn with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @ironclad/trivet\n")),(0,a.kt)("h3",{id:"step-2-import-the-necessary-functions-and-types"},"Step 2: Import the necessary functions and types"),(0,a.kt)("p",null,"You'll need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"runTrivet")," function from the Trivet Library, as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"loadProjectFromFile")," function from the Rivet Node Library. You'll also need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetOpts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetGraphRunner")," types from the Trivet Library if using TypeScript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { runTrivet, TrivetOpts, TrivetGraphRunner } from '@ironclad/trivet';\nimport { loadProjectFromFile } from '@ironclad/rivet-node';\n")),(0,a.kt)("h3",{id:"step-3-load-your-project"},"Step 3: Load your project"),(0,a.kt)("p",null,"You can load your Rivet project from a file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"loadProjectFromFile")," function, or load your project file in any other way you wish."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const project = await loadProjectFromFile('path/to/your/project.rivet');\n")),(0,a.kt)("h3",{id:"step-4-create-your-test-suites"},"Step 4: Create your test suites"),(0,a.kt)("p",null,"You'll need to create an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetTestSuite")," objects representing your test suites. Each ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetTestSuite")," object should include an id, the ids of the test and validation graphs, and an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetTestCase")," objects representing the test cases to be run."),(0,a.kt)("p",null,"TODO trivet should be able to load the test suites from a rivet project file or Project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// TODO: Load or create your TrivetTestSuite objects\nconst testSuites = [...];\n")),(0,a.kt)("h3",{id:"step-5-create-your-trivet-options"},"Step 5: Create your Trivet options"),(0,a.kt)("p",null,"You'll need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetOpts")," object with your project, test suites, and a function to run the graph."),(0,a.kt)("p",null,"As Trivet hooks in to your own graph running archetecture that might have external calls, it is up to you to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphProcessor")," and execute it\nwith the correct graph and inputs."),(0,a.kt)("p",null,"For a basic example, you can do something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const opts: TrivetOpts = {\n  project,\n  testSuites,\n  runGraph: async (project, graphId, inputs) => {\n    const processor = new GraphProcessor(project, graphId);\n    return processor.processGraph(\n      {\n        // ProcessContext such as settings and native API\n      },\n      inputs,\n      {},\n    );\n  },\n};\n")),(0,a.kt)("h3",{id:"step-6-run-your-tests"},"Step 6: Run your tests"),(0,a.kt)("p",null,"Finally, you can run your tests using the ",(0,a.kt)("inlineCode",{parentName:"p"},"runTrivet")," function. This function takes your ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetOpts")," object and returns a Promise that resolves with the results of your tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const results = await runTrivet(opts);\nconsole.log(results);\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,"The Trivet API is subject to change, but the current API is documented below."),(0,a.kt)("h3",{id:"types"},"Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TrivetGraphRunner"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type TrivetGraphRunner = (project: Project, graphId: GraphId, inputs: GraphInputs) => Promise<GraphOutputs>;\n")),(0,a.kt)("p",null,"This type represents a function which takes a project, a graphId, and inputs, and returns a Promise that resolves with GraphOutputs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TrivetOpts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TrivetOpts {\n  project: Project;\n  testSuites: TrivetTestSuite[];\n  iterationCount?: number;\n  runGraph: TrivetGraphRunner;\n  onUpdate?: (results: TrivetResults) => void;\n}\n")),(0,a.kt)("p",null,"This interface represents the options that can be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"runTrivet")," function. It includes the project to be tested, the test suites to be run, the number of iterations for each test, the function to run the graph, and an optional callback function to be called on update."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TrivetTestSuite"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TrivetTestSuite {\n  id: string;\n  name?: string;\n  description?: string;\n  testGraph: string;\n  validationGraph: string;\n  testCases: TrivetTestCase[];\n}\n")),(0,a.kt)("p",null,"This interface represents a test suite, which includes an id, optional name and description, the id of the test graph, the id of the validation graph, and the test cases to be run."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TrivetTestCase"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TrivetTestCase {\n  id: string;\n  input: Record<string, unknown>;\n  expectedOutput: Record<string, unknown>;\n}\n")),(0,a.kt)("p",null,"This interface represents a test case, which includes an id, the input values, and the expected output values."),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"runTrivet"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function runTrivet(opts: TrivetOpts): Promise<TrivetResults>;\n")),(0,a.kt)("p",null,"This function takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetOpts")," object and returns a Promise that resolves with a ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetResults")," object. It runs each test case in each test suite the specified number of iterations, and updates the results after each iteration. The ",(0,a.kt)("inlineCode",{parentName:"p"},"TrivetResults")," object includes the results of each test suite and the number of iterations run."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"createTestGraphRunner"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function createTestGraphRunner(opts: { openAiKey: string }): TrivetGraphRunner;\n")),(0,a.kt)("p",null,"This function takes an object with an ",(0,a.kt)("inlineCode",{parentName:"p"},"openAiKey")," and returns a `TrivetGraphRunner"))}d.isMDXComponent=!0}}]);