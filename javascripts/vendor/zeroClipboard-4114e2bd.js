/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0-beta.3
 */
!function(e,t){"use strict";var n,r,a,i=e,o=i.document,l=i.navigator,s=i.setTimeout,c=i.clearTimeout,u=i.setInterval,f=i.clearInterval,d=i.getComputedStyle,p=i.encodeURIComponent,h=i.ActiveXObject,y=i.Error,m=i.Number.parseInt||i.parseInt,v=i.Number.parseFloat||i.parseFloat,g=i.Number.isNaN||i.isNaN,b=i.Date.now,w=i.Object.keys,C=i.Object.defineProperty,x=i.Object.prototype.hasOwnProperty,T=i.Array.prototype.slice,E=function(){var e=function(e){return e};if("function"==typeof i.wrap&&"function"==typeof i.unwrap)try{var t=o.createElement("div"),n=i.unwrap(t);1===t.nodeType&&n&&1===n.nodeType&&(e=i.unwrap)}catch(r){}return e}(),j=function(e){return T.call(e,0)},D=function(){var e,n,r,a,i,o,l=j(arguments),s=l[0]||{};for(e=1,n=l.length;n>e;e++)if(null!=(r=l[e]))for(a in r)x.call(r,a)&&(i=s[a],o=r[a],s!==o&&o!==t&&(s[a]=o));return s},k=function(e){var t,n,r,a;if("object"!=typeof e||null==e||"number"==typeof e.nodeType)t=e;else if("number"==typeof e.length)for(t=[],n=0,r=e.length;r>n;n++)x.call(e,n)&&(t[n]=k(e[n]));else{t={};for(a in e)x.call(e,a)&&(t[a]=k(e[a]))}return t},I=function(e,t){for(var n={},r=0,a=t.length;a>r;r++)t[r]in e&&(n[t[r]]=e[t[r]]);return n},O=function(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n},N=function(e){if(e)for(var t in e)x.call(e,t)&&delete e[t];return e},L=function(e,t){if(e&&1===e.nodeType&&e.ownerDocument&&t&&(1===t.nodeType&&t.ownerDocument&&t.ownerDocument===e.ownerDocument||9===t.nodeType&&!t.ownerDocument&&t===e.ownerDocument))do{if(e===t)return!0;e=e.parentNode}while(e);return!1},_=function(e){var t;return"string"==typeof e&&e&&(t=e.split("#")[0].split("?")[0],t=e.slice(0,e.lastIndexOf("/")+1)),t},A=function(e){var t,n;return"string"==typeof e&&e&&(n=e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),n&&n[1]?t=n[1]:(n=e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),n&&n[1]&&(t=n[1]))),t},z=function(){var e,t;try{throw new y}catch(n){t=n}return t&&(e=t.sourceURL||t.fileName||A(t.stack)),e},S=function(){var e,n,r;if(o.currentScript&&(e=o.currentScript.src))return e;if(n=o.getElementsByTagName("script"),1===n.length)return n[0].src||t;if("readyState"in n[0])for(r=n.length;r--;)if("interactive"===n[r].readyState&&(e=n[r].src))return e;return"loading"===o.readyState&&(e=n[n.length-1].src)?e:(e=z())?e:t},F=function(){var e,n,r,a=o.getElementsByTagName("script");for(e=a.length;e--;){if(!(r=a[e].src)){n=null;break}if(r=_(r),null==n)n=r;else if(n!==r){n=null;break}}return n||t},Z=function(){var e=_(S())||F()||"";return e+"ZeroClipboard.swf"},V={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},X="11.0.0",Y={},$={},B=null,P=0,H=0,M={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"}},R={swfPath:Z(),trustedDomains:e.location.host?[e.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},J=function(e){if("object"==typeof e&&null!==e)for(var t in e)if(x.call(e,t))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t))R[t]=e[t];else if(null==V.bridge)if("containerId"===t||"swfObjectId"===t){if(!st(e[t]))throw new Error("The specified `"+t+"` value is not valid as an HTML4 Element ID");R[t]=e[t]}else R[t]=e[t];{if("string"!=typeof e||!e)return k(R);if(x.call(R,e))return R[e]}},K=function(){return{browser:I(l,["userAgent","platform","appName"]),flash:O(V,["bridge"]),zeroclipboard:{version:Yt.version,config:Yt.config()}}},U=function(){return!!(V.disabled||V.outdated||V.unavailable||V.degraded||V.deactivated)},W=function(e,r){var a,i,o,l={};if("string"==typeof e&&e)o=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof r)for(a in e)x.call(e,a)&&"string"==typeof a&&a&&"function"==typeof e[a]&&Yt.on(a,e[a]);if(o&&o.length){for(a=0,i=o.length;i>a;a++)e=o[a].replace(/^on/,""),l[e]=!0,Y[e]||(Y[e]=[]),Y[e].push(r);if(l.ready&&V.ready&&Yt.emit({type:"ready"}),l.error){var s=["disabled","outdated","unavailable","degraded","deactivated","overdue"];for(a=0,i=s.length;i>a;a++)if(V[s[a]]===!0){Yt.emit({type:"error",name:"flash-"+s[a]});break}n!==t&&Yt.version!==n&&Yt.emit({type:"error",name:"version-mismatch",jsVersion:Yt.version,swfVersion:n})}}return Yt},G=function(e,t){var n,r,a,i,o;if(0===arguments.length)i=w(Y);else if("string"==typeof e&&e)i=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)x.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&Yt.off(n,e[n]);if(i&&i.length)for(n=0,r=i.length;r>n;n++)if(e=i[n].toLowerCase().replace(/^on/,""),o=Y[e],o&&o.length)if(t)for(a=o.indexOf(t);-1!==a;)o.splice(a,1),a=o.indexOf(t,a);else o.length=0;return Yt},q=function(e){var t;return t="string"==typeof e&&e?k(Y[e])||null:k(Y)},Q=function(e){var t,n,r;return e=ct(e),e&&!yt(e)?"ready"===e.type&&V.overdue===!0?Yt.emit({type:"error",name:"flash-overdue"}):(t=D({},e),ht.call(this,t),"copy"===e.type&&(r=Tt($),n=r.data,B=r.formatMap),n):void 0},et=function(){if("boolean"!=typeof V.ready&&(V.ready=!1),!Yt.isFlashUnusable()&&null===V.bridge){var e=R.flashLoadTimeout;"number"==typeof e&&e>=0&&(P=s(function(){"boolean"!=typeof V.deactivated&&(V.deactivated=!0),V.deactivated===!0&&Yt.emit({type:"error",name:"flash-deactivated"})},e)),V.overdue=!1,Ct()}},tt=function(){Yt.clearData(),Yt.blur(),Yt.emit("destroy"),xt(),Yt.off()},nt=function(e,t){var n;if("object"==typeof e&&e&&"undefined"==typeof t)n=e,Yt.clearData();else{if("string"!=typeof e||!e)return;n={},n[e]=t}for(var r in n)"string"==typeof r&&r&&x.call(n,r)&&"string"==typeof n[r]&&n[r]&&($[r]=n[r])},rt=function(e){"undefined"==typeof e?(N($),B=null):"string"==typeof e&&x.call($,e)&&delete $[e]},at=function(e){return"undefined"==typeof e?k($):"string"==typeof e&&x.call($,e)?$[e]:void 0},it=function(e){if(e&&1===e.nodeType){r&&(Lt(r,R.activeClass),r!==e&&Lt(r,R.hoverClass)),r=e,Nt(e,R.hoverClass);var t=e.getAttribute("title")||R.title;if("string"==typeof t&&t){var n=wt(V.bridge);n&&n.setAttribute("title",t)}var a=R.forceHandCursor===!0||"pointer"===_t(e,"cursor");Zt(a),Ft()}},ot=function(){var e=wt(V.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.top="1px"),r&&(Lt(r,R.hoverClass),Lt(r,R.activeClass),r=null)},lt=function(){return r||null},st=function(e){return"string"==typeof e&&e&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)},ct=function(e){var t;if("string"==typeof e&&e?(t=e,e={}):"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(t=e.type),t){t=t.toLowerCase(),!e.target&&(/^(copy|aftercopy|_click)$/.test(t)||"error"===t&&"clipboard-error"===e.name)&&(e.target=a),D(e,{type:t,target:e.target||r||null,relatedTarget:e.relatedTarget||null,currentTarget:V&&V.bridge||null,timeStamp:e.timeStamp||b()||null});var n=M[e.type];return"error"===e.type&&e.name&&n&&(n=n[e.name]),n&&(e.message=n),"ready"===e.type&&D(e,{target:null,version:V.version}),"error"===e.type&&(/^flash-(disabled|outdated|unavailable|degraded|deactivated|overdue)$/.test(e.name)&&D(e,{target:null,minimumVersion:X}),/^flash-(outdated|unavailable|degraded|deactivated|overdue)$/.test(e.name)&&D(e,{version:V.version})),"copy"===e.type&&(e.clipboardData={setData:Yt.setData,clearData:Yt.clearData}),"aftercopy"===e.type&&(e=Et(e,B)),e.target&&!e.relatedTarget&&(e.relatedTarget=ut(e.target)),ft(e)}},ut=function(e){var t=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return t?o.getElementById(t):null},ft=function(e){if(e&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)){var n=e.target,r="_mouseover"===e.type&&e.relatedTarget?e.relatedTarget:t,a="_mouseout"===e.type&&e.relatedTarget?e.relatedTarget:t,l=At(n),s=i.screenLeft||i.screenX||0,c=i.screenTop||i.screenY||0,u=o.body.scrollLeft+o.documentElement.scrollLeft,f=o.body.scrollTop+o.documentElement.scrollTop,d=l.left+("number"==typeof e._stageX?e._stageX:0),p=l.top+("number"==typeof e._stageY?e._stageY:0),h=d-u,y=p-f,m=s+h,v=c+y,g="number"==typeof e.movementX?e.movementX:0,b="number"==typeof e.movementY?e.movementY:0;delete e._stageX,delete e._stageY,D(e,{srcElement:n,fromElement:r,toElement:a,screenX:m,screenY:v,pageX:d,pageY:p,clientX:h,clientY:y,x:h,y:y,movementX:g,movementY:b,offsetX:0,offsetY:0,layerX:0,layerY:0})}return e},dt=function(e){var t=e&&"string"==typeof e.type&&e.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(t)},pt=function(e,t,n,r){r?s(function(){e.apply(t,n)},0):e.apply(t,n)},ht=function(e){if("object"==typeof e&&e&&e.type){var t=dt(e),n=Y["*"]||[],r=Y[e.type]||[],a=n.concat(r);if(a&&a.length){var o,l,s,c,u,f=this;for(o=0,l=a.length;l>o;o++)s=a[o],c=f,"string"==typeof s&&"function"==typeof i[s]&&(s=i[s]),"object"==typeof s&&s&&"function"==typeof s.handleEvent&&(c=s,s=s.handleEvent),"function"==typeof s&&(u=D({},e),pt(s,c,[u],t))}return this}},yt=function(e){var t=e.target||r||null,i="swf"===e._source;delete e._source;var o=["flash-disabled","flash-outdated","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"];switch(e.type){case"error":-1!==o.indexOf(e.name)?D(V,{disabled:"flash-disabled"===e.name,outdated:"flash-outdated"===e.name,unavailable:"flash-unavailable"===e.name,degraded:"flash-degraded"===e.name,deactivated:"flash-deactivated"===e.name,overdue:"flash-overdue"===e.name,ready:!1}):"version-mismatch"===e.name&&(n=e.swfVersion,D(V,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),St();break;case"ready":n=e.swfVersion;var l=V.deactivated===!0;D(V,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:l,ready:!l}),St();break;case"beforecopy":a=t;break;case"copy":var s,c,u=e.relatedTarget;!$["text/html"]&&!$["text/plain"]&&u&&(c=u.value||u.outerHTML||u.innerHTML)&&(s=u.value||u.textContent||u.innerText)?(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",s),c!==s&&e.clipboardData.setData("text/html",c)):!$["text/plain"]&&e.target&&(s=e.target.getAttribute("data-clipboard-text"))&&(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",s));break;case"aftercopy":mt(e),Yt.clearData(),t&&t!==Ot()&&t.focus&&t.focus();break;case"_mouseover":Yt.focus(t),R.bubbleEvents===!0&&i&&(t&&t!==e.relatedTarget&&!L(e.relatedTarget,t)&&vt(D({},e,{type:"mouseenter",bubbles:!1,cancelable:!1})),vt(D({},e,{type:"mouseover"})));break;case"_mouseout":Yt.blur(),R.bubbleEvents===!0&&i&&(t&&t!==e.relatedTarget&&!L(e.relatedTarget,t)&&vt(D({},e,{type:"mouseleave",bubbles:!1,cancelable:!1})),vt(D({},e,{type:"mouseout"})));break;case"_mousedown":Nt(t,R.activeClass),R.bubbleEvents===!0&&i&&vt(D({},e,{type:e.type.slice(1)}));break;case"_mouseup":Lt(t,R.activeClass),R.bubbleEvents===!0&&i&&vt(D({},e,{type:e.type.slice(1)}));break;case"_click":a=null,R.bubbleEvents===!0&&i&&vt(D({},e,{type:e.type.slice(1)}));break;case"_mousemove":R.bubbleEvents===!0&&i&&vt(D({},e,{type:e.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)?!0:void 0},mt=function(e){if(e.errors&&e.errors.length>0){var t=k(e);D(t,{type:"error",name:"clipboard-error"}),delete t.success,s(function(){Yt.emit(t)},0)}},vt=function(e){if(e&&"string"==typeof e.type&&e){var t,n=e.target||null,r=n&&n.ownerDocument||o,a={view:r.defaultView||i,canBubble:!0,cancelable:!0,detail:"click"===e.type?1:0,button:"number"==typeof e.which?e.which-1:"number"==typeof e.button?e.button:r.createEvent?0:1},l=D(a,e);n&&r.createEvent&&n.dispatchEvent&&(l=[l.type,l.canBubble,l.cancelable,l.view,l.detail,l.screenX,l.screenY,l.clientX,l.clientY,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.button,l.relatedTarget],t=r.createEvent("MouseEvents"),t.initMouseEvent&&(t.initMouseEvent.apply(t,l),t._source="js",n.dispatchEvent(t)))}},gt=function(){var e=R.flashLoadTimeout;if("number"==typeof e&&e>=0){var t=Math.min(1e3,e/10),n=R.swfObjectId+"_fallbackContent";H=u(function(){var e=o.getElementById(n);zt(e)&&(St(),V.deactivated=null,Yt.emit({type:"error",name:"swf-not-found"}))},t)}},bt=function(){var e=o.createElement("div");return e.id=R.containerId,e.className=R.containerClass,e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+Vt(R.zIndex),e},wt=function(e){for(var t=e&&e.parentNode;t&&"OBJECT"===t.nodeName&&t.parentNode;)t=t.parentNode;return t||null},Ct=function(){var e,t=V.bridge,n=wt(t);if(!t){var r=It(i.location.host,R),a="never"===r?"none":"all",l=Dt(D({jsVersion:Yt.version},R)),s=R.swfPath+jt(R.swfPath,R);n=bt();var c=o.createElement("div");n.appendChild(c),o.body.appendChild(n);var u=o.createElement("div"),f="activex"===V.pluginType;u.innerHTML='<object id="'+R.swfObjectId+'" name="'+R.swfObjectId+'" width="100%" height="100%" '+(f?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+s+'"')+">"+(f?'<param name="movie" value="'+s+'"/>':"")+'<param name="allowScriptAccess" value="'+r+'"/><param name="allowNetworking" value="'+a+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+l+'"/><div id="'+R.swfObjectId+'_fallbackContent">&nbsp;</div></object>',t=u.firstChild,u=null,E(t).ZeroClipboard=Yt,n.replaceChild(t,c),gt()}return t||(t=o[R.swfObjectId],t&&(e=t.length)&&(t=t[e-1]),!t&&n&&(t=n.firstChild)),V.bridge=t||null,t},xt=function(){var e=V.bridge;if(e){var r=wt(e);r&&("activex"===V.pluginType&&"readyState"in e?(e.style.display="none",function a(){if(4===e.readyState){for(var t in e)"function"==typeof e[t]&&(e[t]=null);e.parentNode&&e.parentNode.removeChild(e),r.parentNode&&r.parentNode.removeChild(r)}else s(a,10)}()):(e.parentNode&&e.parentNode.removeChild(e),r.parentNode&&r.parentNode.removeChild(r))),St(),V.ready=null,V.bridge=null,V.deactivated=null,n=t}},Tt=function(e){var t={},n={};if("object"==typeof e&&e){for(var r in e)if(r&&x.call(e,r)&&"string"==typeof e[r]&&e[r])switch(r.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":t.text=e[r],n.text=r;break;case"text/html":case"html":case"air:html":case"flash:html":t.html=e[r],n.html=r;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":t.rtf=e[r],n.rtf=r}return{data:t,formatMap:n}}},Et=function(e,t){if("object"!=typeof e||!e||"object"!=typeof t||!t)return e;var n={};for(var r in e)if(x.call(e,r))if("errors"===r){n[r]=e[r]?e[r].slice():[];for(var a=0,i=n[r].length;i>a;a++)n[r][a].format=t[n[r][a].format]}else if("success"!==r&&"data"!==r)n[r]=e[r];else{n[r]={};var o=e[r];for(var l in o)l&&x.call(o,l)&&x.call(t,l)&&(n[r][t[l]]=o[l])}return n},jt=function(e,t){var n=null==t||t&&t.cacheBust===!0;return n?(-1===e.indexOf("?")?"?":"&")+"noCache="+b():""},Dt=function(e){var t,n,r,a,o="",l=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?a=[e.trustedDomains]:"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(a=e.trustedDomains)),a&&a.length)for(t=0,n=a.length;n>t;t++)if(x.call(a,t)&&a[t]&&"string"==typeof a[t]){if(r=kt(a[t]),!r)continue;if("*"===r){l.length=0,l.push(r);break}l.push.apply(l,[r,"//"+r,i.location.protocol+"//"+r])}return l.length&&(o+="trustedOrigins="+p(l.join(","))),e.forceEnhancedClipboard===!0&&(o+=(o?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof e.swfObjectId&&e.swfObjectId&&(o+=(o?"&":"")+"swfObjectId="+p(e.swfObjectId)),"string"==typeof e.jsVersion&&e.jsVersion&&(o+=(o?"&":"")+"jsVersion="+p(e.jsVersion)),o},kt=function(e){if(null==e||""===e)return null;if(e=e.replace(/^\s+|\s+$/g,""),""===e)return null;var t=e.indexOf("//");e=-1===t?e:e.slice(t+2);var n=e.indexOf("/");return e=-1===n?e:-1===t||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase()?null:e||null},It=function(){var e=function(e){var t,n,r,a=[];if("string"==typeof e&&(e=[e]),"object"!=typeof e||!e||"number"!=typeof e.length)return a;for(t=0,n=e.length;n>t;t++)if(x.call(e,t)&&(r=kt(e[t]))){if("*"===r){a.length=0,a.push("*");break}-1===a.indexOf(r)&&a.push(r)}return a};return function(t,n){var r=kt(n.swfPath);null===r&&(r=t);var a=e(n.trustedDomains),i=a.length;if(i>0){if(1===i&&"*"===a[0])return"always";if(-1!==a.indexOf(t))return 1===i&&t===r?"sameDomain":"always"}return"never"}}(),Ot=function(){try{return o.activeElement}catch(e){return null}},Nt=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)||e.classList.add(t),e;if(t&&"string"==typeof t){var n=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var r=" "+e.className+" ",a=e.className,i=0,o=n.length;o>i;i++)r.indexOf(" "+n[i]+" ")<0&&(a+=" "+n[i]);e.className=a.replace(/^\s+|\s+$/g,"")}else e.className=t}return e},Lt=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)&&e.classList.remove(t),e;if("string"==typeof t&&t){var n=t.split(/\s+/);if(1===e.nodeType&&e.className){for(var r=(" "+e.className+" ").replace(/[\n\t]/g," "),a=0,i=n.length;i>a;a++)r=r.replace(" "+n[a]+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}}return e},_t=function(e,t){var n=d(e,null).getPropertyValue(t);return"cursor"!==t||n&&"auto"!==n||"A"!==e.nodeName?n:"pointer"},At=function(e){var t={left:0,top:0,width:0,height:0};if(e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=i.pageXOffset,a=i.pageYOffset,l=o.documentElement.clientLeft||0,s=o.documentElement.clientTop||0,c=0,u=0;if("relative"===_t(o.body,"position")){var f=o.body.getBoundingClientRect(),d=o.documentElement.getBoundingClientRect();c=f.left-d.left||0,u=f.top-d.top||0}t.left=n.left+r-l-c,t.top=n.top+a-s-u,t.width="width"in n?n.width:n.right-n.left,t.height="height"in n?n.height:n.bottom-n.top}return t},zt=function(e){if(!e)return!1;var t=d(e,null),n=v(t.height)>0,r=v(t.width)>0,a=v(t.top)>=0,i=v(t.left)>=0,o=n&&r&&a&&i,l=o?null:At(e),s="none"!==t.display&&"collapse"!==t.visibility&&(o||!!l&&(n||l.height>0)&&(r||l.width>0)&&(a||l.top>=0)&&(i||l.left>=0));return s},St=function(){c(P),P=0,f(H),H=0},Ft=function(){var e;if(r&&(e=wt(V.bridge))){var t=At(r);D(e.style,{width:t.width+"px",height:t.height+"px",top:t.top+"px",left:t.left+"px",zIndex:""+Vt(R.zIndex)})}},Zt=function(e){V.ready===!0&&(V.bridge&&"function"==typeof V.bridge.setHandCursor?V.bridge.setHandCursor(e):V.ready=!1)},Vt=function(e){if(/^(?:auto|inherit)$/.test(e))return e;var t;return"number"!=typeof e||g(e)?"string"==typeof e&&(t=Vt(m(e,10))):t=e,"number"==typeof t?t:"auto"},Xt=function(e){function t(e){var t=e.match(/[\d]+/g);return t.length=3,t.join(".")}function n(e){return!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13))}function r(e){e&&(s=!0,e.version&&(f=t(e.version)),!f&&e.description&&(f=t(e.description)),e.filename&&(u=n(e.filename)))}var a,i,o,s=!1,c=!1,u=!1,f="";if(l.plugins&&l.plugins.length)a=l.plugins["Shockwave Flash"],r(a),l.plugins["Shockwave Flash 2.0"]&&(s=!0,f="2.0.0.11");else if(l.mimeTypes&&l.mimeTypes.length)o=l.mimeTypes["application/x-shockwave-flash"],a=o&&o.enabledPlugin,r(a);else if("undefined"!=typeof e){c=!0;try{i=new e("ShockwaveFlash.ShockwaveFlash.7"),s=!0,f=t(i.GetVariable("$version"))}catch(d){try{i=new e("ShockwaveFlash.ShockwaveFlash.6"),s=!0,f="6.0.21"}catch(p){try{i=new e("ShockwaveFlash.ShockwaveFlash"),s=!0,f=t(i.GetVariable("$version"))}catch(h){c=!1}}}}V.disabled=s!==!0,V.outdated=f&&v(f)<v(X),V.version=f||"0.0.0",V.pluginType=u?"pepper":c?"activex":s?"netscape":"unknown"};Xt(h);var Yt=function(){return this instanceof Yt?void("function"==typeof Yt._createClient&&Yt._createClient.apply(this,j(arguments))):new Yt};C(Yt,"version",{value:"2.2.0-beta.3",writable:!1,configurable:!0,enumerable:!0}),Yt.config=function(){return J.apply(this,j(arguments))},Yt.state=function(){return K.apply(this,j(arguments))},Yt.isFlashUnusable=function(){return U.apply(this,j(arguments))},Yt.on=function(){return W.apply(this,j(arguments))},Yt.off=function(){return G.apply(this,j(arguments))},Yt.handlers=function(){return q.apply(this,j(arguments))},Yt.emit=function(){return Q.apply(this,j(arguments))},Yt.create=function(){return et.apply(this,j(arguments))},Yt.destroy=function(){return tt.apply(this,j(arguments))},Yt.setData=function(){return nt.apply(this,j(arguments))},Yt.clearData=function(){return rt.apply(this,j(arguments))},Yt.getData=function(){return at.apply(this,j(arguments))},Yt.focus=Yt.activate=function(){return it.apply(this,j(arguments))},Yt.blur=Yt.deactivate=function(){return ot.apply(this,j(arguments))},Yt.activeElement=function(){return lt.apply(this,j(arguments))};var $t=0,Bt={},Pt=0,Ht={},Mt={};D(R,{autoActivate:!0});var Rt=function(e){var t=this;t.id=""+$t++,Bt[t.id]={instance:t,elements:[],handlers:{}},e&&t.clip(e),Yt.on("*",function(e){return t.emit(e)}),Yt.on("destroy",function(){t.destroy()}),Yt.create()},Jt=function(e,r){var a,i,o,l={},s=Bt[this.id],c=s&&s.handlers;if(!s)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");if("string"==typeof e&&e)o=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof r)for(a in e)x.call(e,a)&&"string"==typeof a&&a&&"function"==typeof e[a]&&this.on(a,e[a]);if(o&&o.length){for(a=0,i=o.length;i>a;a++)e=o[a].replace(/^on/,""),l[e]=!0,c[e]||(c[e]=[]),c[e].push(r);if(l.ready&&V.ready&&this.emit({type:"ready",client:this}),l.error){var u=["disabled","outdated","unavailable","degraded","deactivated","overdue"];for(a=0,i=u.length;i>a;a++)if(V[u[a]]){this.emit({type:"error",name:"flash-"+u[a],client:this});break}n!==t&&Yt.version!==n&&this.emit({type:"error",name:"version-mismatch",jsVersion:Yt.version,swfVersion:n})}}return this},Kt=function(e,t){var n,r,a,i,o,l=Bt[this.id],s=l&&l.handlers;if(!s)return this;if(0===arguments.length)i=w(s);else if("string"==typeof e&&e)i=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)x.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.off(n,e[n]);if(i&&i.length)for(n=0,r=i.length;r>n;n++)if(e=i[n].toLowerCase().replace(/^on/,""),o=s[e],o&&o.length)if(t)for(a=o.indexOf(t);-1!==a;)o.splice(a,1),a=o.indexOf(t,a);else o.length=0;return this},Ut=function(e){var t=null,n=Bt[this.id]&&Bt[this.id].handlers;return n&&(t="string"==typeof e&&e?n[e]?n[e].slice(0):[]:k(n)),t},Wt=function(e){if(tn.call(this,e)){"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(e=D({},e));var t=D({},ct(e),{client:this});nn.call(this,t)}return this},Gt=function(e){if(!Bt[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");e=rn(e);for(var t=0;t<e.length;t++)if(x.call(e,t)&&e[t]&&1===e[t].nodeType){e[t].zcClippingId?-1===Ht[e[t].zcClippingId].indexOf(this.id)&&Ht[e[t].zcClippingId].push(this.id):(e[t].zcClippingId="zcClippingId_"+Pt++,Ht[e[t].zcClippingId]=[this.id],R.autoActivate===!0&&an(e[t]));var n=Bt[this.id]&&Bt[this.id].elements;-1===n.indexOf(e[t])&&n.push(e[t])}return this},qt=function(e){var t=Bt[this.id];if(!t)return this;var n,r=t.elements;e="undefined"==typeof e?r.slice(0):rn(e);for(var a=e.length;a--;)if(x.call(e,a)&&e[a]&&1===e[a].nodeType){for(n=0;-1!==(n=r.indexOf(e[a],n));)r.splice(n,1);var i=Ht[e[a].zcClippingId];if(i){for(n=0;-1!==(n=i.indexOf(this.id,n));)i.splice(n,1);0===i.length&&(R.autoActivate===!0&&on(e[a]),delete e[a].zcClippingId)}}return this},Qt=function(){var e=Bt[this.id];return e&&e.elements?e.elements.slice(0):[]},en=function(){Bt[this.id]&&(this.unclip(),this.off(),delete Bt[this.id])},tn=function(e){if(!e||!e.type)return!1;if(e.client&&e.client!==this)return!1;var t=Bt[this.id],n=t&&t.elements,r=!!n&&n.length>0,a=!e.target||r&&-1!==n.indexOf(e.target),i=e.relatedTarget&&r&&-1!==n.indexOf(e.relatedTarget),o=e.client&&e.client===this;return t&&(a||i||o)?!0:!1},nn=function(e){var t=Bt[this.id];if("object"==typeof e&&e&&e.type&&t){var n=dt(e),r=t&&t.handlers["*"]||[],a=t&&t.handlers[e.type]||[],o=r.concat(a);if(o&&o.length){var l,s,c,u,f,d=this;for(l=0,s=o.length;s>l;l++)c=o[l],u=d,"string"==typeof c&&"function"==typeof i[c]&&(c=i[c]),"object"==typeof c&&c&&"function"==typeof c.handleEvent&&(u=c,c=c.handleEvent),"function"==typeof c&&(f=D({},e),pt(c,u,[f],n))}}},rn=function(e){return"string"==typeof e&&(e=[]),"number"!=typeof e.length?[e]:e},an=function(e){if(e&&1===e.nodeType){var t=function(e){(e||(e=i.event))&&("js"!==e._source&&(e.stopImmediatePropagation(),e.preventDefault()),delete e._source)},n=function(n){(n||(n=i.event))&&(t(n),Yt.focus(e))};e.addEventListener("mouseover",n,!1),e.addEventListener("mouseout",t,!1),e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",t,!1),e.addEventListener("mousemove",t,!1),Mt[e.zcClippingId]={mouseover:n,mouseout:t,mouseenter:t,mouseleave:t,mousemove:t}}},on=function(e){if(e&&1===e.nodeType){var t=Mt[e.zcClippingId];if("object"==typeof t&&t){for(var n,r,a=["move","leave","enter","out","over"],i=0,o=a.length;o>i;i++)n="mouse"+a[i],r=t[n],"function"==typeof r&&e.removeEventListener(n,r,!1);delete Mt[e.zcClippingId]}}};Yt._createClient=function(){Rt.apply(this,j(arguments))},Yt.prototype.on=function(){return Jt.apply(this,j(arguments))},Yt.prototype.off=function(){return Kt.apply(this,j(arguments))},Yt.prototype.handlers=function(){return Ut.apply(this,j(arguments))},Yt.prototype.emit=function(){return Wt.apply(this,j(arguments))},Yt.prototype.clip=function(){return Gt.apply(this,j(arguments))},Yt.prototype.unclip=function(){return qt.apply(this,j(arguments))},Yt.prototype.elements=function(){return Qt.apply(this,j(arguments))},Yt.prototype.destroy=function(){return en.apply(this,j(arguments))},Yt.prototype.setText=function(e){if(!Bt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Yt.setData("text/plain",e),this},Yt.prototype.setHtml=function(e){if(!Bt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Yt.setData("text/html",e),this},Yt.prototype.setRichText=function(e){if(!Bt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Yt.setData("application/rtf",e),this},Yt.prototype.setData=function(){if(!Bt[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Yt.setData.apply(this,j(arguments)),this},Yt.prototype.clearData=function(){if(!Bt[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");return Yt.clearData.apply(this,j(arguments)),this},Yt.prototype.getData=function(){if(!Bt[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");return Yt.getData.apply(this,j(arguments))},"function"==typeof define&&define.amd?define(function(){return Yt}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Yt:e.ZeroClipboard=Yt}(function(){return this||window}());