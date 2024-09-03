import{o,m as r,u as C,r as n,j as t,L as k}from"./index-BUHsgoIZ.js";import{i as d}from"./i18-Dqt7aMNp.js";import{A as b}from"./index-EyGvh-5l.js";import{R as A,C as S,a as E}from"./Row-DjdCyJKE.js";const F=o(E)`
  margin-top: 15rem;
`,T=o(r.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 15px;
  width: 100%;
  max-width: 300px;
  height: 280px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,I=o.h2`
  text-align: center;
  font-size: 1.25rem;
  margin: 10px 0;
  color: #333;
`,N=o(r.div)`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 10px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(100% - 20px);
  opacity: 0;
  transition: opacity 0.4s ease;
`,$=o(r.button)`
  background-color: ${i=>i.isActive?"#007bff":"#6c757d"};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${i=>i.isActive?"#0056b3":"#5a6268"};
  }
`,L={hidden:{opacity:0,transition:{staggerChildren:.1}},visible:{opacity:1,transition:{staggerChildren:.1}}},R={hidden:{opacity:0,y:-100},visible:{opacity:1,y:0},exit:{opacity:0,y:-100}},V={hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95,transition:{duration:.2}}},M=()=>{var h,m,u;const{t:i}=C(),[s,v]=n.useState({}),[c,l]=n.useState({}),[a,f]=n.useState("All"),[y,p]=n.useState(null),x=n.useCallback(async()=>{try{const e=await fetch("/car-app/companyService.json");if(!e.ok)throw new Error("Network response was not ok");const g=await e.json();v(g),l(g)}catch(e){console.error("Failed to fetch cards:",e)}},[]);n.useEffect(()=>{x()},[x]),n.useEffect(()=>{l(a==="All"?s:{...s,[d.language]:{cards:s[d.language].cards.filter(e=>e.development===i(`Filters.${a}`))}})},[a,s,i]);const j=e=>{f(e)},w=["All","IT","Building"];return t.jsxs(F,{children:[t.jsx("h1",{className:"text-center mb-4",children:i("servicesTitle")}),t.jsx("div",{className:"text-center mb-4",children:w.map(e=>t.jsx($,{isActive:a===e,onClick:()=>j(e),variants:V,whileHover:"hover",whileTap:"tap",children:i(`Filters.${e}`)},e))}),t.jsx(b,{mode:"wait",children:t.jsx(r.div,{initial:"hidden",animate:"visible",exit:"exit",variants:L,transition:{duration:.2},layout:!0,children:t.jsx(A,{className:"justify-content-center",children:(u=(m=c==null?void 0:c[(h=d)==null?void 0:h.language])==null?void 0:m.cards)==null?void 0:u.map(e=>t.jsx(S,{xs:12,sm:8,md:6,lg:3,className:"d-flex justify-content-center mb-4",children:t.jsx(T,{variants:R,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.05,delay:e.id*.05},onMouseEnter:()=>p(e.id),onMouseLeave:()=>p(null),children:t.jsxs(k,{to:`/service/${e.id}`,style:{textDecoration:"none"},children:[t.jsx("img",{src:e.img,alt:e.name}),t.jsx(I,{children:e.name}),t.jsx(b,{children:y===e.id&&t.jsx(N,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.info})})]})})},e.id))})},a)})]})};export{M as default};
