function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r("bUb57");var a=r("eIlw2");const o=document.querySelector(".filter__list"),l=new(0,a.default);o&&async function(){const e=(await l.fetchCategories()).map((({display_name:e})=>e)),t=e.slice(1,8).map(((e,t)=>t<6?`<li class="filter__item filter__item--index${t}">\n          <button class = "filter__btn" type="button">${e}</button></li>`:'<li class="filter__item">\n        <button id = "open-sublist-others" class = "filter__btn filter__btn--sublist btn-others" type="button">Others</button>\n        <button id = "open-sublist-categories" class = "filter__btn filter__btn--sublist btn-categories" type="button">Categories</button>\n      <ul class="filter__list--sub visually-hidden"></ul>\n    </li>')),n=e.slice(1).map(((e,t)=>t<6?`<li class="filter__item--sub filter__item--sub-index${t}">\n      <button class="filter__item--sub-btn type="button">${e}</button>\n    </li>`:`<li class="filter__item--sub">\n    <button class="filter__item--sub-btn type="button">${e}</button>\n    </li>`));o.innerHTML=t.join(""),document.querySelector(".filter__list--sub").insertAdjacentHTML("beforeend",n.join(""))}(),document.addEventListener("click",(function(e){const t=document.querySelector(".filter__list--sub"),n=document.querySelector("#open-sublist-others"),i=document.querySelector("#open-sublist-categories");"open-sublist-others"===e.target.id?(t.classList.toggle("visually-hidden"),n.classList.toggle("open")):"open-sublist-categories"===e.target.id?(t.classList.toggle("visually-hidden"),i.classList.toggle("open")):t.classList.contains("visually-hidden")||(t.classList.toggle("visually-hidden"),n.classList.remove("open"),i.classList.remove("open"))}));var s;function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return e<10?t+e:e},d=function(e){return"".concat(e.getFullYear(),"-").concat(u(e.getMonth()+1),"-").concat(u(e.getDate()))},f=function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},m=function(e){return new Promise((function(t){var n=[],i=g(e).map((function(e){return{date:e.date,iso:e.iso,type:"previous"}})),r=b(e).map((function(e){return{date:e.date,iso:e.iso,type:"current"}}));n=n.concat(i).concat(r);var a=_(e,n.length).map((function(e){return{date:e.date,iso:e.iso,type:"next"}}));t(n.concat(a))}))},y=function(e){return function(t){return Array(e).fill().map(t)}},b=function(e){var t=f(e);return y(t)((function(t,n){var i=n+1;return e.setDate(i),{date:i,iso:d(e)}}))},g=function(e){var t,n,i=e.getMonth(),r=e.getFullYear(),a=Math.min(i-1,11),o=new Date(r,a),l=f(o),s=l-(t=e,n=new Date(t.getFullYear(),t.getMonth(),1).toDateString().substring(0,3),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(n))+1;return y(l-s+1)((function(e,t){var n=s+t;return o.setDate(n),{date:n,iso:d(o)}}))},_=function(e,t){var n=42-t,i=e.getMonth()+1===12?0:e.getMonth()+1,r=0===i?e.getFullYear()+1:e.getFullYear(),a=new Date(r,i);return y(n)((function(e,t){var n=t+1;return a.setDate(n),{date:n,iso:d(a)}}))};s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return n=[{key:"getDates",value:function(e){return new Promise((function(t){return t(m(e).then((function(e){return e.map((function(e){return e}))})))}))}},{key:"getMatrix",value:function(e){return new Promise((function(t){t(m(e).then((function(e){return e.reduce((function(e,t,n){return(n%7==0?e.push([t]):e[e.length-1].push(t))&&e}),[])})))}))}}],c((t=e).prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();a=r("eIlw2");const p={dateBtn:document.querySelector(".date-btn"),dateBtnValue:document.querySelector(".date-btn__value"),dateWrapper:document.querySelector(".date-container"),monthBox:document.querySelector(".calendar-nav__month"),monthValueEl:document.querySelector(".calendar-nav__value--month"),yearValueEl:document.querySelector(".calendar-nav__value--year"),monthPickerBtn:document.querySelector(".calendar-nav__btn--select-month"),monthPicker:document.querySelector(".month-picker"),dayList:document.querySelector(".day-list"),yearIncrement:document.querySelector(".calendar-nav__btn--year-increment"),yearDecrement:document.querySelector(".calendar-nav__btn--year-decrement")},v=["January","February","March","April","May","June","July","August","September","October","November","December"],h=new Date,L=`${h.getFullYear()}-${q(h.getMonth()+1)}-${q(h.getDate())}`,w=new(e(s)),$=new(0,a.default);let S=h.getFullYear(),M=h.getMonth()+1,D=h.getDate();function k(e){const{isInit:t}=e,n=`${q(S)}-${q(M)}-${q(D)}`,i=new Date(n);w.getDates(i).then((e=>{if(e.map(((e,t)=>{const{date:i,iso:r,type:a}=e;!function({date:e,iso:t,type:n},i){let r="";r=t===i?`<li class="day-list__item day-list__item--selected ${n}" data-value="${t}">${e}</li>`:t===L?`<li class="day-list__item day-list__item--current ${n}" data-value="${t}">${e}</li>`:`<li class="day-list__item ${n}" data-value="${t}">${e}</li>`;p.dayList.insertAdjacentHTML("beforeend",r)}(e,n)})),p.monthValueEl.textContent=`${v[M-1]}`,p.yearValueEl.textContent=`${S}`,!t){const e=`${q(D)}/${q(M)}/${S}`;p.dateBtnValue.textContent=e;const t=`${n.replaceAll("-","")}`;$.date=t}})).catch((e=>console.log(e)))}function q(e){return String(e).padStart(2,"0")}p.dateBtn.addEventListener("click",(function(){p.dateWrapper.classList.toggle("is-active")})),p.yearDecrement.addEventListener("click",(function(){S-=1,p.dayList.innerHTML="",k({isInit:!1})})),p.yearIncrement.addEventListener("click",(function(){S+=1,p.dayList.innerHTML="",k({isInit:!1})})),p.monthBox.addEventListener("click",(function(){p.monthPickerBtn.classList.toggle("is-active"),p.monthPicker.classList.toggle("is-active"),function(){if(p.monthPicker.classList.contains("is-active"))return void p.dayList.classList.add("disabled");p.dayList.classList.remove("disabled")}()})),p.monthPicker.addEventListener("click",(function(e){"LI"===e.target.nodeName&&(M=Number(e.target.dataset.month),p.dayList.innerHTML="",k({isInit:!1}))})),p.dayList.addEventListener("click",(function(e){if("LI"===e.target.nodeName){const t=e.target.dataset.value;S=Number(t.slice(0,4)),M=Number(t.slice(5,7)),D=Number(t.slice(8,10)),p.dayList.innerHTML="",k({isInit:!1}),p.dateWrapper.classList.remove("is-active")}})),"Select date"===p.dateBtnValue.textContent&&k({isInit:!0}),r("5yrW8"),r("kwPQ1"),r("2nhTy"),r("9tydV");
//# sourceMappingURL=index.b8a567bc.js.map
