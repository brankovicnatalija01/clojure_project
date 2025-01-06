goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12020 = e.target.readyState;
var fexpr__12019 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12019.cljs$core$IFn$_invoke$arity$1 ? fexpr__12019.cljs$core$IFn$_invoke$arity$1(G__12020) : fexpr__12019.call(null, G__12020));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null, "xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12022,handler){
var map__12023 = p__12022;
var map__12023__$1 = cljs.core.__destructure_map(map__12023);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12023__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12023__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12021_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12021_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12058 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12058)){
var response_type_12059 = temp__5804__auto___12058;
(this$__$1.responseType = cljs.core.name(response_type_12059));
} else {
}

var seq__12028_12060 = cljs.core.seq(headers);
var chunk__12029_12061 = null;
var count__12030_12062 = (0);
var i__12031_12063 = (0);
while(true){
if((i__12031_12063 < count__12030_12062)){
var vec__12039_12064 = chunk__12029_12061.cljs$core$IIndexed$_nth$arity$2(null, i__12031_12063);
var k_12065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12039_12064,(0),null);
var v_12066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12039_12064,(1),null);
this$__$1.setRequestHeader(k_12065,v_12066);


var G__12067 = seq__12028_12060;
var G__12068 = chunk__12029_12061;
var G__12069 = count__12030_12062;
var G__12070 = (i__12031_12063 + (1));
seq__12028_12060 = G__12067;
chunk__12029_12061 = G__12068;
count__12030_12062 = G__12069;
i__12031_12063 = G__12070;
continue;
} else {
var temp__5804__auto___12071 = cljs.core.seq(seq__12028_12060);
if(temp__5804__auto___12071){
var seq__12028_12072__$1 = temp__5804__auto___12071;
if(cljs.core.chunked_seq_QMARK_(seq__12028_12072__$1)){
var c__5525__auto___12073 = cljs.core.chunk_first(seq__12028_12072__$1);
var G__12074 = cljs.core.chunk_rest(seq__12028_12072__$1);
var G__12075 = c__5525__auto___12073;
var G__12076 = cljs.core.count(c__5525__auto___12073);
var G__12077 = (0);
seq__12028_12060 = G__12074;
chunk__12029_12061 = G__12075;
count__12030_12062 = G__12076;
i__12031_12063 = G__12077;
continue;
} else {
var vec__12042_12078 = cljs.core.first(seq__12028_12072__$1);
var k_12079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042_12078,(0),null);
var v_12080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042_12078,(1),null);
this$__$1.setRequestHeader(k_12079,v_12080);


var G__12081 = cljs.core.next(seq__12028_12072__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12028_12060 = G__12081;
chunk__12029_12061 = G__12082;
count__12030_12062 = G__12083;
i__12031_12063 = G__12084;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map