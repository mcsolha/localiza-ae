!function i(a,u,c){function s(t,e){if(!u[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=u[t]={exports:{}};a[t][0].call(o.exports,function(e){return s(a[t][1][e]||e)},o,o.exports,i,a,u,c)}return u[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,r){t.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},{}],2:[function(e,t,r){t.exports=function(e){if(Array.isArray(e))return e}},{}],3:[function(e,t,r){function c(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}t.exports=function(u){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=u.apply(e,a);function o(e){c(n,t,r,o,i,"next",e)}function i(e){c(n,t,r,o,i,"throw",e)}o(void 0)})}}},{}],4:[function(e,t,r){t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],5:[function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},{}],6:[function(e,t,r){t.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],7:[function(e,t,r){t.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}},{}],8:[function(e,t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},{}],9:[function(e,t,r){var n=e("./arrayWithHoles"),o=e("./iterableToArrayLimit"),i=e("./unsupportedIterableToArray"),a=e("./nonIterableRest");t.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()}},{"./arrayWithHoles":2,"./iterableToArrayLimit":7,"./nonIterableRest":8,"./unsupportedIterableToArray":10}],10:[function(e,t,r){var n=e("./arrayLikeToArray");t.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},{"./arrayLikeToArray":1}],11:[function(e,t,r){var n=function(a){"use strict";var c,e=Object.prototype,l=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function u(e,t,r,n){var i,a,u,c,o=t&&t.prototype instanceof y?t:y,s=Object.create(o.prototype),l=new k(n||[]);return s._invoke=(i=e,a=r,u=l,c=p,function(e,t){if(c===h)throw new Error("Generator is already running");if(c===v){if("throw"===e)throw t;return I()}for(u.method=e,u.arg=t;;){var r=u.delegate;if(r){var n=L(r,u);if(n){if(n===m)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(c===p)throw c=v,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c=h;var o=f(i,a,u);if("normal"===o.type){if(c=u.done?v:d,o.arg===m)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c=v,u.method="throw",u.arg=o.arg)}}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=u;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",m={};function y(){}function i(){}function s(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==e&&l.call(w,o)&&(g=w);var _=s.prototype=y.prototype=Object.create(g);function x(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(c,s){var t;this._invoke=function(r,n){function e(){return new s(function(e,t){!function t(e,r,n,o){var i=f(c[e],c,r);if("throw"!==i.type){var a=i.arg,u=a.value;return u&&"object"==typeof u&&l.call(u,"__await")?s.resolve(u.__await).then(function(e){t("next",e,n,o)},function(e){t("throw",e,n,o)}):s.resolve(u).then(function(e){a.value=e,n(a)},function(e){return t("throw",e,n,o)})}o(i.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}}function L(e,t){var r=e.iterator[t.method];if(r===c){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=c,L(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=c),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=c,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:c,done:!0}}return i.prototype=_.constructor=s,s.constructor=i,s[n]=i.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,s):(e.__proto__=s,n in e||(e[n]="GeneratorFunction")),e.prototype=Object.create(_),e},a.awrap=function(e){return{__await:e}},x(E.prototype),E.prototype[r]=function(){return this},a.AsyncIterator=E,a.async=function(e,t,r,n,o){void 0===o&&(o=Promise);var i=new E(u(e,t,r,n),o);return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(_),_[n]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return i.type="throw",i.arg=r,n.next=e,t&&(n.method="next",n.arg=c),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),u=l.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n,o=r.completion;return"throw"===o.type&&(n=o.arg,O(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=c),m}},a}("object"==typeof t?t.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},{}],12:[function(e,t,r){t.exports=e("regenerator-runtime")},{"regenerator-runtime":11}],13:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=n(e("@babel/runtime/regenerator")),o=n(e("@babel/runtime/helpers/asyncToGenerator")),i=n(e("@babel/runtime/helpers/classCallCheck")),a=n(e("@babel/runtime/helpers/createClass")),u=e("./helpers"),s=e("./request");var l=function(){function t(e){(0,i.default)(this,t);this.map=new google.maps.Map(e,{center:{lat:-14.235004,lng:-51.92528},zoom:4,fullscreenControl:!1,mapTypeControl:!1}),this.infoWindow=new google.maps.InfoWindow({maxWidth:300}),this.sessionToken=new google.maps.places.AutocompleteSessionToken,this.autocompleteService=new google.maps.places.AutocompleteService,this.placesService=new google.maps.places.PlacesService(this.map)}var r,n;return(0,a.default)(t,[{key:"searchLocation",value:function(e){var t=this;return new Promise(function(r,n){if((0,u.isEmptyString)(e))return n("Empty string");t.autocompleteService.getPlacePredictions({input:e,sessionToken:t.sessionToken},function(e,t){if(t===google.maps.places.PlacesServiceStatus.OK)return r(e);n(t)})})}},{key:"geocode",value:(n=(0,o.default)(c.default.mark(function e(t){var r,n,o,i,a,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,s.searchParams)({address:t,key:"AIzaSyDWwrIe01iRah8KJXAYoegGSr0J9I4tvBQ"}),n="https://maps.googleapis.com/maps/api/geocode/json"+r,e.prev=2,e.next=5,(0,s.get)(n);case 5:if(o=e.sent,i=JSON.parse(o),a=i.results,"OK"===(u=i.status))return e.abrupt("return",a);e.next=9;break;case 9:throw new Error(u);case 12:return e.prev=12,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}},e,null,[[2,12]])})),function(e){return n.apply(this,arguments)})},{key:"getPlaceDetails",value:(r=(0,o.default)(c.default.mark(function e(t){var o=this;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(r,n){var e={placeId:t,fields:["name","formatted_phone_number","photo","formatted_address","rating"]};o.placesService.getDetails(e,function(e,t){return t===google.maps.places.PlacesServiceStatus.OK?r(e):n(t)})}));case 1:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)})},{key:"placeMarker",value:function(e){var t=this,r=e.position,n=e.title,o=e.address,i=e.imgUrl,a=e.phone,u=e.rating;this.marker&&this.marker.setMap(null);var c,s,l,f,p,d,h,v=(s=(c={title:n,address:o,imgUrl:i,phone:a,rating:u}).title,l=c.address,f=c.imgUrl,p=c.phone,d=c.rating,h=p||d?'<div class="info-window__additional-info">\n                '.concat(d?'<div class="info-window__rating">\n                            <i class="fas fa-star"></i>\n                            <span>'.concat(d,"</span>\n                        </div>"):"","\n                ").concat(p?'<div class="info-window__phone">'.concat(p,"</div>"):"","\n            </div>"):"",'\n        <div class="info-window">\n            <div class="info-window__title">'.concat(s,'</div>\n            <div class="info-window__address">').concat(l,"</div>\n            ").concat(h,"\n            ").concat(f?'<div class="info-window__image">\n                        <img src="'.concat(f,'" alt="Foto de ').concat(s,'"/>\n                    </div>'):"","\n        </div>\n    "));this.infoWindow.close(),this.marker=new google.maps.Marker({position:r,title:n,map:this.map,animation:google.maps.Animation.DROP}),this.infoWindow.setContent(v),this.marker.addListener("click",function(){t.infoWindow.open(t.map,t.marker)}),this.map.setCenter(r),this.map.setZoom(16)}}]),t}();r.default=l},{"./helpers":18,"./request":20,"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/regenerator":12}],14:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var v=n(e("@babel/runtime/regenerator")),m=n(e("@babel/runtime/helpers/slicedToArray")),c=n(e("@babel/runtime/helpers/asyncToGenerator")),s=e("./icons");function o(e){var t,p=e.prediction,r=e.container,d=e.localizaService,n=e.onPredictionClick,h=void 0===n?function(){}:n,o=(t=p.types)?t.includes("train_station")||t.includes("subway_station")?s.SUBWAY_ICON:s.MAP_MARKER_ICON:"",i=function(e,t){var r=1<arguments.length&&void 0!==t?t:"";return'<li class="localiza-app__prediction">\n                <a>%ICON%<span>%DESCRIPTION%</span></a>\n            </li>'.replace(/\%DESCRIPTION\%/g,0<arguments.length&&void 0!==e?e:"").replace("%ICON%",r)}(p.description,o);function a(){return u.apply(this,arguments)}function u(){return(u=(0,c.default)(v.default.mark(function e(){var t,r,n,o,i,a,u,c,s,l,f;return v.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.geocode(p.description);case 2:return t=e.sent,r=(0,m.default)(t,1),n=r[0],o=n.place_id,i=n.geometry.location,e.next=9,d.getPlaceDetails(o);case 9:a=e.sent,u=a.formatted_address,c=a.name,s=a.photos,l=a.formatted_phone_number,f=a.rating,d.placeMarker({position:i,title:c,address:u,imgUrl:s&&s[0].getUrl({maxWidth:150,maxHeight:150}),phone:l,rating:f}),h(p);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){r.insertAdjacentHTML("beforeend",i);var e=r.lastElementChild;p.notFound?e.classList.add("not-found"):e.addEventListener("click",a)}()}r.default=o},{"./icons":19,"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/slicedToArray":9,"@babel/runtime/regenerator":12}],15:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e("./Prediction"));function o(e){var r=e.state,t=e.localizaService,n=document.getElementById("prediction-list");function o(e){var t=e.description;r.inputValue=t}r.observe("predictions",function(){var e=r.predictions;n.innerHTML="",e.forEach(function(e){return(0,i.default)({prediction:e,container:n,localizaService:t,onPredictionClick:o})})})}r.default=o},{"./Prediction":14,"@babel/runtime/helpers/interopRequireDefault":6}],16:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var u=n(e("@babel/runtime/regenerator")),c=n(e("@babel/runtime/helpers/asyncToGenerator")),s=e("./helpers"),l=n(e("./SearchInput")),f=n(e("./PredictionList"));function o(e){var o=e.localizaService,i=(0,s.createObservable)({predictions:[],inputValue:""}),t=document.getElementById("search-bar");function a(e){return t.classList[e?"add":"remove"]("active-search")}function r(){return(r=(0,c.default)(u.default.mark(function e(t){var r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!(r=(0,s.isEmptyString)(t))),r)return e.abrupt("return",i.predictions=[]);e.next=4;break;case 4:return e.prev=4,e.next=7,o.searchLocation(t);case 7:n=e.sent,i.predictions=n,e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(4),"ZERO_RESULTS"===e.t0)return e.abrupt("return",i.predictions=[{description:"Nenhum resultado encontrado!",notFound:!0}]);e.next=15;break;case 15:console.error(e.t0);case 16:case"end":return e.stop()}},e,null,[[4,11]])}))).apply(this,arguments)}document.getElementById("clear-search").addEventListener("click",function(){i.inputValue="",a(!(i.predictions=[]))}),(0,l.default)({onInputChange:(0,s.debounce)(function(e){return r.apply(this,arguments)},250),state:i}),(0,f.default)({state:i,localizaService:o}),(0,s.addMultipleEventsListener)(t,["mousedown","touchstart"],function(e){e.stopPropagation(),i.predictions.length&&a(!0)}),(0,s.addMultipleEventsListener)(document.body,["mousedown","touchstart"],function(){return a(!1)})}r.default=o},{"./PredictionList":15,"./SearchInput":17,"./helpers":18,"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/regenerator":12}],17:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;function n(e){var r=e.onInputChange,t=e.state,n=document.getElementById("search-input");t.observe("inputValue",function(e,t){n.value=t}),n.addEventListener("input",function(e){var t=e.target;r(t.value.trim())})}r.default=n},{}],18:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isEmptyString=function(e){return!e},r.addMultipleEventsListener=function(t,e,r){e.forEach(function(e){return t.addEventListener(e,r)})},r.createObservable=function(e){var o={},t=new Proxy(e,{set:function(e,t,r){var n=e[t];return e[t]=r,o[t]&&o[t](n,r),!0}});return t.observe=function(e,t){o[e]=t},t},r.debounce=function(r,n){var o;return function(){var e=arguments,t=this;clearTimeout(o),o=setTimeout(function(){return r.apply(t,e)},n)}}},{}],19:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SUBWAY_ICON=r.MAP_MARKER_ICON=void 0;r.MAP_MARKER_ICON='<i class="fas fa-map-marker-alt icon"></i>';r.SUBWAY_ICON='<i class="fas fa-subway icon"></i>'},{}],20:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.get=function(n){return new Promise(function(e,t){var r=new XMLHttpRequest;r.open("GET",n),r.onload=function(){if(200<=this.status&&this.status<300)return e(this.response);t({status:this.status,message:this.statusText})},r.send()})},r.searchParams=function(e){var t=[];for(var r in e){var n;e.hasOwnProperty(r)&&(n=e[r],n=encodeURIComponent("string"==typeof n?n:n.toString()),t.push("".concat(r,"=").concat(n)))}return"?"+t.join("&")}},{}],21:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=n(e("./js/SearchBar")),i=n(e("./js/LocalizaService"));window.onMapsAPILoaded=function(){var e=document.getElementById("map"),t=new i.default(e);(0,o.default)({localizaService:t})}},{"./js/LocalizaService":13,"./js/SearchBar":16,"@babel/runtime/helpers/interopRequireDefault":6}]},{},[21]);
//# sourceMappingURL=main.js.map