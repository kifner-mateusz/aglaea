(this.webpackJsonpaglaea=this.webpackJsonpaglaea||[]).push([[0],{50:function(e,t,a){e.exports=a(93)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=(a(55),a(56),a(57),a(15)),i=a(17),l=a(3),u=a(14),m=a(23),d=a.n(m);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e,t){var a=f({},e.que);switch(t.type){case"REQUEST_INIT":var n;n="undefined"===typeof t.mathod?"undefined"===typeof t.reqData?"GET":"POST":t.method;var r={id:e.idCount,status:"REQUEST_INIT",relativeUrl:t.relativeUrl,reqData:t.reqData,resData:{},isError:!1,isLoading:!1,method:n,callback:function(e){return t.callback(e)},cleanAfter:"undefined"===typeof t.cleanAfter||t.cleanAfter};return a[e.idCount]=r,{idCount:e.idCount+1,que:a};case"REQUEST_SEND":return a[t.id]=f({},a[t.id],{status:"REQUEST_SEND",isLoading:!0}),{idCount:e.idCount,que:a};case"REQUEST_SUCCESS":return a[t.id]=f({},a[t.id],{status:"REQUEST_SUCCESS",isLoading:!1,resData:t.data}),{idCount:e.idCount,que:a};case"REQUEST_ERROR":return a[t.id]=f({},a[t.id],{status:"REQUEST_ERROR",isLoading:!1,resData:t.error,isError:!0}),{idCount:e.idCount,que:a};case"REQUEST_CLEAN":return"undefined"!==typeof a[t.id]&&(a[t.id].cleanAfter?delete a[t.id]:a[t.id].status="REQUEST_END"),{idCount:e.idCount,que:a};default:return e}},b=function(e,t){var a=Object(n.useReducer)(E,{que:{},idCount:0}),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){for(var a=function(){var a=r[n],s=c.que[a].id;if("REQUEST_INIT"===c.que[a].status){console.log("Axios req: "+c.que[a].relativeUrl),o({type:"REQUEST_SEND",id:s});var i=e+c.que[a].relativeUrl,l=f({},t,{url:i,method:c.que[a].method,data:c.que[a].reqData});d()(l).then((function(e){o({type:"REQUEST_SUCCESS",data:e.data,id:s})})).catch((function(e){o({type:"REQUEST_ERROR",error:e,id:s})}))}else"REQUEST_SUCCESS"===c.que[a].status?(c.que[a].callback(c.que[a].resData),o({type:"REQUEST_CLEAN",id:s})):"REQUEST_ERROR"===c.que[a].status&&(c.que[a].callback({}),o({type:"REQUEST_CLEAN",id:s}))},n=0,r=Object.keys(c.que);n<r.length;n++)a()}),[c]),[function(e,t,a,n,r){o({type:"REQUEST_INIT",relativeUrl:e,callback:function(e){t(e)},reqData:a,cleanAfter:r,method:n})},c.que]};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var h=function(e,t){switch(t.type){case"set":console.log("shop data",t.data);var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e),n=!0,r=!1,c=void 0;try{for(var o,s=t.data[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value;a[i.id]=i}}catch(l){r=!0,c=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a;case"add":return e.push(t.data);case"remove":return e.fliter((function(e,a){return e.id!==parseInt(t.data)}));case"reset":return[];default:throw new Error("shopReducer: action.type unknown")}},g=a(25),y=a.n(g),v=a(27),j=a.n(v),N=a(26),_=a.n(N),w=a(43),C=a.n(w),S=a(42),k=a.n(S),P=a(106),I=(a(75),function(e){var t=e.changeCallback,a=e.initialNumber,c=e.minNumber,o=e.maxNumber,s=Object(n.useState)("undefined"===typeof a?1:a),i=Object(l.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){f||t(u)}),[u]),r.a.createElement("div",{className:"count"},r.a.createElement(P.a,{onClick:function(e){m((function(e){return isNaN(e)||e<=c?e:e-1}))}},r.a.createElement(k.a,null)),r.a.createElement("input",{type:"text",value:u,className:f?"count__userInput count__userInput--warn":"count__userInput",onChange:function(e){m(isNaN(parseInt(e.currentTarget.value))?e.currentTarget.value:parseInt(e.currentTarget.value)),E(isNaN(parseInt(e.currentTarget.value)))}}),r.a.createElement("div",{className:"count__max"}," / ",o),r.a.createElement(P.a,{onClick:function(e){m((function(e){return isNaN(e)||e>=o?e:e+1}))}},r.a.createElement(C.a,null)))}),x=(a(80),function(e){var t=Object(n.useState)(1),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useContext)(U),i=e.price-e.sale,u=100-Math.round(i/e.price*100);Object(n.useEffect)((function(){console.log(e)}),[c]);for(var m=[],d=1;d<6;d++)d<=e.rating?m.push(r.a.createElement(y.a,{key:"star-"+d})):e.rating-d>-.51?m.push(r.a.createElement(_.a,{key:"star-"+d})):m.push(r.a.createElement(j.a,{key:"star-"+d}));return r.a.createElement("article",{className:e.cssClass+" item"},r.a.createElement("img",{src:s.host+e.img,alt:"",className:"img"}),r.a.createElement("h5",{className:"title"},e.title),r.a.createElement("div",{className:"subcategory"},e.subcategory),r.a.createElement("div",{className:"price"},i.toFixed(2)," ",e.price_currency),r.a.createElement("div",{className:"price_with_shipping"},(i+e.shipping).toFixed(2)," ",e.price_currency," z dostaw\u0105"),r.a.createElement("div",{className:"seller"},e.seller_login,r.a.createElement("div",{className:"rating"},m)),0!==u&&r.a.createElement("div",{className:"sale"},"-",u,"%"),0!==u&&r.a.createElement("div",{className:"sale_cut"},e.price," ",e.price_currency),r.a.createElement(I,{changeCallback:function(e){o(e)},minNumber:1,maxNumber:e.in_stock}),r.a.createElement("button",{className:"button add_to_cart",onClick:function(){console.log(s),s.addItemToCart(s.getItemCurrent(),c)}},"Dodaj do koszyka"),r.a.createElement("button",{className:"button buy_now"},"Kup teraz"))});function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var T=function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);switch(t.type){case"addItem":return"undefined"!==typeof a.sellers[t.item.seller_id]?"undefined"!==typeof a.sellers[t.item.seller_id][t.item.id]?a.sellers[t.item.seller_id][t.item.id]+=t.count:a.sellers[t.item.seller_id][t.item.id]=t.count:(a.sellers[t.item.seller_id]={},a.sellers[t.item.seller_id][t.item.id]=t.count),console.log("cart data",a),a.totalPrice+=t.item.price-t.item.sale,a;case"removeItem":case"changeCurrency":return e;case"clear":return{sellers:{},totalPrice:0,totalPriceCurrency:""};default:throw new Error("cartReducer: action.type unknown")}},D="https://shop-json-test-api.herokuapp.com/",U=r.a.createContext({itemsNewIndex:[],itemsFeaturedIndex:[],itemCurrent:void 0,items:{},cart:{},fetchItems:function(){},axiosConfig:{},host:D}),q=function(e){var t=b(D,{}),a=Object(l.a)(t,2),c=a[0],o=(a[1],Object(n.useReducer)(h,{})),s=Object(l.a)(o,2),i=s[0],u=s[1],m=Object(n.useReducer)(T,{sellers:{},totalPrice:0,totalPriceCurrency:"USD"}),d=Object(l.a)(m,2),p=d[0],f=d[1],E=Object(n.useState)([]),O=Object(l.a)(E,2),g=O[0],y=O[1],v=Object(n.useState)([]),j=Object(l.a)(v,2),N=j[0],_=j[1],w=Object(n.useState)(void 0),C=Object(l.a)(w,2),S=C[0],k=C[1];Object(n.useEffect)((function(){c("shop",(function(e){_(e["products-new"]),y(e["products-featured"])}))}),[]),Object(n.useEffect)((function(){g.length>0&&N.length>0&&P(N.concat(g).concat("undefined"===typeof S?[]:[S]))}),[N,g]);var P=function(e,t){var a="products?"+e.map((function(e,t){return 0===t?"id="+parseInt(e):"&id="+e})).join("");c(a,(function(e){u({type:"set",data:e})}))};return r.a.createElement(U.Provider,{value:{items:i,itemsFeaturedIndex:N,itemsNewIndex:g,fetchItems:P,getItemCurrent:function(){return i[S]},getItemsFeatured:function(e){return N.slice(0,e).map((function(e){return i[e]}))},getItemsNew:function(e){return g.slice(0,e).map((function(e){return i[e]}))},setItemCurrent:k,cart:p,totalPrice:p.totalPrice,currency:p.currency,addItemToCart:function(e,t){f({type:"addItem",item:e,count:t})},axiosConfig:{},host:D}},e.children)},Q=a(29),z=a.n(Q),A=a(44),F=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(l.a)(c,2),s=o[0],i=o[1],u=Object(n.useContext)(U),m=Object(n.useState)(),p=Object(l.a)(m,2),f=p[0],E=p[1],b=function(e){r(e),i(!1)},O=function(e){void 0!==e.response&&void 0!==e.response.data.error&&"shop failed"===e.response.data.error.message?u.singOut():r(void 0),i(!1)};return Object(n.useEffect)((function(){"function"===typeof f&&!1===s&&void 0!==a&&f(a.data)}),[s]),[function(){var e=Object(A.a)(z.a.mark((function e(t,a,n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==s){e.next=10;break}if(i(!0),E((function(){return a})),!n){e.next=8;break}return e.next=6,d.a.post(u.host+t,n,u.axiosConfig).then(b,O);case 6:e.next=10;break;case 8:return e.next=10,d.a.get(u.host+t,u.axiosConfig).then(b,O);case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),s,a]},L=r.a.createContext({id:"",login:"",token:"",axiosConfig:{},host:"https://shop-json-test-api.herokuapp.com/"}),K=function(e,t){switch(t.type){case"login":case"logout":case"load":return e;default:throw new Error("UserReducer: action.type unknown")}},M=function(e){var t=F(),a=Object(l.a)(t,3),c=(a[0],a[1],a[2],Object(n.useReducer)(K,{id:"",login:"",token:""})),o=Object(l.a)(c,2),s=o[0];o[1];return r.a.createElement(L.Provider,{value:{id:s.id,login:s.login,token:s.token,axiosConfig:{},host:"https://shop-json-test-api.herokuapp.com/"}},e.children)},W=(a(82),function(e){return r.a.createElement("nav",null,r.a.createElement("button",{className:"btn-underline"},"Odzie\u017c"),r.a.createElement("button",{className:"btn-underline"},"Obuwie"),r.a.createElement("button",{className:"btn-underline"},"Akcesoria"))}),B=a(46),G=a.n(B),J=(a(83),function(e){var t=Object(n.useContext)(U).cart;return r.a.createElement(s.b,{className:"cart",to:"/cart"},r.a.createElement("button",{className:"btn-underline"},r.a.createElement(G.a,null),"Koszyk(",t.totalPrice.toFixed(2)," ",t.totalPriceCurrency,")"))}),$=(a(86),function(e){return r.a.createElement("header",{className:"site__header"},r.a.createElement("div",{className:"site__header-container"},r.a.createElement(W,null),r.a.createElement(s.b,{to:"/"},r.a.createElement("h1",{className:"site__header__title"},"Aglaea")),r.a.createElement(J,null)))}),H=a(47),V=a.n(H),X=(a(87),function(){return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",placeholder:"Szukaj...",className:"search__userInput"}),r.a.createElement("button",{className:"btn-underline search__category"},"Wszystkie kategorie"),r.a.createElement(P.a,{"aria-label":"delete",className:"search__icon"},r.a.createElement(V.a,null)))}),Y=(a(88),function(e){for(var t=Object(n.useContext)(U),a=e.price-e.sale,c=100-Math.round(a/e.price*100),o=[],i=1;i<6;i++)i<=e.rating?o.push(r.a.createElement(y.a,{key:"star-"+i})):e.rating-i>-.51?o.push(r.a.createElement(_.a,{key:"star-"+i})):o.push(r.a.createElement(j.a,{key:"star-"+i}));var l="/product/"+e.id;return r.a.createElement(s.b,{to:l,className:"item_preview_link"},r.a.createElement("article",{className:e.cssClass+" item_preview"},r.a.createElement("img",{src:t.host+e.img,alt:"",className:"img"}),r.a.createElement("h5",{className:"title"},e.title),r.a.createElement("div",{className:"subcategory"},e.subcategory),r.a.createElement("div",{className:"price"},a.toFixed(2)," ",e.price_currency),r.a.createElement("div",{className:"price_with_shipping"},(a+e.shipping).toFixed(2)," ",e.price_currency," z dostaw\u0105"),r.a.createElement("div",{className:"seller"},e.seller_login,r.a.createElement("div",{className:"rating"},o)),0!==c&&r.a.createElement("div",{className:"sale"},"-",c,"%"),0!==c&&r.a.createElement("div",{className:"sale_cut"},e.price," ",e.price_currency)))}),Z=(a(89),function(e){return r.a.createElement("section",{className:e.cssClass+"_container item_container"},r.a.createElement("h4",null,e.title),e.items.map((function(t,a){return r.a.createElement(Y,Object.assign({},t,{key:a,cssClass:e.cssClass}))})))}),ee=(a(90),a(91),function(){return r.a.createElement("div",{className:"loader"})}),te=function(e){var t=Object(n.useContext)(U);return r.a.createElement("div",{className:"container--1200"},Object.getOwnPropertyNames(t.items).length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{items:t.getItemsFeatured(5),cssClass:"item_card",title:"Polecane"}),r.a.createElement(Z,{items:t.getItemsNew(6),cssClass:"item_box",title:"Nowe"})):r.a.createElement(ee,null))},ae=function(e){var t=Object(n.useContext)(U),a=e.location.pathname.split("/product/")[1];t.setItemCurrent(a);var c=t.getItemCurrent();return r.a.createElement("div",{className:"container--1200"},c&&r.a.createElement(x,Object.assign({cssClass:"item_product",isUrl:!1},c)),Object.getOwnPropertyNames(t.items).length>0&&r.a.createElement(Z,{items:t.getItemsNew(5),cssClass:"item_card",title:"Inne przedmioty sprzedaj\u0105cego"}))},ne=function(e){return r.a.createElement("div",{className:"container--1200"})};function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ce=function(){var e=Object(n.useContext)(U),t=Object.getOwnPropertyNames(e.cart.sellers);return r.a.createElement("div",null,t.length>0?t.map((function(t){return Object.getOwnPropertyNames(e.cart.sellers[t]).map((function(a){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.items[a],{count:e.cart.sellers[t][a]})}))})).map((function(e){return r.a.createElement(Z,{key:e[0].seller_id,items:e,cssClass:"item_card",title:"Sprzedawca "+e[0].seller_login})})):r.a.createElement("h3",null,"Koszyk jest pusty"),r.a.createElement("div",null,"Do zap\u0142aty: ",e.cart.totalPrice," ",e.cart.totalPriceCurrency))},oe=function(){var e=b("https://shop-json-test-api.herokuapp.com/",{}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(l.a)(o,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){console.log("Tests"),console.log("send",a("products1",u,void 0,"GET",!1))}),[]),r.a.createElement("div",null,r.a.createElement("code",null,c.map((function(e,t){return r.a.createElement("div",{key:t},""+e)})),console.log("requests: ",c)),r.a.createElement("div",null,"test: ",i.length>0&&i[0].id))},se=(a(92),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null,r.a.createElement(q,null,r.a.createElement(s.a,null,r.a.createElement($,null),r.a.createElement(X,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/tests/",component:oe}),r.a.createElement(i.a,{path:"/cart/",component:ce}),r.a.createElement(i.a,{path:"/product/",component:ae}),r.a.createElement(i.a,{path:"/category/",component:ne}),r.a.createElement(i.a,{path:"/",component:te})))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.0ef45c2a.chunk.js.map