// Compiled by ClojureScript 1.7.170 {}
goog.provide('timjs26.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edi1ts to  his te xt sh ould show  up in your developer console.");
if(typeof timjs26.core.model !== 'undefined'){
} else {
timjs26.core.model = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Weather app",new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"city","city",-393302614),"Timisoara",new cljs.core.Keyword(null,"temp","temp",1791541284),"+3"], null)], null));
}
timjs26.core.weather_component = (function timjs26$core$weather_component(city,temp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#weather","div#weather",-734174009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#city","h2#city",110263571),city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#temp","h3#temp",2134803015),temp], null)], null);
});
timjs26.core.app = (function timjs26$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.get.call(null,cljs.core.deref.call(null,timjs26.core.model),new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [timjs26.core.weather_component,cljs.core.get_in.call(null,cljs.core.deref.call(null,timjs26.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"city","city",-393302614)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,timjs26.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"temp","temp",1791541284)], null))], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timjs26.core.app], null),document.getElementById("app"));
timjs26.core.jsmodel = (function timjs26$core$jsmodel(){
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,timjs26.core.model));
});
timjs26.core.on_js_reload = (function timjs26$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1457957423858