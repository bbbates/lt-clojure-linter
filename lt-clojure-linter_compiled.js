if(!lt.util.load.provided_QMARK_('lt.plugins.lt-clojure-linter')) {
goog.provide('lt.plugins.lt_clojure_linter');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","clojure-linter","lt.plugins.lt-clojure-linter/clojure-linter",1103558991),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099)], null),new cljs.core.Keyword(null,"timeout","timeout",3994960083),360000,new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"clojure expression checker");
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","expr-check","lt.plugins.lt-clojure-linter/expr-check",3466832274),null], null), null),new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"callback","callback",841683895),cljs.core.identity,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker-callback","lt.plugins.lt-clojure-linter/kibit-expr-checker-callback",2077056617)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,callback){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",841683895),callback], null));
}));
lt.plugins.lt_clojure_linter.__GT_linter_result = (function __GT_linter_result(p__22310){var map__22312 = p__22310;var map__22312__$1 = ((cljs.core.seq_QMARK_.call(null,map__22312))?cljs.core.apply.call(null,cljs.core.hash_map,map__22312):map__22312);var res = map__22312__$1;var alt = cljs.core.get.call(null,map__22312__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("Consider using: "),cljs.core.str(alt)].join(''));
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
lt.plugins.lt_clojure_linter.bg_expr_check = lt.objs.thread.thread_STAR_.call(null,(function tfun22313(){var orig__21926__auto__ = argsArray(arguments);var msg__21927__auto__ = orig__21926__auto__.shift();var args__21928__auto__ = orig__21926__auto__.map(cljs.reader.read_string);var raise = ((function (orig__21926__auto__,msg__21927__auto__,args__21928__auto__){
return (function (obj__21929__auto__,k__21930__auto__,v__21931__auto__){return _send(obj__21929__auto__,k__21930__auto__,cljs.core.pr_str.call(null,v__21931__auto__),"clj");
});})(orig__21926__auto__,msg__21927__auto__,args__21928__auto__))
;args__21928__auto__.unshift(msg__21927__auto__.obj);
return ((function (orig__21926__auto__,msg__21927__auto__,args__21928__auto__,raise){
return (function (obj_id,expr_checker_module,editor_text){delete require.cache[expr_checker_module];
var lt__$1 = require(expr_checker_module);return raise.call(null,obj_id,new cljs.core.Keyword(null,"exprs-check-complete","exprs-check-complete",4114379871),lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text(editor_text));
});})(orig__21926__auto__,msg__21927__auto__,args__21928__auto__,raise))
.apply(null,args__21928__auto__);
}));
lt.plugins.lt_clojure_linter.__BEH__do_lint = (function __BEH__do_lint(obj,editor_text,callback,ed){var checking_ns = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));lt.objs.notifos.working.call(null,[cljs.core.str("Checking "),cljs.core.str(cljs.core.name.call(null,(function (){var or__19803__auto__ = checking_ns;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return "";
}
})())),cljs.core.str("...")].join(''));
return lt.plugins.lt_clojure_linter.bg_expr_check.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),callback),lt.plugins.lt_clojure_linter.expr_checker_module.call(null),editor_text);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.__BEH__do_lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),null], null), null));
}

//# sourceMappingURL=lt-clojure-linter_compiled.js.map