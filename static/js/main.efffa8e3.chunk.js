(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{11:function(e,t,n){e.exports={canvas:"Background_canvas__1yauc"}},14:function(e,t,n){e.exports={header:"Header_header__3PefX"}},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(10),o=n.n(a),s=(n(19),n(25)),c=n(11),u=n.n(c),h=n(3),l=n.n(h),f=n(12),d=n(2);function v(e,t,n){return Object(d.a)(e.createShader(n)).chain((function(r){return e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?Object(d.b)(r):(console.log("error during rendering of",n===e.VERTEX_SHADER?"vertex":"fragment","shader"),console.log(e.getShaderInfoLog(r)),e.deleteShader(r),Object(d.c)())}))}function b(e){return v(e,"\n  attribute vec4 aPosition;\n\n  void main() {\n    gl_Position = aPosition;\n  }\n",e.VERTEX_SHADER).chain((function(t){return v(e,"\n  precision highp float;\n\n  uniform vec2 uMousePos;\n  uniform vec2 uResolution;\n\n  float N = 50.0;\n\n  void main() {\n    float d = distance(gl_FragCoord.xy, uMousePos.xy);\n    vec2 dir = normalize(uMousePos.xy - gl_FragCoord.xy);\n    vec2 pos = gl_FragCoord.xy + dir * 400000.0 / d / d;\n    int xrem = int((pos.x - floor(pos.x / N) * N));\n    int yrem = int((pos.y - floor(pos.y / N) * N));\n    if (xrem < 3 && yrem < 3) {\n      gl_FragColor = vec4(0.4, 0.8, 1.0, 1.0);\n    } else {\n      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }\n  }\n",e.FRAGMENT_SHADER).chain((function(n){return Object(d.a)(e.createProgram()).chain((function(r){e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r);var i=e.getProgramParameter(r,e.LINK_STATUS);return i||(console.log(e.getProgramInfoLog(r)),e.deleteProgram(r)),i?Object(d.b)(r):Object(d.c)()}))}))}))}function m(){return(m=Object(f.a)(l.a.mark((function e(t){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.a)(t.getContext("webgl")),r=n.chain((function(e){return b(e)})),i=r.chain((function(e){return n.chain((function(t){var n=t.getAttribLocation(e,"aPosition"),r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r);var i=[-1,1,1,1,-1,-1,1,1,1,-1,-1,-1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);var a=t.getUniformLocation(e,"uMousePos"),o=t.getUniformLocation(e,"uResolution");return Object(d.b)((function(s){t.viewport(0,0,s.width,s.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(e),t.enableVertexAttribArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),t.uniform2fv(a,[Math.floor(s.pointer.x),s.height-Math.floor(s.pointer.y)]),t.uniform2fv(o,[s.width,s.height]),t.drawArrays(t.TRIANGLES,0,i.length/2)}))}))})),e.abrupt("return",i.isJust()?i.value:function(){});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(4),x=n(5),p=function(){function e(t,n,r,i,a,o){Object(g.a)(this,e),this.x=void 0,this.y=void 0,this.vx=void 0,this.vy=void 0,this.ax=void 0,this.ay=void 0,this.lastTime=void 0,this.x=t,this.y=n,this.vx=r,this.vy=i,this.ax=a,this.ay=o,this.lastTime=0}return Object(x.a)(e,[{key:"update",value:function(e){if(this.lastTime){var t=e-this.lastTime;this.vx=this.ax*t+this.vx,this.vy=this.ay*t+this.vy,this.x=this.vx*t+this.x,this.y=this.vy*t+this.y,this.lastTime=e}else this.lastTime=e}}]),e}();var j=n(0);var y,O=function(){var e=Object(r.useRef)({width:window.innerWidth,height:window.innerHeight,time:0,previousTime:-1,pointer:new p(window.innerWidth/2,window.innerHeight/2,.1*Math.random(),.1*Math.random(),0,0),mouseX:0,mouseY:0}),t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=t.current;if(n){var r=!1,i=null,a=function(){};return function(e){return m.apply(this,arguments)}(n).then((function(e){r||(a=e,i=requestAnimationFrame(o))})),function(){r=!0,i&&cancelAnimationFrame(i)}}function o(t){i=requestAnimationFrame(o),function(e,t){if(e.previousTime=e.time,e.time=t/100,0!==e.mouseY||0!==e.mouseX){var n=e.mouseY-e.pointer.y,r=e.mouseX-e.pointer.x,i=Math.hypot(r,n),a=Math.atan2(n,r);e.pointer.ax=i>1?.001*Math.cos(a):0,e.pointer.ay=i>1?.001*Math.sin(a):0,e.pointer.vx=Math.sign(e.pointer.vx)*Math.min(.1,Math.abs(e.pointer.vx)),e.pointer.vy=Math.sign(e.pointer.vy)*Math.min(.1,Math.abs(e.pointer.vy))}e.pointer.x<0&&(e.pointer.vx=Math.abs(e.pointer.vx)),e.pointer.x>e.width&&(e.pointer.vx=-Math.abs(e.pointer.vx)),e.pointer.y<0&&(e.pointer.vy=Math.abs(e.pointer.vy)),e.pointer.y>e.height&&(e.pointer.vy=-Math.abs(e.pointer.vy)),e.pointer.update(t)}(e.current,t),a(e.current)}}),[]),Object(r.useLayoutEffect)((function(){var n=function(){e.current.width=window.innerWidth,e.current.height=window.innerHeight,t.current&&(t.current.width=e.current.width,t.current.height=e.current.height)},r=Object(s.a)(window,"resize").subscribe(n);return n(),function(){r.unsubscribe()}}),[e]),Object(r.useEffect)((function(){var t=Object(s.a)(window,"mousemove").subscribe((function(t){e.current.mouseX=t.clientX,e.current.mouseY=t.clientY}));return t.add(Object(s.a)(window,"mouseleave").subscribe((function(){e.current.mouseX=0,e.current.mouseY=0}))),function(){t.unsubscribe()}}),[]),Object(j.jsx)("canvas",{ref:t,className:u.a.canvas})},w=(n(22),n(9)),k=n(8),T=n(13),_=n.n(T),A=n(6),S=n.n(A);!function(e){e.Blinking="Blinking",e.Idle="Idle"}(y||(y={}));var M,R=l.a.mark(F);function F(e){var t,n,r,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e.length<=0)){a.next=2;break}return a.abrupt("return");case 2:0,t=0;case 4:if(!(t<e.length)){a.next=25;break}n=e[t],r=0;case 7:if(!(r<n.length)){a.next=13;break}return a.next=10,{cursorState:y.Idle,text:n.slice(0,r),nextStepTimeout:100};case 10:r++,a.next=7;break;case 13:return a.next=15,{cursorState:y.Blinking,text:n,nextStepTimeout:4e3};case 15:i=n.length-1;case 16:if(!(i>=0)){a.next=22;break}return a.next=19,{cursorState:y.Idle,text:n.slice(0,i),nextStepTimeout:50};case 19:i--,a.next=16;break;case 22:t++,a.next=4;break;case 25:a.next=2;break;case 27:case"end":return a.stop()}}),R)}var E=(M={},Object(k.a)(M,y.Blinking,S.a.blinking),Object(k.a)(M,y.Idle,S.a.idle),M);var P=function(e){var t=e.texts,n=Object(r.useState)(t[0]||""),i=Object(w.a)(n,2),a=i[0],o=i[1],s=Object(r.useState)(y.Blinking),c=Object(w.a)(s,2),u=c[0],h=c[1];return Object(r.useEffect)((function(){var e=F(t),n=null;return function t(){var r=e.next();r.done||(o(r.value.text),h(r.value.cursorState),n=window.setTimeout(t,r.value.nextStepTimeout))}(),function(){n&&clearTimeout(n)}}),[t]),t.length<=0?null:Object(j.jsxs)("span",{children:[a,Object(j.jsx)("span",{className:_()(S.a.cursor,E[u]),children:"\xa0"})]})},B=n(14),I=n.n(B),C=[" likes programming"," likes algorithms"," likes create custom charts"," likes making custom charts"," likes rxjs"," likes geometry"," likes math"," likes engineering"," plays the violin"," ready to help"," is a frontend developer"," has a diploma from NTUU KPI"," practise shader programming here"," lives in Kyiv"," love his wife"];function L(){return Object(j.jsx)("header",{className:I.a.header,children:Object(j.jsxs)("div",{children:["Andrew Beletskiy",Object(j.jsx)("br",{}),Object(j.jsx)(P,{texts:C})]})})}var N=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(O,{}),Object(j.jsx)(L,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),U()},6:function(e,t,n){e.exports={cursor:"EnteringTextAnimation_cursor__18K7-",blinking:"EnteringTextAnimation_blinking__2YrR2",blink:"EnteringTextAnimation_blink__BUM9a"}}},[[23,1,2]]]);
//# sourceMappingURL=main.efffa8e3.chunk.js.map