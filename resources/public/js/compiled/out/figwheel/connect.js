// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('timjs26.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21856__delegate = function (x){
if(cljs.core.truth_(timjs26.core.on_js_reload)){
return cljs.core.apply.call(null,timjs26.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'timjs26.core/on-js-reload' is missing");
}
};
var G__21856 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21857__i = 0, G__21857__a = new Array(arguments.length -  0);
while (G__21857__i < G__21857__a.length) {G__21857__a[G__21857__i] = arguments[G__21857__i + 0]; ++G__21857__i;}
  x = new cljs.core.IndexedSeq(G__21857__a,0);
} 
return G__21856__delegate.call(this,x);};
G__21856.cljs$lang$maxFixedArity = 0;
G__21856.cljs$lang$applyTo = (function (arglist__21858){
var x = cljs.core.seq(arglist__21858);
return G__21856__delegate(x);
});
G__21856.cljs$core$IFn$_invoke$arity$variadic = G__21856__delegate;
return G__21856;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1458126039242