(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{161:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});r(791);var n=r(87),s=r(842),i=r(892),a=r.n(i),u=r(184);const c=t=>{let{data:e}=t;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/tianhao-personal-site").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Pantry Check App",subtitle:"2015 BVP Hackathon",image:"/images/projects/nearestdollar.jpg",date:"2024-08-01",link:"https://github.com/3rd-Eye-FoodTag/freshy",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."}],h=()=>(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Tianhao's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((t=>(0,u.jsx)(c,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",h="quarter",d="year",l="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},M={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,a=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:c,d:u,D:l,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",v={};v[g]=p;var D="$isDayjsObject",S=function(t){return t instanceof x||!(!t||!t[D])},j=function t(e,r,n){var s;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(s=i),r&&(v[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;v[u]=e,s=u}return!n&&s&&(g=s),s||!n&&g},w=function(t,e){if(S(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},b=M;b.l=j,b.i=S,b.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=j(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var y=p.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return w(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<w(t)},y.$g=function(t,e,r){return b.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!b.u(e)||e,h=b.p(t),f=function(t,e){var s=b.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return b.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case d:return n?f(1,0):f(31,11);case o:return n?f(1,p):f(0,p+1);case c:var g=this.$locale().weekStart||0,v=(m<g?m+7:m)-g;return f(n?y-v:y+(6-v),p);case u:case l:return $(M+"Hours",0);case a:return $(M+"Minutes",1);case i:return $(M+"Seconds",2);case s:return $(M+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,c=b.p(t),h="set"+(this.$u?"UTC":""),f=(r={},r[u]=h+"Date",r[l]=h+"Date",r[o]=h+"Month",r[d]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===d){var m=this.clone().set(l,1);m.$d[f]($),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(n,h){var l,f=this;n=Number(n);var $=b.p(h),m=function(t){var e=w(f);return b.w(e.date(e.date()+Math.round(t*n)),f)};if($===o)return this.set(o,this.$M+n);if($===d)return this.set(d,this.$y+n);if($===u)return m(1);if($===c)return m(7);var p=(l={},l[i]=e,l[a]=r,l[s]=t,l)[$]||1,y=this.$d.getTime()+n*p;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$H,a=this.$m,u=this.$M,c=r.weekdays,o=r.months,h=r.meridiem,d=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},l=function(t){return b.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return d(r.monthsShort,u,o,3);case"MMMM":return d(o,u);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,c,2);case"ddd":return d(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,l,f){var $,m=this,p=b.p(l),y=w(n),M=(y.utcOffset()-this.utcOffset())*e,g=this-y,v=function(){return b.m(m,y)};switch(p){case d:$=v()/12;break;case o:$=v();break;case h:$=v()/3;break;case c:$=(g-M)/6048e5;break;case u:$=(g-M)/864e5;break;case a:$=g/r;break;case i:$=g/e;break;case s:$=g/t;break;default:$=g}return f?$:b.a($)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=j(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),k=x.prototype;return w.prototype=k,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",d],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,x,w),t.$i=!0),w},w.locale=j,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=v[g],w.Ls=v,w.p={},w}()}}]);
//# sourceMappingURL=161.0bab5cf9.chunk.js.map