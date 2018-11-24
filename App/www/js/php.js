var php={
	date:function(a,b){var c,d,e=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],f=/\\?(.?)/gi,g=function(a,b){return d[a]?d[a]():b},h=function(a,b){for(a=String(a);a.length<b;)a="0"+a;return a};d={d:function(){return h(d.j(),2)},D:function(){return d.l().slice(0,3)},j:function(){return c.getDate()},l:function(){return e[d.w()]+"day"},N:function(){return d.w()||7},S:function(){var a=d.j(),b=a%10;return b<=3&&1===parseInt(a%100/10,10)&&(b=0),["st","nd","rd"][b-1]||"th"},w:function(){return c.getDay()},z:function(){var a=new Date(d.Y(),d.n()-1,d.j()),b=new Date(d.Y(),0,1);return Math.round((a-b)/864e5)},W:function(){var a=new Date(d.Y(),d.n()-1,d.j()-d.N()+3),b=new Date(a.getFullYear(),0,4);return h(1+Math.round((a-b)/864e5/7),2)},F:function(){return e[6+d.n()]},m:function(){return h(d.n(),2)},M:function(){return d.F().slice(0,3)},n:function(){return c.getMonth()+1},t:function(){return new Date(d.Y(),d.n(),0).getDate()},L:function(){var a=d.Y();return a%4===0&a%100!==0|a%400===0},o:function(){var a=d.n(),b=d.W(),c=d.Y();return c+(12===a&&b<9?1:1===a&&b>9?-1:0)},Y:function(){return c.getFullYear()},y:function(){return d.Y().toString().slice(-2)},a:function(){return c.getHours()>11?"pm":"am"},A:function(){return d.a().toUpperCase()},B:function(){var a=3600*c.getUTCHours(),b=60*c.getUTCMinutes(),d=c.getUTCSeconds();return h(Math.floor((a+b+d+3600)/86.4)%1e3,3)},g:function(){return d.G()%12||12},G:function(){return c.getHours()},h:function(){return h(d.g(),2)},H:function(){return h(d.G(),2)},i:function(){return h(c.getMinutes(),2)},s:function(){return h(c.getSeconds(),2)},u:function(){return h(1e3*c.getMilliseconds(),6)},e:function(){var a="Not supported (see source code of date() for timezone on how to add support)";throw new Error(a)},I:function(){var a=new Date(d.Y(),0),b=Date.UTC(d.Y(),0),c=new Date(d.Y(),6),e=Date.UTC(d.Y(),6);return a-b!==c-e?1:0},O:function(){var a=c.getTimezoneOffset(),b=Math.abs(a);return(a>0?"-":"+")+h(100*Math.floor(b/60)+b%60,4)},P:function(){var a=d.O();return a.substr(0,3)+":"+a.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-c.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(f,g)},r:function(){return"D, d M Y H:i:s O".replace(f,g)},U:function(){return c/1e3|0}};var i=function(a,b){return c=void 0===b?new Date:b instanceof Date?new Date(b):new Date(1e3*b),a.replace(f,g)};return i(a,b)},
	formatted_date:function(a){return php.date('j M Y',php.strtotime(a))},
	formatted_datetime:function(a){var a=php.strtotime(a);return php.date('j M Y',a)+' at '+php.date('H:i',a);},
	strtotime:function(a,b){function p(a,b,c){var d,e=h[b];"undefined"!=typeof e&&(d=e-g.getDay(),0===d?d=7*c:d>0&&"last"===a?d-=7:d<0&&"next"===a&&(d+=7),g.setDate(g.getDate()+d))}function q(a){var b=a.split(" "),c=b[0],d=b[1].substring(0,3),e=/\d+/.test(c),f="ago"===b[2],h=("last"===c?-1:1)*(f?-1:1);if(e&&(h*=parseInt(c,10)),i.hasOwnProperty(d)&&!b[1].match(/^mon(day|\.)?$/i))return g["set"+i[d]](g["get"+i[d]]()+h);if("wee"===d)return g.setDate(g.getDate()+7*h);if("next"===c||"last"===c)p(c,d,h);else if(!e)return!1;return!0}var c,d,e,f,g,h,i,j,k,l,m,n=!1;if(!a)return n;a=a.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();var o=new RegExp(["^(\\d{1,4})","([\\-\\.\\/:])","(\\d{1,2})","([\\-\\.\\/:])","(\\d{1,4})","(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?","(?:\\s([A-Z]+)?)?$"].join(""));if(d=a.match(o),d&&d[2]===d[4])if(d[1]>1901)switch(d[2]){case"-":return d[3]>12||d[5]>31?n:new Date(d[1],parseInt(d[3],10)-1,d[5],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3;case".":return n;case"/":return d[3]>12||d[5]>31?n:new Date(d[1],parseInt(d[3],10)-1,d[5],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3}else if(d[5]>1901)switch(d[2]){case"-":return d[3]>12||d[1]>31?n:new Date(d[5],parseInt(d[3],10)-1,d[1],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3;case".":return d[3]>12||d[1]>31?n:new Date(d[5],parseInt(d[3],10)-1,d[1],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3;case"/":return d[1]>12||d[3]>31?n:new Date(d[5],parseInt(d[1],10)-1,d[3],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3}else switch(d[2]){case"-":return d[3]>12||d[5]>31||d[1]<70&&d[1]>38?n:(f=d[1]>=0&&d[1]<=38?+d[1]+2e3:d[1],new Date(f,parseInt(d[3],10)-1,d[5],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3);case".":return d[5]>=70?d[3]>12||d[1]>31?n:new Date(d[5],parseInt(d[3],10)-1,d[1],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3:d[5]<60&&!d[6]?d[1]>23||d[3]>59?n:(e=new Date,new Date(e.getFullYear(),e.getMonth(),e.getDate(),d[1]||0,d[3]||0,d[5]||0,d[9]||0)/1e3):n;case"/":return d[1]>12||d[3]>31||d[5]<70&&d[5]>38?n:(f=d[5]>=0&&d[5]<=38?+d[5]+2e3:d[5],new Date(f,parseInt(d[1],10)-1,d[3],d[6]||0,d[7]||0,d[8]||0,d[9]||0)/1e3);case":":return d[1]>23||d[3]>59||d[5]>59?n:(e=new Date,new Date(e.getFullYear(),e.getMonth(),e.getDate(),d[1]||0,d[3]||0,d[5]||0)/1e3)}if("now"===a)return null===b||isNaN(b)?(new Date).getTime()/1e3|0:0|b;if(!isNaN(c=Date.parse(a)))return c/1e3|0;if(o=new RegExp(["^([0-9]{4}-[0-9]{2}-[0-9]{2})","[ t]","([0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?)","([\\+-][0-9]{2}(:[0-9]{2})?|z)"].join("")),d=a.match(o),d&&("z"===d[4]?d[4]="Z":d[4].match(/^([\+-][0-9]{2})$/)&&(d[4]=d[4]+":00"),!isNaN(c=Date.parse(d[1]+"T"+d[2]+d[4]))))return c/1e3|0;if(g=b?new Date(1e3*b):new Date,h={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},i={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"},k="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)",l="([+-]?\\d+\\s"+k+"|(last|next)\\s"+k+")(\\sago)?",d=a.match(new RegExp(l,"gi")),!d)return n;for(m=0,j=d.length;m<j;m++)if(!q(d[m]))return n;return g.getTime()/1e3},
	
};