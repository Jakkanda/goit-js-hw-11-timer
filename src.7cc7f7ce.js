parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}var n=function(){function e(a){var n=a.selector,r=a.targetDate;t(this,e),this.targetDate=r,this.start(),this.ref=document.querySelector("".concat(n)),this.refs={days:this.ref.querySelector('span[data-value="days"]'),hours:this.ref.querySelector('span[data-value="hours"]'),minsEl:this.ref.querySelector('span[data-value="mins"]'),secsEl:this.ref.querySelector('span[data-value="secs"]')}}return a(e,[{key:"calcDeltaTime",value:function(){var t=Date.now(),e=this.targetDate-t;this.calcDays(e)}},{key:"calcDays",value:function(t){var e=this.pad(Math.floor(t/864e5)),a=this.pad(Math.floor(t%864e5/36e5)),n=this.pad(Math.floor(t%36e5/6e4)),r=this.pad(Math.floor(t%6e4/1e3));this.updateComponents(e,a,n,r)}},{key:"updateComponents",value:function(t,e,a,n){this.refs.days.textContent=t,this.refs.hours.textContent=e,this.refs.minsEl.textContent=a,this.refs.secsEl.textContent=n}},{key:"pad",value:function(t){return t.toString().padStart(2,"0")}},{key:"start",value:function(){var t=this;setInterval(function(){t.calcDeltaTime()},1e3)}}]),e}(),r=new n({selector:"#timer-1",targetDate:new Date("Aug 24 2021")});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.7cc7f7ce.js.map