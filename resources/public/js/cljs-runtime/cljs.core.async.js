goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14158 = (function (f,blockable,meta14159){
this.f = f;
this.blockable = blockable;
this.meta14159 = meta14159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14160,meta14159__$1){
var self__ = this;
var _14160__$1 = this;
return (new cljs.core.async.t_cljs$core$async14158(self__.f,self__.blockable,meta14159__$1));
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14160){
var self__ = this;
var _14160__$1 = this;
return self__.meta14159;
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14159","meta14159",-895346321,null)], null);
}));

(cljs.core.async.t_cljs$core$async14158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14158");

(cljs.core.async.t_cljs$core$async14158.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14158.
 */
cljs.core.async.__GT_t_cljs$core$async14158 = (function cljs$core$async$__GT_t_cljs$core$async14158(f,blockable,meta14159){
return (new cljs.core.async.t_cljs$core$async14158(f,blockable,meta14159));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14153 = arguments.length;
switch (G__14153) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14158(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14177 = arguments.length;
switch (G__14177) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14191 = arguments.length;
switch (G__14191) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14236 = arguments.length;
switch (G__14236) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17444 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17444) : fn1.call(null, val_17444));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17444) : fn1.call(null, val_17444));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14327 = arguments.length;
switch (G__14327) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17461 = n;
var x_17462 = (0);
while(true){
if((x_17462 < n__5593__auto___17461)){
(a[x_17462] = x_17462);

var G__17463 = (x_17462 + (1));
x_17462 = G__17463;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14339 = (function (flag,meta14340){
this.flag = flag;
this.meta14340 = meta14340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14341,meta14340__$1){
var self__ = this;
var _14341__$1 = this;
return (new cljs.core.async.t_cljs$core$async14339(self__.flag,meta14340__$1));
}));

(cljs.core.async.t_cljs$core$async14339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14341){
var self__ = this;
var _14341__$1 = this;
return self__.meta14340;
}));

(cljs.core.async.t_cljs$core$async14339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14340","meta14340",-850810787,null)], null);
}));

(cljs.core.async.t_cljs$core$async14339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14339");

(cljs.core.async.t_cljs$core$async14339.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14339.
 */
cljs.core.async.__GT_t_cljs$core$async14339 = (function cljs$core$async$__GT_t_cljs$core$async14339(flag,meta14340){
return (new cljs.core.async.t_cljs$core$async14339(flag,meta14340));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14339(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14349 = (function (flag,cb,meta14350){
this.flag = flag;
this.cb = cb;
this.meta14350 = meta14350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14351,meta14350__$1){
var self__ = this;
var _14351__$1 = this;
return (new cljs.core.async.t_cljs$core$async14349(self__.flag,self__.cb,meta14350__$1));
}));

(cljs.core.async.t_cljs$core$async14349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14351){
var self__ = this;
var _14351__$1 = this;
return self__.meta14350;
}));

(cljs.core.async.t_cljs$core$async14349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14350","meta14350",-28848466,null)], null);
}));

(cljs.core.async.t_cljs$core$async14349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14349");

(cljs.core.async.t_cljs$core$async14349.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14349.
 */
cljs.core.async.__GT_t_cljs$core$async14349 = (function cljs$core$async$__GT_t_cljs$core$async14349(flag,cb,meta14350){
return (new cljs.core.async.t_cljs$core$async14349(flag,cb,meta14350));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14349(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14361_SHARP_){
var G__14373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14361_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14373) : fret.call(null, G__14373));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14362_SHARP_){
var G__14374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14362_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14374) : fret.call(null, G__14374));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17470 = (i + (1));
i = G__17470;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17471 = arguments.length;
var i__5727__auto___17472 = (0);
while(true){
if((i__5727__auto___17472 < len__5726__auto___17471)){
args__5732__auto__.push((arguments[i__5727__auto___17472]));

var G__17473 = (i__5727__auto___17472 + (1));
i__5727__auto___17472 = G__17473;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14377){
var map__14378 = p__14377;
var map__14378__$1 = cljs.core.__destructure_map(map__14378);
var opts = map__14378__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14375){
var G__14376 = cljs.core.first(seq14375);
var seq14375__$1 = cljs.core.next(seq14375);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14376,seq14375__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14398 = arguments.length;
switch (G__14398) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14064__auto___17480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_14432){
var state_val_14433 = (state_14432[(1)]);
if((state_val_14433 === (7))){
var inst_14424 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
var statearr_14446_17481 = state_14432__$1;
(statearr_14446_17481[(2)] = inst_14424);

(statearr_14446_17481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (1))){
var state_14432__$1 = state_14432;
var statearr_14450_17482 = state_14432__$1;
(statearr_14450_17482[(2)] = null);

(statearr_14450_17482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (4))){
var inst_14405 = (state_14432[(7)]);
var inst_14405__$1 = (state_14432[(2)]);
var inst_14406 = (inst_14405__$1 == null);
var state_14432__$1 = (function (){var statearr_14451 = state_14432;
(statearr_14451[(7)] = inst_14405__$1);

return statearr_14451;
})();
if(cljs.core.truth_(inst_14406)){
var statearr_14452_17488 = state_14432__$1;
(statearr_14452_17488[(1)] = (5));

} else {
var statearr_14453_17489 = state_14432__$1;
(statearr_14453_17489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (13))){
var state_14432__$1 = state_14432;
var statearr_14454_17492 = state_14432__$1;
(statearr_14454_17492[(2)] = null);

(statearr_14454_17492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (6))){
var inst_14405 = (state_14432[(7)]);
var state_14432__$1 = state_14432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14432__$1,(11),to,inst_14405);
} else {
if((state_val_14433 === (3))){
var inst_14427 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14432__$1,inst_14427);
} else {
if((state_val_14433 === (12))){
var state_14432__$1 = state_14432;
var statearr_14457_17493 = state_14432__$1;
(statearr_14457_17493[(2)] = null);

(statearr_14457_17493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (2))){
var state_14432__$1 = state_14432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14432__$1,(4),from);
} else {
if((state_val_14433 === (11))){
var inst_14416 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
if(cljs.core.truth_(inst_14416)){
var statearr_14459_17494 = state_14432__$1;
(statearr_14459_17494[(1)] = (12));

} else {
var statearr_14460_17495 = state_14432__$1;
(statearr_14460_17495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (9))){
var state_14432__$1 = state_14432;
var statearr_14461_17496 = state_14432__$1;
(statearr_14461_17496[(2)] = null);

(statearr_14461_17496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (5))){
var state_14432__$1 = state_14432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14464_17497 = state_14432__$1;
(statearr_14464_17497[(1)] = (8));

} else {
var statearr_14465_17498 = state_14432__$1;
(statearr_14465_17498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (14))){
var inst_14422 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
var statearr_14466_17499 = state_14432__$1;
(statearr_14466_17499[(2)] = inst_14422);

(statearr_14466_17499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (10))){
var inst_14412 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
var statearr_14468_17500 = state_14432__$1;
(statearr_14468_17500[(2)] = inst_14412);

(statearr_14468_17500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14433 === (8))){
var inst_14409 = cljs.core.async.close_BANG_(to);
var state_14432__$1 = state_14432;
var statearr_14469_17501 = state_14432__$1;
(statearr_14469_17501[(2)] = inst_14409);

(statearr_14469_17501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_14470 = [null,null,null,null,null,null,null,null];
(statearr_14470[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_14470[(1)] = (1));

return statearr_14470;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_14432){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14432);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e14473){var ex__13688__auto__ = e14473;
var statearr_14474_17502 = state_14432;
(statearr_14474_17502[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14432[(4)]))){
var statearr_14478_17503 = state_14432;
(statearr_14478_17503[(1)] = cljs.core.first((state_14432[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17505 = state_14432;
state_14432 = G__17505;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_14432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_14432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_14482 = f__14066__auto__();
(statearr_14482[(6)] = c__14064__auto___17480);

return statearr_14482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14491){
var vec__14493 = p__14491;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14493,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14493,(1),null);
var job = vec__14493;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14064__auto___17506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_14500){
var state_val_14501 = (state_14500[(1)]);
if((state_val_14501 === (1))){
var state_14500__$1 = state_14500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14500__$1,(2),res,v);
} else {
if((state_val_14501 === (2))){
var inst_14497 = (state_14500[(2)]);
var inst_14498 = cljs.core.async.close_BANG_(res);
var state_14500__$1 = (function (){var statearr_14504 = state_14500;
(statearr_14504[(7)] = inst_14497);

return statearr_14504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14500__$1,inst_14498);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0 = (function (){
var statearr_14506 = [null,null,null,null,null,null,null,null];
(statearr_14506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__);

(statearr_14506[(1)] = (1));

return statearr_14506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1 = (function (state_14500){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14500);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e14511){var ex__13688__auto__ = e14511;
var statearr_14513_17510 = state_14500;
(statearr_14513_17510[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14500[(4)]))){
var statearr_14516_17511 = state_14500;
(statearr_14516_17511[(1)] = cljs.core.first((state_14500[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17512 = state_14500;
state_14500 = G__17512;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = function(state_14500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1.call(this,state_14500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_14518 = f__14066__auto__();
(statearr_14518[(6)] = c__14064__auto___17506);

return statearr_14518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14520){
var vec__14521 = p__14520;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(1),null);
var job = vec__14521;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17513 = n;
var __17514 = (0);
while(true){
if((__17514 < n__5593__auto___17513)){
var G__14526_17515 = type;
var G__14526_17516__$1 = (((G__14526_17515 instanceof cljs.core.Keyword))?G__14526_17515.fqn:null);
switch (G__14526_17516__$1) {
case "compute":
var c__14064__auto___17518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17514,c__14064__auto___17518,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async){
return (function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = ((function (__17514,c__14064__auto___17518,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async){
return (function (state_14540){
var state_val_14541 = (state_14540[(1)]);
if((state_val_14541 === (1))){
var state_14540__$1 = state_14540;
var statearr_14550_17522 = state_14540__$1;
(statearr_14550_17522[(2)] = null);

(statearr_14550_17522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (2))){
var state_14540__$1 = state_14540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14540__$1,(4),jobs);
} else {
if((state_val_14541 === (3))){
var inst_14538 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14540__$1,inst_14538);
} else {
if((state_val_14541 === (4))){
var inst_14529 = (state_14540[(2)]);
var inst_14530 = process__$1(inst_14529);
var state_14540__$1 = state_14540;
if(cljs.core.truth_(inst_14530)){
var statearr_14556_17523 = state_14540__$1;
(statearr_14556_17523[(1)] = (5));

} else {
var statearr_14560_17524 = state_14540__$1;
(statearr_14560_17524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (5))){
var state_14540__$1 = state_14540;
var statearr_14561_17525 = state_14540__$1;
(statearr_14561_17525[(2)] = null);

(statearr_14561_17525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (6))){
var state_14540__$1 = state_14540;
var statearr_14570_17526 = state_14540__$1;
(statearr_14570_17526[(2)] = null);

(statearr_14570_17526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (7))){
var inst_14536 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
var statearr_14571_17528 = state_14540__$1;
(statearr_14571_17528[(2)] = inst_14536);

(statearr_14571_17528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17514,c__14064__auto___17518,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async))
;
return ((function (__17514,switch__13684__auto__,c__14064__auto___17518,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0 = (function (){
var statearr_14572 = [null,null,null,null,null,null,null];
(statearr_14572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__);

(statearr_14572[(1)] = (1));

return statearr_14572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1 = (function (state_14540){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14540);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e14584){var ex__13688__auto__ = e14584;
var statearr_14585_17539 = state_14540;
(statearr_14585_17539[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14540[(4)]))){
var statearr_14586_17540 = state_14540;
(statearr_14586_17540[(1)] = cljs.core.first((state_14540[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17544 = state_14540;
state_14540 = G__17544;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = function(state_14540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1.call(this,state_14540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__;
})()
;})(__17514,switch__13684__auto__,c__14064__auto___17518,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async))
})();
var state__14068__auto__ = (function (){var statearr_14599 = f__14066__auto__();
(statearr_14599[(6)] = c__14064__auto___17518);

return statearr_14599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
});})(__17514,c__14064__auto___17518,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async))
);


break;
case "async":
var c__14064__auto___17545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17514,c__14064__auto___17545,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async){
return (function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = ((function (__17514,c__14064__auto___17545,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async){
return (function (state_14613){
var state_val_14614 = (state_14613[(1)]);
if((state_val_14614 === (1))){
var state_14613__$1 = state_14613;
var statearr_14617_17548 = state_14613__$1;
(statearr_14617_17548[(2)] = null);

(statearr_14617_17548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (2))){
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14613__$1,(4),jobs);
} else {
if((state_val_14614 === (3))){
var inst_14611 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14613__$1,inst_14611);
} else {
if((state_val_14614 === (4))){
var inst_14603 = (state_14613[(2)]);
var inst_14604 = async(inst_14603);
var state_14613__$1 = state_14613;
if(cljs.core.truth_(inst_14604)){
var statearr_14621_17549 = state_14613__$1;
(statearr_14621_17549[(1)] = (5));

} else {
var statearr_14622_17552 = state_14613__$1;
(statearr_14622_17552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (5))){
var state_14613__$1 = state_14613;
var statearr_14623_17553 = state_14613__$1;
(statearr_14623_17553[(2)] = null);

(statearr_14623_17553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (6))){
var state_14613__$1 = state_14613;
var statearr_14632_17556 = state_14613__$1;
(statearr_14632_17556[(2)] = null);

(statearr_14632_17556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (7))){
var inst_14609 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
var statearr_14634_17557 = state_14613__$1;
(statearr_14634_17557[(2)] = inst_14609);

(statearr_14634_17557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17514,c__14064__auto___17545,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async))
;
return ((function (__17514,switch__13684__auto__,c__14064__auto___17545,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0 = (function (){
var statearr_14636 = [null,null,null,null,null,null,null];
(statearr_14636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__);

(statearr_14636[(1)] = (1));

return statearr_14636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1 = (function (state_14613){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14613);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e14639){var ex__13688__auto__ = e14639;
var statearr_14640_17559 = state_14613;
(statearr_14640_17559[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14613[(4)]))){
var statearr_14642_17560 = state_14613;
(statearr_14642_17560[(1)] = cljs.core.first((state_14613[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17561 = state_14613;
state_14613 = G__17561;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = function(state_14613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1.call(this,state_14613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__;
})()
;})(__17514,switch__13684__auto__,c__14064__auto___17545,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async))
})();
var state__14068__auto__ = (function (){var statearr_14643 = f__14066__auto__();
(statearr_14643[(6)] = c__14064__auto___17545);

return statearr_14643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
});})(__17514,c__14064__auto___17545,G__14526_17515,G__14526_17516__$1,n__5593__auto___17513,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14526_17516__$1)].join('')));

}

var G__17565 = (__17514 + (1));
__17514 = G__17565;
continue;
} else {
}
break;
}

var c__14064__auto___17566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_14669){
var state_val_14670 = (state_14669[(1)]);
if((state_val_14670 === (7))){
var inst_14665 = (state_14669[(2)]);
var state_14669__$1 = state_14669;
var statearr_14687_17569 = state_14669__$1;
(statearr_14687_17569[(2)] = inst_14665);

(statearr_14687_17569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (1))){
var state_14669__$1 = state_14669;
var statearr_14692_17570 = state_14669__$1;
(statearr_14692_17570[(2)] = null);

(statearr_14692_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (4))){
var inst_14650 = (state_14669[(7)]);
var inst_14650__$1 = (state_14669[(2)]);
var inst_14651 = (inst_14650__$1 == null);
var state_14669__$1 = (function (){var statearr_14700 = state_14669;
(statearr_14700[(7)] = inst_14650__$1);

return statearr_14700;
})();
if(cljs.core.truth_(inst_14651)){
var statearr_14702_17572 = state_14669__$1;
(statearr_14702_17572[(1)] = (5));

} else {
var statearr_14703_17573 = state_14669__$1;
(statearr_14703_17573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (6))){
var inst_14650 = (state_14669[(7)]);
var inst_14655 = (state_14669[(8)]);
var inst_14655__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14657 = [inst_14650,inst_14655__$1];
var inst_14658 = (new cljs.core.PersistentVector(null,2,(5),inst_14656,inst_14657,null));
var state_14669__$1 = (function (){var statearr_14707 = state_14669;
(statearr_14707[(8)] = inst_14655__$1);

return statearr_14707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14669__$1,(8),jobs,inst_14658);
} else {
if((state_val_14670 === (3))){
var inst_14667 = (state_14669[(2)]);
var state_14669__$1 = state_14669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14669__$1,inst_14667);
} else {
if((state_val_14670 === (2))){
var state_14669__$1 = state_14669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14669__$1,(4),from);
} else {
if((state_val_14670 === (9))){
var inst_14662 = (state_14669[(2)]);
var state_14669__$1 = (function (){var statearr_14711 = state_14669;
(statearr_14711[(9)] = inst_14662);

return statearr_14711;
})();
var statearr_14713_17576 = state_14669__$1;
(statearr_14713_17576[(2)] = null);

(statearr_14713_17576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (5))){
var inst_14653 = cljs.core.async.close_BANG_(jobs);
var state_14669__$1 = state_14669;
var statearr_14714_17577 = state_14669__$1;
(statearr_14714_17577[(2)] = inst_14653);

(statearr_14714_17577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (8))){
var inst_14655 = (state_14669[(8)]);
var inst_14660 = (state_14669[(2)]);
var state_14669__$1 = (function (){var statearr_14719 = state_14669;
(statearr_14719[(10)] = inst_14660);

return statearr_14719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14669__$1,(9),results,inst_14655);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0 = (function (){
var statearr_14720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__);

(statearr_14720[(1)] = (1));

return statearr_14720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1 = (function (state_14669){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14669);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e14723){var ex__13688__auto__ = e14723;
var statearr_14725_17578 = state_14669;
(statearr_14725_17578[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14669[(4)]))){
var statearr_14727_17579 = state_14669;
(statearr_14727_17579[(1)] = cljs.core.first((state_14669[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17580 = state_14669;
state_14669 = G__17580;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = function(state_14669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1.call(this,state_14669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_14731 = f__14066__auto__();
(statearr_14731[(6)] = c__14064__auto___17566);

return statearr_14731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


var c__14064__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_14777){
var state_val_14778 = (state_14777[(1)]);
if((state_val_14778 === (7))){
var inst_14773 = (state_14777[(2)]);
var state_14777__$1 = state_14777;
var statearr_14783_17581 = state_14777__$1;
(statearr_14783_17581[(2)] = inst_14773);

(statearr_14783_17581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (20))){
var state_14777__$1 = state_14777;
var statearr_14784_17582 = state_14777__$1;
(statearr_14784_17582[(2)] = null);

(statearr_14784_17582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (1))){
var state_14777__$1 = state_14777;
var statearr_14789_17584 = state_14777__$1;
(statearr_14789_17584[(2)] = null);

(statearr_14789_17584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (4))){
var inst_14734 = (state_14777[(7)]);
var inst_14734__$1 = (state_14777[(2)]);
var inst_14736 = (inst_14734__$1 == null);
var state_14777__$1 = (function (){var statearr_14790 = state_14777;
(statearr_14790[(7)] = inst_14734__$1);

return statearr_14790;
})();
if(cljs.core.truth_(inst_14736)){
var statearr_14791_17585 = state_14777__$1;
(statearr_14791_17585[(1)] = (5));

} else {
var statearr_14792_17587 = state_14777__$1;
(statearr_14792_17587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (15))){
var inst_14751 = (state_14777[(8)]);
var state_14777__$1 = state_14777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14777__$1,(18),to,inst_14751);
} else {
if((state_val_14778 === (21))){
var inst_14768 = (state_14777[(2)]);
var state_14777__$1 = state_14777;
var statearr_14817_17591 = state_14777__$1;
(statearr_14817_17591[(2)] = inst_14768);

(statearr_14817_17591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (13))){
var inst_14770 = (state_14777[(2)]);
var state_14777__$1 = (function (){var statearr_14821 = state_14777;
(statearr_14821[(9)] = inst_14770);

return statearr_14821;
})();
var statearr_14822_17592 = state_14777__$1;
(statearr_14822_17592[(2)] = null);

(statearr_14822_17592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (6))){
var inst_14734 = (state_14777[(7)]);
var state_14777__$1 = state_14777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14777__$1,(11),inst_14734);
} else {
if((state_val_14778 === (17))){
var inst_14760 = (state_14777[(2)]);
var state_14777__$1 = state_14777;
if(cljs.core.truth_(inst_14760)){
var statearr_14823_17599 = state_14777__$1;
(statearr_14823_17599[(1)] = (19));

} else {
var statearr_14824_17603 = state_14777__$1;
(statearr_14824_17603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (3))){
var inst_14775 = (state_14777[(2)]);
var state_14777__$1 = state_14777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14777__$1,inst_14775);
} else {
if((state_val_14778 === (12))){
var inst_14747 = (state_14777[(10)]);
var state_14777__$1 = state_14777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14777__$1,(14),inst_14747);
} else {
if((state_val_14778 === (2))){
var state_14777__$1 = state_14777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14777__$1,(4),results);
} else {
if((state_val_14778 === (19))){
var state_14777__$1 = state_14777;
var statearr_14830_17605 = state_14777__$1;
(statearr_14830_17605[(2)] = null);

(statearr_14830_17605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (11))){
var inst_14747 = (state_14777[(2)]);
var state_14777__$1 = (function (){var statearr_14831 = state_14777;
(statearr_14831[(10)] = inst_14747);

return statearr_14831;
})();
var statearr_14832_17611 = state_14777__$1;
(statearr_14832_17611[(2)] = null);

(statearr_14832_17611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (9))){
var state_14777__$1 = state_14777;
var statearr_14833_17612 = state_14777__$1;
(statearr_14833_17612[(2)] = null);

(statearr_14833_17612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (5))){
var state_14777__$1 = state_14777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14836_17613 = state_14777__$1;
(statearr_14836_17613[(1)] = (8));

} else {
var statearr_14837_17614 = state_14777__$1;
(statearr_14837_17614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (14))){
var inst_14751 = (state_14777[(8)]);
var inst_14754 = (state_14777[(11)]);
var inst_14751__$1 = (state_14777[(2)]);
var inst_14753 = (inst_14751__$1 == null);
var inst_14754__$1 = cljs.core.not(inst_14753);
var state_14777__$1 = (function (){var statearr_14843 = state_14777;
(statearr_14843[(8)] = inst_14751__$1);

(statearr_14843[(11)] = inst_14754__$1);

return statearr_14843;
})();
if(inst_14754__$1){
var statearr_14847_17615 = state_14777__$1;
(statearr_14847_17615[(1)] = (15));

} else {
var statearr_14849_17617 = state_14777__$1;
(statearr_14849_17617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (16))){
var inst_14754 = (state_14777[(11)]);
var state_14777__$1 = state_14777;
var statearr_14851_17619 = state_14777__$1;
(statearr_14851_17619[(2)] = inst_14754);

(statearr_14851_17619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (10))){
var inst_14744 = (state_14777[(2)]);
var state_14777__$1 = state_14777;
var statearr_14852_17623 = state_14777__$1;
(statearr_14852_17623[(2)] = inst_14744);

(statearr_14852_17623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (18))){
var inst_14757 = (state_14777[(2)]);
var state_14777__$1 = state_14777;
var statearr_14853_17624 = state_14777__$1;
(statearr_14853_17624[(2)] = inst_14757);

(statearr_14853_17624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14778 === (8))){
var inst_14739 = cljs.core.async.close_BANG_(to);
var state_14777__$1 = state_14777;
var statearr_14859_17625 = state_14777__$1;
(statearr_14859_17625[(2)] = inst_14739);

(statearr_14859_17625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0 = (function (){
var statearr_14873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__);

(statearr_14873[(1)] = (1));

return statearr_14873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1 = (function (state_14777){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14777);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e14882){var ex__13688__auto__ = e14882;
var statearr_14884_17630 = state_14777;
(statearr_14884_17630[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14777[(4)]))){
var statearr_14889_17631 = state_14777;
(statearr_14889_17631[(1)] = cljs.core.first((state_14777[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17632 = state_14777;
state_14777 = G__17632;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__ = function(state_14777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1.call(this,state_14777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_14891 = f__14066__auto__();
(statearr_14891[(6)] = c__14064__auto__);

return statearr_14891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));

return c__14064__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14899 = arguments.length;
switch (G__14899) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14949 = arguments.length;
switch (G__14949) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14967 = arguments.length;
switch (G__14967) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14064__auto___17645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_14999){
var state_val_15000 = (state_14999[(1)]);
if((state_val_15000 === (7))){
var inst_14995 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15005_17646 = state_14999__$1;
(statearr_15005_17646[(2)] = inst_14995);

(statearr_15005_17646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (1))){
var state_14999__$1 = state_14999;
var statearr_15006_17647 = state_14999__$1;
(statearr_15006_17647[(2)] = null);

(statearr_15006_17647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (4))){
var inst_14976 = (state_14999[(7)]);
var inst_14976__$1 = (state_14999[(2)]);
var inst_14977 = (inst_14976__$1 == null);
var state_14999__$1 = (function (){var statearr_15009 = state_14999;
(statearr_15009[(7)] = inst_14976__$1);

return statearr_15009;
})();
if(cljs.core.truth_(inst_14977)){
var statearr_15011_17648 = state_14999__$1;
(statearr_15011_17648[(1)] = (5));

} else {
var statearr_15013_17649 = state_14999__$1;
(statearr_15013_17649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (13))){
var state_14999__$1 = state_14999;
var statearr_15014_17658 = state_14999__$1;
(statearr_15014_17658[(2)] = null);

(statearr_15014_17658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (6))){
var inst_14976 = (state_14999[(7)]);
var inst_14982 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14976) : p.call(null, inst_14976));
var state_14999__$1 = state_14999;
if(cljs.core.truth_(inst_14982)){
var statearr_15021_17668 = state_14999__$1;
(statearr_15021_17668[(1)] = (9));

} else {
var statearr_15024_17671 = state_14999__$1;
(statearr_15024_17671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (3))){
var inst_14997 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14999__$1,inst_14997);
} else {
if((state_val_15000 === (12))){
var state_14999__$1 = state_14999;
var statearr_15030_17672 = state_14999__$1;
(statearr_15030_17672[(2)] = null);

(statearr_15030_17672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (2))){
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14999__$1,(4),ch);
} else {
if((state_val_15000 === (11))){
var inst_14976 = (state_14999[(7)]);
var inst_14986 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14999__$1,(8),inst_14986,inst_14976);
} else {
if((state_val_15000 === (9))){
var state_14999__$1 = state_14999;
var statearr_15043_17676 = state_14999__$1;
(statearr_15043_17676[(2)] = tc);

(statearr_15043_17676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (5))){
var inst_14979 = cljs.core.async.close_BANG_(tc);
var inst_14980 = cljs.core.async.close_BANG_(fc);
var state_14999__$1 = (function (){var statearr_15044 = state_14999;
(statearr_15044[(8)] = inst_14979);

return statearr_15044;
})();
var statearr_15045_17678 = state_14999__$1;
(statearr_15045_17678[(2)] = inst_14980);

(statearr_15045_17678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (14))){
var inst_14993 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15050_17680 = state_14999__$1;
(statearr_15050_17680[(2)] = inst_14993);

(statearr_15050_17680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (10))){
var state_14999__$1 = state_14999;
var statearr_15052_17681 = state_14999__$1;
(statearr_15052_17681[(2)] = fc);

(statearr_15052_17681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15000 === (8))){
var inst_14988 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
if(cljs.core.truth_(inst_14988)){
var statearr_15058_17682 = state_14999__$1;
(statearr_15058_17682[(1)] = (12));

} else {
var statearr_15059_17692 = state_14999__$1;
(statearr_15059_17692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_15062 = [null,null,null,null,null,null,null,null,null];
(statearr_15062[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_15062[(1)] = (1));

return statearr_15062;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_14999){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_14999);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e15065){var ex__13688__auto__ = e15065;
var statearr_15066_17703 = state_14999;
(statearr_15066_17703[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_14999[(4)]))){
var statearr_15068_17704 = state_14999;
(statearr_15068_17704[(1)] = cljs.core.first((state_14999[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17708 = state_14999;
state_14999 = G__17708;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_14999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_14999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_15073 = f__14066__auto__();
(statearr_15073[(6)] = c__14064__auto___17645);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14064__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_15108){
var state_val_15109 = (state_15108[(1)]);
if((state_val_15109 === (7))){
var inst_15104 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15115_17709 = state_15108__$1;
(statearr_15115_17709[(2)] = inst_15104);

(statearr_15115_17709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (1))){
var inst_15077 = init;
var inst_15079 = inst_15077;
var state_15108__$1 = (function (){var statearr_15118 = state_15108;
(statearr_15118[(7)] = inst_15079);

return statearr_15118;
})();
var statearr_15119_17713 = state_15108__$1;
(statearr_15119_17713[(2)] = null);

(statearr_15119_17713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (4))){
var inst_15083 = (state_15108[(8)]);
var inst_15083__$1 = (state_15108[(2)]);
var inst_15084 = (inst_15083__$1 == null);
var state_15108__$1 = (function (){var statearr_15122 = state_15108;
(statearr_15122[(8)] = inst_15083__$1);

return statearr_15122;
})();
if(cljs.core.truth_(inst_15084)){
var statearr_15130_17721 = state_15108__$1;
(statearr_15130_17721[(1)] = (5));

} else {
var statearr_15131_17722 = state_15108__$1;
(statearr_15131_17722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (6))){
var inst_15095 = (state_15108[(9)]);
var inst_15079 = (state_15108[(7)]);
var inst_15083 = (state_15108[(8)]);
var inst_15095__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15079,inst_15083) : f.call(null, inst_15079,inst_15083));
var inst_15096 = cljs.core.reduced_QMARK_(inst_15095__$1);
var state_15108__$1 = (function (){var statearr_15133 = state_15108;
(statearr_15133[(9)] = inst_15095__$1);

return statearr_15133;
})();
if(inst_15096){
var statearr_15134_17729 = state_15108__$1;
(statearr_15134_17729[(1)] = (8));

} else {
var statearr_15135_17730 = state_15108__$1;
(statearr_15135_17730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (3))){
var inst_15106 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15108__$1,inst_15106);
} else {
if((state_val_15109 === (2))){
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15108__$1,(4),ch);
} else {
if((state_val_15109 === (9))){
var inst_15095 = (state_15108[(9)]);
var inst_15079 = inst_15095;
var state_15108__$1 = (function (){var statearr_15140 = state_15108;
(statearr_15140[(7)] = inst_15079);

return statearr_15140;
})();
var statearr_15143_17731 = state_15108__$1;
(statearr_15143_17731[(2)] = null);

(statearr_15143_17731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (5))){
var inst_15079 = (state_15108[(7)]);
var state_15108__$1 = state_15108;
var statearr_15146_17732 = state_15108__$1;
(statearr_15146_17732[(2)] = inst_15079);

(statearr_15146_17732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (10))){
var inst_15102 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15149_17733 = state_15108__$1;
(statearr_15149_17733[(2)] = inst_15102);

(statearr_15149_17733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (8))){
var inst_15095 = (state_15108[(9)]);
var inst_15098 = cljs.core.deref(inst_15095);
var state_15108__$1 = state_15108;
var statearr_15153_17737 = state_15108__$1;
(statearr_15153_17737[(2)] = inst_15098);

(statearr_15153_17737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13685__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13685__auto____0 = (function (){
var statearr_15156 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15156[(0)] = cljs$core$async$reduce_$_state_machine__13685__auto__);

(statearr_15156[(1)] = (1));

return statearr_15156;
});
var cljs$core$async$reduce_$_state_machine__13685__auto____1 = (function (state_15108){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_15108);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e15160){var ex__13688__auto__ = e15160;
var statearr_15161_17745 = state_15108;
(statearr_15161_17745[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_15108[(4)]))){
var statearr_15162_17749 = state_15108;
(statearr_15162_17749[(1)] = cljs.core.first((state_15108[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17750 = state_15108;
state_15108 = G__17750;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13685__auto__ = function(state_15108){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13685__auto____1.call(this,state_15108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13685__auto____0;
cljs$core$async$reduce_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13685__auto____1;
return cljs$core$async$reduce_$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_15168 = f__14066__auto__();
(statearr_15168[(6)] = c__14064__auto__);

return statearr_15168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));

return c__14064__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14064__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_15175){
var state_val_15176 = (state_15175[(1)]);
if((state_val_15176 === (1))){
var inst_15170 = cljs.core.async.reduce(f__$1,init,ch);
var state_15175__$1 = state_15175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15175__$1,(2),inst_15170);
} else {
if((state_val_15176 === (2))){
var inst_15172 = (state_15175[(2)]);
var inst_15173 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15172) : f__$1.call(null, inst_15172));
var state_15175__$1 = state_15175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15175__$1,inst_15173);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13685__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13685__auto____0 = (function (){
var statearr_15188 = [null,null,null,null,null,null,null];
(statearr_15188[(0)] = cljs$core$async$transduce_$_state_machine__13685__auto__);

(statearr_15188[(1)] = (1));

return statearr_15188;
});
var cljs$core$async$transduce_$_state_machine__13685__auto____1 = (function (state_15175){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_15175);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e15190){var ex__13688__auto__ = e15190;
var statearr_15191_17761 = state_15175;
(statearr_15191_17761[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_15175[(4)]))){
var statearr_15195_17762 = state_15175;
(statearr_15195_17762[(1)] = cljs.core.first((state_15175[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17766 = state_15175;
state_15175 = G__17766;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13685__auto__ = function(state_15175){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13685__auto____1.call(this,state_15175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13685__auto____0;
cljs$core$async$transduce_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13685__auto____1;
return cljs$core$async$transduce_$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_15204 = f__14066__auto__();
(statearr_15204[(6)] = c__14064__auto__);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));

return c__14064__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15219 = arguments.length;
switch (G__15219) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14064__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_15275){
var state_val_15276 = (state_15275[(1)]);
if((state_val_15276 === (7))){
var inst_15250 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
var statearr_15280_17768 = state_15275__$1;
(statearr_15280_17768[(2)] = inst_15250);

(statearr_15280_17768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (1))){
var inst_15240 = cljs.core.seq(coll);
var inst_15241 = inst_15240;
var state_15275__$1 = (function (){var statearr_15282 = state_15275;
(statearr_15282[(7)] = inst_15241);

return statearr_15282;
})();
var statearr_15283_17771 = state_15275__$1;
(statearr_15283_17771[(2)] = null);

(statearr_15283_17771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (4))){
var inst_15241 = (state_15275[(7)]);
var inst_15248 = cljs.core.first(inst_15241);
var state_15275__$1 = state_15275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15275__$1,(7),ch,inst_15248);
} else {
if((state_val_15276 === (13))){
var inst_15267 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
var statearr_15288_17773 = state_15275__$1;
(statearr_15288_17773[(2)] = inst_15267);

(statearr_15288_17773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (6))){
var inst_15253 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
if(cljs.core.truth_(inst_15253)){
var statearr_15289_17776 = state_15275__$1;
(statearr_15289_17776[(1)] = (8));

} else {
var statearr_15290_17778 = state_15275__$1;
(statearr_15290_17778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (3))){
var inst_15271 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15275__$1,inst_15271);
} else {
if((state_val_15276 === (12))){
var state_15275__$1 = state_15275;
var statearr_15291_17779 = state_15275__$1;
(statearr_15291_17779[(2)] = null);

(statearr_15291_17779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (2))){
var inst_15241 = (state_15275[(7)]);
var state_15275__$1 = state_15275;
if(cljs.core.truth_(inst_15241)){
var statearr_15292_17780 = state_15275__$1;
(statearr_15292_17780[(1)] = (4));

} else {
var statearr_15293_17781 = state_15275__$1;
(statearr_15293_17781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (11))){
var inst_15264 = cljs.core.async.close_BANG_(ch);
var state_15275__$1 = state_15275;
var statearr_15294_17782 = state_15275__$1;
(statearr_15294_17782[(2)] = inst_15264);

(statearr_15294_17782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (9))){
var state_15275__$1 = state_15275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15296_17783 = state_15275__$1;
(statearr_15296_17783[(1)] = (11));

} else {
var statearr_15297_17784 = state_15275__$1;
(statearr_15297_17784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (5))){
var inst_15241 = (state_15275[(7)]);
var state_15275__$1 = state_15275;
var statearr_15298_17785 = state_15275__$1;
(statearr_15298_17785[(2)] = inst_15241);

(statearr_15298_17785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (10))){
var inst_15269 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
var statearr_15299_17789 = state_15275__$1;
(statearr_15299_17789[(2)] = inst_15269);

(statearr_15299_17789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (8))){
var inst_15241 = (state_15275[(7)]);
var inst_15257 = cljs.core.next(inst_15241);
var inst_15241__$1 = inst_15257;
var state_15275__$1 = (function (){var statearr_15301 = state_15275;
(statearr_15301[(7)] = inst_15241__$1);

return statearr_15301;
})();
var statearr_15302_17790 = state_15275__$1;
(statearr_15302_17790[(2)] = null);

(statearr_15302_17790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_15304 = [null,null,null,null,null,null,null,null];
(statearr_15304[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_15304[(1)] = (1));

return statearr_15304;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_15275){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_15275);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e15305){var ex__13688__auto__ = e15305;
var statearr_15307_17807 = state_15275;
(statearr_15307_17807[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_15275[(4)]))){
var statearr_15308_17808 = state_15275;
(statearr_15308_17808[(1)] = cljs.core.first((state_15275[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17812 = state_15275;
state_15275 = G__17812;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_15275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_15275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_15311 = f__14066__auto__();
(statearr_15311[(6)] = c__14064__auto__);

return statearr_15311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));

return c__14064__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15314 = arguments.length;
switch (G__15314) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17814 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17814(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17818 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17818(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17819 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17819(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17823 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17823(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15365 = (function (ch,cs,meta15366){
this.ch = ch;
this.cs = cs;
this.meta15366 = meta15366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15367,meta15366__$1){
var self__ = this;
var _15367__$1 = this;
return (new cljs.core.async.t_cljs$core$async15365(self__.ch,self__.cs,meta15366__$1));
}));

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15367){
var self__ = this;
var _15367__$1 = this;
return self__.meta15366;
}));

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15365.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15366","meta15366",1428037675,null)], null);
}));

(cljs.core.async.t_cljs$core$async15365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15365");

(cljs.core.async.t_cljs$core$async15365.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15365.
 */
cljs.core.async.__GT_t_cljs$core$async15365 = (function cljs$core$async$__GT_t_cljs$core$async15365(ch,cs,meta15366){
return (new cljs.core.async.t_cljs$core$async15365(ch,cs,meta15366));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15365(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14064__auto___17843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_15529){
var state_val_15530 = (state_15529[(1)]);
if((state_val_15530 === (7))){
var inst_15524 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15531_17844 = state_15529__$1;
(statearr_15531_17844[(2)] = inst_15524);

(statearr_15531_17844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (20))){
var inst_15424 = (state_15529[(7)]);
var inst_15439 = cljs.core.first(inst_15424);
var inst_15440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15439,(0),null);
var inst_15441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15439,(1),null);
var state_15529__$1 = (function (){var statearr_15533 = state_15529;
(statearr_15533[(8)] = inst_15440);

return statearr_15533;
})();
if(cljs.core.truth_(inst_15441)){
var statearr_15534_17845 = state_15529__$1;
(statearr_15534_17845[(1)] = (22));

} else {
var statearr_15535_17846 = state_15529__$1;
(statearr_15535_17846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (27))){
var inst_15389 = (state_15529[(9)]);
var inst_15471 = (state_15529[(10)]);
var inst_15469 = (state_15529[(11)]);
var inst_15477 = (state_15529[(12)]);
var inst_15477__$1 = cljs.core._nth(inst_15469,inst_15471);
var inst_15478 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15477__$1,inst_15389,done);
var state_15529__$1 = (function (){var statearr_15538 = state_15529;
(statearr_15538[(12)] = inst_15477__$1);

return statearr_15538;
})();
if(cljs.core.truth_(inst_15478)){
var statearr_15539_17847 = state_15529__$1;
(statearr_15539_17847[(1)] = (30));

} else {
var statearr_15540_17848 = state_15529__$1;
(statearr_15540_17848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (1))){
var state_15529__$1 = state_15529;
var statearr_15542_17850 = state_15529__$1;
(statearr_15542_17850[(2)] = null);

(statearr_15542_17850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (24))){
var inst_15424 = (state_15529[(7)]);
var inst_15446 = (state_15529[(2)]);
var inst_15447 = cljs.core.next(inst_15424);
var inst_15398 = inst_15447;
var inst_15399 = null;
var inst_15400 = (0);
var inst_15401 = (0);
var state_15529__$1 = (function (){var statearr_15543 = state_15529;
(statearr_15543[(13)] = inst_15398);

(statearr_15543[(14)] = inst_15401);

(statearr_15543[(15)] = inst_15446);

(statearr_15543[(16)] = inst_15400);

(statearr_15543[(17)] = inst_15399);

return statearr_15543;
})();
var statearr_15544_17851 = state_15529__$1;
(statearr_15544_17851[(2)] = null);

(statearr_15544_17851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (39))){
var state_15529__$1 = state_15529;
var statearr_15549_17854 = state_15529__$1;
(statearr_15549_17854[(2)] = null);

(statearr_15549_17854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (4))){
var inst_15389 = (state_15529[(9)]);
var inst_15389__$1 = (state_15529[(2)]);
var inst_15390 = (inst_15389__$1 == null);
var state_15529__$1 = (function (){var statearr_15550 = state_15529;
(statearr_15550[(9)] = inst_15389__$1);

return statearr_15550;
})();
if(cljs.core.truth_(inst_15390)){
var statearr_15551_17855 = state_15529__$1;
(statearr_15551_17855[(1)] = (5));

} else {
var statearr_15552_17856 = state_15529__$1;
(statearr_15552_17856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (15))){
var inst_15398 = (state_15529[(13)]);
var inst_15401 = (state_15529[(14)]);
var inst_15400 = (state_15529[(16)]);
var inst_15399 = (state_15529[(17)]);
var inst_15420 = (state_15529[(2)]);
var inst_15421 = (inst_15401 + (1));
var tmp15545 = inst_15398;
var tmp15546 = inst_15400;
var tmp15547 = inst_15399;
var inst_15398__$1 = tmp15545;
var inst_15399__$1 = tmp15547;
var inst_15400__$1 = tmp15546;
var inst_15401__$1 = inst_15421;
var state_15529__$1 = (function (){var statearr_15553 = state_15529;
(statearr_15553[(13)] = inst_15398__$1);

(statearr_15553[(14)] = inst_15401__$1);

(statearr_15553[(16)] = inst_15400__$1);

(statearr_15553[(17)] = inst_15399__$1);

(statearr_15553[(18)] = inst_15420);

return statearr_15553;
})();
var statearr_15555_17861 = state_15529__$1;
(statearr_15555_17861[(2)] = null);

(statearr_15555_17861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (21))){
var inst_15450 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15559_17862 = state_15529__$1;
(statearr_15559_17862[(2)] = inst_15450);

(statearr_15559_17862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (31))){
var inst_15477 = (state_15529[(12)]);
var inst_15481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15477);
var state_15529__$1 = state_15529;
var statearr_15561_17869 = state_15529__$1;
(statearr_15561_17869[(2)] = inst_15481);

(statearr_15561_17869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (32))){
var inst_15470 = (state_15529[(19)]);
var inst_15471 = (state_15529[(10)]);
var inst_15469 = (state_15529[(11)]);
var inst_15468 = (state_15529[(20)]);
var inst_15483 = (state_15529[(2)]);
var inst_15484 = (inst_15471 + (1));
var tmp15556 = inst_15470;
var tmp15557 = inst_15469;
var tmp15558 = inst_15468;
var inst_15468__$1 = tmp15558;
var inst_15469__$1 = tmp15557;
var inst_15470__$1 = tmp15556;
var inst_15471__$1 = inst_15484;
var state_15529__$1 = (function (){var statearr_15563 = state_15529;
(statearr_15563[(19)] = inst_15470__$1);

(statearr_15563[(21)] = inst_15483);

(statearr_15563[(10)] = inst_15471__$1);

(statearr_15563[(11)] = inst_15469__$1);

(statearr_15563[(20)] = inst_15468__$1);

return statearr_15563;
})();
var statearr_15564_17881 = state_15529__$1;
(statearr_15564_17881[(2)] = null);

(statearr_15564_17881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (40))){
var inst_15497 = (state_15529[(22)]);
var inst_15501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15497);
var state_15529__$1 = state_15529;
var statearr_15565_17882 = state_15529__$1;
(statearr_15565_17882[(2)] = inst_15501);

(statearr_15565_17882[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (33))){
var inst_15487 = (state_15529[(23)]);
var inst_15489 = cljs.core.chunked_seq_QMARK_(inst_15487);
var state_15529__$1 = state_15529;
if(inst_15489){
var statearr_15566_17889 = state_15529__$1;
(statearr_15566_17889[(1)] = (36));

} else {
var statearr_15567_17890 = state_15529__$1;
(statearr_15567_17890[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (13))){
var inst_15413 = (state_15529[(24)]);
var inst_15416 = cljs.core.async.close_BANG_(inst_15413);
var state_15529__$1 = state_15529;
var statearr_15568_17892 = state_15529__$1;
(statearr_15568_17892[(2)] = inst_15416);

(statearr_15568_17892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (22))){
var inst_15440 = (state_15529[(8)]);
var inst_15443 = cljs.core.async.close_BANG_(inst_15440);
var state_15529__$1 = state_15529;
var statearr_15569_17893 = state_15529__$1;
(statearr_15569_17893[(2)] = inst_15443);

(statearr_15569_17893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (36))){
var inst_15487 = (state_15529[(23)]);
var inst_15492 = cljs.core.chunk_first(inst_15487);
var inst_15493 = cljs.core.chunk_rest(inst_15487);
var inst_15494 = cljs.core.count(inst_15492);
var inst_15468 = inst_15493;
var inst_15469 = inst_15492;
var inst_15470 = inst_15494;
var inst_15471 = (0);
var state_15529__$1 = (function (){var statearr_15571 = state_15529;
(statearr_15571[(19)] = inst_15470);

(statearr_15571[(10)] = inst_15471);

(statearr_15571[(11)] = inst_15469);

(statearr_15571[(20)] = inst_15468);

return statearr_15571;
})();
var statearr_15572_17895 = state_15529__$1;
(statearr_15572_17895[(2)] = null);

(statearr_15572_17895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (41))){
var inst_15487 = (state_15529[(23)]);
var inst_15503 = (state_15529[(2)]);
var inst_15504 = cljs.core.next(inst_15487);
var inst_15468 = inst_15504;
var inst_15469 = null;
var inst_15470 = (0);
var inst_15471 = (0);
var state_15529__$1 = (function (){var statearr_15573 = state_15529;
(statearr_15573[(19)] = inst_15470);

(statearr_15573[(10)] = inst_15471);

(statearr_15573[(11)] = inst_15469);

(statearr_15573[(25)] = inst_15503);

(statearr_15573[(20)] = inst_15468);

return statearr_15573;
})();
var statearr_15574_17896 = state_15529__$1;
(statearr_15574_17896[(2)] = null);

(statearr_15574_17896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (43))){
var state_15529__$1 = state_15529;
var statearr_15575_17897 = state_15529__$1;
(statearr_15575_17897[(2)] = null);

(statearr_15575_17897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (29))){
var inst_15512 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15577_17898 = state_15529__$1;
(statearr_15577_17898[(2)] = inst_15512);

(statearr_15577_17898[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (44))){
var inst_15521 = (state_15529[(2)]);
var state_15529__$1 = (function (){var statearr_15580 = state_15529;
(statearr_15580[(26)] = inst_15521);

return statearr_15580;
})();
var statearr_15583_17908 = state_15529__$1;
(statearr_15583_17908[(2)] = null);

(statearr_15583_17908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (6))){
var inst_15460 = (state_15529[(27)]);
var inst_15459 = cljs.core.deref(cs);
var inst_15460__$1 = cljs.core.keys(inst_15459);
var inst_15461 = cljs.core.count(inst_15460__$1);
var inst_15462 = cljs.core.reset_BANG_(dctr,inst_15461);
var inst_15467 = cljs.core.seq(inst_15460__$1);
var inst_15468 = inst_15467;
var inst_15469 = null;
var inst_15470 = (0);
var inst_15471 = (0);
var state_15529__$1 = (function (){var statearr_15584 = state_15529;
(statearr_15584[(19)] = inst_15470);

(statearr_15584[(27)] = inst_15460__$1);

(statearr_15584[(10)] = inst_15471);

(statearr_15584[(28)] = inst_15462);

(statearr_15584[(11)] = inst_15469);

(statearr_15584[(20)] = inst_15468);

return statearr_15584;
})();
var statearr_15585_17911 = state_15529__$1;
(statearr_15585_17911[(2)] = null);

(statearr_15585_17911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (28))){
var inst_15468 = (state_15529[(20)]);
var inst_15487 = (state_15529[(23)]);
var inst_15487__$1 = cljs.core.seq(inst_15468);
var state_15529__$1 = (function (){var statearr_15590 = state_15529;
(statearr_15590[(23)] = inst_15487__$1);

return statearr_15590;
})();
if(inst_15487__$1){
var statearr_15591_17912 = state_15529__$1;
(statearr_15591_17912[(1)] = (33));

} else {
var statearr_15592_17915 = state_15529__$1;
(statearr_15592_17915[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (25))){
var inst_15470 = (state_15529[(19)]);
var inst_15471 = (state_15529[(10)]);
var inst_15473 = (inst_15471 < inst_15470);
var inst_15474 = inst_15473;
var state_15529__$1 = state_15529;
if(cljs.core.truth_(inst_15474)){
var statearr_15594_17916 = state_15529__$1;
(statearr_15594_17916[(1)] = (27));

} else {
var statearr_15595_17917 = state_15529__$1;
(statearr_15595_17917[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (34))){
var state_15529__$1 = state_15529;
var statearr_15597_17918 = state_15529__$1;
(statearr_15597_17918[(2)] = null);

(statearr_15597_17918[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (17))){
var state_15529__$1 = state_15529;
var statearr_15598_17919 = state_15529__$1;
(statearr_15598_17919[(2)] = null);

(statearr_15598_17919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (3))){
var inst_15526 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15529__$1,inst_15526);
} else {
if((state_val_15530 === (12))){
var inst_15455 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15599_17920 = state_15529__$1;
(statearr_15599_17920[(2)] = inst_15455);

(statearr_15599_17920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (2))){
var state_15529__$1 = state_15529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15529__$1,(4),ch);
} else {
if((state_val_15530 === (23))){
var state_15529__$1 = state_15529;
var statearr_15603_17922 = state_15529__$1;
(statearr_15603_17922[(2)] = null);

(statearr_15603_17922[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (35))){
var inst_15510 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15604_17923 = state_15529__$1;
(statearr_15604_17923[(2)] = inst_15510);

(statearr_15604_17923[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (19))){
var inst_15424 = (state_15529[(7)]);
var inst_15431 = cljs.core.chunk_first(inst_15424);
var inst_15432 = cljs.core.chunk_rest(inst_15424);
var inst_15433 = cljs.core.count(inst_15431);
var inst_15398 = inst_15432;
var inst_15399 = inst_15431;
var inst_15400 = inst_15433;
var inst_15401 = (0);
var state_15529__$1 = (function (){var statearr_15605 = state_15529;
(statearr_15605[(13)] = inst_15398);

(statearr_15605[(14)] = inst_15401);

(statearr_15605[(16)] = inst_15400);

(statearr_15605[(17)] = inst_15399);

return statearr_15605;
})();
var statearr_15607_17927 = state_15529__$1;
(statearr_15607_17927[(2)] = null);

(statearr_15607_17927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (11))){
var inst_15398 = (state_15529[(13)]);
var inst_15424 = (state_15529[(7)]);
var inst_15424__$1 = cljs.core.seq(inst_15398);
var state_15529__$1 = (function (){var statearr_15608 = state_15529;
(statearr_15608[(7)] = inst_15424__$1);

return statearr_15608;
})();
if(inst_15424__$1){
var statearr_15609_17928 = state_15529__$1;
(statearr_15609_17928[(1)] = (16));

} else {
var statearr_15610_17929 = state_15529__$1;
(statearr_15610_17929[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (9))){
var inst_15457 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15611_17933 = state_15529__$1;
(statearr_15611_17933[(2)] = inst_15457);

(statearr_15611_17933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (5))){
var inst_15396 = cljs.core.deref(cs);
var inst_15397 = cljs.core.seq(inst_15396);
var inst_15398 = inst_15397;
var inst_15399 = null;
var inst_15400 = (0);
var inst_15401 = (0);
var state_15529__$1 = (function (){var statearr_15612 = state_15529;
(statearr_15612[(13)] = inst_15398);

(statearr_15612[(14)] = inst_15401);

(statearr_15612[(16)] = inst_15400);

(statearr_15612[(17)] = inst_15399);

return statearr_15612;
})();
var statearr_15613_17935 = state_15529__$1;
(statearr_15613_17935[(2)] = null);

(statearr_15613_17935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (14))){
var state_15529__$1 = state_15529;
var statearr_15614_17940 = state_15529__$1;
(statearr_15614_17940[(2)] = null);

(statearr_15614_17940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (45))){
var inst_15518 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15615_17943 = state_15529__$1;
(statearr_15615_17943[(2)] = inst_15518);

(statearr_15615_17943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (26))){
var inst_15460 = (state_15529[(27)]);
var inst_15514 = (state_15529[(2)]);
var inst_15515 = cljs.core.seq(inst_15460);
var state_15529__$1 = (function (){var statearr_15621 = state_15529;
(statearr_15621[(29)] = inst_15514);

return statearr_15621;
})();
if(inst_15515){
var statearr_15622_17944 = state_15529__$1;
(statearr_15622_17944[(1)] = (42));

} else {
var statearr_15623_17945 = state_15529__$1;
(statearr_15623_17945[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (16))){
var inst_15424 = (state_15529[(7)]);
var inst_15429 = cljs.core.chunked_seq_QMARK_(inst_15424);
var state_15529__$1 = state_15529;
if(inst_15429){
var statearr_15625_17953 = state_15529__$1;
(statearr_15625_17953[(1)] = (19));

} else {
var statearr_15626_17955 = state_15529__$1;
(statearr_15626_17955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (38))){
var inst_15507 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15628_17956 = state_15529__$1;
(statearr_15628_17956[(2)] = inst_15507);

(statearr_15628_17956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (30))){
var state_15529__$1 = state_15529;
var statearr_15631_17957 = state_15529__$1;
(statearr_15631_17957[(2)] = null);

(statearr_15631_17957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (10))){
var inst_15401 = (state_15529[(14)]);
var inst_15399 = (state_15529[(17)]);
var inst_15412 = cljs.core._nth(inst_15399,inst_15401);
var inst_15413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15412,(0),null);
var inst_15414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15412,(1),null);
var state_15529__$1 = (function (){var statearr_15635 = state_15529;
(statearr_15635[(24)] = inst_15413);

return statearr_15635;
})();
if(cljs.core.truth_(inst_15414)){
var statearr_15637_17962 = state_15529__$1;
(statearr_15637_17962[(1)] = (13));

} else {
var statearr_15638_17964 = state_15529__$1;
(statearr_15638_17964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (18))){
var inst_15453 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15640_17965 = state_15529__$1;
(statearr_15640_17965[(2)] = inst_15453);

(statearr_15640_17965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (42))){
var state_15529__$1 = state_15529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15529__$1,(45),dchan);
} else {
if((state_val_15530 === (37))){
var inst_15497 = (state_15529[(22)]);
var inst_15389 = (state_15529[(9)]);
var inst_15487 = (state_15529[(23)]);
var inst_15497__$1 = cljs.core.first(inst_15487);
var inst_15498 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15497__$1,inst_15389,done);
var state_15529__$1 = (function (){var statearr_15643 = state_15529;
(statearr_15643[(22)] = inst_15497__$1);

return statearr_15643;
})();
if(cljs.core.truth_(inst_15498)){
var statearr_15645_17967 = state_15529__$1;
(statearr_15645_17967[(1)] = (39));

} else {
var statearr_15647_17968 = state_15529__$1;
(statearr_15647_17968[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (8))){
var inst_15401 = (state_15529[(14)]);
var inst_15400 = (state_15529[(16)]);
var inst_15406 = (inst_15401 < inst_15400);
var inst_15407 = inst_15406;
var state_15529__$1 = state_15529;
if(cljs.core.truth_(inst_15407)){
var statearr_15650_17979 = state_15529__$1;
(statearr_15650_17979[(1)] = (10));

} else {
var statearr_15654_17980 = state_15529__$1;
(statearr_15654_17980[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13685__auto__ = null;
var cljs$core$async$mult_$_state_machine__13685__auto____0 = (function (){
var statearr_15657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15657[(0)] = cljs$core$async$mult_$_state_machine__13685__auto__);

(statearr_15657[(1)] = (1));

return statearr_15657;
});
var cljs$core$async$mult_$_state_machine__13685__auto____1 = (function (state_15529){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_15529);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e15658){var ex__13688__auto__ = e15658;
var statearr_15659_17985 = state_15529;
(statearr_15659_17985[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_15529[(4)]))){
var statearr_15662_17986 = state_15529;
(statearr_15662_17986[(1)] = cljs.core.first((state_15529[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17988 = state_15529;
state_15529 = G__17988;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13685__auto__ = function(state_15529){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13685__auto____1.call(this,state_15529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13685__auto____0;
cljs$core$async$mult_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13685__auto____1;
return cljs$core$async$mult_$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_15666 = f__14066__auto__();
(statearr_15666[(6)] = c__14064__auto___17843);

return statearr_15666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15670 = arguments.length;
switch (G__15670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17997 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17997(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17999 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17999(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18000 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18000(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18001 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18001(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18008 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18008(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18014 = arguments.length;
var i__5727__auto___18015 = (0);
while(true){
if((i__5727__auto___18015 < len__5726__auto___18014)){
args__5732__auto__.push((arguments[i__5727__auto___18015]));

var G__18017 = (i__5727__auto___18015 + (1));
i__5727__auto___18015 = G__18017;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15704){
var map__15705 = p__15704;
var map__15705__$1 = cljs.core.__destructure_map(map__15705);
var opts = map__15705__$1;
var statearr_15706_18019 = state;
(statearr_15706_18019[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15708_18020 = state;
(statearr_15708_18020[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15709_18021 = state;
(statearr_15709_18021[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15697){
var G__15698 = cljs.core.first(seq15697);
var seq15697__$1 = cljs.core.next(seq15697);
var G__15699 = cljs.core.first(seq15697__$1);
var seq15697__$2 = cljs.core.next(seq15697__$1);
var G__15700 = cljs.core.first(seq15697__$2);
var seq15697__$3 = cljs.core.next(seq15697__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15698,G__15699,G__15700,seq15697__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15729 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15730){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15730 = meta15730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15731,meta15730__$1){
var self__ = this;
var _15731__$1 = this;
return (new cljs.core.async.t_cljs$core$async15729(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15730__$1));
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15731){
var self__ = this;
var _15731__$1 = this;
return self__.meta15730;
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15729.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15730","meta15730",1765407984,null)], null);
}));

(cljs.core.async.t_cljs$core$async15729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15729");

(cljs.core.async.t_cljs$core$async15729.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15729.
 */
cljs.core.async.__GT_t_cljs$core$async15729 = (function cljs$core$async$__GT_t_cljs$core$async15729(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15730){
return (new cljs.core.async.t_cljs$core$async15729(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15730));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15729(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14064__auto___18054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_15826){
var state_val_15827 = (state_15826[(1)]);
if((state_val_15827 === (7))){
var inst_15785 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
if(cljs.core.truth_(inst_15785)){
var statearr_15828_18056 = state_15826__$1;
(statearr_15828_18056[(1)] = (8));

} else {
var statearr_15829_18057 = state_15826__$1;
(statearr_15829_18057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (20))){
var inst_15778 = (state_15826[(7)]);
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15826__$1,(23),out,inst_15778);
} else {
if((state_val_15827 === (1))){
var inst_15757 = calc_state();
var inst_15758 = cljs.core.__destructure_map(inst_15757);
var inst_15759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15758,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15758,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15758,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15763 = inst_15757;
var state_15826__$1 = (function (){var statearr_15831 = state_15826;
(statearr_15831[(8)] = inst_15759);

(statearr_15831[(9)] = inst_15762);

(statearr_15831[(10)] = inst_15763);

(statearr_15831[(11)] = inst_15760);

return statearr_15831;
})();
var statearr_15832_18072 = state_15826__$1;
(statearr_15832_18072[(2)] = null);

(statearr_15832_18072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (24))){
var inst_15769 = (state_15826[(12)]);
var inst_15763 = inst_15769;
var state_15826__$1 = (function (){var statearr_15833 = state_15826;
(statearr_15833[(10)] = inst_15763);

return statearr_15833;
})();
var statearr_15834_18077 = state_15826__$1;
(statearr_15834_18077[(2)] = null);

(statearr_15834_18077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (4))){
var inst_15778 = (state_15826[(7)]);
var inst_15780 = (state_15826[(13)]);
var inst_15777 = (state_15826[(2)]);
var inst_15778__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15777,(0),null);
var inst_15779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15777,(1),null);
var inst_15780__$1 = (inst_15778__$1 == null);
var state_15826__$1 = (function (){var statearr_15835 = state_15826;
(statearr_15835[(7)] = inst_15778__$1);

(statearr_15835[(14)] = inst_15779);

(statearr_15835[(13)] = inst_15780__$1);

return statearr_15835;
})();
if(cljs.core.truth_(inst_15780__$1)){
var statearr_15836_18083 = state_15826__$1;
(statearr_15836_18083[(1)] = (5));

} else {
var statearr_15838_18084 = state_15826__$1;
(statearr_15838_18084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (15))){
var inst_15799 = (state_15826[(15)]);
var inst_15770 = (state_15826[(16)]);
var inst_15799__$1 = cljs.core.empty_QMARK_(inst_15770);
var state_15826__$1 = (function (){var statearr_15839 = state_15826;
(statearr_15839[(15)] = inst_15799__$1);

return statearr_15839;
})();
if(inst_15799__$1){
var statearr_15840_18085 = state_15826__$1;
(statearr_15840_18085[(1)] = (17));

} else {
var statearr_15841_18086 = state_15826__$1;
(statearr_15841_18086[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (21))){
var inst_15769 = (state_15826[(12)]);
var inst_15763 = inst_15769;
var state_15826__$1 = (function (){var statearr_15842 = state_15826;
(statearr_15842[(10)] = inst_15763);

return statearr_15842;
})();
var statearr_15843_18094 = state_15826__$1;
(statearr_15843_18094[(2)] = null);

(statearr_15843_18094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (13))){
var inst_15792 = (state_15826[(2)]);
var inst_15793 = calc_state();
var inst_15763 = inst_15793;
var state_15826__$1 = (function (){var statearr_15844 = state_15826;
(statearr_15844[(17)] = inst_15792);

(statearr_15844[(10)] = inst_15763);

return statearr_15844;
})();
var statearr_15845_18112 = state_15826__$1;
(statearr_15845_18112[(2)] = null);

(statearr_15845_18112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (22))){
var inst_15820 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15847_18115 = state_15826__$1;
(statearr_15847_18115[(2)] = inst_15820);

(statearr_15847_18115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (6))){
var inst_15779 = (state_15826[(14)]);
var inst_15783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15779,change);
var state_15826__$1 = state_15826;
var statearr_15848_18117 = state_15826__$1;
(statearr_15848_18117[(2)] = inst_15783);

(statearr_15848_18117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (25))){
var state_15826__$1 = state_15826;
var statearr_15849_18118 = state_15826__$1;
(statearr_15849_18118[(2)] = null);

(statearr_15849_18118[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (17))){
var inst_15771 = (state_15826[(18)]);
var inst_15779 = (state_15826[(14)]);
var inst_15801 = (inst_15771.cljs$core$IFn$_invoke$arity$1 ? inst_15771.cljs$core$IFn$_invoke$arity$1(inst_15779) : inst_15771.call(null, inst_15779));
var inst_15802 = cljs.core.not(inst_15801);
var state_15826__$1 = state_15826;
var statearr_15851_18120 = state_15826__$1;
(statearr_15851_18120[(2)] = inst_15802);

(statearr_15851_18120[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (3))){
var inst_15824 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15826__$1,inst_15824);
} else {
if((state_val_15827 === (12))){
var state_15826__$1 = state_15826;
var statearr_15856_18122 = state_15826__$1;
(statearr_15856_18122[(2)] = null);

(statearr_15856_18122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (2))){
var inst_15769 = (state_15826[(12)]);
var inst_15763 = (state_15826[(10)]);
var inst_15769__$1 = cljs.core.__destructure_map(inst_15763);
var inst_15770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15769__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15769__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15769__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15826__$1 = (function (){var statearr_15857 = state_15826;
(statearr_15857[(18)] = inst_15771);

(statearr_15857[(12)] = inst_15769__$1);

(statearr_15857[(16)] = inst_15770);

return statearr_15857;
})();
return cljs.core.async.ioc_alts_BANG_(state_15826__$1,(4),inst_15772);
} else {
if((state_val_15827 === (23))){
var inst_15811 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
if(cljs.core.truth_(inst_15811)){
var statearr_15859_18128 = state_15826__$1;
(statearr_15859_18128[(1)] = (24));

} else {
var statearr_15860_18129 = state_15826__$1;
(statearr_15860_18129[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (19))){
var inst_15805 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15862_18134 = state_15826__$1;
(statearr_15862_18134[(2)] = inst_15805);

(statearr_15862_18134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (11))){
var inst_15779 = (state_15826[(14)]);
var inst_15789 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15779);
var state_15826__$1 = state_15826;
var statearr_15863_18135 = state_15826__$1;
(statearr_15863_18135[(2)] = inst_15789);

(statearr_15863_18135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (9))){
var inst_15796 = (state_15826[(19)]);
var inst_15779 = (state_15826[(14)]);
var inst_15770 = (state_15826[(16)]);
var inst_15796__$1 = (inst_15770.cljs$core$IFn$_invoke$arity$1 ? inst_15770.cljs$core$IFn$_invoke$arity$1(inst_15779) : inst_15770.call(null, inst_15779));
var state_15826__$1 = (function (){var statearr_15864 = state_15826;
(statearr_15864[(19)] = inst_15796__$1);

return statearr_15864;
})();
if(cljs.core.truth_(inst_15796__$1)){
var statearr_15865_18136 = state_15826__$1;
(statearr_15865_18136[(1)] = (14));

} else {
var statearr_15867_18137 = state_15826__$1;
(statearr_15867_18137[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (5))){
var inst_15780 = (state_15826[(13)]);
var state_15826__$1 = state_15826;
var statearr_15868_18138 = state_15826__$1;
(statearr_15868_18138[(2)] = inst_15780);

(statearr_15868_18138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (14))){
var inst_15796 = (state_15826[(19)]);
var state_15826__$1 = state_15826;
var statearr_15870_18140 = state_15826__$1;
(statearr_15870_18140[(2)] = inst_15796);

(statearr_15870_18140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (26))){
var inst_15816 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15871_18141 = state_15826__$1;
(statearr_15871_18141[(2)] = inst_15816);

(statearr_15871_18141[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (16))){
var inst_15808 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
if(cljs.core.truth_(inst_15808)){
var statearr_15876_18143 = state_15826__$1;
(statearr_15876_18143[(1)] = (20));

} else {
var statearr_15877_18144 = state_15826__$1;
(statearr_15877_18144[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (10))){
var inst_15822 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15879_18145 = state_15826__$1;
(statearr_15879_18145[(2)] = inst_15822);

(statearr_15879_18145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (18))){
var inst_15799 = (state_15826[(15)]);
var state_15826__$1 = state_15826;
var statearr_15880_18150 = state_15826__$1;
(statearr_15880_18150[(2)] = inst_15799);

(statearr_15880_18150[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (8))){
var inst_15778 = (state_15826[(7)]);
var inst_15787 = (inst_15778 == null);
var state_15826__$1 = state_15826;
if(cljs.core.truth_(inst_15787)){
var statearr_15881_18154 = state_15826__$1;
(statearr_15881_18154[(1)] = (11));

} else {
var statearr_15883_18155 = state_15826__$1;
(statearr_15883_18155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13685__auto__ = null;
var cljs$core$async$mix_$_state_machine__13685__auto____0 = (function (){
var statearr_15885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15885[(0)] = cljs$core$async$mix_$_state_machine__13685__auto__);

(statearr_15885[(1)] = (1));

return statearr_15885;
});
var cljs$core$async$mix_$_state_machine__13685__auto____1 = (function (state_15826){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_15826);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e15890){var ex__13688__auto__ = e15890;
var statearr_15891_18160 = state_15826;
(statearr_15891_18160[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_15826[(4)]))){
var statearr_15892_18162 = state_15826;
(statearr_15892_18162[(1)] = cljs.core.first((state_15826[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18164 = state_15826;
state_15826 = G__18164;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13685__auto__ = function(state_15826){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13685__auto____1.call(this,state_15826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13685__auto____0;
cljs$core$async$mix_$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13685__auto____1;
return cljs$core$async$mix_$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_15894 = f__14066__auto__();
(statearr_15894[(6)] = c__14064__auto___18054);

return statearr_15894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18168 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18168(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18173 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18173(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18181 = (function() {
var G__18182 = null;
var G__18182__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18182__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18182 = function(p,v){
switch(arguments.length){
case 1:
return G__18182__1.call(this,p);
case 2:
return G__18182__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18182.cljs$core$IFn$_invoke$arity$1 = G__18182__1;
G__18182.cljs$core$IFn$_invoke$arity$2 = G__18182__2;
return G__18182;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15911 = arguments.length;
switch (G__15911) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18181(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18181(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15932 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15933){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15933 = meta15933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15934,meta15933__$1){
var self__ = this;
var _15934__$1 = this;
return (new cljs.core.async.t_cljs$core$async15932(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15933__$1));
}));

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15934){
var self__ = this;
var _15934__$1 = this;
return self__.meta15933;
}));

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15933","meta15933",-1436749628,null)], null);
}));

(cljs.core.async.t_cljs$core$async15932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15932");

(cljs.core.async.t_cljs$core$async15932.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15932.
 */
cljs.core.async.__GT_t_cljs$core$async15932 = (function cljs$core$async$__GT_t_cljs$core$async15932(ch,topic_fn,buf_fn,mults,ensure_mult,meta15933){
return (new cljs.core.async.t_cljs$core$async15932(ch,topic_fn,buf_fn,mults,ensure_mult,meta15933));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15925 = arguments.length;
switch (G__15925) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15921_SHARP_){
if(cljs.core.truth_((p1__15921_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15921_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15921_SHARP_.call(null, topic)))){
return p1__15921_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15921_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15932(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14064__auto___18217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_16025){
var state_val_16026 = (state_16025[(1)]);
if((state_val_16026 === (7))){
var inst_16021 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16028_18218 = state_16025__$1;
(statearr_16028_18218[(2)] = inst_16021);

(statearr_16028_18218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (20))){
var state_16025__$1 = state_16025;
var statearr_16031_18222 = state_16025__$1;
(statearr_16031_18222[(2)] = null);

(statearr_16031_18222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (1))){
var state_16025__$1 = state_16025;
var statearr_16034_18226 = state_16025__$1;
(statearr_16034_18226[(2)] = null);

(statearr_16034_18226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (24))){
var inst_16004 = (state_16025[(7)]);
var inst_16013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16004);
var state_16025__$1 = state_16025;
var statearr_16038_18231 = state_16025__$1;
(statearr_16038_18231[(2)] = inst_16013);

(statearr_16038_18231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (4))){
var inst_15947 = (state_16025[(8)]);
var inst_15947__$1 = (state_16025[(2)]);
var inst_15948 = (inst_15947__$1 == null);
var state_16025__$1 = (function (){var statearr_16040 = state_16025;
(statearr_16040[(8)] = inst_15947__$1);

return statearr_16040;
})();
if(cljs.core.truth_(inst_15948)){
var statearr_16046_18232 = state_16025__$1;
(statearr_16046_18232[(1)] = (5));

} else {
var statearr_16047_18233 = state_16025__$1;
(statearr_16047_18233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (15))){
var inst_15998 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16052_18234 = state_16025__$1;
(statearr_16052_18234[(2)] = inst_15998);

(statearr_16052_18234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (21))){
var inst_16018 = (state_16025[(2)]);
var state_16025__$1 = (function (){var statearr_16054 = state_16025;
(statearr_16054[(9)] = inst_16018);

return statearr_16054;
})();
var statearr_16055_18238 = state_16025__$1;
(statearr_16055_18238[(2)] = null);

(statearr_16055_18238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (13))){
var inst_15977 = (state_16025[(10)]);
var inst_15979 = cljs.core.chunked_seq_QMARK_(inst_15977);
var state_16025__$1 = state_16025;
if(inst_15979){
var statearr_16059_18245 = state_16025__$1;
(statearr_16059_18245[(1)] = (16));

} else {
var statearr_16060_18246 = state_16025__$1;
(statearr_16060_18246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (22))){
var inst_16010 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
if(cljs.core.truth_(inst_16010)){
var statearr_16062_18247 = state_16025__$1;
(statearr_16062_18247[(1)] = (23));

} else {
var statearr_16065_18251 = state_16025__$1;
(statearr_16065_18251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (6))){
var inst_15947 = (state_16025[(8)]);
var inst_16004 = (state_16025[(7)]);
var inst_16006 = (state_16025[(11)]);
var inst_16004__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15947) : topic_fn.call(null, inst_15947));
var inst_16005 = cljs.core.deref(mults);
var inst_16006__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16005,inst_16004__$1);
var state_16025__$1 = (function (){var statearr_16072 = state_16025;
(statearr_16072[(7)] = inst_16004__$1);

(statearr_16072[(11)] = inst_16006__$1);

return statearr_16072;
})();
if(cljs.core.truth_(inst_16006__$1)){
var statearr_16073_18257 = state_16025__$1;
(statearr_16073_18257[(1)] = (19));

} else {
var statearr_16074_18259 = state_16025__$1;
(statearr_16074_18259[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (25))){
var inst_16015 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16078_18261 = state_16025__$1;
(statearr_16078_18261[(2)] = inst_16015);

(statearr_16078_18261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (17))){
var inst_15977 = (state_16025[(10)]);
var inst_15989 = cljs.core.first(inst_15977);
var inst_15990 = cljs.core.async.muxch_STAR_(inst_15989);
var inst_15991 = cljs.core.async.close_BANG_(inst_15990);
var inst_15992 = cljs.core.next(inst_15977);
var inst_15960 = inst_15992;
var inst_15961 = null;
var inst_15962 = (0);
var inst_15963 = (0);
var state_16025__$1 = (function (){var statearr_16081 = state_16025;
(statearr_16081[(12)] = inst_15991);

(statearr_16081[(13)] = inst_15963);

(statearr_16081[(14)] = inst_15962);

(statearr_16081[(15)] = inst_15960);

(statearr_16081[(16)] = inst_15961);

return statearr_16081;
})();
var statearr_16084_18269 = state_16025__$1;
(statearr_16084_18269[(2)] = null);

(statearr_16084_18269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (3))){
var inst_16023 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16025__$1,inst_16023);
} else {
if((state_val_16026 === (12))){
var inst_16000 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16088_18271 = state_16025__$1;
(statearr_16088_18271[(2)] = inst_16000);

(statearr_16088_18271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (2))){
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16025__$1,(4),ch);
} else {
if((state_val_16026 === (23))){
var state_16025__$1 = state_16025;
var statearr_16094_18272 = state_16025__$1;
(statearr_16094_18272[(2)] = null);

(statearr_16094_18272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (19))){
var inst_15947 = (state_16025[(8)]);
var inst_16006 = (state_16025[(11)]);
var inst_16008 = cljs.core.async.muxch_STAR_(inst_16006);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16025__$1,(22),inst_16008,inst_15947);
} else {
if((state_val_16026 === (11))){
var inst_15977 = (state_16025[(10)]);
var inst_15960 = (state_16025[(15)]);
var inst_15977__$1 = cljs.core.seq(inst_15960);
var state_16025__$1 = (function (){var statearr_16102 = state_16025;
(statearr_16102[(10)] = inst_15977__$1);

return statearr_16102;
})();
if(inst_15977__$1){
var statearr_16103_18281 = state_16025__$1;
(statearr_16103_18281[(1)] = (13));

} else {
var statearr_16106_18282 = state_16025__$1;
(statearr_16106_18282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (9))){
var inst_16002 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16109_18283 = state_16025__$1;
(statearr_16109_18283[(2)] = inst_16002);

(statearr_16109_18283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (5))){
var inst_15957 = cljs.core.deref(mults);
var inst_15958 = cljs.core.vals(inst_15957);
var inst_15959 = cljs.core.seq(inst_15958);
var inst_15960 = inst_15959;
var inst_15961 = null;
var inst_15962 = (0);
var inst_15963 = (0);
var state_16025__$1 = (function (){var statearr_16114 = state_16025;
(statearr_16114[(13)] = inst_15963);

(statearr_16114[(14)] = inst_15962);

(statearr_16114[(15)] = inst_15960);

(statearr_16114[(16)] = inst_15961);

return statearr_16114;
})();
var statearr_16116_18290 = state_16025__$1;
(statearr_16116_18290[(2)] = null);

(statearr_16116_18290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (14))){
var state_16025__$1 = state_16025;
var statearr_16125_18293 = state_16025__$1;
(statearr_16125_18293[(2)] = null);

(statearr_16125_18293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (16))){
var inst_15977 = (state_16025[(10)]);
var inst_15981 = cljs.core.chunk_first(inst_15977);
var inst_15982 = cljs.core.chunk_rest(inst_15977);
var inst_15983 = cljs.core.count(inst_15981);
var inst_15960 = inst_15982;
var inst_15961 = inst_15981;
var inst_15962 = inst_15983;
var inst_15963 = (0);
var state_16025__$1 = (function (){var statearr_16130 = state_16025;
(statearr_16130[(13)] = inst_15963);

(statearr_16130[(14)] = inst_15962);

(statearr_16130[(15)] = inst_15960);

(statearr_16130[(16)] = inst_15961);

return statearr_16130;
})();
var statearr_16131_18294 = state_16025__$1;
(statearr_16131_18294[(2)] = null);

(statearr_16131_18294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (10))){
var inst_15963 = (state_16025[(13)]);
var inst_15962 = (state_16025[(14)]);
var inst_15960 = (state_16025[(15)]);
var inst_15961 = (state_16025[(16)]);
var inst_15968 = cljs.core._nth(inst_15961,inst_15963);
var inst_15971 = cljs.core.async.muxch_STAR_(inst_15968);
var inst_15972 = cljs.core.async.close_BANG_(inst_15971);
var inst_15973 = (inst_15963 + (1));
var tmp16122 = inst_15962;
var tmp16123 = inst_15960;
var tmp16124 = inst_15961;
var inst_15960__$1 = tmp16123;
var inst_15961__$1 = tmp16124;
var inst_15962__$1 = tmp16122;
var inst_15963__$1 = inst_15973;
var state_16025__$1 = (function (){var statearr_16137 = state_16025;
(statearr_16137[(13)] = inst_15963__$1);

(statearr_16137[(14)] = inst_15962__$1);

(statearr_16137[(15)] = inst_15960__$1);

(statearr_16137[(17)] = inst_15972);

(statearr_16137[(16)] = inst_15961__$1);

return statearr_16137;
})();
var statearr_16140_18301 = state_16025__$1;
(statearr_16140_18301[(2)] = null);

(statearr_16140_18301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (18))){
var inst_15995 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16144_18302 = state_16025__$1;
(statearr_16144_18302[(2)] = inst_15995);

(statearr_16144_18302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (8))){
var inst_15963 = (state_16025[(13)]);
var inst_15962 = (state_16025[(14)]);
var inst_15965 = (inst_15963 < inst_15962);
var inst_15966 = inst_15965;
var state_16025__$1 = state_16025;
if(cljs.core.truth_(inst_15966)){
var statearr_16148_18304 = state_16025__$1;
(statearr_16148_18304[(1)] = (10));

} else {
var statearr_16149_18305 = state_16025__$1;
(statearr_16149_18305[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_16156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16156[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_16156[(1)] = (1));

return statearr_16156;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_16025){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_16025);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e16159){var ex__13688__auto__ = e16159;
var statearr_16162_18306 = state_16025;
(statearr_16162_18306[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_16025[(4)]))){
var statearr_16165_18307 = state_16025;
(statearr_16165_18307[(1)] = cljs.core.first((state_16025[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18308 = state_16025;
state_16025 = G__18308;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_16025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_16025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_16169 = f__14066__auto__();
(statearr_16169[(6)] = c__14064__auto___18217);

return statearr_16169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16179 = arguments.length;
switch (G__16179) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16203 = arguments.length;
switch (G__16203) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16214 = arguments.length;
switch (G__16214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14064__auto___18348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_16286){
var state_val_16287 = (state_16286[(1)]);
if((state_val_16287 === (7))){
var state_16286__$1 = state_16286;
var statearr_16293_18349 = state_16286__$1;
(statearr_16293_18349[(2)] = null);

(statearr_16293_18349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (1))){
var state_16286__$1 = state_16286;
var statearr_16297_18350 = state_16286__$1;
(statearr_16297_18350[(2)] = null);

(statearr_16297_18350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (4))){
var inst_16234 = (state_16286[(7)]);
var inst_16236 = (state_16286[(8)]);
var inst_16239 = (inst_16236 < inst_16234);
var state_16286__$1 = state_16286;
if(cljs.core.truth_(inst_16239)){
var statearr_16299_18354 = state_16286__$1;
(statearr_16299_18354[(1)] = (6));

} else {
var statearr_16302_18357 = state_16286__$1;
(statearr_16302_18357[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (15))){
var inst_16269 = (state_16286[(9)]);
var inst_16276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16269);
var state_16286__$1 = state_16286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16286__$1,(17),out,inst_16276);
} else {
if((state_val_16287 === (13))){
var inst_16269 = (state_16286[(9)]);
var inst_16269__$1 = (state_16286[(2)]);
var inst_16271 = cljs.core.some(cljs.core.nil_QMARK_,inst_16269__$1);
var state_16286__$1 = (function (){var statearr_16315 = state_16286;
(statearr_16315[(9)] = inst_16269__$1);

return statearr_16315;
})();
if(cljs.core.truth_(inst_16271)){
var statearr_16316_18384 = state_16286__$1;
(statearr_16316_18384[(1)] = (14));

} else {
var statearr_16317_18398 = state_16286__$1;
(statearr_16317_18398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (6))){
var state_16286__$1 = state_16286;
var statearr_16318_18402 = state_16286__$1;
(statearr_16318_18402[(2)] = null);

(statearr_16318_18402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (17))){
var inst_16278 = (state_16286[(2)]);
var state_16286__$1 = (function (){var statearr_16332 = state_16286;
(statearr_16332[(10)] = inst_16278);

return statearr_16332;
})();
var statearr_16333_18403 = state_16286__$1;
(statearr_16333_18403[(2)] = null);

(statearr_16333_18403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (3))){
var inst_16284 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16286__$1,inst_16284);
} else {
if((state_val_16287 === (12))){
var _ = (function (){var statearr_16335 = state_16286;
(statearr_16335[(4)] = cljs.core.rest((state_16286[(4)])));

return statearr_16335;
})();
var state_16286__$1 = state_16286;
var ex16330 = (state_16286__$1[(2)]);
var statearr_16337_18421 = state_16286__$1;
(statearr_16337_18421[(5)] = ex16330);


if((ex16330 instanceof Object)){
var statearr_16340_18422 = state_16286__$1;
(statearr_16340_18422[(1)] = (11));

(statearr_16340_18422[(5)] = null);

} else {
throw ex16330;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (2))){
var inst_16233 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16234 = cnt;
var inst_16236 = (0);
var state_16286__$1 = (function (){var statearr_16348 = state_16286;
(statearr_16348[(11)] = inst_16233);

(statearr_16348[(7)] = inst_16234);

(statearr_16348[(8)] = inst_16236);

return statearr_16348;
})();
var statearr_16350_18423 = state_16286__$1;
(statearr_16350_18423[(2)] = null);

(statearr_16350_18423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (11))){
var inst_16247 = (state_16286[(2)]);
var inst_16248 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16286__$1 = (function (){var statearr_16351 = state_16286;
(statearr_16351[(12)] = inst_16247);

return statearr_16351;
})();
var statearr_16352_18424 = state_16286__$1;
(statearr_16352_18424[(2)] = inst_16248);

(statearr_16352_18424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (9))){
var inst_16236 = (state_16286[(8)]);
var _ = (function (){var statearr_16353 = state_16286;
(statearr_16353[(4)] = cljs.core.cons((12),(state_16286[(4)])));

return statearr_16353;
})();
var inst_16254 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16236) : chs__$1.call(null, inst_16236));
var inst_16255 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16236) : done.call(null, inst_16236));
var inst_16256 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16254,inst_16255);
var ___$1 = (function (){var statearr_16355 = state_16286;
(statearr_16355[(4)] = cljs.core.rest((state_16286[(4)])));

return statearr_16355;
})();
var state_16286__$1 = state_16286;
var statearr_16357_18433 = state_16286__$1;
(statearr_16357_18433[(2)] = inst_16256);

(statearr_16357_18433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (5))){
var inst_16267 = (state_16286[(2)]);
var state_16286__$1 = (function (){var statearr_16360 = state_16286;
(statearr_16360[(13)] = inst_16267);

return statearr_16360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16286__$1,(13),dchan);
} else {
if((state_val_16287 === (14))){
var inst_16274 = cljs.core.async.close_BANG_(out);
var state_16286__$1 = state_16286;
var statearr_16363_18442 = state_16286__$1;
(statearr_16363_18442[(2)] = inst_16274);

(statearr_16363_18442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (16))){
var inst_16281 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16366_18443 = state_16286__$1;
(statearr_16366_18443[(2)] = inst_16281);

(statearr_16366_18443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (10))){
var inst_16236 = (state_16286[(8)]);
var inst_16259 = (state_16286[(2)]);
var inst_16261 = (inst_16236 + (1));
var inst_16236__$1 = inst_16261;
var state_16286__$1 = (function (){var statearr_16370 = state_16286;
(statearr_16370[(14)] = inst_16259);

(statearr_16370[(8)] = inst_16236__$1);

return statearr_16370;
})();
var statearr_16376_18446 = state_16286__$1;
(statearr_16376_18446[(2)] = null);

(statearr_16376_18446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (8))){
var inst_16265 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16380_18450 = state_16286__$1;
(statearr_16380_18450[(2)] = inst_16265);

(statearr_16380_18450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_16383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16383[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_16383[(1)] = (1));

return statearr_16383;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_16286){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_16286);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e16386){var ex__13688__auto__ = e16386;
var statearr_16388_18460 = state_16286;
(statearr_16388_18460[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_16286[(4)]))){
var statearr_16393_18464 = state_16286;
(statearr_16393_18464[(1)] = cljs.core.first((state_16286[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18465 = state_16286;
state_16286 = G__18465;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_16286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_16286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_16399 = f__14066__auto__();
(statearr_16399[(6)] = c__14064__auto___18348);

return statearr_16399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16416 = arguments.length;
switch (G__16416) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14064__auto___18484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_16474){
var state_val_16477 = (state_16474[(1)]);
if((state_val_16477 === (7))){
var inst_16448 = (state_16474[(7)]);
var inst_16447 = (state_16474[(8)]);
var inst_16447__$1 = (state_16474[(2)]);
var inst_16448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16447__$1,(0),null);
var inst_16451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16447__$1,(1),null);
var inst_16452 = (inst_16448__$1 == null);
var state_16474__$1 = (function (){var statearr_16489 = state_16474;
(statearr_16489[(9)] = inst_16451);

(statearr_16489[(7)] = inst_16448__$1);

(statearr_16489[(8)] = inst_16447__$1);

return statearr_16489;
})();
if(cljs.core.truth_(inst_16452)){
var statearr_16491_18488 = state_16474__$1;
(statearr_16491_18488[(1)] = (8));

} else {
var statearr_16492_18489 = state_16474__$1;
(statearr_16492_18489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (1))){
var inst_16435 = cljs.core.vec(chs);
var inst_16436 = inst_16435;
var state_16474__$1 = (function (){var statearr_16496 = state_16474;
(statearr_16496[(10)] = inst_16436);

return statearr_16496;
})();
var statearr_16502_18490 = state_16474__$1;
(statearr_16502_18490[(2)] = null);

(statearr_16502_18490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (4))){
var inst_16436 = (state_16474[(10)]);
var state_16474__$1 = state_16474;
return cljs.core.async.ioc_alts_BANG_(state_16474__$1,(7),inst_16436);
} else {
if((state_val_16477 === (6))){
var inst_16468 = (state_16474[(2)]);
var state_16474__$1 = state_16474;
var statearr_16506_18493 = state_16474__$1;
(statearr_16506_18493[(2)] = inst_16468);

(statearr_16506_18493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (3))){
var inst_16470 = (state_16474[(2)]);
var state_16474__$1 = state_16474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16474__$1,inst_16470);
} else {
if((state_val_16477 === (2))){
var inst_16436 = (state_16474[(10)]);
var inst_16438 = cljs.core.count(inst_16436);
var inst_16439 = (inst_16438 > (0));
var state_16474__$1 = state_16474;
if(cljs.core.truth_(inst_16439)){
var statearr_16510_18497 = state_16474__$1;
(statearr_16510_18497[(1)] = (4));

} else {
var statearr_16513_18498 = state_16474__$1;
(statearr_16513_18498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (11))){
var inst_16436 = (state_16474[(10)]);
var inst_16459 = (state_16474[(2)]);
var tmp16508 = inst_16436;
var inst_16436__$1 = tmp16508;
var state_16474__$1 = (function (){var statearr_16516 = state_16474;
(statearr_16516[(10)] = inst_16436__$1);

(statearr_16516[(11)] = inst_16459);

return statearr_16516;
})();
var statearr_16520_18500 = state_16474__$1;
(statearr_16520_18500[(2)] = null);

(statearr_16520_18500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (9))){
var inst_16448 = (state_16474[(7)]);
var state_16474__$1 = state_16474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16474__$1,(11),out,inst_16448);
} else {
if((state_val_16477 === (5))){
var inst_16466 = cljs.core.async.close_BANG_(out);
var state_16474__$1 = state_16474;
var statearr_16537_18502 = state_16474__$1;
(statearr_16537_18502[(2)] = inst_16466);

(statearr_16537_18502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (10))){
var inst_16463 = (state_16474[(2)]);
var state_16474__$1 = state_16474;
var statearr_16540_18503 = state_16474__$1;
(statearr_16540_18503[(2)] = inst_16463);

(statearr_16540_18503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (8))){
var inst_16451 = (state_16474[(9)]);
var inst_16448 = (state_16474[(7)]);
var inst_16447 = (state_16474[(8)]);
var inst_16436 = (state_16474[(10)]);
var inst_16454 = (function (){var cs = inst_16436;
var vec__16442 = inst_16447;
var v = inst_16448;
var c = inst_16451;
return (function (p1__16410_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16410_SHARP_);
});
})();
var inst_16455 = cljs.core.filterv(inst_16454,inst_16436);
var inst_16436__$1 = inst_16455;
var state_16474__$1 = (function (){var statearr_16546 = state_16474;
(statearr_16546[(10)] = inst_16436__$1);

return statearr_16546;
})();
var statearr_16548_18506 = state_16474__$1;
(statearr_16548_18506[(2)] = null);

(statearr_16548_18506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_16558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16558[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_16558[(1)] = (1));

return statearr_16558;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_16474){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_16474);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e16564){var ex__13688__auto__ = e16564;
var statearr_16565_18512 = state_16474;
(statearr_16565_18512[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_16474[(4)]))){
var statearr_16567_18513 = state_16474;
(statearr_16567_18513[(1)] = cljs.core.first((state_16474[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18514 = state_16474;
state_16474 = G__18514;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_16474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_16474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_16574 = f__14066__auto__();
(statearr_16574[(6)] = c__14064__auto___18484);

return statearr_16574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16589 = arguments.length;
switch (G__16589) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14064__auto___18528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_16623){
var state_val_16624 = (state_16623[(1)]);
if((state_val_16624 === (7))){
var inst_16600 = (state_16623[(7)]);
var inst_16600__$1 = (state_16623[(2)]);
var inst_16601 = (inst_16600__$1 == null);
var inst_16602 = cljs.core.not(inst_16601);
var state_16623__$1 = (function (){var statearr_16632 = state_16623;
(statearr_16632[(7)] = inst_16600__$1);

return statearr_16632;
})();
if(inst_16602){
var statearr_16636_18529 = state_16623__$1;
(statearr_16636_18529[(1)] = (8));

} else {
var statearr_16637_18530 = state_16623__$1;
(statearr_16637_18530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (1))){
var inst_16595 = (0);
var state_16623__$1 = (function (){var statearr_16639 = state_16623;
(statearr_16639[(8)] = inst_16595);

return statearr_16639;
})();
var statearr_16640_18536 = state_16623__$1;
(statearr_16640_18536[(2)] = null);

(statearr_16640_18536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (4))){
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16623__$1,(7),ch);
} else {
if((state_val_16624 === (6))){
var inst_16616 = (state_16623[(2)]);
var state_16623__$1 = state_16623;
var statearr_16642_18544 = state_16623__$1;
(statearr_16642_18544[(2)] = inst_16616);

(statearr_16642_18544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (3))){
var inst_16618 = (state_16623[(2)]);
var inst_16619 = cljs.core.async.close_BANG_(out);
var state_16623__$1 = (function (){var statearr_16647 = state_16623;
(statearr_16647[(9)] = inst_16618);

return statearr_16647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16623__$1,inst_16619);
} else {
if((state_val_16624 === (2))){
var inst_16595 = (state_16623[(8)]);
var inst_16597 = (inst_16595 < n);
var state_16623__$1 = state_16623;
if(cljs.core.truth_(inst_16597)){
var statearr_16649_18554 = state_16623__$1;
(statearr_16649_18554[(1)] = (4));

} else {
var statearr_16650_18555 = state_16623__$1;
(statearr_16650_18555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (11))){
var inst_16595 = (state_16623[(8)]);
var inst_16605 = (state_16623[(2)]);
var inst_16607 = (inst_16595 + (1));
var inst_16595__$1 = inst_16607;
var state_16623__$1 = (function (){var statearr_16654 = state_16623;
(statearr_16654[(10)] = inst_16605);

(statearr_16654[(8)] = inst_16595__$1);

return statearr_16654;
})();
var statearr_16655_18560 = state_16623__$1;
(statearr_16655_18560[(2)] = null);

(statearr_16655_18560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (9))){
var state_16623__$1 = state_16623;
var statearr_16657_18561 = state_16623__$1;
(statearr_16657_18561[(2)] = null);

(statearr_16657_18561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (5))){
var state_16623__$1 = state_16623;
var statearr_16658_18562 = state_16623__$1;
(statearr_16658_18562[(2)] = null);

(statearr_16658_18562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (10))){
var inst_16613 = (state_16623[(2)]);
var state_16623__$1 = state_16623;
var statearr_16662_18566 = state_16623__$1;
(statearr_16662_18566[(2)] = inst_16613);

(statearr_16662_18566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (8))){
var inst_16600 = (state_16623[(7)]);
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16623__$1,(11),out,inst_16600);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_16668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16668[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_16668[(1)] = (1));

return statearr_16668;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_16623){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_16623);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e16670){var ex__13688__auto__ = e16670;
var statearr_16671_18571 = state_16623;
(statearr_16671_18571[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_16623[(4)]))){
var statearr_16673_18572 = state_16623;
(statearr_16673_18572[(1)] = cljs.core.first((state_16623[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18573 = state_16623;
state_16623 = G__18573;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_16623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_16623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_16680 = f__14066__auto__();
(statearr_16680[(6)] = c__14064__auto___18528);

return statearr_16680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16700 = (function (f,ch,meta16687,_,fn1,meta16701){
this.f = f;
this.ch = ch;
this.meta16687 = meta16687;
this._ = _;
this.fn1 = fn1;
this.meta16701 = meta16701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16702,meta16701__$1){
var self__ = this;
var _16702__$1 = this;
return (new cljs.core.async.t_cljs$core$async16700(self__.f,self__.ch,self__.meta16687,self__._,self__.fn1,meta16701__$1));
}));

(cljs.core.async.t_cljs$core$async16700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16702){
var self__ = this;
var _16702__$1 = this;
return self__.meta16701;
}));

(cljs.core.async.t_cljs$core$async16700.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16700.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16681_SHARP_){
var G__16710 = (((p1__16681_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16681_SHARP_) : self__.f.call(null, p1__16681_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16710) : f1.call(null, G__16710));
});
}));

(cljs.core.async.t_cljs$core$async16700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16687","meta16687",-1836861800,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16686","cljs.core.async/t_cljs$core$async16686",-550622660,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16701","meta16701",-556002471,null)], null);
}));

(cljs.core.async.t_cljs$core$async16700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16700");

(cljs.core.async.t_cljs$core$async16700.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16700.
 */
cljs.core.async.__GT_t_cljs$core$async16700 = (function cljs$core$async$__GT_t_cljs$core$async16700(f,ch,meta16687,_,fn1,meta16701){
return (new cljs.core.async.t_cljs$core$async16700(f,ch,meta16687,_,fn1,meta16701));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16686 = (function (f,ch,meta16687){
this.f = f;
this.ch = ch;
this.meta16687 = meta16687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16688,meta16687__$1){
var self__ = this;
var _16688__$1 = this;
return (new cljs.core.async.t_cljs$core$async16686(self__.f,self__.ch,meta16687__$1));
}));

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16688){
var self__ = this;
var _16688__$1 = this;
return self__.meta16687;
}));

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16700(self__.f,self__.ch,self__.meta16687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16719 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16719) : self__.f.call(null, G__16719));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16687","meta16687",-1836861800,null)], null);
}));

(cljs.core.async.t_cljs$core$async16686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16686");

(cljs.core.async.t_cljs$core$async16686.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16686.
 */
cljs.core.async.__GT_t_cljs$core$async16686 = (function cljs$core$async$__GT_t_cljs$core$async16686(f,ch,meta16687){
return (new cljs.core.async.t_cljs$core$async16686(f,ch,meta16687));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16686(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16727 = (function (f,ch,meta16728){
this.f = f;
this.ch = ch;
this.meta16728 = meta16728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16729,meta16728__$1){
var self__ = this;
var _16729__$1 = this;
return (new cljs.core.async.t_cljs$core$async16727(self__.f,self__.ch,meta16728__$1));
}));

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16729){
var self__ = this;
var _16729__$1 = this;
return self__.meta16728;
}));

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16728","meta16728",435423489,null)], null);
}));

(cljs.core.async.t_cljs$core$async16727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16727");

(cljs.core.async.t_cljs$core$async16727.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16727.
 */
cljs.core.async.__GT_t_cljs$core$async16727 = (function cljs$core$async$__GT_t_cljs$core$async16727(f,ch,meta16728){
return (new cljs.core.async.t_cljs$core$async16727(f,ch,meta16728));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16727(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16738 = (function (p,ch,meta16739){
this.p = p;
this.ch = ch;
this.meta16739 = meta16739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16740,meta16739__$1){
var self__ = this;
var _16740__$1 = this;
return (new cljs.core.async.t_cljs$core$async16738(self__.p,self__.ch,meta16739__$1));
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16740){
var self__ = this;
var _16740__$1 = this;
return self__.meta16739;
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16739","meta16739",-583437524,null)], null);
}));

(cljs.core.async.t_cljs$core$async16738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16738");

(cljs.core.async.t_cljs$core$async16738.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16738.
 */
cljs.core.async.__GT_t_cljs$core$async16738 = (function cljs$core$async$__GT_t_cljs$core$async16738(p,ch,meta16739){
return (new cljs.core.async.t_cljs$core$async16738(p,ch,meta16739));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16738(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16751 = arguments.length;
switch (G__16751) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14064__auto___18625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_16779){
var state_val_16780 = (state_16779[(1)]);
if((state_val_16780 === (7))){
var inst_16775 = (state_16779[(2)]);
var state_16779__$1 = state_16779;
var statearr_16785_18628 = state_16779__$1;
(statearr_16785_18628[(2)] = inst_16775);

(statearr_16785_18628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (1))){
var state_16779__$1 = state_16779;
var statearr_16788_18630 = state_16779__$1;
(statearr_16788_18630[(2)] = null);

(statearr_16788_18630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (4))){
var inst_16761 = (state_16779[(7)]);
var inst_16761__$1 = (state_16779[(2)]);
var inst_16762 = (inst_16761__$1 == null);
var state_16779__$1 = (function (){var statearr_16789 = state_16779;
(statearr_16789[(7)] = inst_16761__$1);

return statearr_16789;
})();
if(cljs.core.truth_(inst_16762)){
var statearr_16790_18636 = state_16779__$1;
(statearr_16790_18636[(1)] = (5));

} else {
var statearr_16791_18637 = state_16779__$1;
(statearr_16791_18637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (6))){
var inst_16761 = (state_16779[(7)]);
var inst_16766 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16761) : p.call(null, inst_16761));
var state_16779__$1 = state_16779;
if(cljs.core.truth_(inst_16766)){
var statearr_16792_18638 = state_16779__$1;
(statearr_16792_18638[(1)] = (8));

} else {
var statearr_16793_18639 = state_16779__$1;
(statearr_16793_18639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (3))){
var inst_16777 = (state_16779[(2)]);
var state_16779__$1 = state_16779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16779__$1,inst_16777);
} else {
if((state_val_16780 === (2))){
var state_16779__$1 = state_16779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16779__$1,(4),ch);
} else {
if((state_val_16780 === (11))){
var inst_16769 = (state_16779[(2)]);
var state_16779__$1 = state_16779;
var statearr_16796_18645 = state_16779__$1;
(statearr_16796_18645[(2)] = inst_16769);

(statearr_16796_18645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (9))){
var state_16779__$1 = state_16779;
var statearr_16800_18646 = state_16779__$1;
(statearr_16800_18646[(2)] = null);

(statearr_16800_18646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (5))){
var inst_16764 = cljs.core.async.close_BANG_(out);
var state_16779__$1 = state_16779;
var statearr_16801_18647 = state_16779__$1;
(statearr_16801_18647[(2)] = inst_16764);

(statearr_16801_18647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (10))){
var inst_16772 = (state_16779[(2)]);
var state_16779__$1 = (function (){var statearr_16802 = state_16779;
(statearr_16802[(8)] = inst_16772);

return statearr_16802;
})();
var statearr_16803_18648 = state_16779__$1;
(statearr_16803_18648[(2)] = null);

(statearr_16803_18648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (8))){
var inst_16761 = (state_16779[(7)]);
var state_16779__$1 = state_16779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16779__$1,(11),out,inst_16761);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_16804 = [null,null,null,null,null,null,null,null,null];
(statearr_16804[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_16804[(1)] = (1));

return statearr_16804;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_16779){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_16779);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e16806){var ex__13688__auto__ = e16806;
var statearr_16811_18649 = state_16779;
(statearr_16811_18649[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_16779[(4)]))){
var statearr_16812_18650 = state_16779;
(statearr_16812_18650[(1)] = cljs.core.first((state_16779[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18658 = state_16779;
state_16779 = G__18658;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_16779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_16779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_16816 = f__14066__auto__();
(statearr_16816[(6)] = c__14064__auto___18625);

return statearr_16816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16821 = arguments.length;
switch (G__16821) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14064__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_16896){
var state_val_16901 = (state_16896[(1)]);
if((state_val_16901 === (7))){
var inst_16891 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16907_18673 = state_16896__$1;
(statearr_16907_18673[(2)] = inst_16891);

(statearr_16907_18673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (20))){
var inst_16860 = (state_16896[(7)]);
var inst_16871 = (state_16896[(2)]);
var inst_16872 = cljs.core.next(inst_16860);
var inst_16841 = inst_16872;
var inst_16842 = null;
var inst_16843 = (0);
var inst_16844 = (0);
var state_16896__$1 = (function (){var statearr_16912 = state_16896;
(statearr_16912[(8)] = inst_16841);

(statearr_16912[(9)] = inst_16842);

(statearr_16912[(10)] = inst_16871);

(statearr_16912[(11)] = inst_16844);

(statearr_16912[(12)] = inst_16843);

return statearr_16912;
})();
var statearr_16913_18675 = state_16896__$1;
(statearr_16913_18675[(2)] = null);

(statearr_16913_18675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (1))){
var state_16896__$1 = state_16896;
var statearr_16918_18676 = state_16896__$1;
(statearr_16918_18676[(2)] = null);

(statearr_16918_18676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (4))){
var inst_16829 = (state_16896[(13)]);
var inst_16829__$1 = (state_16896[(2)]);
var inst_16831 = (inst_16829__$1 == null);
var state_16896__$1 = (function (){var statearr_16921 = state_16896;
(statearr_16921[(13)] = inst_16829__$1);

return statearr_16921;
})();
if(cljs.core.truth_(inst_16831)){
var statearr_16922_18681 = state_16896__$1;
(statearr_16922_18681[(1)] = (5));

} else {
var statearr_16923_18682 = state_16896__$1;
(statearr_16923_18682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (15))){
var state_16896__$1 = state_16896;
var statearr_16927_18683 = state_16896__$1;
(statearr_16927_18683[(2)] = null);

(statearr_16927_18683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (21))){
var state_16896__$1 = state_16896;
var statearr_16929_18684 = state_16896__$1;
(statearr_16929_18684[(2)] = null);

(statearr_16929_18684[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (13))){
var inst_16841 = (state_16896[(8)]);
var inst_16842 = (state_16896[(9)]);
var inst_16844 = (state_16896[(11)]);
var inst_16843 = (state_16896[(12)]);
var inst_16853 = (state_16896[(2)]);
var inst_16856 = (inst_16844 + (1));
var tmp16924 = inst_16841;
var tmp16925 = inst_16842;
var tmp16926 = inst_16843;
var inst_16841__$1 = tmp16924;
var inst_16842__$1 = tmp16925;
var inst_16843__$1 = tmp16926;
var inst_16844__$1 = inst_16856;
var state_16896__$1 = (function (){var statearr_16931 = state_16896;
(statearr_16931[(8)] = inst_16841__$1);

(statearr_16931[(9)] = inst_16842__$1);

(statearr_16931[(11)] = inst_16844__$1);

(statearr_16931[(14)] = inst_16853);

(statearr_16931[(12)] = inst_16843__$1);

return statearr_16931;
})();
var statearr_16934_18696 = state_16896__$1;
(statearr_16934_18696[(2)] = null);

(statearr_16934_18696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (22))){
var state_16896__$1 = state_16896;
var statearr_16950_18703 = state_16896__$1;
(statearr_16950_18703[(2)] = null);

(statearr_16950_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (6))){
var inst_16829 = (state_16896[(13)]);
var inst_16839 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16829) : f.call(null, inst_16829));
var inst_16840 = cljs.core.seq(inst_16839);
var inst_16841 = inst_16840;
var inst_16842 = null;
var inst_16843 = (0);
var inst_16844 = (0);
var state_16896__$1 = (function (){var statearr_16958 = state_16896;
(statearr_16958[(8)] = inst_16841);

(statearr_16958[(9)] = inst_16842);

(statearr_16958[(11)] = inst_16844);

(statearr_16958[(12)] = inst_16843);

return statearr_16958;
})();
var statearr_16960_18710 = state_16896__$1;
(statearr_16960_18710[(2)] = null);

(statearr_16960_18710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (17))){
var inst_16860 = (state_16896[(7)]);
var inst_16864 = cljs.core.chunk_first(inst_16860);
var inst_16865 = cljs.core.chunk_rest(inst_16860);
var inst_16866 = cljs.core.count(inst_16864);
var inst_16841 = inst_16865;
var inst_16842 = inst_16864;
var inst_16843 = inst_16866;
var inst_16844 = (0);
var state_16896__$1 = (function (){var statearr_16962 = state_16896;
(statearr_16962[(8)] = inst_16841);

(statearr_16962[(9)] = inst_16842);

(statearr_16962[(11)] = inst_16844);

(statearr_16962[(12)] = inst_16843);

return statearr_16962;
})();
var statearr_16963_18711 = state_16896__$1;
(statearr_16963_18711[(2)] = null);

(statearr_16963_18711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (3))){
var inst_16893 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16896__$1,inst_16893);
} else {
if((state_val_16901 === (12))){
var inst_16881 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16971_18716 = state_16896__$1;
(statearr_16971_18716[(2)] = inst_16881);

(statearr_16971_18716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (2))){
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16896__$1,(4),in$);
} else {
if((state_val_16901 === (23))){
var inst_16889 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16975_18737 = state_16896__$1;
(statearr_16975_18737[(2)] = inst_16889);

(statearr_16975_18737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (19))){
var inst_16875 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16976_18738 = state_16896__$1;
(statearr_16976_18738[(2)] = inst_16875);

(statearr_16976_18738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (11))){
var inst_16841 = (state_16896[(8)]);
var inst_16860 = (state_16896[(7)]);
var inst_16860__$1 = cljs.core.seq(inst_16841);
var state_16896__$1 = (function (){var statearr_16980 = state_16896;
(statearr_16980[(7)] = inst_16860__$1);

return statearr_16980;
})();
if(inst_16860__$1){
var statearr_16981_18745 = state_16896__$1;
(statearr_16981_18745[(1)] = (14));

} else {
var statearr_16982_18746 = state_16896__$1;
(statearr_16982_18746[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (9))){
var inst_16883 = (state_16896[(2)]);
var inst_16884 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16896__$1 = (function (){var statearr_16983 = state_16896;
(statearr_16983[(15)] = inst_16883);

return statearr_16983;
})();
if(cljs.core.truth_(inst_16884)){
var statearr_16984_18753 = state_16896__$1;
(statearr_16984_18753[(1)] = (21));

} else {
var statearr_16985_18759 = state_16896__$1;
(statearr_16985_18759[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (5))){
var inst_16833 = cljs.core.async.close_BANG_(out);
var state_16896__$1 = state_16896;
var statearr_16987_18761 = state_16896__$1;
(statearr_16987_18761[(2)] = inst_16833);

(statearr_16987_18761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (14))){
var inst_16860 = (state_16896[(7)]);
var inst_16862 = cljs.core.chunked_seq_QMARK_(inst_16860);
var state_16896__$1 = state_16896;
if(inst_16862){
var statearr_16988_18767 = state_16896__$1;
(statearr_16988_18767[(1)] = (17));

} else {
var statearr_16990_18770 = state_16896__$1;
(statearr_16990_18770[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (16))){
var inst_16878 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16992_18772 = state_16896__$1;
(statearr_16992_18772[(2)] = inst_16878);

(statearr_16992_18772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (10))){
var inst_16842 = (state_16896[(9)]);
var inst_16844 = (state_16896[(11)]);
var inst_16851 = cljs.core._nth(inst_16842,inst_16844);
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16896__$1,(13),out,inst_16851);
} else {
if((state_val_16901 === (18))){
var inst_16860 = (state_16896[(7)]);
var inst_16869 = cljs.core.first(inst_16860);
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16896__$1,(20),out,inst_16869);
} else {
if((state_val_16901 === (8))){
var inst_16844 = (state_16896[(11)]);
var inst_16843 = (state_16896[(12)]);
var inst_16847 = (inst_16844 < inst_16843);
var inst_16848 = inst_16847;
var state_16896__$1 = state_16896;
if(cljs.core.truth_(inst_16848)){
var statearr_16999_18775 = state_16896__$1;
(statearr_16999_18775[(1)] = (10));

} else {
var statearr_17000_18776 = state_16896__$1;
(statearr_17000_18776[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13685__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13685__auto____0 = (function (){
var statearr_17002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17002[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13685__auto__);

(statearr_17002[(1)] = (1));

return statearr_17002;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13685__auto____1 = (function (state_16896){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_16896);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e17004){var ex__13688__auto__ = e17004;
var statearr_17005_18779 = state_16896;
(statearr_17005_18779[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_16896[(4)]))){
var statearr_17006_18780 = state_16896;
(statearr_17006_18780[(1)] = cljs.core.first((state_16896[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18781 = state_16896;
state_16896 = G__18781;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13685__auto__ = function(state_16896){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13685__auto____1.call(this,state_16896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13685__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13685__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_17007 = f__14066__auto__();
(statearr_17007[(6)] = c__14064__auto__);

return statearr_17007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));

return c__14064__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17017 = arguments.length;
switch (G__17017) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17026 = arguments.length;
switch (G__17026) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17033 = arguments.length;
switch (G__17033) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14064__auto___18803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_17063){
var state_val_17065 = (state_17063[(1)]);
if((state_val_17065 === (7))){
var inst_17058 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
var statearr_17092_18804 = state_17063__$1;
(statearr_17092_18804[(2)] = inst_17058);

(statearr_17092_18804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (1))){
var inst_17037 = null;
var state_17063__$1 = (function (){var statearr_17093 = state_17063;
(statearr_17093[(7)] = inst_17037);

return statearr_17093;
})();
var statearr_17094_18805 = state_17063__$1;
(statearr_17094_18805[(2)] = null);

(statearr_17094_18805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (4))){
var inst_17040 = (state_17063[(8)]);
var inst_17040__$1 = (state_17063[(2)]);
var inst_17043 = (inst_17040__$1 == null);
var inst_17044 = cljs.core.not(inst_17043);
var state_17063__$1 = (function (){var statearr_17096 = state_17063;
(statearr_17096[(8)] = inst_17040__$1);

return statearr_17096;
})();
if(inst_17044){
var statearr_17098_18807 = state_17063__$1;
(statearr_17098_18807[(1)] = (5));

} else {
var statearr_17099_18808 = state_17063__$1;
(statearr_17099_18808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (6))){
var state_17063__$1 = state_17063;
var statearr_17103_18813 = state_17063__$1;
(statearr_17103_18813[(2)] = null);

(statearr_17103_18813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (3))){
var inst_17060 = (state_17063[(2)]);
var inst_17061 = cljs.core.async.close_BANG_(out);
var state_17063__$1 = (function (){var statearr_17106 = state_17063;
(statearr_17106[(9)] = inst_17060);

return statearr_17106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17063__$1,inst_17061);
} else {
if((state_val_17065 === (2))){
var state_17063__$1 = state_17063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17063__$1,(4),ch);
} else {
if((state_val_17065 === (11))){
var inst_17040 = (state_17063[(8)]);
var inst_17052 = (state_17063[(2)]);
var inst_17037 = inst_17040;
var state_17063__$1 = (function (){var statearr_17110 = state_17063;
(statearr_17110[(10)] = inst_17052);

(statearr_17110[(7)] = inst_17037);

return statearr_17110;
})();
var statearr_17111_18832 = state_17063__$1;
(statearr_17111_18832[(2)] = null);

(statearr_17111_18832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (9))){
var inst_17040 = (state_17063[(8)]);
var state_17063__$1 = state_17063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17063__$1,(11),out,inst_17040);
} else {
if((state_val_17065 === (5))){
var inst_17040 = (state_17063[(8)]);
var inst_17037 = (state_17063[(7)]);
var inst_17046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17040,inst_17037);
var state_17063__$1 = state_17063;
if(inst_17046){
var statearr_17115_18835 = state_17063__$1;
(statearr_17115_18835[(1)] = (8));

} else {
var statearr_17117_18836 = state_17063__$1;
(statearr_17117_18836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (10))){
var inst_17055 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
var statearr_17118_18837 = state_17063__$1;
(statearr_17118_18837[(2)] = inst_17055);

(statearr_17118_18837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (8))){
var inst_17037 = (state_17063[(7)]);
var tmp17113 = inst_17037;
var inst_17037__$1 = tmp17113;
var state_17063__$1 = (function (){var statearr_17121 = state_17063;
(statearr_17121[(7)] = inst_17037__$1);

return statearr_17121;
})();
var statearr_17122_18838 = state_17063__$1;
(statearr_17122_18838[(2)] = null);

(statearr_17122_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_17126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17126[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_17126[(1)] = (1));

return statearr_17126;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_17063){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_17063);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e17131){var ex__13688__auto__ = e17131;
var statearr_17132_18843 = state_17063;
(statearr_17132_18843[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_17063[(4)]))){
var statearr_17134_18844 = state_17063;
(statearr_17134_18844[(1)] = cljs.core.first((state_17063[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18846 = state_17063;
state_17063 = G__18846;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_17063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_17063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_17137 = f__14066__auto__();
(statearr_17137[(6)] = c__14064__auto___18803);

return statearr_17137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17144 = arguments.length;
switch (G__17144) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14064__auto___18849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_17190){
var state_val_17191 = (state_17190[(1)]);
if((state_val_17191 === (7))){
var inst_17183 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17196_18850 = state_17190__$1;
(statearr_17196_18850[(2)] = inst_17183);

(statearr_17196_18850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (1))){
var inst_17147 = (new Array(n));
var inst_17148 = inst_17147;
var inst_17149 = (0);
var state_17190__$1 = (function (){var statearr_17197 = state_17190;
(statearr_17197[(7)] = inst_17148);

(statearr_17197[(8)] = inst_17149);

return statearr_17197;
})();
var statearr_17198_18851 = state_17190__$1;
(statearr_17198_18851[(2)] = null);

(statearr_17198_18851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (4))){
var inst_17152 = (state_17190[(9)]);
var inst_17152__$1 = (state_17190[(2)]);
var inst_17153 = (inst_17152__$1 == null);
var inst_17154 = cljs.core.not(inst_17153);
var state_17190__$1 = (function (){var statearr_17199 = state_17190;
(statearr_17199[(9)] = inst_17152__$1);

return statearr_17199;
})();
if(inst_17154){
var statearr_17200_18855 = state_17190__$1;
(statearr_17200_18855[(1)] = (5));

} else {
var statearr_17201_18856 = state_17190__$1;
(statearr_17201_18856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (15))){
var inst_17176 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17202_18858 = state_17190__$1;
(statearr_17202_18858[(2)] = inst_17176);

(statearr_17202_18858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (13))){
var state_17190__$1 = state_17190;
var statearr_17205_18862 = state_17190__$1;
(statearr_17205_18862[(2)] = null);

(statearr_17205_18862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (6))){
var inst_17149 = (state_17190[(8)]);
var inst_17172 = (inst_17149 > (0));
var state_17190__$1 = state_17190;
if(cljs.core.truth_(inst_17172)){
var statearr_17210_18866 = state_17190__$1;
(statearr_17210_18866[(1)] = (12));

} else {
var statearr_17212_18867 = state_17190__$1;
(statearr_17212_18867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (3))){
var inst_17185 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17190__$1,inst_17185);
} else {
if((state_val_17191 === (12))){
var inst_17148 = (state_17190[(7)]);
var inst_17174 = cljs.core.vec(inst_17148);
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17190__$1,(15),out,inst_17174);
} else {
if((state_val_17191 === (2))){
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17190__$1,(4),ch);
} else {
if((state_val_17191 === (11))){
var inst_17166 = (state_17190[(2)]);
var inst_17167 = (new Array(n));
var inst_17148 = inst_17167;
var inst_17149 = (0);
var state_17190__$1 = (function (){var statearr_17220 = state_17190;
(statearr_17220[(7)] = inst_17148);

(statearr_17220[(10)] = inst_17166);

(statearr_17220[(8)] = inst_17149);

return statearr_17220;
})();
var statearr_17221_18869 = state_17190__$1;
(statearr_17221_18869[(2)] = null);

(statearr_17221_18869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (9))){
var inst_17148 = (state_17190[(7)]);
var inst_17164 = cljs.core.vec(inst_17148);
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17190__$1,(11),out,inst_17164);
} else {
if((state_val_17191 === (5))){
var inst_17148 = (state_17190[(7)]);
var inst_17158 = (state_17190[(11)]);
var inst_17149 = (state_17190[(8)]);
var inst_17152 = (state_17190[(9)]);
var inst_17157 = (inst_17148[inst_17149] = inst_17152);
var inst_17158__$1 = (inst_17149 + (1));
var inst_17159 = (inst_17158__$1 < n);
var state_17190__$1 = (function (){var statearr_17226 = state_17190;
(statearr_17226[(12)] = inst_17157);

(statearr_17226[(11)] = inst_17158__$1);

return statearr_17226;
})();
if(cljs.core.truth_(inst_17159)){
var statearr_17227_18872 = state_17190__$1;
(statearr_17227_18872[(1)] = (8));

} else {
var statearr_17232_18873 = state_17190__$1;
(statearr_17232_18873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (14))){
var inst_17179 = (state_17190[(2)]);
var inst_17180 = cljs.core.async.close_BANG_(out);
var state_17190__$1 = (function (){var statearr_17234 = state_17190;
(statearr_17234[(13)] = inst_17179);

return statearr_17234;
})();
var statearr_17235_18874 = state_17190__$1;
(statearr_17235_18874[(2)] = inst_17180);

(statearr_17235_18874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (10))){
var inst_17170 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17237_18875 = state_17190__$1;
(statearr_17237_18875[(2)] = inst_17170);

(statearr_17237_18875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (8))){
var inst_17148 = (state_17190[(7)]);
var inst_17158 = (state_17190[(11)]);
var tmp17233 = inst_17148;
var inst_17148__$1 = tmp17233;
var inst_17149 = inst_17158;
var state_17190__$1 = (function (){var statearr_17241 = state_17190;
(statearr_17241[(7)] = inst_17148__$1);

(statearr_17241[(8)] = inst_17149);

return statearr_17241;
})();
var statearr_17242_18880 = state_17190__$1;
(statearr_17242_18880[(2)] = null);

(statearr_17242_18880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_17243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17243[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_17243[(1)] = (1));

return statearr_17243;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_17190){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_17190);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e17244){var ex__13688__auto__ = e17244;
var statearr_17245_18885 = state_17190;
(statearr_17245_18885[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_17190[(4)]))){
var statearr_17246_18886 = state_17190;
(statearr_17246_18886[(1)] = cljs.core.first((state_17190[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18887 = state_17190;
state_17190 = G__18887;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_17190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_17190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_17247 = f__14066__auto__();
(statearr_17247[(6)] = c__14064__auto___18849);

return statearr_17247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17254 = arguments.length;
switch (G__17254) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14064__auto___18892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14066__auto__ = (function (){var switch__13684__auto__ = (function (state_17309){
var state_val_17310 = (state_17309[(1)]);
if((state_val_17310 === (7))){
var inst_17305 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17313_18893 = state_17309__$1;
(statearr_17313_18893[(2)] = inst_17305);

(statearr_17313_18893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (1))){
var inst_17261 = [];
var inst_17262 = inst_17261;
var inst_17263 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17309__$1 = (function (){var statearr_17315 = state_17309;
(statearr_17315[(7)] = inst_17263);

(statearr_17315[(8)] = inst_17262);

return statearr_17315;
})();
var statearr_17316_18894 = state_17309__$1;
(statearr_17316_18894[(2)] = null);

(statearr_17316_18894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (4))){
var inst_17266 = (state_17309[(9)]);
var inst_17266__$1 = (state_17309[(2)]);
var inst_17267 = (inst_17266__$1 == null);
var inst_17268 = cljs.core.not(inst_17267);
var state_17309__$1 = (function (){var statearr_17317 = state_17309;
(statearr_17317[(9)] = inst_17266__$1);

return statearr_17317;
})();
if(inst_17268){
var statearr_17318_18905 = state_17309__$1;
(statearr_17318_18905[(1)] = (5));

} else {
var statearr_17319_18906 = state_17309__$1;
(statearr_17319_18906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (15))){
var inst_17262 = (state_17309[(8)]);
var inst_17297 = cljs.core.vec(inst_17262);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17309__$1,(18),out,inst_17297);
} else {
if((state_val_17310 === (13))){
var inst_17292 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17322_18908 = state_17309__$1;
(statearr_17322_18908[(2)] = inst_17292);

(statearr_17322_18908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (6))){
var inst_17262 = (state_17309[(8)]);
var inst_17294 = inst_17262.length;
var inst_17295 = (inst_17294 > (0));
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17295)){
var statearr_17327_18911 = state_17309__$1;
(statearr_17327_18911[(1)] = (15));

} else {
var statearr_17328_18912 = state_17309__$1;
(statearr_17328_18912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (17))){
var inst_17302 = (state_17309[(2)]);
var inst_17303 = cljs.core.async.close_BANG_(out);
var state_17309__$1 = (function (){var statearr_17329 = state_17309;
(statearr_17329[(10)] = inst_17302);

return statearr_17329;
})();
var statearr_17330_18914 = state_17309__$1;
(statearr_17330_18914[(2)] = inst_17303);

(statearr_17330_18914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (3))){
var inst_17307 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17309__$1,inst_17307);
} else {
if((state_val_17310 === (12))){
var inst_17262 = (state_17309[(8)]);
var inst_17283 = cljs.core.vec(inst_17262);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17309__$1,(14),out,inst_17283);
} else {
if((state_val_17310 === (2))){
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17309__$1,(4),ch);
} else {
if((state_val_17310 === (11))){
var inst_17266 = (state_17309[(9)]);
var inst_17270 = (state_17309[(11)]);
var inst_17262 = (state_17309[(8)]);
var inst_17279 = inst_17262.push(inst_17266);
var tmp17334 = inst_17262;
var inst_17262__$1 = tmp17334;
var inst_17263 = inst_17270;
var state_17309__$1 = (function (){var statearr_17339 = state_17309;
(statearr_17339[(7)] = inst_17263);

(statearr_17339[(12)] = inst_17279);

(statearr_17339[(8)] = inst_17262__$1);

return statearr_17339;
})();
var statearr_17340_18935 = state_17309__$1;
(statearr_17340_18935[(2)] = null);

(statearr_17340_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (9))){
var inst_17263 = (state_17309[(7)]);
var inst_17275 = cljs.core.keyword_identical_QMARK_(inst_17263,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17309__$1 = state_17309;
var statearr_17342_18944 = state_17309__$1;
(statearr_17342_18944[(2)] = inst_17275);

(statearr_17342_18944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (5))){
var inst_17271 = (state_17309[(13)]);
var inst_17266 = (state_17309[(9)]);
var inst_17270 = (state_17309[(11)]);
var inst_17263 = (state_17309[(7)]);
var inst_17270__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17266) : f.call(null, inst_17266));
var inst_17271__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17270__$1,inst_17263);
var state_17309__$1 = (function (){var statearr_17344 = state_17309;
(statearr_17344[(13)] = inst_17271__$1);

(statearr_17344[(11)] = inst_17270__$1);

return statearr_17344;
})();
if(inst_17271__$1){
var statearr_17345_18960 = state_17309__$1;
(statearr_17345_18960[(1)] = (8));

} else {
var statearr_17346_18961 = state_17309__$1;
(statearr_17346_18961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (14))){
var inst_17266 = (state_17309[(9)]);
var inst_17270 = (state_17309[(11)]);
var inst_17285 = (state_17309[(2)]);
var inst_17287 = [];
var inst_17288 = inst_17287.push(inst_17266);
var inst_17262 = inst_17287;
var inst_17263 = inst_17270;
var state_17309__$1 = (function (){var statearr_17348 = state_17309;
(statearr_17348[(14)] = inst_17285);

(statearr_17348[(7)] = inst_17263);

(statearr_17348[(15)] = inst_17288);

(statearr_17348[(8)] = inst_17262);

return statearr_17348;
})();
var statearr_17349_18966 = state_17309__$1;
(statearr_17349_18966[(2)] = null);

(statearr_17349_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (16))){
var state_17309__$1 = state_17309;
var statearr_17354_18968 = state_17309__$1;
(statearr_17354_18968[(2)] = null);

(statearr_17354_18968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (10))){
var inst_17277 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17277)){
var statearr_17356_18970 = state_17309__$1;
(statearr_17356_18970[(1)] = (11));

} else {
var statearr_17357_18971 = state_17309__$1;
(statearr_17357_18971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (18))){
var inst_17299 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17358_18973 = state_17309__$1;
(statearr_17358_18973[(2)] = inst_17299);

(statearr_17358_18973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (8))){
var inst_17271 = (state_17309[(13)]);
var state_17309__$1 = state_17309;
var statearr_17360_18974 = state_17309__$1;
(statearr_17360_18974[(2)] = inst_17271);

(statearr_17360_18974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13685__auto__ = null;
var cljs$core$async$state_machine__13685__auto____0 = (function (){
var statearr_17363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17363[(0)] = cljs$core$async$state_machine__13685__auto__);

(statearr_17363[(1)] = (1));

return statearr_17363;
});
var cljs$core$async$state_machine__13685__auto____1 = (function (state_17309){
while(true){
var ret_value__13686__auto__ = (function (){try{while(true){
var result__13687__auto__ = switch__13684__auto__(state_17309);
if(cljs.core.keyword_identical_QMARK_(result__13687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13687__auto__;
}
break;
}
}catch (e17365){var ex__13688__auto__ = e17365;
var statearr_17366_18979 = state_17309;
(statearr_17366_18979[(2)] = ex__13688__auto__);


if(cljs.core.seq((state_17309[(4)]))){
var statearr_17367_18984 = state_17309;
(statearr_17367_18984[(1)] = cljs.core.first((state_17309[(4)])));

} else {
throw ex__13688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18989 = state_17309;
state_17309 = G__18989;
continue;
} else {
return ret_value__13686__auto__;
}
break;
}
});
cljs$core$async$state_machine__13685__auto__ = function(state_17309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13685__auto____1.call(this,state_17309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13685__auto____0;
cljs$core$async$state_machine__13685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13685__auto____1;
return cljs$core$async$state_machine__13685__auto__;
})()
})();
var state__14068__auto__ = (function (){var statearr_17369 = f__14066__auto__();
(statearr_17369[(6)] = c__14064__auto___18892);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14068__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
