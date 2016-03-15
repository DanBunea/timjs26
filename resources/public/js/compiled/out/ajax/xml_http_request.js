// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__17926,handler){
var map__17927 = p__17926;
var map__17927__$1 = ((((!((map__17927 == null)))?((((map__17927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17927):map__17927);
var uri = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__17927__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__17927,map__17927__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__17925_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__17925_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__17927,map__17927__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___17935 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___17935)){
var response_type_17936 = temp__4425__auto___17935;
this$__$1.responseType = cljs.core.name.call(null,response_type_17936);
} else {
}

var seq__17929_17937 = cljs.core.seq.call(null,headers);
var chunk__17930_17938 = null;
var count__17931_17939 = (0);
var i__17932_17940 = (0);
while(true){
if((i__17932_17940 < count__17931_17939)){
var vec__17933_17941 = cljs.core._nth.call(null,chunk__17930_17938,i__17932_17940);
var k_17942 = cljs.core.nth.call(null,vec__17933_17941,(0),null);
var v_17943 = cljs.core.nth.call(null,vec__17933_17941,(1),null);
this$__$1.setRequestHeader(k_17942,v_17943);

var G__17944 = seq__17929_17937;
var G__17945 = chunk__17930_17938;
var G__17946 = count__17931_17939;
var G__17947 = (i__17932_17940 + (1));
seq__17929_17937 = G__17944;
chunk__17930_17938 = G__17945;
count__17931_17939 = G__17946;
i__17932_17940 = G__17947;
continue;
} else {
var temp__4425__auto___17948 = cljs.core.seq.call(null,seq__17929_17937);
if(temp__4425__auto___17948){
var seq__17929_17949__$1 = temp__4425__auto___17948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17929_17949__$1)){
var c__17608__auto___17950 = cljs.core.chunk_first.call(null,seq__17929_17949__$1);
var G__17951 = cljs.core.chunk_rest.call(null,seq__17929_17949__$1);
var G__17952 = c__17608__auto___17950;
var G__17953 = cljs.core.count.call(null,c__17608__auto___17950);
var G__17954 = (0);
seq__17929_17937 = G__17951;
chunk__17930_17938 = G__17952;
count__17931_17939 = G__17953;
i__17932_17940 = G__17954;
continue;
} else {
var vec__17934_17955 = cljs.core.first.call(null,seq__17929_17949__$1);
var k_17956 = cljs.core.nth.call(null,vec__17934_17955,(0),null);
var v_17957 = cljs.core.nth.call(null,vec__17934_17955,(1),null);
this$__$1.setRequestHeader(k_17956,v_17957);

var G__17958 = cljs.core.next.call(null,seq__17929_17949__$1);
var G__17959 = null;
var G__17960 = (0);
var G__17961 = (0);
seq__17929_17937 = G__17958;
chunk__17930_17938 = G__17959;
count__17931_17939 = G__17960;
i__17932_17940 = G__17961;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16805__auto__ = body;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1457947196994