if(!lt.util.load.provided_QMARK_('lt.plugins.lt-clojure-linter.threads')) {
goog.provide('lt.plugins.lt_clojure_linter.threads');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.thread');
goog.require('lt.objs.thread');
lt.plugins.lt_clojure_linter.threads.cpus = cljs.core.count.call(null,new cljs.core.Keyword(null,"cpus","cpus",1016964925).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,require("os"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)).call(null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","pools","lt.plugins.lt-clojure-linter.threads/pools",1920847333),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread-pools","thread-pools",3606335942),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","kill-pools!","lt.plugins.lt-clojure-linter.threads/kill-pools!",727499079),null], null), null),new cljs.core.Keyword(null,"pools","pools",1120755529),cljs.core.PersistentVector.EMPTY);
lt.plugins.lt_clojure_linter.threads.pools = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","pools","lt.plugins.lt-clojure-linter.threads/pools",1920847333));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","pool","lt.plugins.lt-clojure-linter.threads/pool",1221820836),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread-pool","thread-pool",2898646385),null], null), null),new cljs.core.Keyword(null,"workers","workers",2539065383),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","send-to-pool","lt.plugins.lt-clojure-linter.threads/send-to-pool",2025000695),new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","kill-pool!","lt.plugins.lt-clojure-linter.threads/kill-pool!",2800477542)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,pool_size){lt.object.update_BANG_.call(null,lt.plugins.lt_clojure_linter.threads.pools,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pools","pools",1120755529)], null),cljs.core.conj,this$);
return lt.object.merge_BANG_.call(null,this$,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",2539065383)], null),cljs.core.repeatedly.call(null,pool_size,(function (){return lt.object.create.call(null,new cljs.core.Keyword("lt.objs.thread","worker-thread","lt.objs.thread/worker-thread",1400507698));
}))));
}));
lt.plugins.lt_clojure_linter.threads.create_pool = (function create_pool(){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","pool","lt.plugins.lt-clojure-linter.threads/pool",1221820836),(lt.plugins.lt_clojure_linter.threads.cpus + 1));
});
lt.plugins.lt_clojure_linter.threads.send_to_all_BANG_ = (function send_to_all_BANG_(pool,msg){var seq__21439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workers","workers",2539065383).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pool)));var chunk__21440 = null;var count__21441 = 0;var i__21442 = 0;while(true){
if((i__21442 < count__21441))
{var worker = cljs.core._nth.call(null,chunk__21440,i__21442);lt.object.raise.call(null,worker,new cljs.core.Keyword(null,"try-send!","try-send!",4325864057),msg);
{
var G__21459 = seq__21439;
var G__21460 = chunk__21440;
var G__21461 = count__21441;
var G__21462 = (i__21442 + 1);
seq__21439 = G__21459;
chunk__21440 = G__21460;
count__21441 = G__21461;
i__21442 = G__21462;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21439);if(temp__4092__auto__)
{var seq__21439__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21439__$1))
{var c__20551__auto__ = cljs.core.chunk_first.call(null,seq__21439__$1);{
var G__21463 = cljs.core.chunk_rest.call(null,seq__21439__$1);
var G__21464 = c__20551__auto__;
var G__21465 = cljs.core.count.call(null,c__20551__auto__);
var G__21466 = 0;
seq__21439 = G__21463;
chunk__21440 = G__21464;
count__21441 = G__21465;
i__21442 = G__21466;
continue;
}
} else
{var worker = cljs.core.first.call(null,seq__21439__$1);lt.object.raise.call(null,worker,new cljs.core.Keyword(null,"try-send!","try-send!",4325864057),msg);
{
var G__21467 = cljs.core.next.call(null,seq__21439__$1);
var G__21468 = null;
var G__21469 = 0;
var G__21470 = 0;
seq__21439 = G__21467;
chunk__21440 = G__21468;
count__21441 = G__21469;
i__21442 = G__21470;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* Select a worker from the pool. If all worker queues are the same size, then select one at random.
*/
lt.plugins.lt_clojure_linter.threads.send_to_worker_BANG_ = (function send_to_worker_BANG_(pool,msg){var queue_size_fn = cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"queue","queue",1121848451),cljs.core.deref);var queue_sizes = cljs.core.map.call(null,queue_size_fn,new cljs.core.Keyword(null,"workers","workers",2539065383).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pool)));return lt.object.raise.call(null,((cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.min,queue_sizes),cljs.core.apply.call(null,cljs.core.max,queue_sizes)))?cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"workers","workers",2539065383).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pool))):cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"workers","workers",2539065383).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pool)),queue_size_fn))),new cljs.core.Keyword(null,"try-send!","try-send!",4325864057),msg);
});
lt.plugins.lt_clojure_linter.threads.pool_thread_STAR_ = (function pool_thread_STAR_(pool,func){var func_str = [cljs.core.str(""),cljs.core.str(func)].join('');var n = cljs.core.gensym.call(null,"theadfunc");lt.plugins.lt_clojure_linter.threads.send_to_all_BANG_.call(null,pool,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",1014012659),"register",new cljs.core.Keyword(null,"name","name",1017277949),n,new cljs.core.Keyword(null,"func","func",1017058870),func_str], null));
return ((function (func_str,n){
return (function() { 
var G__21471__delegate = function (obj,args){return lt.plugins.lt_clojure_linter.threads.send_to_worker_BANG_.call(null,pool,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msg","msg",1014012659),"call",new cljs.core.Keyword(null,"name","name",1017277949),n,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.object.__GT_id.call(null,obj),new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.map.call(null,cljs.core.pr_str,args)], null));
};
var G__21471 = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__21471__delegate.call(this,obj,args);};
G__21471.cljs$lang$maxFixedArity = 1;
G__21471.cljs$lang$applyTo = (function (arglist__21472){
var obj = cljs.core.first(arglist__21472);
var args = cljs.core.rest(arglist__21472);
return G__21471__delegate(obj,args);
});
G__21471.cljs$core$IFn$_invoke$arity$variadic = G__21471__delegate;
return G__21471;
})()
;
;})(func_str,n))
});
lt.plugins.lt_clojure_linter.threads.__BEH__kill_pool_BANG_ = (function __BEH__kill_pool_BANG_(pool){var workers = new cljs.core.Keyword(null,"workers","workers",2539065383).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pool));var seq__21447 = cljs.core.seq.call(null,workers);var chunk__21448 = null;var count__21449 = 0;var i__21450 = 0;while(true){
if((i__21450 < count__21449))
{var w = cljs.core._nth.call(null,chunk__21448,i__21450);lt.object.raise_BANG_.call(null,w,new cljs.core.Keyword(null,"kill!","kill!",1115956213));
{
var G__21473 = seq__21447;
var G__21474 = chunk__21448;
var G__21475 = count__21449;
var G__21476 = (i__21450 + 1);
seq__21447 = G__21473;
chunk__21448 = G__21474;
count__21449 = G__21475;
i__21450 = G__21476;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21447);if(temp__4092__auto__)
{var seq__21447__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21447__$1))
{var c__20551__auto__ = cljs.core.chunk_first.call(null,seq__21447__$1);{
var G__21477 = cljs.core.chunk_rest.call(null,seq__21447__$1);
var G__21478 = c__20551__auto__;
var G__21479 = cljs.core.count.call(null,c__20551__auto__);
var G__21480 = 0;
seq__21447 = G__21477;
chunk__21448 = G__21478;
count__21449 = G__21479;
i__21450 = G__21480;
continue;
}
} else
{var w = cljs.core.first.call(null,seq__21447__$1);lt.object.raise_BANG_.call(null,w,new cljs.core.Keyword(null,"kill!","kill!",1115956213));
{
var G__21481 = cljs.core.next.call(null,seq__21447__$1);
var G__21482 = null;
var G__21483 = 0;
var G__21484 = 0;
seq__21447 = G__21481;
chunk__21448 = G__21482;
count__21449 = G__21483;
i__21450 = G__21484;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","kill-pool!","lt.plugins.lt-clojure-linter.threads/kill-pool!",2800477542),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.threads.__BEH__kill_pool_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill-pool!","kill-pool!",2658873288),null], null), null));
lt.plugins.lt_clojure_linter.threads.__BEH__kill_pools_BANG_ = (function __BEH__kill_pools_BANG_(pools){var pools__$1 = new cljs.core.Keyword(null,"pools","pools",1120755529).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pools));var seq__21455 = cljs.core.seq.call(null,pools__$1);var chunk__21456 = null;var count__21457 = 0;var i__21458 = 0;while(true){
if((i__21458 < count__21457))
{var p = cljs.core._nth.call(null,chunk__21456,i__21458);lt.object.raise_BANG_.call(null,p,new cljs.core.Keyword(null,"kill-pool!","kill-pool!",2658873288));
{
var G__21485 = seq__21455;
var G__21486 = chunk__21456;
var G__21487 = count__21457;
var G__21488 = (i__21458 + 1);
seq__21455 = G__21485;
chunk__21456 = G__21486;
count__21457 = G__21487;
i__21458 = G__21488;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21455);if(temp__4092__auto__)
{var seq__21455__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21455__$1))
{var c__20551__auto__ = cljs.core.chunk_first.call(null,seq__21455__$1);{
var G__21489 = cljs.core.chunk_rest.call(null,seq__21455__$1);
var G__21490 = c__20551__auto__;
var G__21491 = cljs.core.count.call(null,c__20551__auto__);
var G__21492 = 0;
seq__21455 = G__21489;
chunk__21456 = G__21490;
count__21457 = G__21491;
i__21458 = G__21492;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__21455__$1);lt.object.raise_BANG_.call(null,p,new cljs.core.Keyword(null,"kill-pool!","kill-pool!",2658873288));
{
var G__21493 = cljs.core.next.call(null,seq__21455__$1);
var G__21494 = null;
var G__21495 = 0;
var G__21496 = 0;
seq__21455 = G__21493;
chunk__21456 = G__21494;
count__21457 = G__21495;
i__21458 = G__21496;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","kill-pools!","lt.plugins.lt-clojure-linter.threads/kill-pools!",727499079),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.threads.__BEH__kill_pools_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill-pools!","kill-pools!",4763306987),null], null), null));
lt.plugins.lt_clojure_linter.threads.__BEH__shutdown_pools_on_close = (function __BEH__shutdown_pools_on_close(app){return lt.object.raise_BANG_.call(null,lt.plugins.lt_clojure_linter.threads.pools,new cljs.core.Keyword(null,"kill-pools!","kill-pools!",4763306987));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter.threads","shutdown-pools-on-close","lt.plugins.lt-clojure-linter.threads/shutdown-pools-on-close",4405881765),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.threads.__BEH__shutdown_pools_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",3951351006),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-clojure-linter')) {
goog.provide('lt.plugins.lt_clojure_linter');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.thread');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.lt_clojure_linter.threads');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.plugins.lt_clojure_linter.threads');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","clojure-linter","lt.plugins.lt-clojure-linter/clojure-linter",1103558991),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099)], null),new cljs.core.Keyword(null,"timeout","timeout",3994960083),360000,new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"clojure expression checker");
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","expr-check","lt.plugins.lt-clojure-linter/expr-check",3466832274),null], null), null),new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"callback","callback",841683895),cljs.core.identity,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker-callback","lt.plugins.lt-clojure-linter/kibit-expr-checker-callback",2077056617)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,callback){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",841683895),callback], null));
}));
lt.plugins.lt_clojure_linter.__GT_linter_result = (function __GT_linter_result(p__21497){var map__21499 = p__21497;var map__21499__$1 = ((cljs.core.seq_QMARK_.call(null,map__21499))?cljs.core.apply.call(null,cljs.core.hash_map,map__21499):map__21499);var res = map__21499__$1;var alt = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("Consider using: "),cljs.core.str(alt)].join(''));
});
lt.plugins.lt_clojure_linter.__BEH__kibit_expr_checker_callback = (function __BEH__kibit_expr_checker_callback(this$,results){var results__$1 = (function (){var or__19803__auto__ = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(results);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var err = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(results__$1);var callback = new cljs.core.Keyword(null,"callback","callback",841683895).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var message = (cljs.core.truth_(err)?null:[cljs.core.str("Done checking expressions, found "),cljs.core.str(cljs.core.count.call(null,results__$1)),cljs.core.str(" suggestions.")].join(''));lt.objs.notifos.done_working.call(null,message);
return callback.call(null,cljs.core.map.call(null,lt.plugins.lt_clojure_linter.__GT_linter_result,results__$1));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker-callback","lt.plugins.lt-clojure-linter/kibit-expr-checker-callback",2077056617),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.__BEH__kibit_expr_checker_callback,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exprs-check-complete","exprs-check-complete",4114379871),null], null), null));
lt.plugins.lt_clojure_linter.plugin_id = "lt-clojure-linter";
lt.plugins.lt_clojure_linter.expr_checker_module = (function expr_checker_module(){return [cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/"),cljs.core.str(lt.plugins.lt_clojure_linter.plugin_id),cljs.core.str("/expr-checker-module.js")].join('');
});
lt.plugins.lt_clojure_linter.thread_pool = lt.plugins.lt_clojure_linter.threads.create_pool.call(null);
lt.plugins.lt_clojure_linter.bg_expr_check = lt.plugins.lt_clojure_linter.threads.pool_thread_STAR_.call(null,lt.plugins.lt_clojure_linter.thread_pool,(function tfun21500(){var orig__21338__auto__ = argsArray(arguments);var msg__21339__auto__ = orig__21338__auto__.shift();var args__21340__auto__ = orig__21338__auto__.map(cljs.reader.read_string);var raise = ((function (orig__21338__auto__,msg__21339__auto__,args__21340__auto__){
return (function (obj__21341__auto__,k__21342__auto__,v__21343__auto__){return _send(obj__21341__auto__,k__21342__auto__,cljs.core.pr_str.call(null,v__21343__auto__),"clj");
});})(orig__21338__auto__,msg__21339__auto__,args__21340__auto__))
;args__21340__auto__.unshift(msg__21339__auto__.obj);
return ((function (orig__21338__auto__,msg__21339__auto__,args__21340__auto__,raise){
return (function (obj_id,expr_checker_module,editor_text,file_name){var lt__$1 = require(expr_checker_module);return raise.call(null,obj_id,new cljs.core.Keyword(null,"exprs-check-complete","exprs-check-complete",4114379871),lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text(editor_text,file_name));
});})(orig__21338__auto__,msg__21339__auto__,args__21340__auto__,raise))
.apply(null,args__21340__auto__);
}));
lt.plugins.lt_clojure_linter.__BEH__do_lint = (function __BEH__do_lint(obj,editor_text,callback,ed){var checking_ns = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.working.call(null,[cljs.core.str("Checking "),cljs.core.str(cljs.core.name.call(null,(function (){var or__19803__auto__ = checking_ns;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return "";
}
})())),cljs.core.str("...")].join(''));
return lt.plugins.lt_clojure_linter.bg_expr_check.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),callback),lt.plugins.lt_clojure_linter.expr_checker_module.call(null),editor_text,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.__BEH__do_lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),null], null), null));
}

//# sourceMappingURL=lt-clojure-linter_compiled.js.map