(this["webpackJsonpreact-burger"]=this["webpackJsonpreact-burger"]||[]).push([[0],{16:function(e,t,n){e.exports={header:"header_header__27L1B",headerContainer:"header_headerContainer__26DlA",profile:"header_profile__2w4BF",logo:"header_logo__3lDef",link:"header_link__1PNTA",link_active:"header_link_active__28w-7",list:"header_list__3_CLy"}},17:function(e,t,n){e.exports={list_item:"ingredient_list_item__27_YN",moving:"ingredient_moving__2oYcg",hint_icons:"ingredient_hint_icons__Fsy02",left_click_icon:"ingredient_left_click_icon__3VCE-",right_click_icon:"ingredient_right_click_icon__3gHQs",drag_icon:"ingredient_drag_icon__1ZqTJ",image:"ingredient_image__33-D4",price_info:"ingredient_price_info__oD7HX",text:"ingredient_text__2rsG6"}},186:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(26),r=n.n(a),s=n(4),o=n(89),l=n.n(o),d=n(28),u=n(7),_=n(16),j=n.n(_),p=n(1),b=function(){return Object(p.jsx)("header",{className:"".concat(j.a.header," text text_type_main-default pt-4 pb-4"),children:Object(p.jsxs)("div",{className:j.a.headerContainer,children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:j.a.list,children:[Object(p.jsx)("li",{children:Object(p.jsxs)(d.c,{className:"pt-5 pr-5 pb-5 ".concat(j.a.link_active," ").concat(j.a.link),to:"/",children:[Object(p.jsx)(u.BurgerIcon,{type:"primary"}),Object(p.jsx)("span",{className:"ml-2",children:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(d.c,{className:"p-5 ".concat(j.a.link),to:"/",children:[Object(p.jsx)(u.ListIcon,{type:"secondary"}),Object(p.jsx)("span",{className:"ml-2",children:"\u041b\u0435\u043d\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})})]})}),Object(p.jsx)("div",{className:j.a.logo,children:Object(p.jsx)(u.Logo,{})}),Object(p.jsxs)(d.b,{className:"p-5 ".concat(j.a.link," ").concat(j.a.profile),to:"/",children:[Object(p.jsx)(u.ProfileIcon,{type:"secondary"}),Object(p.jsx)("span",{className:"ml-2",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})]})]})})},O=n(15),m=n(10),x=n(22),h=n.n(x),f=function(e){var t=e.getBoundingClientRect();return{top:Math.round(t.top+scrollY),left:Math.round(t.left+scrollX)}},g=n(17),y=n.n(g),v=n(193),N=n(90),E=n(91),D=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t}return Object(E.a)(e,[{key:"_requestResult",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: \u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}},{key:"getIngredients",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/ingredients")).then((function(t){return e._requestResult(t)}))}},{key:"sendIngredients",value:function(e){var t=this,n={ingredients:e};return fetch("".concat(this._baseUrl,"/orders"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)}).then((function(e){return t._requestResult(e)}))}}]),e}())("https://norma.nomoreparties.space/api"),I=n(195),C="GET_INGREDIENTS",T="GET_INGREDIENTS_FAILED",R="GET_INGREDIENTS_SUCCESS",S="SELECT_INGREDIENT",k="DELETE_SELECTED_INGREDIENT",P="ADD_INGREDIENT",L="DELETE_INGREDIENT",A="DELETE_ALL_INGREDIENTS",q="SORT_INGREDIENTS";var G=function(e){var t=e.map((function(e){var t=Object.assign({},e);return t.uuid=Object(I.a)(),t}));return{type:P,payload:t}},w="CHANGE_ORDER_DETAILS_POPUP_STATE",B="CHANGE_INGREDIENTS_POPUP_STATE",F=function(e){return{type:w,payload:e}},M=function(e){return{type:B,payload:e}},U=function(e){var t=e.ingredient,n=t.image,c=t.price,i=t.name,a=t._id,r=Object(s.b)(),o=Object(s.c)((function(e){return e.ingredientsData.chosenIngredients})),l=Object(s.c)((function(e){return e.ingredientsData.ingredients})),d=Object(v.a)({type:"ingredient",item:{_id:a},collect:function(e){return{isDrag:e.isDragging()}}}),_=Object(m.a)(d,2),j=_[0].isDrag,b=_[1],x=0;o.forEach((function(e){return e.name===i&&("bun"===e.type?x+=2:x+=1)}));return Object(p.jsxs)("li",{"data-id":a,onContextMenu:function(e){e.preventDefault();var t=l.find((function(t){return t._id===e.currentTarget.dataset.id})),n=o.find((function(e){return"bun"===e.type})),c=o.indexOf(n);if("bun"===t.type&&n){var i=o.slice();i.splice(c,1,t),r(G(i))}else r(G([].concat(Object(O.a)(o),[t])))},onClick:function(e){var t=e.currentTarget.dataset.id,n=l.find((function(e){return e._id===t}));r(function(e){return{type:S,payload:e}}(n)),r(M(!0))},className:"".concat(y.a.list_item," ").concat(j&&y.a.moving),ref:b,children:[Object(p.jsx)("img",{alt:i,src:n,className:"".concat(y.a.image," ml-4 mr-4")}),Object(p.jsxs)("div",{className:"".concat(y.a.price_info," mt-4 mb-4"),children:[Object(p.jsx)("span",{className:"text text_type_digits-default mr-2",children:c}),Object(p.jsx)(u.CurrencyIcon,{type:"primary"})]}),Object(p.jsx)("h3",{className:"".concat(y.a.text," text text_type_main-default"),children:i}),x>0&&Object(p.jsx)(u.Counter,{count:x,size:"default"}),Object(p.jsxs)("div",{className:"".concat(y.a.hint_icons),children:[Object(p.jsx)("span",{className:"".concat(y.a.left_click_icon)}),Object(p.jsx)("span",{className:"".concat(y.a.right_click_icon)}),Object(p.jsx)("span",{className:"".concat(y.a.drag_icon)})]})]})},H=function(){var e=Object(s.c)((function(e){return e.ingredientsData.ingredients})),t=Object(c.useState)("bun"),n=Object(m.a)(t,2),i=n[0],a=n[1],r=function(e){a(e),document.querySelector("#".concat(e)).scrollIntoView({block:"start",behavior:"smooth"})};return Object(p.jsxs)("div",{className:h.a.main_container,children:[Object(p.jsx)("h1",{className:"mt-10 mb-5 text text_type_main-large",children:"\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u0440\u0433\u0435\u0440"}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)(u.Tab,{value:"bun",active:"bun"===i,onClick:r,children:"\u0411\u0443\u043b\u043a\u0438"}),Object(p.jsx)(u.Tab,{value:"sauce",active:"sauce"===i,onClick:r,children:"\u0421\u043e\u0443\u0441\u044b"}),Object(p.jsx)(u.Tab,{value:"main",active:"main"===i,onClick:r,children:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438"})]}),Object(p.jsxs)("div",{onScroll:function(e){e.target.addEventListener("scroll",(function(){a(function(e){var t=f(document.querySelector("#bun")).top,n=f(document.querySelector("#sauce")).top,c=f(document.querySelector("#main")).top,i=f(document.querySelector(".".concat(e))).top,a=[{title:"bun",value:Math.abs(i-t)},{title:"sauce",value:Math.abs(i-n)},{title:"main",value:Math.abs(i-c)}],r=a.map((function(e){return e.value})),s=Math.min.apply(Math,Object(O.a)(r));return a.find((function(e){return e.value===s})).title}(h.a.main_container))}))},className:"".concat(h.a.ingredients_container," mt-10 ingredients-container"),children:[Object(p.jsx)("h2",{id:"bun",className:"mb-6 text text_type_main-medium",children:"\u0411\u0443\u043b\u043a\u0438"}),Object(p.jsx)("ul",{className:"".concat(h.a.list," pt-6 pb-10 pr-4 pl-4"),children:e.map((function(e){return"bun"===e.type&&Object(p.jsx)(U,{ingredient:e},e._id)}))}),Object(p.jsx)("h2",{id:"sauce",className:"mb-6 text text_type_main-medium",children:"\u0421\u043e\u0443\u0441\u044b"}),Object(p.jsx)("ul",{className:"".concat(h.a.list," pt-6 pb-10 pr-4 pl-4"),children:e.map((function(e){return"sauce"===e.type&&Object(p.jsx)(U,{ingredient:e},e._id)}))}),Object(p.jsx)("h2",{id:"main",className:"mb-6 text text_type_main-medium",children:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438"}),Object(p.jsx)("ul",{className:"".concat(h.a.list," pt-6 pb-10 pr-4 pl-4"),children:e.map((function(e){return"main"===e.type&&Object(p.jsx)(U,{ingredient:e},e._id)}))})]})]})},X=n(33),J=n.n(X),K="GET_ORDER_DATA",z="GET_ORDER_DATA_FAILED",V="GET_ORDER_DATA_SUCCESS",Y="DELETE_ORDER_DATA";function W(e){return function(t){t({type:K}),D.sendIngredients(e).then((function(e){e&&t(function(e){return{type:V,payload:e}}(e))})).then((function(){t({type:A})})).catch((function(){return t({type:z})}))}}var Q=n(194),Z=n(192),$=n(41),ee=n(93),te=n.n(ee),ne=function(e){var t=e.ingredient,n=e.id,i=e.moveIngredient,a=e.index,r=t.name,o=t.price,l=t.image,d=Object(s.b)(),_=Object(s.c)((function(e){return e.ingredientsData.chosenIngredients})),j=Object(c.useRef)(null),b=Object(Q.a)({accept:"chosen-ingredient",collect:function(e){return{handlerId:e.getHandlerId()}},drop:function(e,t){var n;if(j.current){var c=e.index,r=a;if(c!==r){var s=null===(n=j.current)||void 0===n?void 0:n.getBoundingClientRect(),o=(s.bottom-s.top)/2,l=t.getClientOffset().y-s.top;c<r&&l<o||c>r&&l>o||(i(c-1,r-1),e.index=r)}}}}),O=Object(m.a)(b,2),x=O[0].handlerId,h=O[1],f=Object(v.a)({type:"chosen-ingredient",item:function(){return{id:n,index:a}},collect:function(e){return{isDragging:e.isDragging()}}}),g=Object(m.a)(f,2),y=g[0].isDragging?0:1;(0,g[1])(h(j));var N;return Object(p.jsxs)("li",{ref:j,style:{opacity:y},"data-handler-id":x,className:te.a.list_item,children:[Object(p.jsx)(u.DragIcon,{}),Object(p.jsx)(u.ConstructorElement,{text:r,price:o,thumbnail:l,handleClose:(N=t,function(){var e=_.indexOf(N),t=_.slice();t.splice(e,1),d({type:L,payload:t})})})]})},ce=n(94),ie=n.n(ce),ae=function(e){var t=e.onDropHandler,n=Object(s.b)(),i=Object(s.c)((function(e){return e.ingredientsData.chosenIngredients})),a=Object(c.useMemo)((function(){return i.reduce((function(e,t){return"bun"===t.type?e+2*t.price:e+t.price}),0)}),[i]),r=Object(Q.a)({accept:"ingredient",drop:function(e){t(e)},collect:function(e){return{isHover:e.isOver()}}}),o=Object(m.a)(r,2),l=o[0].isHover,d=o[1],_=Object(c.useCallback)((function(e,t){var c,a=i.filter((function(e){return"bun"===e.type})),r=i.filter((function(e){return"bun"!==e.type})),s=ie()(r,{$splice:[[e,1],[t,0,r[e]]]},[r]),o=[].concat(Object(O.a)(a),Object(O.a)(s));n((c=Object(O.a)(o),{type:q,payload:c}))}),[i,n]),j=l?"#5147F8":"transparent",b=function(e,t,n,c){return e.find((function(e){return"bun"===e.type}))?"".concat(e.find((function(e){return"bun"===e.type}))[t]," ").concat(n):c};return Object(p.jsx)(Z.a,{backend:$.a,children:Object(p.jsxs)("div",{ref:d,style:{borderColor:j},className:"".concat(J.a.constructor_container," mt-25 pt-5 pb-5"),children:[Object(p.jsx)("div",{className:"".concat(J.a.constructor_element," pr-5"),children:i.length>0?Object(p.jsx)(u.ConstructorElement,{type:"top",isLocked:!0,text:b(i,"name","(\u0432\u0435\u0440\u0445)","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u043b\u043a\u0443"),price:b(i,"price","","0"),thumbnail:b(i,"image","","")}):Object(p.jsx)("p",{className:"text text_type_main-large pt-3",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u043b\u043a\u0443"})}),Object(p.jsx)("ul",{className:"".concat(J.a.list," pl-4 pr-4"),children:i.map((function(e,t){return"bun"!==e.type&&Object(p.jsx)(ne,{index:t,moveIngredient:_,ingredient:e,id:"".concat(e._id).concat(t)},e.uuid)}))}),Object(p.jsx)("div",{className:"pr-5",children:i.length>0&&Object(p.jsx)(u.ConstructorElement,{type:"bottom",isLocked:!0,text:b(i,"name","(\u043d\u0438\u0437)","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u043b\u043a\u0443"),price:b(i,"price","","0"),thumbnail:b(i,"image","","")})}),Object(p.jsxs)("div",{className:"".concat(J.a.button_container," pt-5 pr-5"),children:[Object(p.jsxs)("div",{className:"mr-10",children:[Object(p.jsx)("span",{className:"text text_type_digits-medium mr-2",children:a}),Object(p.jsx)(u.CurrencyIcon,{type:"primary"})]}),Object(p.jsx)(u.Button,{disabled:!(i.length>0),onClick:function(){var e=i.map((function(e){return e._id}));n(W(e)),n(F(!0))},className:"pt-10",type:"primary",size:"medium",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})})},re=n(66),se=n.n(re),oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ingredientsData.chosenIngredients})),n=Object(s.c)((function(e){return e.ingredientsData.ingredients}));return Object(p.jsx)("main",{className:se.a.main,children:Object(p.jsx)(Z.a,{backend:$.a,children:Object(p.jsxs)("section",{className:se.a.main_container,children:[Object(p.jsx)(H,{}),Object(p.jsx)(ae,{onDropHandler:function(c){var i=n.find((function(e){return e._id===c._id})),a=t.find((function(e){return"bun"===e.type})),r=t.indexOf(a);if("bun"===i.type&&a){var s=t.slice();s.splice(r,1,i),e(G(s))}else e(G([].concat(Object(O.a)(t),[i])))}})]})})})},le=n(43),de=n.n(le),ue=n.p+"static/media/done.cc5a59a7.gif",_e=function(){var e=Object(s.c)((function(e){return e.orderData.orderDetails}));return Object(p.jsxs)("div",{className:"".concat(de.a.container),children:[Object(p.jsx)("h3",{className:"text text_type_digits-large pt-10 ".concat(de.a.title),children:e.order.number}),Object(p.jsx)("p",{className:"text text_type_main-medium pt-8 pb-15",children:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(p.jsx)("img",{className:"pb-15",src:ue,alt:"\u0447\u0435\u043a\u0430\u0443\u0442"}),Object(p.jsx)("p",{className:"text text_type_main-default pb-2 ".concat(de.a.text),children:e.success?"\u0412\u0430\u0448 '".concat(e.name,"' \u043d\u0430\u0447\u0430\u043b\u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c"):"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u043d\u0430 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435"}),e.success&&Object(p.jsx)("p",{className:"text text_type_main-default text_color_inactive pb-15",children:"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0440\u0431\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438"})]})},je=n(23),pe=n.n(je),be=function(){var e=Object(s.c)((function(e){return e.ingredientsData.selectedIngredient}));return Object(p.jsxs)("div",{className:"".concat(pe.a.container),children:[Object(p.jsx)("img",{width:"480",height:"240",alt:e.name,src:e&&e.image}),Object(p.jsx)("p",{className:"text text_type_main-medium pt-4 pb-8",children:e&&e.name}),Object(p.jsxs)("ul",{className:"".concat(pe.a.list," pt-8"),children:[Object(p.jsxs)("li",{className:"".concat(pe.a.listItem," text text_type_main-default text_color_inactive"),children:[Object(p.jsx)("span",{children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0438,\u043a\u043a\u0430\u043b"}),e.calories]}),Object(p.jsxs)("li",{className:"".concat(pe.a.listItem," text text_type_main-default text_color_inactive"),children:[Object(p.jsx)("span",{children:"\u0411\u0435\u043b\u043a\u0438, \u0433"}),e.proteins]}),Object(p.jsxs)("li",{className:"".concat(pe.a.listItem," text text_type_main-default text_color_inactive"),children:[Object(p.jsx)("span",{children:"\u0416\u0438\u0440\u044b, \u0433"}),e.fat]}),Object(p.jsxs)("li",{className:"".concat(pe.a.listItem," text text_type_main-default text_color_inactive"),children:[Object(p.jsx)("span",{children:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b, \u0433"}),e.carbohydrates]})]})]})},Oe=n(34),me=n.n(Oe),xe=n(95),he=n.n(xe),fe=function(e){var t=e.handlePopupClose;return Object(p.jsx)("div",{onClick:t,className:he.a.overlay})},ge=function(e){var t=e.handlePopupClose,n=e.children,i=e.title,r=void 0===i?"":i,s=document.getElementById("react-modals");return Object(c.useEffect)((function(){var e=function(e){"Escape"===e.key&&t()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[t]),Object(a.createPortal)(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"".concat(me.a.container," pt-15 pr-10 pl-10 pb-15"),children:[Object(p.jsxs)("header",{className:me.a.header,children:[r&&Object(p.jsx)("h2",{className:"".concat(me.a.title," text text_type_main-large"),children:r}),Object(p.jsx)("button",{onClick:t,className:me.a.closeButton,children:Object(p.jsx)(u.CloseIcon,{type:"primary"})})]}),n]}),Object(p.jsx)(fe,{handlePopupClose:t})]}),s)},ye=n(67),ve=n.n(ye),Ne=function(){return Object(p.jsx)("div",{className:ve.a.loader_container,children:Object(p.jsx)("div",{className:ve.a.loader})})},Ee=function(){var e=Object(s.c)((function(e){return e.orderData.orderDetails})),t=Object(s.c)((function(e){return e.popupState.isIngredientsPopupOpen})),n=Object(s.c)((function(e){return e.popupState.isOrderDetailsPopupOpen})),i=Object(s.c)((function(e){return e.ingredientsData.ingredientsRequest})),a=Object(s.b)();Object(c.useEffect)((function(){a((function(e){e({type:C}),D.getIngredients().then((function(t){t&&e({type:R,payload:t.data})})).catch((function(t){return e({type:T})}))}))}),[a]);var r=function(){a(n?F(!1):M(!1)),a(n?{type:Y}:{type:k})};return Object(p.jsx)("div",{className:"".concat(l.a.app," pb-10"),children:i?Object(p.jsx)(Ne,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)(oe,{}),n&&Object(p.jsx)(ge,{handlePopupClose:r,children:e?Object(p.jsx)(_e,{}):Object(p.jsx)(Ne,{})}),t&&Object(p.jsx)(ge,{handlePopupClose:r,title:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u043e\u0432",children:Object(p.jsx)(be,{})})]})})},De=n(19),Ie=n(3),Ce={ingredients:[],selectedIngredient:null,chosenIngredients:[],ingredientsRequest:!1,ingredientsFailed:!1},Te={orderDetails:null,orderRequest:!1,orderFailed:!1},Re={isOrderDetailsPopupOpen:!1,isIngredientsPopupOpen:!1},Se=Object(De.b)({ingredientsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(Ie.a)(Object(Ie.a)({},e),{},{chosenIngredients:[]});case q:case L:return Object(Ie.a)(Object(Ie.a)({},e),{},{chosenIngredients:t.payload});case T:return Object(Ie.a)(Object(Ie.a)({},e),{},{ingredientsRequest:!1,ingredientsFailed:!0});case R:return Object(Ie.a)(Object(Ie.a)({},e),{},{ingredientsRequest:!1,ingredients:t.payload});case C:return Object(Ie.a)(Object(Ie.a)({},e),{},{ingredientsRequest:!0,ingredientsFailed:!1});case S:return Object(Ie.a)(Object(Ie.a)({},e),{},{selectedIngredient:t.payload});case k:return Object(Ie.a)(Object(Ie.a)({},e),{},{selectedIngredient:null});case P:return console.log(t.payload),Object(Ie.a)(Object(Ie.a)({},e),{},{chosenIngredients:t.payload});default:return e}},orderData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(Ie.a)(Object(Ie.a)({},e),{},{orderRequest:!0,orderFailed:!1});case z:return Object(Ie.a)(Object(Ie.a)({},e),{},{orderRequest:!1,orderFailed:!0});case V:return Object(Ie.a)(Object(Ie.a)({},e),{},{orderRequest:!1,orderDetails:t.payload});case Y:return Object(Ie.a)(Object(Ie.a)({},e),{},{orderDetails:null});default:return e}},popupState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(Ie.a)(Object(Ie.a)({},e),{},{isOrderDetailsPopupOpen:t.payload});case B:return Object(Ie.a)(Object(Ie.a)({},e),{},{isIngredientsPopupOpen:t.payload});default:return e}}}),ke=n(96),Pe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):De.c)(Object(De.a)(ke.a)),Le=Object(De.d)(Se,Pe);r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(s.a,{store:Le,children:Object(p.jsx)(Ee,{})})})}),document.getElementById("root"))},22:function(e,t,n){e.exports={main_container:"burger-ingredients_main_container__3Baoy",list:"burger-ingredients_list__3uRcv",ingredients_container:"burger-ingredients_ingredients_container__2-v-q"}},23:function(e,t,n){e.exports={container:"ingredient-details_container__3phN_",list:"ingredient-details_list__3M1Hh",listItem:"ingredient-details_listItem__10Akm",title:"ingredient-details_title__XLESx",header:"ingredient-details_header__3Axc5",closeButton:"ingredient-details_closeButton__1bqpc"}},33:function(e,t,n){e.exports={list:"burger-constructor_list__1O9lC",constructor_container:"burger-constructor_constructor_container__3uA-3",button_container:"burger-constructor_button_container__p1UW7"}},34:function(e,t,n){e.exports={container:"modal_container__6OgBd",title:"modal_title__6pRUP",header:"modal_header__2o5Lw",closeButton:"modal_closeButton__isCPO"}},43:function(e,t,n){e.exports={title:"order-details_title__1Kar7",text:"order-details_text__2iKwJ",container:"order-details_container__j7JKe",header:"order-details_header__24snd",closeButton:"order-details_closeButton__SyKKN"}},66:function(e,t,n){e.exports={main:"main_main__BffvW",main_container:"main_main_container__1zuyq"}},67:function(e,t,n){e.exports={loader_container:"loader_loader_container__3YF2k",loader:"loader_loader__2CMi6",rotate:"loader_rotate__24DC1"}},89:function(e,t,n){e.exports={app:"app_app__3noti"}},93:function(e,t,n){e.exports={list_item:"chosen-ingredient_list_item__3RzN9"}},95:function(e,t,n){e.exports={overlay:"modal-overlay_overlay__1md7D"}}},[[186,1,2]]]);
//# sourceMappingURL=main.2127e0cd.chunk.js.map