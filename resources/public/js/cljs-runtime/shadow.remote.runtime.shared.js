goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14335){
var map__14337 = p__14335;
var map__14337__$1 = cljs.core.__destructure_map(map__14337);
var runtime = map__14337__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14524 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14524)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14342 = runtime;
var G__14343 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14524);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14342,G__14343) : shadow.remote.runtime.shared.process.call(null, G__14342,G__14343));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14344,res){
var map__14345 = p__14344;
var map__14345__$1 = cljs.core.__destructure_map(map__14345);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14346 = res;
var G__14346__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14346,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14346);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14346__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14346__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14348 = arguments.length;
switch (G__14348) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14352,msg,handlers,timeout_after_ms){
var map__14353 = p__14352;
var map__14353__$1 = cljs.core.__destructure_map(map__14353);
var runtime = map__14353__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14563 = arguments.length;
var i__5727__auto___14564 = (0);
while(true){
if((i__5727__auto___14564 < len__5726__auto___14563)){
args__5732__auto__.push((arguments[i__5727__auto___14564]));

var G__14565 = (i__5727__auto___14564 + (1));
i__5727__auto___14564 = G__14565;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14363,ev,args){
var map__14364 = p__14363;
var map__14364__$1 = cljs.core.__destructure_map(map__14364);
var runtime = map__14364__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14365 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14368 = null;
var count__14369 = (0);
var i__14370 = (0);
while(true){
if((i__14370 < count__14369)){
var ext = chunk__14368.cljs$core$IIndexed$_nth$arity$2(null, i__14370);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14573 = seq__14365;
var G__14574 = chunk__14368;
var G__14575 = count__14369;
var G__14576 = (i__14370 + (1));
seq__14365 = G__14573;
chunk__14368 = G__14574;
count__14369 = G__14575;
i__14370 = G__14576;
continue;
} else {
var G__14580 = seq__14365;
var G__14581 = chunk__14368;
var G__14582 = count__14369;
var G__14583 = (i__14370 + (1));
seq__14365 = G__14580;
chunk__14368 = G__14581;
count__14369 = G__14582;
i__14370 = G__14583;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14365);
if(temp__5804__auto__){
var seq__14365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14365__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14365__$1);
var G__14587 = cljs.core.chunk_rest(seq__14365__$1);
var G__14588 = c__5525__auto__;
var G__14589 = cljs.core.count(c__5525__auto__);
var G__14590 = (0);
seq__14365 = G__14587;
chunk__14368 = G__14588;
count__14369 = G__14589;
i__14370 = G__14590;
continue;
} else {
var ext = cljs.core.first(seq__14365__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14591 = cljs.core.next(seq__14365__$1);
var G__14592 = null;
var G__14593 = (0);
var G__14594 = (0);
seq__14365 = G__14591;
chunk__14368 = G__14592;
count__14369 = G__14593;
i__14370 = G__14594;
continue;
} else {
var G__14595 = cljs.core.next(seq__14365__$1);
var G__14596 = null;
var G__14597 = (0);
var G__14598 = (0);
seq__14365 = G__14595;
chunk__14368 = G__14596;
count__14369 = G__14597;
i__14370 = G__14598;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14354){
var G__14355 = cljs.core.first(seq14354);
var seq14354__$1 = cljs.core.next(seq14354);
var G__14356 = cljs.core.first(seq14354__$1);
var seq14354__$2 = cljs.core.next(seq14354__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14355,G__14356,seq14354__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14379,p__14380){
var map__14381 = p__14379;
var map__14381__$1 = cljs.core.__destructure_map(map__14381);
var runtime = map__14381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14382 = p__14380;
var map__14382__$1 = cljs.core.__destructure_map(map__14382);
var msg = map__14382__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14382__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14383 = cljs.core.deref(state_ref);
var map__14383__$1 = cljs.core.__destructure_map(map__14383);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14392,msg){
var map__14396 = p__14392;
var map__14396__$1 = cljs.core.__destructure_map(map__14396);
var runtime = map__14396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14399,key,p__14400){
var map__14401 = p__14399;
var map__14401__$1 = cljs.core.__destructure_map(map__14401);
var state = map__14401__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14401__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14402 = p__14400;
var map__14402__$1 = cljs.core.__destructure_map(map__14402);
var spec = map__14402__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14402__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14402__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14414,key,spec){
var map__14418 = p__14414;
var map__14418__$1 = cljs.core.__destructure_map(map__14418);
var runtime = map__14418__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14418__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14631 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14631 == null)){
} else {
var on_welcome_14633 = temp__5808__auto___14631;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14633.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14633.cljs$core$IFn$_invoke$arity$0() : on_welcome_14633.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14434_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14434_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14435_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14435_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14436_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14436_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14437_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14437_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14438_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14438_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14455,key){
var map__14456 = p__14455;
var map__14456__$1 = cljs.core.__destructure_map(map__14456);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14456__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14462,msg){
var map__14463 = p__14462;
var map__14463__$1 = cljs.core.__destructure_map(map__14463);
var runtime = map__14463__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14463__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14471,p__14472){
var map__14475 = p__14471;
var map__14475__$1 = cljs.core.__destructure_map(map__14475);
var runtime = map__14475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14476 = p__14472;
var map__14476__$1 = cljs.core.__destructure_map(map__14476);
var msg = map__14476__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14476__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14476__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14485 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14487 = null;
var count__14488 = (0);
var i__14489 = (0);
while(true){
if((i__14489 < count__14488)){
var map__14505 = chunk__14487.cljs$core$IIndexed$_nth$arity$2(null, i__14489);
var map__14505__$1 = cljs.core.__destructure_map(map__14505);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14505__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14675 = seq__14485;
var G__14676 = chunk__14487;
var G__14677 = count__14488;
var G__14678 = (i__14489 + (1));
seq__14485 = G__14675;
chunk__14487 = G__14676;
count__14488 = G__14677;
i__14489 = G__14678;
continue;
} else {
var G__14679 = seq__14485;
var G__14680 = chunk__14487;
var G__14681 = count__14488;
var G__14682 = (i__14489 + (1));
seq__14485 = G__14679;
chunk__14487 = G__14680;
count__14488 = G__14681;
i__14489 = G__14682;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14485);
if(temp__5804__auto__){
var seq__14485__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14485__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14485__$1);
var G__14683 = cljs.core.chunk_rest(seq__14485__$1);
var G__14684 = c__5525__auto__;
var G__14685 = cljs.core.count(c__5525__auto__);
var G__14686 = (0);
seq__14485 = G__14683;
chunk__14487 = G__14684;
count__14488 = G__14685;
i__14489 = G__14686;
continue;
} else {
var map__14514 = cljs.core.first(seq__14485__$1);
var map__14514__$1 = cljs.core.__destructure_map(map__14514);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14514__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14688 = cljs.core.next(seq__14485__$1);
var G__14689 = null;
var G__14690 = (0);
var G__14691 = (0);
seq__14485 = G__14688;
chunk__14487 = G__14689;
count__14488 = G__14690;
i__14489 = G__14691;
continue;
} else {
var G__14693 = cljs.core.next(seq__14485__$1);
var G__14694 = null;
var G__14695 = (0);
var G__14696 = (0);
seq__14485 = G__14693;
chunk__14487 = G__14694;
count__14488 = G__14695;
i__14489 = G__14696;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
