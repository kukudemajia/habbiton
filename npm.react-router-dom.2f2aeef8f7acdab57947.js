(window.webpackJsonphabbiton=window.webpackJsonphabbiton||[]).push([[216],{3727:(e,t,n)=>{"use strict";n.d(t,{VK:()=>f,rU:()=>d});var r=n(6550),a=n(1788),i=n(7294),o=n.n(i),c=n(9731),l=(n(5697),n(2122)),u=n(9756),s=n(2177),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,c.lX)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return o().createElement(r.F0,{history:this.history,children:this.props.children})},t}(o().Component);o().Component;var v=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?(0,c.ob)(e,null,null,t):e},h=function(e){return e},m=o().forwardRef;void 0===m&&(m=h);var y=m((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=(0,u.Z)(e,["innerRef","navigate","onClick"]),c=i.target,s=(0,l.Z)({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=h!==m&&t||n,o().createElement("a",s)}));var d=m((function(e,t){var n=e.component,a=void 0===n?y:n,i=e.replace,c=e.to,f=e.innerRef,d=(0,u.Z)(e,["component","replace","to","innerRef"]);return o().createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=e.history,r=p(v(c,e.location),e.location),u=r?n.createHref(r):"",y=(0,l.Z)({},d,{href:u,navigate:function(){var t=v(c,e.location);(i?n.replace:n.push)(t)}});return h!==m?y.ref=t||f:y.innerRef=f,o().createElement(a,y)}))})),w=function(e){return e},R=o().forwardRef;void 0===R&&(R=w);R((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,i=e.activeClassName,c=void 0===i?"active":i,f=e.activeStyle,h=e.className,m=e.exact,y=e.isActive,Z=e.location,g=e.sensitive,C=e.strict,b=e.style,E=e.to,k=e.innerRef,K=(0,u.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o().createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=Z||e.location,i=p(v(E,n),n),u=i.pathname,N=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=N?(0,r.LX)(n.pathname,{path:N,exact:m,sensitive:g,strict:C}):null,x=!!(y?y(A,n):A),D=x?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(h,c):h,J=x?(0,l.Z)({},b,{},f):b,S=(0,l.Z)({"aria-current":x&&a||null,className:D,style:J,to:i},K);return w!==R?S.ref=t||k:S.innerRef=k,o().createElement(d,S)}))}))}}]);