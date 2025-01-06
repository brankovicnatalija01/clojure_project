goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_13701 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_13701(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_13704 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_13704(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11712 = coll;
var G__11713 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11712,G__11713) : shadow.dom.lazy_native_coll_seq.call(null, G__11712,G__11713));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11747 = arguments.length;
switch (G__11747) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11758 = arguments.length;
switch (G__11758) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11772 = arguments.length;
switch (G__11772) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11783 = arguments.length;
switch (G__11783) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11790 = arguments.length;
switch (G__11790) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11803 = arguments.length;
switch (G__11803) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11814){if((e11814 instanceof Object)){
var e = e11814;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11814;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11824 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11825 = null;
var count__11826 = (0);
var i__11827 = (0);
while(true){
if((i__11827 < count__11826)){
var el = chunk__11825.cljs$core$IIndexed$_nth$arity$2(null, i__11827);
var handler_13768__$1 = ((function (seq__11824,chunk__11825,count__11826,i__11827,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11824,chunk__11825,count__11826,i__11827,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13768__$1);


var G__13769 = seq__11824;
var G__13770 = chunk__11825;
var G__13771 = count__11826;
var G__13772 = (i__11827 + (1));
seq__11824 = G__13769;
chunk__11825 = G__13770;
count__11826 = G__13771;
i__11827 = G__13772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11824);
if(temp__5804__auto__){
var seq__11824__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11824__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11824__$1);
var G__13785 = cljs.core.chunk_rest(seq__11824__$1);
var G__13786 = c__5525__auto__;
var G__13787 = cljs.core.count(c__5525__auto__);
var G__13788 = (0);
seq__11824 = G__13785;
chunk__11825 = G__13786;
count__11826 = G__13787;
i__11827 = G__13788;
continue;
} else {
var el = cljs.core.first(seq__11824__$1);
var handler_13790__$1 = ((function (seq__11824,chunk__11825,count__11826,i__11827,el,seq__11824__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11824,chunk__11825,count__11826,i__11827,el,seq__11824__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13790__$1);


var G__13792 = cljs.core.next(seq__11824__$1);
var G__13793 = null;
var G__13794 = (0);
var G__13795 = (0);
seq__11824 = G__13792;
chunk__11825 = G__13793;
count__11826 = G__13794;
i__11827 = G__13795;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11835 = arguments.length;
switch (G__11835) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11846 = cljs.core.seq(events);
var chunk__11847 = null;
var count__11848 = (0);
var i__11849 = (0);
while(true){
if((i__11849 < count__11848)){
var vec__11872 = chunk__11847.cljs$core$IIndexed$_nth$arity$2(null, i__11849);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13802 = seq__11846;
var G__13803 = chunk__11847;
var G__13804 = count__11848;
var G__13805 = (i__11849 + (1));
seq__11846 = G__13802;
chunk__11847 = G__13803;
count__11848 = G__13804;
i__11849 = G__13805;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11846);
if(temp__5804__auto__){
var seq__11846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11846__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11846__$1);
var G__13808 = cljs.core.chunk_rest(seq__11846__$1);
var G__13809 = c__5525__auto__;
var G__13810 = cljs.core.count(c__5525__auto__);
var G__13811 = (0);
seq__11846 = G__13808;
chunk__11847 = G__13809;
count__11848 = G__13810;
i__11849 = G__13811;
continue;
} else {
var vec__11895 = cljs.core.first(seq__11846__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13813 = cljs.core.next(seq__11846__$1);
var G__13814 = null;
var G__13815 = (0);
var G__13816 = (0);
seq__11846 = G__13813;
chunk__11847 = G__13814;
count__11848 = G__13815;
i__11849 = G__13816;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11927 = cljs.core.seq(styles);
var chunk__11928 = null;
var count__11929 = (0);
var i__11930 = (0);
while(true){
if((i__11930 < count__11929)){
var vec__11968 = chunk__11928.cljs$core$IIndexed$_nth$arity$2(null, i__11930);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13822 = seq__11927;
var G__13823 = chunk__11928;
var G__13824 = count__11929;
var G__13825 = (i__11930 + (1));
seq__11927 = G__13822;
chunk__11928 = G__13823;
count__11929 = G__13824;
i__11930 = G__13825;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11927);
if(temp__5804__auto__){
var seq__11927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11927__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11927__$1);
var G__13828 = cljs.core.chunk_rest(seq__11927__$1);
var G__13829 = c__5525__auto__;
var G__13830 = cljs.core.count(c__5525__auto__);
var G__13831 = (0);
seq__11927 = G__13828;
chunk__11928 = G__13829;
count__11929 = G__13830;
i__11930 = G__13831;
continue;
} else {
var vec__11992 = cljs.core.first(seq__11927__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11992,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11992,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13832 = cljs.core.next(seq__11927__$1);
var G__13833 = null;
var G__13834 = (0);
var G__13835 = (0);
seq__11927 = G__13832;
chunk__11928 = G__13833;
count__11929 = G__13834;
i__11930 = G__13835;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12005_13836 = key;
var G__12005_13837__$1 = (((G__12005_13836 instanceof cljs.core.Keyword))?G__12005_13836.fqn:null);
switch (G__12005_13837__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_13839 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_13839,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_13839,"aria-");
}
})())){
el.setAttribute(ks_13839,value);
} else {
(el[ks_13839] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12125){
var map__12126 = p__12125;
var map__12126__$1 = cljs.core.__destructure_map(map__12126);
var props = map__12126__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12126__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12129 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12139 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12139,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12139;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12148 = arguments.length;
switch (G__12148) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12179){
var vec__12181 = p__12179;
var seq__12182 = cljs.core.seq(vec__12181);
var first__12183 = cljs.core.first(seq__12182);
var seq__12182__$1 = cljs.core.next(seq__12182);
var nn = first__12183;
var first__12183__$1 = cljs.core.first(seq__12182__$1);
var seq__12182__$2 = cljs.core.next(seq__12182__$1);
var np = first__12183__$1;
var nc = seq__12182__$2;
var node = vec__12181;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12192 = nn;
var G__12193 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12192,G__12193) : create_fn.call(null, G__12192,G__12193));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12197 = nn;
var G__12199 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12197,G__12199) : create_fn.call(null, G__12197,G__12199));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12216 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216,(1),null);
var seq__12222_13855 = cljs.core.seq(node_children);
var chunk__12223_13856 = null;
var count__12224_13857 = (0);
var i__12225_13858 = (0);
while(true){
if((i__12225_13858 < count__12224_13857)){
var child_struct_13859 = chunk__12223_13856.cljs$core$IIndexed$_nth$arity$2(null, i__12225_13858);
var children_13860 = shadow.dom.dom_node(child_struct_13859);
if(cljs.core.seq_QMARK_(children_13860)){
var seq__12307_13862 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13860));
var chunk__12309_13863 = null;
var count__12310_13864 = (0);
var i__12311_13865 = (0);
while(true){
if((i__12311_13865 < count__12310_13864)){
var child_13866 = chunk__12309_13863.cljs$core$IIndexed$_nth$arity$2(null, i__12311_13865);
if(cljs.core.truth_(child_13866)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13866);


var G__13867 = seq__12307_13862;
var G__13868 = chunk__12309_13863;
var G__13869 = count__12310_13864;
var G__13870 = (i__12311_13865 + (1));
seq__12307_13862 = G__13867;
chunk__12309_13863 = G__13868;
count__12310_13864 = G__13869;
i__12311_13865 = G__13870;
continue;
} else {
var G__13871 = seq__12307_13862;
var G__13872 = chunk__12309_13863;
var G__13873 = count__12310_13864;
var G__13874 = (i__12311_13865 + (1));
seq__12307_13862 = G__13871;
chunk__12309_13863 = G__13872;
count__12310_13864 = G__13873;
i__12311_13865 = G__13874;
continue;
}
} else {
var temp__5804__auto___13875 = cljs.core.seq(seq__12307_13862);
if(temp__5804__auto___13875){
var seq__12307_13876__$1 = temp__5804__auto___13875;
if(cljs.core.chunked_seq_QMARK_(seq__12307_13876__$1)){
var c__5525__auto___13878 = cljs.core.chunk_first(seq__12307_13876__$1);
var G__13880 = cljs.core.chunk_rest(seq__12307_13876__$1);
var G__13881 = c__5525__auto___13878;
var G__13882 = cljs.core.count(c__5525__auto___13878);
var G__13883 = (0);
seq__12307_13862 = G__13880;
chunk__12309_13863 = G__13881;
count__12310_13864 = G__13882;
i__12311_13865 = G__13883;
continue;
} else {
var child_13886 = cljs.core.first(seq__12307_13876__$1);
if(cljs.core.truth_(child_13886)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13886);


var G__13887 = cljs.core.next(seq__12307_13876__$1);
var G__13888 = null;
var G__13889 = (0);
var G__13890 = (0);
seq__12307_13862 = G__13887;
chunk__12309_13863 = G__13888;
count__12310_13864 = G__13889;
i__12311_13865 = G__13890;
continue;
} else {
var G__13891 = cljs.core.next(seq__12307_13876__$1);
var G__13892 = null;
var G__13893 = (0);
var G__13894 = (0);
seq__12307_13862 = G__13891;
chunk__12309_13863 = G__13892;
count__12310_13864 = G__13893;
i__12311_13865 = G__13894;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13860);
}


var G__13895 = seq__12222_13855;
var G__13896 = chunk__12223_13856;
var G__13897 = count__12224_13857;
var G__13898 = (i__12225_13858 + (1));
seq__12222_13855 = G__13895;
chunk__12223_13856 = G__13896;
count__12224_13857 = G__13897;
i__12225_13858 = G__13898;
continue;
} else {
var temp__5804__auto___13899 = cljs.core.seq(seq__12222_13855);
if(temp__5804__auto___13899){
var seq__12222_13900__$1 = temp__5804__auto___13899;
if(cljs.core.chunked_seq_QMARK_(seq__12222_13900__$1)){
var c__5525__auto___13901 = cljs.core.chunk_first(seq__12222_13900__$1);
var G__13902 = cljs.core.chunk_rest(seq__12222_13900__$1);
var G__13903 = c__5525__auto___13901;
var G__13904 = cljs.core.count(c__5525__auto___13901);
var G__13905 = (0);
seq__12222_13855 = G__13902;
chunk__12223_13856 = G__13903;
count__12224_13857 = G__13904;
i__12225_13858 = G__13905;
continue;
} else {
var child_struct_13907 = cljs.core.first(seq__12222_13900__$1);
var children_13908 = shadow.dom.dom_node(child_struct_13907);
if(cljs.core.seq_QMARK_(children_13908)){
var seq__12346_13911 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13908));
var chunk__12348_13912 = null;
var count__12349_13913 = (0);
var i__12350_13914 = (0);
while(true){
if((i__12350_13914 < count__12349_13913)){
var child_13915 = chunk__12348_13912.cljs$core$IIndexed$_nth$arity$2(null, i__12350_13914);
if(cljs.core.truth_(child_13915)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13915);


var G__13916 = seq__12346_13911;
var G__13917 = chunk__12348_13912;
var G__13918 = count__12349_13913;
var G__13919 = (i__12350_13914 + (1));
seq__12346_13911 = G__13916;
chunk__12348_13912 = G__13917;
count__12349_13913 = G__13918;
i__12350_13914 = G__13919;
continue;
} else {
var G__13921 = seq__12346_13911;
var G__13922 = chunk__12348_13912;
var G__13923 = count__12349_13913;
var G__13924 = (i__12350_13914 + (1));
seq__12346_13911 = G__13921;
chunk__12348_13912 = G__13922;
count__12349_13913 = G__13923;
i__12350_13914 = G__13924;
continue;
}
} else {
var temp__5804__auto___13925__$1 = cljs.core.seq(seq__12346_13911);
if(temp__5804__auto___13925__$1){
var seq__12346_13928__$1 = temp__5804__auto___13925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12346_13928__$1)){
var c__5525__auto___13929 = cljs.core.chunk_first(seq__12346_13928__$1);
var G__13930 = cljs.core.chunk_rest(seq__12346_13928__$1);
var G__13931 = c__5525__auto___13929;
var G__13932 = cljs.core.count(c__5525__auto___13929);
var G__13933 = (0);
seq__12346_13911 = G__13930;
chunk__12348_13912 = G__13931;
count__12349_13913 = G__13932;
i__12350_13914 = G__13933;
continue;
} else {
var child_13935 = cljs.core.first(seq__12346_13928__$1);
if(cljs.core.truth_(child_13935)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13935);


var G__13936 = cljs.core.next(seq__12346_13928__$1);
var G__13937 = null;
var G__13938 = (0);
var G__13939 = (0);
seq__12346_13911 = G__13936;
chunk__12348_13912 = G__13937;
count__12349_13913 = G__13938;
i__12350_13914 = G__13939;
continue;
} else {
var G__13940 = cljs.core.next(seq__12346_13928__$1);
var G__13941 = null;
var G__13942 = (0);
var G__13943 = (0);
seq__12346_13911 = G__13940;
chunk__12348_13912 = G__13941;
count__12349_13913 = G__13942;
i__12350_13914 = G__13943;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13908);
}


var G__13945 = cljs.core.next(seq__12222_13900__$1);
var G__13946 = null;
var G__13947 = (0);
var G__13948 = (0);
seq__12222_13855 = G__13945;
chunk__12223_13856 = G__13946;
count__12224_13857 = G__13947;
i__12225_13858 = G__13948;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12408 = cljs.core.seq(node);
var chunk__12409 = null;
var count__12410 = (0);
var i__12411 = (0);
while(true){
if((i__12411 < count__12410)){
var n = chunk__12409.cljs$core$IIndexed$_nth$arity$2(null, i__12411);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13953 = seq__12408;
var G__13954 = chunk__12409;
var G__13955 = count__12410;
var G__13956 = (i__12411 + (1));
seq__12408 = G__13953;
chunk__12409 = G__13954;
count__12410 = G__13955;
i__12411 = G__13956;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12408);
if(temp__5804__auto__){
var seq__12408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12408__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12408__$1);
var G__13959 = cljs.core.chunk_rest(seq__12408__$1);
var G__13960 = c__5525__auto__;
var G__13961 = cljs.core.count(c__5525__auto__);
var G__13962 = (0);
seq__12408 = G__13959;
chunk__12409 = G__13960;
count__12410 = G__13961;
i__12411 = G__13962;
continue;
} else {
var n = cljs.core.first(seq__12408__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13963 = cljs.core.next(seq__12408__$1);
var G__13964 = null;
var G__13965 = (0);
var G__13966 = (0);
seq__12408 = G__13963;
chunk__12409 = G__13964;
count__12410 = G__13965;
i__12411 = G__13966;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12440 = arguments.length;
switch (G__12440) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12450 = arguments.length;
switch (G__12450) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12479 = arguments.length;
switch (G__12479) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13982 = arguments.length;
var i__5727__auto___13984 = (0);
while(true){
if((i__5727__auto___13984 < len__5726__auto___13982)){
args__5732__auto__.push((arguments[i__5727__auto___13984]));

var G__13985 = (i__5727__auto___13984 + (1));
i__5727__auto___13984 = G__13985;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12517_13986 = cljs.core.seq(nodes);
var chunk__12518_13987 = null;
var count__12519_13988 = (0);
var i__12520_13989 = (0);
while(true){
if((i__12520_13989 < count__12519_13988)){
var node_13991 = chunk__12518_13987.cljs$core$IIndexed$_nth$arity$2(null, i__12520_13989);
fragment.appendChild(shadow.dom._to_dom(node_13991));


var G__13996 = seq__12517_13986;
var G__13997 = chunk__12518_13987;
var G__13998 = count__12519_13988;
var G__13999 = (i__12520_13989 + (1));
seq__12517_13986 = G__13996;
chunk__12518_13987 = G__13997;
count__12519_13988 = G__13998;
i__12520_13989 = G__13999;
continue;
} else {
var temp__5804__auto___14001 = cljs.core.seq(seq__12517_13986);
if(temp__5804__auto___14001){
var seq__12517_14002__$1 = temp__5804__auto___14001;
if(cljs.core.chunked_seq_QMARK_(seq__12517_14002__$1)){
var c__5525__auto___14004 = cljs.core.chunk_first(seq__12517_14002__$1);
var G__14005 = cljs.core.chunk_rest(seq__12517_14002__$1);
var G__14006 = c__5525__auto___14004;
var G__14007 = cljs.core.count(c__5525__auto___14004);
var G__14008 = (0);
seq__12517_13986 = G__14005;
chunk__12518_13987 = G__14006;
count__12519_13988 = G__14007;
i__12520_13989 = G__14008;
continue;
} else {
var node_14012 = cljs.core.first(seq__12517_14002__$1);
fragment.appendChild(shadow.dom._to_dom(node_14012));


var G__14015 = cljs.core.next(seq__12517_14002__$1);
var G__14016 = null;
var G__14017 = (0);
var G__14018 = (0);
seq__12517_13986 = G__14015;
chunk__12518_13987 = G__14016;
count__12519_13988 = G__14017;
i__12520_13989 = G__14018;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12506){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12506));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12547_14024 = cljs.core.seq(scripts);
var chunk__12549_14025 = null;
var count__12550_14026 = (0);
var i__12551_14027 = (0);
while(true){
if((i__12551_14027 < count__12550_14026)){
var vec__12565_14031 = chunk__12549_14025.cljs$core$IIndexed$_nth$arity$2(null, i__12551_14027);
var script_tag_14032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565_14031,(0),null);
var script_body_14033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565_14031,(1),null);
eval(script_body_14033);


var G__14036 = seq__12547_14024;
var G__14037 = chunk__12549_14025;
var G__14038 = count__12550_14026;
var G__14039 = (i__12551_14027 + (1));
seq__12547_14024 = G__14036;
chunk__12549_14025 = G__14037;
count__12550_14026 = G__14038;
i__12551_14027 = G__14039;
continue;
} else {
var temp__5804__auto___14040 = cljs.core.seq(seq__12547_14024);
if(temp__5804__auto___14040){
var seq__12547_14041__$1 = temp__5804__auto___14040;
if(cljs.core.chunked_seq_QMARK_(seq__12547_14041__$1)){
var c__5525__auto___14042 = cljs.core.chunk_first(seq__12547_14041__$1);
var G__14043 = cljs.core.chunk_rest(seq__12547_14041__$1);
var G__14044 = c__5525__auto___14042;
var G__14045 = cljs.core.count(c__5525__auto___14042);
var G__14046 = (0);
seq__12547_14024 = G__14043;
chunk__12549_14025 = G__14044;
count__12550_14026 = G__14045;
i__12551_14027 = G__14046;
continue;
} else {
var vec__12572_14049 = cljs.core.first(seq__12547_14041__$1);
var script_tag_14050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572_14049,(0),null);
var script_body_14051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572_14049,(1),null);
eval(script_body_14051);


var G__14059 = cljs.core.next(seq__12547_14041__$1);
var G__14060 = null;
var G__14061 = (0);
var G__14062 = (0);
seq__12547_14024 = G__14059;
chunk__12549_14025 = G__14060;
count__12550_14026 = G__14061;
i__12551_14027 = G__14062;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12576){
var vec__12578 = p__12576;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12602 = arguments.length;
switch (G__12602) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12631 = cljs.core.seq(style_keys);
var chunk__12632 = null;
var count__12633 = (0);
var i__12634 = (0);
while(true){
if((i__12634 < count__12633)){
var it = chunk__12632.cljs$core$IIndexed$_nth$arity$2(null, i__12634);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__14086 = seq__12631;
var G__14087 = chunk__12632;
var G__14088 = count__12633;
var G__14089 = (i__12634 + (1));
seq__12631 = G__14086;
chunk__12632 = G__14087;
count__12633 = G__14088;
i__12634 = G__14089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12631);
if(temp__5804__auto__){
var seq__12631__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12631__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12631__$1);
var G__14099 = cljs.core.chunk_rest(seq__12631__$1);
var G__14100 = c__5525__auto__;
var G__14101 = cljs.core.count(c__5525__auto__);
var G__14102 = (0);
seq__12631 = G__14099;
chunk__12632 = G__14100;
count__12633 = G__14101;
i__12634 = G__14102;
continue;
} else {
var it = cljs.core.first(seq__12631__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__14106 = cljs.core.next(seq__12631__$1);
var G__14107 = null;
var G__14108 = (0);
var G__14109 = (0);
seq__12631 = G__14106;
chunk__12632 = G__14107;
count__12633 = G__14108;
i__12634 = G__14109;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12651,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12677 = k12651;
var G__12677__$1 = (((G__12677 instanceof cljs.core.Keyword))?G__12677.fqn:null);
switch (G__12677__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12651,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12685){
var vec__12686 = p__12685;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12650){
var self__ = this;
var G__12650__$1 = this;
return (new cljs.core.RecordIter((0),G__12650__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12652,other12653){
var self__ = this;
var this12652__$1 = this;
return (((!((other12653 == null)))) && ((((this12652__$1.constructor === other12653.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12652__$1.x,other12653.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12652__$1.y,other12653.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12652__$1.__extmap,other12653.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12651){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12728 = k12651;
var G__12728__$1 = (((G__12728 instanceof cljs.core.Keyword))?G__12728.fqn:null);
switch (G__12728__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12651);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12650){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12732 = cljs.core.keyword_identical_QMARK_;
var expr__12733 = k__5309__auto__;
if(cljs.core.truth_((pred__12732.cljs$core$IFn$_invoke$arity$2 ? pred__12732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12733) : pred__12732.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12733)))){
return (new shadow.dom.Coordinate(G__12650,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12732.cljs$core$IFn$_invoke$arity$2 ? pred__12732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12733) : pred__12732.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12733)))){
return (new shadow.dom.Coordinate(self__.x,G__12650,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12650),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12650){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12650,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12669){
var extmap__5342__auto__ = (function (){var G__12756 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12669,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12669)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12756);
} else {
return G__12756;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12669),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12669),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12782,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12809 = k12782;
var G__12809__$1 = (((G__12809 instanceof cljs.core.Keyword))?G__12809.fqn:null);
switch (G__12809__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12782,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12812){
var vec__12814 = p__12812;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12814,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12814,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12781){
var self__ = this;
var G__12781__$1 = this;
return (new cljs.core.RecordIter((0),G__12781__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12783,other12784){
var self__ = this;
var this12783__$1 = this;
return (((!((other12784 == null)))) && ((((this12783__$1.constructor === other12784.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12783__$1.w,other12784.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12783__$1.h,other12784.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12783__$1.__extmap,other12784.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12782){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12851 = k12782;
var G__12851__$1 = (((G__12851 instanceof cljs.core.Keyword))?G__12851.fqn:null);
switch (G__12851__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12782);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12781){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12863 = cljs.core.keyword_identical_QMARK_;
var expr__12864 = k__5309__auto__;
if(cljs.core.truth_((pred__12863.cljs$core$IFn$_invoke$arity$2 ? pred__12863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12864) : pred__12863.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12864)))){
return (new shadow.dom.Size(G__12781,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12863.cljs$core$IFn$_invoke$arity$2 ? pred__12863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12864) : pred__12863.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12864)))){
return (new shadow.dom.Size(self__.w,G__12781,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12781),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12781){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12781,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12788){
var extmap__5342__auto__ = (function (){var G__12907 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12788,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12907);
} else {
return G__12907;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12788),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12788),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__14175 = (i + (1));
var G__14176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__14175;
ret = G__14176;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13047){
var vec__13048 = p__13047;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__13069 = arguments.length;
switch (G__13069) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__14188 = ps;
var G__14189 = (i + (1));
el__$1 = G__14188;
i = G__14189;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__13280 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13280,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13280,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13280,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__13287_14196 = cljs.core.seq(props);
var chunk__13288_14197 = null;
var count__13289_14198 = (0);
var i__13290_14199 = (0);
while(true){
if((i__13290_14199 < count__13289_14198)){
var vec__13370_14201 = chunk__13288_14197.cljs$core$IIndexed$_nth$arity$2(null, i__13290_14199);
var k_14202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13370_14201,(0),null);
var v_14203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13370_14201,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_14202);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14202),v_14203);


var G__14207 = seq__13287_14196;
var G__14208 = chunk__13288_14197;
var G__14209 = count__13289_14198;
var G__14210 = (i__13290_14199 + (1));
seq__13287_14196 = G__14207;
chunk__13288_14197 = G__14208;
count__13289_14198 = G__14209;
i__13290_14199 = G__14210;
continue;
} else {
var temp__5804__auto___14211 = cljs.core.seq(seq__13287_14196);
if(temp__5804__auto___14211){
var seq__13287_14212__$1 = temp__5804__auto___14211;
if(cljs.core.chunked_seq_QMARK_(seq__13287_14212__$1)){
var c__5525__auto___14213 = cljs.core.chunk_first(seq__13287_14212__$1);
var G__14214 = cljs.core.chunk_rest(seq__13287_14212__$1);
var G__14215 = c__5525__auto___14213;
var G__14216 = cljs.core.count(c__5525__auto___14213);
var G__14217 = (0);
seq__13287_14196 = G__14214;
chunk__13288_14197 = G__14215;
count__13289_14198 = G__14216;
i__13290_14199 = G__14217;
continue;
} else {
var vec__13380_14218 = cljs.core.first(seq__13287_14212__$1);
var k_14219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380_14218,(0),null);
var v_14220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380_14218,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_14219);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14219),v_14220);


var G__14221 = cljs.core.next(seq__13287_14212__$1);
var G__14222 = null;
var G__14223 = (0);
var G__14224 = (0);
seq__13287_14196 = G__14221;
chunk__13288_14197 = G__14222;
count__13289_14198 = G__14223;
i__13290_14199 = G__14224;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__13419 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(1),null);
var seq__13423_14228 = cljs.core.seq(node_children);
var chunk__13425_14229 = null;
var count__13426_14230 = (0);
var i__13427_14231 = (0);
while(true){
if((i__13427_14231 < count__13426_14230)){
var child_struct_14232 = chunk__13425_14229.cljs$core$IIndexed$_nth$arity$2(null, i__13427_14231);
if((!((child_struct_14232 == null)))){
if(typeof child_struct_14232 === 'string'){
var text_14234 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14234),child_struct_14232].join(''));
} else {
var children_14235 = shadow.dom.svg_node(child_struct_14232);
if(cljs.core.seq_QMARK_(children_14235)){
var seq__13566_14237 = cljs.core.seq(children_14235);
var chunk__13568_14238 = null;
var count__13569_14239 = (0);
var i__13570_14240 = (0);
while(true){
if((i__13570_14240 < count__13569_14239)){
var child_14241 = chunk__13568_14238.cljs$core$IIndexed$_nth$arity$2(null, i__13570_14240);
if(cljs.core.truth_(child_14241)){
node.appendChild(child_14241);


var G__14242 = seq__13566_14237;
var G__14243 = chunk__13568_14238;
var G__14244 = count__13569_14239;
var G__14245 = (i__13570_14240 + (1));
seq__13566_14237 = G__14242;
chunk__13568_14238 = G__14243;
count__13569_14239 = G__14244;
i__13570_14240 = G__14245;
continue;
} else {
var G__14246 = seq__13566_14237;
var G__14247 = chunk__13568_14238;
var G__14248 = count__13569_14239;
var G__14249 = (i__13570_14240 + (1));
seq__13566_14237 = G__14246;
chunk__13568_14238 = G__14247;
count__13569_14239 = G__14248;
i__13570_14240 = G__14249;
continue;
}
} else {
var temp__5804__auto___14250 = cljs.core.seq(seq__13566_14237);
if(temp__5804__auto___14250){
var seq__13566_14251__$1 = temp__5804__auto___14250;
if(cljs.core.chunked_seq_QMARK_(seq__13566_14251__$1)){
var c__5525__auto___14252 = cljs.core.chunk_first(seq__13566_14251__$1);
var G__14253 = cljs.core.chunk_rest(seq__13566_14251__$1);
var G__14254 = c__5525__auto___14252;
var G__14255 = cljs.core.count(c__5525__auto___14252);
var G__14256 = (0);
seq__13566_14237 = G__14253;
chunk__13568_14238 = G__14254;
count__13569_14239 = G__14255;
i__13570_14240 = G__14256;
continue;
} else {
var child_14257 = cljs.core.first(seq__13566_14251__$1);
if(cljs.core.truth_(child_14257)){
node.appendChild(child_14257);


var G__14258 = cljs.core.next(seq__13566_14251__$1);
var G__14259 = null;
var G__14260 = (0);
var G__14261 = (0);
seq__13566_14237 = G__14258;
chunk__13568_14238 = G__14259;
count__13569_14239 = G__14260;
i__13570_14240 = G__14261;
continue;
} else {
var G__14262 = cljs.core.next(seq__13566_14251__$1);
var G__14263 = null;
var G__14264 = (0);
var G__14265 = (0);
seq__13566_14237 = G__14262;
chunk__13568_14238 = G__14263;
count__13569_14239 = G__14264;
i__13570_14240 = G__14265;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14235);
}
}


var G__14267 = seq__13423_14228;
var G__14268 = chunk__13425_14229;
var G__14269 = count__13426_14230;
var G__14270 = (i__13427_14231 + (1));
seq__13423_14228 = G__14267;
chunk__13425_14229 = G__14268;
count__13426_14230 = G__14269;
i__13427_14231 = G__14270;
continue;
} else {
var G__14271 = seq__13423_14228;
var G__14272 = chunk__13425_14229;
var G__14273 = count__13426_14230;
var G__14274 = (i__13427_14231 + (1));
seq__13423_14228 = G__14271;
chunk__13425_14229 = G__14272;
count__13426_14230 = G__14273;
i__13427_14231 = G__14274;
continue;
}
} else {
var temp__5804__auto___14275 = cljs.core.seq(seq__13423_14228);
if(temp__5804__auto___14275){
var seq__13423_14276__$1 = temp__5804__auto___14275;
if(cljs.core.chunked_seq_QMARK_(seq__13423_14276__$1)){
var c__5525__auto___14277 = cljs.core.chunk_first(seq__13423_14276__$1);
var G__14278 = cljs.core.chunk_rest(seq__13423_14276__$1);
var G__14279 = c__5525__auto___14277;
var G__14280 = cljs.core.count(c__5525__auto___14277);
var G__14281 = (0);
seq__13423_14228 = G__14278;
chunk__13425_14229 = G__14279;
count__13426_14230 = G__14280;
i__13427_14231 = G__14281;
continue;
} else {
var child_struct_14282 = cljs.core.first(seq__13423_14276__$1);
if((!((child_struct_14282 == null)))){
if(typeof child_struct_14282 === 'string'){
var text_14283 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14283),child_struct_14282].join(''));
} else {
var children_14284 = shadow.dom.svg_node(child_struct_14282);
if(cljs.core.seq_QMARK_(children_14284)){
var seq__13614_14285 = cljs.core.seq(children_14284);
var chunk__13616_14286 = null;
var count__13617_14287 = (0);
var i__13618_14288 = (0);
while(true){
if((i__13618_14288 < count__13617_14287)){
var child_14289 = chunk__13616_14286.cljs$core$IIndexed$_nth$arity$2(null, i__13618_14288);
if(cljs.core.truth_(child_14289)){
node.appendChild(child_14289);


var G__14290 = seq__13614_14285;
var G__14291 = chunk__13616_14286;
var G__14292 = count__13617_14287;
var G__14293 = (i__13618_14288 + (1));
seq__13614_14285 = G__14290;
chunk__13616_14286 = G__14291;
count__13617_14287 = G__14292;
i__13618_14288 = G__14293;
continue;
} else {
var G__14294 = seq__13614_14285;
var G__14295 = chunk__13616_14286;
var G__14296 = count__13617_14287;
var G__14297 = (i__13618_14288 + (1));
seq__13614_14285 = G__14294;
chunk__13616_14286 = G__14295;
count__13617_14287 = G__14296;
i__13618_14288 = G__14297;
continue;
}
} else {
var temp__5804__auto___14298__$1 = cljs.core.seq(seq__13614_14285);
if(temp__5804__auto___14298__$1){
var seq__13614_14300__$1 = temp__5804__auto___14298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13614_14300__$1)){
var c__5525__auto___14301 = cljs.core.chunk_first(seq__13614_14300__$1);
var G__14303 = cljs.core.chunk_rest(seq__13614_14300__$1);
var G__14304 = c__5525__auto___14301;
var G__14305 = cljs.core.count(c__5525__auto___14301);
var G__14306 = (0);
seq__13614_14285 = G__14303;
chunk__13616_14286 = G__14304;
count__13617_14287 = G__14305;
i__13618_14288 = G__14306;
continue;
} else {
var child_14307 = cljs.core.first(seq__13614_14300__$1);
if(cljs.core.truth_(child_14307)){
node.appendChild(child_14307);


var G__14308 = cljs.core.next(seq__13614_14300__$1);
var G__14309 = null;
var G__14310 = (0);
var G__14311 = (0);
seq__13614_14285 = G__14308;
chunk__13616_14286 = G__14309;
count__13617_14287 = G__14310;
i__13618_14288 = G__14311;
continue;
} else {
var G__14312 = cljs.core.next(seq__13614_14300__$1);
var G__14313 = null;
var G__14314 = (0);
var G__14315 = (0);
seq__13614_14285 = G__14312;
chunk__13616_14286 = G__14313;
count__13617_14287 = G__14314;
i__13618_14288 = G__14315;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14284);
}
}


var G__14316 = cljs.core.next(seq__13423_14276__$1);
var G__14317 = null;
var G__14318 = (0);
var G__14319 = (0);
seq__13423_14228 = G__14316;
chunk__13425_14229 = G__14317;
count__13426_14230 = G__14318;
i__13427_14231 = G__14319;
continue;
} else {
var G__14320 = cljs.core.next(seq__13423_14276__$1);
var G__14321 = null;
var G__14322 = (0);
var G__14323 = (0);
seq__13423_14228 = G__14320;
chunk__13425_14229 = G__14321;
count__13426_14230 = G__14322;
i__13427_14231 = G__14323;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14328 = arguments.length;
var i__5727__auto___14329 = (0);
while(true){
if((i__5727__auto___14329 < len__5726__auto___14328)){
args__5732__auto__.push((arguments[i__5727__auto___14329]));

var G__14331 = (i__5727__auto___14329 + (1));
i__5727__auto___14329 = G__14331;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq13676){
var G__13678 = cljs.core.first(seq13676);
var seq13676__$1 = cljs.core.next(seq13676);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13678,seq13676__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
