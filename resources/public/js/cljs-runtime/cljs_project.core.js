goog.provide('cljs_project.core');
cljs_project.core.app = (function cljs_project$core$app(){
var G__11928 = cljs.core.deref(cljs_project.components.app_state.current_page);
var G__11928__$1 = (((G__11928 instanceof cljs.core.Keyword))?G__11928.fqn:null);
switch (G__11928__$1) {
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_project.components.login_form.login_form], null);

break;
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_project.components.home_page.home_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Page not found"], null);

}
});
if((typeof cljs_project !== 'undefined') && (typeof cljs_project.core !== 'undefined') && (typeof cljs_project.core.root !== 'undefined')){
} else {
cljs_project.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
cljs_project.core.init = (function cljs_project$core$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs_project.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_project.core.app], null));
});

//# sourceMappingURL=cljs_project.core.js.map
