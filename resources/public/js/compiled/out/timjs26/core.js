// Compiled by ClojureScript 1.7.170 {}
goog.provide('timjs26.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof timjs26.core.app_state !== 'undefined'){
} else {
timjs26.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
timjs26.core.hello_world = (function timjs26$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timjs26.core.app_state))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timjs26.core.hello_world], null),document.getElementById("app"));
timjs26.core.on_js_reload = (function timjs26$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1458068124992