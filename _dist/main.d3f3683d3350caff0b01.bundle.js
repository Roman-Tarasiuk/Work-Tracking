webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var u=t("/oeL"),e=t("aR8+"),o=t("wQAS"),i=t("q4dy"),s=t("qbdv"),a=t("fc+i"),r=t("bm2B");t.d(l,"a",function(){return d});var d=u.b(e.a,[o.a],function(n){return u.c([u.d(512,u.e,u.f,[[8,[i.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,s.a,s.b,[u.h]),u.d(4608,u.j,u.j,[]),u.d(5120,u.k,u.l,[]),u.d(5120,u.m,u.n,[]),u.d(5120,u.o,u.p,[]),u.d(4608,a.b,a.c,[s.c]),u.d(6144,u.q,null,[a.b]),u.d(4608,a.d,a.e,[]),u.d(5120,a.f,function(n,l,t,u){return[new a.g(n),new a.h(l),new a.i(t,u)]},[s.c,s.c,s.c,a.d]),u.d(4608,a.j,a.j,[a.f,u.r]),u.d(135680,a.k,a.k,[s.c]),u.d(4608,a.l,a.l,[a.j,a.k]),u.d(6144,u.s,null,[a.l]),u.d(6144,a.m,null,[a.k]),u.d(4608,u.t,u.t,[u.r]),u.d(4608,a.n,a.n,[s.c]),u.d(4608,a.o,a.o,[s.c]),u.d(4608,r.a,r.a,[]),u.d(4608,r.b,r.b,[]),u.d(512,s.d,s.d,[]),u.d(1024,u.u,a.p,[]),u.d(1024,u.v,function(n,l){return[a.q(n,l)]},[[2,a.r],[2,u.w]]),u.d(512,u.x,u.x,[[2,u.v]]),u.d(131584,u.y,u.y,[u.r,u.z,u.A,u.u,u.e,u.x]),u.d(2048,u.B,null,[u.y]),u.d(512,u.C,u.C,[u.B]),u.d(512,a.s,a.s,[[3,a.s]]),u.d(512,r.c,r.c,[]),u.d(512,r.d,r.d,[]),u.d(512,r.e,r.e,[]),u.d(512,e.a,e.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"2K+z":function(n,l,t){"use strict";var u=t("/oeL");t.d(l,"a",function(){return e});var e=function(){function n(){this.onTaskStarted=new u.R,this.onTaskStopped=new u.R,this.onTaskMovedUp=new u.R,this.onTaskMovedDown=new u.R,this.onTaskEdit=new u.R,this.onTaskDelete=new u.R,this.isActive=!1}return n.prototype.ngOnInit=function(){},n.prototype.toggle=function(n){this.task.taskStarted?(this.stopTimer(),this.onTaskStopped.emit(this.task.id)):(this.startTimer(),this.onTaskStarted.emit(this.task.id)),n.stopPropagation()},n.prototype.toggleActive=function(){this.isActive=!this.isActive},n.prototype.moveUp=function(n){this.onTaskMovedUp.emit(this.task.id),n.stopPropagation()},n.prototype.moveDown=function(n){this.onTaskMovedDown.emit(this.task.id),n.stopPropagation()},n.prototype.edit=function(n){this.onTaskEdit.emit(this.task.id),n.stopPropagation()},n.prototype.delete=function(n){this.onTaskDelete.emit(this.task.id),n.stopPropagation()},n.prototype.totalTime=function(){for(var n=this.task.workTime,l=0,t=0;t<n.length;t++)null!=n[t].end&&(l+=Math.abs(n[t].end.getTime()-n[t].start.getTime()));return this.timeStr(l)},n.prototype.totalTimeWeek=function(){var n=new Date,l=n.getDate()-n.getDay()+1,t=new Date;t.setDate(l),t.setHours(0,0,0,0);for(var u=this.task.workTime,e=0,o=0;o<u.length;o++)null!=u[o].end&&u[o].start>=t&&(e+=Math.abs(new Date(u[o].end).getTime()-new Date(u[o].start).getTime()));return this.timeStr(e)},n.prototype.totalTimeToday=function(){var n=new Date;n.setHours(0,0,0,0);for(var l=this.task.workTime,t=0,u=0;u<l.length;u++)null!=l[u].end&&l[u].start>=n&&(t+=Math.abs(new Date(l[u].end).getTime()-new Date(l[u].start).getTime()));return this.timeStr(t)},n.prototype.timeStr=function(n){var l=Math.floor(n/864e5);n>=864e5&&(n-=864e5*l);var t=Math.floor(n/36e5);n>=36e5&&(n-=36e5*t);var u=Math.floor(n/6e4);n>=6e4&&(n-=6e4*u);var e=Math.floor(n/1e3);return(l>0?l+"d ":"")+(t>0?t+"h ":"")+(u>0?u+"m ":"")+e+"s"},n.prototype.startTimer=function(){var n=this;this.startTime=new Date,this.intervalId=window.setInterval(function(){n.timer=n.timeStr((new Date).getTime()-n.startTime.getTime())},1e3)},n.prototype.stopTimer=function(){window.clearInterval(this.intervalId),this.timer=""},n.ctorParameters=function(){return[]},n}()},"3rQd":function(n,l,t){"use strict";function u(n){return s._17(0,[(n()(),s._18(0,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),s._19(-1,null,["\n  "])),(n()(),s._18(2,0,null,null,2,"app-task-item",[],null,[[null,"onTaskStarted"],[null,"onTaskStopped"],[null,"onTaskMovedUp"],[null,"onTaskMovedDown"],[null,"onTaskEdit"],[null,"onTaskDelete"]],function(n,l,t){var u=!0,e=n.component;if("onTaskStarted"===l){u=!1!==e.taskStarted(t)&&u}if("onTaskStopped"===l){u=!1!==e.taskStopped(t)&&u}if("onTaskMovedUp"===l){u=!1!==e.moveUp(t)&&u}if("onTaskMovedDown"===l){u=!1!==e.moveDown(t)&&u}if("onTaskEdit"===l){u=!1!==e.edit(t)&&u}if("onTaskDelete"===l){u=!1!==e.delete(t)&&u}return u},a.a,a.b)),s._20(3,114688,null,0,r.a,[],{task:[0,"task"]},{onTaskStarted:"onTaskStarted",onTaskStopped:"onTaskStopped",onTaskMovedUp:"onTaskMovedUp",onTaskMovedDown:"onTaskMovedDown",onTaskEdit:"onTaskEdit",onTaskDelete:"onTaskDelete"}),(n()(),s._19(-1,null,["\n  "])),(n()(),s._19(-1,null,["\n"]))],function(n,l){n(l,3,0,l.context.$implicit)},null)}function e(n){return s._17(0,[(n()(),s._25(16777216,null,null,1,null,u)),s._20(1,802816,null,0,d.i,[s._10,s._11,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._19(-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.sordedByOrder())},null)}function o(n){return s._17(0,[(n()(),s._18(0,0,null,null,1,"app-tasks-list",[],null,null,null,e,k)),s._20(1,114688,null,0,c.a,[],null,null)],function(n,l){n(l,1,0)},null)}var i=t("MmFo"),s=t("/oeL"),a=t("9/mX"),r=t("2K+z"),d=t("qbdv"),c=t("H99p");t.d(l,"b",function(){return k}),l.a=e;var p=[i.a],k=s._16({encapsulation:0,styles:p,data:{}});s._24("app-tasks-list",c.a,o,{tasks:"tasks"},{onTaskStarted:"onTaskStarted",onTaskStopped:"onTaskStopped",onTaskMovedUp:"onTaskMovedUp",onTaskMovedDown:"onTaskMovedDown",onTaskEdit:"onTaskEdit",onTaskDelete:"onTaskDelete"},[])},"9/mX":function(n,l,t){"use strict";function u(n){return s._17(0,[(n()(),s._18(0,0,null,null,1,"span",[["class","span-timer-desc"]],null,null,null,null,null)),(n()(),s._19(1,null,["+ ",""]))],null,function(n,l){n(l,1,0,l.component.timer)})}function e(n){return s._17(0,[(n()(),s._18(0,0,null,null,73,"div",[["class","task-item"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggleActive()&&u}return u},null,null)),s._20(1,278528,null,0,r.h,[s.m,s.o,s.J,s._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),s._21(2,{"task-item-active":0}),(n()(),s._19(-1,null,["\n  "])),(n()(),s._18(4,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n    "])),(n()(),s._18(6,0,null,null,4,"div",[["class","col-sm-9"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n      "])),(n()(),s._18(8,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),s._19(9,null,["",""])),(n()(),s._19(-1,null,["\n    "])),(n()(),s._19(-1,null,["\n    "])),(n()(),s._18(12,0,null,null,12,"div",[["class","col-sm-3 buttons"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(14,0,null,null,3,"button",[["class","btn btn-primary vertical-align1"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggle(t)&&u}return u},null,null)),s._20(15,278528,null,0,r.h,[s.m,s.o,s.J,s._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),s._21(16,{"btn-warning":0,"btn-success":1}),(n()(),s._19(17,null,["\n            ","\n        "])),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(19,0,null,null,1,"button",[["class","btn btn-xs vertical-align1"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.moveUp(t)&&u}return u},null,null)),(n()(),s._18(20,0,null,null,0,"span",[["class","glyphicon glyphicon-arrow-up"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(22,0,null,null,1,"button",[["class","btn btn-xs vertical-align1"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.moveDown(t)&&u}return u},null,null)),(n()(),s._18(23,0,null,null,0,"span",[["class","glyphicon glyphicon-arrow-down"]],null,null,null,null,null)),(n()(),s._19(-1,null,["  \n    "])),(n()(),s._19(-1,null,["\n  "])),(n()(),s._19(-1,null,["\n  "])),(n()(),s._18(27,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n    "])),(n()(),s._18(29,0,null,null,1,"div",[["class","col-sm-3 h3"]],null,null,null,null,null)),(n()(),s._19(30,null,["",""])),(n()(),s._19(-1,null,["\n    "])),(n()(),s._18(32,0,null,null,30,"div",[["class","col-sm-6"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n      "])),(n()(),s._18(34,0,null,null,27,"div",[["class","vertical-align2"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(36,0,null,null,1,"span",[["class","span-time-spent"]],null,null,null,null,null)),(n()(),s._19(-1,null,["Time spent:"])),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(39,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(41,0,null,null,1,"span",[["class","span-timer-desc"]],null,null,null,null,null)),(n()(),s._19(-1,null,["Total"])),(n()(),s._19(-1,null,[" "])),(n()(),s._18(44,0,null,null,1,"span",[["class","span-timer"]],null,null,null,null,null)),(n()(),s._19(45,null,["",""])),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(47,0,null,null,1,"span",[["class","span-timer-desc"]],null,null,null,null,null)),(n()(),s._19(-1,null,["This week"])),(n()(),s._19(-1,null,[" "])),(n()(),s._18(50,0,null,null,1,"span",[["class","span-timer"]],null,null,null,null,null)),(n()(),s._19(51,null,["",""])),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(53,0,null,null,1,"span",[["class","span-timer-desc"]],null,null,null,null,null)),(n()(),s._19(-1,null,["Today"])),(n()(),s._19(-1,null,[" "])),(n()(),s._18(56,0,null,null,1,"span",[["class","span-timer"]],null,null,null,null,null)),(n()(),s._19(57,null,["",""])),(n()(),s._19(-1,null,["\n        "])),(n()(),s._25(16777216,null,null,1,null,u)),s._20(60,16384,null,0,r.j,[s._10,s._11],{ngIf:[0,"ngIf"]},null),(n()(),s._19(-1,null,["\n      "])),(n()(),s._19(-1,null,["\n    "])),(n()(),s._19(-1,null,["\n    "])),(n()(),s._18(64,0,null,null,7,"div",[["class","col-sm-3 vertical-align3"]],null,null,null,null,null)),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(66,0,null,null,1,"button",[["class","btn btn-xs vertical-align btn-edit"],["disabled",""]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.edit(t)&&u}return u},null,null)),(n()(),s._19(-1,null,["Edit"])),(n()(),s._19(-1,null,["\n        "])),(n()(),s._18(69,0,null,null,1,"button",[["class","btn btn-xs vertical-align btn-delete"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.delete(t)&&u}return u},null,null)),(n()(),s._19(-1,null,["Delete"])),(n()(),s._19(-1,null,["  \n    "])),(n()(),s._19(-1,null,["\n  "])),(n()(),s._19(-1,null,["\n"])),(n()(),s._19(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,"task-item",n(l,2,0,t.isActive));n(l,15,0,"btn btn-primary vertical-align1",n(l,16,0,t.task.taskStarted,!t.task.taskStarted)),n(l,60,0,t.task.taskStarted)},function(n,l){var t=l.component;n(l,9,0,t.task.title),n(l,17,0,t.task.taskStarted?"Stop":"Start"),n(l,30,0,t.task.id),n(l,45,0,t.totalTime()),n(l,51,0,t.totalTimeWeek()),n(l,57,0,t.totalTimeToday())})}function o(n){return s._17(0,[(n()(),s._18(0,0,null,null,1,"app-task-item",[],null,null,null,e,c)),s._20(1,114688,null,0,a.a,[],null,null)],function(n,l){n(l,1,0)},null)}var i=t("ACIZ"),s=t("/oeL"),a=t("2K+z"),r=t("qbdv");t.d(l,"b",function(){return c}),l.a=e;var d=[i.a],c=s._16({encapsulation:0,styles:d,data:{}});s._24("app-task-item",a.a,o,{task:"task"},{onTaskStarted:"onTaskStarted",onTaskStopped:"onTaskStopped",onTaskMovedUp:"onTaskMovedUp",onTaskMovedDown:"onTaskMovedDown",onTaskEdit:"onTaskEdit",onTaskDelete:"onTaskDelete"},[])},ACIZ:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},H99p:function(n,l,t){"use strict";var u=t("/oeL");t.d(l,"a",function(){return e});var e=function(){function n(){this.onTaskStarted=new u.R,this.onTaskStopped=new u.R,this.onTaskMovedUp=new u.R,this.onTaskMovedDown=new u.R,this.onTaskEdit=new u.R,this.onTaskDelete=new u.R}return n.prototype.sordedByOrder=function(){return this.tasks.sort(function(n,l){return n.priority-l.priority})},n.prototype.ngOnInit=function(){},n.prototype.taskStarted=function(n){this.onTaskStarted.emit(n)},n.prototype.taskStopped=function(n){this.onTaskStopped.emit(n)},n.prototype.moveUp=function(n){this.onTaskMovedUp.emit(n)},n.prototype.moveDown=function(n){this.onTaskMovedDown.emit(n)},n.prototype.edit=function(n){this.onTaskEdit.emit(n)},n.prototype.delete=function(n){this.onTaskDelete.emit(n)},n.ctorParameters=function(){return[]},n}()},MmFo:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("/oeL"),e=t("p5Ee"),o=t("+h1B"),i=t("fc+i");e.a.production&&t.i(u.a)(),t.i(i.a)().bootstrapModuleFactory(o.a)},fqtC:function(n,l,t){"use strict";var u=t("iy4r");t.d(l,"a",function(){return e});var e=function(){function n(n,l,t,u){this.taskStarted=!1,this.priority=n,this.id=l,this.title=t,this.workTime=u||new Array}return n.prototype.startWork=function(n){this.workTime.push(new u.a(n,null)),this.taskStarted=!0},n.prototype.endWork=function(n){var l=this.workTime.length;this.workTime[l-1].end=n,this.taskStarted=!1},n}()},iy4r:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(n,l){this.start=n,this.end=l}return n}()},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u={production:!0}},q4dy:function(n,l,t){"use strict";function u(n){return i._17(0,[(n()(),i._18(0,0,null,null,89,"div",[["class","container"]],null,null,null,null,null)),(n()(),i._19(-1,null,["\n  "])),(n()(),i._18(2,0,null,null,3,"h1",[],null,null,null,null,null)),(n()(),i._19(-1,null,["Work Tracking "])),(n()(),i._18(4,0,null,null,1,"span",[["class","badge"]],null,null,null,null,null)),(n()(),i._19(-1,null,["Helper tool for Jira ®"])),(n()(),i._19(-1,null,["\n\n  "])),(n()(),i._18(7,0,null,null,2,"app-tasks-list",[],null,[[null,"onTaskStarted"],[null,"onTaskStopped"],[null,"onTaskMovedUp"],[null,"onTaskMovedDown"],[null,"onTaskEdit"],[null,"onTaskDelete"]],function(n,l,t){var u=!0,e=n.component;if("onTaskStarted"===l){u=!1!==e.taskStarted(t)&&u}if("onTaskStopped"===l){u=!1!==e.taskStopped(t)&&u}if("onTaskMovedUp"===l){u=!1!==e.moveUp(t)&&u}if("onTaskMovedDown"===l){u=!1!==e.moveDown(t)&&u}if("onTaskEdit"===l){u=!1!==e.edit(t)&&u}if("onTaskDelete"===l){u=!1!==e.delete(t)&&u}return u},a.a,a.b)),i._20(8,114688,null,0,r.a,[],{tasks:[0,"tasks"]},{onTaskStarted:"onTaskStarted",onTaskStopped:"onTaskStopped",onTaskMovedUp:"onTaskMovedUp",onTaskMovedDown:"onTaskMovedDown",onTaskEdit:"onTaskEdit",onTaskDelete:"onTaskDelete"}),(n()(),i._19(-1,null,["\n  "])),(n()(),i._19(-1,null,["\n\n  "])),(n()(),i._18(11,0,null,null,3,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggleEditing()&&u}return u},null,null)),i._20(12,278528,null,0,d.h,[i.m,i.o,i.J,i._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._21(13,{"edit-new-task":0}),(n()(),i._19(-1,null,["New Task"])),(n()(),i._19(-1,null,["\n\n  "])),(n()(),i._18(16,0,null,null,3,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.saveData()&&u}return u},null,null)),i._20(17,278528,null,0,d.h,[i.m,i.o,i.J,i._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._21(18,{"edit-new-task":0}),(n()(),i._19(-1,null,["Save Work"])),(n()(),i._19(-1,null,["\n  \n  "])),(n()(),i._18(21,0,null,null,3,"button",[["class","btn btn-warning"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.loadData()&&u}return u},null,null)),i._20(22,278528,null,0,d.h,[i.m,i.o,i.J,i._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._21(23,{"edit-new-task":0}),(n()(),i._19(-1,null,["Load Work"])),(n()(),i._19(-1,null,["\n\n  "])),(n()(),i._18(26,0,null,null,62,"form",[["class","new-task-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0;if("submit"===l){u=!1!==i._22(n,30).onSubmit(t)&&u}if("reset"===l){u=!1!==i._22(n,30).onReset()&&u}return u},null,null)),i._20(27,278528,null,0,d.h,[i.m,i.o,i.J,i._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._21(28,{"edit-new-task":0}),i._20(29,16384,null,0,c.f,[],null,null),i._20(30,16384,[["f",4]],0,c.g,[[8,null],[8,null]],null,null),i._23(2048,null,c.h,null,[c.g]),i._20(32,16384,null,0,c.i,[c.h],null,null),(n()(),i._19(-1,null,["\n      "])),(n()(),i._18(34,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._19(-1,null,["New Task:"])),(n()(),i._19(-1,null,["\n\n      "])),(n()(),i._18(37,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),i._19(-1,null,["\n        "])),(n()(),i._18(39,0,null,null,1,"label",[["for","id"]],null,null,null,null,null)),(n()(),i._19(-1,null,["ID"])),(n()(),i._19(-1,null,["\n        "])),(n()(),i._18(42,0,null,null,7,"input",[["class","form-control"],["id","id"],["name","id"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==i._22(n,43)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==i._22(n,43).onTouched()&&u}if("compositionstart"===l){u=!1!==i._22(n,43)._compositionStart()&&u}if("compositionend"===l){u=!1!==i._22(n,43)._compositionEnd(t.target.value)&&u}return u},null,null)),i._20(43,16384,null,0,c.j,[i.I,i.J,[2,c.k]],null,null),i._20(44,16384,null,0,c.l,[],{required:[0,"required"]},null),i._23(1024,null,c.m,function(n){return[n]},[c.l]),i._23(1024,null,c.n,function(n){return[n]},[c.j]),i._20(47,671744,null,0,c.o,[[2,c.h],[2,c.m],[8,null],[2,c.n]],{name:[0,"name"],model:[1,"model"]},null),i._23(2048,null,c.p,null,[c.o]),i._20(49,16384,null,0,c.q,[c.p],null,null),(n()(),i._19(-1,null,["\n      "])),(n()(),i._19(-1,null,["\n\n      "])),(n()(),i._18(52,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),i._19(-1,null,["\n        "])),(n()(),i._18(54,0,null,null,1,"label",[["for","title"]],null,null,null,null,null)),(n()(),i._19(-1,null,["Title"])),(n()(),i._19(-1,null,["\n        "])),(n()(),i._18(57,0,null,null,7,"input",[["class","form-control"],["id","title"],["name","title"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==i._22(n,58)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==i._22(n,58).onTouched()&&u}if("compositionstart"===l){u=!1!==i._22(n,58)._compositionStart()&&u}if("compositionend"===l){u=!1!==i._22(n,58)._compositionEnd(t.target.value)&&u}return u},null,null)),i._20(58,16384,null,0,c.j,[i.I,i.J,[2,c.k]],null,null),i._20(59,16384,null,0,c.l,[],{required:[0,"required"]},null),i._23(1024,null,c.m,function(n){return[n]},[c.l]),i._23(1024,null,c.n,function(n){return[n]},[c.j]),i._20(62,671744,null,0,c.o,[[2,c.h],[2,c.m],[8,null],[2,c.n]],{name:[0,"name"],model:[1,"model"]},null),i._23(2048,null,c.p,null,[c.o]),i._20(64,16384,null,0,c.q,[c.p],null,null),(n()(),i._19(-1,null,["\n      "])),(n()(),i._19(-1,null,["\n\n      "])),(n()(),i._18(67,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),i._19(-1,null,["\n        "])),(n()(),i._18(69,0,null,null,1,"label",[["for","priority"]],null,null,null,null,null)),(n()(),i._19(-1,null,["Priority"])),(n()(),i._19(-1,null,["\n        "])),(n()(),i._18(72,0,null,null,7,"input",[["class","form-control"],["id","priority"],["name","priority"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==i._22(n,73)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==i._22(n,73).onTouched()&&u}if("compositionstart"===l){u=!1!==i._22(n,73)._compositionStart()&&u}if("compositionend"===l){u=!1!==i._22(n,73)._compositionEnd(t.target.value)&&u}return u},null,null)),i._20(73,16384,null,0,c.j,[i.I,i.J,[2,c.k]],null,null),i._20(74,16384,null,0,c.l,[],{required:[0,"required"]},null),i._23(1024,null,c.m,function(n){return[n]},[c.l]),i._23(1024,null,c.n,function(n){return[n]},[c.j]),i._20(77,671744,null,0,c.o,[[2,c.h],[2,c.m],[8,null],[2,c.n]],{name:[0,"name"],model:[1,"model"]},null),i._23(2048,null,c.p,null,[c.o]),i._20(79,16384,null,0,c.q,[c.p],null,null),(n()(),i._19(-1,null,["\n      "])),(n()(),i._19(-1,null,["\n  \n      "])),(n()(),i._19(-1,null,["\n      "])),(n()(),i._18(83,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.submit(i._22(n,30))&&u}return u},null,null)),(n()(),i._19(-1,null,["Submit"])),(n()(),i._19(-1,null,["\n      "])),(n()(),i._18(86,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggleEditing()&&u}return u},null,null)),(n()(),i._19(-1,null,["Cancel"])),(n()(),i._19(-1,null,["\n  "])),(n()(),i._19(-1,null,["\n"])),(n()(),i._19(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,8,0,t.tasks);n(l,12,0,"btn btn-success",n(l,13,0,t.editing));n(l,17,0,"btn btn-primary",n(l,18,0,t.editing));n(l,22,0,"btn btn-warning",n(l,23,0,t.editing));n(l,27,0,"new-task-form",n(l,28,0,!t.editing));n(l,44,0,"");n(l,47,0,"id","");n(l,59,0,"");n(l,62,0,"title","");n(l,74,0,"");n(l,77,0,"priority","")},function(n,l){n(l,26,0,i._22(l,32).ngClassUntouched,i._22(l,32).ngClassTouched,i._22(l,32).ngClassPristine,i._22(l,32).ngClassDirty,i._22(l,32).ngClassValid,i._22(l,32).ngClassInvalid,i._22(l,32).ngClassPending),n(l,42,0,i._22(l,44).required?"":null,i._22(l,49).ngClassUntouched,i._22(l,49).ngClassTouched,i._22(l,49).ngClassPristine,i._22(l,49).ngClassDirty,i._22(l,49).ngClassValid,i._22(l,49).ngClassInvalid,i._22(l,49).ngClassPending),n(l,57,0,i._22(l,59).required?"":null,i._22(l,64).ngClassUntouched,i._22(l,64).ngClassTouched,i._22(l,64).ngClassPristine,i._22(l,64).ngClassDirty,i._22(l,64).ngClassValid,i._22(l,64).ngClassInvalid,i._22(l,64).ngClassPending),n(l,72,0,i._22(l,74).required?"":null,i._22(l,79).ngClassUntouched,i._22(l,79).ngClassTouched,i._22(l,79).ngClassPristine,i._22(l,79).ngClassDirty,i._22(l,79).ngClassValid,i._22(l,79).ngClassInvalid,i._22(l,79).ngClassPending)})}function e(n){return i._17(0,[(n()(),i._18(0,0,null,null,1,"app-root",[],null,null,null,u,k)),i._20(1,49152,null,0,s.a,[],null,null)],null,null)}var o=t("NhKt"),i=t("/oeL"),s=t("wQAS"),a=t("3rQd"),r=t("H99p"),d=t("qbdv"),c=t("bm2B");t.d(l,"a",function(){return _});var p=[o.a],k=i._16({encapsulation:0,styles:p,data:{}}),_=i._24("app-root",s.a,e,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},wQAS:function(n,l,t){"use strict";var u=t("fqtC");t.d(l,"a",function(){return e});var e=function(){function n(){this.runningTask=null,this.editing=!1,this.tasks=[new u.a(4,"id-0","Idle Time")]}return n.prototype.taskStarted=function(n){for(var l=0;l<this.tasks.length;l++)if(this.tasks[l].id==n){null!=this.runningTask&&this.runningTask.endWork(new Date),this.runningTask=this.tasks[l],this.runningTask.startWork(new Date);break}},n.prototype.taskStopped=function(n){null!=this.runningTask&&(this.runningTask.endWork(new Date),this.runningTask=null)},n.prototype.moveUp=function(n){var l=this.findTaskIndex(n);if(l>0){var t=this.tasks[l-1],u=this.tasks[l];t.priority++,u.priority--}},n.prototype.moveDown=function(n){var l=this.findTaskIndex(n);if(l<this.tasks.length-1){var t=this.tasks[l+1],u=this.tasks[l];t.priority--,u.priority++}},n.prototype.edit=function(n){var l=this.findTaskIndex(n);l>=0&&l<this.tasks.length&&this.startEditing()},n.prototype.delete=function(n){var l=this.findTaskIndex(n);l>=0&&l<this.tasks.length&&this.tasks.splice(l,1)},n.prototype.saveData=function(){this.uploadWorkToStorage(this.tasks)},n.prototype.loadData=function(){this.tasks=this.getWorkFromStorage()},n.prototype.submit=function(n){this.addTask(n.value.id,n.value.title,n.value.priority),n.resetForm(),this.toggleEditing()},n.prototype.toggleEditing=function(){this.editing=!this.editing},n.prototype.startEditing=function(){this.editing=!0},n.prototype.findTask=function(n){for(var l=-1,t=0;t<this.tasks.length;t++)if(this.tasks[t].id==n){l=t;break}return l>-1?this.tasks[t]:null},n.prototype.findTaskIndex=function(n){for(var l=-1,t=0;t<this.tasks.length;t++)if(this.tasks[t].id==n){l=t;break}return l},n.prototype.addTask=function(n,l,t){t<0?t=0:t>this.tasks.length&&(t=this.tasks.length),this.tasks.splice(t,0,new u.a(t,n,l))},n.prototype.uploadWorkToStorage=function(n){localStorage.setItem("work",JSON.stringify(n))},n.prototype.getWorkFromStorage=function(){var n=localStorage.getItem("work");if(void 0==n||null==n)return console.log("getWorkFromStorage(): no data loaded."),null;for(var l=JSON.parse(n),t=0;t<l.length;t++)for(var e=l[t].workTime,o=0;o<e.length;o++)e[o].start&&(e[o].start=new Date(e[o].start)),e[o].end&&(e[o].end=new Date(e[o].end));for(var i=new Array,t=0;t<l.length;t++)i.push(new u.a(l[t].priority,l[t].id,l[t].title,l[t].workTime));return i},n.ctorParameters=function(){return[]},n}()}},[0]);