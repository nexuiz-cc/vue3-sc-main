import{_ as j,f as t,u as z,g as O,r as n,o as R,j as $,a,w as u,y as h,z as g,F as q,v as A,B as G,t as H,C as J,l as K,d as l,x as Q,p as W,b as X}from"./index-eda33529.js";import{T as Y}from"./TabBar-94c490d5.js";const Z=p=>(W("data-v-b0885635"),p=p(),X(),p),tt=Z(()=>l("div",null,[l("div",{class:"sc-title"},[l("h3",null,"Shopping Cart"),l("br")]),l("div",{class:"sc-content"},[l("div")])],-1)),at={__name:"ShoppingCart",setup(p){const k=t([]),y=t([]),b=t([]),w=t([]),x=t([]),C=t(0),S=t(0),B=z(),I=t(0),P=t(0),D=t(0),d=t(!1),_=t(!1),i=t(0),L=()=>{d.value=!0},T=()=>{_.value=!0,setTimeout(()=>{_.value=!1},3e3),setTimeout(()=>{B.push("/menu")},3e3)},V=[{title:"商品名",dataIndex:"name",key:"name",align:"center"},{title:"数量",dataIndex:"count",key:"count",align:"center"},{title:"単価",dataIndex:"price",key:"price",align:"center"},{title:"合計",dataIndex:"totalPrice",key:"totalPrice",align:"center"}],v=t([]),M=()=>{["seafood","steak","drink","pasta","sushi"].forEach(e=>{A(e,{id:e,itemlist:[],totalPrice:0}),G(e).then(o=>{const c=o.data.itemlist;H(e,{id:e,itemlist:c})})}),d.value=!1,T()};async function r(e,o,c){try{const s=await J(e);o.value=s.data.itemlist,c.value=s.data.totalPrice,i.value+=c.value,v.value=v.value.concat(o.value)}catch(s){console.error(`Error fetching ${e} cart data:`,s)}}return O(async()=>{await Promise.all([r("seafood",k,C),r("steak",y,S),r("drink",b,I),r("pasta",x,P),r("sushi",w,D)])}),(e,o)=>{const c=n("a-table"),s=n("a-col"),E=n("a-statistic"),N=n("a-row"),F=n("VanButton"),U=n("a-result"),m=n("a-modal");return R(),$(q,null,[tt,a(c,{columns:V,"data-source":v.value,bordered:"",pagination:!1,class:"table"},null,8,["data-source"]),a(N,null,{default:u(()=>[a(s,{span:12}),h(a(s,{span:12,class:"totalPrice"},{default:u(()=>[a(E,{title:"合計",precision:0,value:i.value},null,8,["value"])]),_:1},512),[[g,i.value!==0]])]),_:1}),h(a(F,{class:"pay",onClick:L},{default:u(()=>[K("会計")]),_:1},512),[[g,i.value!==0]]),a(m,{open:d.value,"onUpdate:open":o[1]||(o[1]=f=>d.value=f),title:"会計金額",onOk:M},{default:u(()=>[l("p",null,Q(i.value)+" 円",1),a(m,{open:_.value,"onUpdate:open":o[0]||(o[0]=f=>_.value=f),footer:""},{default:u(()=>[a(U,{status:"success",title:"お支払い頂いて、ありがとうございます。","sub-title":"会計番号: 2017182818828182881"})]),_:1},8,["open"])]),_:1},8,["open"]),a(Y)],64)}}},st=j(at,[["__scopeId","data-v-b0885635"]]);export{st as default};