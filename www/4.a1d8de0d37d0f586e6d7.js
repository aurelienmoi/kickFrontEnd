(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Kvg2:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("mrSG"),e=u("6Qg2"),i=u("LvDl"),r=u("ej43"),c=u("gFX4"),s=u("ZZ/e"),a=u("TZmh"),b=function(){function l(l,n,u,o,t){this.actionSheetController=l,this.usersService=n,this.authService=u,this.modalController=o,this.router=t,this.users=[],this.userArr=[],this.socket=c("https://aurelienclement.fr")}return l.prototype.ngOnInit=function(){var l=this;this.loggedInUser=this.authService.userData,this.getUsers(),this.getUser(),this.socket.on("refreshPage",(function(){l.getUsers(),l.getUser()}))},l.prototype.getUsers=function(){var l=this;this.usersService.getAllUsers().subscribe((function(n){i.remove(n.result,{username:l.loggedInUser.username}),l.users=n.result,console.log(l.users)}))},l.prototype.getUser=function(){var l=this;this.loggedInUser=this.authService.userData,console.log(this.loggedInUser),this.usersService.getUserById(this.loggedInUser.id).subscribe((function(n){l.userArr=n.result.following,console.log(n)}))},l.prototype.checkInArray=function(l,n){return!!i.find(l,["userFollowed._id",n])},l.prototype.followUser=function(l){var n=this;console.log(typeof l._id),this.usersService.followUser(l._id).subscribe((function(l){console.log(l),n.socket.emit("refresh",{})}))},l.prototype.unfollowUser=function(l){var n=this;this.usersService.unfollowUser(l._id).subscribe((function(l){console.log(l),n.socket.emit("refresh",{})}))},l.prototype.presentModalMessaging=function(l){return t.b(this,void 0,void 0,(function(){return t.e(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:a.a,componentProps:{username:l}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}}))}))},l.prototype.more=function(l,n){return t.b(this,void 0,void 0,(function(){var l=this;return t.e(this,(function(u){switch(u.label){case 0:return[4,this.actionSheetController.create({header:n,cssClass:"moreCss",buttons:[{text:"Messages",icon:"ios-send",handler:function(){l.presentModalMessaging(n)}},{text:"Annuler",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}}))}))},l}(),h=function(){return function(){}}(),f=u("pMnS"),g=u("X6gw"),p=u("oBZk"),k=u("Ip0R"),m=u("ZYCi"),d=u("vFeh"),v=u("qijY"),C=o.nb({encapsulation:0,styles:[[".moreCss[_ngcontent-%COMP%]{text-align:center}.svgIcon[_ngcontent-%COMP%]{width:20px;height:auto;fill:#fff}"]],data:{}});function z(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,3,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.followUser(l.parent.context.$implicit)&&o),o}),p.P,p.e)),o.ob(1,49152,null,0,s.l,[o.h,o.k,o.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),o.pb(2,0,null,0,1,"ion-icon",[["class","marginRight_5"],["name","add-circle-outline"]],null,null,null,p.cb,p.r)),o.ob(3,49152,null,0,s.D,[o.h,o.k,o.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"light","clear"),l(n,3,0,"add-circle-outline")}),null)}function x(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,3,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.unfollowUser(l.parent.context.$implicit)&&o),o}),p.P,p.e)),o.ob(1,49152,null,0,s.l,[o.h,o.k,o.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),o.pb(2,0,null,0,1,"ion-icon",[["class","marginRight_5"],["name","close-circle"]],null,null,null,p.cb,p.r)),o.ob(3,49152,null,0,s.D,[o.h,o.k,o.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"light","clear"),l(n,3,0,"close-circle")}),null)}function w(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,18,"ion-item",[["class","transparentToolbar"]],null,null,null,p.ib,p.u)),o.ob(1,49152,null,0,s.I,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,1,"div",[["class","avatarContainer"]],null,null,null,null,null)),(l()(),o.pb(3,0,null,null,0,"img",[["class","avatar"],["src","assets/img/bitmoji.png"]],null,null,null,null,null)),(l()(),o.pb(4,0,null,0,6,"ion-label",[],null,null,null,p.jb,p.y)),o.ob(5,49152,null,0,s.O,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,4,"a",[["class","titleColor"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,7).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),o.ob(7,737280,null,0,s.Mb,[k.g,s.Ib,o.k,m.m,[2,m.n]],null,null),o.ob(8,671744,null,0,m.o,[m.m,m.a,k.g],{routerLink:[0,"routerLink"]},null),o.Ab(9,2),(l()(),o.Eb(10,null,["",""])),(l()(),o.gb(16777216,null,0,1,null,z)),o.ob(12,16384,null,0,k.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,x)),o.ob(14,16384,null,0,k.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(15,0,null,0,3,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.more(l.context.$implicit._id,l.context.$implicit.username)&&o),o}),p.P,p.e)),o.ob(16,49152,null,0,s.l,[o.h,o.k,o.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),o.pb(17,0,null,0,1,"ion-icon",[["class","marginRight_5"],["src","assets/svg/ellipsis-vertical-sharp.svg"]],null,null,null,p.cb,p.r)),o.ob(18,49152,null,0,s.D,[o.h,o.k,o.z],{src:[0,"src"]},null)],(function(l,n){var u=n.component;l(n,7,0);var o=l(n,9,0,"/contactDashboard",n.context.$implicit._id);l(n,8,0,o),l(n,12,0,!u.checkInArray(u.userArr,n.context.$implicit._id)),l(n,14,0,u.checkInArray(u.userArr,n.context.$implicit._id)),l(n,16,0,"light","clear"),l(n,18,0,"assets/svg/ellipsis-vertical-sharp.svg")}),(function(l,n){l(n,6,0,o.zb(n,8).target,o.zb(n,8).href),l(n,10,0,n.context.$implicit.username)}))}function I(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,14,"ion-header",[],null,null,null,p.bb,p.q)),o.ob(1,49152,null,0,s.C,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,12,"ion-toolbar",[["class","kickBg"]],null,null,null,p.vb,p.K)),o.ob(3,49152,null,0,s.Db,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,2,"ion-title",[["class","icon whiteSmoke"]],null,null,null,p.ub,p.J)),o.ob(5,49152,null,0,s.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Eb(-1,0,["Communaut\xe9"])),(l()(),o.pb(7,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,p.Q,p.f)),o.ob(8,49152,null,0,s.m,[o.h,o.k,o.z],null,null),(l()(),o.pb(9,0,null,0,5,"ion-button",[["autoHide","false"],["class","lightKick"],["routerLink","/dashboard"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,11).onClick()&&t),"click"===n&&(t=!1!==o.zb(l,12).onClick(u)&&t),t}),p.P,p.e)),o.ob(10,49152,null,0,s.l,[o.h,o.k,o.z],null,null),o.ob(11,16384,null,0,m.n,[m.m,m.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(12,737280,null,0,s.Mb,[k.g,s.Ib,o.k,m.m,[2,m.n]],null,null),(l()(),o.pb(13,0,null,0,1,"ion-icon",[["class","settingBtn"],["name","ios-arrow-forward"]],null,null,null,p.cb,p.r)),o.ob(14,49152,null,0,s.D,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.pb(15,0,null,null,6,"ion-content",[["id","yellowBg"]],null,null,null,p.Y,p.n)),o.ob(16,49152,null,0,s.v,[o.h,o.k,o.z],null,null),(l()(),o.pb(17,0,null,0,2,"div",[["class","ion-text-center mainDiv"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,w)),o.ob(19,278528,null,0,k.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(20,0,null,0,1,"app-nav-bar",[],null,null,null,d.b,d.a)),o.ob(21,114688,null,0,v.a,[],null,null)],(function(l,n){var u=n.component;l(n,11,0,"/dashboard"),l(n,12,0),l(n,14,0,"ios-arrow-forward"),l(n,19,0,u.users),l(n,21,0)}),null)}function y(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-community",[],null,null,null,I,C)),o.ob(1,114688,null,0,b,[s.a,e.a,r.a,s.Hb,m.m],null,null)],(function(l,n){l(n,1,0)}),null)}var M=o.lb("app-community",b,y,{},{},[]),_=u("gIcY"),L=u("ySSC"),P=u("IiHF");u.d(n,"CommunityPageModuleNgFactory",(function(){return U}));var U=o.mb(h,[],(function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[f.a,g.b,M]],[3,o.j],o.x]),o.xb(4608,k.l,k.k,[o.u,[2,k.r]]),o.xb(4608,s.c,s.c,[o.z,o.g]),o.xb(4608,s.Hb,s.Hb,[s.c,o.j,o.q]),o.xb(4608,s.Lb,s.Lb,[s.c,o.j,o.q]),o.xb(4608,_.w,_.w,[]),o.xb(1073742336,k.b,k.b,[]),o.xb(1073742336,s.Fb,s.Fb,[]),o.xb(1073742336,_.u,_.u,[]),o.xb(1073742336,_.g,_.g,[]),o.xb(1073742336,m.p,m.p,[[2,m.v],[2,m.m]]),o.xb(1073742336,L.a,L.a,[]),o.xb(1073742336,P.a,P.a,[]),o.xb(1073742336,h,h,[]),o.xb(1024,m.k,(function(){return[[{path:"",component:b}]]}),[])])}))},qijY:function(l,n,u){"use strict";u.d(n,"a",(function(){return o}));var o=function(){function l(){}return l.prototype.ngOnInit=function(){},l}()},vFeh:function(l,n,u){"use strict";var o=u("CcnG"),t=u("oBZk"),e=u("ZZ/e"),i=u("ZYCi"),r=u("Ip0R");u("qijY"),u.d(n,"a",(function(){return c})),u.d(n,"b",(function(){return s}));var c=o.nb({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{height:55px;margin:0}ion-title[_ngcontent-%COMP%]{height:60px}ion-icon[_ngcontent-%COMP%]{font-size:30px}.avatarContainer[_ngcontent-%COMP%]{border:2px solid #f5f5f5}footer[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;z-index:300}.behindFooter[_ngcontent-%COMP%]{height:60px}"]],data:{}});function s(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,0,"div",[["class","behindFooter"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,24,"footer",[],null,null,null,null,null)),(l()(),o.pb(2,0,null,null,23,"ion-footer",[],null,null,null,t.Z,t.o)),o.ob(3,49152,null,0,e.A,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,21,"ion-toolbar",[["class","kickBg"]],null,null,null,t.vb,t.K)),o.ob(5,49152,null,0,e.Db,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,7,"ion-title",[],null,null,null,t.ub,t.J)),o.ob(7,49152,null,0,e.Bb,[o.h,o.k,o.z],null,null),(l()(),o.pb(8,0,null,0,5,"ion-button",[["fill","clear"],["routerLink","/dashboard"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,10).onClick()&&t),"click"===n&&(t=!1!==o.zb(l,11).onClick(u)&&t),t}),t.P,t.e)),o.ob(9,49152,null,0,e.l,[o.h,o.k,o.z],{fill:[0,"fill"]},null),o.ob(10,16384,null,0,i.n,[i.m,i.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(11,737280,null,0,e.Mb,[r.g,e.Ib,o.k,i.m,[2,i.n]],null,null),(l()(),o.pb(12,0,null,0,1,"div",[["class","avatarContainer"]],null,null,null,null,null)),(l()(),o.pb(13,0,null,null,0,"img",[["class","avatar"],["src","assets/img/bitmoji.png"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,0,5,"ion-button",[["class","foreground"],["color","light"],["fill","clear"],["routerLink","/map"],["slot","primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,16).onClick()&&t),"click"===n&&(t=!1!==o.zb(l,17).onClick(u)&&t),t}),t.P,t.e)),o.ob(15,49152,null,0,e.l,[o.h,o.k,o.z],{color:[0,"color"],fill:[1,"fill"]},null),o.ob(16,16384,null,0,i.n,[i.m,i.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(17,737280,null,0,e.Mb,[r.g,e.Ib,o.k,i.m,[2,i.n]],null,null),(l()(),o.pb(18,0,null,0,1,"ion-icon",[["class","menuIcon"],["name","md-globe"]],null,null,null,t.cb,t.r)),o.ob(19,49152,null,0,e.D,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.pb(20,0,null,0,5,"ion-button",[["class","foreground"],["fill","clear"],["routerLink","/messages"],["slot","start"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,22).onClick()&&t),"click"===n&&(t=!1!==o.zb(l,23).onClick(u)&&t),t}),t.P,t.e)),o.ob(21,49152,null,0,e.l,[o.h,o.k,o.z],{fill:[0,"fill"]},null),o.ob(22,16384,null,0,i.n,[i.m,i.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(23,737280,null,0,e.Mb,[r.g,e.Ib,o.k,i.m,[2,i.n]],null,null),(l()(),o.pb(24,0,null,0,1,"ion-icon",[["class","menuIcon"],["color","light"],["name","ios-send"]],null,null,null,t.cb,t.r)),o.ob(25,49152,null,0,e.D,[o.h,o.k,o.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,9,0,"clear"),l(n,10,0,"/dashboard"),l(n,11,0),l(n,15,0,"light","clear"),l(n,16,0,"/map"),l(n,17,0),l(n,19,0,"md-globe"),l(n,21,0,"clear"),l(n,22,0,"/messages"),l(n,23,0),l(n,25,0,"light","ios-send")}),null)}}}]);