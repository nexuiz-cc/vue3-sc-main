import{_ as d,u as g,r as _,o as u,c as x,w as s,a as l,p,b as m,d as e,e as w,f as C,g as B,h as I,i as y,j as v,F as f}from"./index-eda33529.js";import{T as $}from"./TabBar-94c490d5.js";const S="/images/1.jpeg",j="/images/2.jpeg",k="/images/3.jpeg";const a=t=>(p("data-v-76048955"),t=t(),m(),t),T=a(()=>e("img",{src:S,alt:""},null,-1)),D=a(()=>e("div",{class:"text-box"},[e("h2",null,"Sit amet consectetur"),e("p",null,"officiis iure vero facere facilis corrupti")],-1)),q=a(()=>e("img",{src:j,alt:""},null,-1)),E=a(()=>e("div",{class:"text-box"},[e("h2",null,"Lorem ipsum"),e("p",null,"Corrupti delectus officiis quo culpa atque")],-1)),F=a(()=>e("img",{src:k,alt:""},null,-1)),N=a(()=>e("div",{class:"text-box"},[e("h2",null,"Ipsum dolor"),e("p",null,"sit amet,consectetur adipisicing elit.")],-1)),V={__name:"Banner",setup(t){const o=g();function n(){o.push("/detail")}return(c,r)=>{const i=_("van-swipe-item"),b=_("van-swipe");return u(),x(b,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:s(()=>[l(i,{onClick:r[0]||(r[0]=A=>n())},{default:s(()=>[T,D]),_:1}),l(i,null,{default:s(()=>[q,E]),_:1}),l(i,null,{default:s(()=>[F,N]),_:1})]),_:1})}}},H=d(V,[["__scopeId","data-v-76048955"]]);const h=t=>(p("data-v-8608d09d"),t=t(),m(),t),L=h(()=>e("div",{class:"vanCell"},[e("span",null,"Title1"),e("div",{class:"vanCell_label"},"Description 1")],-1)),M=h(()=>e("div",{class:"vanCell"},[e("span",null,"Title2"),e("div",{class:"vanCell_label"},"Description 2")],-1)),R={__name:"Cell",props:["title","label"],setup(t){return w({}),C(""),B(()=>{}),I(()=>{}),y(()=>{}),(o,n)=>{const c=_("van-cell");return u(),v(f,null,[l(c,{title:t.title,label:t.label,to:"/detail"},{default:s(()=>[L]),_:1},8,["title","label"]),l(c,{title:t.title,label:t.label,to:"/detail"},{default:s(()=>[M]),_:1},8,["title","label"])],64)}}},z=d(R,[["__scopeId","data-v-8608d09d"]]),K={__name:"Home",setup(t){return(o,n)=>(u(),v(f,null,[l(H),l(z),l($)],64))}};export{K as default};