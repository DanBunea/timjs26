// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19485 = [];
var len__17863__auto___19491 = arguments.length;
var i__17864__auto___19492 = (0);
while(true){
if((i__17864__auto___19492 < len__17863__auto___19491)){
args19485.push((arguments[i__17864__auto___19492]));

var G__19493 = (i__17864__auto___19492 + (1));
i__17864__auto___19492 = G__19493;
continue;
} else {
}
break;
}

var G__19487 = args19485.length;
switch (G__19487) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19485.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19488 = (function (f,blockable,meta19489){
this.f = f;
this.blockable = blockable;
this.meta19489 = meta19489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19490,meta19489__$1){
var self__ = this;
var _19490__$1 = this;
return (new cljs.core.async.t_cljs$core$async19488(self__.f,self__.blockable,meta19489__$1));
});

cljs.core.async.t_cljs$core$async19488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19490){
var self__ = this;
var _19490__$1 = this;
return self__.meta19489;
});

cljs.core.async.t_cljs$core$async19488.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19489","meta19489",-1557592211,null)], null);
});

cljs.core.async.t_cljs$core$async19488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19488";

cljs.core.async.t_cljs$core$async19488.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19488");
});

cljs.core.async.__GT_t_cljs$core$async19488 = (function cljs$core$async$__GT_t_cljs$core$async19488(f__$1,blockable__$1,meta19489){
return (new cljs.core.async.t_cljs$core$async19488(f__$1,blockable__$1,meta19489));
});

}

return (new cljs.core.async.t_cljs$core$async19488(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args19497 = [];
var len__17863__auto___19500 = arguments.length;
var i__17864__auto___19501 = (0);
while(true){
if((i__17864__auto___19501 < len__17863__auto___19500)){
args19497.push((arguments[i__17864__auto___19501]));

var G__19502 = (i__17864__auto___19501 + (1));
i__17864__auto___19501 = G__19502;
continue;
} else {
}
break;
}

var G__19499 = args19497.length;
switch (G__19499) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19497.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19504 = [];
var len__17863__auto___19507 = arguments.length;
var i__17864__auto___19508 = (0);
while(true){
if((i__17864__auto___19508 < len__17863__auto___19507)){
args19504.push((arguments[i__17864__auto___19508]));

var G__19509 = (i__17864__auto___19508 + (1));
i__17864__auto___19508 = G__19509;
continue;
} else {
}
break;
}

var G__19506 = args19504.length;
switch (G__19506) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19504.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args19511 = [];
var len__17863__auto___19514 = arguments.length;
var i__17864__auto___19515 = (0);
while(true){
if((i__17864__auto___19515 < len__17863__auto___19514)){
args19511.push((arguments[i__17864__auto___19515]));

var G__19516 = (i__17864__auto___19515 + (1));
i__17864__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var G__19513 = args19511.length;
switch (G__19513) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19511.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19518 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19518);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19518,ret){
return (function (){
return fn1.call(null,val_19518);
});})(val_19518,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19519 = [];
var len__17863__auto___19522 = arguments.length;
var i__17864__auto___19523 = (0);
while(true){
if((i__17864__auto___19523 < len__17863__auto___19522)){
args19519.push((arguments[i__17864__auto___19523]));

var G__19524 = (i__17864__auto___19523 + (1));
i__17864__auto___19523 = G__19524;
continue;
} else {
}
break;
}

var G__19521 = args19519.length;
switch (G__19521) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19519.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___19526 = n;
var x_19527 = (0);
while(true){
if((x_19527 < n__17708__auto___19526)){
(a[x_19527] = (0));

var G__19528 = (x_19527 + (1));
x_19527 = G__19528;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19529 = (i + (1));
i = G__19529;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19533 = (function (alt_flag,flag,meta19534){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19534 = meta19534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19535,meta19534__$1){
var self__ = this;
var _19535__$1 = this;
return (new cljs.core.async.t_cljs$core$async19533(self__.alt_flag,self__.flag,meta19534__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19535){
var self__ = this;
var _19535__$1 = this;
return self__.meta19534;
});})(flag))
;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19533.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19534","meta19534",1203209657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19533";

cljs.core.async.t_cljs$core$async19533.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19533");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19533 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19533(alt_flag__$1,flag__$1,meta19534){
return (new cljs.core.async.t_cljs$core$async19533(alt_flag__$1,flag__$1,meta19534));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19533(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19539 = (function (alt_handler,flag,cb,meta19540){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19540 = meta19540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19541,meta19540__$1){
var self__ = this;
var _19541__$1 = this;
return (new cljs.core.async.t_cljs$core$async19539(self__.alt_handler,self__.flag,self__.cb,meta19540__$1));
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19541){
var self__ = this;
var _19541__$1 = this;
return self__.meta19540;
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19540","meta19540",-1783122168,null)], null);
});

cljs.core.async.t_cljs$core$async19539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19539";

cljs.core.async.t_cljs$core$async19539.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19539");
});

cljs.core.async.__GT_t_cljs$core$async19539 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19539(alt_handler__$1,flag__$1,cb__$1,meta19540){
return (new cljs.core.async.t_cljs$core$async19539(alt_handler__$1,flag__$1,cb__$1,meta19540));
});

}

return (new cljs.core.async.t_cljs$core$async19539(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19542_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19543_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19544 = (i + (1));
i = G__19544;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__17870__auto__ = [];
var len__17863__auto___19550 = arguments.length;
var i__17864__auto___19551 = (0);
while(true){
if((i__17864__auto___19551 < len__17863__auto___19550)){
args__17870__auto__.push((arguments[i__17864__auto___19551]));

var G__19552 = (i__17864__auto___19551 + (1));
i__17864__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19547){
var map__19548 = p__19547;
var map__19548__$1 = ((((!((map__19548 == null)))?((((map__19548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19548):map__19548);
var opts = map__19548__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19545){
var G__19546 = cljs.core.first.call(null,seq19545);
var seq19545__$1 = cljs.core.next.call(null,seq19545);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19546,seq19545__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args19553 = [];
var len__17863__auto___19603 = arguments.length;
var i__17864__auto___19604 = (0);
while(true){
if((i__17864__auto___19604 < len__17863__auto___19603)){
args19553.push((arguments[i__17864__auto___19604]));

var G__19605 = (i__17864__auto___19604 + (1));
i__17864__auto___19604 = G__19605;
continue;
} else {
}
break;
}

var G__19555 = args19553.length;
switch (G__19555) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19553.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19440__auto___19607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___19607){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___19607){
return (function (state_19579){
var state_val_19580 = (state_19579[(1)]);
if((state_val_19580 === (7))){
var inst_19575 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
var statearr_19581_19608 = state_19579__$1;
(statearr_19581_19608[(2)] = inst_19575);

(statearr_19581_19608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (1))){
var state_19579__$1 = state_19579;
var statearr_19582_19609 = state_19579__$1;
(statearr_19582_19609[(2)] = null);

(statearr_19582_19609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (4))){
var inst_19558 = (state_19579[(7)]);
var inst_19558__$1 = (state_19579[(2)]);
var inst_19559 = (inst_19558__$1 == null);
var state_19579__$1 = (function (){var statearr_19583 = state_19579;
(statearr_19583[(7)] = inst_19558__$1);

return statearr_19583;
})();
if(cljs.core.truth_(inst_19559)){
var statearr_19584_19610 = state_19579__$1;
(statearr_19584_19610[(1)] = (5));

} else {
var statearr_19585_19611 = state_19579__$1;
(statearr_19585_19611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (13))){
var state_19579__$1 = state_19579;
var statearr_19586_19612 = state_19579__$1;
(statearr_19586_19612[(2)] = null);

(statearr_19586_19612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (6))){
var inst_19558 = (state_19579[(7)]);
var state_19579__$1 = state_19579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19579__$1,(11),to,inst_19558);
} else {
if((state_val_19580 === (3))){
var inst_19577 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19579__$1,inst_19577);
} else {
if((state_val_19580 === (12))){
var state_19579__$1 = state_19579;
var statearr_19587_19613 = state_19579__$1;
(statearr_19587_19613[(2)] = null);

(statearr_19587_19613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (2))){
var state_19579__$1 = state_19579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19579__$1,(4),from);
} else {
if((state_val_19580 === (11))){
var inst_19568 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
if(cljs.core.truth_(inst_19568)){
var statearr_19588_19614 = state_19579__$1;
(statearr_19588_19614[(1)] = (12));

} else {
var statearr_19589_19615 = state_19579__$1;
(statearr_19589_19615[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (9))){
var state_19579__$1 = state_19579;
var statearr_19590_19616 = state_19579__$1;
(statearr_19590_19616[(2)] = null);

(statearr_19590_19616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (5))){
var state_19579__$1 = state_19579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19591_19617 = state_19579__$1;
(statearr_19591_19617[(1)] = (8));

} else {
var statearr_19592_19618 = state_19579__$1;
(statearr_19592_19618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (14))){
var inst_19573 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
var statearr_19593_19619 = state_19579__$1;
(statearr_19593_19619[(2)] = inst_19573);

(statearr_19593_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (10))){
var inst_19565 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
var statearr_19594_19620 = state_19579__$1;
(statearr_19594_19620[(2)] = inst_19565);

(statearr_19594_19620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (8))){
var inst_19562 = cljs.core.async.close_BANG_.call(null,to);
var state_19579__$1 = state_19579;
var statearr_19595_19621 = state_19579__$1;
(statearr_19595_19621[(2)] = inst_19562);

(statearr_19595_19621[(1)] = (10));


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
});})(c__19440__auto___19607))
;
return ((function (switch__19328__auto__,c__19440__auto___19607){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_19599 = [null,null,null,null,null,null,null,null];
(statearr_19599[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_19599[(1)] = (1));

return statearr_19599;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_19579){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_19579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e19600){if((e19600 instanceof Object)){
var ex__19332__auto__ = e19600;
var statearr_19601_19622 = state_19579;
(statearr_19601_19622[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19623 = state_19579;
state_19579 = G__19623;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_19579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_19579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___19607))
})();
var state__19442__auto__ = (function (){var statearr_19602 = f__19441__auto__.call(null);
(statearr_19602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___19607);

return statearr_19602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___19607))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19807){
var vec__19808 = p__19807;
var v = cljs.core.nth.call(null,vec__19808,(0),null);
var p = cljs.core.nth.call(null,vec__19808,(1),null);
var job = vec__19808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19440__auto___19990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___19990,res,vec__19808,v,p,job,jobs,results){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___19990,res,vec__19808,v,p,job,jobs,results){
return (function (state_19813){
var state_val_19814 = (state_19813[(1)]);
if((state_val_19814 === (1))){
var state_19813__$1 = state_19813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19813__$1,(2),res,v);
} else {
if((state_val_19814 === (2))){
var inst_19810 = (state_19813[(2)]);
var inst_19811 = cljs.core.async.close_BANG_.call(null,res);
var state_19813__$1 = (function (){var statearr_19815 = state_19813;
(statearr_19815[(7)] = inst_19810);

return statearr_19815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19813__$1,inst_19811);
} else {
return null;
}
}
});})(c__19440__auto___19990,res,vec__19808,v,p,job,jobs,results))
;
return ((function (switch__19328__auto__,c__19440__auto___19990,res,vec__19808,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0 = (function (){
var statearr_19819 = [null,null,null,null,null,null,null,null];
(statearr_19819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__);

(statearr_19819[(1)] = (1));

return statearr_19819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1 = (function (state_19813){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_19813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e19820){if((e19820 instanceof Object)){
var ex__19332__auto__ = e19820;
var statearr_19821_19991 = state_19813;
(statearr_19821_19991[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19992 = state_19813;
state_19813 = G__19992;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = function(state_19813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1.call(this,state_19813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___19990,res,vec__19808,v,p,job,jobs,results))
})();
var state__19442__auto__ = (function (){var statearr_19822 = f__19441__auto__.call(null);
(statearr_19822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___19990);

return statearr_19822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___19990,res,vec__19808,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19823){
var vec__19824 = p__19823;
var v = cljs.core.nth.call(null,vec__19824,(0),null);
var p = cljs.core.nth.call(null,vec__19824,(1),null);
var job = vec__19824;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___19993 = n;
var __19994 = (0);
while(true){
if((__19994 < n__17708__auto___19993)){
var G__19825_19995 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19825_19995) {
case "compute":
var c__19440__auto___19997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19994,c__19440__auto___19997,G__19825_19995,n__17708__auto___19993,jobs,results,process,async){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (__19994,c__19440__auto___19997,G__19825_19995,n__17708__auto___19993,jobs,results,process,async){
return (function (state_19838){
var state_val_19839 = (state_19838[(1)]);
if((state_val_19839 === (1))){
var state_19838__$1 = state_19838;
var statearr_19840_19998 = state_19838__$1;
(statearr_19840_19998[(2)] = null);

(statearr_19840_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (2))){
var state_19838__$1 = state_19838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19838__$1,(4),jobs);
} else {
if((state_val_19839 === (3))){
var inst_19836 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19838__$1,inst_19836);
} else {
if((state_val_19839 === (4))){
var inst_19828 = (state_19838[(2)]);
var inst_19829 = process.call(null,inst_19828);
var state_19838__$1 = state_19838;
if(cljs.core.truth_(inst_19829)){
var statearr_19841_19999 = state_19838__$1;
(statearr_19841_19999[(1)] = (5));

} else {
var statearr_19842_20000 = state_19838__$1;
(statearr_19842_20000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (5))){
var state_19838__$1 = state_19838;
var statearr_19843_20001 = state_19838__$1;
(statearr_19843_20001[(2)] = null);

(statearr_19843_20001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (6))){
var state_19838__$1 = state_19838;
var statearr_19844_20002 = state_19838__$1;
(statearr_19844_20002[(2)] = null);

(statearr_19844_20002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (7))){
var inst_19834 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
var statearr_19845_20003 = state_19838__$1;
(statearr_19845_20003[(2)] = inst_19834);

(statearr_19845_20003[(1)] = (3));


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
});})(__19994,c__19440__auto___19997,G__19825_19995,n__17708__auto___19993,jobs,results,process,async))
;
return ((function (__19994,switch__19328__auto__,c__19440__auto___19997,G__19825_19995,n__17708__auto___19993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0 = (function (){
var statearr_19849 = [null,null,null,null,null,null,null];
(statearr_19849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__);

(statearr_19849[(1)] = (1));

return statearr_19849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1 = (function (state_19838){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_19838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e19850){if((e19850 instanceof Object)){
var ex__19332__auto__ = e19850;
var statearr_19851_20004 = state_19838;
(statearr_19851_20004[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20005 = state_19838;
state_19838 = G__20005;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = function(state_19838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1.call(this,state_19838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__;
})()
;})(__19994,switch__19328__auto__,c__19440__auto___19997,G__19825_19995,n__17708__auto___19993,jobs,results,process,async))
})();
var state__19442__auto__ = (function (){var statearr_19852 = f__19441__auto__.call(null);
(statearr_19852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___19997);

return statearr_19852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(__19994,c__19440__auto___19997,G__19825_19995,n__17708__auto___19993,jobs,results,process,async))
);


break;
case "async":
var c__19440__auto___20006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19994,c__19440__auto___20006,G__19825_19995,n__17708__auto___19993,jobs,results,process,async){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (__19994,c__19440__auto___20006,G__19825_19995,n__17708__auto___19993,jobs,results,process,async){
return (function (state_19865){
var state_val_19866 = (state_19865[(1)]);
if((state_val_19866 === (1))){
var state_19865__$1 = state_19865;
var statearr_19867_20007 = state_19865__$1;
(statearr_19867_20007[(2)] = null);

(statearr_19867_20007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (2))){
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19865__$1,(4),jobs);
} else {
if((state_val_19866 === (3))){
var inst_19863 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19865__$1,inst_19863);
} else {
if((state_val_19866 === (4))){
var inst_19855 = (state_19865[(2)]);
var inst_19856 = async.call(null,inst_19855);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19856)){
var statearr_19868_20008 = state_19865__$1;
(statearr_19868_20008[(1)] = (5));

} else {
var statearr_19869_20009 = state_19865__$1;
(statearr_19869_20009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (5))){
var state_19865__$1 = state_19865;
var statearr_19870_20010 = state_19865__$1;
(statearr_19870_20010[(2)] = null);

(statearr_19870_20010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (6))){
var state_19865__$1 = state_19865;
var statearr_19871_20011 = state_19865__$1;
(statearr_19871_20011[(2)] = null);

(statearr_19871_20011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (7))){
var inst_19861 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19872_20012 = state_19865__$1;
(statearr_19872_20012[(2)] = inst_19861);

(statearr_19872_20012[(1)] = (3));


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
});})(__19994,c__19440__auto___20006,G__19825_19995,n__17708__auto___19993,jobs,results,process,async))
;
return ((function (__19994,switch__19328__auto__,c__19440__auto___20006,G__19825_19995,n__17708__auto___19993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0 = (function (){
var statearr_19876 = [null,null,null,null,null,null,null];
(statearr_19876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__);

(statearr_19876[(1)] = (1));

return statearr_19876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1 = (function (state_19865){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_19865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e19877){if((e19877 instanceof Object)){
var ex__19332__auto__ = e19877;
var statearr_19878_20013 = state_19865;
(statearr_19878_20013[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20014 = state_19865;
state_19865 = G__20014;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = function(state_19865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1.call(this,state_19865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__;
})()
;})(__19994,switch__19328__auto__,c__19440__auto___20006,G__19825_19995,n__17708__auto___19993,jobs,results,process,async))
})();
var state__19442__auto__ = (function (){var statearr_19879 = f__19441__auto__.call(null);
(statearr_19879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___20006);

return statearr_19879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(__19994,c__19440__auto___20006,G__19825_19995,n__17708__auto___19993,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20015 = (__19994 + (1));
__19994 = G__20015;
continue;
} else {
}
break;
}

var c__19440__auto___20016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___20016,jobs,results,process,async){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___20016,jobs,results,process,async){
return (function (state_19901){
var state_val_19902 = (state_19901[(1)]);
if((state_val_19902 === (1))){
var state_19901__$1 = state_19901;
var statearr_19903_20017 = state_19901__$1;
(statearr_19903_20017[(2)] = null);

(statearr_19903_20017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (2))){
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19901__$1,(4),from);
} else {
if((state_val_19902 === (3))){
var inst_19899 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19901__$1,inst_19899);
} else {
if((state_val_19902 === (4))){
var inst_19882 = (state_19901[(7)]);
var inst_19882__$1 = (state_19901[(2)]);
var inst_19883 = (inst_19882__$1 == null);
var state_19901__$1 = (function (){var statearr_19904 = state_19901;
(statearr_19904[(7)] = inst_19882__$1);

return statearr_19904;
})();
if(cljs.core.truth_(inst_19883)){
var statearr_19905_20018 = state_19901__$1;
(statearr_19905_20018[(1)] = (5));

} else {
var statearr_19906_20019 = state_19901__$1;
(statearr_19906_20019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (5))){
var inst_19885 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19901__$1 = state_19901;
var statearr_19907_20020 = state_19901__$1;
(statearr_19907_20020[(2)] = inst_19885);

(statearr_19907_20020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (6))){
var inst_19887 = (state_19901[(8)]);
var inst_19882 = (state_19901[(7)]);
var inst_19887__$1 = cljs.core.async.chan.call(null,(1));
var inst_19888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19889 = [inst_19882,inst_19887__$1];
var inst_19890 = (new cljs.core.PersistentVector(null,2,(5),inst_19888,inst_19889,null));
var state_19901__$1 = (function (){var statearr_19908 = state_19901;
(statearr_19908[(8)] = inst_19887__$1);

return statearr_19908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19901__$1,(8),jobs,inst_19890);
} else {
if((state_val_19902 === (7))){
var inst_19897 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19909_20021 = state_19901__$1;
(statearr_19909_20021[(2)] = inst_19897);

(statearr_19909_20021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (8))){
var inst_19887 = (state_19901[(8)]);
var inst_19892 = (state_19901[(2)]);
var state_19901__$1 = (function (){var statearr_19910 = state_19901;
(statearr_19910[(9)] = inst_19892);

return statearr_19910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19901__$1,(9),results,inst_19887);
} else {
if((state_val_19902 === (9))){
var inst_19894 = (state_19901[(2)]);
var state_19901__$1 = (function (){var statearr_19911 = state_19901;
(statearr_19911[(10)] = inst_19894);

return statearr_19911;
})();
var statearr_19912_20022 = state_19901__$1;
(statearr_19912_20022[(2)] = null);

(statearr_19912_20022[(1)] = (2));


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
});})(c__19440__auto___20016,jobs,results,process,async))
;
return ((function (switch__19328__auto__,c__19440__auto___20016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0 = (function (){
var statearr_19916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__);

(statearr_19916[(1)] = (1));

return statearr_19916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1 = (function (state_19901){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_19901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e19917){if((e19917 instanceof Object)){
var ex__19332__auto__ = e19917;
var statearr_19918_20023 = state_19901;
(statearr_19918_20023[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20024 = state_19901;
state_19901 = G__20024;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = function(state_19901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1.call(this,state_19901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___20016,jobs,results,process,async))
})();
var state__19442__auto__ = (function (){var statearr_19919 = f__19441__auto__.call(null);
(statearr_19919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___20016);

return statearr_19919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___20016,jobs,results,process,async))
);


var c__19440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto__,jobs,results,process,async){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto__,jobs,results,process,async){
return (function (state_19957){
var state_val_19958 = (state_19957[(1)]);
if((state_val_19958 === (7))){
var inst_19953 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19959_20025 = state_19957__$1;
(statearr_19959_20025[(2)] = inst_19953);

(statearr_19959_20025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (20))){
var state_19957__$1 = state_19957;
var statearr_19960_20026 = state_19957__$1;
(statearr_19960_20026[(2)] = null);

(statearr_19960_20026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (1))){
var state_19957__$1 = state_19957;
var statearr_19961_20027 = state_19957__$1;
(statearr_19961_20027[(2)] = null);

(statearr_19961_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (4))){
var inst_19922 = (state_19957[(7)]);
var inst_19922__$1 = (state_19957[(2)]);
var inst_19923 = (inst_19922__$1 == null);
var state_19957__$1 = (function (){var statearr_19962 = state_19957;
(statearr_19962[(7)] = inst_19922__$1);

return statearr_19962;
})();
if(cljs.core.truth_(inst_19923)){
var statearr_19963_20028 = state_19957__$1;
(statearr_19963_20028[(1)] = (5));

} else {
var statearr_19964_20029 = state_19957__$1;
(statearr_19964_20029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (15))){
var inst_19935 = (state_19957[(8)]);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19957__$1,(18),to,inst_19935);
} else {
if((state_val_19958 === (21))){
var inst_19948 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19965_20030 = state_19957__$1;
(statearr_19965_20030[(2)] = inst_19948);

(statearr_19965_20030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (13))){
var inst_19950 = (state_19957[(2)]);
var state_19957__$1 = (function (){var statearr_19966 = state_19957;
(statearr_19966[(9)] = inst_19950);

return statearr_19966;
})();
var statearr_19967_20031 = state_19957__$1;
(statearr_19967_20031[(2)] = null);

(statearr_19967_20031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (6))){
var inst_19922 = (state_19957[(7)]);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19957__$1,(11),inst_19922);
} else {
if((state_val_19958 === (17))){
var inst_19943 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
if(cljs.core.truth_(inst_19943)){
var statearr_19968_20032 = state_19957__$1;
(statearr_19968_20032[(1)] = (19));

} else {
var statearr_19969_20033 = state_19957__$1;
(statearr_19969_20033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (3))){
var inst_19955 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19957__$1,inst_19955);
} else {
if((state_val_19958 === (12))){
var inst_19932 = (state_19957[(10)]);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19957__$1,(14),inst_19932);
} else {
if((state_val_19958 === (2))){
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19957__$1,(4),results);
} else {
if((state_val_19958 === (19))){
var state_19957__$1 = state_19957;
var statearr_19970_20034 = state_19957__$1;
(statearr_19970_20034[(2)] = null);

(statearr_19970_20034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (11))){
var inst_19932 = (state_19957[(2)]);
var state_19957__$1 = (function (){var statearr_19971 = state_19957;
(statearr_19971[(10)] = inst_19932);

return statearr_19971;
})();
var statearr_19972_20035 = state_19957__$1;
(statearr_19972_20035[(2)] = null);

(statearr_19972_20035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (9))){
var state_19957__$1 = state_19957;
var statearr_19973_20036 = state_19957__$1;
(statearr_19973_20036[(2)] = null);

(statearr_19973_20036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (5))){
var state_19957__$1 = state_19957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19974_20037 = state_19957__$1;
(statearr_19974_20037[(1)] = (8));

} else {
var statearr_19975_20038 = state_19957__$1;
(statearr_19975_20038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (14))){
var inst_19935 = (state_19957[(8)]);
var inst_19937 = (state_19957[(11)]);
var inst_19935__$1 = (state_19957[(2)]);
var inst_19936 = (inst_19935__$1 == null);
var inst_19937__$1 = cljs.core.not.call(null,inst_19936);
var state_19957__$1 = (function (){var statearr_19976 = state_19957;
(statearr_19976[(8)] = inst_19935__$1);

(statearr_19976[(11)] = inst_19937__$1);

return statearr_19976;
})();
if(inst_19937__$1){
var statearr_19977_20039 = state_19957__$1;
(statearr_19977_20039[(1)] = (15));

} else {
var statearr_19978_20040 = state_19957__$1;
(statearr_19978_20040[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (16))){
var inst_19937 = (state_19957[(11)]);
var state_19957__$1 = state_19957;
var statearr_19979_20041 = state_19957__$1;
(statearr_19979_20041[(2)] = inst_19937);

(statearr_19979_20041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (10))){
var inst_19929 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19980_20042 = state_19957__$1;
(statearr_19980_20042[(2)] = inst_19929);

(statearr_19980_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (18))){
var inst_19940 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19981_20043 = state_19957__$1;
(statearr_19981_20043[(2)] = inst_19940);

(statearr_19981_20043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (8))){
var inst_19926 = cljs.core.async.close_BANG_.call(null,to);
var state_19957__$1 = state_19957;
var statearr_19982_20044 = state_19957__$1;
(statearr_19982_20044[(2)] = inst_19926);

(statearr_19982_20044[(1)] = (10));


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
});})(c__19440__auto__,jobs,results,process,async))
;
return ((function (switch__19328__auto__,c__19440__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0 = (function (){
var statearr_19986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__);

(statearr_19986[(1)] = (1));

return statearr_19986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1 = (function (state_19957){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_19957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e19987){if((e19987 instanceof Object)){
var ex__19332__auto__ = e19987;
var statearr_19988_20045 = state_19957;
(statearr_19988_20045[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20046 = state_19957;
state_19957 = G__20046;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__ = function(state_19957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1.call(this,state_19957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto__,jobs,results,process,async))
})();
var state__19442__auto__ = (function (){var statearr_19989 = f__19441__auto__.call(null);
(statearr_19989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto__);

return statearr_19989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto__,jobs,results,process,async))
);

return c__19440__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20047 = [];
var len__17863__auto___20050 = arguments.length;
var i__17864__auto___20051 = (0);
while(true){
if((i__17864__auto___20051 < len__17863__auto___20050)){
args20047.push((arguments[i__17864__auto___20051]));

var G__20052 = (i__17864__auto___20051 + (1));
i__17864__auto___20051 = G__20052;
continue;
} else {
}
break;
}

var G__20049 = args20047.length;
switch (G__20049) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20047.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args20054 = [];
var len__17863__auto___20057 = arguments.length;
var i__17864__auto___20058 = (0);
while(true){
if((i__17864__auto___20058 < len__17863__auto___20057)){
args20054.push((arguments[i__17864__auto___20058]));

var G__20059 = (i__17864__auto___20058 + (1));
i__17864__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var G__20056 = args20054.length;
switch (G__20056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20054.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args20061 = [];
var len__17863__auto___20114 = arguments.length;
var i__17864__auto___20115 = (0);
while(true){
if((i__17864__auto___20115 < len__17863__auto___20114)){
args20061.push((arguments[i__17864__auto___20115]));

var G__20116 = (i__17864__auto___20115 + (1));
i__17864__auto___20115 = G__20116;
continue;
} else {
}
break;
}

var G__20063 = args20061.length;
switch (G__20063) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20061.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19440__auto___20118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___20118,tc,fc){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___20118,tc,fc){
return (function (state_20089){
var state_val_20090 = (state_20089[(1)]);
if((state_val_20090 === (7))){
var inst_20085 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20091_20119 = state_20089__$1;
(statearr_20091_20119[(2)] = inst_20085);

(statearr_20091_20119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (1))){
var state_20089__$1 = state_20089;
var statearr_20092_20120 = state_20089__$1;
(statearr_20092_20120[(2)] = null);

(statearr_20092_20120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (4))){
var inst_20066 = (state_20089[(7)]);
var inst_20066__$1 = (state_20089[(2)]);
var inst_20067 = (inst_20066__$1 == null);
var state_20089__$1 = (function (){var statearr_20093 = state_20089;
(statearr_20093[(7)] = inst_20066__$1);

return statearr_20093;
})();
if(cljs.core.truth_(inst_20067)){
var statearr_20094_20121 = state_20089__$1;
(statearr_20094_20121[(1)] = (5));

} else {
var statearr_20095_20122 = state_20089__$1;
(statearr_20095_20122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (13))){
var state_20089__$1 = state_20089;
var statearr_20096_20123 = state_20089__$1;
(statearr_20096_20123[(2)] = null);

(statearr_20096_20123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (6))){
var inst_20066 = (state_20089[(7)]);
var inst_20072 = p.call(null,inst_20066);
var state_20089__$1 = state_20089;
if(cljs.core.truth_(inst_20072)){
var statearr_20097_20124 = state_20089__$1;
(statearr_20097_20124[(1)] = (9));

} else {
var statearr_20098_20125 = state_20089__$1;
(statearr_20098_20125[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (3))){
var inst_20087 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20089__$1,inst_20087);
} else {
if((state_val_20090 === (12))){
var state_20089__$1 = state_20089;
var statearr_20099_20126 = state_20089__$1;
(statearr_20099_20126[(2)] = null);

(statearr_20099_20126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (2))){
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20089__$1,(4),ch);
} else {
if((state_val_20090 === (11))){
var inst_20066 = (state_20089[(7)]);
var inst_20076 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20089__$1,(8),inst_20076,inst_20066);
} else {
if((state_val_20090 === (9))){
var state_20089__$1 = state_20089;
var statearr_20100_20127 = state_20089__$1;
(statearr_20100_20127[(2)] = tc);

(statearr_20100_20127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (5))){
var inst_20069 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20070 = cljs.core.async.close_BANG_.call(null,fc);
var state_20089__$1 = (function (){var statearr_20101 = state_20089;
(statearr_20101[(8)] = inst_20069);

return statearr_20101;
})();
var statearr_20102_20128 = state_20089__$1;
(statearr_20102_20128[(2)] = inst_20070);

(statearr_20102_20128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (14))){
var inst_20083 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20103_20129 = state_20089__$1;
(statearr_20103_20129[(2)] = inst_20083);

(statearr_20103_20129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (10))){
var state_20089__$1 = state_20089;
var statearr_20104_20130 = state_20089__$1;
(statearr_20104_20130[(2)] = fc);

(statearr_20104_20130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (8))){
var inst_20078 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
if(cljs.core.truth_(inst_20078)){
var statearr_20105_20131 = state_20089__$1;
(statearr_20105_20131[(1)] = (12));

} else {
var statearr_20106_20132 = state_20089__$1;
(statearr_20106_20132[(1)] = (13));

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
});})(c__19440__auto___20118,tc,fc))
;
return ((function (switch__19328__auto__,c__19440__auto___20118,tc,fc){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_20110 = [null,null,null,null,null,null,null,null,null];
(statearr_20110[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_20110[(1)] = (1));

return statearr_20110;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_20089){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_20089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e20111){if((e20111 instanceof Object)){
var ex__19332__auto__ = e20111;
var statearr_20112_20133 = state_20089;
(statearr_20112_20133[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20134 = state_20089;
state_20089 = G__20134;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_20089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_20089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___20118,tc,fc))
})();
var state__19442__auto__ = (function (){var statearr_20113 = f__19441__auto__.call(null);
(statearr_20113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___20118);

return statearr_20113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___20118,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto__){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto__){
return (function (state_20198){
var state_val_20199 = (state_20198[(1)]);
if((state_val_20199 === (7))){
var inst_20194 = (state_20198[(2)]);
var state_20198__$1 = state_20198;
var statearr_20200_20221 = state_20198__$1;
(statearr_20200_20221[(2)] = inst_20194);

(statearr_20200_20221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (1))){
var inst_20178 = init;
var state_20198__$1 = (function (){var statearr_20201 = state_20198;
(statearr_20201[(7)] = inst_20178);

return statearr_20201;
})();
var statearr_20202_20222 = state_20198__$1;
(statearr_20202_20222[(2)] = null);

(statearr_20202_20222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (4))){
var inst_20181 = (state_20198[(8)]);
var inst_20181__$1 = (state_20198[(2)]);
var inst_20182 = (inst_20181__$1 == null);
var state_20198__$1 = (function (){var statearr_20203 = state_20198;
(statearr_20203[(8)] = inst_20181__$1);

return statearr_20203;
})();
if(cljs.core.truth_(inst_20182)){
var statearr_20204_20223 = state_20198__$1;
(statearr_20204_20223[(1)] = (5));

} else {
var statearr_20205_20224 = state_20198__$1;
(statearr_20205_20224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (6))){
var inst_20178 = (state_20198[(7)]);
var inst_20181 = (state_20198[(8)]);
var inst_20185 = (state_20198[(9)]);
var inst_20185__$1 = f.call(null,inst_20178,inst_20181);
var inst_20186 = cljs.core.reduced_QMARK_.call(null,inst_20185__$1);
var state_20198__$1 = (function (){var statearr_20206 = state_20198;
(statearr_20206[(9)] = inst_20185__$1);

return statearr_20206;
})();
if(inst_20186){
var statearr_20207_20225 = state_20198__$1;
(statearr_20207_20225[(1)] = (8));

} else {
var statearr_20208_20226 = state_20198__$1;
(statearr_20208_20226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (3))){
var inst_20196 = (state_20198[(2)]);
var state_20198__$1 = state_20198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20198__$1,inst_20196);
} else {
if((state_val_20199 === (2))){
var state_20198__$1 = state_20198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20198__$1,(4),ch);
} else {
if((state_val_20199 === (9))){
var inst_20185 = (state_20198[(9)]);
var inst_20178 = inst_20185;
var state_20198__$1 = (function (){var statearr_20209 = state_20198;
(statearr_20209[(7)] = inst_20178);

return statearr_20209;
})();
var statearr_20210_20227 = state_20198__$1;
(statearr_20210_20227[(2)] = null);

(statearr_20210_20227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (5))){
var inst_20178 = (state_20198[(7)]);
var state_20198__$1 = state_20198;
var statearr_20211_20228 = state_20198__$1;
(statearr_20211_20228[(2)] = inst_20178);

(statearr_20211_20228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (10))){
var inst_20192 = (state_20198[(2)]);
var state_20198__$1 = state_20198;
var statearr_20212_20229 = state_20198__$1;
(statearr_20212_20229[(2)] = inst_20192);

(statearr_20212_20229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (8))){
var inst_20185 = (state_20198[(9)]);
var inst_20188 = cljs.core.deref.call(null,inst_20185);
var state_20198__$1 = state_20198;
var statearr_20213_20230 = state_20198__$1;
(statearr_20213_20230[(2)] = inst_20188);

(statearr_20213_20230[(1)] = (10));


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
});})(c__19440__auto__))
;
return ((function (switch__19328__auto__,c__19440__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19329__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19329__auto____0 = (function (){
var statearr_20217 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20217[(0)] = cljs$core$async$reduce_$_state_machine__19329__auto__);

(statearr_20217[(1)] = (1));

return statearr_20217;
});
var cljs$core$async$reduce_$_state_machine__19329__auto____1 = (function (state_20198){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_20198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e20218){if((e20218 instanceof Object)){
var ex__19332__auto__ = e20218;
var statearr_20219_20231 = state_20198;
(statearr_20219_20231[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20232 = state_20198;
state_20198 = G__20232;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19329__auto__ = function(state_20198){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19329__auto____1.call(this,state_20198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19329__auto____0;
cljs$core$async$reduce_$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19329__auto____1;
return cljs$core$async$reduce_$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto__))
})();
var state__19442__auto__ = (function (){var statearr_20220 = f__19441__auto__.call(null);
(statearr_20220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto__);

return statearr_20220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto__))
);

return c__19440__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20233 = [];
var len__17863__auto___20285 = arguments.length;
var i__17864__auto___20286 = (0);
while(true){
if((i__17864__auto___20286 < len__17863__auto___20285)){
args20233.push((arguments[i__17864__auto___20286]));

var G__20287 = (i__17864__auto___20286 + (1));
i__17864__auto___20286 = G__20287;
continue;
} else {
}
break;
}

var G__20235 = args20233.length;
switch (G__20235) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20233.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto__){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto__){
return (function (state_20260){
var state_val_20261 = (state_20260[(1)]);
if((state_val_20261 === (7))){
var inst_20242 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20262_20289 = state_20260__$1;
(statearr_20262_20289[(2)] = inst_20242);

(statearr_20262_20289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (1))){
var inst_20236 = cljs.core.seq.call(null,coll);
var inst_20237 = inst_20236;
var state_20260__$1 = (function (){var statearr_20263 = state_20260;
(statearr_20263[(7)] = inst_20237);

return statearr_20263;
})();
var statearr_20264_20290 = state_20260__$1;
(statearr_20264_20290[(2)] = null);

(statearr_20264_20290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (4))){
var inst_20237 = (state_20260[(7)]);
var inst_20240 = cljs.core.first.call(null,inst_20237);
var state_20260__$1 = state_20260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20260__$1,(7),ch,inst_20240);
} else {
if((state_val_20261 === (13))){
var inst_20254 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20265_20291 = state_20260__$1;
(statearr_20265_20291[(2)] = inst_20254);

(statearr_20265_20291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (6))){
var inst_20245 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
if(cljs.core.truth_(inst_20245)){
var statearr_20266_20292 = state_20260__$1;
(statearr_20266_20292[(1)] = (8));

} else {
var statearr_20267_20293 = state_20260__$1;
(statearr_20267_20293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (3))){
var inst_20258 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20260__$1,inst_20258);
} else {
if((state_val_20261 === (12))){
var state_20260__$1 = state_20260;
var statearr_20268_20294 = state_20260__$1;
(statearr_20268_20294[(2)] = null);

(statearr_20268_20294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (2))){
var inst_20237 = (state_20260[(7)]);
var state_20260__$1 = state_20260;
if(cljs.core.truth_(inst_20237)){
var statearr_20269_20295 = state_20260__$1;
(statearr_20269_20295[(1)] = (4));

} else {
var statearr_20270_20296 = state_20260__$1;
(statearr_20270_20296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (11))){
var inst_20251 = cljs.core.async.close_BANG_.call(null,ch);
var state_20260__$1 = state_20260;
var statearr_20271_20297 = state_20260__$1;
(statearr_20271_20297[(2)] = inst_20251);

(statearr_20271_20297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (9))){
var state_20260__$1 = state_20260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20272_20298 = state_20260__$1;
(statearr_20272_20298[(1)] = (11));

} else {
var statearr_20273_20299 = state_20260__$1;
(statearr_20273_20299[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (5))){
var inst_20237 = (state_20260[(7)]);
var state_20260__$1 = state_20260;
var statearr_20274_20300 = state_20260__$1;
(statearr_20274_20300[(2)] = inst_20237);

(statearr_20274_20300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (10))){
var inst_20256 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20275_20301 = state_20260__$1;
(statearr_20275_20301[(2)] = inst_20256);

(statearr_20275_20301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (8))){
var inst_20237 = (state_20260[(7)]);
var inst_20247 = cljs.core.next.call(null,inst_20237);
var inst_20237__$1 = inst_20247;
var state_20260__$1 = (function (){var statearr_20276 = state_20260;
(statearr_20276[(7)] = inst_20237__$1);

return statearr_20276;
})();
var statearr_20277_20302 = state_20260__$1;
(statearr_20277_20302[(2)] = null);

(statearr_20277_20302[(1)] = (2));


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
});})(c__19440__auto__))
;
return ((function (switch__19328__auto__,c__19440__auto__){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_20281 = [null,null,null,null,null,null,null,null];
(statearr_20281[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_20281[(1)] = (1));

return statearr_20281;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_20260){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_20260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e20282){if((e20282 instanceof Object)){
var ex__19332__auto__ = e20282;
var statearr_20283_20303 = state_20260;
(statearr_20283_20303[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20304 = state_20260;
state_20260 = G__20304;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_20260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_20260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto__))
})();
var state__19442__auto__ = (function (){var statearr_20284 = f__19441__auto__.call(null);
(statearr_20284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto__);

return statearr_20284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto__))
);

return c__19440__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20526 = (function (mult,ch,cs,meta20527){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20527 = meta20527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20528,meta20527__$1){
var self__ = this;
var _20528__$1 = this;
return (new cljs.core.async.t_cljs$core$async20526(self__.mult,self__.ch,self__.cs,meta20527__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20528){
var self__ = this;
var _20528__$1 = this;
return self__.meta20527;
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20527","meta20527",1741897128,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20526";

cljs.core.async.t_cljs$core$async20526.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20526");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20526 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20526(mult__$1,ch__$1,cs__$1,meta20527){
return (new cljs.core.async.t_cljs$core$async20526(mult__$1,ch__$1,cs__$1,meta20527));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20526(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19440__auto___20747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___20747,cs,m,dchan,dctr,done){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___20747,cs,m,dchan,dctr,done){
return (function (state_20659){
var state_val_20660 = (state_20659[(1)]);
if((state_val_20660 === (7))){
var inst_20655 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20661_20748 = state_20659__$1;
(statearr_20661_20748[(2)] = inst_20655);

(statearr_20661_20748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (20))){
var inst_20560 = (state_20659[(7)]);
var inst_20570 = cljs.core.first.call(null,inst_20560);
var inst_20571 = cljs.core.nth.call(null,inst_20570,(0),null);
var inst_20572 = cljs.core.nth.call(null,inst_20570,(1),null);
var state_20659__$1 = (function (){var statearr_20662 = state_20659;
(statearr_20662[(8)] = inst_20571);

return statearr_20662;
})();
if(cljs.core.truth_(inst_20572)){
var statearr_20663_20749 = state_20659__$1;
(statearr_20663_20749[(1)] = (22));

} else {
var statearr_20664_20750 = state_20659__$1;
(statearr_20664_20750[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (27))){
var inst_20531 = (state_20659[(9)]);
var inst_20607 = (state_20659[(10)]);
var inst_20600 = (state_20659[(11)]);
var inst_20602 = (state_20659[(12)]);
var inst_20607__$1 = cljs.core._nth.call(null,inst_20600,inst_20602);
var inst_20608 = cljs.core.async.put_BANG_.call(null,inst_20607__$1,inst_20531,done);
var state_20659__$1 = (function (){var statearr_20665 = state_20659;
(statearr_20665[(10)] = inst_20607__$1);

return statearr_20665;
})();
if(cljs.core.truth_(inst_20608)){
var statearr_20666_20751 = state_20659__$1;
(statearr_20666_20751[(1)] = (30));

} else {
var statearr_20667_20752 = state_20659__$1;
(statearr_20667_20752[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (1))){
var state_20659__$1 = state_20659;
var statearr_20668_20753 = state_20659__$1;
(statearr_20668_20753[(2)] = null);

(statearr_20668_20753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (24))){
var inst_20560 = (state_20659[(7)]);
var inst_20577 = (state_20659[(2)]);
var inst_20578 = cljs.core.next.call(null,inst_20560);
var inst_20540 = inst_20578;
var inst_20541 = null;
var inst_20542 = (0);
var inst_20543 = (0);
var state_20659__$1 = (function (){var statearr_20669 = state_20659;
(statearr_20669[(13)] = inst_20542);

(statearr_20669[(14)] = inst_20543);

(statearr_20669[(15)] = inst_20540);

(statearr_20669[(16)] = inst_20577);

(statearr_20669[(17)] = inst_20541);

return statearr_20669;
})();
var statearr_20670_20754 = state_20659__$1;
(statearr_20670_20754[(2)] = null);

(statearr_20670_20754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (39))){
var state_20659__$1 = state_20659;
var statearr_20674_20755 = state_20659__$1;
(statearr_20674_20755[(2)] = null);

(statearr_20674_20755[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (4))){
var inst_20531 = (state_20659[(9)]);
var inst_20531__$1 = (state_20659[(2)]);
var inst_20532 = (inst_20531__$1 == null);
var state_20659__$1 = (function (){var statearr_20675 = state_20659;
(statearr_20675[(9)] = inst_20531__$1);

return statearr_20675;
})();
if(cljs.core.truth_(inst_20532)){
var statearr_20676_20756 = state_20659__$1;
(statearr_20676_20756[(1)] = (5));

} else {
var statearr_20677_20757 = state_20659__$1;
(statearr_20677_20757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (15))){
var inst_20542 = (state_20659[(13)]);
var inst_20543 = (state_20659[(14)]);
var inst_20540 = (state_20659[(15)]);
var inst_20541 = (state_20659[(17)]);
var inst_20556 = (state_20659[(2)]);
var inst_20557 = (inst_20543 + (1));
var tmp20671 = inst_20542;
var tmp20672 = inst_20540;
var tmp20673 = inst_20541;
var inst_20540__$1 = tmp20672;
var inst_20541__$1 = tmp20673;
var inst_20542__$1 = tmp20671;
var inst_20543__$1 = inst_20557;
var state_20659__$1 = (function (){var statearr_20678 = state_20659;
(statearr_20678[(13)] = inst_20542__$1);

(statearr_20678[(14)] = inst_20543__$1);

(statearr_20678[(15)] = inst_20540__$1);

(statearr_20678[(17)] = inst_20541__$1);

(statearr_20678[(18)] = inst_20556);

return statearr_20678;
})();
var statearr_20679_20758 = state_20659__$1;
(statearr_20679_20758[(2)] = null);

(statearr_20679_20758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (21))){
var inst_20581 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20683_20759 = state_20659__$1;
(statearr_20683_20759[(2)] = inst_20581);

(statearr_20683_20759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (31))){
var inst_20607 = (state_20659[(10)]);
var inst_20611 = done.call(null,null);
var inst_20612 = cljs.core.async.untap_STAR_.call(null,m,inst_20607);
var state_20659__$1 = (function (){var statearr_20684 = state_20659;
(statearr_20684[(19)] = inst_20611);

return statearr_20684;
})();
var statearr_20685_20760 = state_20659__$1;
(statearr_20685_20760[(2)] = inst_20612);

(statearr_20685_20760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (32))){
var inst_20599 = (state_20659[(20)]);
var inst_20600 = (state_20659[(11)]);
var inst_20601 = (state_20659[(21)]);
var inst_20602 = (state_20659[(12)]);
var inst_20614 = (state_20659[(2)]);
var inst_20615 = (inst_20602 + (1));
var tmp20680 = inst_20599;
var tmp20681 = inst_20600;
var tmp20682 = inst_20601;
var inst_20599__$1 = tmp20680;
var inst_20600__$1 = tmp20681;
var inst_20601__$1 = tmp20682;
var inst_20602__$1 = inst_20615;
var state_20659__$1 = (function (){var statearr_20686 = state_20659;
(statearr_20686[(20)] = inst_20599__$1);

(statearr_20686[(11)] = inst_20600__$1);

(statearr_20686[(22)] = inst_20614);

(statearr_20686[(21)] = inst_20601__$1);

(statearr_20686[(12)] = inst_20602__$1);

return statearr_20686;
})();
var statearr_20687_20761 = state_20659__$1;
(statearr_20687_20761[(2)] = null);

(statearr_20687_20761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (40))){
var inst_20627 = (state_20659[(23)]);
var inst_20631 = done.call(null,null);
var inst_20632 = cljs.core.async.untap_STAR_.call(null,m,inst_20627);
var state_20659__$1 = (function (){var statearr_20688 = state_20659;
(statearr_20688[(24)] = inst_20631);

return statearr_20688;
})();
var statearr_20689_20762 = state_20659__$1;
(statearr_20689_20762[(2)] = inst_20632);

(statearr_20689_20762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (33))){
var inst_20618 = (state_20659[(25)]);
var inst_20620 = cljs.core.chunked_seq_QMARK_.call(null,inst_20618);
var state_20659__$1 = state_20659;
if(inst_20620){
var statearr_20690_20763 = state_20659__$1;
(statearr_20690_20763[(1)] = (36));

} else {
var statearr_20691_20764 = state_20659__$1;
(statearr_20691_20764[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (13))){
var inst_20550 = (state_20659[(26)]);
var inst_20553 = cljs.core.async.close_BANG_.call(null,inst_20550);
var state_20659__$1 = state_20659;
var statearr_20692_20765 = state_20659__$1;
(statearr_20692_20765[(2)] = inst_20553);

(statearr_20692_20765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (22))){
var inst_20571 = (state_20659[(8)]);
var inst_20574 = cljs.core.async.close_BANG_.call(null,inst_20571);
var state_20659__$1 = state_20659;
var statearr_20693_20766 = state_20659__$1;
(statearr_20693_20766[(2)] = inst_20574);

(statearr_20693_20766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (36))){
var inst_20618 = (state_20659[(25)]);
var inst_20622 = cljs.core.chunk_first.call(null,inst_20618);
var inst_20623 = cljs.core.chunk_rest.call(null,inst_20618);
var inst_20624 = cljs.core.count.call(null,inst_20622);
var inst_20599 = inst_20623;
var inst_20600 = inst_20622;
var inst_20601 = inst_20624;
var inst_20602 = (0);
var state_20659__$1 = (function (){var statearr_20694 = state_20659;
(statearr_20694[(20)] = inst_20599);

(statearr_20694[(11)] = inst_20600);

(statearr_20694[(21)] = inst_20601);

(statearr_20694[(12)] = inst_20602);

return statearr_20694;
})();
var statearr_20695_20767 = state_20659__$1;
(statearr_20695_20767[(2)] = null);

(statearr_20695_20767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (41))){
var inst_20618 = (state_20659[(25)]);
var inst_20634 = (state_20659[(2)]);
var inst_20635 = cljs.core.next.call(null,inst_20618);
var inst_20599 = inst_20635;
var inst_20600 = null;
var inst_20601 = (0);
var inst_20602 = (0);
var state_20659__$1 = (function (){var statearr_20696 = state_20659;
(statearr_20696[(20)] = inst_20599);

(statearr_20696[(27)] = inst_20634);

(statearr_20696[(11)] = inst_20600);

(statearr_20696[(21)] = inst_20601);

(statearr_20696[(12)] = inst_20602);

return statearr_20696;
})();
var statearr_20697_20768 = state_20659__$1;
(statearr_20697_20768[(2)] = null);

(statearr_20697_20768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (43))){
var state_20659__$1 = state_20659;
var statearr_20698_20769 = state_20659__$1;
(statearr_20698_20769[(2)] = null);

(statearr_20698_20769[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (29))){
var inst_20643 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20699_20770 = state_20659__$1;
(statearr_20699_20770[(2)] = inst_20643);

(statearr_20699_20770[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (44))){
var inst_20652 = (state_20659[(2)]);
var state_20659__$1 = (function (){var statearr_20700 = state_20659;
(statearr_20700[(28)] = inst_20652);

return statearr_20700;
})();
var statearr_20701_20771 = state_20659__$1;
(statearr_20701_20771[(2)] = null);

(statearr_20701_20771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (6))){
var inst_20591 = (state_20659[(29)]);
var inst_20590 = cljs.core.deref.call(null,cs);
var inst_20591__$1 = cljs.core.keys.call(null,inst_20590);
var inst_20592 = cljs.core.count.call(null,inst_20591__$1);
var inst_20593 = cljs.core.reset_BANG_.call(null,dctr,inst_20592);
var inst_20598 = cljs.core.seq.call(null,inst_20591__$1);
var inst_20599 = inst_20598;
var inst_20600 = null;
var inst_20601 = (0);
var inst_20602 = (0);
var state_20659__$1 = (function (){var statearr_20702 = state_20659;
(statearr_20702[(30)] = inst_20593);

(statearr_20702[(20)] = inst_20599);

(statearr_20702[(29)] = inst_20591__$1);

(statearr_20702[(11)] = inst_20600);

(statearr_20702[(21)] = inst_20601);

(statearr_20702[(12)] = inst_20602);

return statearr_20702;
})();
var statearr_20703_20772 = state_20659__$1;
(statearr_20703_20772[(2)] = null);

(statearr_20703_20772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (28))){
var inst_20599 = (state_20659[(20)]);
var inst_20618 = (state_20659[(25)]);
var inst_20618__$1 = cljs.core.seq.call(null,inst_20599);
var state_20659__$1 = (function (){var statearr_20704 = state_20659;
(statearr_20704[(25)] = inst_20618__$1);

return statearr_20704;
})();
if(inst_20618__$1){
var statearr_20705_20773 = state_20659__$1;
(statearr_20705_20773[(1)] = (33));

} else {
var statearr_20706_20774 = state_20659__$1;
(statearr_20706_20774[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (25))){
var inst_20601 = (state_20659[(21)]);
var inst_20602 = (state_20659[(12)]);
var inst_20604 = (inst_20602 < inst_20601);
var inst_20605 = inst_20604;
var state_20659__$1 = state_20659;
if(cljs.core.truth_(inst_20605)){
var statearr_20707_20775 = state_20659__$1;
(statearr_20707_20775[(1)] = (27));

} else {
var statearr_20708_20776 = state_20659__$1;
(statearr_20708_20776[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (34))){
var state_20659__$1 = state_20659;
var statearr_20709_20777 = state_20659__$1;
(statearr_20709_20777[(2)] = null);

(statearr_20709_20777[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (17))){
var state_20659__$1 = state_20659;
var statearr_20710_20778 = state_20659__$1;
(statearr_20710_20778[(2)] = null);

(statearr_20710_20778[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (3))){
var inst_20657 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20659__$1,inst_20657);
} else {
if((state_val_20660 === (12))){
var inst_20586 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20711_20779 = state_20659__$1;
(statearr_20711_20779[(2)] = inst_20586);

(statearr_20711_20779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (2))){
var state_20659__$1 = state_20659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20659__$1,(4),ch);
} else {
if((state_val_20660 === (23))){
var state_20659__$1 = state_20659;
var statearr_20712_20780 = state_20659__$1;
(statearr_20712_20780[(2)] = null);

(statearr_20712_20780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (35))){
var inst_20641 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20713_20781 = state_20659__$1;
(statearr_20713_20781[(2)] = inst_20641);

(statearr_20713_20781[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (19))){
var inst_20560 = (state_20659[(7)]);
var inst_20564 = cljs.core.chunk_first.call(null,inst_20560);
var inst_20565 = cljs.core.chunk_rest.call(null,inst_20560);
var inst_20566 = cljs.core.count.call(null,inst_20564);
var inst_20540 = inst_20565;
var inst_20541 = inst_20564;
var inst_20542 = inst_20566;
var inst_20543 = (0);
var state_20659__$1 = (function (){var statearr_20714 = state_20659;
(statearr_20714[(13)] = inst_20542);

(statearr_20714[(14)] = inst_20543);

(statearr_20714[(15)] = inst_20540);

(statearr_20714[(17)] = inst_20541);

return statearr_20714;
})();
var statearr_20715_20782 = state_20659__$1;
(statearr_20715_20782[(2)] = null);

(statearr_20715_20782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (11))){
var inst_20560 = (state_20659[(7)]);
var inst_20540 = (state_20659[(15)]);
var inst_20560__$1 = cljs.core.seq.call(null,inst_20540);
var state_20659__$1 = (function (){var statearr_20716 = state_20659;
(statearr_20716[(7)] = inst_20560__$1);

return statearr_20716;
})();
if(inst_20560__$1){
var statearr_20717_20783 = state_20659__$1;
(statearr_20717_20783[(1)] = (16));

} else {
var statearr_20718_20784 = state_20659__$1;
(statearr_20718_20784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (9))){
var inst_20588 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20719_20785 = state_20659__$1;
(statearr_20719_20785[(2)] = inst_20588);

(statearr_20719_20785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (5))){
var inst_20538 = cljs.core.deref.call(null,cs);
var inst_20539 = cljs.core.seq.call(null,inst_20538);
var inst_20540 = inst_20539;
var inst_20541 = null;
var inst_20542 = (0);
var inst_20543 = (0);
var state_20659__$1 = (function (){var statearr_20720 = state_20659;
(statearr_20720[(13)] = inst_20542);

(statearr_20720[(14)] = inst_20543);

(statearr_20720[(15)] = inst_20540);

(statearr_20720[(17)] = inst_20541);

return statearr_20720;
})();
var statearr_20721_20786 = state_20659__$1;
(statearr_20721_20786[(2)] = null);

(statearr_20721_20786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (14))){
var state_20659__$1 = state_20659;
var statearr_20722_20787 = state_20659__$1;
(statearr_20722_20787[(2)] = null);

(statearr_20722_20787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (45))){
var inst_20649 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20723_20788 = state_20659__$1;
(statearr_20723_20788[(2)] = inst_20649);

(statearr_20723_20788[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (26))){
var inst_20591 = (state_20659[(29)]);
var inst_20645 = (state_20659[(2)]);
var inst_20646 = cljs.core.seq.call(null,inst_20591);
var state_20659__$1 = (function (){var statearr_20724 = state_20659;
(statearr_20724[(31)] = inst_20645);

return statearr_20724;
})();
if(inst_20646){
var statearr_20725_20789 = state_20659__$1;
(statearr_20725_20789[(1)] = (42));

} else {
var statearr_20726_20790 = state_20659__$1;
(statearr_20726_20790[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (16))){
var inst_20560 = (state_20659[(7)]);
var inst_20562 = cljs.core.chunked_seq_QMARK_.call(null,inst_20560);
var state_20659__$1 = state_20659;
if(inst_20562){
var statearr_20727_20791 = state_20659__$1;
(statearr_20727_20791[(1)] = (19));

} else {
var statearr_20728_20792 = state_20659__$1;
(statearr_20728_20792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (38))){
var inst_20638 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20729_20793 = state_20659__$1;
(statearr_20729_20793[(2)] = inst_20638);

(statearr_20729_20793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (30))){
var state_20659__$1 = state_20659;
var statearr_20730_20794 = state_20659__$1;
(statearr_20730_20794[(2)] = null);

(statearr_20730_20794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (10))){
var inst_20543 = (state_20659[(14)]);
var inst_20541 = (state_20659[(17)]);
var inst_20549 = cljs.core._nth.call(null,inst_20541,inst_20543);
var inst_20550 = cljs.core.nth.call(null,inst_20549,(0),null);
var inst_20551 = cljs.core.nth.call(null,inst_20549,(1),null);
var state_20659__$1 = (function (){var statearr_20731 = state_20659;
(statearr_20731[(26)] = inst_20550);

return statearr_20731;
})();
if(cljs.core.truth_(inst_20551)){
var statearr_20732_20795 = state_20659__$1;
(statearr_20732_20795[(1)] = (13));

} else {
var statearr_20733_20796 = state_20659__$1;
(statearr_20733_20796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (18))){
var inst_20584 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20734_20797 = state_20659__$1;
(statearr_20734_20797[(2)] = inst_20584);

(statearr_20734_20797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (42))){
var state_20659__$1 = state_20659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20659__$1,(45),dchan);
} else {
if((state_val_20660 === (37))){
var inst_20531 = (state_20659[(9)]);
var inst_20627 = (state_20659[(23)]);
var inst_20618 = (state_20659[(25)]);
var inst_20627__$1 = cljs.core.first.call(null,inst_20618);
var inst_20628 = cljs.core.async.put_BANG_.call(null,inst_20627__$1,inst_20531,done);
var state_20659__$1 = (function (){var statearr_20735 = state_20659;
(statearr_20735[(23)] = inst_20627__$1);

return statearr_20735;
})();
if(cljs.core.truth_(inst_20628)){
var statearr_20736_20798 = state_20659__$1;
(statearr_20736_20798[(1)] = (39));

} else {
var statearr_20737_20799 = state_20659__$1;
(statearr_20737_20799[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (8))){
var inst_20542 = (state_20659[(13)]);
var inst_20543 = (state_20659[(14)]);
var inst_20545 = (inst_20543 < inst_20542);
var inst_20546 = inst_20545;
var state_20659__$1 = state_20659;
if(cljs.core.truth_(inst_20546)){
var statearr_20738_20800 = state_20659__$1;
(statearr_20738_20800[(1)] = (10));

} else {
var statearr_20739_20801 = state_20659__$1;
(statearr_20739_20801[(1)] = (11));

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
});})(c__19440__auto___20747,cs,m,dchan,dctr,done))
;
return ((function (switch__19328__auto__,c__19440__auto___20747,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19329__auto__ = null;
var cljs$core$async$mult_$_state_machine__19329__auto____0 = (function (){
var statearr_20743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20743[(0)] = cljs$core$async$mult_$_state_machine__19329__auto__);

(statearr_20743[(1)] = (1));

return statearr_20743;
});
var cljs$core$async$mult_$_state_machine__19329__auto____1 = (function (state_20659){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_20659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e20744){if((e20744 instanceof Object)){
var ex__19332__auto__ = e20744;
var statearr_20745_20802 = state_20659;
(statearr_20745_20802[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20803 = state_20659;
state_20659 = G__20803;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19329__auto__ = function(state_20659){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19329__auto____1.call(this,state_20659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19329__auto____0;
cljs$core$async$mult_$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19329__auto____1;
return cljs$core$async$mult_$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___20747,cs,m,dchan,dctr,done))
})();
var state__19442__auto__ = (function (){var statearr_20746 = f__19441__auto__.call(null);
(statearr_20746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___20747);

return statearr_20746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___20747,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20804 = [];
var len__17863__auto___20807 = arguments.length;
var i__17864__auto___20808 = (0);
while(true){
if((i__17864__auto___20808 < len__17863__auto___20807)){
args20804.push((arguments[i__17864__auto___20808]));

var G__20809 = (i__17864__auto___20808 + (1));
i__17864__auto___20808 = G__20809;
continue;
} else {
}
break;
}

var G__20806 = args20804.length;
switch (G__20806) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20804.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20821 = arguments.length;
var i__17864__auto___20822 = (0);
while(true){
if((i__17864__auto___20822 < len__17863__auto___20821)){
args__17870__auto__.push((arguments[i__17864__auto___20822]));

var G__20823 = (i__17864__auto___20822 + (1));
i__17864__auto___20822 = G__20823;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20815){
var map__20816 = p__20815;
var map__20816__$1 = ((((!((map__20816 == null)))?((((map__20816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20816):map__20816);
var opts = map__20816__$1;
var statearr_20818_20824 = state;
(statearr_20818_20824[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20816,map__20816__$1,opts){
return (function (val){
var statearr_20819_20825 = state;
(statearr_20819_20825[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20816,map__20816__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20820_20826 = state;
(statearr_20820_20826[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20811){
var G__20812 = cljs.core.first.call(null,seq20811);
var seq20811__$1 = cljs.core.next.call(null,seq20811);
var G__20813 = cljs.core.first.call(null,seq20811__$1);
var seq20811__$2 = cljs.core.next.call(null,seq20811__$1);
var G__20814 = cljs.core.first.call(null,seq20811__$2);
var seq20811__$3 = cljs.core.next.call(null,seq20811__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20812,G__20813,G__20814,seq20811__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20990 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20991){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20991 = meta20991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20992,meta20991__$1){
var self__ = this;
var _20992__$1 = this;
return (new cljs.core.async.t_cljs$core$async20990(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20991__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20992){
var self__ = this;
var _20992__$1 = this;
return self__.meta20991;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20991","meta20991",1697268482,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20990";

cljs.core.async.t_cljs$core$async20990.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20990");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20990 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20990(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20991){
return (new cljs.core.async.t_cljs$core$async20990(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20991));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20990(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19440__auto___21153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___21153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___21153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21090){
var state_val_21091 = (state_21090[(1)]);
if((state_val_21091 === (7))){
var inst_21008 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21092_21154 = state_21090__$1;
(statearr_21092_21154[(2)] = inst_21008);

(statearr_21092_21154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (20))){
var inst_21020 = (state_21090[(7)]);
var state_21090__$1 = state_21090;
var statearr_21093_21155 = state_21090__$1;
(statearr_21093_21155[(2)] = inst_21020);

(statearr_21093_21155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (27))){
var state_21090__$1 = state_21090;
var statearr_21094_21156 = state_21090__$1;
(statearr_21094_21156[(2)] = null);

(statearr_21094_21156[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (1))){
var inst_20996 = (state_21090[(8)]);
var inst_20996__$1 = calc_state.call(null);
var inst_20998 = (inst_20996__$1 == null);
var inst_20999 = cljs.core.not.call(null,inst_20998);
var state_21090__$1 = (function (){var statearr_21095 = state_21090;
(statearr_21095[(8)] = inst_20996__$1);

return statearr_21095;
})();
if(inst_20999){
var statearr_21096_21157 = state_21090__$1;
(statearr_21096_21157[(1)] = (2));

} else {
var statearr_21097_21158 = state_21090__$1;
(statearr_21097_21158[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (24))){
var inst_21064 = (state_21090[(9)]);
var inst_21043 = (state_21090[(10)]);
var inst_21050 = (state_21090[(11)]);
var inst_21064__$1 = inst_21043.call(null,inst_21050);
var state_21090__$1 = (function (){var statearr_21098 = state_21090;
(statearr_21098[(9)] = inst_21064__$1);

return statearr_21098;
})();
if(cljs.core.truth_(inst_21064__$1)){
var statearr_21099_21159 = state_21090__$1;
(statearr_21099_21159[(1)] = (29));

} else {
var statearr_21100_21160 = state_21090__$1;
(statearr_21100_21160[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (4))){
var inst_21011 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21011)){
var statearr_21101_21161 = state_21090__$1;
(statearr_21101_21161[(1)] = (8));

} else {
var statearr_21102_21162 = state_21090__$1;
(statearr_21102_21162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (15))){
var inst_21037 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21037)){
var statearr_21103_21163 = state_21090__$1;
(statearr_21103_21163[(1)] = (19));

} else {
var statearr_21104_21164 = state_21090__$1;
(statearr_21104_21164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (21))){
var inst_21042 = (state_21090[(12)]);
var inst_21042__$1 = (state_21090[(2)]);
var inst_21043 = cljs.core.get.call(null,inst_21042__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21044 = cljs.core.get.call(null,inst_21042__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21045 = cljs.core.get.call(null,inst_21042__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21090__$1 = (function (){var statearr_21105 = state_21090;
(statearr_21105[(10)] = inst_21043);

(statearr_21105[(13)] = inst_21044);

(statearr_21105[(12)] = inst_21042__$1);

return statearr_21105;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21090__$1,(22),inst_21045);
} else {
if((state_val_21091 === (31))){
var inst_21072 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21072)){
var statearr_21106_21165 = state_21090__$1;
(statearr_21106_21165[(1)] = (32));

} else {
var statearr_21107_21166 = state_21090__$1;
(statearr_21107_21166[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (32))){
var inst_21049 = (state_21090[(14)]);
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21090__$1,(35),out,inst_21049);
} else {
if((state_val_21091 === (33))){
var inst_21042 = (state_21090[(12)]);
var inst_21020 = inst_21042;
var state_21090__$1 = (function (){var statearr_21108 = state_21090;
(statearr_21108[(7)] = inst_21020);

return statearr_21108;
})();
var statearr_21109_21167 = state_21090__$1;
(statearr_21109_21167[(2)] = null);

(statearr_21109_21167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (13))){
var inst_21020 = (state_21090[(7)]);
var inst_21027 = inst_21020.cljs$lang$protocol_mask$partition0$;
var inst_21028 = (inst_21027 & (64));
var inst_21029 = inst_21020.cljs$core$ISeq$;
var inst_21030 = (inst_21028) || (inst_21029);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21030)){
var statearr_21110_21168 = state_21090__$1;
(statearr_21110_21168[(1)] = (16));

} else {
var statearr_21111_21169 = state_21090__$1;
(statearr_21111_21169[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (22))){
var inst_21049 = (state_21090[(14)]);
var inst_21050 = (state_21090[(11)]);
var inst_21048 = (state_21090[(2)]);
var inst_21049__$1 = cljs.core.nth.call(null,inst_21048,(0),null);
var inst_21050__$1 = cljs.core.nth.call(null,inst_21048,(1),null);
var inst_21051 = (inst_21049__$1 == null);
var inst_21052 = cljs.core._EQ_.call(null,inst_21050__$1,change);
var inst_21053 = (inst_21051) || (inst_21052);
var state_21090__$1 = (function (){var statearr_21112 = state_21090;
(statearr_21112[(14)] = inst_21049__$1);

(statearr_21112[(11)] = inst_21050__$1);

return statearr_21112;
})();
if(cljs.core.truth_(inst_21053)){
var statearr_21113_21170 = state_21090__$1;
(statearr_21113_21170[(1)] = (23));

} else {
var statearr_21114_21171 = state_21090__$1;
(statearr_21114_21171[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (36))){
var inst_21042 = (state_21090[(12)]);
var inst_21020 = inst_21042;
var state_21090__$1 = (function (){var statearr_21115 = state_21090;
(statearr_21115[(7)] = inst_21020);

return statearr_21115;
})();
var statearr_21116_21172 = state_21090__$1;
(statearr_21116_21172[(2)] = null);

(statearr_21116_21172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (29))){
var inst_21064 = (state_21090[(9)]);
var state_21090__$1 = state_21090;
var statearr_21117_21173 = state_21090__$1;
(statearr_21117_21173[(2)] = inst_21064);

(statearr_21117_21173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (6))){
var state_21090__$1 = state_21090;
var statearr_21118_21174 = state_21090__$1;
(statearr_21118_21174[(2)] = false);

(statearr_21118_21174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (28))){
var inst_21060 = (state_21090[(2)]);
var inst_21061 = calc_state.call(null);
var inst_21020 = inst_21061;
var state_21090__$1 = (function (){var statearr_21119 = state_21090;
(statearr_21119[(7)] = inst_21020);

(statearr_21119[(15)] = inst_21060);

return statearr_21119;
})();
var statearr_21120_21175 = state_21090__$1;
(statearr_21120_21175[(2)] = null);

(statearr_21120_21175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (25))){
var inst_21086 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21121_21176 = state_21090__$1;
(statearr_21121_21176[(2)] = inst_21086);

(statearr_21121_21176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (34))){
var inst_21084 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21122_21177 = state_21090__$1;
(statearr_21122_21177[(2)] = inst_21084);

(statearr_21122_21177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (17))){
var state_21090__$1 = state_21090;
var statearr_21123_21178 = state_21090__$1;
(statearr_21123_21178[(2)] = false);

(statearr_21123_21178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (3))){
var state_21090__$1 = state_21090;
var statearr_21124_21179 = state_21090__$1;
(statearr_21124_21179[(2)] = false);

(statearr_21124_21179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (12))){
var inst_21088 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21090__$1,inst_21088);
} else {
if((state_val_21091 === (2))){
var inst_20996 = (state_21090[(8)]);
var inst_21001 = inst_20996.cljs$lang$protocol_mask$partition0$;
var inst_21002 = (inst_21001 & (64));
var inst_21003 = inst_20996.cljs$core$ISeq$;
var inst_21004 = (inst_21002) || (inst_21003);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21004)){
var statearr_21125_21180 = state_21090__$1;
(statearr_21125_21180[(1)] = (5));

} else {
var statearr_21126_21181 = state_21090__$1;
(statearr_21126_21181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (23))){
var inst_21049 = (state_21090[(14)]);
var inst_21055 = (inst_21049 == null);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21055)){
var statearr_21127_21182 = state_21090__$1;
(statearr_21127_21182[(1)] = (26));

} else {
var statearr_21128_21183 = state_21090__$1;
(statearr_21128_21183[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (35))){
var inst_21075 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21075)){
var statearr_21129_21184 = state_21090__$1;
(statearr_21129_21184[(1)] = (36));

} else {
var statearr_21130_21185 = state_21090__$1;
(statearr_21130_21185[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (19))){
var inst_21020 = (state_21090[(7)]);
var inst_21039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21020);
var state_21090__$1 = state_21090;
var statearr_21131_21186 = state_21090__$1;
(statearr_21131_21186[(2)] = inst_21039);

(statearr_21131_21186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (11))){
var inst_21020 = (state_21090[(7)]);
var inst_21024 = (inst_21020 == null);
var inst_21025 = cljs.core.not.call(null,inst_21024);
var state_21090__$1 = state_21090;
if(inst_21025){
var statearr_21132_21187 = state_21090__$1;
(statearr_21132_21187[(1)] = (13));

} else {
var statearr_21133_21188 = state_21090__$1;
(statearr_21133_21188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (9))){
var inst_20996 = (state_21090[(8)]);
var state_21090__$1 = state_21090;
var statearr_21134_21189 = state_21090__$1;
(statearr_21134_21189[(2)] = inst_20996);

(statearr_21134_21189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (5))){
var state_21090__$1 = state_21090;
var statearr_21135_21190 = state_21090__$1;
(statearr_21135_21190[(2)] = true);

(statearr_21135_21190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (14))){
var state_21090__$1 = state_21090;
var statearr_21136_21191 = state_21090__$1;
(statearr_21136_21191[(2)] = false);

(statearr_21136_21191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (26))){
var inst_21050 = (state_21090[(11)]);
var inst_21057 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21050);
var state_21090__$1 = state_21090;
var statearr_21137_21192 = state_21090__$1;
(statearr_21137_21192[(2)] = inst_21057);

(statearr_21137_21192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (16))){
var state_21090__$1 = state_21090;
var statearr_21138_21193 = state_21090__$1;
(statearr_21138_21193[(2)] = true);

(statearr_21138_21193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (38))){
var inst_21080 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21139_21194 = state_21090__$1;
(statearr_21139_21194[(2)] = inst_21080);

(statearr_21139_21194[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (30))){
var inst_21043 = (state_21090[(10)]);
var inst_21044 = (state_21090[(13)]);
var inst_21050 = (state_21090[(11)]);
var inst_21067 = cljs.core.empty_QMARK_.call(null,inst_21043);
var inst_21068 = inst_21044.call(null,inst_21050);
var inst_21069 = cljs.core.not.call(null,inst_21068);
var inst_21070 = (inst_21067) && (inst_21069);
var state_21090__$1 = state_21090;
var statearr_21140_21195 = state_21090__$1;
(statearr_21140_21195[(2)] = inst_21070);

(statearr_21140_21195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (10))){
var inst_20996 = (state_21090[(8)]);
var inst_21016 = (state_21090[(2)]);
var inst_21017 = cljs.core.get.call(null,inst_21016,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21018 = cljs.core.get.call(null,inst_21016,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21019 = cljs.core.get.call(null,inst_21016,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21020 = inst_20996;
var state_21090__$1 = (function (){var statearr_21141 = state_21090;
(statearr_21141[(7)] = inst_21020);

(statearr_21141[(16)] = inst_21017);

(statearr_21141[(17)] = inst_21018);

(statearr_21141[(18)] = inst_21019);

return statearr_21141;
})();
var statearr_21142_21196 = state_21090__$1;
(statearr_21142_21196[(2)] = null);

(statearr_21142_21196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (18))){
var inst_21034 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21143_21197 = state_21090__$1;
(statearr_21143_21197[(2)] = inst_21034);

(statearr_21143_21197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (37))){
var state_21090__$1 = state_21090;
var statearr_21144_21198 = state_21090__$1;
(statearr_21144_21198[(2)] = null);

(statearr_21144_21198[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (8))){
var inst_20996 = (state_21090[(8)]);
var inst_21013 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20996);
var state_21090__$1 = state_21090;
var statearr_21145_21199 = state_21090__$1;
(statearr_21145_21199[(2)] = inst_21013);

(statearr_21145_21199[(1)] = (10));


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
});})(c__19440__auto___21153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19328__auto__,c__19440__auto___21153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19329__auto__ = null;
var cljs$core$async$mix_$_state_machine__19329__auto____0 = (function (){
var statearr_21149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21149[(0)] = cljs$core$async$mix_$_state_machine__19329__auto__);

(statearr_21149[(1)] = (1));

return statearr_21149;
});
var cljs$core$async$mix_$_state_machine__19329__auto____1 = (function (state_21090){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21150){if((e21150 instanceof Object)){
var ex__19332__auto__ = e21150;
var statearr_21151_21200 = state_21090;
(statearr_21151_21200[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21201 = state_21090;
state_21090 = G__21201;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19329__auto__ = function(state_21090){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19329__auto____1.call(this,state_21090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19329__auto____0;
cljs$core$async$mix_$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19329__auto____1;
return cljs$core$async$mix_$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___21153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19442__auto__ = (function (){var statearr_21152 = f__19441__auto__.call(null);
(statearr_21152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___21153);

return statearr_21152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___21153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21202 = [];
var len__17863__auto___21205 = arguments.length;
var i__17864__auto___21206 = (0);
while(true){
if((i__17864__auto___21206 < len__17863__auto___21205)){
args21202.push((arguments[i__17864__auto___21206]));

var G__21207 = (i__17864__auto___21206 + (1));
i__17864__auto___21206 = G__21207;
continue;
} else {
}
break;
}

var G__21204 = args21202.length;
switch (G__21204) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21202.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args21210 = [];
var len__17863__auto___21335 = arguments.length;
var i__17864__auto___21336 = (0);
while(true){
if((i__17864__auto___21336 < len__17863__auto___21335)){
args21210.push((arguments[i__17864__auto___21336]));

var G__21337 = (i__17864__auto___21336 + (1));
i__17864__auto___21336 = G__21337;
continue;
} else {
}
break;
}

var G__21212 = args21210.length;
switch (G__21212) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21210.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__21209_SHARP_){
if(cljs.core.truth_(p1__21209_SHARP_.call(null,topic))){
return p1__21209_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21209_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21213 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21214){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21214 = meta21214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21215,meta21214__$1){
var self__ = this;
var _21215__$1 = this;
return (new cljs.core.async.t_cljs$core$async21213(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21214__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21215){
var self__ = this;
var _21215__$1 = this;
return self__.meta21214;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21214","meta21214",1424750704,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21213";

cljs.core.async.t_cljs$core$async21213.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21213");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21213 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21214){
return (new cljs.core.async.t_cljs$core$async21213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21214));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21213(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19440__auto___21339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___21339,mults,ensure_mult,p){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___21339,mults,ensure_mult,p){
return (function (state_21287){
var state_val_21288 = (state_21287[(1)]);
if((state_val_21288 === (7))){
var inst_21283 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
var statearr_21289_21340 = state_21287__$1;
(statearr_21289_21340[(2)] = inst_21283);

(statearr_21289_21340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (20))){
var state_21287__$1 = state_21287;
var statearr_21290_21341 = state_21287__$1;
(statearr_21290_21341[(2)] = null);

(statearr_21290_21341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (1))){
var state_21287__$1 = state_21287;
var statearr_21291_21342 = state_21287__$1;
(statearr_21291_21342[(2)] = null);

(statearr_21291_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (24))){
var inst_21266 = (state_21287[(7)]);
var inst_21275 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21266);
var state_21287__$1 = state_21287;
var statearr_21292_21343 = state_21287__$1;
(statearr_21292_21343[(2)] = inst_21275);

(statearr_21292_21343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (4))){
var inst_21218 = (state_21287[(8)]);
var inst_21218__$1 = (state_21287[(2)]);
var inst_21219 = (inst_21218__$1 == null);
var state_21287__$1 = (function (){var statearr_21293 = state_21287;
(statearr_21293[(8)] = inst_21218__$1);

return statearr_21293;
})();
if(cljs.core.truth_(inst_21219)){
var statearr_21294_21344 = state_21287__$1;
(statearr_21294_21344[(1)] = (5));

} else {
var statearr_21295_21345 = state_21287__$1;
(statearr_21295_21345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (15))){
var inst_21260 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
var statearr_21296_21346 = state_21287__$1;
(statearr_21296_21346[(2)] = inst_21260);

(statearr_21296_21346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (21))){
var inst_21280 = (state_21287[(2)]);
var state_21287__$1 = (function (){var statearr_21297 = state_21287;
(statearr_21297[(9)] = inst_21280);

return statearr_21297;
})();
var statearr_21298_21347 = state_21287__$1;
(statearr_21298_21347[(2)] = null);

(statearr_21298_21347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (13))){
var inst_21242 = (state_21287[(10)]);
var inst_21244 = cljs.core.chunked_seq_QMARK_.call(null,inst_21242);
var state_21287__$1 = state_21287;
if(inst_21244){
var statearr_21299_21348 = state_21287__$1;
(statearr_21299_21348[(1)] = (16));

} else {
var statearr_21300_21349 = state_21287__$1;
(statearr_21300_21349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (22))){
var inst_21272 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
if(cljs.core.truth_(inst_21272)){
var statearr_21301_21350 = state_21287__$1;
(statearr_21301_21350[(1)] = (23));

} else {
var statearr_21302_21351 = state_21287__$1;
(statearr_21302_21351[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (6))){
var inst_21268 = (state_21287[(11)]);
var inst_21218 = (state_21287[(8)]);
var inst_21266 = (state_21287[(7)]);
var inst_21266__$1 = topic_fn.call(null,inst_21218);
var inst_21267 = cljs.core.deref.call(null,mults);
var inst_21268__$1 = cljs.core.get.call(null,inst_21267,inst_21266__$1);
var state_21287__$1 = (function (){var statearr_21303 = state_21287;
(statearr_21303[(11)] = inst_21268__$1);

(statearr_21303[(7)] = inst_21266__$1);

return statearr_21303;
})();
if(cljs.core.truth_(inst_21268__$1)){
var statearr_21304_21352 = state_21287__$1;
(statearr_21304_21352[(1)] = (19));

} else {
var statearr_21305_21353 = state_21287__$1;
(statearr_21305_21353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (25))){
var inst_21277 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
var statearr_21306_21354 = state_21287__$1;
(statearr_21306_21354[(2)] = inst_21277);

(statearr_21306_21354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (17))){
var inst_21242 = (state_21287[(10)]);
var inst_21251 = cljs.core.first.call(null,inst_21242);
var inst_21252 = cljs.core.async.muxch_STAR_.call(null,inst_21251);
var inst_21253 = cljs.core.async.close_BANG_.call(null,inst_21252);
var inst_21254 = cljs.core.next.call(null,inst_21242);
var inst_21228 = inst_21254;
var inst_21229 = null;
var inst_21230 = (0);
var inst_21231 = (0);
var state_21287__$1 = (function (){var statearr_21307 = state_21287;
(statearr_21307[(12)] = inst_21229);

(statearr_21307[(13)] = inst_21228);

(statearr_21307[(14)] = inst_21231);

(statearr_21307[(15)] = inst_21253);

(statearr_21307[(16)] = inst_21230);

return statearr_21307;
})();
var statearr_21308_21355 = state_21287__$1;
(statearr_21308_21355[(2)] = null);

(statearr_21308_21355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (3))){
var inst_21285 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21287__$1,inst_21285);
} else {
if((state_val_21288 === (12))){
var inst_21262 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
var statearr_21309_21356 = state_21287__$1;
(statearr_21309_21356[(2)] = inst_21262);

(statearr_21309_21356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (2))){
var state_21287__$1 = state_21287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21287__$1,(4),ch);
} else {
if((state_val_21288 === (23))){
var state_21287__$1 = state_21287;
var statearr_21310_21357 = state_21287__$1;
(statearr_21310_21357[(2)] = null);

(statearr_21310_21357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (19))){
var inst_21268 = (state_21287[(11)]);
var inst_21218 = (state_21287[(8)]);
var inst_21270 = cljs.core.async.muxch_STAR_.call(null,inst_21268);
var state_21287__$1 = state_21287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21287__$1,(22),inst_21270,inst_21218);
} else {
if((state_val_21288 === (11))){
var inst_21228 = (state_21287[(13)]);
var inst_21242 = (state_21287[(10)]);
var inst_21242__$1 = cljs.core.seq.call(null,inst_21228);
var state_21287__$1 = (function (){var statearr_21311 = state_21287;
(statearr_21311[(10)] = inst_21242__$1);

return statearr_21311;
})();
if(inst_21242__$1){
var statearr_21312_21358 = state_21287__$1;
(statearr_21312_21358[(1)] = (13));

} else {
var statearr_21313_21359 = state_21287__$1;
(statearr_21313_21359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (9))){
var inst_21264 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
var statearr_21314_21360 = state_21287__$1;
(statearr_21314_21360[(2)] = inst_21264);

(statearr_21314_21360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (5))){
var inst_21225 = cljs.core.deref.call(null,mults);
var inst_21226 = cljs.core.vals.call(null,inst_21225);
var inst_21227 = cljs.core.seq.call(null,inst_21226);
var inst_21228 = inst_21227;
var inst_21229 = null;
var inst_21230 = (0);
var inst_21231 = (0);
var state_21287__$1 = (function (){var statearr_21315 = state_21287;
(statearr_21315[(12)] = inst_21229);

(statearr_21315[(13)] = inst_21228);

(statearr_21315[(14)] = inst_21231);

(statearr_21315[(16)] = inst_21230);

return statearr_21315;
})();
var statearr_21316_21361 = state_21287__$1;
(statearr_21316_21361[(2)] = null);

(statearr_21316_21361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (14))){
var state_21287__$1 = state_21287;
var statearr_21320_21362 = state_21287__$1;
(statearr_21320_21362[(2)] = null);

(statearr_21320_21362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (16))){
var inst_21242 = (state_21287[(10)]);
var inst_21246 = cljs.core.chunk_first.call(null,inst_21242);
var inst_21247 = cljs.core.chunk_rest.call(null,inst_21242);
var inst_21248 = cljs.core.count.call(null,inst_21246);
var inst_21228 = inst_21247;
var inst_21229 = inst_21246;
var inst_21230 = inst_21248;
var inst_21231 = (0);
var state_21287__$1 = (function (){var statearr_21321 = state_21287;
(statearr_21321[(12)] = inst_21229);

(statearr_21321[(13)] = inst_21228);

(statearr_21321[(14)] = inst_21231);

(statearr_21321[(16)] = inst_21230);

return statearr_21321;
})();
var statearr_21322_21363 = state_21287__$1;
(statearr_21322_21363[(2)] = null);

(statearr_21322_21363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (10))){
var inst_21229 = (state_21287[(12)]);
var inst_21228 = (state_21287[(13)]);
var inst_21231 = (state_21287[(14)]);
var inst_21230 = (state_21287[(16)]);
var inst_21236 = cljs.core._nth.call(null,inst_21229,inst_21231);
var inst_21237 = cljs.core.async.muxch_STAR_.call(null,inst_21236);
var inst_21238 = cljs.core.async.close_BANG_.call(null,inst_21237);
var inst_21239 = (inst_21231 + (1));
var tmp21317 = inst_21229;
var tmp21318 = inst_21228;
var tmp21319 = inst_21230;
var inst_21228__$1 = tmp21318;
var inst_21229__$1 = tmp21317;
var inst_21230__$1 = tmp21319;
var inst_21231__$1 = inst_21239;
var state_21287__$1 = (function (){var statearr_21323 = state_21287;
(statearr_21323[(17)] = inst_21238);

(statearr_21323[(12)] = inst_21229__$1);

(statearr_21323[(13)] = inst_21228__$1);

(statearr_21323[(14)] = inst_21231__$1);

(statearr_21323[(16)] = inst_21230__$1);

return statearr_21323;
})();
var statearr_21324_21364 = state_21287__$1;
(statearr_21324_21364[(2)] = null);

(statearr_21324_21364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (18))){
var inst_21257 = (state_21287[(2)]);
var state_21287__$1 = state_21287;
var statearr_21325_21365 = state_21287__$1;
(statearr_21325_21365[(2)] = inst_21257);

(statearr_21325_21365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21288 === (8))){
var inst_21231 = (state_21287[(14)]);
var inst_21230 = (state_21287[(16)]);
var inst_21233 = (inst_21231 < inst_21230);
var inst_21234 = inst_21233;
var state_21287__$1 = state_21287;
if(cljs.core.truth_(inst_21234)){
var statearr_21326_21366 = state_21287__$1;
(statearr_21326_21366[(1)] = (10));

} else {
var statearr_21327_21367 = state_21287__$1;
(statearr_21327_21367[(1)] = (11));

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
});})(c__19440__auto___21339,mults,ensure_mult,p))
;
return ((function (switch__19328__auto__,c__19440__auto___21339,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_21331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21331[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_21331[(1)] = (1));

return statearr_21331;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_21287){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21332){if((e21332 instanceof Object)){
var ex__19332__auto__ = e21332;
var statearr_21333_21368 = state_21287;
(statearr_21333_21368[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21369 = state_21287;
state_21287 = G__21369;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_21287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_21287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___21339,mults,ensure_mult,p))
})();
var state__19442__auto__ = (function (){var statearr_21334 = f__19441__auto__.call(null);
(statearr_21334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___21339);

return statearr_21334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___21339,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21370 = [];
var len__17863__auto___21373 = arguments.length;
var i__17864__auto___21374 = (0);
while(true){
if((i__17864__auto___21374 < len__17863__auto___21373)){
args21370.push((arguments[i__17864__auto___21374]));

var G__21375 = (i__17864__auto___21374 + (1));
i__17864__auto___21374 = G__21375;
continue;
} else {
}
break;
}

var G__21372 = args21370.length;
switch (G__21372) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21370.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21377 = [];
var len__17863__auto___21380 = arguments.length;
var i__17864__auto___21381 = (0);
while(true){
if((i__17864__auto___21381 < len__17863__auto___21380)){
args21377.push((arguments[i__17864__auto___21381]));

var G__21382 = (i__17864__auto___21381 + (1));
i__17864__auto___21381 = G__21382;
continue;
} else {
}
break;
}

var G__21379 = args21377.length;
switch (G__21379) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21377.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args21384 = [];
var len__17863__auto___21455 = arguments.length;
var i__17864__auto___21456 = (0);
while(true){
if((i__17864__auto___21456 < len__17863__auto___21455)){
args21384.push((arguments[i__17864__auto___21456]));

var G__21457 = (i__17864__auto___21456 + (1));
i__17864__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var G__21386 = args21384.length;
switch (G__21386) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21384.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19440__auto___21459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___21459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___21459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21425){
var state_val_21426 = (state_21425[(1)]);
if((state_val_21426 === (7))){
var state_21425__$1 = state_21425;
var statearr_21427_21460 = state_21425__$1;
(statearr_21427_21460[(2)] = null);

(statearr_21427_21460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (1))){
var state_21425__$1 = state_21425;
var statearr_21428_21461 = state_21425__$1;
(statearr_21428_21461[(2)] = null);

(statearr_21428_21461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (4))){
var inst_21389 = (state_21425[(7)]);
var inst_21391 = (inst_21389 < cnt);
var state_21425__$1 = state_21425;
if(cljs.core.truth_(inst_21391)){
var statearr_21429_21462 = state_21425__$1;
(statearr_21429_21462[(1)] = (6));

} else {
var statearr_21430_21463 = state_21425__$1;
(statearr_21430_21463[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (15))){
var inst_21421 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
var statearr_21431_21464 = state_21425__$1;
(statearr_21431_21464[(2)] = inst_21421);

(statearr_21431_21464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (13))){
var inst_21414 = cljs.core.async.close_BANG_.call(null,out);
var state_21425__$1 = state_21425;
var statearr_21432_21465 = state_21425__$1;
(statearr_21432_21465[(2)] = inst_21414);

(statearr_21432_21465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (6))){
var state_21425__$1 = state_21425;
var statearr_21433_21466 = state_21425__$1;
(statearr_21433_21466[(2)] = null);

(statearr_21433_21466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (3))){
var inst_21423 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21425__$1,inst_21423);
} else {
if((state_val_21426 === (12))){
var inst_21411 = (state_21425[(8)]);
var inst_21411__$1 = (state_21425[(2)]);
var inst_21412 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21411__$1);
var state_21425__$1 = (function (){var statearr_21434 = state_21425;
(statearr_21434[(8)] = inst_21411__$1);

return statearr_21434;
})();
if(cljs.core.truth_(inst_21412)){
var statearr_21435_21467 = state_21425__$1;
(statearr_21435_21467[(1)] = (13));

} else {
var statearr_21436_21468 = state_21425__$1;
(statearr_21436_21468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (2))){
var inst_21388 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21389 = (0);
var state_21425__$1 = (function (){var statearr_21437 = state_21425;
(statearr_21437[(7)] = inst_21389);

(statearr_21437[(9)] = inst_21388);

return statearr_21437;
})();
var statearr_21438_21469 = state_21425__$1;
(statearr_21438_21469[(2)] = null);

(statearr_21438_21469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (11))){
var inst_21389 = (state_21425[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21425,(10),Object,null,(9));
var inst_21398 = chs__$1.call(null,inst_21389);
var inst_21399 = done.call(null,inst_21389);
var inst_21400 = cljs.core.async.take_BANG_.call(null,inst_21398,inst_21399);
var state_21425__$1 = state_21425;
var statearr_21439_21470 = state_21425__$1;
(statearr_21439_21470[(2)] = inst_21400);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (9))){
var inst_21389 = (state_21425[(7)]);
var inst_21402 = (state_21425[(2)]);
var inst_21403 = (inst_21389 + (1));
var inst_21389__$1 = inst_21403;
var state_21425__$1 = (function (){var statearr_21440 = state_21425;
(statearr_21440[(10)] = inst_21402);

(statearr_21440[(7)] = inst_21389__$1);

return statearr_21440;
})();
var statearr_21441_21471 = state_21425__$1;
(statearr_21441_21471[(2)] = null);

(statearr_21441_21471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (5))){
var inst_21409 = (state_21425[(2)]);
var state_21425__$1 = (function (){var statearr_21442 = state_21425;
(statearr_21442[(11)] = inst_21409);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21425__$1,(12),dchan);
} else {
if((state_val_21426 === (14))){
var inst_21411 = (state_21425[(8)]);
var inst_21416 = cljs.core.apply.call(null,f,inst_21411);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21425__$1,(16),out,inst_21416);
} else {
if((state_val_21426 === (16))){
var inst_21418 = (state_21425[(2)]);
var state_21425__$1 = (function (){var statearr_21443 = state_21425;
(statearr_21443[(12)] = inst_21418);

return statearr_21443;
})();
var statearr_21444_21472 = state_21425__$1;
(statearr_21444_21472[(2)] = null);

(statearr_21444_21472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (10))){
var inst_21393 = (state_21425[(2)]);
var inst_21394 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21425__$1 = (function (){var statearr_21445 = state_21425;
(statearr_21445[(13)] = inst_21393);

return statearr_21445;
})();
var statearr_21446_21473 = state_21425__$1;
(statearr_21446_21473[(2)] = inst_21394);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (8))){
var inst_21407 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
var statearr_21447_21474 = state_21425__$1;
(statearr_21447_21474[(2)] = inst_21407);

(statearr_21447_21474[(1)] = (5));


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
});})(c__19440__auto___21459,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19328__auto__,c__19440__auto___21459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_21451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21451[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_21451[(1)] = (1));

return statearr_21451;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_21425){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21452){if((e21452 instanceof Object)){
var ex__19332__auto__ = e21452;
var statearr_21453_21475 = state_21425;
(statearr_21453_21475[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21476 = state_21425;
state_21425 = G__21476;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_21425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_21425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___21459,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19442__auto__ = (function (){var statearr_21454 = f__19441__auto__.call(null);
(statearr_21454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___21459);

return statearr_21454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___21459,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21478 = [];
var len__17863__auto___21534 = arguments.length;
var i__17864__auto___21535 = (0);
while(true){
if((i__17864__auto___21535 < len__17863__auto___21534)){
args21478.push((arguments[i__17864__auto___21535]));

var G__21536 = (i__17864__auto___21535 + (1));
i__17864__auto___21535 = G__21536;
continue;
} else {
}
break;
}

var G__21480 = args21478.length;
switch (G__21480) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21478.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19440__auto___21538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___21538,out){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___21538,out){
return (function (state_21510){
var state_val_21511 = (state_21510[(1)]);
if((state_val_21511 === (7))){
var inst_21489 = (state_21510[(7)]);
var inst_21490 = (state_21510[(8)]);
var inst_21489__$1 = (state_21510[(2)]);
var inst_21490__$1 = cljs.core.nth.call(null,inst_21489__$1,(0),null);
var inst_21491 = cljs.core.nth.call(null,inst_21489__$1,(1),null);
var inst_21492 = (inst_21490__$1 == null);
var state_21510__$1 = (function (){var statearr_21512 = state_21510;
(statearr_21512[(7)] = inst_21489__$1);

(statearr_21512[(8)] = inst_21490__$1);

(statearr_21512[(9)] = inst_21491);

return statearr_21512;
})();
if(cljs.core.truth_(inst_21492)){
var statearr_21513_21539 = state_21510__$1;
(statearr_21513_21539[(1)] = (8));

} else {
var statearr_21514_21540 = state_21510__$1;
(statearr_21514_21540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (1))){
var inst_21481 = cljs.core.vec.call(null,chs);
var inst_21482 = inst_21481;
var state_21510__$1 = (function (){var statearr_21515 = state_21510;
(statearr_21515[(10)] = inst_21482);

return statearr_21515;
})();
var statearr_21516_21541 = state_21510__$1;
(statearr_21516_21541[(2)] = null);

(statearr_21516_21541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (4))){
var inst_21482 = (state_21510[(10)]);
var state_21510__$1 = state_21510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21510__$1,(7),inst_21482);
} else {
if((state_val_21511 === (6))){
var inst_21506 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
var statearr_21517_21542 = state_21510__$1;
(statearr_21517_21542[(2)] = inst_21506);

(statearr_21517_21542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (3))){
var inst_21508 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21510__$1,inst_21508);
} else {
if((state_val_21511 === (2))){
var inst_21482 = (state_21510[(10)]);
var inst_21484 = cljs.core.count.call(null,inst_21482);
var inst_21485 = (inst_21484 > (0));
var state_21510__$1 = state_21510;
if(cljs.core.truth_(inst_21485)){
var statearr_21519_21543 = state_21510__$1;
(statearr_21519_21543[(1)] = (4));

} else {
var statearr_21520_21544 = state_21510__$1;
(statearr_21520_21544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (11))){
var inst_21482 = (state_21510[(10)]);
var inst_21499 = (state_21510[(2)]);
var tmp21518 = inst_21482;
var inst_21482__$1 = tmp21518;
var state_21510__$1 = (function (){var statearr_21521 = state_21510;
(statearr_21521[(11)] = inst_21499);

(statearr_21521[(10)] = inst_21482__$1);

return statearr_21521;
})();
var statearr_21522_21545 = state_21510__$1;
(statearr_21522_21545[(2)] = null);

(statearr_21522_21545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (9))){
var inst_21490 = (state_21510[(8)]);
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21510__$1,(11),out,inst_21490);
} else {
if((state_val_21511 === (5))){
var inst_21504 = cljs.core.async.close_BANG_.call(null,out);
var state_21510__$1 = state_21510;
var statearr_21523_21546 = state_21510__$1;
(statearr_21523_21546[(2)] = inst_21504);

(statearr_21523_21546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (10))){
var inst_21502 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
var statearr_21524_21547 = state_21510__$1;
(statearr_21524_21547[(2)] = inst_21502);

(statearr_21524_21547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (8))){
var inst_21489 = (state_21510[(7)]);
var inst_21490 = (state_21510[(8)]);
var inst_21491 = (state_21510[(9)]);
var inst_21482 = (state_21510[(10)]);
var inst_21494 = (function (){var cs = inst_21482;
var vec__21487 = inst_21489;
var v = inst_21490;
var c = inst_21491;
return ((function (cs,vec__21487,v,c,inst_21489,inst_21490,inst_21491,inst_21482,state_val_21511,c__19440__auto___21538,out){
return (function (p1__21477_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21477_SHARP_);
});
;})(cs,vec__21487,v,c,inst_21489,inst_21490,inst_21491,inst_21482,state_val_21511,c__19440__auto___21538,out))
})();
var inst_21495 = cljs.core.filterv.call(null,inst_21494,inst_21482);
var inst_21482__$1 = inst_21495;
var state_21510__$1 = (function (){var statearr_21525 = state_21510;
(statearr_21525[(10)] = inst_21482__$1);

return statearr_21525;
})();
var statearr_21526_21548 = state_21510__$1;
(statearr_21526_21548[(2)] = null);

(statearr_21526_21548[(1)] = (2));


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
});})(c__19440__auto___21538,out))
;
return ((function (switch__19328__auto__,c__19440__auto___21538,out){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_21530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21530[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_21530[(1)] = (1));

return statearr_21530;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_21510){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21531){if((e21531 instanceof Object)){
var ex__19332__auto__ = e21531;
var statearr_21532_21549 = state_21510;
(statearr_21532_21549[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21550 = state_21510;
state_21510 = G__21550;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_21510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_21510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___21538,out))
})();
var state__19442__auto__ = (function (){var statearr_21533 = f__19441__auto__.call(null);
(statearr_21533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___21538);

return statearr_21533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___21538,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21551 = [];
var len__17863__auto___21600 = arguments.length;
var i__17864__auto___21601 = (0);
while(true){
if((i__17864__auto___21601 < len__17863__auto___21600)){
args21551.push((arguments[i__17864__auto___21601]));

var G__21602 = (i__17864__auto___21601 + (1));
i__17864__auto___21601 = G__21602;
continue;
} else {
}
break;
}

var G__21553 = args21551.length;
switch (G__21553) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21551.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19440__auto___21604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___21604,out){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___21604,out){
return (function (state_21577){
var state_val_21578 = (state_21577[(1)]);
if((state_val_21578 === (7))){
var inst_21559 = (state_21577[(7)]);
var inst_21559__$1 = (state_21577[(2)]);
var inst_21560 = (inst_21559__$1 == null);
var inst_21561 = cljs.core.not.call(null,inst_21560);
var state_21577__$1 = (function (){var statearr_21579 = state_21577;
(statearr_21579[(7)] = inst_21559__$1);

return statearr_21579;
})();
if(inst_21561){
var statearr_21580_21605 = state_21577__$1;
(statearr_21580_21605[(1)] = (8));

} else {
var statearr_21581_21606 = state_21577__$1;
(statearr_21581_21606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (1))){
var inst_21554 = (0);
var state_21577__$1 = (function (){var statearr_21582 = state_21577;
(statearr_21582[(8)] = inst_21554);

return statearr_21582;
})();
var statearr_21583_21607 = state_21577__$1;
(statearr_21583_21607[(2)] = null);

(statearr_21583_21607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (4))){
var state_21577__$1 = state_21577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21577__$1,(7),ch);
} else {
if((state_val_21578 === (6))){
var inst_21572 = (state_21577[(2)]);
var state_21577__$1 = state_21577;
var statearr_21584_21608 = state_21577__$1;
(statearr_21584_21608[(2)] = inst_21572);

(statearr_21584_21608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (3))){
var inst_21574 = (state_21577[(2)]);
var inst_21575 = cljs.core.async.close_BANG_.call(null,out);
var state_21577__$1 = (function (){var statearr_21585 = state_21577;
(statearr_21585[(9)] = inst_21574);

return statearr_21585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21577__$1,inst_21575);
} else {
if((state_val_21578 === (2))){
var inst_21554 = (state_21577[(8)]);
var inst_21556 = (inst_21554 < n);
var state_21577__$1 = state_21577;
if(cljs.core.truth_(inst_21556)){
var statearr_21586_21609 = state_21577__$1;
(statearr_21586_21609[(1)] = (4));

} else {
var statearr_21587_21610 = state_21577__$1;
(statearr_21587_21610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (11))){
var inst_21554 = (state_21577[(8)]);
var inst_21564 = (state_21577[(2)]);
var inst_21565 = (inst_21554 + (1));
var inst_21554__$1 = inst_21565;
var state_21577__$1 = (function (){var statearr_21588 = state_21577;
(statearr_21588[(10)] = inst_21564);

(statearr_21588[(8)] = inst_21554__$1);

return statearr_21588;
})();
var statearr_21589_21611 = state_21577__$1;
(statearr_21589_21611[(2)] = null);

(statearr_21589_21611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (9))){
var state_21577__$1 = state_21577;
var statearr_21590_21612 = state_21577__$1;
(statearr_21590_21612[(2)] = null);

(statearr_21590_21612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (5))){
var state_21577__$1 = state_21577;
var statearr_21591_21613 = state_21577__$1;
(statearr_21591_21613[(2)] = null);

(statearr_21591_21613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (10))){
var inst_21569 = (state_21577[(2)]);
var state_21577__$1 = state_21577;
var statearr_21592_21614 = state_21577__$1;
(statearr_21592_21614[(2)] = inst_21569);

(statearr_21592_21614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21578 === (8))){
var inst_21559 = (state_21577[(7)]);
var state_21577__$1 = state_21577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21577__$1,(11),out,inst_21559);
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
});})(c__19440__auto___21604,out))
;
return ((function (switch__19328__auto__,c__19440__auto___21604,out){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_21596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21596[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_21596[(1)] = (1));

return statearr_21596;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_21577){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21597){if((e21597 instanceof Object)){
var ex__19332__auto__ = e21597;
var statearr_21598_21615 = state_21577;
(statearr_21598_21615[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21616 = state_21577;
state_21577 = G__21616;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_21577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_21577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___21604,out))
})();
var state__19442__auto__ = (function (){var statearr_21599 = f__19441__auto__.call(null);
(statearr_21599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___21604);

return statearr_21599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___21604,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21624 = (function (map_LT_,f,ch,meta21625){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21625 = meta21625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21626,meta21625__$1){
var self__ = this;
var _21626__$1 = this;
return (new cljs.core.async.t_cljs$core$async21624(self__.map_LT_,self__.f,self__.ch,meta21625__$1));
});

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21626){
var self__ = this;
var _21626__$1 = this;
return self__.meta21625;
});

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21627 = (function (map_LT_,f,ch,meta21625,_,fn1,meta21628){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21625 = meta21625;
this._ = _;
this.fn1 = fn1;
this.meta21628 = meta21628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21629,meta21628__$1){
var self__ = this;
var _21629__$1 = this;
return (new cljs.core.async.t_cljs$core$async21627(self__.map_LT_,self__.f,self__.ch,self__.meta21625,self__._,self__.fn1,meta21628__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21629){
var self__ = this;
var _21629__$1 = this;
return self__.meta21628;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21627.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21617_SHARP_){
return f1.call(null,(((p1__21617_SHARP_ == null))?null:self__.f.call(null,p1__21617_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21627.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21625","meta21625",872279611,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21624","cljs.core.async/t_cljs$core$async21624",-1183986351,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21628","meta21628",1938595066,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21627";

cljs.core.async.t_cljs$core$async21627.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21627");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21627 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21627(map_LT___$1,f__$1,ch__$1,meta21625__$1,___$2,fn1__$1,meta21628){
return (new cljs.core.async.t_cljs$core$async21627(map_LT___$1,f__$1,ch__$1,meta21625__$1,___$2,fn1__$1,meta21628));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21627(self__.map_LT_,self__.f,self__.ch,self__.meta21625,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21625","meta21625",872279611,null)], null);
});

cljs.core.async.t_cljs$core$async21624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21624";

cljs.core.async.t_cljs$core$async21624.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21624");
});

cljs.core.async.__GT_t_cljs$core$async21624 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21624(map_LT___$1,f__$1,ch__$1,meta21625){
return (new cljs.core.async.t_cljs$core$async21624(map_LT___$1,f__$1,ch__$1,meta21625));
});

}

return (new cljs.core.async.t_cljs$core$async21624(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21633 = (function (map_GT_,f,ch,meta21634){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21634 = meta21634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21635,meta21634__$1){
var self__ = this;
var _21635__$1 = this;
return (new cljs.core.async.t_cljs$core$async21633(self__.map_GT_,self__.f,self__.ch,meta21634__$1));
});

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21635){
var self__ = this;
var _21635__$1 = this;
return self__.meta21634;
});

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21634","meta21634",1606794284,null)], null);
});

cljs.core.async.t_cljs$core$async21633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21633";

cljs.core.async.t_cljs$core$async21633.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21633");
});

cljs.core.async.__GT_t_cljs$core$async21633 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21633(map_GT___$1,f__$1,ch__$1,meta21634){
return (new cljs.core.async.t_cljs$core$async21633(map_GT___$1,f__$1,ch__$1,meta21634));
});

}

return (new cljs.core.async.t_cljs$core$async21633(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21639 = (function (filter_GT_,p,ch,meta21640){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21640 = meta21640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21641,meta21640__$1){
var self__ = this;
var _21641__$1 = this;
return (new cljs.core.async.t_cljs$core$async21639(self__.filter_GT_,self__.p,self__.ch,meta21640__$1));
});

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21641){
var self__ = this;
var _21641__$1 = this;
return self__.meta21640;
});

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21640","meta21640",1306697811,null)], null);
});

cljs.core.async.t_cljs$core$async21639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21639";

cljs.core.async.t_cljs$core$async21639.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21639");
});

cljs.core.async.__GT_t_cljs$core$async21639 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21639(filter_GT___$1,p__$1,ch__$1,meta21640){
return (new cljs.core.async.t_cljs$core$async21639(filter_GT___$1,p__$1,ch__$1,meta21640));
});

}

return (new cljs.core.async.t_cljs$core$async21639(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21642 = [];
var len__17863__auto___21686 = arguments.length;
var i__17864__auto___21687 = (0);
while(true){
if((i__17864__auto___21687 < len__17863__auto___21686)){
args21642.push((arguments[i__17864__auto___21687]));

var G__21688 = (i__17864__auto___21687 + (1));
i__17864__auto___21687 = G__21688;
continue;
} else {
}
break;
}

var G__21644 = args21642.length;
switch (G__21644) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21642.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19440__auto___21690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___21690,out){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___21690,out){
return (function (state_21665){
var state_val_21666 = (state_21665[(1)]);
if((state_val_21666 === (7))){
var inst_21661 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
var statearr_21667_21691 = state_21665__$1;
(statearr_21667_21691[(2)] = inst_21661);

(statearr_21667_21691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (1))){
var state_21665__$1 = state_21665;
var statearr_21668_21692 = state_21665__$1;
(statearr_21668_21692[(2)] = null);

(statearr_21668_21692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (4))){
var inst_21647 = (state_21665[(7)]);
var inst_21647__$1 = (state_21665[(2)]);
var inst_21648 = (inst_21647__$1 == null);
var state_21665__$1 = (function (){var statearr_21669 = state_21665;
(statearr_21669[(7)] = inst_21647__$1);

return statearr_21669;
})();
if(cljs.core.truth_(inst_21648)){
var statearr_21670_21693 = state_21665__$1;
(statearr_21670_21693[(1)] = (5));

} else {
var statearr_21671_21694 = state_21665__$1;
(statearr_21671_21694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (6))){
var inst_21647 = (state_21665[(7)]);
var inst_21652 = p.call(null,inst_21647);
var state_21665__$1 = state_21665;
if(cljs.core.truth_(inst_21652)){
var statearr_21672_21695 = state_21665__$1;
(statearr_21672_21695[(1)] = (8));

} else {
var statearr_21673_21696 = state_21665__$1;
(statearr_21673_21696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (3))){
var inst_21663 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21665__$1,inst_21663);
} else {
if((state_val_21666 === (2))){
var state_21665__$1 = state_21665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21665__$1,(4),ch);
} else {
if((state_val_21666 === (11))){
var inst_21655 = (state_21665[(2)]);
var state_21665__$1 = state_21665;
var statearr_21674_21697 = state_21665__$1;
(statearr_21674_21697[(2)] = inst_21655);

(statearr_21674_21697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (9))){
var state_21665__$1 = state_21665;
var statearr_21675_21698 = state_21665__$1;
(statearr_21675_21698[(2)] = null);

(statearr_21675_21698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (5))){
var inst_21650 = cljs.core.async.close_BANG_.call(null,out);
var state_21665__$1 = state_21665;
var statearr_21676_21699 = state_21665__$1;
(statearr_21676_21699[(2)] = inst_21650);

(statearr_21676_21699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (10))){
var inst_21658 = (state_21665[(2)]);
var state_21665__$1 = (function (){var statearr_21677 = state_21665;
(statearr_21677[(8)] = inst_21658);

return statearr_21677;
})();
var statearr_21678_21700 = state_21665__$1;
(statearr_21678_21700[(2)] = null);

(statearr_21678_21700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21666 === (8))){
var inst_21647 = (state_21665[(7)]);
var state_21665__$1 = state_21665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21665__$1,(11),out,inst_21647);
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
});})(c__19440__auto___21690,out))
;
return ((function (switch__19328__auto__,c__19440__auto___21690,out){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_21682 = [null,null,null,null,null,null,null,null,null];
(statearr_21682[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_21682[(1)] = (1));

return statearr_21682;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_21665){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21683){if((e21683 instanceof Object)){
var ex__19332__auto__ = e21683;
var statearr_21684_21701 = state_21665;
(statearr_21684_21701[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21702 = state_21665;
state_21665 = G__21702;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_21665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_21665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___21690,out))
})();
var state__19442__auto__ = (function (){var statearr_21685 = f__19441__auto__.call(null);
(statearr_21685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___21690);

return statearr_21685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___21690,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21703 = [];
var len__17863__auto___21706 = arguments.length;
var i__17864__auto___21707 = (0);
while(true){
if((i__17864__auto___21707 < len__17863__auto___21706)){
args21703.push((arguments[i__17864__auto___21707]));

var G__21708 = (i__17864__auto___21707 + (1));
i__17864__auto___21707 = G__21708;
continue;
} else {
}
break;
}

var G__21705 = args21703.length;
switch (G__21705) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21703.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto__){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto__){
return (function (state_21875){
var state_val_21876 = (state_21875[(1)]);
if((state_val_21876 === (7))){
var inst_21871 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21877_21918 = state_21875__$1;
(statearr_21877_21918[(2)] = inst_21871);

(statearr_21877_21918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (20))){
var inst_21841 = (state_21875[(7)]);
var inst_21852 = (state_21875[(2)]);
var inst_21853 = cljs.core.next.call(null,inst_21841);
var inst_21827 = inst_21853;
var inst_21828 = null;
var inst_21829 = (0);
var inst_21830 = (0);
var state_21875__$1 = (function (){var statearr_21878 = state_21875;
(statearr_21878[(8)] = inst_21830);

(statearr_21878[(9)] = inst_21827);

(statearr_21878[(10)] = inst_21828);

(statearr_21878[(11)] = inst_21829);

(statearr_21878[(12)] = inst_21852);

return statearr_21878;
})();
var statearr_21879_21919 = state_21875__$1;
(statearr_21879_21919[(2)] = null);

(statearr_21879_21919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (1))){
var state_21875__$1 = state_21875;
var statearr_21880_21920 = state_21875__$1;
(statearr_21880_21920[(2)] = null);

(statearr_21880_21920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (4))){
var inst_21816 = (state_21875[(13)]);
var inst_21816__$1 = (state_21875[(2)]);
var inst_21817 = (inst_21816__$1 == null);
var state_21875__$1 = (function (){var statearr_21881 = state_21875;
(statearr_21881[(13)] = inst_21816__$1);

return statearr_21881;
})();
if(cljs.core.truth_(inst_21817)){
var statearr_21882_21921 = state_21875__$1;
(statearr_21882_21921[(1)] = (5));

} else {
var statearr_21883_21922 = state_21875__$1;
(statearr_21883_21922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (15))){
var state_21875__$1 = state_21875;
var statearr_21887_21923 = state_21875__$1;
(statearr_21887_21923[(2)] = null);

(statearr_21887_21923[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (21))){
var state_21875__$1 = state_21875;
var statearr_21888_21924 = state_21875__$1;
(statearr_21888_21924[(2)] = null);

(statearr_21888_21924[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (13))){
var inst_21830 = (state_21875[(8)]);
var inst_21827 = (state_21875[(9)]);
var inst_21828 = (state_21875[(10)]);
var inst_21829 = (state_21875[(11)]);
var inst_21837 = (state_21875[(2)]);
var inst_21838 = (inst_21830 + (1));
var tmp21884 = inst_21827;
var tmp21885 = inst_21828;
var tmp21886 = inst_21829;
var inst_21827__$1 = tmp21884;
var inst_21828__$1 = tmp21885;
var inst_21829__$1 = tmp21886;
var inst_21830__$1 = inst_21838;
var state_21875__$1 = (function (){var statearr_21889 = state_21875;
(statearr_21889[(8)] = inst_21830__$1);

(statearr_21889[(9)] = inst_21827__$1);

(statearr_21889[(14)] = inst_21837);

(statearr_21889[(10)] = inst_21828__$1);

(statearr_21889[(11)] = inst_21829__$1);

return statearr_21889;
})();
var statearr_21890_21925 = state_21875__$1;
(statearr_21890_21925[(2)] = null);

(statearr_21890_21925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (22))){
var state_21875__$1 = state_21875;
var statearr_21891_21926 = state_21875__$1;
(statearr_21891_21926[(2)] = null);

(statearr_21891_21926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (6))){
var inst_21816 = (state_21875[(13)]);
var inst_21825 = f.call(null,inst_21816);
var inst_21826 = cljs.core.seq.call(null,inst_21825);
var inst_21827 = inst_21826;
var inst_21828 = null;
var inst_21829 = (0);
var inst_21830 = (0);
var state_21875__$1 = (function (){var statearr_21892 = state_21875;
(statearr_21892[(8)] = inst_21830);

(statearr_21892[(9)] = inst_21827);

(statearr_21892[(10)] = inst_21828);

(statearr_21892[(11)] = inst_21829);

return statearr_21892;
})();
var statearr_21893_21927 = state_21875__$1;
(statearr_21893_21927[(2)] = null);

(statearr_21893_21927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (17))){
var inst_21841 = (state_21875[(7)]);
var inst_21845 = cljs.core.chunk_first.call(null,inst_21841);
var inst_21846 = cljs.core.chunk_rest.call(null,inst_21841);
var inst_21847 = cljs.core.count.call(null,inst_21845);
var inst_21827 = inst_21846;
var inst_21828 = inst_21845;
var inst_21829 = inst_21847;
var inst_21830 = (0);
var state_21875__$1 = (function (){var statearr_21894 = state_21875;
(statearr_21894[(8)] = inst_21830);

(statearr_21894[(9)] = inst_21827);

(statearr_21894[(10)] = inst_21828);

(statearr_21894[(11)] = inst_21829);

return statearr_21894;
})();
var statearr_21895_21928 = state_21875__$1;
(statearr_21895_21928[(2)] = null);

(statearr_21895_21928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (3))){
var inst_21873 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21875__$1,inst_21873);
} else {
if((state_val_21876 === (12))){
var inst_21861 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21896_21929 = state_21875__$1;
(statearr_21896_21929[(2)] = inst_21861);

(statearr_21896_21929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (2))){
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21875__$1,(4),in$);
} else {
if((state_val_21876 === (23))){
var inst_21869 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21897_21930 = state_21875__$1;
(statearr_21897_21930[(2)] = inst_21869);

(statearr_21897_21930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (19))){
var inst_21856 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21898_21931 = state_21875__$1;
(statearr_21898_21931[(2)] = inst_21856);

(statearr_21898_21931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (11))){
var inst_21827 = (state_21875[(9)]);
var inst_21841 = (state_21875[(7)]);
var inst_21841__$1 = cljs.core.seq.call(null,inst_21827);
var state_21875__$1 = (function (){var statearr_21899 = state_21875;
(statearr_21899[(7)] = inst_21841__$1);

return statearr_21899;
})();
if(inst_21841__$1){
var statearr_21900_21932 = state_21875__$1;
(statearr_21900_21932[(1)] = (14));

} else {
var statearr_21901_21933 = state_21875__$1;
(statearr_21901_21933[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (9))){
var inst_21863 = (state_21875[(2)]);
var inst_21864 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21875__$1 = (function (){var statearr_21902 = state_21875;
(statearr_21902[(15)] = inst_21863);

return statearr_21902;
})();
if(cljs.core.truth_(inst_21864)){
var statearr_21903_21934 = state_21875__$1;
(statearr_21903_21934[(1)] = (21));

} else {
var statearr_21904_21935 = state_21875__$1;
(statearr_21904_21935[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (5))){
var inst_21819 = cljs.core.async.close_BANG_.call(null,out);
var state_21875__$1 = state_21875;
var statearr_21905_21936 = state_21875__$1;
(statearr_21905_21936[(2)] = inst_21819);

(statearr_21905_21936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (14))){
var inst_21841 = (state_21875[(7)]);
var inst_21843 = cljs.core.chunked_seq_QMARK_.call(null,inst_21841);
var state_21875__$1 = state_21875;
if(inst_21843){
var statearr_21906_21937 = state_21875__$1;
(statearr_21906_21937[(1)] = (17));

} else {
var statearr_21907_21938 = state_21875__$1;
(statearr_21907_21938[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (16))){
var inst_21859 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21908_21939 = state_21875__$1;
(statearr_21908_21939[(2)] = inst_21859);

(statearr_21908_21939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (10))){
var inst_21830 = (state_21875[(8)]);
var inst_21828 = (state_21875[(10)]);
var inst_21835 = cljs.core._nth.call(null,inst_21828,inst_21830);
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21875__$1,(13),out,inst_21835);
} else {
if((state_val_21876 === (18))){
var inst_21841 = (state_21875[(7)]);
var inst_21850 = cljs.core.first.call(null,inst_21841);
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21875__$1,(20),out,inst_21850);
} else {
if((state_val_21876 === (8))){
var inst_21830 = (state_21875[(8)]);
var inst_21829 = (state_21875[(11)]);
var inst_21832 = (inst_21830 < inst_21829);
var inst_21833 = inst_21832;
var state_21875__$1 = state_21875;
if(cljs.core.truth_(inst_21833)){
var statearr_21909_21940 = state_21875__$1;
(statearr_21909_21940[(1)] = (10));

} else {
var statearr_21910_21941 = state_21875__$1;
(statearr_21910_21941[(1)] = (11));

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
});})(c__19440__auto__))
;
return ((function (switch__19328__auto__,c__19440__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19329__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19329__auto____0 = (function (){
var statearr_21914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21914[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19329__auto__);

(statearr_21914[(1)] = (1));

return statearr_21914;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19329__auto____1 = (function (state_21875){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e21915){if((e21915 instanceof Object)){
var ex__19332__auto__ = e21915;
var statearr_21916_21942 = state_21875;
(statearr_21916_21942[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21943 = state_21875;
state_21875 = G__21943;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19329__auto__ = function(state_21875){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19329__auto____1.call(this,state_21875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19329__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19329__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto__))
})();
var state__19442__auto__ = (function (){var statearr_21917 = f__19441__auto__.call(null);
(statearr_21917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto__);

return statearr_21917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto__))
);

return c__19440__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21944 = [];
var len__17863__auto___21947 = arguments.length;
var i__17864__auto___21948 = (0);
while(true){
if((i__17864__auto___21948 < len__17863__auto___21947)){
args21944.push((arguments[i__17864__auto___21948]));

var G__21949 = (i__17864__auto___21948 + (1));
i__17864__auto___21948 = G__21949;
continue;
} else {
}
break;
}

var G__21946 = args21944.length;
switch (G__21946) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21944.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21951 = [];
var len__17863__auto___21954 = arguments.length;
var i__17864__auto___21955 = (0);
while(true){
if((i__17864__auto___21955 < len__17863__auto___21954)){
args21951.push((arguments[i__17864__auto___21955]));

var G__21956 = (i__17864__auto___21955 + (1));
i__17864__auto___21955 = G__21956;
continue;
} else {
}
break;
}

var G__21953 = args21951.length;
switch (G__21953) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21951.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21958 = [];
var len__17863__auto___22009 = arguments.length;
var i__17864__auto___22010 = (0);
while(true){
if((i__17864__auto___22010 < len__17863__auto___22009)){
args21958.push((arguments[i__17864__auto___22010]));

var G__22011 = (i__17864__auto___22010 + (1));
i__17864__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var G__21960 = args21958.length;
switch (G__21960) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21958.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19440__auto___22013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___22013,out){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___22013,out){
return (function (state_21984){
var state_val_21985 = (state_21984[(1)]);
if((state_val_21985 === (7))){
var inst_21979 = (state_21984[(2)]);
var state_21984__$1 = state_21984;
var statearr_21986_22014 = state_21984__$1;
(statearr_21986_22014[(2)] = inst_21979);

(statearr_21986_22014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (1))){
var inst_21961 = null;
var state_21984__$1 = (function (){var statearr_21987 = state_21984;
(statearr_21987[(7)] = inst_21961);

return statearr_21987;
})();
var statearr_21988_22015 = state_21984__$1;
(statearr_21988_22015[(2)] = null);

(statearr_21988_22015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (4))){
var inst_21964 = (state_21984[(8)]);
var inst_21964__$1 = (state_21984[(2)]);
var inst_21965 = (inst_21964__$1 == null);
var inst_21966 = cljs.core.not.call(null,inst_21965);
var state_21984__$1 = (function (){var statearr_21989 = state_21984;
(statearr_21989[(8)] = inst_21964__$1);

return statearr_21989;
})();
if(inst_21966){
var statearr_21990_22016 = state_21984__$1;
(statearr_21990_22016[(1)] = (5));

} else {
var statearr_21991_22017 = state_21984__$1;
(statearr_21991_22017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (6))){
var state_21984__$1 = state_21984;
var statearr_21992_22018 = state_21984__$1;
(statearr_21992_22018[(2)] = null);

(statearr_21992_22018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (3))){
var inst_21981 = (state_21984[(2)]);
var inst_21982 = cljs.core.async.close_BANG_.call(null,out);
var state_21984__$1 = (function (){var statearr_21993 = state_21984;
(statearr_21993[(9)] = inst_21981);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21984__$1,inst_21982);
} else {
if((state_val_21985 === (2))){
var state_21984__$1 = state_21984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21984__$1,(4),ch);
} else {
if((state_val_21985 === (11))){
var inst_21964 = (state_21984[(8)]);
var inst_21973 = (state_21984[(2)]);
var inst_21961 = inst_21964;
var state_21984__$1 = (function (){var statearr_21994 = state_21984;
(statearr_21994[(10)] = inst_21973);

(statearr_21994[(7)] = inst_21961);

return statearr_21994;
})();
var statearr_21995_22019 = state_21984__$1;
(statearr_21995_22019[(2)] = null);

(statearr_21995_22019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (9))){
var inst_21964 = (state_21984[(8)]);
var state_21984__$1 = state_21984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21984__$1,(11),out,inst_21964);
} else {
if((state_val_21985 === (5))){
var inst_21964 = (state_21984[(8)]);
var inst_21961 = (state_21984[(7)]);
var inst_21968 = cljs.core._EQ_.call(null,inst_21964,inst_21961);
var state_21984__$1 = state_21984;
if(inst_21968){
var statearr_21997_22020 = state_21984__$1;
(statearr_21997_22020[(1)] = (8));

} else {
var statearr_21998_22021 = state_21984__$1;
(statearr_21998_22021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (10))){
var inst_21976 = (state_21984[(2)]);
var state_21984__$1 = state_21984;
var statearr_21999_22022 = state_21984__$1;
(statearr_21999_22022[(2)] = inst_21976);

(statearr_21999_22022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (8))){
var inst_21961 = (state_21984[(7)]);
var tmp21996 = inst_21961;
var inst_21961__$1 = tmp21996;
var state_21984__$1 = (function (){var statearr_22000 = state_21984;
(statearr_22000[(7)] = inst_21961__$1);

return statearr_22000;
})();
var statearr_22001_22023 = state_21984__$1;
(statearr_22001_22023[(2)] = null);

(statearr_22001_22023[(1)] = (2));


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
});})(c__19440__auto___22013,out))
;
return ((function (switch__19328__auto__,c__19440__auto___22013,out){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_22005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22005[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_22005[(1)] = (1));

return statearr_22005;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_21984){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_21984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e22006){if((e22006 instanceof Object)){
var ex__19332__auto__ = e22006;
var statearr_22007_22024 = state_21984;
(statearr_22007_22024[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22025 = state_21984;
state_21984 = G__22025;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_21984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_21984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___22013,out))
})();
var state__19442__auto__ = (function (){var statearr_22008 = f__19441__auto__.call(null);
(statearr_22008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___22013);

return statearr_22008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___22013,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22026 = [];
var len__17863__auto___22096 = arguments.length;
var i__17864__auto___22097 = (0);
while(true){
if((i__17864__auto___22097 < len__17863__auto___22096)){
args22026.push((arguments[i__17864__auto___22097]));

var G__22098 = (i__17864__auto___22097 + (1));
i__17864__auto___22097 = G__22098;
continue;
} else {
}
break;
}

var G__22028 = args22026.length;
switch (G__22028) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22026.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19440__auto___22100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___22100,out){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___22100,out){
return (function (state_22066){
var state_val_22067 = (state_22066[(1)]);
if((state_val_22067 === (7))){
var inst_22062 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22068_22101 = state_22066__$1;
(statearr_22068_22101[(2)] = inst_22062);

(statearr_22068_22101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (1))){
var inst_22029 = (new Array(n));
var inst_22030 = inst_22029;
var inst_22031 = (0);
var state_22066__$1 = (function (){var statearr_22069 = state_22066;
(statearr_22069[(7)] = inst_22030);

(statearr_22069[(8)] = inst_22031);

return statearr_22069;
})();
var statearr_22070_22102 = state_22066__$1;
(statearr_22070_22102[(2)] = null);

(statearr_22070_22102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (4))){
var inst_22034 = (state_22066[(9)]);
var inst_22034__$1 = (state_22066[(2)]);
var inst_22035 = (inst_22034__$1 == null);
var inst_22036 = cljs.core.not.call(null,inst_22035);
var state_22066__$1 = (function (){var statearr_22071 = state_22066;
(statearr_22071[(9)] = inst_22034__$1);

return statearr_22071;
})();
if(inst_22036){
var statearr_22072_22103 = state_22066__$1;
(statearr_22072_22103[(1)] = (5));

} else {
var statearr_22073_22104 = state_22066__$1;
(statearr_22073_22104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (15))){
var inst_22056 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22074_22105 = state_22066__$1;
(statearr_22074_22105[(2)] = inst_22056);

(statearr_22074_22105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (13))){
var state_22066__$1 = state_22066;
var statearr_22075_22106 = state_22066__$1;
(statearr_22075_22106[(2)] = null);

(statearr_22075_22106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (6))){
var inst_22031 = (state_22066[(8)]);
var inst_22052 = (inst_22031 > (0));
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22052)){
var statearr_22076_22107 = state_22066__$1;
(statearr_22076_22107[(1)] = (12));

} else {
var statearr_22077_22108 = state_22066__$1;
(statearr_22077_22108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (3))){
var inst_22064 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22066__$1,inst_22064);
} else {
if((state_val_22067 === (12))){
var inst_22030 = (state_22066[(7)]);
var inst_22054 = cljs.core.vec.call(null,inst_22030);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22066__$1,(15),out,inst_22054);
} else {
if((state_val_22067 === (2))){
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22066__$1,(4),ch);
} else {
if((state_val_22067 === (11))){
var inst_22046 = (state_22066[(2)]);
var inst_22047 = (new Array(n));
var inst_22030 = inst_22047;
var inst_22031 = (0);
var state_22066__$1 = (function (){var statearr_22078 = state_22066;
(statearr_22078[(7)] = inst_22030);

(statearr_22078[(10)] = inst_22046);

(statearr_22078[(8)] = inst_22031);

return statearr_22078;
})();
var statearr_22079_22109 = state_22066__$1;
(statearr_22079_22109[(2)] = null);

(statearr_22079_22109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (9))){
var inst_22030 = (state_22066[(7)]);
var inst_22044 = cljs.core.vec.call(null,inst_22030);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22066__$1,(11),out,inst_22044);
} else {
if((state_val_22067 === (5))){
var inst_22034 = (state_22066[(9)]);
var inst_22030 = (state_22066[(7)]);
var inst_22039 = (state_22066[(11)]);
var inst_22031 = (state_22066[(8)]);
var inst_22038 = (inst_22030[inst_22031] = inst_22034);
var inst_22039__$1 = (inst_22031 + (1));
var inst_22040 = (inst_22039__$1 < n);
var state_22066__$1 = (function (){var statearr_22080 = state_22066;
(statearr_22080[(12)] = inst_22038);

(statearr_22080[(11)] = inst_22039__$1);

return statearr_22080;
})();
if(cljs.core.truth_(inst_22040)){
var statearr_22081_22110 = state_22066__$1;
(statearr_22081_22110[(1)] = (8));

} else {
var statearr_22082_22111 = state_22066__$1;
(statearr_22082_22111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (14))){
var inst_22059 = (state_22066[(2)]);
var inst_22060 = cljs.core.async.close_BANG_.call(null,out);
var state_22066__$1 = (function (){var statearr_22084 = state_22066;
(statearr_22084[(13)] = inst_22059);

return statearr_22084;
})();
var statearr_22085_22112 = state_22066__$1;
(statearr_22085_22112[(2)] = inst_22060);

(statearr_22085_22112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (10))){
var inst_22050 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22086_22113 = state_22066__$1;
(statearr_22086_22113[(2)] = inst_22050);

(statearr_22086_22113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (8))){
var inst_22030 = (state_22066[(7)]);
var inst_22039 = (state_22066[(11)]);
var tmp22083 = inst_22030;
var inst_22030__$1 = tmp22083;
var inst_22031 = inst_22039;
var state_22066__$1 = (function (){var statearr_22087 = state_22066;
(statearr_22087[(7)] = inst_22030__$1);

(statearr_22087[(8)] = inst_22031);

return statearr_22087;
})();
var statearr_22088_22114 = state_22066__$1;
(statearr_22088_22114[(2)] = null);

(statearr_22088_22114[(1)] = (2));


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
});})(c__19440__auto___22100,out))
;
return ((function (switch__19328__auto__,c__19440__auto___22100,out){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_22092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22092[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_22092[(1)] = (1));

return statearr_22092;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_22066){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_22066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e22093){if((e22093 instanceof Object)){
var ex__19332__auto__ = e22093;
var statearr_22094_22115 = state_22066;
(statearr_22094_22115[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22116 = state_22066;
state_22066 = G__22116;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_22066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_22066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___22100,out))
})();
var state__19442__auto__ = (function (){var statearr_22095 = f__19441__auto__.call(null);
(statearr_22095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___22100);

return statearr_22095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___22100,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22117 = [];
var len__17863__auto___22191 = arguments.length;
var i__17864__auto___22192 = (0);
while(true){
if((i__17864__auto___22192 < len__17863__auto___22191)){
args22117.push((arguments[i__17864__auto___22192]));

var G__22193 = (i__17864__auto___22192 + (1));
i__17864__auto___22192 = G__22193;
continue;
} else {
}
break;
}

var G__22119 = args22117.length;
switch (G__22119) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22117.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19440__auto___22195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19440__auto___22195,out){
return (function (){
var f__19441__auto__ = (function (){var switch__19328__auto__ = ((function (c__19440__auto___22195,out){
return (function (state_22161){
var state_val_22162 = (state_22161[(1)]);
if((state_val_22162 === (7))){
var inst_22157 = (state_22161[(2)]);
var state_22161__$1 = state_22161;
var statearr_22163_22196 = state_22161__$1;
(statearr_22163_22196[(2)] = inst_22157);

(statearr_22163_22196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (1))){
var inst_22120 = [];
var inst_22121 = inst_22120;
var inst_22122 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22161__$1 = (function (){var statearr_22164 = state_22161;
(statearr_22164[(7)] = inst_22122);

(statearr_22164[(8)] = inst_22121);

return statearr_22164;
})();
var statearr_22165_22197 = state_22161__$1;
(statearr_22165_22197[(2)] = null);

(statearr_22165_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (4))){
var inst_22125 = (state_22161[(9)]);
var inst_22125__$1 = (state_22161[(2)]);
var inst_22126 = (inst_22125__$1 == null);
var inst_22127 = cljs.core.not.call(null,inst_22126);
var state_22161__$1 = (function (){var statearr_22166 = state_22161;
(statearr_22166[(9)] = inst_22125__$1);

return statearr_22166;
})();
if(inst_22127){
var statearr_22167_22198 = state_22161__$1;
(statearr_22167_22198[(1)] = (5));

} else {
var statearr_22168_22199 = state_22161__$1;
(statearr_22168_22199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (15))){
var inst_22151 = (state_22161[(2)]);
var state_22161__$1 = state_22161;
var statearr_22169_22200 = state_22161__$1;
(statearr_22169_22200[(2)] = inst_22151);

(statearr_22169_22200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (13))){
var state_22161__$1 = state_22161;
var statearr_22170_22201 = state_22161__$1;
(statearr_22170_22201[(2)] = null);

(statearr_22170_22201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (6))){
var inst_22121 = (state_22161[(8)]);
var inst_22146 = inst_22121.length;
var inst_22147 = (inst_22146 > (0));
var state_22161__$1 = state_22161;
if(cljs.core.truth_(inst_22147)){
var statearr_22171_22202 = state_22161__$1;
(statearr_22171_22202[(1)] = (12));

} else {
var statearr_22172_22203 = state_22161__$1;
(statearr_22172_22203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (3))){
var inst_22159 = (state_22161[(2)]);
var state_22161__$1 = state_22161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22161__$1,inst_22159);
} else {
if((state_val_22162 === (12))){
var inst_22121 = (state_22161[(8)]);
var inst_22149 = cljs.core.vec.call(null,inst_22121);
var state_22161__$1 = state_22161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22161__$1,(15),out,inst_22149);
} else {
if((state_val_22162 === (2))){
var state_22161__$1 = state_22161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22161__$1,(4),ch);
} else {
if((state_val_22162 === (11))){
var inst_22125 = (state_22161[(9)]);
var inst_22129 = (state_22161[(10)]);
var inst_22139 = (state_22161[(2)]);
var inst_22140 = [];
var inst_22141 = inst_22140.push(inst_22125);
var inst_22121 = inst_22140;
var inst_22122 = inst_22129;
var state_22161__$1 = (function (){var statearr_22173 = state_22161;
(statearr_22173[(7)] = inst_22122);

(statearr_22173[(11)] = inst_22139);

(statearr_22173[(12)] = inst_22141);

(statearr_22173[(8)] = inst_22121);

return statearr_22173;
})();
var statearr_22174_22204 = state_22161__$1;
(statearr_22174_22204[(2)] = null);

(statearr_22174_22204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (9))){
var inst_22121 = (state_22161[(8)]);
var inst_22137 = cljs.core.vec.call(null,inst_22121);
var state_22161__$1 = state_22161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22161__$1,(11),out,inst_22137);
} else {
if((state_val_22162 === (5))){
var inst_22125 = (state_22161[(9)]);
var inst_22129 = (state_22161[(10)]);
var inst_22122 = (state_22161[(7)]);
var inst_22129__$1 = f.call(null,inst_22125);
var inst_22130 = cljs.core._EQ_.call(null,inst_22129__$1,inst_22122);
var inst_22131 = cljs.core.keyword_identical_QMARK_.call(null,inst_22122,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22132 = (inst_22130) || (inst_22131);
var state_22161__$1 = (function (){var statearr_22175 = state_22161;
(statearr_22175[(10)] = inst_22129__$1);

return statearr_22175;
})();
if(cljs.core.truth_(inst_22132)){
var statearr_22176_22205 = state_22161__$1;
(statearr_22176_22205[(1)] = (8));

} else {
var statearr_22177_22206 = state_22161__$1;
(statearr_22177_22206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (14))){
var inst_22154 = (state_22161[(2)]);
var inst_22155 = cljs.core.async.close_BANG_.call(null,out);
var state_22161__$1 = (function (){var statearr_22179 = state_22161;
(statearr_22179[(13)] = inst_22154);

return statearr_22179;
})();
var statearr_22180_22207 = state_22161__$1;
(statearr_22180_22207[(2)] = inst_22155);

(statearr_22180_22207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (10))){
var inst_22144 = (state_22161[(2)]);
var state_22161__$1 = state_22161;
var statearr_22181_22208 = state_22161__$1;
(statearr_22181_22208[(2)] = inst_22144);

(statearr_22181_22208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22162 === (8))){
var inst_22125 = (state_22161[(9)]);
var inst_22129 = (state_22161[(10)]);
var inst_22121 = (state_22161[(8)]);
var inst_22134 = inst_22121.push(inst_22125);
var tmp22178 = inst_22121;
var inst_22121__$1 = tmp22178;
var inst_22122 = inst_22129;
var state_22161__$1 = (function (){var statearr_22182 = state_22161;
(statearr_22182[(7)] = inst_22122);

(statearr_22182[(14)] = inst_22134);

(statearr_22182[(8)] = inst_22121__$1);

return statearr_22182;
})();
var statearr_22183_22209 = state_22161__$1;
(statearr_22183_22209[(2)] = null);

(statearr_22183_22209[(1)] = (2));


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
});})(c__19440__auto___22195,out))
;
return ((function (switch__19328__auto__,c__19440__auto___22195,out){
return (function() {
var cljs$core$async$state_machine__19329__auto__ = null;
var cljs$core$async$state_machine__19329__auto____0 = (function (){
var statearr_22187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22187[(0)] = cljs$core$async$state_machine__19329__auto__);

(statearr_22187[(1)] = (1));

return statearr_22187;
});
var cljs$core$async$state_machine__19329__auto____1 = (function (state_22161){
while(true){
var ret_value__19330__auto__ = (function (){try{while(true){
var result__19331__auto__ = switch__19328__auto__.call(null,state_22161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19331__auto__;
}
break;
}
}catch (e22188){if((e22188 instanceof Object)){
var ex__19332__auto__ = e22188;
var statearr_22189_22210 = state_22161;
(statearr_22189_22210[(5)] = ex__19332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22211 = state_22161;
state_22161 = G__22211;
continue;
} else {
return ret_value__19330__auto__;
}
break;
}
});
cljs$core$async$state_machine__19329__auto__ = function(state_22161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19329__auto____1.call(this,state_22161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19329__auto____0;
cljs$core$async$state_machine__19329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19329__auto____1;
return cljs$core$async$state_machine__19329__auto__;
})()
;})(switch__19328__auto__,c__19440__auto___22195,out))
})();
var state__19442__auto__ = (function (){var statearr_22190 = f__19441__auto__.call(null);
(statearr_22190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19440__auto___22195);

return statearr_22190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19442__auto__);
});})(c__19440__auto___22195,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457942613945