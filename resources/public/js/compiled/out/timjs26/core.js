// Compiled by ClojureScript 1.7.170 {}
goog.provide('timjs26.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edi1ts to  his te xt sh ould show  up in your developer console.");
timjs26.core.GET_LT_ = (function timjs26$core$GET_LT_(url){
var ch = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (ch){
return (function (resp){
return cljs.core.async.put_BANG_.call(null,ch,resp);
});})(ch))
], null));

return ch;
});
timjs26.core.swapm_BANG_ = (function timjs26$core$swapm_BANG_(x,y){
return cljs.core.swap_BANG_.call(null,y,(function (xx){
return x;
}));
});
if(typeof timjs26.core.model !== 'undefined'){
} else {
timjs26.core.model = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Weather app with timeout!",new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"city","city",-393302614),"Timisoara",new cljs.core.Keyword(null,"temp","temp",1791541284),"+3"], null)], null));
}
timjs26.core.fetch_weather = (function timjs26$core$fetch_weather(query){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_23208){
var state_val_23209 = (state_23208[(1)]);
if((state_val_23209 === (7))){
var state_23208__$1 = state_23208;
var statearr_23210_23232 = state_23208__$1;
(statearr_23210_23232[(2)] = null);

(statearr_23210_23232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (1))){
var inst_23166 = (state_23208[(7)]);
var inst_23165 = (state_23208[(8)]);
var inst_23156 = cljs.core.deref.call(null,timjs26.core.model);
var inst_23157 = [cljs.core.str("Data for "),cljs.core.str(query)].join('');
var inst_23158 = cljs.core.assoc.call(null,inst_23156,new cljs.core.Keyword(null,"title","title",636505583),inst_23157);
var inst_23164 = [cljs.core.str(" http://api.openweathermap.org/data/2.5/weather?appid=22f30c03f6fa4e96955fd942787dab02&q="),cljs.core.str(query)].join('');
var inst_23165__$1 = timjs26.core.GET_LT_.call(null,inst_23164);
var inst_23166__$1 = cljs.core.async.timeout.call(null,(50));
var inst_23167 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23168 = [inst_23165__$1,inst_23166__$1];
var inst_23169 = (new cljs.core.PersistentVector(null,2,(5),inst_23167,inst_23168,null));
var state_23208__$1 = (function (){var statearr_23211 = state_23208;
(statearr_23211[(9)] = inst_23158);

(statearr_23211[(7)] = inst_23166__$1);

(statearr_23211[(8)] = inst_23165__$1);

return statearr_23211;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23208__$1,(2),inst_23169);
} else {
if((state_val_23209 === (4))){
var inst_23173 = (state_23208[(10)]);
var inst_23181 = cljs.core._EQ_.call(null,inst_23173,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_23208__$1 = state_23208;
if(inst_23181){
var statearr_23212_23233 = state_23208__$1;
(statearr_23212_23233[(1)] = (6));

} else {
var statearr_23213_23234 = state_23208__$1;
(statearr_23213_23234[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (6))){
var inst_23172 = (state_23208[(11)]);
var state_23208__$1 = state_23208;
var statearr_23214_23235 = state_23208__$1;
(statearr_23214_23235[(2)] = inst_23172);

(statearr_23214_23235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (3))){
var inst_23171 = (state_23208[(12)]);
var inst_23179 = cljs.core.nth.call(null,inst_23171,(0),null);
var state_23208__$1 = state_23208;
var statearr_23215_23236 = state_23208__$1;
(statearr_23215_23236[(2)] = inst_23179);

(statearr_23215_23236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (2))){
var inst_23171 = (state_23208[(12)]);
var inst_23166 = (state_23208[(7)]);
var inst_23165 = (state_23208[(8)]);
var inst_23173 = (state_23208[(10)]);
var inst_23171__$1 = (state_23208[(2)]);
var inst_23172 = cljs.core.nth.call(null,inst_23171__$1,(0),null);
var inst_23173__$1 = cljs.core.nth.call(null,inst_23171__$1,(1),null);
var inst_23174 = cljs.core._EQ_.call(null,inst_23173__$1,inst_23165);
var inst_23175 = cljs.core._EQ_.call(null,inst_23173__$1,inst_23166);
var inst_23176 = (inst_23174) || (inst_23175);
var state_23208__$1 = (function (){var statearr_23216 = state_23208;
(statearr_23216[(12)] = inst_23171__$1);

(statearr_23216[(11)] = inst_23172);

(statearr_23216[(10)] = inst_23173__$1);

return statearr_23216;
})();
if(cljs.core.truth_(inst_23176)){
var statearr_23217_23237 = state_23208__$1;
(statearr_23217_23237[(1)] = (3));

} else {
var statearr_23218_23238 = state_23208__$1;
(statearr_23218_23238[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (11))){
var inst_23158 = (state_23208[(9)]);
var inst_23204 = (state_23208[(2)]);
var inst_23205 = cljs.core.assoc.call(null,inst_23158,new cljs.core.Keyword(null,"weather","weather",1320452344),inst_23204);
var inst_23206 = timjs26.core.swapm_BANG_.call(null,inst_23205,timjs26.core.model);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23208__$1,inst_23206);
} else {
if((state_val_23209 === (9))){
var inst_23191 = [new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.Keyword(null,"city","city",-393302614)];
var inst_23192 = ["","Operation timed out!"];
var inst_23193 = cljs.core.PersistentHashMap.fromArrays(inst_23191,inst_23192);
var state_23208__$1 = state_23208;
var statearr_23219_23239 = state_23208__$1;
(statearr_23219_23239[(2)] = inst_23193);

(statearr_23219_23239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (5))){
var inst_23187 = (state_23208[(13)]);
var inst_23187__$1 = (state_23208[(2)]);
var inst_23188 = cljs.core.print.call(null,(1),inst_23187__$1);
var inst_23189 = (inst_23187__$1 == null);
var state_23208__$1 = (function (){var statearr_23220 = state_23208;
(statearr_23220[(13)] = inst_23187__$1);

(statearr_23220[(14)] = inst_23188);

return statearr_23220;
})();
if(cljs.core.truth_(inst_23189)){
var statearr_23221_23240 = state_23208__$1;
(statearr_23221_23240[(1)] = (9));

} else {
var statearr_23222_23241 = state_23208__$1;
(statearr_23222_23241[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (10))){
var inst_23187 = (state_23208[(13)]);
var inst_23195 = [new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.Keyword(null,"city","city",-393302614)];
var inst_23196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23197 = ["main","temp"];
var inst_23198 = (new cljs.core.PersistentVector(null,2,(5),inst_23196,inst_23197,null));
var inst_23199 = cljs.core.get_in.call(null,inst_23187,inst_23198);
var inst_23200 = (inst_23199 - 273.15);
var inst_23201 = [inst_23200,query];
var inst_23202 = cljs.core.PersistentHashMap.fromArrays(inst_23195,inst_23201);
var state_23208__$1 = state_23208;
var statearr_23223_23242 = state_23208__$1;
(statearr_23223_23242[(2)] = inst_23202);

(statearr_23223_23242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (8))){
var inst_23185 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23224_23243 = state_23208__$1;
(statearr_23224_23243[(2)] = inst_23185);

(statearr_23224_23243[(1)] = (5));


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
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var timjs26$core$fetch_weather_$_state_machine__18904__auto__ = null;
var timjs26$core$fetch_weather_$_state_machine__18904__auto____0 = (function (){
var statearr_23228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23228[(0)] = timjs26$core$fetch_weather_$_state_machine__18904__auto__);

(statearr_23228[(1)] = (1));

return statearr_23228;
});
var timjs26$core$fetch_weather_$_state_machine__18904__auto____1 = (function (state_23208){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_23208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object)){
var ex__18907__auto__ = e23229;
var statearr_23230_23244 = state_23208;
(statearr_23230_23244[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23245 = state_23208;
state_23208 = G__23245;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
timjs26$core$fetch_weather_$_state_machine__18904__auto__ = function(state_23208){
switch(arguments.length){
case 0:
return timjs26$core$fetch_weather_$_state_machine__18904__auto____0.call(this);
case 1:
return timjs26$core$fetch_weather_$_state_machine__18904__auto____1.call(this,state_23208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timjs26$core$fetch_weather_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = timjs26$core$fetch_weather_$_state_machine__18904__auto____0;
timjs26$core$fetch_weather_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = timjs26$core$fetch_weather_$_state_machine__18904__auto____1;
return timjs26$core$fetch_weather_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_23231 = f__18925__auto__.call(null);
(statearr_23231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_23231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
timjs26.core.weather_component = (function timjs26$core$weather_component(city,temp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#weather","div#weather",-734174009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#city","h2#city",110263571),city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#temp","h3#temp",2134803015),temp], null)], null);
});
timjs26.core.choose_city_component = (function timjs26$core$choose_city_component(){
var inner_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
return ((function (inner_state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#txt_city","input#txt_city",-1347793720),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,inner_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (inner_state){
return (function (p1__23246_SHARP_){
return cljs.core.swap_BANG_.call(null,inner_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),p1__23246_SHARP_.target.value);
});})(inner_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#btn_go","input#btn_go",-344908407),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"GO",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (inner_state){
return (function (){
return timjs26.core.fetch_weather.call(null,cljs.core.deref.call(null,inner_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)));
});})(inner_state))
], null)], null)], null);
});
;})(inner_state))
});
timjs26.core.app = (function timjs26$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.get.call(null,cljs.core.deref.call(null,timjs26.core.model),new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timjs26.core.choose_city_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [timjs26.core.weather_component,cljs.core.get_in.call(null,cljs.core.deref.call(null,timjs26.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"city","city",-393302614)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,timjs26.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"temp","temp",1791541284)], null))], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timjs26.core.app], null),document.getElementById("app"));
timjs26.core.jsmodel = (function timjs26$core$jsmodel(){
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,timjs26.core.model));
});
timjs26.core.on_js_reload = (function timjs26$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1458132189444