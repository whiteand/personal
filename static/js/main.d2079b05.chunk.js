(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{11:function(e,t,n){e.exports={canvas:"Background_canvas__1yauc"}},14:function(e,t,n){e.exports={header:"Header_header__3PefX"}},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(10),o=n.n(a),s=(n(19),n(25)),c=n(11),u=n.n(c),h=n(3),l=n.n(h),f=n(12),d=n(2);function m(e,t,n){return Object(d.a)(e.createShader(n)).chain((function(i){return e.shaderSource(i,t),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?Object(d.b)(i):(console.log("error during rendering of",n===e.VERTEX_SHADER?"vertex":"fragment","shader"),console.log(e.getShaderInfoLog(i)),e.deleteShader(i),Object(d.c)())}))}function g(e){return m(e,"\n  attribute vec4 aPosition;\n\n  void main() {\n    gl_Position = aPosition;\n  }\n",e.VERTEX_SHADER).chain((function(t){return m(e,"\n  precision highp float;\n\n  uniform vec2 uMousePos;\n  uniform vec2 uResolution;\n  uniform float uTime;\n\n  float N = 60.0;\n\n  void main() {\n    float d = distance(gl_FragCoord.xy, uMousePos.xy);\n    vec2 dir = normalize(uMousePos.xy - gl_FragCoord.xy);\n    float force = 1500000.0 * (sin(uTime / 40.0)+1.0);\n    vec2 pos = gl_FragCoord.xy + dir * force / d / d;\n    float xrem = (pos.x - floor(pos.x / N) * N);\n    float yrem = (pos.y - floor(pos.y / N) * N);\n    float dx = abs(xrem - 30.0);\n    float dy = abs(yrem - 30.0);\n    float dr = dx * dx + dy * dy;\n    if (dr <= 10.0) {\n      gl_FragColor = vec4(0.4, 0.8, 1.0, 1.0);\n    } else {\n      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }\n  }\n",e.FRAGMENT_SHADER).chain((function(n){return Object(d.a)(e.createProgram()).chain((function(i){e.attachShader(i,t),e.attachShader(i,n),e.linkProgram(i);var r=e.getProgramParameter(i,e.LINK_STATUS);return r||(console.log(e.getProgramInfoLog(i)),e.deleteProgram(i)),r?Object(d.b)(i):Object(d.c)()}))}))}))}function v(){return(v=Object(f.a)(l.a.mark((function e(t){var n,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.a)(t.getContext("webgl")),i=n.chain((function(e){return g(e)})),r=i.chain((function(e){return n.chain((function(t){var n=t.getAttribLocation(e,"aPosition"),i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i);var r=[-1,1,1,1,-1,-1,1,1,1,-1,-1,-1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW);var a=t.getUniformLocation(e,"uMousePos"),o=t.getUniformLocation(e,"uResolution"),s=t.getUniformLocation(e,"uTime");return Object(d.b)((function(c){t.viewport(0,0,c.width,c.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(e),t.enableVertexAttribArray(n),t.bindBuffer(t.ARRAY_BUFFER,i),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),t.uniform2fv(a,[Math.floor(c.pointer.x),c.height-Math.floor(c.pointer.y)]),t.uniform2fv(o,[c.width,c.height]),t.uniform1f(s,c.time),t.drawArrays(t.TRIANGLES,0,r.length/2)}))}))})),e.abrupt("return",r.isJust()?r.value:function(){});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(4),x=n(5),p=function(){function e(t,n,i,r,a,o){Object(b.a)(this,e),this.x=void 0,this.y=void 0,this.vx=void 0,this.vy=void 0,this.ax=void 0,this.ay=void 0,this.lastTime=void 0,this.x=t,this.y=n,this.vx=i,this.vy=r,this.ax=a,this.ay=o,this.lastTime=0}return Object(x.a)(e,[{key:"update",value:function(e){if(this.lastTime){var t=e-this.lastTime;this.vx=this.ax*t+this.vx,this.vy=this.ay*t+this.vy,this.x=this.vx*t+this.x,this.y=this.vy*t+this.y,this.lastTime=e}else this.lastTime=e}}]),e}();var y=n(0);var j,w=function(){var e=Object(i.useRef)({width:window.innerWidth,height:window.innerHeight,time:0,previousTime:-1,pointer:new p(window.innerWidth/2,window.innerHeight/2,.1*Math.random(),.1*Math.random(),0,0),mouseX:0,mouseY:0}),t=Object(i.useRef)(null);return Object(i.useEffect)((function(){var n=t.current;if(n){var i=!1,r=null,a=function(){};return function(e){return v.apply(this,arguments)}(n).then((function(e){i||(a=e,r=requestAnimationFrame(o))})),function(){i=!0,r&&cancelAnimationFrame(r)}}function o(t){r=requestAnimationFrame(o),function(e,t){if(e.previousTime=e.time,e.time=t/100,0!==e.mouseY||0!==e.mouseX){var n=e.mouseY-e.pointer.y,i=e.mouseX-e.pointer.x,r=Math.hypot(i,n),a=Math.atan2(n,i);e.pointer.ax=r>1?.001*Math.cos(a):0,e.pointer.ay=r>1?.001*Math.sin(a):0,e.pointer.vx=Math.sign(e.pointer.vx)*Math.min(.1,Math.abs(e.pointer.vx)),e.pointer.vy=Math.sign(e.pointer.vy)*Math.min(.1,Math.abs(e.pointer.vy))}else e.pointer.ax=0,e.pointer.ay=0;e.pointer.x<-100&&(e.pointer.x=Math.max(e.pointer.x,-100),e.pointer.vx=Math.min(1,Math.abs(e.pointer.vx))),e.pointer.x>e.width+100&&(e.pointer.x=Math.min(e.pointer.x,e.width+100),e.pointer.vx=-Math.min(Math.abs(e.pointer.vx),1)),e.pointer.y<-100&&(e.pointer.y=Math.max(e.pointer.y,-100),e.pointer.vy=Math.min(1,Math.abs(e.pointer.vy))),e.pointer.y>e.height+100&&(e.pointer.y=Math.min(e.pointer.y,e.height+100),e.pointer.vy=-Math.min(1,Math.abs(e.pointer.vy))),e.pointer.update(t)}(e.current,t),a(e.current)}}),[]),Object(i.useLayoutEffect)((function(){var n=function(){e.current.width=window.innerWidth,e.current.height=window.innerHeight,t.current&&(t.current.width=e.current.width,t.current.height=e.current.height)},i=Object(s.a)(window,"resize").subscribe(n);return n(),function(){i.unsubscribe()}}),[e]),Object(i.useEffect)((function(){var t=Object(s.a)(window,"mousemove").subscribe((function(t){e.current.mouseX=t.clientX,e.current.mouseY=t.clientY}));return t.add(Object(s.a)(window,"mouseout").subscribe((function(){e.current.mouseX=0,e.current.mouseY=0}))),function(){t.unsubscribe()}}),[]),Object(y.jsx)("canvas",{ref:t,className:u.a.canvas})},O=(n(22),n(9)),k=n(8),M=n(13),T=n.n(M),_=n(6),S=n.n(_);!function(e){e.Blinking="Blinking",e.Idle="Idle"}(j||(j={}));var A,R=l.a.mark(F);function E(e,t){for(var n=0,i=Math.min(e.length,t.length);e[n]===t[n]&&n<i;)n++;return e.slice(0,n)}function F(e){var t,n,i,r,a,o,s;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(e.length<=0)){c.next=2;break}return c.abrupt("return");case 2:t="";case 3:0,n=0;case 5:if(!(n<e.length)){c.next=30;break}i=e[n],r=t.length;case 8:if(!(r<i.length)){c.next=15;break}return t=i.slice(0,r),c.next=12,{cursorState:j.Idle,text:i.slice(0,r),nextStepTimeout:100};case 12:r++,c.next=8;break;case 15:return c.next=17,{cursorState:j.Blinking,text:i,nextStepTimeout:4e3};case 17:a=e[(n+1)%e.length],o=E(a,i),s=i.length-1;case 20:if(!(s>=o.length)){c.next=27;break}return t=i.slice(0,s),c.next=24,{cursorState:j.Idle,text:t,nextStepTimeout:50};case 24:s--,c.next=20;break;case 27:n++,c.next=5;break;case 30:c.next=3;break;case 32:case"end":return c.stop()}}),R)}var P=(A={},Object(k.a)(A,j.Blinking,S.a.blinking),Object(k.a)(A,j.Idle,S.a.idle),A);var B=function(e){var t=e.texts,n=Object(i.useState)(t[0]||""),r=Object(O.a)(n,2),a=r[0],o=r[1],s=Object(i.useState)(j.Blinking),c=Object(O.a)(s,2),u=c[0],h=c[1];return Object(i.useEffect)((function(){var e=F(t),n=null;return function t(){var i=e.next();i.done||(o(i.value.text),h(i.value.cursorState),n=window.setTimeout(t,i.value.nextStepTimeout))}(),function(){n&&clearTimeout(n)}}),[t]),t.length<=0?null:Object(y.jsxs)("span",{children:[a,Object(y.jsx)("span",{className:T()(S.a.cursor,P[u]),children:"\xa0"})]})},I=n(14),L=n.n(I),C=[" likes programming"," likes algorithms"," likes to create custom charts"," likes making custom charts"," likes rxjs"," likes geometry"," likes math"," likes engineering"," plays the violin"," is ready to help"," is a frontend developer"," has a bachelor degree in Software Engineering"," practises shader programming here"," lives in Kyiv"," loves his wife"];function N(){return Object(y.jsx)("header",{className:L.a.header,children:Object(y.jsxs)("div",{children:["Andrew Beletskiy",Object(y.jsx)("br",{}),Object(y.jsx)(B,{texts:C})]})})}var U=function(){return Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(w,{}),Object(y.jsx)(N,{})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root")),Y()},6:function(e,t,n){e.exports={cursor:"EnteringTextAnimation_cursor__18K7-",blinking:"EnteringTextAnimation_blinking__2YrR2",blink:"EnteringTextAnimation_blink__BUM9a"}}},[[23,1,2]]]);
//# sourceMappingURL=main.d2079b05.chunk.js.map