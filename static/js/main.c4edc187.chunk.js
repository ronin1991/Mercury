(this.webpackJsonpmercury=this.webpackJsonpmercury||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),s=c.n(r),i=(c(22),c(23),c(24),c(0)),l=function(e){return Object(i.jsx)("div",{className:"Background",children:e.children})},o=c(3),d=(c(26),c(2)),j=c.n(d),u=function(e){var t=e.children,c=e.className;return Object(i.jsx)("div",{className:j()("CardTitle",c),children:t})},h=(c(27),function(e){var t=e.children;return Object(i.jsx)("div",{className:"Card",children:t})}),b=(c(28),function(e){var t=e.children;return Object(i.jsx)("div",{className:"CardForm",children:t})}),m=(c(29),function(e){var t=e.children,c=e.options,a=e.className,r=e.onSelect,s=Object(n.useState)(!1),l=Object(o.a)(s,2),d=l[0],u=l[1],h=Object(n.useState)(""),b=Object(o.a)(h,2),m=b[0],f=b[1],O=j()("Select__current",{Select__current_selected:m});return Object(i.jsxs)("div",{className:j()("Select",a),onClick:function(){u(!d)},children:[Object(i.jsxs)("div",{className:"Select__header",children:[Object(i.jsx)("div",{className:O,children:Object(i.jsx)("span",{children:m||t})}),Object(i.jsx)("div",{className:"Select__icon",children:Object(i.jsx)("svg",{className:j()({Select__arrow_top:d}),width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2929 4.29297L14.7071 5.70718L8.00001 12.4143L1.29291 5.70718L2.70712 4.29297L8.00001 9.58586L13.2929 4.29297Z",fill:"#8083A4"})})})]}),d&&Object(i.jsx)("div",{className:"Select__menu",children:c.map((function(e,t){return Object(i.jsx)("div",{className:"Select__item",onClick:function(){return function(e){r(e),f(e.name)}(e)},children:Object(i.jsx)("span",{children:e.name})},"".concat(e.name).concat(t))}))})]})}),f=c.p+"static/media/noWeather.a09393d9.png",O=(c(30),function(e){var t=e.className;return Object(i.jsxs)("div",{className:j()("NoWeatherCard",t),children:[Object(i.jsx)("img",{className:"NoWeatherCard__img",src:f,alt:"noWeather",width:"160",height:"160"}),Object(i.jsx)("span",{className:"NoWeatherCard__title",children:"Fill in all the fields and the weather will be displayed"})]})}),p=(c(31),function(e){var t=e.onSelectDay;return Object(i.jsx)("div",{className:"Calendar",children:Object(i.jsx)("input",{className:"Calendar__input",type:"date",onChange:function(e){t(e.target.value)}})})}),x=[{name:"\u0421\u0430\u043c\u0430\u0440\u0430",lat:53.195873,lon:50.100193},{name:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",lat:53.507836,lon:49.420393},{name:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",lat:51.533557,lon:46.034257},{name:"\u041a\u0430\u0437\u0430\u043d\u044c",lat:55.796127,lon:49.106405},{name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",lat:45.03547,lon:38.975313}],_=c(5),v=c.n(_),N=c(6),g=c(7),w=c.n(g),S=(c(51),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),y=function(e){var t=e.data,c=e.className,n=t.temp,a=t.dt,r=t.icon;return Object(i.jsxs)("div",{className:j()("CardWeather",c),children:[Object(i.jsx)("div",{className:"CardWeather__date",children:function(e){var t=new Date(1e3*e),c=t.getDate(),n=S[t.getMonth()],a=t.getFullYear();return"".concat(c," ").concat(n," ").concat(a)}(a)}),Object(i.jsx)("div",{className:"CardWeather__icon",children:Object(i.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(r,"@2x.png"),alt:"weather"})}),Object(i.jsxs)("div",{className:"CardWeather__temperature",children:["+",Math.floor(n.day),"\xb0"]})]})},C=(c(52),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(o.a)(r,2),l=s[0],d=s[1],j=function(e,t){var c=Object(n.useState)(),a=Object(o.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){e&&t&&function(){var c=Object(N.a)(v.a.mark((function c(){var n,a,r,i,l;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.lat,a=e.lon,r=Date.parse(t)/1e3,console.log(r),c.next=5,w.a.get("http://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat=".concat(n,"&lon=").concat(a,"&dt=").concat(r,"&appid=94f6f0535fb640ce9b8b030ad3d5f5ee"));case 5:i=c.sent,l=i.data,console.log(l),s(l);case 9:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()()}),[e,t]),r}(c,l);return Object(i.jsxs)(h,{children:[Object(i.jsx)(u,{className:"ForecastForDay__title",children:"Forecast for a Date in the Past"}),Object(i.jsxs)(b,{children:[Object(i.jsx)(m,{options:x,className:"ForecastForDay__select",onSelect:a,children:"Select city"}),Object(i.jsx)(p,{onSelectDay:d})]}),j?Object(i.jsx)(y,{data:function(){var e=j.current;return{dt:e.dt,temp:{day:e.temp},icon:j.current.weather[0].icon}}(),className:"ForecastForDay__card"}):Object(i.jsx)(O,{className:""}),Object(i.jsx)("p",{children:l})]})}),L=(c(53),function(e){return Object(i.jsxs)("div",{className:j()("Header",e.className),children:[Object(i.jsx)("div",{className:"Header__left-world",children:"Weather"}),Object(i.jsx)("div",{className:"Header__right-world",children:"forecast"})]})}),F=(c(54),function(e){var t=e.className,c=e.cardWeatherData,a=Object(n.useState)(0),r=Object(o.a)(a,2),s=r[0],l=r[1],d=s+3,u=j()("Slider__button","Slider__button_left",{Slider__button_disabled:s<=0}),h=j()("Slider__button","Slider__button_right",{Slider__button_disabled:d===c.length});return Object(i.jsxs)("div",{className:j()("Slider",t),children:[Object(i.jsx)("div",{className:u,onClick:function(){return l(s-1)},children:Object(i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5858 12.0001L7.29286 19.293L8.70708 20.7072L17.4142 12.0001L8.70708 3.29297L7.29286 4.70718L14.5858 12.0001Z",fill:"#8083A4"})})}),c.slice(s,d).map((function(e){var t=e.dt,c=e.temp,n=e.weather[0].icon;return Object(i.jsx)(y,{data:{dt:t,temp:c,icon:n},className:""},e.dt)})),Object(i.jsx)("div",{className:h,onClick:function(){return l(s+1)},children:Object(i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5858 12.0001L7.29286 19.293L8.70708 20.7072L17.4142 12.0001L8.70708 3.29297L7.29286 4.70718L14.5858 12.0001Z",fill:"#8083A4"})})})]})}),D=(c(55),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],r=function(e){var t=Object(n.useState)(),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){e&&function(){var t=Object(N.a)(v.a.mark((function t(){var c,n,a,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.lat,n=e.lon,t.next=3,w.a.get("https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=".concat(c,"&lon=").concat(n,"&exclude=alerts,current,minutely,hourly&appid=94f6f0535fb640ce9b8b030ad3d5f5ee"));case 3:a=t.sent,s=a.data,r(s);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),a}(c);return Object(i.jsxs)(h,{children:[Object(i.jsx)(u,{className:"SevenDaysForecast__title",children:"7 Days Forecast"}),Object(i.jsx)(b,{children:Object(i.jsx)(m,{options:x,className:"SevenDaysForecast__select",onSelect:a,children:"Select city"})}),r?Object(i.jsx)(F,{className:"SevenDaysForecast__slider",cardWeatherData:r.daily}):Object(i.jsx)(O,{className:"SevenDaysForecast__noWeather"})]})});var W=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(l,{children:Object(i.jsxs)("div",{className:"App__wrapper",children:[Object(i.jsx)(L,{className:"App__header"}),Object(i.jsxs)("main",{className:"App__main",children:[Object(i.jsx)(D,{}),Object(i.jsx)(C,{})]}),Object(i.jsx)("footer",{className:"App__footer",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.c4edc187.chunk.js.map