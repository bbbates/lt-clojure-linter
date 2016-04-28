if(!lt.util.load.provided_QMARK_('clojure.walk')) {
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_.call(null,form))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.coll_QMARK_.call(null,form))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__22162){var vec__22163 = p__22162;var k = cljs.core.nth.call(null,vec__22163,0,null);var v = cljs.core.nth.call(null,vec__22163,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__22166){var vec__22167 = p__22166;var k = cljs.core.nth.call(null,vec__22167,0,null);var v = cljs.core.nth.call(null,vec__22167,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.logic')) {
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');
cljs.core.logic._STAR_occurs_check_STAR_ = true;
cljs.core.logic.IUnifyTerms = (function (){var obj22007 = {};return obj22007;
})();
cljs.core.logic._unify_terms = (function _unify_terms(u,v,s){if((function (){var and__19791__auto__ = u;if(and__19791__auto__)
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3;
} else
{return and__19791__auto__;
}
})())
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else
{var x__20430__auto__ = (((u == null))?null:u);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_terms["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyTerms.-unify-terms",u);
}
}
})().call(null,u,v,s);
}
});
cljs.core.logic.IUnifyWithNil = (function (){var obj22009 = {};return obj22009;
})();
cljs.core.logic._unify_with_nil = (function _unify_with_nil(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_nil["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithNil.-unify-with-nil",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithObject = (function (){var obj22011 = {};return obj22011;
})();
cljs.core.logic._unify_with_object = (function _unify_with_object(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_object["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithObject.-unify-with-object",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLVar = (function (){var obj22013 = {};return obj22013;
})();
cljs.core.logic._unify_with_lvar = (function _unify_with_lvar(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_lvar["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithLVar.-unify-with-lvar",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLSeq = (function (){var obj22015 = {};return obj22015;
})();
cljs.core.logic._unify_with_lseq = (function _unify_with_lseq(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_lseq["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithLSeq.-unify-with-lseq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithSequential = (function (){var obj22017 = {};return obj22017;
})();
cljs.core.logic._unify_with_seq = (function _unify_with_seq(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_seq["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithSequential.-unify-with-seq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithMap = (function (){var obj22019 = {};return obj22019;
})();
cljs.core.logic._unify_with_map = (function _unify_with_map(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_map["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithMap.-unify-with-map",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IReifyTerm = (function (){var obj22021 = {};return obj22021;
})();
cljs.core.logic._reify_term = (function _reify_term(v,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReifyTerm.-reify-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IWalkTerm = (function (){var obj22023 = {};return obj22023;
})();
cljs.core.logic._walk_term = (function _walk_term(v,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._walk_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWalkTerm.-walk-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IOccursCheckTerm = (function (){var obj22025 = {};return obj22025;
})();
cljs.core.logic._occurs_check_term = (function _occurs_check_term(v,x,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,x,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._occurs_check_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOccursCheckTerm.-occurs-check-term",v);
}
}
})().call(null,v,x,s);
}
});
cljs.core.logic.IBuildTerm = (function (){var obj22027 = {};return obj22027;
})();
cljs.core.logic._build_term = (function _build_term(u,s){if((function (){var and__19791__auto__ = u;if(and__19791__auto__)
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2;
} else
{return and__19791__auto__;
}
})())
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else
{var x__20430__auto__ = (((u == null))?null:u);return (function (){var or__19803__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._build_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBuildTerm.-build-term",u);
}
}
})().call(null,u,s);
}
});
cljs.core.logic.IBind = (function (){var obj22029 = {};return obj22029;
})();
cljs.core.logic._bind = (function _bind(this$,g){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$IBind$_bind$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._bind[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._bind["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBind.-bind",this$);
}
}
})().call(null,this$,g);
}
});
cljs.core.logic.IMPlus = (function (){var obj22031 = {};return obj22031;
})();
cljs.core.logic._mplus = (function _mplus(a,f){if((function (){var and__19791__auto__ = a;if(and__19791__auto__)
{return a.cljs$core$logic$IMPlus$_mplus$arity$2;
} else
{return and__19791__auto__;
}
})())
{return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else
{var x__20430__auto__ = (((a == null))?null:a);return (function (){var or__19803__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._mplus["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMPlus.-mplus",a);
}
}
})().call(null,a,f);
}
});
cljs.core.logic.ITake = (function (){var obj22033 = {};return obj22033;
})();
cljs.core.logic._take_STAR_ = (function _take_STAR_(a){if((function (){var and__19791__auto__ = a;if(and__19791__auto__)
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else
{var x__20430__auto__ = (((a == null))?null:a);return (function (){var or__19803__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._take_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITake.-take*",a);
}
}
})().call(null,a);
}
});
cljs.core.logic.IPair = (function (){var obj22035 = {};return obj22035;
})();
cljs.core.logic._lhs = (function _lhs(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$IPair$_lhs$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$IPair$_lhs$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._lhs[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._lhs["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPair.-lhs",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic._rhs = (function _rhs(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$IPair$_rhs$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$IPair$_rhs$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._rhs[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._rhs["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPair.-rhs",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580818;
})
cljs.core.logic.Pair.cljs$lang$type = true;
cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair";
cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Pair");
});
cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("("),cljs.core.str(self__.lhs),cljs.core.str(" . "),cljs.core.str(self__.rhs),cljs.core.str(")")].join(''));
});
cljs.core.logic.Pair.prototype.cljs$core$logic$IPair$ = true;
cljs.core.logic.Pair.prototype.cljs$core$logic$IPair$_lhs$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.lhs;
});
cljs.core.logic.Pair.prototype.cljs$core$logic$IPair$_rhs$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.rhs;
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){var self__ = this;
var ___$1 = this;var pred__22036 = cljs.core._EQ__EQ_;var expr__22037 = i;if(cljs.core.truth_(pred__22036.call(null,0,expr__22037)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__22036.call(null,1,expr__22037)))
{return self__.rhs;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var pred__22039 = cljs.core._EQ__EQ_;var expr__22040 = i;if(cljs.core.truth_(pred__22039.call(null,0,expr__22040)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__22039.call(null,1,expr__22040)))
{return self__.rhs;
} else
{return not_found;
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 2;
});
cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return (cljs.core._EQ_.call(null,self__.lhs,other.lhs)) && (cljs.core._EQ_.call(null,self__.rhs,other.rhs));
});
cljs.core.logic.__GT_Pair = (function __GT_Pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.pair = (function pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){return (x instanceof cljs.core.logic.LVar);
});
cljs.core.logic.ISubstitutions = (function (){var obj22043 = {};return obj22043;
})();
cljs.core.logic._occurs_check = (function _occurs_check(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._occurs_check["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-occurs-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext = (function _ext(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._ext[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ext["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext_no_check = (function _ext_no_check(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ext_no_check["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext-no-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._walk = (function _walk(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._walk[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._walk["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._walk_STAR_ = (function _walk_STAR_(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._walk_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._unify = (function _unify(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._unify[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-unify",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._reify_lvar_name = (function _reify_lvar_name(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify_lvar_name["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify-lvar-name",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._reify_STAR_ = (function _reify_STAR_(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._reify = (function _reify(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_reify$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_reify$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._reify[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic.not_found = (function (){var obj22045 = {};return obj22045;
})();
/**
* Similar to Scheme assq, xs must be a List of Pairs
*/
cljs.core.logic.assq = (function assq(k,xs){var xs__$1 = cljs.core._seq.call(null,xs);while(true){
if((xs__$1 == null))
{return cljs.core.logic.not_found;
} else
{var x = cljs.core._first.call(null,xs__$1);var lhs = x.lhs;if((k === lhs))
{return x.rhs;
} else
{{
var G__22102 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__22102;
continue;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.logic.Substitutions = (function (s){
this.s = s;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
})
cljs.core.logic.Substitutions.cljs$lang$type = true;
cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.logic.choice.call(null,this$__$1,f);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return g.call(null,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var rhs = cljs.core.logic.assq.call(null,v,self__.s);var vp = cljs.core.logic._walk.call(null,this$__$1,rhs);if((cljs.core.logic.not_found === vp))
{return v;
} else
{return vp;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._reify_term.call(null,v__$1,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._walk_term.call(null,v__$1,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.symbol.call(null,[cljs.core.str("_."),cljs.core.str(cljs.core.count.call(null,self__.s))].join(''));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk_STAR_.call(null,this$__$1,v);return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((u === v))
{return this$__$1;
} else
{var u__$1 = cljs.core.logic._walk.call(null,this$__$1,u);var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);if((u__$1 === v__$1))
{return this$__$1;
} else
{return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,this$__$1);
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((cljs.core.logic._STAR_occurs_check_STAR_) && (cljs.core.logic._occurs_check.call(null,this$__$1,u,v)))
{return cljs.core.logic.fail.call(null,this$__$1);
} else
{return cljs.core.logic._ext_no_check.call(null,this$__$1,u,v);
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(cljs.core.conj.call(null,self__.s,(new cljs.core.logic.Pair(u,v)))));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._occurs_check_term.call(null,v__$1,u,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,self__.s,writer,opts);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)));
});
cljs.core.logic.__GT_Substitutions = (function __GT_Substitutions(s){return (new cljs.core.logic.Substitutions(s));
});
cljs.core.logic.make_s = (function make_s(s){return (new cljs.core.logic.Substitutions(s));
});
cljs.core.logic.empty_s = cljs.core.logic.make_s.call(null,cljs.core.List.EMPTY);
cljs.core.logic.subst_QMARK_ = (function subst_QMARK_(x){return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (l,p__22048){var vec__22049 = p__22048;var k = cljs.core.nth.call(null,vec__22049,0,null);var v__$1 = cljs.core.nth.call(null,vec__22049,1,null);return cljs.core.conj.call(null,l,cljs.core.logic.pair.call(null,k,v__$1));
}),cljs.core.List.EMPTY,v);return cljs.core.logic.make_s.call(null,s);
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LVar.cljs$lang$type = true;
cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/LVar");
});
cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._hash.call(null,self__.name);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,cljs.core.logic._reify_lvar_name.call(null,s));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;return cljs.core.logic._unify_with_lvar.call(null,v,u__$1,s);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core._EQ_.call(null,cljs.core.logic._walk.call(null,s,v__$1),x);
});
cljs.core.logic.LVar.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return v__$1;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var and__19791__auto__ = (o instanceof cljs.core.logic.LVar);if(and__19791__auto__)
{var o__$1 = o;return (self__.name === o__$1.name);
} else
{return and__19791__auto__;
}
});
cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LVar(self__.name,self__.meta));
});
cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(name,meta){return (new cljs.core.logic.LVar(name,meta));
});
cljs.core.logic.lvar_sym_counter = cljs.core.atom.call(null,0);
cljs.core.logic.lvar = (function() {
var lvar = null;
var lvar__0 = (function (){return lvar.call(null,new cljs.core.Symbol(null,"gen","gen",-1640429303,null));
});
var lvar__1 = (function (name){var name__$1 = [cljs.core.str(name),cljs.core.str("_"),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.logic.lvar_sym_counter,cljs.core.inc))].join('');return (new cljs.core.logic.LVar(name__$1,null));
});
lvar = function(name){
switch(arguments.length){
case 0:
return lvar__0.call(this);
case 1:
return lvar__1.call(this,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvar.cljs$core$IFn$_invoke$arity$0 = lvar__0;
lvar.cljs$core$IFn$_invoke$arity$1 = lvar__1;
return lvar;
})()
;
cljs.core.logic.LConsSeq = (function (){var obj22051 = {};return obj22051;
})();
cljs.core.logic._lfirst = (function _lfirst(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._lfirst["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.-lfirst",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic._lnext = (function _lnext(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._lnext["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.-lnext",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.lcons_QMARK_ = (function lcons_QMARK_(x){return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.lcons_pr_seq = (function lcons_pr_seq(x){if(cljs.core.logic.lcons_QMARK_.call(null,x))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.logic._lfirst.call(null,x),lcons_pr_seq.call(null,cljs.core.logic._lnext.call(null,x)));
}),null,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x),new cljs.core.Symbol(null,".",".",-1640531481,null));
} else
{return null;
}
}
});

/**
* @constructor
*/
cljs.core.logic.LCons = (function (a,d,meta){
this.a = a;
this.d = d;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
})
cljs.core.logic.LCons.cljs$lang$type = true;
cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons";
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_lseq.call(null,u,v__$1,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2))
{{
var G__22103 = cljs.core.logic._lnext.call(null,v__$2);
var G__22104 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__22103;
s__$1 = G__22104;
continue;
}
} else
{return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;return cljs.core.logic._unify_with_lseq.call(null,v,u__$1,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.fail.call(null,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.fail.call(null,s);
});
cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq.call(null,this$__$1));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2))
{var or__19803__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core.logic._lfirst.call(null,v__$2));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{{
var G__22105 = cljs.core.logic._lnext.call(null,v__$2);
var G__22106 = x__$1;
var G__22107 = s__$1;
v__$2 = G__22105;
x__$1 = G__22106;
s__$1 = G__22107;
continue;
}
}
} else
{return cljs.core.logic._occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.lcons.call(null,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lfirst.call(null,v__$1)),cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lnext.call(null,v__$1)));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.fail.call(null,s);
});
cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var or__19803__auto__ = (this$__$1 === o);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var and__19791__auto__ = (o instanceof cljs.core.logic.LCons);if(and__19791__auto__)
{var me = this$__$1;var you = o;while(true){
if((me == null))
{return (you == null);
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,me)))
{return true;
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,you)))
{return true;
} else
{if((cljs.core.logic.lcons_QMARK_.call(null,me)) && (cljs.core.logic.lcons_QMARK_.call(null,you)))
{var mef = cljs.core.logic._lfirst.call(null,me);var youf = cljs.core.logic._lfirst.call(null,you);var and__19791__auto____$1 = (function (){var or__19803__auto____$1 = cljs.core._EQ_.call(null,mef,youf);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{var or__19803__auto____$2 = cljs.core.logic.lvar_QMARK_.call(null,mef);if(cljs.core.truth_(or__19803__auto____$2))
{return or__19803__auto____$2;
} else
{return cljs.core.logic.lvar_QMARK_.call(null,youf);
}
}
})();if(cljs.core.truth_(and__19791__auto____$1))
{{
var G__22108 = cljs.core.logic._lnext.call(null,me);
var G__22109 = cljs.core.logic._lnext.call(null,you);
me = G__22108;
you = G__22109;
continue;
}
} else
{return and__19791__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._EQ_.call(null,me,you);
} else
{return null;
}
}
}
}
}
break;
}
} else
{return and__19791__auto__;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LCons(self__.a,self__.d,new_meta));
});
cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.a;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.d;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;var u__$1 = u;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,u__$1)))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v__$2)))
{return cljs.core.logic._unify.call(null,s__$1,v__$2,u__$1);
} else
{if((cljs.core.logic.lcons_QMARK_.call(null,u__$1)) && (cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core.logic._lfirst.call(null,v__$2));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__22110 = cljs.core.logic._lnext.call(null,u__$1);
var G__22111 = cljs.core.logic._lnext.call(null,v__$2);
var G__22112 = s__$2;
u__$1 = G__22110;
v__$2 = G__22111;
s__$1 = G__22112;
continue;
}
} else
{return s__$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else
{return null;
}
}
}
}
break;
}
});
cljs.core.logic.__GT_LCons = (function __GT_LCons(a,d,meta){return (new cljs.core.logic.LCons(a,d,meta));
});
/**
* Constructs a sequence a with an improper tail d if d is a logic variable.
*/
cljs.core.logic.lcons = (function lcons(a,d){if((cljs.core.coll_QMARK_.call(null,d)) || ((d == null)))
{return cljs.core.cons.call(null,a,cljs.core.seq.call(null,d));
} else
{return (new cljs.core.logic.LCons(a,d,null));
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});
(cljs.core.logic.IUnifyTerms["_"] = true);
(cljs.core.logic._unify_terms["_"] = (function (u,v,s){if(cljs.core.sequential_QMARK_.call(null,u))
{return cljs.core.logic._unify_with_seq.call(null,v,u,s);
} else
{return cljs.core.logic._unify_with_object.call(null,v,u,s);
}
}));
(cljs.core.logic.IUnifyTerms["null"] = true);
(cljs.core.logic._unify_terms["null"] = (function (u,v,s){return cljs.core.logic._unify_with_nil.call(null,v,u,s);
}));
(cljs.core.logic.IUnifyWithNil["_"] = true);
(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithNil["null"] = true);
(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){return s;
}));
(cljs.core.logic.IUnifyWithObject["_"] = true);
(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){if(cljs.core._EQ_.call(null,u,v))
{return s;
} else
{return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithObject["null"] = true);
(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithLVar["_"] = true);
(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){return cljs.core.logic._ext.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLVar["null"] = true);
(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){return cljs.core.logic._ext_no_check.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["_"] = true);
(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){if((cljs.core.sequential_QMARK_.call(null,v)) && (!((v == null))))
{var u__$1 = u;var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((v__$1 == null)))
{if(cljs.core.logic.lcons_QMARK_.call(null,u__$1))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core._first.call(null,v__$1));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__22113 = cljs.core.logic._lnext.call(null,u__$1);
var G__22114 = cljs.core._next.call(null,v__$1);
var G__22115 = s__$2;
u__$1 = G__22113;
v__$1 = G__22114;
s__$1 = G__22115;
continue;
}
} else
{return s__$2;
}
} else
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$1);
}
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,u__$1)))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,cljs.core.List.EMPTY);
} else
{return cljs.core.logic.fail.call(null,s__$1);
}
}
break;
}
} else
{return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithLSeq["null"] = true);
(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithSequential["_"] = true);
(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){if((cljs.core.sequential_QMARK_.call(null,v)) && (!((v == null))))
{var u__$1 = cljs.core._seq.call(null,u);var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core._first.call(null,u__$1),cljs.core._first.call(null,v__$1));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__22116 = cljs.core._next.call(null,u__$1);
var G__22117 = cljs.core._next.call(null,v__$1);
var G__22118 = s__$2;
u__$1 = G__22116;
v__$1 = G__22117;
s__$1 = G__22118;
continue;
}
} else
{return s__$2;
}
} else
{return cljs.core.logic.fail.call(null,s__$1);
}
} else
{if(!((v__$1 == null)))
{return cljs.core.logic.fail.call(null,s__$1);
} else
{return s__$1;
}
}
break;
}
} else
{return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithSequential["null"] = true);
(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
cljs.core.logic.not_found = (function (){var obj22053 = {};return obj22053;
})();
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(v,u,s){if(!((cljs.core.count.call(null,v) === cljs.core.count.call(null,u))))
{return cljs.core.logic.fail.call(null,s);
} else
{var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));var s__$1 = s;while(true){
if(ks)
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return cljs.core.logic.fail.call(null,s__$1);
} else
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__22119 = cljs.core.next.call(null,ks);
var G__22120 = s__$2;
ks = G__22119;
s__$1 = G__22120;
continue;
}
} else
{return cljs.core.logic.fail.call(null,s__$2);
}
}
} else
{return s__$1;
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});
(cljs.core.logic.IUnifyWithMap["_"] = true);
(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithMap["null"] = true);
(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IReifyTerm["_"] = true);
(cljs.core.logic._reify_term["_"] = (function (v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{{
var G__22121 = cljs.core.next.call(null,v__$1);
var G__22122 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__22121;
s__$1 = G__22122;
continue;
}
} else
{return s__$1;
}
break;
}
} else
{return s;
}
}));
(cljs.core.logic.IReifyTerm["null"] = true);
(cljs.core.logic._reify_term["null"] = (function (v,s){return s;
}));
cljs.core.logic.walk_term_map_STAR_ = (function walk_term_map_STAR_(v,s){var v__$1 = cljs.core._seq.call(null,v);var r = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if(!((v__$1 == null)))
{var vec__22055 = cljs.core._first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__22055,0,null);var vfv = cljs.core.nth.call(null,vec__22055,1,null);{
var G__22123 = cljs.core._next.call(null,v__$1);
var G__22124 = cljs.core._assoc_BANG_.call(null,r,vfk,cljs.core.logic._walk_STAR_.call(null,s,vfv));
v__$1 = G__22123;
r = G__22124;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;var v__$2 = cljs.core._seq.call(null,v__$1);var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(!((v__$2 == null)))
{{
var G__22125 = cljs.core._next.call(null,v__$2);
var G__22126 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.first.call(null,v__$2)));
v__$2 = G__22125;
r = G__22126;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});
(cljs.core.logic.IWalkTerm["_"] = true);
(cljs.core.logic._walk_term["_"] = (function (v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.map.call(null,(function (p1__22056_SHARP_){return cljs.core.logic._walk_STAR_.call(null,s,p1__22056_SHARP_);
}),v);
} else
{return v;
}
}));
(cljs.core.logic.IWalkTerm["null"] = true);
(cljs.core.logic._walk_term["null"] = (function (v,s){return null;
}));
(cljs.core.logic.IOccursCheckTerm["_"] = true);
(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var v__$1 = cljs.core.seq.call(null,v);var x__$1 = x;var s__$1 = s;while(true){
if(!((v__$1 == null)))
{var or__19803__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core._first.call(null,v__$1));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{{
var G__22127 = cljs.core._next.call(null,v__$1);
var G__22128 = x__$1;
var G__22129 = s__$1;
v__$1 = G__22127;
x__$1 = G__22128;
s__$1 = G__22129;
continue;
}
}
} else
{return false;
}
break;
}
} else
{return false;
}
}));
(cljs.core.logic.IOccursCheckTerm["null"] = true);
(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){return false;
}));
cljs.core.logic.mplus = (function mplus(a,f){if((function (){var G__22058 = a;if(G__22058)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22058.cljs$core$logic$IMPlus$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._mplus.call(null,a,f);
} else
{return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function take_STAR_(x){if((function (){var G__22060 = x;if(G__22060)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22060.cljs$core$logic$ITake$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._take_STAR_.call(null,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
})
cljs.core.logic.Choice.cljs$lang$type = true;
cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Choice");
});
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){return cljs.core.logic.take_STAR_.call(null,self__.f);
});})(this$__$1))
,null,null)));
});})(this$__$1))
,null,null));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc(((function (this$__$1){
return (function (){return cljs.core.logic.mplus.call(null,fp.call(null),self__.f);
});})(this$__$1))
))));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return cljs.core.logic.mplus.call(null,g.call(null,self__.a),(new cljs.core.logic.Inc(((function (this$__$1){
return (function (){return cljs.core.logic._bind.call(null,self__.f,g);
});})(this$__$1))
)));
});
cljs.core.logic.__GT_Choice = (function __GT_Choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
cljs.core.logic.choice = (function choice(a,f){return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.logic.Inc.cljs$lang$type = true;
cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc";
cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Inc");
});
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){return cljs.core.logic.take_STAR_.call(null,self__.f.call(null));
});})(this$__$1))
,null,null));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc(((function (this$__$1){
return (function (){return cljs.core.logic.mplus.call(null,fp.call(null),this$__$1);
});})(this$__$1))
));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc(((function (this$__$1){
return (function (){var a = self__.f.call(null);return cljs.core.logic._bind.call(null,a,g);
});})(this$__$1))
));
});
cljs.core.logic.Inc.prototype.call = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.f.call(null);
});
cljs.core.logic.Inc.prototype.apply = (function (self__,args22061){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22061)));
});
cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return self__.f.call(null);
});
cljs.core.logic.__GT_Inc = (function __GT_Inc(f){return (new cljs.core.logic.Inc(f));
});

/**
* @constructor
*/
cljs.core.logic.Fail = (function (a){
this.a = a;
})
cljs.core.logic.Fail.cljs$lang$type = true;
cljs.core.logic.Fail.cljs$lang$ctorStr = "cljs.core.logic/Fail";
cljs.core.logic.Fail.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Fail");
});
cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return fp;
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.__GT_Fail = (function __GT_Fail(a){return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.failed_QMARK_ = (function failed_QMARK_(x){return (x instanceof cljs.core.logic.Fail);
});
/**
* A goal that always succeeds.
*/
cljs.core.logic.succeed = (function succeed(a){return a;
});
/**
* A goal that always fails.
*/
cljs.core.logic.fail = (function fail(a){return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;
cljs.core.logic.IIfA = (function (){var obj22063 = {};return obj22063;
})();
cljs.core.logic._ifa = (function _ifa(b,gs,c){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$logic$IIfA$_ifa$arity$3;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ifa["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfA.-ifa",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.IIfU = (function (){var obj22065 = {};return obj22065;
})();
cljs.core.logic._ifu = (function _ifu(b,gs,c){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$logic$IIfU$_ifu$arity$3;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ifu["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfU.-ifu",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__22067 = gs;var vec__22068 = G__22067;var g0 = cljs.core.nth.call(null,vec__22068,0,null);var gr = cljs.core.nthnext.call(null,vec__22068,1);var b__$3 = b__$2;var G__22067__$1 = G__22067;while(true){
var b__$4 = b__$3;var vec__22069 = G__22067__$1;var g0__$1 = cljs.core.nth.call(null,vec__22069,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__22069,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__22130 = b__$5;
var G__22131 = gr__$1;
b__$3 = G__22130;
G__22067__$1 = G__22131;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__22071 = gs;var vec__22072 = G__22071;var g0 = cljs.core.nth.call(null,vec__22072,0,null);var gr = cljs.core.nthnext.call(null,vec__22072,1);var b__$3 = b__$2;var G__22071__$1 = G__22071;while(true){
var b__$4 = b__$3;var vec__22073 = G__22071__$1;var g0__$1 = cljs.core.nth.call(null,vec__22073,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__22073,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__22132 = b__$5;
var G__22133 = gr__$1;
b__$3 = G__22132;
G__22071__$1 = G__22133;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc(((function (b__$1){
return (function (){return cljs.core.logic._ifu.call(null,b__$1.call(null),gs,c);
});})(b__$1))
));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc(((function (b__$1){
return (function (){return cljs.core.logic._ifa.call(null,b__$1.call(null),gs,c);
});})(b__$1))
));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1,gs);
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1.a,gs);
});
/**
* A relation where a is nil
*/
cljs.core.logic.nilo = (function nilo(a){return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,null,a);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.List.EMPTY,a);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l
*/
cljs.core.logic.conso = (function conso(a,d,l){return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,a__21254__auto__,cljs.core.logic.conso.call(null,a,d,l));
})));
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));return cljs.core.logic._bind.call(null,a__21254__auto__,((function (a){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(a))
);
})));
});
});
/**
* A relation where l is a collection, such that l contains x
*/
cljs.core.logic.membero = (function membero(x,l){return (function (a22075){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22075,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,a__21254__auto__,((function (tail){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,x,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(tail))
);
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a22075,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (head,tail){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,head,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(head,tail))
),membero.call(null,x,tail));
})));
}));
}))));
})));
});
});
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a22077){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22077,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,(function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
})),(function (a__21254__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__21254__auto____$1,(function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,y,z);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a22077,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (a,d){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,d),x);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(a,d))
),((function (a,d){
return (function (a__21254__auto____$1){return (new cljs.core.logic.Inc(((function (a,d){
return (function (){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto____$1,((function (r,a,d){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,r),z);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(r,a,d))
),appendo.call(null,d,y,r));
});})(a,d))
));
});})(a,d))
);
})));
}));
}))));
})));
});
});
cljs.core.logic.prefix = (function prefix(s,_LT_s){if(cljs.core._EQ_.call(null,s,_LT_s))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.conj.call(null,prefix.call(null,cljs.core.rest.call(null,s),_LT_s),cljs.core.first.call(null,s));
}
});
cljs.core.logic.IUnifyWithPMap = (function (){var obj22079 = {};return obj22079;
})();
cljs.core.logic.unify_with_pmap = (function unify_with_pmap(pmap,u,s){if((function (){var and__19791__auto__ = pmap;if(and__19791__auto__)
{return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3;
} else
{return and__19791__auto__;
}
})())
{return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3(pmap,u,s);
} else
{var x__20430__auto__ = (((pmap == null))?null:pmap);return (function (){var or__19803__auto__ = (cljs.core.logic.unify_with_pmap[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic.unify_with_pmap["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithPMap.unify-with-pmap",pmap);
}
}
})().call(null,pmap,u,s);
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.PMap = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,v__$1,u,s);
});
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k22081,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k22081,else__20392__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__22080){var self__ = this;
var this__20396__auto____$1 = this;var pred__22083 = cljs.core.keyword_identical_QMARK_;var expr__22084 = k__20397__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__22080),null));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;return cljs.core.logic.unify_with_pmap.call(null,v,u__$1,s);
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;var ks = cljs.core.keys.call(null,v__$1);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var uf = cljs.core.get.call(null,u,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core._EQ_.call(null,uf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return cljs.core.logic.fail.call(null,s__$1);
} else
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,v__$1,kf),uf);if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__22134 = cljs.core.next.call(null,ks);
var G__22135 = s__$2;
ks = G__22134;
s__$1 = G__22135;
continue;
}
} else
{return s__$2;
}
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.logic.PMap{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__22080){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.logic.PMap(G__22080,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.logic.PMap(self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__22082){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__22082)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
(cljs.core.logic.IUnifyWithPMap["_"] = true);
(cljs.core.logic.unify_with_pmap["_"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithPMap["null"] = true);
(cljs.core.logic.unify_with_pmap["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
/**
* Given map m, returns partial map that unifies with maps even if it doesn't share all of the keys of that map.
* Only the keys of the partial map will be unified:
* 
* (m/run* [q]
* (m/fresh [pm x]
* (m/== pm (partial-map {:a x}))
* (m/== pm {:a 1 :b 2})
* (m/== pm q)))
* ;;=> ({:a 1})
*/
cljs.core.logic.partial_map = (function partial_map(m){return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.lvarq_sym_QMARK_ = (function lvarq_sym_QMARK_(s){return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str(s)].join('')),"?"));
});
cljs.core.logic.proc_lvar = (function proc_lvar(lvar_expr,store){var v = (function (){var temp__4090__auto__ = cljs.core.deref.call(null,store).call(null,lvar_expr);if(cljs.core.truth_(temp__4090__auto__))
{var u = temp__4090__auto__;return u;
} else
{return cljs.core.logic.lvar.call(null,lvar_expr);
}
})();cljs.core.swap_BANG_.call(null,store,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvar_expr,v], null));
return v;
});
cljs.core.logic.lcons_expr_QMARK_ = (function lcons_expr_QMARK_(expr){var and__19791__auto__ = cljs.core.seq_QMARK_.call(null,expr);if(and__19791__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",-1640531481,null),null], null), null),cljs.core.set.call(null,expr));
} else
{return and__19791__auto__;
}
});
cljs.core.logic.replace_lvar = (function replace_lvar(store){return (function (expr){if(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr))
{return cljs.core.logic.proc_lvar.call(null,expr,store);
} else
{if(cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr)))
{return cljs.core.logic.prep_STAR_.call(null,expr,store);
} else
{return expr;
}
}
});
});
cljs.core.logic.prep_STAR_ = (function() {
var prep_STAR_ = null;
var prep_STAR___2 = (function (expr,store){return prep_STAR_.call(null,expr,store,false,false);
});
var prep_STAR___3 = (function (expr,store,lcons_QMARK_){return prep_STAR_.call(null,expr,store,lcons_QMARK_,false);
});
var prep_STAR___4 = (function (expr,store,lcons_QMARK_,last_QMARK_){var expr__$1 = (cljs.core.truth_((function (){var and__19791__auto__ = last_QMARK_;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.seq.call(null,expr);
} else
{return and__19791__auto__;
}
})())?cljs.core.first.call(null,expr):expr);if(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr__$1))
{return cljs.core.logic.proc_lvar.call(null,expr__$1,store);
} else
{if(cljs.core.seq_QMARK_.call(null,expr__$1))
{if(cljs.core.truth_((function (){var or__19803__auto__ = lcons_QMARK_;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.logic.lcons_expr_QMARK_.call(null,expr__$1);
}
})()))
{var vec__22087 = expr__$1;var f = cljs.core.nth.call(null,vec__22087,0,null);var n = cljs.core.nthnext.call(null,vec__22087,1);var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",-1640531481,null));var tail = prep_STAR_.call(null,n,store,lcons_QMARK_,skip);if(skip)
{return tail;
} else
{return cljs.core.logic.lcons.call(null,prep_STAR_.call(null,f,store),tail);
}
} else
{return clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,store),expr__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return expr__$1;
} else
{return null;
}
}
}
});
prep_STAR_ = function(expr,store,lcons_QMARK_,last_QMARK_){
switch(arguments.length){
case 2:
return prep_STAR___2.call(this,expr,store);
case 3:
return prep_STAR___3.call(this,expr,store,lcons_QMARK_);
case 4:
return prep_STAR___4.call(this,expr,store,lcons_QMARK_,last_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prep_STAR_.cljs$core$IFn$_invoke$arity$2 = prep_STAR___2;
prep_STAR_.cljs$core$IFn$_invoke$arity$3 = prep_STAR___3;
prep_STAR_.cljs$core$IFn$_invoke$arity$4 = prep_STAR___4;
return prep_STAR_;
})()
;
/**
* Prep a quoted expression. All symbols preceded by ? will
* be replaced with logic vars.
*/
cljs.core.logic.prep = (function prep(expr){var lvars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prepped = (cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr))?cljs.core.logic.prep_STAR_.call(null,expr,lvars,true):clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,lvars),expr));return cljs.core.with_meta.call(null,prepped,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lvars","lvars",1117256714),cljs.core.deref.call(null,lvars)], null));
});
cljs.core.logic.unify = (function unify(s,u,v){if((u === v))
{return s;
} else
{var u__$1 = cljs.core.logic._walk.call(null,s,u);var v__$1 = cljs.core.logic._walk.call(null,s,v);if((u__$1 === v__$1))
{return s;
} else
{return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,s);
}
}
});
/**
* Unify the terms u and w.
* @param {...*} var_args
*/
cljs.core.logic.unifier_STAR_ = (function() {
var unifier_STAR_ = null;
var unifier_STAR___2 = (function (u,w){return cljs.core.first.call(null,cljs.core.doall.call(null,(function (){var xs__21262__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc((function (){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (q){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,u,w);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(q))
),((function (q){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,u,q);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(q))
),((function (q){
return (function (a__21263__auto__){return cljs.core.logic._reify.call(null,a__21263__auto__,q);
});})(q))
);
})));
}).call(null,cljs.core.logic.empty_s);
}))));if(false)
{return cljs.core.take.call(null,false,xs__21262__auto__);
} else
{return xs__21262__auto__;
}
})()));
});
var unifier_STAR___3 = (function() { 
var G__22136__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier_STAR_,unifier_STAR_.call(null,u,w),ts);
};
var G__22136 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22136__delegate.call(this,u,w,ts);};
G__22136.cljs$lang$maxFixedArity = 2;
G__22136.cljs$lang$applyTo = (function (arglist__22137){
var u = cljs.core.first(arglist__22137);
arglist__22137 = cljs.core.next(arglist__22137);
var w = cljs.core.first(arglist__22137);
var ts = cljs.core.rest(arglist__22137);
return G__22136__delegate(u,w,ts);
});
G__22136.cljs$core$IFn$_invoke$arity$variadic = G__22136__delegate;
return G__22136;
})()
;
unifier_STAR_ = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return unifier_STAR___2.call(this,u,w);
default:
return unifier_STAR___3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier_STAR_.cljs$lang$maxFixedArity = 2;
unifier_STAR_.cljs$lang$applyTo = unifier_STAR___3.cljs$lang$applyTo;
unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = unifier_STAR___2;
unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic = unifier_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return unifier_STAR_;
})()
;
/**
* Return the binding map that unifies terms u and w.
* u and w should prepped terms.
* @param {...*} var_args
*/
cljs.core.logic.binding_map_STAR_ = (function() {
var binding_map_STAR_ = null;
var binding_map_STAR___2 = (function (u,w){var lvars = cljs.core.merge.call(null,new cljs.core.Keyword(null,"lvars","lvars",1117256714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u)),new cljs.core.Keyword(null,"lvars","lvars",1117256714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,w)));var s = cljs.core.logic.unify.call(null,cljs.core.logic.empty_s,u,w);if(cljs.core.logic.failed_QMARK_.call(null,s))
{return null;
} else
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (lvars,s){
return (function (p__22090){var vec__22091 = p__22090;var k = cljs.core.nth.call(null,vec__22091,0,null);var v = cljs.core.nth.call(null,vec__22091,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify.call(null,s,v)], null);
});})(lvars,s))
,lvars));
}
});
var binding_map_STAR___3 = (function() { 
var G__22138__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map_STAR_,binding_map_STAR_.call(null,u,w),ts);
};
var G__22138 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22138__delegate.call(this,u,w,ts);};
G__22138.cljs$lang$maxFixedArity = 2;
G__22138.cljs$lang$applyTo = (function (arglist__22139){
var u = cljs.core.first(arglist__22139);
arglist__22139 = cljs.core.next(arglist__22139);
var w = cljs.core.first(arglist__22139);
var ts = cljs.core.rest(arglist__22139);
return G__22138__delegate(u,w,ts);
});
G__22138.cljs$core$IFn$_invoke$arity$variadic = G__22138__delegate;
return G__22138;
})()
;
binding_map_STAR_ = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return binding_map_STAR___2.call(this,u,w);
default:
return binding_map_STAR___3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
binding_map_STAR_.cljs$lang$maxFixedArity = 2;
binding_map_STAR_.cljs$lang$applyTo = binding_map_STAR___3.cljs$lang$applyTo;
binding_map_STAR_.cljs$core$IFn$_invoke$arity$2 = binding_map_STAR___2;
binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic = binding_map_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return binding_map_STAR_;
})()
;
/**
* Unify the terms u and w. Will prep the terms.
* @param {...*} var_args
*/
cljs.core.logic.unifier = (function() {
var unifier = null;
var unifier__2 = (function (u,w){if(!(cljs.core.logic.lcons_QMARK_.call(null,u)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"u","u",-1640531410,null)))))].join('')));
}
if(!(cljs.core.logic.lcons_QMARK_.call(null,w)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"w","w",-1640531408,null)))))].join('')));
}
var up = cljs.core.logic.prep.call(null,u);var wp = cljs.core.logic.prep.call(null,w);return cljs.core.logic.unifier_STAR_.call(null,up,wp);
});
var unifier__3 = (function() { 
var G__22140__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier,unifier.call(null,u,w),ts);
};
var G__22140 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22140__delegate.call(this,u,w,ts);};
G__22140.cljs$lang$maxFixedArity = 2;
G__22140.cljs$lang$applyTo = (function (arglist__22141){
var u = cljs.core.first(arglist__22141);
arglist__22141 = cljs.core.next(arglist__22141);
var w = cljs.core.first(arglist__22141);
var ts = cljs.core.rest(arglist__22141);
return G__22140__delegate(u,w,ts);
});
G__22140.cljs$core$IFn$_invoke$arity$variadic = G__22140__delegate;
return G__22140;
})()
;
unifier = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return unifier__2.call(this,u,w);
default:
return unifier__3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier.cljs$lang$maxFixedArity = 2;
unifier.cljs$lang$applyTo = unifier__3.cljs$lang$applyTo;
unifier.cljs$core$IFn$_invoke$arity$2 = unifier__2;
unifier.cljs$core$IFn$_invoke$arity$variadic = unifier__3.cljs$core$IFn$_invoke$arity$variadic;
return unifier;
})()
;
/**
* Return the binding map that unifies terms u and w.
* Will prep the terms.
* @param {...*} var_args
*/
cljs.core.logic.binding_map = (function() {
var binding_map = null;
var binding_map__2 = (function (u,w){if(!(cljs.core.logic.lcons_QMARK_.call(null,u)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"u","u",-1640531410,null)))))].join('')));
}
if(!(cljs.core.logic.lcons_QMARK_.call(null,w)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"w","w",-1640531408,null)))))].join('')));
}
var up = cljs.core.logic.prep.call(null,u);var wp = cljs.core.logic.prep.call(null,w);return cljs.core.logic.binding_map_STAR_.call(null,up,wp);
});
var binding_map__3 = (function() { 
var G__22142__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map,binding_map.call(null,u,w),ts);
};
var G__22142 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22142__delegate.call(this,u,w,ts);};
G__22142.cljs$lang$maxFixedArity = 2;
G__22142.cljs$lang$applyTo = (function (arglist__22143){
var u = cljs.core.first(arglist__22143);
arglist__22143 = cljs.core.next(arglist__22143);
var w = cljs.core.first(arglist__22143);
var ts = cljs.core.rest(arglist__22143);
return G__22142__delegate(u,w,ts);
});
G__22142.cljs$core$IFn$_invoke$arity$variadic = G__22142__delegate;
return G__22142;
})()
;
binding_map = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return binding_map__2.call(this,u,w);
default:
return binding_map__3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
binding_map.cljs$lang$maxFixedArity = 2;
binding_map.cljs$lang$applyTo = binding_map__3.cljs$lang$applyTo;
binding_map.cljs$core$IFn$_invoke$arity$2 = binding_map__2;
binding_map.cljs$core$IFn$_invoke$arity$variadic = binding_map__3.cljs$core$IFn$_invoke$arity$variadic;
return binding_map;
})()
;
}
if(!lt.util.load.provided_QMARK_('kibit.rules.util')) {
goog.provide('kibit.rules.util');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
kibit.rules.util.raw_rule_QMARK_ = (function raw_rule_QMARK_(rule){cljs.core.println.call(null,rule,cljs.core.meta.call(null,rule));
return new cljs.core.Keyword(null,"raw?","raw?",1017397385).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rule));
});
kibit.rules.util.compile_rule = (function compile_rule(rule){if(cljs.core.truth_(kibit.rules.util.raw_rule_QMARK_.call(null,rule)))
{return rule;
} else
{var vec__22226 = cljs.core.logic.prep.call(null,rule);var pat = cljs.core.nth.call(null,vec__22226,0,null);var alt = cljs.core.nth.call(null,vec__22226,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__22226,pat,alt){
return (function (expr){return ((function (vec__22226,pat,alt){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,expr,pat);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(vec__22226,pat,alt))
});})(vec__22226,pat,alt))
,((function (vec__22226,pat,alt){
return (function (sbst){return ((function (vec__22226,pat,alt){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,sbst,alt);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(vec__22226,pat,alt))
});})(vec__22226,pat,alt))
], null);
}
});
}
if(!lt.util.load.provided_QMARK_('kibit.rules.misc')) {
goog.provide('kibit.rules.misc');
goog.require('cljs.core');
goog.require('kibit.rules.util');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
kibit.rules.misc.class_symbol_QMARK_ = (function class_symbol_QMARK_(sym){var sym__$1 = cljs.core.pr_str.call(null,sym);var idx = sym__$1.lastIndexOf(".");if((idx < 0))
{return Character.isUpperCase.call(null,cljs.core.first.call(null,sym__$1));
} else
{return Character.isUpperCase.call(null,cljs.core.nth.call(null,sym__$1,(idx + 1)));
}
});
var fun_22271 = cljs.core.logic.lvar.call(null);var obj_22272 = cljs.core.logic.lvar.call(null);var method_22273 = cljs.core.logic.lvar.call(null);var args_22274 = cljs.core.logic.lvar.call(null);var klass_22275 = cljs.core.logic.lvar.call(null);var form_22276 = cljs.core.logic.lvar.call(null);var static_method_22277 = cljs.core.logic.lvar.call(null);var rules__21589__auto___22278 = cljs.core.map.call(null,kibit.rules.util.compile_rule,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),cljs.core.list(new cljs.core.Symbol(null,"interpose","interpose",-1137596122,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",640354914,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),cljs.core.list(new cljs.core.Symbol(null,"reverse","reverse",-540685157,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol("clojure.string","reverse","clojure.string/reverse",-124256342,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",640354914,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",1573062323,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",1573062323,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",2113019871,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null)),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)))),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)))),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"ffirst","ffirst",1377082307,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"fnext","fnext",-1542954478,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"nnext","nnext",-1535566310,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"nfirst","nfirst",1606115515,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1637403730,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","conde","logic-m/conde",-692481643,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"expr","expr",-1637403730,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,"fn","fn",-1640528255,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null),cljs.core.list(new cljs.core.Symbol("logic-m","llist","logic-m/llist",-683869172,null),new cljs.core.Symbol(null,"fun","fun",-1640429768,null),new cljs.core.Symbol(null,"args","args",-1637528938,null))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"expr","expr",-1637403730,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null),cljs.core.list(new cljs.core.Symbol("logic-m","llist","logic-m/llist",-683869172,null),new cljs.core.Symbol(null,"fun","fun",-1640429768,null),new cljs.core.Symbol(null,"args","args",-1637528938,null))))], null)),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"fun","fun",-1640429768,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22248#","p1__22248#",1704740167,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",-1117382353,null),new cljs.core.Symbol(null,"p1__22248#","p1__22248#",1704740167,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",910997344,null),new cljs.core.Symbol(null,"p1__22248#","p1__22248#",1704740167,null)),cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-110723002,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [".",null,"/",null], null), null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"p1__22248#","p1__22248#",1704740167,null))))))))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22249#","p1__22249#",1704740198,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22249#","p1__22249#",1704740198,null),new cljs.core.Symbol(null,"fun","fun",-1640429768,null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw?","raw?",1017397385),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,".toString",".toString",-661012909,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22250#","p1__22250#",1704740880,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22250#","p1__22250#",1704740880,null),cljs.core.list(new cljs.core.Symbol("logic-m","llist","logic-m/llist",-683869172,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,".",".",-1640531481,null)),new cljs.core.Symbol(null,"obj","obj",-1640421712,null),new cljs.core.Symbol(null,"method","method",1576880794,null),new cljs.core.Symbol(null,"args","args",-1637528938,null))),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"obj","obj",-1640421712,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",2113019871,null),new cljs.core.Symbol(null,"class-symbol?","class-symbol?",-1226683381,null))))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22251#","p1__22251#",1704740911,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","project","logic-m/project",-1096774529,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"method","method",1576880794,null),new cljs.core.Symbol(null,"args","args",-1637528938,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s?","s?",-1640527899,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null),new cljs.core.Symbol(null,"method","method",1576880794,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"s?","s?",-1640527899,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"method","method",1576880794,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null)),new cljs.core.Symbol(null,"method","method",1576880794,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"s?","s?",-1640527899,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"method","method",1576880794,null)),new cljs.core.Symbol(null,"method","method",1576880794,null))], null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22251#","p1__22251#",1704740911,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",-1953197891,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-670704357,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",1758171214,null),cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-606680616,null),cljs.core.list(new cljs.core.Symbol(null,"symbol","symbol",1766911825,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),".",new cljs.core.Symbol(null,"method","method",1576880794,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-606680616,null),new cljs.core.Symbol(null,"obj","obj",-1640421712,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null))))))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw?","raw?",1017397385),true], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22252#","p1__22252#",1704740942,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22252#","p1__22252#",1704740942,null),cljs.core.list(new cljs.core.Symbol("logic-m","llist","logic-m/llist",-683869172,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,".",".",-1640531481,null)),new cljs.core.Symbol(null,"klass","klass",-1538400455,null),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null),new cljs.core.Symbol(null,"args","args",-1637528938,null))),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"klass","klass",-1538400455,null),new cljs.core.Symbol(null,"class-symbol?","class-symbol?",-1226683381,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22253#","p1__22253#",1704740973,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","project","logic-m/project",-1096774529,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",-1538400455,null),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null),new cljs.core.Symbol(null,"args","args",-1637528938,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s?","s?",-1640527899,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"s?","s?",-1640527899,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null)),new cljs.core.Symbol(null,"args","args",-1637528938,null)),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"s?","s?",-1640527899,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null)),new cljs.core.Symbol(null,"static-method","static-method",1675980505,null))], null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22253#","p1__22253#",1704740973,null),cljs.core.list(new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",-1953197891,null),cljs.core.list(new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-670704357,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",1758171214,null),cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-606680616,null),cljs.core.list(new cljs.core.Symbol(null,"symbol","symbol",1766911825,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"klass","klass",-1538400455,null),"/",new cljs.core.Symbol(null,"static-method","static-method",1675980505,null)))),new cljs.core.Symbol(null,"args","args",-1637528938,null))))))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw?","raw?",1017397385),true], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22254#","p1__22254#",1704741004,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22254#","p1__22254#",1704741004,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,"->","->",-1640530070,null)),new cljs.core.Symbol(null,"arg","arg",-1640434673,null),new cljs.core.Symbol(null,"form","form",-1637382531,null))))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sbst","sbst",-1637007703,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","conde","logic-m/conde",-692481643,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22255#","p1__22255#",1704741035,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",910997344,null),new cljs.core.Symbol(null,"p1__22255#","p1__22255#",1704741035,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",-1117382353,null),new cljs.core.Symbol(null,"p1__22255#","p1__22255#",1704741035,null))))),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"sbst","sbst",-1637007703,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),new cljs.core.Symbol(null,"arg","arg",-1640434673,null))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null)),cljs.core.list(new cljs.core.Symbol("logic-m","project","logic-m/project",-1096774529,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",-1637382531,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"sbst","sbst",-1637007703,null),cljs.core.list(new cljs.core.Symbol(null,"list*","list*",-1537549051,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"form","form",-1637382531,null)),new cljs.core.Symbol(null,"arg","arg",-1640434673,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"form","form",-1637382531,null))))))], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw?","raw?",1017397385),true], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22256#","p1__22256#",1704741066,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"p1__22256#","p1__22256#",1704741066,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,"->>","->>",-1640486298,null)),new cljs.core.Symbol(null,"arg","arg",-1640434673,null),new cljs.core.Symbol(null,"form","form",-1637382531,null))))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sbst","sbst",-1637007703,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","conde","logic-m/conde",-692481643,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22257#","p1__22257#",1704741097,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",910997344,null),new cljs.core.Symbol(null,"p1__22257#","p1__22257#",1704741097,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",-1117382353,null),new cljs.core.Symbol(null,"p1__22257#","p1__22257#",1704741097,null))))),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"sbst","sbst",-1637007703,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),new cljs.core.Symbol(null,"arg","arg",-1640434673,null))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("logic-m","all","logic-m/all",-1453335049,null),cljs.core.list(new cljs.core.Symbol("logic-m","pred","logic-m/pred",-1458772617,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null)),cljs.core.list(new cljs.core.Symbol("logic-m","project","logic-m/project",-1096774529,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",-1637382531,null)], null),cljs.core.list(new cljs.core.Symbol("logic-m","==","logic-m/==",-1454291978,null),new cljs.core.Symbol(null,"sbst","sbst",-1637007703,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",1299640525,null),new cljs.core.Symbol(null,"form","form",-1637382531,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),new cljs.core.Symbol(null,"arg","arg",-1640434673,null))))))], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw?","raw?",1017397385),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-1636995411,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-110723002,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"with-meta","with-meta",-774206363,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"?f","?f",-1640529472,null),cljs.core.list(new cljs.core.Symbol(null,"meta","meta",-1637183554,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?arg","?arg",-1638557840,null))),cljs.core.list(new cljs.core.Symbol(null,"vary-meta","vary-meta",-1312644487,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?f","?f",-1640529472,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?arg","?arg",-1638557840,null))], null)));kibit.rules.misc.rules = cljs.core.vec.call(null,rules__21589__auto___22278);
}
if(!lt.util.load.provided_QMARK_('kibit.rules.collections')) {
goog.provide('kibit.rules.collections');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21589__auto___22247 = cljs.core.map.call(null,kibit.rules.util.compile_rule,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1637472031,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",1834048252,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",-1640414899,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"?key","?key",-1638548615,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?keys","?keys",-1579061140,null),new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?keys","?keys",-1579061140,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"set","set",-1640417765,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"take","take",-1636979136,null),new cljs.core.Symbol(null,"?n","?n",-1640529464,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",-480456640,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",-480456640,null),new cljs.core.Symbol(null,"?n","?n",-1640529464,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null)));kibit.rules.collections.rules = cljs.core.vec.call(null,rules__21589__auto___22247);
}
if(!lt.util.load.provided_QMARK_('kibit.rules.control-structures')) {
goog.provide('kibit.rules.control_structures');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21589__auto___22224 = cljs.core.map.call(null,kibit.rules.util.compile_rule,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),null),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),null,new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null)),cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1461176100,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,"?expr","?expr",-1579221907,null),null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",401149633,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,"?expr","?expr",-1579221907,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?test","?test",-1578793206,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",-1532142362,null)))),cljs.core.list(new cljs.core.Symbol(null,"while","while",-1527429910,null),new cljs.core.Symbol(null,"?test","?test",-1578793206,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null)));kibit.rules.control_structures.rules = cljs.core.vec.call(null,rules__21589__auto___22224);
}
if(!lt.util.load.provided_QMARK_('kibit.rules.equality')) {
goog.provide('kibit.rules.equality');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21589__auto___22213 = cljs.core.map.call(null,kibit.rules.util.compile_rule,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"==","==",-1640529575,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"==","==",-1640529575,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1529891286,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",1372554549,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),null,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null)));kibit.rules.equality.rules = cljs.core.vec.call(null,rules__21589__auto___22213);
}
if(!lt.util.load.provided_QMARK_('kibit.rules.arithmetic')) {
goog.provide('kibit.rules.arithmetic');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21589__auto___22202 = cljs.core.map.call(null,kibit.rules.util.compile_rule,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),1,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-1640432197,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("Math","sqrt","Math/sqrt",-1481562997,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",-1488621581,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),2),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",-1488621581,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),2))),cljs.core.list(new cljs.core.Symbol("Math","hypot","Math/hypot",-1384785649,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-1640432197,null),cljs.core.list(new cljs.core.Symbol("Math","exp","Math/exp",-1488676984,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol("Math","expm1","Math/expm1",-1392337428,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0.5)),cljs.core.list(new cljs.core.Symbol("Math","round","Math/round",-1375834311,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null)));kibit.rules.arithmetic.rules = cljs.core.vec.call(null,rules__21589__auto___22202);
}
if(!lt.util.load.provided_QMARK_('kibit.rules')) {
goog.provide('kibit.rules');
goog.require('cljs.core');
goog.require('kibit.rules.arithmetic');
goog.require('kibit.rules.arithmetic');
goog.require('kibit.rules.equality');
goog.require('kibit.rules.control_structures');
goog.require('kibit.rules.equality');
goog.require('kibit.rules.control_structures');
goog.require('kibit.rules.collections');
goog.require('kibit.rules.misc');
goog.require('kibit.rules.misc');
goog.require('kibit.rules.collections');
kibit.rules.rule_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"control-structures","control-structures",1415278402),kibit.rules.control_structures.rules,new cljs.core.Keyword(null,"arithmetic","arithmetic",4799474716),kibit.rules.arithmetic.rules,new cljs.core.Keyword(null,"collections","collections",2867796231),kibit.rules.collections.rules,new cljs.core.Keyword(null,"equality","equality",1595304044),kibit.rules.equality.rules,new cljs.core.Keyword(null,"misc","misc",1017256030),kibit.rules.misc.rules], null);
kibit.rules.all_rules = cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,kibit.rules.rule_map));
}
if(!lt.util.load.provided_QMARK_('cljs.extended.reader')) {
goog.provide('cljs.extended.reader');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string');
cljs.extended.reader.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"try*","try*",-1636962424,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"&","&",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null], null), null);
cljs.extended.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.extended.reader.Reader = (function (){var obj21863 = {};return obj21863;
})();
cljs.extended.reader.read_char = (function read_char(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended$reader$Reader$read_char$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended$reader$Reader$read_char$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended.reader.read_char[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended.reader.read_char["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.extended.reader.peek_char = (function peek_char(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended$reader$Reader$peek_char$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended$reader$Reader$peek_char$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended.reader.peek_char[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended.reader.peek_char["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
cljs.extended.reader.IPushbackReader = (function (){var obj21865 = {};return obj21865;
})();
cljs.extended.reader.unread = (function unread(reader,ch){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended$reader$IPushbackReader$unread$arity$2;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended$reader$IPushbackReader$unread$arity$2(reader,ch);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended.reader.unread[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended.reader.unread["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
cljs.extended.reader.IndexingReader = (function (){var obj21867 = {};return obj21867;
})();
cljs.extended.reader.get_line_number = (function get_line_number(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended$reader$IndexingReader$get_line_number$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended$reader$IndexingReader$get_line_number$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended.reader.get_line_number[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended.reader.get_line_number["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
cljs.extended.reader.get_column_number = (function get_column_number(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended$reader$IndexingReader$get_column_number$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended$reader$IndexingReader$get_column_number$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended.reader.get_column_number[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended.reader.get_column_number["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-column-number",reader);
}
}
})().call(null,reader);
}
});

/**
* @constructor
*/
cljs.extended.reader.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
cljs.extended.reader.StringReader.cljs$lang$type = true;
cljs.extended.reader.StringReader.cljs$lang$ctorStr = "cljs.extended.reader/StringReader";
cljs.extended.reader.StringReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended.reader/StringReader");
});
cljs.extended.reader.StringReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.StringReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{var r = self__.s.charAt(self__.s_pos);self__.s_pos = (self__.s_pos + 1);
return r;
} else
{return null;
}
});
cljs.extended.reader.StringReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{return self__.s.charAt(self__.s_pos);
} else
{return null;
}
});
cljs.extended.reader.__GT_StringReader = (function __GT_StringReader(s,s_len,s_pos){return (new cljs.extended.reader.StringReader(s,s_len,s_pos));
});

/**
* @constructor
*/
cljs.extended.reader.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
cljs.extended.reader.PushbackReader.cljs$lang$type = true;
cljs.extended.reader.PushbackReader.cljs$lang$ctorStr = "cljs.extended.reader/PushbackReader";
cljs.extended.reader.PushbackReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended.reader/PushbackReader");
});
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(ch))
{if((self__.buf_pos === 0))
{throw (new Error("Pushback buffer is full"));
} else
{}
self__.buf_pos = (self__.buf_pos - 1);
return (self__.buf[self__.buf_pos] = ch);
} else
{return null;
}
});
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buf_pos < self__.buf_len))
{var r = (self__.buf[self__.buf_pos]);self__.buf_pos = (self__.buf_pos + 1);
return r;
} else
{return cljs.extended.reader.read_char.call(null,self__.rdr);
}
});
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buf_pos < self__.buf_len))
{return (self__.buf[self__.buf_pos]);
} else
{return cljs.extended.reader.peek_char.call(null,self__.rdr);
}
});
cljs.extended.reader.__GT_PushbackReader = (function __GT_PushbackReader(rdr,buf,buf_len,buf_pos){return (new cljs.extended.reader.PushbackReader(rdr,buf,buf_len,buf_pos));
});
cljs.extended.reader.normalize_newline = (function normalize_newline(rdr,ch){if(("\r" === ch))
{var c = cljs.extended.reader.peek_char.call(null,rdr);if((("\f" === c)) || (("\n" === c)))
{cljs.extended.reader.read_char.call(null,rdr);
} else
{}
return "\n";
} else
{return ch;
}
});

/**
* @constructor
*/
cljs.extended.reader.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.prev_column = prev_column;
this.file_name = file_name;
})
cljs.extended.reader.IndexingPushbackReader.cljs$lang$type = true;
cljs.extended.reader.IndexingPushbackReader.cljs$lang$ctorStr = "cljs.extended.reader/IndexingPushbackReader";
cljs.extended.reader.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended.reader/IndexingPushbackReader");
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$ = true;
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.file_name;
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
self__.column = self__.prev_column;
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
return cljs.extended.reader.unread.call(null,self__.rdr,ch);
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.extended.reader.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.extended.reader.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.extended.reader.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.prev_column = self__.column;
self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
return ch__$1;
} else
{return null;
}
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.extended.reader.peek_char.call(null,self__.rdr);
});
cljs.extended.reader.__GT_IndexingPushbackReader = (function __GT_IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){return (new cljs.extended.reader.IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name));
});
/**
* Returns an object of the same type and value as `obj`, with its metadata merged over `m`.
*/
cljs.extended.reader.merge_meta = (function merge_meta(obj,m){var orig_meta = cljs.core.meta.call(null,obj);return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,m,cljs.core.dissoc.call(null,orig_meta,new cljs.core.Keyword(null,"source","source",4412365709))));
});
/**
* Returns a string containing the contents of the top most source logging frame.
*/
cljs.extended.reader.peek_source_log = (function peek_source_log(source_log_frames){var current_frame = cljs.core.deref.call(null,source_log_frames);return new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(current_frame).toString().substring(new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(current_frame));
});
/**
* Logs `char` to all currently active source logging frames.
*/
cljs.extended.reader.log_source_char = (function log_source_char(source_log_frames,char$){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,source_log_frames));if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;return buffer.append(char$);
} else
{return null;
}
});
/**
* Removes the last logged character from all currently active source logging frames. Called when pushing a character back.
*/
cljs.extended.reader.drop_last_logged_char = (function drop_last_logged_char(source_log_frames){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,source_log_frames));if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;var s = buffer.toString();return buffer.set(s.substring(0,(buffer.getLength() - 1)));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.extended.reader.SourceLoggingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,source_log_frames){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.source_log_frames = source_log_frames;
})
cljs.extended.reader.SourceLoggingPushbackReader.cljs$lang$type = true;
cljs.extended.reader.SourceLoggingPushbackReader.cljs$lang$ctorStr = "cljs.extended.reader/SourceLoggingPushbackReader";
cljs.extended.reader.SourceLoggingPushbackReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended.reader/SourceLoggingPushbackReader");
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IndexingReader$ = true;
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
if(cljs.core.truth_(ch))
{cljs.extended.reader.drop_last_logged_char.call(null,self__.source_log_frames);
} else
{}
return cljs.extended.reader.unread.call(null,self__.rdr,ch);
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.extended.reader.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.extended.reader.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.extended.reader.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
cljs.extended.reader.log_source_char.call(null,self__.source_log_frames,ch__$1);
return ch__$1;
} else
{return null;
}
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.extended.reader.peek_char.call(null,self__.rdr);
});
cljs.extended.reader.__GT_SourceLoggingPushbackReader = (function __GT_SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,source_log_frames){return (new cljs.extended.reader.SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,source_log_frames));
});
/**
* Creates a StringReader from a given string
*/
cljs.extended.reader.string_reader = (function string_reader(s){return (new cljs.extended.reader.StringReader(s,s.length,0));
});
/**
* Creates a PushbackReader from a given string
*/
cljs.extended.reader.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){return string_push_back_reader.call(null,s,1);
});
var string_push_back_reader__2 = (function (s,buf_len){return (new cljs.extended.reader.PushbackReader(cljs.extended.reader.string_reader.call(null,s),cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
});
string_push_back_reader = function(s,buf_len){
switch(arguments.length){
case 1:
return string_push_back_reader__1.call(this,s);
case 2:
return string_push_back_reader__2.call(this,s,buf_len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
string_push_back_reader.cljs$core$IFn$_invoke$arity$1 = string_push_back_reader__1;
string_push_back_reader.cljs$core$IFn$_invoke$arity$2 = string_push_back_reader__2;
return string_push_back_reader;
})()
;
/**
* Creates an IndexingPushbackReader from a given string or PushbackReader
*/
cljs.extended.reader.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s_or_rdr){return indexing_push_back_reader.call(null,s_or_rdr,1);
});
var indexing_push_back_reader__2 = (function (s_or_rdr,buf_len){return indexing_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var indexing_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.extended.reader.IndexingPushbackReader(((typeof s_or_rdr === 'string')?cljs.extended.reader.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,0,file_name));
});
indexing_push_back_reader = function(s_or_rdr,buf_len,file_name){
switch(arguments.length){
case 1:
return indexing_push_back_reader__1.call(this,s_or_rdr);
case 2:
return indexing_push_back_reader__2.call(this,s_or_rdr,buf_len);
case 3:
return indexing_push_back_reader__3.call(this,s_or_rdr,buf_len,file_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1 = indexing_push_back_reader__1;
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$2 = indexing_push_back_reader__2;
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3 = indexing_push_back_reader__3;
return indexing_push_back_reader;
})()
;
/**
* Creates a SourceLoggingPushbackReader from a given string or PushbackReader
*/
cljs.extended.reader.source_logging_push_back_reader = (function() {
var source_logging_push_back_reader = null;
var source_logging_push_back_reader__1 = (function (s_or_rdr){return source_logging_push_back_reader.call(null,s_or_rdr,1);
});
var source_logging_push_back_reader__2 = (function (s_or_rdr,buf_len){return source_logging_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var source_logging_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.extended.reader.SourceLoggingPushbackReader(((typeof s_or_rdr === 'string')?cljs.extended.reader.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),(new goog.string.StringBuffer()),new cljs.core.Keyword(null,"offset","offset",4289091589),0], null))));
});
source_logging_push_back_reader = function(s_or_rdr,buf_len,file_name){
switch(arguments.length){
case 1:
return source_logging_push_back_reader__1.call(this,s_or_rdr);
case 2:
return source_logging_push_back_reader__2.call(this,s_or_rdr,buf_len);
case 3:
return source_logging_push_back_reader__3.call(this,s_or_rdr,buf_len,file_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1 = source_logging_push_back_reader__1;
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$2 = source_logging_push_back_reader__2;
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$3 = source_logging_push_back_reader__3;
return source_logging_push_back_reader;
})()
;
cljs.extended.reader.js_space = ["\t"," ",","];
cljs.extended.reader.js_linebreak = ["\r","\n"];
cljs.extended.reader.js_whitespaces = ["\r","\n","\t"," ",","];
/**
* Checks whether a given character is whitespace
*/
cljs.extended.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){return (-1 < cljs.extended.reader.js_whitespaces.indexOf(ch));
});
/**
* Checks whether a given character is space
*/
cljs.extended.reader.space_QMARK_ = (function space_QMARK_(ch){return (-1 < cljs.extended.reader.js_space.indexOf(ch));
});
/**
* Checks whether a given character is a linebreak
*/
cljs.extended.reader.linebreak_QMARK_ = (function linebreak_QMARK_(ch){return (-1 < cljs.extended.reader.js_linebreak.indexOf(ch));
});
/**
* Checks whether a given character is numeric
*/
cljs.extended.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character is a newline.
*/
cljs.extended.reader.newline_QMARK_ = (function newline_QMARK_(ch){return ("\n" === ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.extended.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.extended.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.extended.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.extended.reader.numeric_QMARK_.call(null,cljs.extended.reader.peek_char.call(null,reader))));
});
/**
* @param {...*} var_args
*/
cljs.extended.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){var error_msg = cljs.core.apply.call(null,cljs.core.str,msg);throw (new Error([cljs.core.str(error_msg),cljs.core.str((((function (){var G__21869 = rdr;if(G__21869)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21869.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?[cljs.core.str(", on line: "),cljs.core.str(cljs.extended.reader.get_line_number.call(null,rdr)),cljs.core.str(", on column: "),cljs.core.str(cljs.extended.reader.get_column_number.call(null,rdr))].join(''):null))].join('')));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__21957){
var rdr = cljs.core.first(arglist__21957);
var msg = cljs.core.rest(arglist__21957);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.extended.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__19791__auto__ = !((ch === "#"));if(and__19791__auto__)
{var and__19791__auto____$1 = !((ch === "'"));if(and__19791__auto____$1)
{var and__19791__auto____$2 = !((ch === ":"));if(and__19791__auto____$2)
{return cljs.extended.reader.macros.call(null,ch);
} else
{return and__19791__auto____$2;
}
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
});
cljs.extended.reader.tok_sb = (new goog.string.StringBuffer());
/**
* Read in a single logical token from the reader
*/
cljs.extended.reader.read_token = (function read_token(rdr,initch){if((initch == null))
{return cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading");
} else
{cljs.extended.reader.tok_sb.clear();
var ch = initch;while(true){
if((cljs.extended.reader.whitespace_QMARK_.call(null,ch)) || (cljs.extended.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))
{if((ch == null))
{} else
{cljs.extended.reader.unread.call(null,rdr,ch);
}
return cljs.extended.reader.tok_sb.toString();
} else
{cljs.extended.reader.tok_sb.append(ch);
{
var G__21958 = cljs.extended.reader.read_char.call(null,rdr);
ch = G__21958;
continue;
}
}
break;
}
}
});
/**
* Reads to the end of a line and returns the line.
*/
cljs.extended.reader.read_line = (function read_line(rdr){var sb = (new goog.string.StringBuffer());var ch = cljs.extended.reader.read_char.call(null,rdr);while(true){
if(((ch == null)) && (cljs.core._EQ_.call(null,0,sb.getLength())))
{return null;
} else
{if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return sb.toString();
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21959 = (function (){sb.append(ch);
return sb;
})();
var G__21960 = cljs.extended.reader.read_char.call(null,rdr);
sb = G__21959;
ch = G__21960;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.extended.reader.line_seq = (function line_seq(rdr){var temp__4092__auto__ = cljs.extended.reader.read_line.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;return cljs.core.cons.call(null,line,(new cljs.core.LazySeq(null,((function (line,temp__4092__auto__){
return (function (){return line_seq.call(null,rdr);
});})(line,temp__4092__auto__))
,null,null)));
} else
{return null;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.extended.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.extended.reader.read_char.call(null,reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.extended.reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$");
cljs.extended.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.extended.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.extended.reader.re_find_STAR_ = (function re_find_STAR_(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
cljs.extended.reader.match_int = (function match_int(s){var groups = cljs.extended.reader.re_find_STAR_.call(null,cljs.extended.reader.int_pattern,s);var group3 = (groups[2]);if(!(((group3 == null)) || ((group3.length < 1))))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:((new cljs.core.Keyword(null,"default","default",2558708147))?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljs.extended.reader.match_ratio = (function match_ratio(s){var groups = cljs.extended.reader.re_find_STAR_.call(null,cljs.extended.reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator) / parseInt(denominator));
});
cljs.extended.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.extended.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.extended.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.int_pattern,s)))
{return cljs.extended.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.ratio_pattern,s)))
{return cljs.extended.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.float_pattern,s)))
{return cljs.extended.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.extended.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.extended.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader))).toString();
});
cljs.extended.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader))).toString();
});
cljs.extended.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.extended.reader.octal_pattern = cljs.core.re_pattern.call(null,"[0-7]{1,3}");
cljs.extended.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.extended.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.extended.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
/**
* @param {...*} var_args
*/
cljs.extended.reader.make_unicode_char = (function() { 
var make_unicode_char__delegate = function (code_str,p__21870){var vec__21872 = p__21870;var base = cljs.core.nth.call(null,vec__21872,0,null);var base__$1 = (function (){var or__19803__auto__ = base;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return 16;
}
})();var code = parseInt(code_str,base__$1);return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__21870 = null;if (arguments.length > 1) {
  p__21870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_unicode_char__delegate.call(this,code_str,p__21870);};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__21961){
var code_str = cljs.core.first(arglist__21961);
var p__21870 = cljs.core.rest(arglist__21961);
return make_unicode_char__delegate(code_str,p__21870);
});
make_unicode_char.cljs$core$IFn$_invoke$arity$variadic = make_unicode_char__delegate;
return make_unicode_char;
})()
;
cljs.extended.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.extended.reader.read_char.call(null,reader);var mapresult = cljs.extended.reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.extended.reader.make_unicode_char.call(null,cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.unicode_2_pattern,reader,ch,cljs.extended.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.extended.reader.make_unicode_char.call(null,cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.unicode_4_pattern,reader,ch,cljs.extended.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.extended.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.extended.reader.read_past = (function read_past(pred,rdr){var ch = cljs.extended.reader.read_char.call(null,rdr);while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__21962 = cljs.extended.reader.read_char.call(null,rdr);
ch = G__21962;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.extended.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.extended.reader.read_past.call(null,cljs.extended.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4090__auto__ = cljs.extended.reader.macros.call(null,ch);if(cljs.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;var mret = macrofn.call(null,rdr,ch);{
var G__21963 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__21963;
continue;
}
} else
{cljs.extended.reader.unread.call(null,rdr,ch);
var o = cljs.extended.reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__21964 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__21964;
continue;
}
}
}
break;
}
});
cljs.extended.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.extended.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.extended.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.extended.reader.read_char.call(null,rdr);var dm = cljs.extended.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4090__auto__ = cljs.extended.reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;return obj;
} else
{return cljs.extended.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.extended.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.extended.reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.extended.reader.maybe_get_pos = (function maybe_get_pos(rdr){if((function (){var G__21874 = rdr;if(G__21874)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21874.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.extended.reader.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"column","column",3954034376),(cljs.extended.reader.get_column_number.call(null,rdr) - 1)], null);
} else
{return null;
}
});
cljs.extended.reader.prep_meta = (function prep_meta(rdr,pos,source){if(cljs.core.truth_(pos))
{return cljs.core.merge.call(null,pos,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),cljs.extended.reader.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"end-column","end-column",3799845882),cljs.extended.reader.get_column_number.call(null,rdr),new cljs.core.Keyword(null,"source","source",4412365709),source], null));
} else
{return null;
}
});
cljs.extended.reader.with_source_log = (function with_source_log(rdr,f,prefix){if((rdr instanceof cljs.extended.reader.SourceLoggingPushbackReader))
{var frame = rdr.source_log_frames;var new_frame = cljs.core.atom.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,frame),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",4289091589)], null),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frame)).getLength()));var ret = f.call(null);var source = [cljs.core.str(prefix),cljs.core.str(cljs.extended.reader.peek_source_log.call(null,new_frame))].join('');return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret,source], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
});
cljs.extended.reader.read_list = (function read_list(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__21876 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,")",rdr,true);
});})(pos))
,"(");var the_list = cljs.core.nth.call(null,vec__21876,0,null);var source = cljs.core.nth.call(null,vec__21876,1,null);return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.list,the_list),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_comment = cljs.extended.reader.skip_line;
cljs.extended.reader.read_vector = (function read_vector(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__21878 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"]",rdr,true);
});})(pos))
,"[");var the_vec = cljs.core.nth.call(null,vec__21878,0,null);var source = cljs.core.nth.call(null,vec__21878,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_vec),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_map = (function read_map(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__21880 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"{");var l = cljs.core.nth.call(null,vec__21880,0,null);var source = cljs.core.nth.call(null,vec__21880,1,null);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.extended.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.hash_map,l),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if(cljs.core.truth_((function (){var or__19803__auto__ = (ch == null);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = cljs.extended.reader.whitespace_QMARK_.call(null,ch);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{return cljs.extended.reader.macros.call(null,ch);
}
}
})()))
{cljs.extended.reader.unread.call(null,reader,ch);
var s = buffer.toString();var or__19803__auto__ = cljs.extended.reader.match_number.call(null,s);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__21965 = (function (){buffer.append(ch);
return buffer;
})();
var G__21966 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__21965;
ch = G__21966;
continue;
}
}
break;
}
});
cljs.extended.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__21967 = (function (){buffer.append(cljs.extended.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__21968 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__21967;
ch = G__21968;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__21969 = (function (){buffer.append(ch);
return buffer;
})();
var G__21970 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__21969;
ch = G__21970;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.extended.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.extended.reader.parse_symbol = (function parse_symbol(token){if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.extended.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.extended.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.extended.reader.read_token.call(null,reader,initch);if((token == null))
{return null;
} else
{return cljs.extended.reader.parse_symbol.call(null,token);
}
});
cljs.extended.reader.read_keyword = (function read_keyword(reader,initch){var tok = cljs.extended.reader.read_token.call(null,reader,cljs.extended.reader.read_char.call(null,reader));var a = cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.symbol_pattern,tok);var token = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token.indexOf("::",1) === -1))))
{return cljs.extended.reader.reader_error.call(null,reader,"Invalid token: ",token);
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token.substring(0));
}
}
});
cljs.extended.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f;
} else
{return null;
}
}
}
}
});
cljs.extended.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.extended.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.extended.reader.reader_error.call(null,rdr,msg);
});
});
cljs.extended.reader.read_meta = (function read_meta(rdr,_){var vec__21884 = (((function (){var G__21885 = rdr;if(G__21885)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21885.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.extended.reader.get_line_number.call(null,rdr),(cljs.extended.reader.get_column_number.call(null,rdr) - 1)], null):null);var line = cljs.core.nth.call(null,vec__21884,0,null);var column = cljs.core.nth.call(null,vec__21884,1,null);var m = cljs.extended.reader.desugar_meta.call(null,cljs.extended.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.extended.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.extended.reader.read.call(null,rdr,true,null,true);if((function (){var G__21886 = o;if(G__21886)
{var bit__20446__auto__ = (G__21886.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20446__auto__) || (G__21886.cljs$core$IWithMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var m__$1 = (cljs.core.truth_((function (){var and__19791__auto__ = line;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.seq_QMARK_.call(null,o);
} else
{return and__19791__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"column","column",3954034376),column):m);return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else
{return cljs.extended.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.extended.reader.UNQUOTE = new cljs.core.Keyword("cljs.extended.reader","__thisInternalKeywordRepresentsUnquoteToTheReader__","cljs.extended.reader/__thisInternalKeywordRepresentsUnquoteToTheReader__",3814487276);
cljs.extended.reader.UNQUOTE_SPLICING = new cljs.core.Keyword("cljs.extended.reader","__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__","cljs.extended.reader/__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__",1990633251);
cljs.extended.reader.SYNTAX_QUOTE = new cljs.core.Keyword("cljs.extended.reader","syntaxQuote","cljs.extended.reader/syntaxQuote",3589306974);
cljs.extended.reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,null);
cljs.extended.reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,null);
cljs.extended.reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){var and__19791__auto__ = (function (){var G__21890 = form;if(G__21890)
{var bit__20446__auto__ = (G__21890.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__21890.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(and__19791__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.extended.reader.UNQUOTE);
} else
{return and__19791__auto__;
}
});
cljs.extended.reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){var and__19791__auto__ = (function (){var G__21894 = form;if(G__21894)
{var bit__20446__auto__ = (G__21894.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__21894.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(and__19791__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.extended.reader.UNQUOTE_SPLICING);
} else
{return and__19791__auto__;
}
});
cljs.extended.reader.sqExpandList = (function sqExpandList(sq){return cljs.core.doall.call(null,(function (){var iter__20520__auto__ = (function iter__21899(s__21900){return (new cljs.core.LazySeq(null,(function (){var s__21900__$1 = s__21900;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21900__$1);if(temp__4092__auto__)
{var s__21900__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21900__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__21900__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__21902 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__21901 = 0;while(true){
if((i__21901 < size__20519__auto__))
{var item = cljs.core._nth.call(null,c__20518__auto__,i__21901);cljs.core.chunk_append.call(null,b__21902,((cljs.extended.reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))));
{
var G__21971 = (i__21901 + 1);
i__21901 = G__21971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21902),iter__21899.call(null,cljs.core.chunk_rest.call(null,s__21900__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21902),null);
}
} else
{var item = cljs.core.first.call(null,s__21900__$2);return cljs.core.cons.call(null,((cljs.extended.reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))),iter__21899.call(null,cljs.core.rest.call(null,s__21900__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,sq);
})());
});
cljs.extended.reader.syntaxQuote = (function syntaxQuote(form){if(cljs.core.truth_(cljs.core.get.call(null,cljs.extended.reader.specials,form)))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((form instanceof cljs.core.Symbol))
{var sym = form;var name = cljs.core.name.call(null,sym);var ns = cljs.core.namespace.call(null,sym);if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,"#",cljs.core.last.call(null,name))))
{var new_name = cljs.core.subs.call(null,name,0,(cljs.core.count.call(null,name) - 1));var gmap = cljs.core.deref.call(null,cljs.extended.reader._STAR_gensym_env_STAR_);if(cljs.core.not.call(null,gmap))
{cljs.extended.reader.reader_error.call(null,null,"Gensym literal not in syntax-quote");
} else
{}
var gs = (function (){var or__19803__auto__ = cljs.core.get.call(null,gmap,sym);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.gensym.call(null,[cljs.core.str(new_name),cljs.core.str("__auto__")].join(''));
}
})();cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_gensym_env_STAR_,cljs.core.assoc,sym,gs);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,gs),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,name))))
{throw (new Error("Syntax quote with no namespace ending with . not supported"));
} else
{if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,".",cljs.core.first.call(null,name))))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,sym),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Syntax quote resolving existing var not supported"));
} else
{return null;
}
}
}
}
} else
{if(cljs.extended.reader.isUnquote_QMARK_.call(null,form))
{return cljs.core.second.call(null,form);
} else
{if(cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,form))
{throw (new Error("Reader ~@ splice not in list"));
} else
{if((form == null))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((function (){var G__21911 = form;if(G__21911)
{var bit__20446__auto__ = (G__21911.cljs$lang$protocol_mask$partition0$ & 8);if((bit__20446__auto__) || (G__21911.cljs$core$ICollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{if((function (){var G__21912 = form;if(G__21912)
{var bit__20446__auto__ = (G__21912.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__20446__auto__) || (G__21912.cljs$core$IRecord$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return form;
} else
{if((function (){var G__21913 = form;if(G__21913)
{var bit__20446__auto__ = (G__21913.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__20446__auto__) || (G__21913.cljs$core$IMap$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,form))))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"hash-map","hash-map",-1493492266,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var G__21914 = form;if(G__21914)
{var bit__20446__auto__ = (G__21914.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__20446__auto__) || (G__21914.cljs$core$IVector$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,form))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"vector","vector",1834048252,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var G__21915 = form;if(G__21915)
{var bit__20446__auto__ = (G__21915.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__20446__auto__) || (G__21915.cljs$core$ISet$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,cljs.core.seq.call(null,form)))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"hash-set","hash-set",-1493486372,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var or__19803__auto__ = (function (){var G__21917 = form;if(G__21917)
{var bit__20446__auto__ = (G__21917.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__21917.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(or__19803__auto__)
{return or__19803__auto__;
} else
{var G__21918 = form;if(G__21918)
{var bit__20446__auto__ = (G__21918.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__20446__auto__) || (G__21918.cljs$core$IList$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{var temp__4090__auto__ = cljs.core.seq.call(null,form);if(temp__4090__auto__)
{var sq = temp__4090__auto__;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,sq))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null));
} else
{return cljs.core.cons.call(null,new cljs.core.Symbol(null,"list","list",-1637209513,null),null);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Unknown Collection type"));
} else
{return null;
}
}
}
}
}
}
} else
{if(((form instanceof cljs.core.Keyword)) || (typeof form === 'number') || (typeof form === 'string'))
{return form;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.extended.reader.read_syntax_quote = (function read_syntax_quote(rdr,_){var _STAR_gensym_env_STAR_21920 = cljs.extended.reader._STAR_gensym_env_STAR_;try{cljs.extended.reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var form = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.extended.reader.syntaxQuote.call(null,form);
}finally {cljs.extended.reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_21920;
}});
cljs.extended.reader.read_unquote = (function read_unquote(rdr,_){var ch = cljs.extended.reader.read_char.call(null,rdr);if(cljs.core._EQ_.call(null,null,ch))
{return cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading unquote character");
} else
{if(cljs.core._EQ_.call(null,"@",ch))
{var o = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,o),cljs.extended.reader.UNQUOTE_SPLICING);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.extended.reader.unread.call(null,rdr,ch);
var o = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,o),cljs.extended.reader.UNQUOTE);
} else
{return null;
}
}
}
});
cljs.extended.reader.read_character = (function read_character(rdr,_){var ch = cljs.extended.reader.read_char.call(null,rdr);if(cljs.core._EQ_.call(null,null,ch))
{cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading character constant");
} else
{}
var token = cljs.extended.reader.read_token.call(null,rdr,ch);if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,token)))
{return token;
} else
{if(("newline" === token))
{return "\n";
} else
{if(("space" === token))
{return " ";
} else
{if(("tab" === token))
{return "\t";
} else
{if(("backspace" === token))
{return "\b";
} else
{if(("formfeed" === token))
{return "\f";
} else
{if(("return" === token))
{return "\r";
} else
{if(cljs.core._EQ_.call(null,"u",cljs.core.first.call(null,token)))
{var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,token));cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.unicode_4_pattern,rdr,"u",chars);
var c = cljs.extended.reader.make_unicode_char.call(null,chars,16);var cval = parseInt(chars,16);if(((cval >= 55296)) && ((cval <= 57343)))
{cljs.extended.reader.reader_error.call(null,rdr,"Invalid character constant: \\",token);
} else
{}
return c;
} else
{if(cljs.core._EQ_.call(null,"o",cljs.core.first.call(null,token)))
{var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,token));cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.octal_pattern,rdr,"o",chars);
var c = cljs.extended.reader.make_unicode_char.call(null,chars,8);var cval = parseInt(chars,8);if((cval > 255))
{cljs.extended.reader.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
} else
{}
return c;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended.reader.reader_error.call(null,rdr,"Unsupported character: \\",token);
} else
{return null;
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
});
cljs.extended.reader.garg = (function garg(n){var pre = ((cljs.core._EQ_.call(null,n,-1))?"rest":[cljs.core.str("p"),cljs.core.str(n)].join(''));return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.gensym.call(null,pre)),cljs.core.str("#")].join(''));
});
cljs.extended.reader.read_fn = (function read_fn(rdr,_){if(cljs.core.truth_(cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_)))
{cljs.extended.reader.reader_error.call(null,null,"nested #()s are not allowed");
} else
{}
var _STAR_arg_env_STAR_21927 = cljs.extended.reader._STAR_arg_env_STAR_;try{cljs.extended.reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
cljs.extended.reader.unread.call(null,rdr,"(");
var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__21928 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos,_STAR_arg_env_STAR_21927){
return (function (){return cljs.extended.reader.read.call(null,rdr,true,null,true);
});})(pos,_STAR_arg_env_STAR_21927))
,"#");var form = cljs.core.nth.call(null,vec__21928,0,null);var source = cljs.core.nth.call(null,vec__21928,1,null);var argsyms = cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_);var rargs = cljs.core.rseq.call(null,argsyms);var highpair = cljs.core.first.call(null,rargs);var higharg = (cljs.core.truth_(highpair)?cljs.core.key.call(null,highpair):0);var args = (((higharg > 0))?cljs.core.doall.call(null,(function (){var iter__20520__auto__ = ((function (pos,vec__21928,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21927){
return (function iter__21929(s__21930){return (new cljs.core.LazySeq(null,((function (pos,vec__21928,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21927){
return (function (){var s__21930__$1 = s__21930;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21930__$1);if(temp__4092__auto__)
{var s__21930__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21930__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__21930__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__21932 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__21931 = 0;while(true){
if((i__21931 < size__20519__auto__))
{var i = cljs.core._nth.call(null,c__20518__auto__,i__21931);cljs.core.chunk_append.call(null,b__21932,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended.reader.garg.call(null,i);
}
})());
{
var G__21972 = (i__21931 + 1);
i__21931 = G__21972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21932),iter__21929.call(null,cljs.core.chunk_rest.call(null,s__21930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21932),null);
}
} else
{var i = cljs.core.first.call(null,s__21930__$2);return cljs.core.cons.call(null,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended.reader.garg.call(null,i);
}
})(),iter__21929.call(null,cljs.core.rest.call(null,s__21930__$2)));
}
} else
{return null;
}
break;
}
});})(pos,vec__21928,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21927))
,null,null));
});})(pos,vec__21928,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21927))
;return iter__20520__auto__.call(null,cljs.core.range.call(null,1,(1 + higharg)));
})()):rargs);var restsym = cljs.core.get.call(null,argsyms,-1);var args__$1 = (cljs.core.truth_(restsym)?cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-1640531489,null),restsym], null)):args);return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),cljs.core.vec.call(null,args__$1)),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
}finally {cljs.extended.reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_21927;
}});
cljs.extended.reader.registerArg = (function registerArg(n){var argsyms = cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_);if(cljs.core.truth_(argsyms))
{} else
{cljs.extended.reader.reader_error.call(null,null,"arg literal not in #()");
}
var ret = cljs.core.get.call(null,argsyms,n);if(cljs.core.truth_(ret))
{return ret;
} else
{var ret__$1 = cljs.extended.reader.garg.call(null,n);cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_arg_env_STAR_,cljs.core.assoc,n,ret__$1);
return ret__$1;
}
});
cljs.extended.reader.read_arg = (function read_arg(rdr,pct){if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_)))
{return cljs.extended.reader.read_symbol.call(null,rdr,"%");
} else
{var ch = cljs.extended.reader.peek_char.call(null,rdr);if(((ch == null)) || (cljs.extended.reader.whitespace_QMARK_.call(null,ch)) || (cljs.extended.reader.macro_terminating_QMARK_.call(null,ch)))
{return cljs.extended.reader.registerArg.call(null,1);
} else
{var n = cljs.extended.reader.read.call(null,rdr,true,null,true);if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&","&",-1640531489,null),n))
{return cljs.extended.reader.registerArg.call(null,-1);
} else
{if(!(typeof n === 'number'))
{return cljs.extended.reader.reader_error.call(null,rdr,"arg literal must be %, %& or %integer");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended.reader.registerArg.call(null,(n | 0));
} else
{return null;
}
}
}
}
}
});
cljs.extended.reader.read_set = (function read_set(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__21934 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"#{");var the_set = cljs.core.nth.call(null,vec__21934,0,null);var source = cljs.core.nth.call(null,vec__21934,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_set),cljs.extended.reader.prep_meta.call(null,rdr,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",3954034376)], null),cljs.core.dec),source));
});
cljs.extended.reader.read_regex = (function read_regex(reader){var buffer = "";var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__21973 = [cljs.core.str(buffer),cljs.core.str(ch),cljs.core.str(cljs.extended.reader.read_char.call(null,reader))].join('');
var G__21974 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__21973;
ch = G__21974;
continue;
}
} else
{if(("\"" === ch))
{return cljs.core.re_pattern.call(null,buffer);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__21975 = [cljs.core.str(buffer),cljs.core.str(ch)].join('');
var G__21976 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__21975;
ch = G__21976;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.extended.reader.read_discard = (function read_discard(rdr,_){cljs.extended.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.extended.reader.macros = (function macros(c){if((c === "\""))
{return cljs.extended.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.extended.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.extended.reader.read_comment;
} else
{if((c === "'"))
{return cljs.extended.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.extended.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.extended.reader.read_meta;
} else
{if((c === "`"))
{return cljs.extended.reader.wrapping_reader.call(null,cljs.extended.reader.SYNTAX_QUOTE);
} else
{if((c === "~"))
{return cljs.extended.reader.read_unquote;
} else
{if((c === "("))
{return cljs.extended.reader.read_list;
} else
{if((c === ")"))
{return cljs.extended.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.extended.reader.read_vector;
} else
{if((c === "]"))
{return cljs.extended.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.extended.reader.read_map;
} else
{if((c === "}"))
{return cljs.extended.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.extended.reader.read_character;
} else
{if((c === "%"))
{return cljs.extended.reader.read_arg;
} else
{if((c === "#"))
{return cljs.extended.reader.read_dispatch;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
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
});
cljs.extended.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.extended.reader.read_set;
} else
{if((s === "("))
{return cljs.extended.reader.read_fn;
} else
{if((s === "<"))
{return cljs.extended.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.extended.reader.read_regex;
} else
{if((s === "!"))
{return cljs.extended.reader.read_comment;
} else
{if((s === "_"))
{return cljs.extended.reader.read_discard;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.extended.reader.read = (function() {
var read = null;
var read__1 = (function (reader){return read.call(null,reader,true,null);
});
var read__3 = (function (reader,eof_is_error,sentinel){return read.call(null,reader,eof_is_error,sentinel,false);
});
var read__4 = (function (reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.extended.reader.read_char.call(null,reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.extended.reader.whitespace_QMARK_.call(null,ch))
{{
var G__21977 = reader;
var G__21978 = eof_is_error;
var G__21979 = sentinel;
var G__21980 = is_recursive;
reader = G__21977;
eof_is_error = G__21978;
sentinel = G__21979;
is_recursive = G__21980;
continue;
}
} else
{if(cljs.extended.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__21981 = cljs.extended.reader.read_comment.call(null,reader,ch);
var G__21982 = eof_is_error;
var G__21983 = sentinel;
var G__21984 = is_recursive;
reader = G__21981;
eof_is_error = G__21982;
sentinel = G__21983;
is_recursive = G__21984;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.extended.reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.extended.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.extended.reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.extended.reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__21985 = reader;
var G__21986 = eof_is_error;
var G__21987 = sentinel;
var G__21988 = is_recursive;
reader = G__21985;
eof_is_error = G__21986;
sentinel = G__21987;
is_recursive = G__21988;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
read = function(reader,eof_is_error,sentinel,is_recursive){
switch(arguments.length){
case 1:
return read__1.call(this,reader);
case 3:
return read__3.call(this,reader,eof_is_error,sentinel);
case 4:
return read__4.call(this,reader,eof_is_error,sentinel,is_recursive);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read.cljs$core$IFn$_invoke$arity$1 = read__1;
read.cljs$core$IFn$_invoke$arity$3 = read__3;
read.cljs$core$IFn$_invoke$arity$4 = read__4;
return read;
})()
;
/**
* Reads one object from the string s
*/
cljs.extended.reader.read_string = (function read_string(s){var r = cljs.extended.reader.string_push_back_reader.call(null,s);return cljs.extended.reader.read.call(null,r,true,null,false);
});
/**
* Reads one object indexed from the string s
*/
cljs.extended.reader.read_string_indexed = (function read_string_indexed(s){var r = cljs.extended.reader.indexing_push_back_reader.call(null,s);return cljs.extended.reader.read.call(null,r,true,null,false);
});
/**
* Reads one object indexed and source-logged for the string s (source and bounds only for colls)
*/
cljs.extended.reader.read_string_source_logged = (function read_string_source_logged(s){var r = cljs.extended.reader.source_logging_push_back_reader.call(null,s);return cljs.extended.reader.read.call(null,r,true,null,false);
});
cljs.extended.reader.zero_fill_right = (function zero_fill_right(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__21989 = b.append("0");
b = G__21989;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.extended.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod.call(null,num,div) === 0);
});
cljs.extended.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.extended.reader.divisible_QMARK_.call(null,num,div));
});
cljs.extended.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.extended.reader.divisible_QMARK_.call(null,year,4)) && ((cljs.extended.reader.indivisible_QMARK_.call(null,year,100)) || (cljs.extended.reader.divisible_QMARK_.call(null,year,400)));
});
cljs.extended.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.extended.reader.parse_and_validate_timestamp = (function (){var timestamp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;var check = ((function (timestamp){
return (function (low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",-1640529606,null),new cljs.core.Symbol(null,"low","low",-1640424179,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),new cljs.core.Symbol(null,"high","high",-1637329061,null))))].join('')));
}
return n;
});})(timestamp))
;return ((function (timestamp,check){
return (function (ts){var temp__4092__auto__ = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp,ts)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__21939 = temp__4092__auto__;var vec__21940 = cljs.core.nth.call(null,vec__21939,0,null);var _ = cljs.core.nth.call(null,vec__21940,0,null);var years = cljs.core.nth.call(null,vec__21940,1,null);var months = cljs.core.nth.call(null,vec__21940,2,null);var days = cljs.core.nth.call(null,vec__21940,3,null);var hours = cljs.core.nth.call(null,vec__21940,4,null);var minutes = cljs.core.nth.call(null,vec__21940,5,null);var seconds = cljs.core.nth.call(null,vec__21940,6,null);var milliseconds = cljs.core.nth.call(null,vec__21940,7,null);var vec__21941 = cljs.core.nth.call(null,vec__21939,1,null);var ___$1 = cljs.core.nth.call(null,vec__21941,0,null);var ___$2 = cljs.core.nth.call(null,vec__21941,1,null);var ___$3 = cljs.core.nth.call(null,vec__21941,2,null);var V = vec__21939;var vec__21942 = cljs.core.map.call(null,((function (vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (v){return cljs.core.map.call(null,((function (vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__21938_SHARP_){return parseInt(p1__21938_SHARP_,10);
});})(vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,v);
});})(vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,cljs.core.map.call(null,((function (vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__21936_SHARP_,p2__21935_SHARP_){return cljs.core.update_in.call(null,p2__21935_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),p1__21936_SHARP_);
});})(vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly.call(null,null),((function (vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__21937_SHARP_){if(cljs.core._EQ_.call(null,p1__21937_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
});})(vec__21939,vec__21940,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21941,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
], null),V));var vec__21943 = cljs.core.nth.call(null,vec__21942,0,null);var ___$4 = cljs.core.nth.call(null,vec__21943,0,null);var y = cljs.core.nth.call(null,vec__21943,1,null);var mo = cljs.core.nth.call(null,vec__21943,2,null);var d = cljs.core.nth.call(null,vec__21943,3,null);var h = cljs.core.nth.call(null,vec__21943,4,null);var m = cljs.core.nth.call(null,vec__21943,5,null);var s = cljs.core.nth.call(null,vec__21943,6,null);var ms = cljs.core.nth.call(null,vec__21943,7,null);var vec__21944 = cljs.core.nth.call(null,vec__21942,1,null);var offset_sign = cljs.core.nth.call(null,vec__21944,0,null);var offset_hours = cljs.core.nth.call(null,vec__21944,1,null);var offset_minutes = cljs.core.nth.call(null,vec__21944,2,null);var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,years))?1970:y),((cljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days))?1:check.call(null,1,d,cljs.extended.reader.days_in_month.call(null,mo,cljs.extended.reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds))?0:check.call(null,0,s,((cljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], null);
} else
{return null;
}
});
;})(timestamp,check))
})();
cljs.extended.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.extended.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__21946 = temp__4090__auto__;var years = cljs.core.nth.call(null,vec__21946,0,null);var months = cljs.core.nth.call(null,vec__21946,1,null);var days = cljs.core.nth.call(null,vec__21946,2,null);var hours = cljs.core.nth.call(null,vec__21946,3,null);var minutes = cljs.core.nth.call(null,vec__21946,4,null);var seconds = cljs.core.nth.call(null,vec__21946,5,null);var ms = cljs.core.nth.call(null,vec__21946,6,null);var offset = cljs.core.nth.call(null,vec__21946,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.extended.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.extended.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.extended.reader.parse_timestamp.call(null,s);
} else
{return cljs.extended.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.extended.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,(new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0)),elems);
} else
{return cljs.extended.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.extended.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.extended.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.extended.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, ["inst",cljs.extended.reader.read_date,"uuid",cljs.extended.reader.read_uuid,"queue",cljs.extended.reader.read_queue], null));
cljs.extended.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.extended.reader.read_symbol.call(null,rdr,initch);var temp__4090__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag));if(cljs.core.truth_(temp__4090__auto__))
{var pfn = temp__4090__auto__;return pfn.call(null,cljs.extended.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.extended.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_))));
}
});
cljs.extended.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = cljs.core.name.call(null,tag);var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.extended.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = cljs.core.name.call(null,tag);var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
}
if(!lt.util.load.provided_QMARK_('kibit.core')) {
goog.provide('kibit.core');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('clojure.walk');
goog.require('clojure.walk');
kibit.core.simplify_one = (function simplify_one(expr,rules){var alts = cljs.core.doall.call(null,(function (){var xs__21262__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc((function (){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (q){
return (function (a__21254__auto____$1){return (new cljs.core.logic.Inc(((function (q){
return (function (){var pat = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"pat","pat",-1640420772,null));var subst = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"subst","subst",-1530743206,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto____$1,cljs.core.logic.membero.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat,subst], null),rules)),((function (pat,subst,q){
return (function (a22169){var pat__$1 = cljs.core.logic._walk_STAR_.call(null,a22169,pat);var subst__$1 = cljs.core.logic._walk_STAR_.call(null,a22169,subst);return ((function (pat__$1,subst__$1,pat,subst,q){
return (function (a__21254__auto____$2){return (new cljs.core.logic.Inc(((function (pat__$1,subst__$1,pat,subst,q){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto____$2,((function (pat__$1,subst__$1,pat,subst,q){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,pat__$1.call(null,expr)),subst__$1.call(null,q));
});})(pat__$1,subst__$1,pat,subst,q))
);
});})(pat__$1,subst__$1,pat,subst,q))
));
});})(pat__$1,subst__$1,pat,subst,q))
.call(null,a22169);
});})(pat,subst,q))
);
});})(q))
));
});})(q))
),((function (q){
return (function (a__21263__auto__){return cljs.core.logic._reify.call(null,a__21263__auto__,q);
});})(q))
);
})));
}).call(null,cljs.core.logic.empty_s);
}))));if(false)
{return cljs.core.take.call(null,false,xs__21262__auto__);
} else
{return xs__21262__auto__;
}
})());if(cljs.core.empty_QMARK_.call(null,alts))
{return expr;
} else
{return cljs.core.first.call(null,alts);
}
});
kibit.core.simplify = (function simplify(expr,rules){return cljs.core.ffirst.call(null,cljs.core.drop_while.call(null,(function (p1__22171_SHARP_){return cljs.core.apply.call(null,cljs.core.not_EQ_,p1__22171_SHARP_);
}),cljs.core.partition.call(null,2,1,cljs.core.iterate.call(null,cljs.core.partial.call(null,clojure.walk.prewalk,(function (p1__22170_SHARP_){return kibit.core.simplify_one.call(null,p1__22170_SHARP_,rules);
})),expr))));
});
}
if(!lt.util.load.provided_QMARK_('kibit.check')) {
goog.provide('kibit.check');
goog.require('cljs.core');
goog.require('kibit.reporters');
goog.require('kibit.reporters');
goog.require('kibit.rules');
goog.require('kibit.rules');
goog.require('kibit.core');
goog.require('kibit.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
kibit.check.all_rules = kibit.rules.all_rules;
/**
* Given an expression (any piece of Clojure data), return a lazy (depth-first)
* sequence of the expr and all its sub-expressions
*/
kibit.check.expr_seq = (function expr_seq(expr){return cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,expr);
});
/**
* Construct the canonical simplify-map
* given an expression and a simplified expression.
*/
kibit.check.build_simplify_map = (function build_simplify_map(expr,simplified_expr){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"expr","expr",1017032039),expr,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr)),new cljs.core.Keyword(null,"column","column",3954034376),new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr)),new cljs.core.Keyword(null,"alt","alt",1014000923),simplified_expr], null);
});
/**
* A 'check guard' that only returns a result if the
* alternative is different than the original expresion
*/
kibit.check.unique_alt_QMARK_ = (function unique_alt_QMARK_(simplify_map){var map__22145 = simplify_map;var map__22145__$1 = ((cljs.core.seq_QMARK_.call(null,map__22145))?cljs.core.apply.call(null,cljs.core.hash_map,map__22145):map__22145);var alt = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));var expr = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"expr","expr",1017032039));if(cljs.core._EQ_.call(null,alt,expr))
{return null;
} else
{return simplify_map;
}
});
kibit.check.default_args = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rules","rules",1122778217),kibit.check.all_rules,new cljs.core.Keyword(null,"guard","guard",1112609303),kibit.check.unique_alt_QMARK_,new cljs.core.Keyword(null,"resolution","resolution",3708840990),new cljs.core.Keyword(null,"subform","subform",3440877174),new cljs.core.Keyword(null,"init-ns","init-ns",2962189076),new cljs.core.Symbol(null,"user","user",-1636932220,null)], null);
kibit.check.res__GT_simplify = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toplevel","toplevel",4354431681),kibit.core.simplify,new cljs.core.Keyword(null,"subform","subform",3440877174),kibit.core.simplify_one], null);
/**
* Simplify an expression, build a simplify-map, and guard the returning map
*/
kibit.check.check_aux = (function check_aux(expr,simplify_fn,guard){return guard.call(null,kibit.check.build_simplify_map.call(null,expr,simplify_fn.call(null,expr)));
});
/**
* 
* @param {...*} var_args
*/
kibit.check.check_expr = (function() { 
var check_expr__delegate = function (expr,kw_opts){var map__22148 = cljs.core.merge.call(null,kibit.check.default_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolution","resolution",3708840990),new cljs.core.Keyword(null,"toplevel","toplevel",4354431681)], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_opts));var map__22148__$1 = ((cljs.core.seq_QMARK_.call(null,map__22148))?cljs.core.apply.call(null,cljs.core.hash_map,map__22148):map__22148);var resolution = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"resolution","resolution",3708840990));var guard = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"guard","guard",1112609303));var rules = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"rules","rules",1122778217));var rules__$1 = cljs.core.map.call(null,cljs.core.logic.prep,rules);var simplify_fn = ((function (map__22148,map__22148__$1,resolution,guard,rules,rules__$1){
return (function (p1__22146_SHARP_){return kibit.check.res__GT_simplify.call(null,resolution).call(null,p1__22146_SHARP_,rules__$1);
});})(map__22148,map__22148__$1,resolution,guard,rules,rules__$1))
;return kibit.check.check_aux.call(null,expr,simplify_fn,guard);
};
var check_expr = function (expr,var_args){
var kw_opts = null;if (arguments.length > 1) {
  kw_opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return check_expr__delegate.call(this,expr,kw_opts);};
check_expr.cljs$lang$maxFixedArity = 1;
check_expr.cljs$lang$applyTo = (function (arglist__22159){
var expr = cljs.core.first(arglist__22159);
var kw_opts = cljs.core.rest(arglist__22159);
return check_expr__delegate(expr,kw_opts);
});
check_expr.cljs$core$IFn$_invoke$arity$variadic = check_expr__delegate;
return check_expr;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-cljs-playground')) {
goog.provide('lt.plugins.lt_cljs_playground');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('kibit.check');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('cljs.core.logic');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('cljs.extended.reader');
goog.require('kibit.check');
goog.require('cljs.extended.reader');
goog.require('lt.objs.command');
/**
* Takes the reader state and editor, and returns the next char and new state
* of the reader
*/
lt.plugins.lt_cljs_playground.next_char_from_reader = (function next_char_from_reader(ed,p__22295){var map__22297 = p__22295;var map__22297__$1 = ((cljs.core.seq_QMARK_.call(null,map__22297))?cljs.core.apply.call(null,cljs.core.hash_map,map__22297):map__22297);var state = map__22297__$1;var buffer = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"buffer","buffer",3930752946));var col = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"col","col",1014002930));var line = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"line","line",1017226086));var line_contents = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725));if(cljs.core.seq.call(null,buffer))
{var popped = cljs.core.last.call(null,buffer);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [popped,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.pop)], null);
} else
{if((cljs.core.count.call(null,line_contents) < col))
{var line_contents__$1 = lt.objs.editor.line.call(null,ed,(line + 1));var line__$1 = (line + 1);while(true){
if((line_contents__$1 == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"eof?","eof?",1017023029),true)], null);
} else
{if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line_contents__$1)))
{{
var G__22307 = lt.objs.editor.line.call(null,ed,(line__$1 + 1));
var G__22308 = (line__$1 + 1);
line_contents__$1 = G__22307;
line__$1 = G__22308;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_contents__$1.charAt(0),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"line","line",1017226086),line__$1,new cljs.core.Keyword(null,"col","col",1014002930),1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),line_contents__$1)], null);
} else
{return null;
}
}
}
break;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,"",line_contents.charAt(col)))?"\n":line_contents.charAt(col)),cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",1014002930)], null),cljs.core.inc)], null);
}
}
});

/**
* @constructor
* @param {*} ed
* @param {*} state
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
lt.plugins.lt_cljs_playground.EditorPushbackReader = (function (ed,state,__meta,__extmap){
this.ed = ed;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (_,ch){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.conj,ch);
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k22299,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k22299,new cljs.core.Keyword(null,"ed","ed",1013907473)))
{return self__.ed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k22299,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k22299,else__20392__auto__);
} else
{return null;
}
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__22298){var self__ = this;
var this__20396__auto____$1 = this;var pred__22301 = cljs.core.keyword_identical_QMARK_;var expr__22302 = k__20397__auto__;if(cljs.core.truth_(pred__22301.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473),expr__22302)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(G__22298,self__.state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__22301.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__22302)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,G__22298,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__22298),null));
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#lt.plugins.lt-cljs-playground.EditorPushbackReader{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ed","ed",1013907473),self__.ed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$Reader$ = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__22304 = lt.plugins.lt_cljs_playground.next_char_from_reader.call(null,self__.ed,cljs.core.deref.call(null,self__.state));var next_char = cljs.core.nth.call(null,vec__22304,0,null);var new_state = cljs.core.nth.call(null,vec__22304,1,null);if((next_char == null))
{cljs.core.deref.call(null,self__.state);
} else
{}
cljs.core.reset_BANG_.call(null,self__.state,new_state);
return next_char;
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,lt.plugins.lt_cljs_playground.next_char_from_reader.call(null,self__.ed,cljs.core.deref.call(null,self__.state)));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ed","ed",1013907473),self__.ed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__22298){var self__ = this;
var this__20388__auto____$1 = this;return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,G__22298,self__.__extmap,self__.__hash));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"ed","ed",1013907473),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$IndexingReader$ = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_line_number$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lt.plugins.lt_cljs_playground.next_char_from_reader.call(null,self__.ed,cljs.core.deref.call(null,self__.state)))) + 1);
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lt.plugins.lt_cljs_playground.next_char_from_reader.call(null,self__.ed,cljs.core.deref.call(null,self__.state)))) + 1);
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$type = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.lt-cljs-playground/EditorPushbackReader");
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"lt.plugins.lt-cljs-playground/EditorPushbackReader");
});
lt.plugins.lt_cljs_playground.__GT_EditorPushbackReader = (function __GT_EditorPushbackReader(ed,state){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,state));
});
lt.plugins.lt_cljs_playground.map__GT_EditorPushbackReader = (function map__GT_EditorPushbackReader(G__22300){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__22300),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__22300),null,cljs.core.dissoc.call(null,G__22300,new cljs.core.Keyword(null,"ed","ed",1013907473),new cljs.core.Keyword(null,"state","state",1123661827))));
});
lt.plugins.lt_cljs_playground.default_reader_state = (function default_reader_state(ed,start_line,start_col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"col","col",1014002930),start_col,new cljs.core.Keyword(null,"buffer","buffer",3930752946),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),lt.objs.editor.line.call(null,ed,start_line)], null);
});
lt.plugins.lt_cljs_playground.editor_pushback_reader = (function editor_pushback_reader(ed){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,0,0))));
});
lt.plugins.lt_cljs_playground.read_expr_with_meta = (function read_expr_with_meta(reader){var form = cljs.extended.reader.read.call(null,reader,false,new cljs.core.Keyword(null,"end","end",1014004813));if((function (){var G__22306 = form;if(G__22306)
{var bit__20453__auto__ = (G__22306.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20453__auto__) || (G__22306.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__22306.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__22306);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__22306);
}
})())
{return cljs.core.with_meta.call(null,form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(reader))),new cljs.core.Keyword(null,"column","column",3954034376),new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(reader)))], null));
} else
{return form;
}
});
lt.plugins.lt_cljs_playground.read_all_forms_in_editor = (function read_all_forms_in_editor(ed){var forms = cljs.core.PersistentVector.EMPTY;var r = lt.plugins.lt_cljs_playground.editor_pushback_reader.call(null,ed);while(true){
if(cljs.core.not.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"eof?","eof?",1017023029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r)));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.last.call(null,forms));
}
})()))
{var form = lt.plugins.lt_cljs_playground.read_expr_with_meta.call(null,r);var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r));{
var G__22309 = cljs.core.conj.call(null,forms,form);
var G__22310 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(state))));
forms = G__22309;
r = G__22310;
continue;
}
} else
{return cljs.core.butlast.call(null,forms);
}
break;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-cljs-playground","run-dis","lt.plugins.lt-cljs-playground/run-dis",856462100),new cljs.core.Keyword(null,"desc","desc",1016984067),"Idiocheck: Run dis",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var forms = lt.plugins.lt_cljs_playground.read_all_forms_in_editor.call(null,ed);return cljs.core.map.call(null,kibit.check.check_expr,forms);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt_cljs_playground_compiled.js.map