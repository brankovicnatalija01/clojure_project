goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19053){
var map__19054 = p__19053;
var map__19054__$1 = cljs.core.__destructure_map(map__19054);
var m = map__19054__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19054__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19074_19479 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19075_19480 = null;
var count__19076_19481 = (0);
var i__19077_19482 = (0);
while(true){
if((i__19077_19482 < count__19076_19481)){
var f_19483 = chunk__19075_19480.cljs$core$IIndexed$_nth$arity$2(null, i__19077_19482);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19483], 0));


var G__19484 = seq__19074_19479;
var G__19485 = chunk__19075_19480;
var G__19486 = count__19076_19481;
var G__19487 = (i__19077_19482 + (1));
seq__19074_19479 = G__19484;
chunk__19075_19480 = G__19485;
count__19076_19481 = G__19486;
i__19077_19482 = G__19487;
continue;
} else {
var temp__5804__auto___19488 = cljs.core.seq(seq__19074_19479);
if(temp__5804__auto___19488){
var seq__19074_19490__$1 = temp__5804__auto___19488;
if(cljs.core.chunked_seq_QMARK_(seq__19074_19490__$1)){
var c__5525__auto___19491 = cljs.core.chunk_first(seq__19074_19490__$1);
var G__19492 = cljs.core.chunk_rest(seq__19074_19490__$1);
var G__19493 = c__5525__auto___19491;
var G__19494 = cljs.core.count(c__5525__auto___19491);
var G__19495 = (0);
seq__19074_19479 = G__19492;
chunk__19075_19480 = G__19493;
count__19076_19481 = G__19494;
i__19077_19482 = G__19495;
continue;
} else {
var f_19496 = cljs.core.first(seq__19074_19490__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19496], 0));


var G__19497 = cljs.core.next(seq__19074_19490__$1);
var G__19498 = null;
var G__19499 = (0);
var G__19500 = (0);
seq__19074_19479 = G__19497;
chunk__19075_19480 = G__19498;
count__19076_19481 = G__19499;
i__19077_19482 = G__19500;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19501 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19501], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19501)))?cljs.core.second(arglists_19501):arglists_19501)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19114_19509 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19115_19510 = null;
var count__19116_19511 = (0);
var i__19117_19512 = (0);
while(true){
if((i__19117_19512 < count__19116_19511)){
var vec__19163_19513 = chunk__19115_19510.cljs$core$IIndexed$_nth$arity$2(null, i__19117_19512);
var name_19514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19163_19513,(0),null);
var map__19166_19515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19163_19513,(1),null);
var map__19166_19516__$1 = cljs.core.__destructure_map(map__19166_19515);
var doc_19517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166_19516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166_19516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19514], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19518], 0));

if(cljs.core.truth_(doc_19517)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19517], 0));
} else {
}


var G__19527 = seq__19114_19509;
var G__19528 = chunk__19115_19510;
var G__19529 = count__19116_19511;
var G__19530 = (i__19117_19512 + (1));
seq__19114_19509 = G__19527;
chunk__19115_19510 = G__19528;
count__19116_19511 = G__19529;
i__19117_19512 = G__19530;
continue;
} else {
var temp__5804__auto___19531 = cljs.core.seq(seq__19114_19509);
if(temp__5804__auto___19531){
var seq__19114_19532__$1 = temp__5804__auto___19531;
if(cljs.core.chunked_seq_QMARK_(seq__19114_19532__$1)){
var c__5525__auto___19533 = cljs.core.chunk_first(seq__19114_19532__$1);
var G__19534 = cljs.core.chunk_rest(seq__19114_19532__$1);
var G__19535 = c__5525__auto___19533;
var G__19536 = cljs.core.count(c__5525__auto___19533);
var G__19537 = (0);
seq__19114_19509 = G__19534;
chunk__19115_19510 = G__19535;
count__19116_19511 = G__19536;
i__19117_19512 = G__19537;
continue;
} else {
var vec__19196_19538 = cljs.core.first(seq__19114_19532__$1);
var name_19539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196_19538,(0),null);
var map__19199_19540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196_19538,(1),null);
var map__19199_19541__$1 = cljs.core.__destructure_map(map__19199_19540);
var doc_19542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199_19541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199_19541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19539], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19543], 0));

if(cljs.core.truth_(doc_19542)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19542], 0));
} else {
}


var G__19548 = cljs.core.next(seq__19114_19532__$1);
var G__19549 = null;
var G__19550 = (0);
var G__19551 = (0);
seq__19114_19509 = G__19548;
chunk__19115_19510 = G__19549;
count__19116_19511 = G__19550;
i__19117_19512 = G__19551;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19205 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19221 = null;
var count__19222 = (0);
var i__19223 = (0);
while(true){
if((i__19223 < count__19222)){
var role = chunk__19221.cljs$core$IIndexed$_nth$arity$2(null, i__19223);
var temp__5804__auto___19554__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19554__$1)){
var spec_19555 = temp__5804__auto___19554__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19555)], 0));
} else {
}


var G__19558 = seq__19205;
var G__19559 = chunk__19221;
var G__19560 = count__19222;
var G__19561 = (i__19223 + (1));
seq__19205 = G__19558;
chunk__19221 = G__19559;
count__19222 = G__19560;
i__19223 = G__19561;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19205);
if(temp__5804__auto____$1){
var seq__19205__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19205__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19205__$1);
var G__19564 = cljs.core.chunk_rest(seq__19205__$1);
var G__19565 = c__5525__auto__;
var G__19566 = cljs.core.count(c__5525__auto__);
var G__19567 = (0);
seq__19205 = G__19564;
chunk__19221 = G__19565;
count__19222 = G__19566;
i__19223 = G__19567;
continue;
} else {
var role = cljs.core.first(seq__19205__$1);
var temp__5804__auto___19568__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19568__$2)){
var spec_19569 = temp__5804__auto___19568__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19569)], 0));
} else {
}


var G__19570 = cljs.core.next(seq__19205__$1);
var G__19571 = null;
var G__19572 = (0);
var G__19573 = (0);
seq__19205 = G__19570;
chunk__19221 = G__19571;
count__19222 = G__19572;
i__19223 = G__19573;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19286 = datafied_throwable;
var map__19286__$1 = cljs.core.__destructure_map(map__19286);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19286__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19287 = cljs.core.last(via);
var map__19287__$1 = cljs.core.__destructure_map(map__19287);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19287__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19287__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19288 = data;
var map__19288__$1 = cljs.core.__destructure_map(map__19288);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19289 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19289__$1 = cljs.core.__destructure_map(map__19289);
var top_data = map__19289__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19300 = phase;
var G__19300__$1 = (((G__19300 instanceof cljs.core.Keyword))?G__19300.fqn:null);
switch (G__19300__$1) {
case "read-source":
var map__19301 = data;
var map__19301__$1 = cljs.core.__destructure_map(map__19301);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19301__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19301__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19315 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19315__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19315,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19315);
var G__19315__$2 = (cljs.core.truth_((function (){var fexpr__19324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19324.cljs$core$IFn$_invoke$arity$1 ? fexpr__19324.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19324.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19315__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19315__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19315__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19333 = top_data;
var G__19333__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19333);
var G__19333__$2 = (cljs.core.truth_((function (){var fexpr__19339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19339.cljs$core$IFn$_invoke$arity$1 ? fexpr__19339.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19339.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19333__$1);
var G__19333__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19333__$2);
var G__19333__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19333__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19333__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19356 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(3),null);
var G__19360 = top_data;
var G__19360__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19360);
var G__19360__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19360__$1);
var G__19360__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19360__$2);
var G__19360__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19360__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19360__$4;
}

break;
case "execution":
var vec__19377 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19377,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19377,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19377,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19377,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19272_SHARP_){
var or__5002__auto__ = (p1__19272_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19388 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19388.cljs$core$IFn$_invoke$arity$1 ? fexpr__19388.cljs$core$IFn$_invoke$arity$1(p1__19272_SHARP_) : fexpr__19388.call(null, p1__19272_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19403 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19403__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19403);
var G__19403__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19403__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19403__$1);
var G__19403__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19403__$2);
var G__19403__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19403__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19403__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19403__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19403__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19300__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19417){
var map__19418 = p__19417;
var map__19418__$1 = cljs.core.__destructure_map(map__19418);
var triage_data = map__19418__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19420 = phase;
var G__19420__$1 = (((G__19420 instanceof cljs.core.Keyword))?G__19420.fqn:null);
switch (G__19420__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19422 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19424 = loc;
var G__19425 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19430_19618 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19431_19619 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19432_19620 = true;
var _STAR_print_fn_STAR__temp_val__19433_19621 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19432_19620);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19433_19621);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19415_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19415_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19431_19619);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19430_19618);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19422,G__19423,G__19424,G__19425) : format.call(null, G__19422,G__19423,G__19424,G__19425));

break;
case "macroexpansion":
var G__19443 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19444 = cause_type;
var G__19445 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19446 = loc;
var G__19447 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19443,G__19444,G__19445,G__19446,G__19447) : format.call(null, G__19443,G__19444,G__19445,G__19446,G__19447));

break;
case "compile-syntax-check":
var G__19448 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19449 = cause_type;
var G__19450 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19451 = loc;
var G__19452 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19448,G__19449,G__19450,G__19451,G__19452) : format.call(null, G__19448,G__19449,G__19450,G__19451,G__19452));

break;
case "compilation":
var G__19453 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19454 = cause_type;
var G__19455 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19456 = loc;
var G__19457 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19453,G__19454,G__19455,G__19456,G__19457) : format.call(null, G__19453,G__19454,G__19455,G__19456,G__19457));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19458 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19459 = symbol;
var G__19460 = loc;
var G__19461 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19466_19638 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19467_19639 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19468_19640 = true;
var _STAR_print_fn_STAR__temp_val__19469_19641 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19468_19640);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19469_19641);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19416_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19467_19639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19466_19638);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19458,G__19459,G__19460,G__19461) : format.call(null, G__19458,G__19459,G__19460,G__19461));
} else {
var G__19471 = "Execution error%s at %s(%s).\n%s\n";
var G__19472 = cause_type;
var G__19473 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19474 = loc;
var G__19475 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19471,G__19472,G__19473,G__19474,G__19475) : format.call(null, G__19471,G__19472,G__19473,G__19474,G__19475));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19420__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
