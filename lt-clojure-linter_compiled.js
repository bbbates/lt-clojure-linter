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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__22098){var vec__22099 = p__22098;var k = cljs.core.nth.call(null,vec__22099,0,null);var v = cljs.core.nth.call(null,vec__22099,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__22102){var vec__22103 = p__22102;var k = cljs.core.nth.call(null,vec__22103,0,null);var v = cljs.core.nth.call(null,vec__22103,1,null);if((k instanceof cljs.core.Keyword))
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
cljs.core.logic.IUnifyTerms = (function (){var obj21959 = {};return obj21959;
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
cljs.core.logic.IUnifyWithNil = (function (){var obj21961 = {};return obj21961;
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
cljs.core.logic.IUnifyWithObject = (function (){var obj21963 = {};return obj21963;
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
cljs.core.logic.IUnifyWithLVar = (function (){var obj21965 = {};return obj21965;
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
cljs.core.logic.IUnifyWithLSeq = (function (){var obj21967 = {};return obj21967;
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
cljs.core.logic.IUnifyWithSequential = (function (){var obj21969 = {};return obj21969;
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
cljs.core.logic.IUnifyWithMap = (function (){var obj21971 = {};return obj21971;
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
cljs.core.logic.IReifyTerm = (function (){var obj21973 = {};return obj21973;
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
cljs.core.logic.IWalkTerm = (function (){var obj21975 = {};return obj21975;
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
cljs.core.logic.IOccursCheckTerm = (function (){var obj21977 = {};return obj21977;
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
cljs.core.logic.IBuildTerm = (function (){var obj21979 = {};return obj21979;
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
cljs.core.logic.IBind = (function (){var obj21981 = {};return obj21981;
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
cljs.core.logic.IMPlus = (function (){var obj21983 = {};return obj21983;
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
cljs.core.logic.ITake = (function (){var obj21985 = {};return obj21985;
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
cljs.core.logic.IPair = (function (){var obj21987 = {};return obj21987;
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
var ___$1 = this;var pred__21988 = cljs.core._EQ__EQ_;var expr__21989 = i;if(cljs.core.truth_(pred__21988.call(null,0,expr__21989)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__21988.call(null,1,expr__21989)))
{return self__.rhs;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var pred__21991 = cljs.core._EQ__EQ_;var expr__21992 = i;if(cljs.core.truth_(pred__21991.call(null,0,expr__21992)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__21991.call(null,1,expr__21992)))
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
cljs.core.logic.ISubstitutions = (function (){var obj21995 = {};return obj21995;
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
cljs.core.logic.not_found = (function (){var obj21997 = {};return obj21997;
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
var G__22054 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__22054;
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
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (l,p__22000){var vec__22001 = p__22000;var k = cljs.core.nth.call(null,vec__22001,0,null);var v__$1 = cljs.core.nth.call(null,vec__22001,1,null);return cljs.core.conj.call(null,l,cljs.core.logic.pair.call(null,k,v__$1));
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
cljs.core.logic.LConsSeq = (function (){var obj22003 = {};return obj22003;
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
var G__22055 = cljs.core.logic._lnext.call(null,v__$2);
var G__22056 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__22055;
s__$1 = G__22056;
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
var G__22057 = cljs.core.logic._lnext.call(null,v__$2);
var G__22058 = x__$1;
var G__22059 = s__$1;
v__$2 = G__22057;
x__$1 = G__22058;
s__$1 = G__22059;
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
var G__22060 = cljs.core.logic._lnext.call(null,me);
var G__22061 = cljs.core.logic._lnext.call(null,you);
me = G__22060;
you = G__22061;
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
var G__22062 = cljs.core.logic._lnext.call(null,u__$1);
var G__22063 = cljs.core.logic._lnext.call(null,v__$2);
var G__22064 = s__$2;
u__$1 = G__22062;
v__$2 = G__22063;
s__$1 = G__22064;
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
var G__22065 = cljs.core.logic._lnext.call(null,u__$1);
var G__22066 = cljs.core._next.call(null,v__$1);
var G__22067 = s__$2;
u__$1 = G__22065;
v__$1 = G__22066;
s__$1 = G__22067;
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
var G__22068 = cljs.core._next.call(null,u__$1);
var G__22069 = cljs.core._next.call(null,v__$1);
var G__22070 = s__$2;
u__$1 = G__22068;
v__$1 = G__22069;
s__$1 = G__22070;
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
cljs.core.logic.not_found = (function (){var obj22005 = {};return obj22005;
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
var G__22071 = cljs.core.next.call(null,ks);
var G__22072 = s__$2;
ks = G__22071;
s__$1 = G__22072;
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
var G__22073 = cljs.core.next.call(null,v__$1);
var G__22074 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__22073;
s__$1 = G__22074;
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
{var vec__22007 = cljs.core._first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__22007,0,null);var vfv = cljs.core.nth.call(null,vec__22007,1,null);{
var G__22075 = cljs.core._next.call(null,v__$1);
var G__22076 = cljs.core._assoc_BANG_.call(null,r,vfk,cljs.core.logic._walk_STAR_.call(null,s,vfv));
v__$1 = G__22075;
r = G__22076;
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
var G__22077 = cljs.core._next.call(null,v__$2);
var G__22078 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.first.call(null,v__$2)));
v__$2 = G__22077;
r = G__22078;
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
{return cljs.core.map.call(null,(function (p1__22008_SHARP_){return cljs.core.logic._walk_STAR_.call(null,s,p1__22008_SHARP_);
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
var G__22079 = cljs.core._next.call(null,v__$1);
var G__22080 = x__$1;
var G__22081 = s__$1;
v__$1 = G__22079;
x__$1 = G__22080;
s__$1 = G__22081;
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
cljs.core.logic.mplus = (function mplus(a,f){if((function (){var G__22010 = a;if(G__22010)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22010.cljs$core$logic$IMPlus$;
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
cljs.core.logic.take_STAR_ = (function take_STAR_(x){if((function (){var G__22012 = x;if(G__22012)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22012.cljs$core$logic$ITake$;
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
cljs.core.logic.Inc.prototype.apply = (function (self__,args22013){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22013)));
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
cljs.core.logic.IIfA = (function (){var obj22015 = {};return obj22015;
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
cljs.core.logic.IIfU = (function (){var obj22017 = {};return obj22017;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__22019 = gs;var vec__22020 = G__22019;var g0 = cljs.core.nth.call(null,vec__22020,0,null);var gr = cljs.core.nthnext.call(null,vec__22020,1);var b__$3 = b__$2;var G__22019__$1 = G__22019;while(true){
var b__$4 = b__$3;var vec__22021 = G__22019__$1;var g0__$1 = cljs.core.nth.call(null,vec__22021,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__22021,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__22082 = b__$5;
var G__22083 = gr__$1;
b__$3 = G__22082;
G__22019__$1 = G__22083;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__22023 = gs;var vec__22024 = G__22023;var g0 = cljs.core.nth.call(null,vec__22024,0,null);var gr = cljs.core.nthnext.call(null,vec__22024,1);var b__$3 = b__$2;var G__22023__$1 = G__22023;while(true){
var b__$4 = b__$3;var vec__22025 = G__22023__$1;var g0__$1 = cljs.core.nth.call(null,vec__22025,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__22025,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__22084 = b__$5;
var G__22085 = gr__$1;
b__$3 = G__22084;
G__22023__$1 = G__22085;
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
cljs.core.logic.nilo = (function nilo(a){return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,null,a);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.List.EMPTY,a);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l
*/
cljs.core.logic.conso = (function conso(a,d,l){return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,a__21388__auto__,cljs.core.logic.conso.call(null,a,d,l));
})));
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));return cljs.core.logic._bind.call(null,a__21388__auto__,((function (a){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(a))
);
})));
});
});
/**
* A relation where l is a collection, such that l contains x
*/
cljs.core.logic.membero = (function membero(x,l){return (function (a22027){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22027,(function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,a__21388__auto__,((function (tail){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.logic.lcons.call(null,x,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(tail))
);
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a22027,(function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto__,((function (head,tail){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.logic.lcons.call(null,head,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
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
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a22029){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22029,(function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto__,(function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
})),(function (a__21388__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__21388__auto____$1,(function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,y,z);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a22029,(function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto__,((function (a,d){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.logic.lcons.call(null,a,d),x);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(a,d))
),((function (a,d){
return (function (a__21388__auto____$1){return (new cljs.core.logic.Inc(((function (a,d){
return (function (){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto____$1,((function (r,a,d){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.logic.lcons.call(null,a,r),z);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
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
cljs.core.logic.IUnifyWithPMap = (function (){var obj22031 = {};return obj22031;
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
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k22033,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k22033,else__20392__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__22032){var self__ = this;
var this__20396__auto____$1 = this;var pred__22035 = cljs.core.keyword_identical_QMARK_;var expr__22036 = k__20397__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__22032),null));
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
var G__22086 = cljs.core.next.call(null,ks);
var G__22087 = s__$2;
ks = G__22086;
s__$1 = G__22087;
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
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__22032){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.logic.PMap(G__22032,self__.__extmap,self__.__hash));
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
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__22034){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__22034)));
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
{var vec__22039 = expr__$1;var f = cljs.core.nth.call(null,vec__22039,0,null);var n = cljs.core.nthnext.call(null,vec__22039,1);var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",-1640531481,null));var tail = prep_STAR_.call(null,n,store,lcons_QMARK_,skip);if(skip)
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
var unifier_STAR___2 = (function (u,w){return cljs.core.first.call(null,cljs.core.doall.call(null,(function (){var xs__21396__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc((function (){return (function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto__,((function (q){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,u,w);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(q))
),((function (q){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,u,q);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(q))
),((function (q){
return (function (a__21397__auto__){return cljs.core.logic._reify.call(null,a__21397__auto__,q);
});})(q))
);
})));
}).call(null,cljs.core.logic.empty_s);
}))));if(false)
{return cljs.core.take.call(null,false,xs__21396__auto__);
} else
{return xs__21396__auto__;
}
})()));
});
var unifier_STAR___3 = (function() { 
var G__22088__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier_STAR_,unifier_STAR_.call(null,u,w),ts);
};
var G__22088 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22088__delegate.call(this,u,w,ts);};
G__22088.cljs$lang$maxFixedArity = 2;
G__22088.cljs$lang$applyTo = (function (arglist__22089){
var u = cljs.core.first(arglist__22089);
arglist__22089 = cljs.core.next(arglist__22089);
var w = cljs.core.first(arglist__22089);
var ts = cljs.core.rest(arglist__22089);
return G__22088__delegate(u,w,ts);
});
G__22088.cljs$core$IFn$_invoke$arity$variadic = G__22088__delegate;
return G__22088;
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
return (function (p__22042){var vec__22043 = p__22042;var k = cljs.core.nth.call(null,vec__22043,0,null);var v = cljs.core.nth.call(null,vec__22043,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify.call(null,s,v)], null);
});})(lvars,s))
,lvars));
}
});
var binding_map_STAR___3 = (function() { 
var G__22090__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map_STAR_,binding_map_STAR_.call(null,u,w),ts);
};
var G__22090 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22090__delegate.call(this,u,w,ts);};
G__22090.cljs$lang$maxFixedArity = 2;
G__22090.cljs$lang$applyTo = (function (arglist__22091){
var u = cljs.core.first(arglist__22091);
arglist__22091 = cljs.core.next(arglist__22091);
var w = cljs.core.first(arglist__22091);
var ts = cljs.core.rest(arglist__22091);
return G__22090__delegate(u,w,ts);
});
G__22090.cljs$core$IFn$_invoke$arity$variadic = G__22090__delegate;
return G__22090;
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
var G__22092__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier,unifier.call(null,u,w),ts);
};
var G__22092 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22092__delegate.call(this,u,w,ts);};
G__22092.cljs$lang$maxFixedArity = 2;
G__22092.cljs$lang$applyTo = (function (arglist__22093){
var u = cljs.core.first(arglist__22093);
arglist__22093 = cljs.core.next(arglist__22093);
var w = cljs.core.first(arglist__22093);
var ts = cljs.core.rest(arglist__22093);
return G__22092__delegate(u,w,ts);
});
G__22092.cljs$core$IFn$_invoke$arity$variadic = G__22092__delegate;
return G__22092;
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
var G__22094__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map,binding_map.call(null,u,w),ts);
};
var G__22094 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22094__delegate.call(this,u,w,ts);};
G__22094.cljs$lang$maxFixedArity = 2;
G__22094.cljs$lang$applyTo = (function (arglist__22095){
var u = cljs.core.first(arglist__22095);
arglist__22095 = cljs.core.next(arglist__22095);
var w = cljs.core.first(arglist__22095);
var ts = cljs.core.rest(arglist__22095);
return G__22094__delegate(u,w,ts);
});
G__22094.cljs$core$IFn$_invoke$arity$variadic = G__22094__delegate;
return G__22094;
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
kibit.rules.util.compile_rule = (function compile_rule(rule){var vec__22177 = cljs.core.logic.prep.call(null,rule);var pat = cljs.core.nth.call(null,vec__22177,0,null);var alt = cljs.core.nth.call(null,vec__22177,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__22177,pat,alt){
return (function (expr){return ((function (vec__22177,pat,alt){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,expr,pat);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
;})(vec__22177,pat,alt))
});})(vec__22177,pat,alt))
,((function (vec__22177,pat,alt){
return (function (sbst){return ((function (vec__22177,pat,alt){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,sbst,alt);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
;})(vec__22177,pat,alt))
});})(vec__22177,pat,alt))
], null);
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
var rules__21724__auto___22245 = (function (){var iter__20520__auto__ = (function iter__22214(s__22215){return (new cljs.core.LazySeq(null,(function (){var s__22215__$1 = s__22215;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22215__$1);if(temp__4092__auto__)
{var s__22215__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22215__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22215__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22217 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22216 = 0;while(true){
if((i__22216 < size__20519__auto__))
{var rule__21725__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__22216);cljs.core.chunk_append.call(null,b__22217,kibit.rules.util.compile_rule.call(null,rule__21725__auto__));
{
var G__22246 = (i__22216 + 1);
i__22216 = G__22246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22217),iter__22214.call(null,cljs.core.chunk_rest.call(null,s__22215__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22217),null);
}
} else
{var rule__21725__auto__ = cljs.core.first.call(null,s__22215__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21725__auto__),iter__22214.call(null,cljs.core.rest.call(null,s__22215__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),cljs.core.list(new cljs.core.Symbol(null,"interpose","interpose",-1137596122,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",640354914,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),cljs.core.list(new cljs.core.Symbol(null,"reverse","reverse",-540685157,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol("clojure.string","reverse","clojure.string/reverse",-124256342,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",640354914,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",1573062323,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",1573062323,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",2113019871,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null)),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)))),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)))),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"ffirst","ffirst",1377082307,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"fnext","fnext",-1542954478,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"nnext","nnext",-1535566310,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"nfirst","nfirst",1606115515,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,".toString",".toString",-661012909,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-1636995411,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-110723002,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"with-meta","with-meta",-774206363,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"?f","?f",-1640529472,null),cljs.core.list(new cljs.core.Symbol(null,"meta","meta",-1637183554,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?arg","?arg",-1638557840,null))),cljs.core.list(new cljs.core.Symbol(null,"vary-meta","vary-meta",-1312644487,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?f","?f",-1640529472,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?arg","?arg",-1638557840,null))], null)));
})();kibit.rules.misc.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21724__auto___22245,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fun = cljs.core.logic.lvar.call(null);var args = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (fun,args,rules__21724__auto___22245){
return (function (expr){return ((function (fun,args,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (fun,args,rules__21724__auto___22245){
return (function (a22218){return (new cljs.core.logic.Inc(((function (fun,args,rules__21724__auto___22245){
return (function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22218,((function (fun,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,expr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.lcons.call(null,fun,args)),args),new cljs.core.Symbol(null,"fn","fn",-1640528255,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(fun,args,rules__21724__auto___22245))
),(new cljs.core.logic.Inc(((function (fun,args,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a22218,((function (fun,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,expr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.lcons.call(null,fun,args)),args),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(fun,args,rules__21724__auto___22245))
);
});})(fun,args,rules__21724__auto___22245))
)));
});})(fun,args,rules__21724__auto___22245))
));
});})(fun,args,rules__21724__auto___22245))
),((function (fun,args,rules__21724__auto___22245){
return (function (a22219){var fun__$1 = cljs.core.logic._walk_STAR_.call(null,a22219,fun);return ((function (fun__$1,fun,args,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (fun__$1,fun,args,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (fun__$1,fun,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,((function (fun__$1,fun,args,rules__21724__auto___22245){
return (function (p1__22204_SHARP_){return ((p1__22204_SHARP_ instanceof cljs.core.Keyword)) || (((p1__22204_SHARP_ instanceof cljs.core.Symbol)) && (cljs.core.not_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [".",null,"/",null], null), null),[cljs.core.str(p1__22204_SHARP_)].join(''))));
});})(fun__$1,fun,args,rules__21724__auto___22245))
.call(null,fun__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(fun__$1,fun,args,rules__21724__auto___22245))
);
});})(fun__$1,fun,args,rules__21724__auto___22245))
));
});})(fun__$1,fun,args,rules__21724__auto___22245))
.call(null,a22219);
});})(fun,args,rules__21724__auto___22245))
);
});
;})(fun,args,rules__21724__auto___22245))
});})(fun,args,rules__21724__auto___22245))
,((function (fun,args,rules__21724__auto___22245){
return (function (p1__22205_SHARP_){return ((function (fun,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22205_SHARP_,fun);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
;})(fun,args,rules__21724__auto___22245))
});})(fun,args,rules__21724__auto___22245))
], null);
})(),(function (){var obj = cljs.core.logic.lvar.call(null);var method = cljs.core.logic.lvar.call(null);var args = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (obj,method,args,rules__21724__auto___22245){
return (function (p1__22206_SHARP_){return ((function (obj,method,args,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (obj,method,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22206_SHARP_,cljs.core.logic.lcons.call(null,new cljs.core.Symbol(null,".",".",-1640531481,null),cljs.core.logic.lcons.call(null,obj,cljs.core.logic.lcons.call(null,method,args))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(obj,method,args,rules__21724__auto___22245))
),((function (obj,method,args,rules__21724__auto___22245){
return (function (a22220){var obj__$1 = cljs.core.logic._walk_STAR_.call(null,a22220,obj);return ((function (obj__$1,obj,method,args,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (obj__$1,obj,method,args,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (obj__$1,obj,method,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.complement.call(null,kibit.rules.misc.class_symbol_QMARK_).call(null,obj__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(obj__$1,obj,method,args,rules__21724__auto___22245))
);
});})(obj__$1,obj,method,args,rules__21724__auto___22245))
));
});})(obj__$1,obj,method,args,rules__21724__auto___22245))
.call(null,a22220);
});})(obj,method,args,rules__21724__auto___22245))
);
});
;})(obj,method,args,rules__21724__auto___22245))
});})(obj,method,args,rules__21724__auto___22245))
,((function (obj,method,args,rules__21724__auto___22245){
return (function (p1__22207_SHARP_){return ((function (obj,method,args,rules__21724__auto___22245){
return (function (a22221){var method__$1 = cljs.core.logic._walk_STAR_.call(null,a22221,method);var args__$1 = cljs.core.logic._walk_STAR_.call(null,a22221,args);return ((function (method__$1,args__$1,obj,method,args,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (method__$1,args__$1,obj,method,args,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,(function (){var s_QMARK_ = cljs.core.seq_QMARK_.call(null,method__$1);var args__$2 = ((s_QMARK_)?cljs.core.rest.call(null,method__$1):args__$1);var method__$2 = ((s_QMARK_)?cljs.core.first.call(null,method__$1):method__$1);return ((function (s_QMARK_,args__$2,method__$2,method__$1,args__$1,obj,method,args,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22207_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,[cljs.core.str("."),cljs.core.str(method__$2)].join(''))),cljs.core._conj.call(null,cljs.core.List.EMPTY,obj),args__$2))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
;})(s_QMARK_,args__$2,method__$2,method__$1,args__$1,obj,method,args,rules__21724__auto___22245))
})());
});})(method__$1,args__$1,obj,method,args,rules__21724__auto___22245))
));
});})(method__$1,args__$1,obj,method,args,rules__21724__auto___22245))
.call(null,a22221);
});
;})(obj,method,args,rules__21724__auto___22245))
});})(obj,method,args,rules__21724__auto___22245))
], null);
})(),(function (){var args = cljs.core.logic.lvar.call(null);var klass = cljs.core.logic.lvar.call(null);var static_method = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (args,klass,static_method,rules__21724__auto___22245){
return (function (p1__22208_SHARP_){return ((function (args,klass,static_method,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (args,klass,static_method,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22208_SHARP_,cljs.core.logic.lcons.call(null,new cljs.core.Symbol(null,".",".",-1640531481,null),cljs.core.logic.lcons.call(null,klass,cljs.core.logic.lcons.call(null,static_method,args))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(args,klass,static_method,rules__21724__auto___22245))
),((function (args,klass,static_method,rules__21724__auto___22245){
return (function (a22222){var klass__$1 = cljs.core.logic._walk_STAR_.call(null,a22222,klass);return ((function (klass__$1,args,klass,static_method,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (klass__$1,args,klass,static_method,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (klass__$1,args,klass,static_method,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,kibit.rules.misc.class_symbol_QMARK_.call(null,klass__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(klass__$1,args,klass,static_method,rules__21724__auto___22245))
);
});})(klass__$1,args,klass,static_method,rules__21724__auto___22245))
));
});})(klass__$1,args,klass,static_method,rules__21724__auto___22245))
.call(null,a22222);
});})(args,klass,static_method,rules__21724__auto___22245))
);
});
;})(args,klass,static_method,rules__21724__auto___22245))
});})(args,klass,static_method,rules__21724__auto___22245))
,((function (args,klass,static_method,rules__21724__auto___22245){
return (function (p1__22209_SHARP_){return ((function (args,klass,static_method,rules__21724__auto___22245){
return (function (a22223){var klass__$1 = cljs.core.logic._walk_STAR_.call(null,a22223,klass);var static_method__$1 = cljs.core.logic._walk_STAR_.call(null,a22223,static_method);var args__$1 = cljs.core.logic._walk_STAR_.call(null,a22223,args);return ((function (klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,(function (){var s_QMARK_ = cljs.core.seq_QMARK_.call(null,static_method__$1);var args__$2 = ((s_QMARK_)?cljs.core.rest.call(null,static_method__$1):args__$1);var static_method__$2 = ((s_QMARK_)?cljs.core.first.call(null,static_method__$1):static_method__$1);return ((function (s_QMARK_,args__$2,static_method__$2,klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22209_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,[cljs.core.str(klass__$1),cljs.core.str("/"),cljs.core.str(static_method__$2)].join(''))),args__$2))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});
;})(s_QMARK_,args__$2,static_method__$2,klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21724__auto___22245))
})());
});})(klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21724__auto___22245))
));
});})(klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21724__auto___22245))
.call(null,a22223);
});
;})(args,klass,static_method,rules__21724__auto___22245))
});})(args,klass,static_method,rules__21724__auto___22245))
], null);
})(),(function (){var arg = cljs.core.logic.lvar.call(null);var form = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (arg,form,rules__21724__auto___22245){
return (function (p1__22210_SHARP_){return ((function (arg,form,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,a__21440__auto__,((function (arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22210_SHARP_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),arg),new cljs.core.Symbol(null,"->","->",-1640530070,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(arg,form,rules__21724__auto___22245))
);
});
;})(arg,form,rules__21724__auto___22245))
});})(arg,form,rules__21724__auto___22245))
,((function (arg,form,rules__21724__auto___22245){
return (function (sbst){return ((function (arg,form,rules__21724__auto___22245){
return (function (a22224){return (new cljs.core.logic.Inc(((function (arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22224,((function (arg,form,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (arg,form,rules__21724__auto___22245){
return (function (a22225){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a22225,form);return ((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (p1__22211_SHARP_){return ((p1__22211_SHARP_ instanceof cljs.core.Symbol)) || ((p1__22211_SHARP_ instanceof cljs.core.Keyword));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(form__$1,arg,form,rules__21724__auto___22245))
);
});})(form__$1,arg,form,rules__21724__auto___22245))
));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,a22225);
});})(arg,form,rules__21724__auto___22245))
),((function (arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,sbst,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg),form));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(arg,form,rules__21724__auto___22245))
);
});})(arg,form,rules__21724__auto___22245))
),(new cljs.core.logic.Inc(((function (arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a22224,((function (arg,form,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (arg,form,rules__21724__auto___22245){
return (function (a22226){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a22226,form);return ((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.seq_QMARK_.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(form__$1,arg,form,rules__21724__auto___22245))
);
});})(form__$1,arg,form,rules__21724__auto___22245))
));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,a22226);
});})(arg,form,rules__21724__auto___22245))
),((function (arg,form,rules__21724__auto___22245){
return (function (a22227){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a22227,form);return ((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,sbst,cljs.core.list_STAR_.call(null,cljs.core.first.call(null,form__$1),arg,cljs.core.rest.call(null,form__$1)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(form__$1,arg,form,rules__21724__auto___22245))
);
});})(form__$1,arg,form,rules__21724__auto___22245))
));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,a22227);
});})(arg,form,rules__21724__auto___22245))
);
});})(arg,form,rules__21724__auto___22245))
);
});})(arg,form,rules__21724__auto___22245))
)));
});})(arg,form,rules__21724__auto___22245))
));
});
;})(arg,form,rules__21724__auto___22245))
});})(arg,form,rules__21724__auto___22245))
], null);
})(),(function (){var arg = cljs.core.logic.lvar.call(null);var form = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (arg,form,rules__21724__auto___22245){
return (function (p1__22212_SHARP_){return ((function (arg,form,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,a__21440__auto__,((function (arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,p1__22212_SHARP_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),arg),new cljs.core.Symbol(null,"->>","->>",-1640486298,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(arg,form,rules__21724__auto___22245))
);
});
;})(arg,form,rules__21724__auto___22245))
});})(arg,form,rules__21724__auto___22245))
,((function (arg,form,rules__21724__auto___22245){
return (function (sbst){return ((function (arg,form,rules__21724__auto___22245){
return (function (a22228){return (new cljs.core.logic.Inc(((function (arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a22228,((function (arg,form,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (arg,form,rules__21724__auto___22245){
return (function (a22229){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a22229,form);return ((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (p1__22213_SHARP_){return ((p1__22213_SHARP_ instanceof cljs.core.Symbol)) || ((p1__22213_SHARP_ instanceof cljs.core.Keyword));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(form__$1,arg,form,rules__21724__auto___22245))
);
});})(form__$1,arg,form,rules__21724__auto___22245))
));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,a22229);
});})(arg,form,rules__21724__auto___22245))
),((function (arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,sbst,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg),form));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(arg,form,rules__21724__auto___22245))
);
});})(arg,form,rules__21724__auto___22245))
),(new cljs.core.logic.Inc(((function (arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a22228,((function (arg,form,rules__21724__auto___22245){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,((function (arg,form,rules__21724__auto___22245){
return (function (a22230){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a22230,form);return ((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,cljs.core.seq_QMARK_.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(form__$1,arg,form,rules__21724__auto___22245))
);
});})(form__$1,arg,form,rules__21724__auto___22245))
));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,a22230);
});})(arg,form,rules__21724__auto___22245))
),((function (arg,form,rules__21724__auto___22245){
return (function (a22231){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a22231,form);return ((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21388__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto__,((function (form__$1,arg,form,rules__21724__auto___22245){
return (function (a__21376__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21376__auto__,sbst,cljs.core.concat.call(null,form__$1,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21377__auto__ = temp__4090__auto__;return b__21377__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21376__auto__);
}
});})(form__$1,arg,form,rules__21724__auto___22245))
);
});})(form__$1,arg,form,rules__21724__auto___22245))
));
});})(form__$1,arg,form,rules__21724__auto___22245))
.call(null,a22231);
});})(arg,form,rules__21724__auto___22245))
);
});})(arg,form,rules__21724__auto___22245))
);
});})(arg,form,rules__21724__auto___22245))
)));
});})(arg,form,rules__21724__auto___22245))
));
});
;})(arg,form,rules__21724__auto___22245))
});})(arg,form,rules__21724__auto___22245))
], null);
})()], null)));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.collections')) {
goog.provide('kibit.rules.collections');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21724__auto___22202 = (function (){var iter__20520__auto__ = (function iter__22188(s__22189){return (new cljs.core.LazySeq(null,(function (){var s__22189__$1 = s__22189;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22189__$1);if(temp__4092__auto__)
{var s__22189__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22189__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22189__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22191 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22190 = 0;while(true){
if((i__22190 < size__20519__auto__))
{var rule__21725__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__22190);cljs.core.chunk_append.call(null,b__22191,kibit.rules.util.compile_rule.call(null,rule__21725__auto__));
{
var G__22203 = (i__22190 + 1);
i__22190 = G__22203;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22191),iter__22188.call(null,cljs.core.chunk_rest.call(null,s__22189__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22191),null);
}
} else
{var rule__21725__auto__ = cljs.core.first.call(null,s__22189__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21725__auto__),iter__22188.call(null,cljs.core.rest.call(null,s__22189__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1637472031,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",1834048252,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",-1640414899,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"?key","?key",-1638548615,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?keys","?keys",-1579061140,null),new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?keys","?keys",-1579061140,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"set","set",-1640417765,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"take","take",-1636979136,null),new cljs.core.Symbol(null,"?n","?n",-1640529464,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",-480456640,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",-480456640,null),new cljs.core.Symbol(null,"?n","?n",-1640529464,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null)));
})();kibit.rules.collections.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21724__auto___22202,cljs.core.PersistentVector.EMPTY));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.control-structures')) {
goog.provide('kibit.rules.control_structures');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21724__auto___22174 = (function (){var iter__20520__auto__ = (function iter__22160(s__22161){return (new cljs.core.LazySeq(null,(function (){var s__22161__$1 = s__22161;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22161__$1);if(temp__4092__auto__)
{var s__22161__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22161__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22161__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22163 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22162 = 0;while(true){
if((i__22162 < size__20519__auto__))
{var rule__21725__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__22162);cljs.core.chunk_append.call(null,b__22163,kibit.rules.util.compile_rule.call(null,rule__21725__auto__));
{
var G__22175 = (i__22162 + 1);
i__22162 = G__22175;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22163),iter__22160.call(null,cljs.core.chunk_rest.call(null,s__22161__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22163),null);
}
} else
{var rule__21725__auto__ = cljs.core.first.call(null,s__22161__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21725__auto__),iter__22160.call(null,cljs.core.rest.call(null,s__22161__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),null),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),null,new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null)),cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1461176100,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,"?expr","?expr",-1579221907,null),null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",401149633,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,"?expr","?expr",-1579221907,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?test","?test",-1578793206,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",-1532142362,null)))),cljs.core.list(new cljs.core.Symbol(null,"while","while",-1527429910,null),new cljs.core.Symbol(null,"?test","?test",-1578793206,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null)));
})();kibit.rules.control_structures.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21724__auto___22174,cljs.core.PersistentVector.EMPTY));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.equality')) {
goog.provide('kibit.rules.equality');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21724__auto___22158 = (function (){var iter__20520__auto__ = (function iter__22144(s__22145){return (new cljs.core.LazySeq(null,(function (){var s__22145__$1 = s__22145;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22145__$1);if(temp__4092__auto__)
{var s__22145__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22145__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22145__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22147 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22146 = 0;while(true){
if((i__22146 < size__20519__auto__))
{var rule__21725__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__22146);cljs.core.chunk_append.call(null,b__22147,kibit.rules.util.compile_rule.call(null,rule__21725__auto__));
{
var G__22159 = (i__22146 + 1);
i__22146 = G__22159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22147),iter__22144.call(null,cljs.core.chunk_rest.call(null,s__22145__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22147),null);
}
} else
{var rule__21725__auto__ = cljs.core.first.call(null,s__22145__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21725__auto__),iter__22144.call(null,cljs.core.rest.call(null,s__22145__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"==","==",-1640529575,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"==","==",-1640529575,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1529891286,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",1372554549,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),null,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null)));
})();kibit.rules.equality.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21724__auto___22158,cljs.core.PersistentVector.EMPTY));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.arithmetic')) {
goog.provide('kibit.rules.arithmetic');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21724__auto___22142 = (function (){var iter__20520__auto__ = (function iter__22128(s__22129){return (new cljs.core.LazySeq(null,(function (){var s__22129__$1 = s__22129;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22129__$1);if(temp__4092__auto__)
{var s__22129__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22129__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22129__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22131 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22130 = 0;while(true){
if((i__22130 < size__20519__auto__))
{var rule__21725__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__22130);cljs.core.chunk_append.call(null,b__22131,kibit.rules.util.compile_rule.call(null,rule__21725__auto__));
{
var G__22143 = (i__22130 + 1);
i__22130 = G__22143;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22131),iter__22128.call(null,cljs.core.chunk_rest.call(null,s__22129__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22131),null);
}
} else
{var rule__21725__auto__ = cljs.core.first.call(null,s__22129__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21725__auto__),iter__22128.call(null,cljs.core.rest.call(null,s__22129__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),1,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-1640432197,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("Math","sqrt","Math/sqrt",-1481562997,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",-1488621581,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),2),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",-1488621581,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),2))),cljs.core.list(new cljs.core.Symbol("Math","hypot","Math/hypot",-1384785649,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-1640432197,null),cljs.core.list(new cljs.core.Symbol("Math","exp","Math/exp",-1488676984,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol("Math","expm1","Math/expm1",-1392337428,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0.5)),cljs.core.list(new cljs.core.Symbol("Math","round","Math/round",-1375834311,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null)));
})();kibit.rules.arithmetic.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21724__auto___22142,cljs.core.PersistentVector.EMPTY));
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
if(!lt.util.load.provided_QMARK_('kibit.core')) {
goog.provide('kibit.core');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('clojure.walk');
goog.require('clojure.walk');
kibit.core.simplify_one = (function simplify_one(expr,rules){var alts = cljs.core.doall.call(null,(function (){var xs__21396__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc((function (){return (function (a__21388__auto__){return (new cljs.core.logic.Inc((function (){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto__,((function (q){
return (function (a__21388__auto____$1){return (new cljs.core.logic.Inc(((function (q){
return (function (){var pat = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"pat","pat",-1640420772,null));var subst = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"subst","subst",-1530743206,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21388__auto____$1,cljs.core.logic.membero.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat,subst], null),rules)),((function (pat,subst,q){
return (function (a22105){var pat__$1 = cljs.core.logic._walk_STAR_.call(null,a22105,pat);var subst__$1 = cljs.core.logic._walk_STAR_.call(null,a22105,subst);return ((function (pat__$1,subst__$1,pat,subst,q){
return (function (a__21388__auto____$2){return (new cljs.core.logic.Inc(((function (pat__$1,subst__$1,pat,subst,q){
return (function (){return cljs.core.logic._bind.call(null,a__21388__auto____$2,((function (pat__$1,subst__$1,pat,subst,q){
return (function (a__21440__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21440__auto__,pat__$1.call(null,expr)),subst__$1.call(null,q));
});})(pat__$1,subst__$1,pat,subst,q))
);
});})(pat__$1,subst__$1,pat,subst,q))
));
});})(pat__$1,subst__$1,pat,subst,q))
.call(null,a22105);
});})(pat,subst,q))
);
});})(q))
));
});})(q))
),((function (q){
return (function (a__21397__auto__){return cljs.core.logic._reify.call(null,a__21397__auto__,q);
});})(q))
);
})));
}).call(null,cljs.core.logic.empty_s);
}))));if(false)
{return cljs.core.take.call(null,false,xs__21396__auto__);
} else
{return xs__21396__auto__;
}
})());if(cljs.core.empty_QMARK_.call(null,alts))
{return expr;
} else
{return cljs.core.first.call(null,alts);
}
});
kibit.core.simplify = (function simplify(expr,rules){return cljs.core.ffirst.call(null,cljs.core.drop_while.call(null,(function (p1__22107_SHARP_){return cljs.core.apply.call(null,cljs.core.not_EQ_,p1__22107_SHARP_);
}),cljs.core.partition.call(null,2,1,cljs.core.iterate.call(null,cljs.core.partial.call(null,clojure.walk.prewalk,(function (p1__22106_SHARP_){return kibit.core.simplify_one.call(null,p1__22106_SHARP_,rules);
})),expr))));
});
}
if(!lt.util.load.provided_QMARK_('cljs.extended-reader')) {
goog.provide('cljs.extended_reader');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string');
cljs.extended_reader.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"try*","try*",-1636962424,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"&","&",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null], null), null);
cljs.extended_reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.extended_reader.Reader = (function (){var obj21181 = {};return obj21181;
})();
cljs.extended_reader.read_char = (function read_char(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended_reader$Reader$read_char$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended_reader$Reader$read_char$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended_reader.read_char[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended_reader.read_char["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.extended_reader.peek_char = (function peek_char(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended_reader$Reader$peek_char$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended_reader$Reader$peek_char$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended_reader.peek_char[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended_reader.peek_char["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
cljs.extended_reader.IPushbackReader = (function (){var obj21183 = {};return obj21183;
})();
cljs.extended_reader.unread = (function unread(reader,ch){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended_reader$IPushbackReader$unread$arity$2;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended_reader$IPushbackReader$unread$arity$2(reader,ch);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended_reader.unread[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended_reader.unread["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
cljs.extended_reader.IndexingReader = (function (){var obj21185 = {};return obj21185;
})();
cljs.extended_reader.get_line_number = (function get_line_number(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended_reader$IndexingReader$get_line_number$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended_reader$IndexingReader$get_line_number$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended_reader.get_line_number[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended_reader.get_line_number["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
cljs.extended_reader.get_column_number = (function get_column_number(reader){if((function (){var and__19791__auto__ = reader;if(and__19791__auto__)
{return reader.cljs$extended_reader$IndexingReader$get_column_number$arity$1;
} else
{return and__19791__auto__;
}
})())
{return reader.cljs$extended_reader$IndexingReader$get_column_number$arity$1(reader);
} else
{var x__20430__auto__ = (((reader == null))?null:reader);return (function (){var or__19803__auto__ = (cljs.extended_reader.get_column_number[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.extended_reader.get_column_number["_"]);if(or__19803__auto____$1)
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
cljs.extended_reader.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
cljs.extended_reader.StringReader.cljs$lang$type = true;
cljs.extended_reader.StringReader.cljs$lang$ctorStr = "cljs.extended-reader/StringReader";
cljs.extended_reader.StringReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended-reader/StringReader");
});
cljs.extended_reader.StringReader.prototype.cljs$extended_reader$Reader$ = true;
cljs.extended_reader.StringReader.prototype.cljs$extended_reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{var r = self__.s.charAt(self__.s_pos);self__.s_pos = (self__.s_pos + 1);
return r;
} else
{return null;
}
});
cljs.extended_reader.StringReader.prototype.cljs$extended_reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{return self__.s.charAt(self__.s_pos);
} else
{return null;
}
});
cljs.extended_reader.__GT_StringReader = (function __GT_StringReader(s,s_len,s_pos){return (new cljs.extended_reader.StringReader(s,s_len,s_pos));
});

/**
* @constructor
*/
cljs.extended_reader.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
cljs.extended_reader.PushbackReader.cljs$lang$type = true;
cljs.extended_reader.PushbackReader.cljs$lang$ctorStr = "cljs.extended-reader/PushbackReader";
cljs.extended_reader.PushbackReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended-reader/PushbackReader");
});
cljs.extended_reader.PushbackReader.prototype.cljs$extended_reader$IPushbackReader$ = true;
cljs.extended_reader.PushbackReader.prototype.cljs$extended_reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
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
cljs.extended_reader.PushbackReader.prototype.cljs$extended_reader$Reader$ = true;
cljs.extended_reader.PushbackReader.prototype.cljs$extended_reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buf_pos < self__.buf_len))
{var r = (self__.buf[self__.buf_pos]);self__.buf_pos = (self__.buf_pos + 1);
return r;
} else
{return cljs.extended_reader.read_char.call(null,self__.rdr);
}
});
cljs.extended_reader.PushbackReader.prototype.cljs$extended_reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buf_pos < self__.buf_len))
{return (self__.buf[self__.buf_pos]);
} else
{return cljs.extended_reader.peek_char.call(null,self__.rdr);
}
});
cljs.extended_reader.__GT_PushbackReader = (function __GT_PushbackReader(rdr,buf,buf_len,buf_pos){return (new cljs.extended_reader.PushbackReader(rdr,buf,buf_len,buf_pos));
});
cljs.extended_reader.normalize_newline = (function normalize_newline(rdr,ch){if(("\r" === ch))
{var c = cljs.extended_reader.peek_char.call(null,rdr);if((("\f" === c)) || (("\n" === c)))
{cljs.extended_reader.read_char.call(null,rdr);
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
cljs.extended_reader.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.prev_column = prev_column;
this.file_name = file_name;
})
cljs.extended_reader.IndexingPushbackReader.cljs$lang$type = true;
cljs.extended_reader.IndexingPushbackReader.cljs$lang$ctorStr = "cljs.extended-reader/IndexingPushbackReader";
cljs.extended_reader.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended-reader/IndexingPushbackReader");
});
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$IndexingReader$ = true;
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.file_name;
});
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$IPushbackReader$ = true;
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
self__.column = self__.prev_column;
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
return cljs.extended_reader.unread.call(null,self__.rdr,ch);
});
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$Reader$ = true;
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.extended_reader.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.extended_reader.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.extended_reader.newline_QMARK_.call(null,ch__$1);
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
cljs.extended_reader.IndexingPushbackReader.prototype.cljs$extended_reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.extended_reader.peek_char.call(null,self__.rdr);
});
cljs.extended_reader.__GT_IndexingPushbackReader = (function __GT_IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){return (new cljs.extended_reader.IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name));
});
/**
* Returns an object of the same type and value as `obj`, with its metadata merged over `m`.
*/
cljs.extended_reader.merge_meta = (function merge_meta(obj,m){var orig_meta = cljs.core.meta.call(null,obj);return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,m,cljs.core.dissoc.call(null,orig_meta,new cljs.core.Keyword(null,"source","source",4412365709))));
});
/**
* Returns a string containing the contents of the top most source logging frame.
*/
cljs.extended_reader.peek_source_log = (function peek_source_log(source_log_frames){var current_frame = cljs.core.deref.call(null,source_log_frames);return new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(current_frame).toString().substring(new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(current_frame));
});
/**
* Logs `char` to all currently active source logging frames.
*/
cljs.extended_reader.log_source_char = (function log_source_char(source_log_frames,char$){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,source_log_frames));if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;return buffer.append(char$);
} else
{return null;
}
});
/**
* Removes the last logged character from all currently active source logging frames. Called when pushing a character back.
*/
cljs.extended_reader.drop_last_logged_char = (function drop_last_logged_char(source_log_frames){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,source_log_frames));if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;var s = buffer.toString();return buffer.set(s.substring(0,(buffer.getLength() - 1)));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.extended_reader.SourceLoggingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,source_log_frames){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.source_log_frames = source_log_frames;
})
cljs.extended_reader.SourceLoggingPushbackReader.cljs$lang$type = true;
cljs.extended_reader.SourceLoggingPushbackReader.cljs$lang$ctorStr = "cljs.extended-reader/SourceLoggingPushbackReader";
cljs.extended_reader.SourceLoggingPushbackReader.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.extended-reader/SourceLoggingPushbackReader");
});
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$IndexingReader$ = true;
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$IPushbackReader$ = true;
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
if(cljs.core.truth_(ch))
{cljs.extended_reader.drop_last_logged_char.call(null,self__.source_log_frames);
} else
{}
return cljs.extended_reader.unread.call(null,self__.rdr,ch);
});
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$Reader$ = true;
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.extended_reader.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.extended_reader.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.extended_reader.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
cljs.extended_reader.log_source_char.call(null,self__.source_log_frames,ch__$1);
return ch__$1;
} else
{return null;
}
});
cljs.extended_reader.SourceLoggingPushbackReader.prototype.cljs$extended_reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.extended_reader.peek_char.call(null,self__.rdr);
});
cljs.extended_reader.__GT_SourceLoggingPushbackReader = (function __GT_SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,source_log_frames){return (new cljs.extended_reader.SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,source_log_frames));
});
/**
* Creates a StringReader from a given string
*/
cljs.extended_reader.string_reader = (function string_reader(s){return (new cljs.extended_reader.StringReader(s,s.length,0));
});
/**
* Creates a PushbackReader from a given string
*/
cljs.extended_reader.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){return string_push_back_reader.call(null,s,1);
});
var string_push_back_reader__2 = (function (s,buf_len){return (new cljs.extended_reader.PushbackReader(cljs.extended_reader.string_reader.call(null,s),cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
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
cljs.extended_reader.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s_or_rdr){return indexing_push_back_reader.call(null,s_or_rdr,1);
});
var indexing_push_back_reader__2 = (function (s_or_rdr,buf_len){return indexing_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var indexing_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.extended_reader.IndexingPushbackReader(((typeof s_or_rdr === 'string')?cljs.extended_reader.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,0,file_name));
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
cljs.extended_reader.source_logging_push_back_reader = (function() {
var source_logging_push_back_reader = null;
var source_logging_push_back_reader__1 = (function (s_or_rdr){return source_logging_push_back_reader.call(null,s_or_rdr,1);
});
var source_logging_push_back_reader__2 = (function (s_or_rdr,buf_len){return source_logging_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var source_logging_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.extended_reader.SourceLoggingPushbackReader(((typeof s_or_rdr === 'string')?cljs.extended_reader.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),(new goog.string.StringBuffer()),new cljs.core.Keyword(null,"offset","offset",4289091589),0], null))));
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
cljs.extended_reader.js_space = ["\t"," ",","];
cljs.extended_reader.js_linebreak = ["\r","\n"];
cljs.extended_reader.js_whitespaces = ["\r","\n","\t"," ",","];
/**
* Checks whether a given character is whitespace
*/
cljs.extended_reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){return (-1 < cljs.extended_reader.js_whitespaces.indexOf(ch));
});
/**
* Checks whether a given character is space
*/
cljs.extended_reader.space_QMARK_ = (function space_QMARK_(ch){return (-1 < cljs.extended_reader.js_space.indexOf(ch));
});
/**
* Checks whether a given character is a linebreak
*/
cljs.extended_reader.linebreak_QMARK_ = (function linebreak_QMARK_(ch){return (-1 < cljs.extended_reader.js_linebreak.indexOf(ch));
});
/**
* Checks whether a given character is numeric
*/
cljs.extended_reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character is a newline.
*/
cljs.extended_reader.newline_QMARK_ = (function newline_QMARK_(ch){return ("\n" === ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.extended_reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.extended_reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.extended_reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.extended_reader.numeric_QMARK_.call(null,cljs.extended_reader.peek_char.call(null,reader))));
});
/**
* @param {...*} var_args
*/
cljs.extended_reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){var error_msg = cljs.core.apply.call(null,cljs.core.str,msg);throw (new Error([cljs.core.str(error_msg),cljs.core.str((((function (){var G__21187 = rdr;if(G__21187)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21187.cljs$extended_reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?[cljs.core.str(", on line: "),cljs.core.str(cljs.extended_reader.get_line_number.call(null,rdr)),cljs.core.str(", on column: "),cljs.core.str(cljs.extended_reader.get_column_number.call(null,rdr))].join(''):null))].join('')));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__21275){
var rdr = cljs.core.first(arglist__21275);
var msg = cljs.core.rest(arglist__21275);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.extended_reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__19791__auto__ = !((ch === "#"));if(and__19791__auto__)
{var and__19791__auto____$1 = !((ch === "'"));if(and__19791__auto____$1)
{var and__19791__auto____$2 = !((ch === ":"));if(and__19791__auto____$2)
{return cljs.extended_reader.macros.call(null,ch);
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
cljs.extended_reader.tok_sb = (new goog.string.StringBuffer());
/**
* Read in a single logical token from the reader
*/
cljs.extended_reader.read_token = (function read_token(rdr,initch){if((initch == null))
{return cljs.extended_reader.reader_error.call(null,rdr,"EOF while reading");
} else
{cljs.extended_reader.tok_sb.clear();
var ch = initch;while(true){
if((cljs.extended_reader.whitespace_QMARK_.call(null,ch)) || (cljs.extended_reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))
{if((ch == null))
{} else
{cljs.extended_reader.unread.call(null,rdr,ch);
}
return cljs.extended_reader.tok_sb.toString();
} else
{cljs.extended_reader.tok_sb.append(ch);
{
var G__21276 = cljs.extended_reader.read_char.call(null,rdr);
ch = G__21276;
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
cljs.extended_reader.read_line = (function read_line(rdr){var sb = (new goog.string.StringBuffer());var ch = cljs.extended_reader.read_char.call(null,rdr);while(true){
if(((ch == null)) && (cljs.core._EQ_.call(null,0,sb.getLength())))
{return null;
} else
{if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return sb.toString();
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21277 = (function (){sb.append(ch);
return sb;
})();
var G__21278 = cljs.extended_reader.read_char.call(null,rdr);
sb = G__21277;
ch = G__21278;
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
cljs.extended_reader.line_seq = (function line_seq(rdr){var temp__4092__auto__ = cljs.extended_reader.read_line.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
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
cljs.extended_reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.extended_reader.read_char.call(null,reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.extended_reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$");
cljs.extended_reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.extended_reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.extended_reader.re_find_STAR_ = (function re_find_STAR_(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
cljs.extended_reader.match_int = (function match_int(s){var groups = cljs.extended_reader.re_find_STAR_.call(null,cljs.extended_reader.int_pattern,s);var group3 = (groups[2]);if(!(((group3 == null)) || ((group3.length < 1))))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:((new cljs.core.Keyword(null,"default","default",2558708147))?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljs.extended_reader.match_ratio = (function match_ratio(s){var groups = cljs.extended_reader.re_find_STAR_.call(null,cljs.extended_reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator) / parseInt(denominator));
});
cljs.extended_reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.extended_reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.extended_reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.extended_reader.re_matches_STAR_.call(null,cljs.extended_reader.int_pattern,s)))
{return cljs.extended_reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.extended_reader.re_matches_STAR_.call(null,cljs.extended_reader.ratio_pattern,s)))
{return cljs.extended_reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.extended_reader.re_matches_STAR_.call(null,cljs.extended_reader.float_pattern,s)))
{return cljs.extended_reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.extended_reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
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
cljs.extended_reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.extended_reader.read_char.call(null,reader),cljs.extended_reader.read_char.call(null,reader))).toString();
});
cljs.extended_reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.extended_reader.read_char.call(null,reader),cljs.extended_reader.read_char.call(null,reader),cljs.extended_reader.read_char.call(null,reader),cljs.extended_reader.read_char.call(null,reader))).toString();
});
cljs.extended_reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.extended_reader.octal_pattern = cljs.core.re_pattern.call(null,"[0-7]{1,3}");
cljs.extended_reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.extended_reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.extended_reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
/**
* @param {...*} var_args
*/
cljs.extended_reader.make_unicode_char = (function() { 
var make_unicode_char__delegate = function (code_str,p__21188){var vec__21190 = p__21188;var base = cljs.core.nth.call(null,vec__21190,0,null);var base__$1 = (function (){var or__19803__auto__ = base;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return 16;
}
})();var code = parseInt(code_str,base__$1);return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__21188 = null;if (arguments.length > 1) {
  p__21188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_unicode_char__delegate.call(this,code_str,p__21188);};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__21279){
var code_str = cljs.core.first(arglist__21279);
var p__21188 = cljs.core.rest(arglist__21279);
return make_unicode_char__delegate(code_str,p__21188);
});
make_unicode_char.cljs$core$IFn$_invoke$arity$variadic = make_unicode_char__delegate;
return make_unicode_char;
})()
;
cljs.extended_reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.extended_reader.read_char.call(null,reader);var mapresult = cljs.extended_reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.extended_reader.make_unicode_char.call(null,cljs.extended_reader.validate_unicode_escape.call(null,cljs.extended_reader.unicode_2_pattern,reader,ch,cljs.extended_reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.extended_reader.make_unicode_char.call(null,cljs.extended_reader.validate_unicode_escape.call(null,cljs.extended_reader.unicode_4_pattern,reader,ch,cljs.extended_reader.read_4_chars.call(null,reader)));
} else
{if(cljs.extended_reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended_reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
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
cljs.extended_reader.read_past = (function read_past(pred,rdr){var ch = cljs.extended_reader.read_char.call(null,rdr);while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__21280 = cljs.extended_reader.read_char.call(null,rdr);
ch = G__21280;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.extended_reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.extended_reader.read_past.call(null,cljs.extended_reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.extended_reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4090__auto__ = cljs.extended_reader.macros.call(null,ch);if(cljs.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;var mret = macrofn.call(null,rdr,ch);{
var G__21281 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__21281;
continue;
}
} else
{cljs.extended_reader.unread.call(null,rdr,ch);
var o = cljs.extended_reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__21282 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__21282;
continue;
}
}
}
break;
}
});
cljs.extended_reader.not_implemented = (function not_implemented(rdr,ch){return cljs.extended_reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.extended_reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.extended_reader.read_char.call(null,rdr);var dm = cljs.extended_reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4090__auto__ = cljs.extended_reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;return obj;
} else
{return cljs.extended_reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.extended_reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.extended_reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.extended_reader.maybe_get_pos = (function maybe_get_pos(rdr){if((function (){var G__21192 = rdr;if(G__21192)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21192.cljs$extended_reader$IndexingReader$;
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
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.extended_reader.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"column","column",3954034376),(cljs.extended_reader.get_column_number.call(null,rdr) - 1)], null);
} else
{return null;
}
});
cljs.extended_reader.prep_meta = (function prep_meta(rdr,pos,source){if(cljs.core.truth_(pos))
{return cljs.core.merge.call(null,pos,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),cljs.extended_reader.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"end-column","end-column",3799845882),cljs.extended_reader.get_column_number.call(null,rdr),new cljs.core.Keyword(null,"source","source",4412365709),source], null));
} else
{return null;
}
});
cljs.extended_reader.with_source_log = (function with_source_log(rdr,f,prefix){if((rdr instanceof cljs.extended_reader.SourceLoggingPushbackReader))
{var frame = rdr.source_log_frames;var new_frame = cljs.core.atom.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,frame),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",4289091589)], null),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frame)).getLength()));var ret = f.call(null);var source = [cljs.core.str(prefix),cljs.core.str(cljs.extended_reader.peek_source_log.call(null,new_frame))].join('');return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret,source], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
});
cljs.extended_reader.read_list = (function read_list(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__21194 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,")",rdr,true);
});})(pos))
,"(");var the_list = cljs.core.nth.call(null,vec__21194,0,null);var source = cljs.core.nth.call(null,vec__21194,1,null);return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.list,the_list),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended_reader.read_comment = cljs.extended_reader.skip_line;
cljs.extended_reader.read_vector = (function read_vector(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__21196 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,"]",rdr,true);
});})(pos))
,"[");var the_vec = cljs.core.nth.call(null,vec__21196,0,null);var source = cljs.core.nth.call(null,vec__21196,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_vec),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended_reader.read_map = (function read_map(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__21198 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"{");var l = cljs.core.nth.call(null,vec__21198,0,null);var source = cljs.core.nth.call(null,vec__21198,1,null);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.extended_reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.hash_map,l),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended_reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.extended_reader.read_char.call(null,reader);while(true){
if(cljs.core.truth_((function (){var or__19803__auto__ = (ch == null);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = cljs.extended_reader.whitespace_QMARK_.call(null,ch);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{return cljs.extended_reader.macros.call(null,ch);
}
}
})()))
{cljs.extended_reader.unread.call(null,reader,ch);
var s = buffer.toString();var or__19803__auto__ = cljs.extended_reader.match_number.call(null,s);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended_reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__21283 = (function (){buffer.append(ch);
return buffer;
})();
var G__21284 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__21283;
ch = G__21284;
continue;
}
}
break;
}
});
cljs.extended_reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.extended_reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended_reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__21285 = (function (){buffer.append(cljs.extended_reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__21286 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__21285;
ch = G__21286;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__21287 = (function (){buffer.append(ch);
return buffer;
})();
var G__21288 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__21287;
ch = G__21288;
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
cljs.extended_reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
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
cljs.extended_reader.parse_symbol = (function parse_symbol(token){if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.extended_reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.extended_reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.extended_reader.read_token.call(null,reader,initch);if((token == null))
{return null;
} else
{return cljs.extended_reader.parse_symbol.call(null,token);
}
});
cljs.extended_reader.read_keyword = (function read_keyword(reader,initch){var tok = cljs.extended_reader.read_token.call(null,reader,cljs.extended_reader.read_char.call(null,reader));var a = cljs.extended_reader.re_matches_STAR_.call(null,cljs.extended_reader.symbol_pattern,tok);var token = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token.indexOf("::",1) === -1))))
{return cljs.extended_reader.reader_error.call(null,reader,"Invalid token: ",token);
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token.substring(0));
}
}
});
cljs.extended_reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
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
cljs.extended_reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended_reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.extended_reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.extended_reader.reader_error.call(null,rdr,msg);
});
});
cljs.extended_reader.read_meta = (function read_meta(rdr,_){var vec__21202 = (((function (){var G__21203 = rdr;if(G__21203)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21203.cljs$extended_reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.extended_reader.get_line_number.call(null,rdr),(cljs.extended_reader.get_column_number.call(null,rdr) - 1)], null):null);var line = cljs.core.nth.call(null,vec__21202,0,null);var column = cljs.core.nth.call(null,vec__21202,1,null);var m = cljs.extended_reader.desugar_meta.call(null,cljs.extended_reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.extended_reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.extended_reader.read.call(null,rdr,true,null,true);if((function (){var G__21204 = o;if(G__21204)
{var bit__20446__auto__ = (G__21204.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20446__auto__) || (G__21204.cljs$core$IWithMeta$))
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
{return cljs.extended_reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.extended_reader.UNQUOTE = new cljs.core.Keyword("cljs.extended-reader","__thisInternalKeywordRepresentsUnquoteToTheReader__","cljs.extended-reader/__thisInternalKeywordRepresentsUnquoteToTheReader__",759284606);
cljs.extended_reader.UNQUOTE_SPLICING = new cljs.core.Keyword("cljs.extended-reader","__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__","cljs.extended-reader/__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__",3119025527);
cljs.extended_reader.SYNTAX_QUOTE = new cljs.core.Keyword("cljs.extended-reader","syntaxQuote","cljs.extended-reader/syntaxQuote",2696836652);
cljs.extended_reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,null);
cljs.extended_reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,null);
cljs.extended_reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){var and__19791__auto__ = (function (){var G__21208 = form;if(G__21208)
{var bit__20446__auto__ = (G__21208.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__21208.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(and__19791__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.extended_reader.UNQUOTE);
} else
{return and__19791__auto__;
}
});
cljs.extended_reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){var and__19791__auto__ = (function (){var G__21212 = form;if(G__21212)
{var bit__20446__auto__ = (G__21212.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__21212.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(and__19791__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.extended_reader.UNQUOTE_SPLICING);
} else
{return and__19791__auto__;
}
});
cljs.extended_reader.sqExpandList = (function sqExpandList(sq){return cljs.core.doall.call(null,(function (){var iter__20520__auto__ = (function iter__21217(s__21218){return (new cljs.core.LazySeq(null,(function (){var s__21218__$1 = s__21218;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21218__$1);if(temp__4092__auto__)
{var s__21218__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21218__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__21218__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__21220 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__21219 = 0;while(true){
if((i__21219 < size__20519__auto__))
{var item = cljs.core._nth.call(null,c__20518__auto__,i__21219);cljs.core.chunk_append.call(null,b__21220,((cljs.extended_reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended_reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended_reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))));
{
var G__21289 = (i__21219 + 1);
i__21219 = G__21289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21220),iter__21217.call(null,cljs.core.chunk_rest.call(null,s__21218__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21220),null);
}
} else
{var item = cljs.core.first.call(null,s__21218__$2);return cljs.core.cons.call(null,((cljs.extended_reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended_reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended_reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))),iter__21217.call(null,cljs.core.rest.call(null,s__21218__$2)));
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
cljs.extended_reader.syntaxQuote = (function syntaxQuote(form){if(cljs.core.truth_(cljs.core.get.call(null,cljs.extended_reader.specials,form)))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((form instanceof cljs.core.Symbol))
{var sym = form;var name = cljs.core.name.call(null,sym);var ns = cljs.core.namespace.call(null,sym);if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,"#",cljs.core.last.call(null,name))))
{var new_name = cljs.core.subs.call(null,name,0,(cljs.core.count.call(null,name) - 1));var gmap = cljs.core.deref.call(null,cljs.extended_reader._STAR_gensym_env_STAR_);if(cljs.core.not.call(null,gmap))
{cljs.extended_reader.reader_error.call(null,null,"Gensym literal not in syntax-quote");
} else
{}
var gs = (function (){var or__19803__auto__ = cljs.core.get.call(null,gmap,sym);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.gensym.call(null,[cljs.core.str(new_name),cljs.core.str("__auto__")].join(''));
}
})();cljs.core.swap_BANG_.call(null,cljs.extended_reader._STAR_gensym_env_STAR_,cljs.core.assoc,sym,gs);
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
{if(cljs.extended_reader.isUnquote_QMARK_.call(null,form))
{return cljs.core.second.call(null,form);
} else
{if(cljs.extended_reader.isUnquoteSplicing_QMARK_.call(null,form))
{throw (new Error("Reader ~@ splice not in list"));
} else
{if((form == null))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((function (){var G__21229 = form;if(G__21229)
{var bit__20446__auto__ = (G__21229.cljs$lang$protocol_mask$partition0$ & 8);if((bit__20446__auto__) || (G__21229.cljs$core$ICollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{if((function (){var G__21230 = form;if(G__21230)
{var bit__20446__auto__ = (G__21230.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__20446__auto__) || (G__21230.cljs$core$IRecord$))
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
{if((function (){var G__21231 = form;if(G__21231)
{var bit__20446__auto__ = (G__21231.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__20446__auto__) || (G__21231.cljs$core$IMap$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended_reader.sqExpandList.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,form))))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"hash-map","hash-map",-1493492266,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var G__21232 = form;if(G__21232)
{var bit__20446__auto__ = (G__21232.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__20446__auto__) || (G__21232.cljs$core$IVector$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended_reader.sqExpandList.call(null,form))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"vector","vector",1834048252,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var G__21233 = form;if(G__21233)
{var bit__20446__auto__ = (G__21233.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__20446__auto__) || (G__21233.cljs$core$ISet$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended_reader.sqExpandList.call(null,cljs.core.seq.call(null,form)))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"hash-set","hash-set",-1493486372,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var or__19803__auto__ = (function (){var G__21235 = form;if(G__21235)
{var bit__20446__auto__ = (G__21235.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__21235.cljs$core$ISeq$))
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
{var G__21236 = form;if(G__21236)
{var bit__20446__auto__ = (G__21236.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__20446__auto__) || (G__21236.cljs$core$IList$))
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
{var sq = temp__4090__auto__;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended_reader.sqExpandList.call(null,sq))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null));
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
cljs.extended_reader.read_syntax_quote = (function read_syntax_quote(rdr,_){var _STAR_gensym_env_STAR_21238 = cljs.extended_reader._STAR_gensym_env_STAR_;try{cljs.extended_reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var form = cljs.extended_reader.read.call(null,rdr,true,null,true);return cljs.extended_reader.syntaxQuote.call(null,form);
}finally {cljs.extended_reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_21238;
}});
cljs.extended_reader.read_unquote = (function read_unquote(rdr,_){var ch = cljs.extended_reader.read_char.call(null,rdr);if(cljs.core._EQ_.call(null,null,ch))
{return cljs.extended_reader.reader_error.call(null,rdr,"EOF while reading unquote character");
} else
{if(cljs.core._EQ_.call(null,"@",ch))
{var o = cljs.extended_reader.read.call(null,rdr,true,null,true);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,o),cljs.extended_reader.UNQUOTE_SPLICING);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.extended_reader.unread.call(null,rdr,ch);
var o = cljs.extended_reader.read.call(null,rdr,true,null,true);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,o),cljs.extended_reader.UNQUOTE);
} else
{return null;
}
}
}
});
cljs.extended_reader.read_character = (function read_character(rdr,_){var ch = cljs.extended_reader.read_char.call(null,rdr);if(cljs.core._EQ_.call(null,null,ch))
{cljs.extended_reader.reader_error.call(null,rdr,"EOF while reading character constant");
} else
{}
var token = cljs.extended_reader.read_token.call(null,rdr,ch);if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,token)))
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
{var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,token));cljs.extended_reader.validate_unicode_escape.call(null,cljs.extended_reader.unicode_4_pattern,rdr,"u",chars);
var c = cljs.extended_reader.make_unicode_char.call(null,chars,16);var cval = parseInt(chars,16);if(((cval >= 55296)) && ((cval <= 57343)))
{cljs.extended_reader.reader_error.call(null,rdr,"Invalid character constant: \\",token);
} else
{}
return c;
} else
{if(cljs.core._EQ_.call(null,"o",cljs.core.first.call(null,token)))
{var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,token));cljs.extended_reader.validate_unicode_escape.call(null,cljs.extended_reader.octal_pattern,rdr,"o",chars);
var c = cljs.extended_reader.make_unicode_char.call(null,chars,8);var cval = parseInt(chars,8);if((cval > 255))
{cljs.extended_reader.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
} else
{}
return c;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended_reader.reader_error.call(null,rdr,"Unsupported character: \\",token);
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
cljs.extended_reader.garg = (function garg(n){var pre = ((cljs.core._EQ_.call(null,n,-1))?"rest":[cljs.core.str("p"),cljs.core.str(n)].join(''));return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.gensym.call(null,pre)),cljs.core.str("#")].join(''));
});
cljs.extended_reader.read_fn = (function read_fn(rdr,_){if(cljs.core.truth_(cljs.core.deref.call(null,cljs.extended_reader._STAR_arg_env_STAR_)))
{cljs.extended_reader.reader_error.call(null,null,"nested #()s are not allowed");
} else
{}
var _STAR_arg_env_STAR_21245 = cljs.extended_reader._STAR_arg_env_STAR_;try{cljs.extended_reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
cljs.extended_reader.unread.call(null,rdr,"(");
var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__21246 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos,_STAR_arg_env_STAR_21245){
return (function (){return cljs.extended_reader.read.call(null,rdr,true,null,true);
});})(pos,_STAR_arg_env_STAR_21245))
,"#");var form = cljs.core.nth.call(null,vec__21246,0,null);var source = cljs.core.nth.call(null,vec__21246,1,null);var argsyms = cljs.core.deref.call(null,cljs.extended_reader._STAR_arg_env_STAR_);var rargs = cljs.core.rseq.call(null,argsyms);var highpair = cljs.core.first.call(null,rargs);var higharg = (cljs.core.truth_(highpair)?cljs.core.key.call(null,highpair):0);var args = (((higharg > 0))?cljs.core.doall.call(null,(function (){var iter__20520__auto__ = ((function (pos,vec__21246,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21245){
return (function iter__21247(s__21248){return (new cljs.core.LazySeq(null,((function (pos,vec__21246,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21245){
return (function (){var s__21248__$1 = s__21248;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21248__$1);if(temp__4092__auto__)
{var s__21248__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21248__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__21248__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__21250 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__21249 = 0;while(true){
if((i__21249 < size__20519__auto__))
{var i = cljs.core._nth.call(null,c__20518__auto__,i__21249);cljs.core.chunk_append.call(null,b__21250,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended_reader.garg.call(null,i);
}
})());
{
var G__21290 = (i__21249 + 1);
i__21249 = G__21290;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21250),iter__21247.call(null,cljs.core.chunk_rest.call(null,s__21248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21250),null);
}
} else
{var i = cljs.core.first.call(null,s__21248__$2);return cljs.core.cons.call(null,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended_reader.garg.call(null,i);
}
})(),iter__21247.call(null,cljs.core.rest.call(null,s__21248__$2)));
}
} else
{return null;
}
break;
}
});})(pos,vec__21246,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21245))
,null,null));
});})(pos,vec__21246,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_21245))
;return iter__20520__auto__.call(null,cljs.core.range.call(null,1,(1 + higharg)));
})()):rargs);var restsym = cljs.core.get.call(null,argsyms,-1);var args__$1 = (cljs.core.truth_(restsym)?cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-1640531489,null),restsym], null)):args);return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),cljs.core.vec.call(null,args__$1)),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
}finally {cljs.extended_reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_21245;
}});
cljs.extended_reader.registerArg = (function registerArg(n){var argsyms = cljs.core.deref.call(null,cljs.extended_reader._STAR_arg_env_STAR_);if(cljs.core.truth_(argsyms))
{} else
{cljs.extended_reader.reader_error.call(null,null,"arg literal not in #()");
}
var ret = cljs.core.get.call(null,argsyms,n);if(cljs.core.truth_(ret))
{return ret;
} else
{var ret__$1 = cljs.extended_reader.garg.call(null,n);cljs.core.swap_BANG_.call(null,cljs.extended_reader._STAR_arg_env_STAR_,cljs.core.assoc,n,ret__$1);
return ret__$1;
}
});
cljs.extended_reader.read_arg = (function read_arg(rdr,pct){if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs.extended_reader._STAR_arg_env_STAR_)))
{return cljs.extended_reader.read_symbol.call(null,rdr,"%");
} else
{var ch = cljs.extended_reader.peek_char.call(null,rdr);if(((ch == null)) || (cljs.extended_reader.whitespace_QMARK_.call(null,ch)) || (cljs.extended_reader.macro_terminating_QMARK_.call(null,ch)))
{return cljs.extended_reader.registerArg.call(null,1);
} else
{var n = cljs.extended_reader.read.call(null,rdr,true,null,true);if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&","&",-1640531489,null),n))
{return cljs.extended_reader.registerArg.call(null,-1);
} else
{if(!(typeof n === 'number'))
{return cljs.extended_reader.reader_error.call(null,rdr,"arg literal must be %, %& or %integer");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended_reader.registerArg.call(null,(n | 0));
} else
{return null;
}
}
}
}
}
});
cljs.extended_reader.read_set = (function read_set(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__21252 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"#{");var the_set = cljs.core.nth.call(null,vec__21252,0,null);var source = cljs.core.nth.call(null,vec__21252,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_set),cljs.extended_reader.prep_meta.call(null,rdr,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",3954034376)], null),cljs.core.dec),source));
});
cljs.extended_reader.read_regex = (function read_regex(reader){var buffer = "";var ch = cljs.extended_reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended_reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__21291 = [cljs.core.str(buffer),cljs.core.str(ch),cljs.core.str(cljs.extended_reader.read_char.call(null,reader))].join('');
var G__21292 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__21291;
ch = G__21292;
continue;
}
} else
{if(("\"" === ch))
{return cljs.core.re_pattern.call(null,buffer);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__21293 = [cljs.core.str(buffer),cljs.core.str(ch)].join('');
var G__21294 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__21293;
ch = G__21294;
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
cljs.extended_reader.read_discard = (function read_discard(rdr,_){cljs.extended_reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.extended_reader.macros = (function macros(c){if((c === "\""))
{return cljs.extended_reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.extended_reader.read_keyword;
} else
{if((c === ";"))
{return cljs.extended_reader.read_comment;
} else
{if((c === "'"))
{return cljs.extended_reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.extended_reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.extended_reader.read_meta;
} else
{if((c === "`"))
{return cljs.extended_reader.wrapping_reader.call(null,cljs.extended_reader.SYNTAX_QUOTE);
} else
{if((c === "~"))
{return cljs.extended_reader.read_unquote;
} else
{if((c === "("))
{return cljs.extended_reader.read_list;
} else
{if((c === ")"))
{return cljs.extended_reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.extended_reader.read_vector;
} else
{if((c === "]"))
{return cljs.extended_reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.extended_reader.read_map;
} else
{if((c === "}"))
{return cljs.extended_reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.extended_reader.read_character;
} else
{if((c === "%"))
{return cljs.extended_reader.read_arg;
} else
{if((c === "#"))
{return cljs.extended_reader.read_dispatch;
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
cljs.extended_reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.extended_reader.read_set;
} else
{if((s === "("))
{return cljs.extended_reader.read_fn;
} else
{if((s === "<"))
{return cljs.extended_reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.extended_reader.read_regex;
} else
{if((s === "!"))
{return cljs.extended_reader.read_comment;
} else
{if((s === "_"))
{return cljs.extended_reader.read_discard;
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
cljs.extended_reader.read = (function() {
var read = null;
var read__1 = (function (reader){return read.call(null,reader,true,null);
});
var read__3 = (function (reader,eof_is_error,sentinel){return read.call(null,reader,eof_is_error,sentinel,false);
});
var read__4 = (function (reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.extended_reader.read_char.call(null,reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.extended_reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.extended_reader.whitespace_QMARK_.call(null,ch))
{{
var G__21295 = reader;
var G__21296 = eof_is_error;
var G__21297 = sentinel;
var G__21298 = is_recursive;
reader = G__21295;
eof_is_error = G__21296;
sentinel = G__21297;
is_recursive = G__21298;
continue;
}
} else
{if(cljs.extended_reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__21299 = cljs.extended_reader.read_comment.call(null,reader,ch);
var G__21300 = eof_is_error;
var G__21301 = sentinel;
var G__21302 = is_recursive;
reader = G__21299;
eof_is_error = G__21300;
sentinel = G__21301;
is_recursive = G__21302;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.extended_reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.extended_reader.number_literal_QMARK_.call(null,reader,ch))?cljs.extended_reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.extended_reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__21303 = reader;
var G__21304 = eof_is_error;
var G__21305 = sentinel;
var G__21306 = is_recursive;
reader = G__21303;
eof_is_error = G__21304;
sentinel = G__21305;
is_recursive = G__21306;
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
cljs.extended_reader.read_string = (function read_string(s){var r = cljs.extended_reader.string_push_back_reader.call(null,s);return cljs.extended_reader.read.call(null,r,true,null,false);
});
/**
* Reads one object indexed from the string s
*/
cljs.extended_reader.read_string_indexed = (function read_string_indexed(s){var r = cljs.extended_reader.indexing_push_back_reader.call(null,s);return cljs.extended_reader.read.call(null,r,true,null,false);
});
/**
* Reads one object indexed and source-logged for the string s (source and bounds only for colls)
*/
cljs.extended_reader.read_string_source_logged = (function read_string_source_logged(s){var r = cljs.extended_reader.source_logging_push_back_reader.call(null,s);return cljs.extended_reader.read.call(null,r,true,null,false);
});
cljs.extended_reader.zero_fill_right = (function zero_fill_right(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__21307 = b.append("0");
b = G__21307;
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
cljs.extended_reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod.call(null,num,div) === 0);
});
cljs.extended_reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.extended_reader.divisible_QMARK_.call(null,num,div));
});
cljs.extended_reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.extended_reader.divisible_QMARK_.call(null,year,4)) && ((cljs.extended_reader.indivisible_QMARK_.call(null,year,100)) || (cljs.extended_reader.divisible_QMARK_.call(null,year,400)));
});
cljs.extended_reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.extended_reader.parse_and_validate_timestamp = (function (){var timestamp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;var check = ((function (timestamp){
return (function (low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",-1640529606,null),new cljs.core.Symbol(null,"low","low",-1640424179,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),new cljs.core.Symbol(null,"high","high",-1637329061,null))))].join('')));
}
return n;
});})(timestamp))
;return ((function (timestamp,check){
return (function (ts){var temp__4092__auto__ = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp,ts)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__21257 = temp__4092__auto__;var vec__21258 = cljs.core.nth.call(null,vec__21257,0,null);var _ = cljs.core.nth.call(null,vec__21258,0,null);var years = cljs.core.nth.call(null,vec__21258,1,null);var months = cljs.core.nth.call(null,vec__21258,2,null);var days = cljs.core.nth.call(null,vec__21258,3,null);var hours = cljs.core.nth.call(null,vec__21258,4,null);var minutes = cljs.core.nth.call(null,vec__21258,5,null);var seconds = cljs.core.nth.call(null,vec__21258,6,null);var milliseconds = cljs.core.nth.call(null,vec__21258,7,null);var vec__21259 = cljs.core.nth.call(null,vec__21257,1,null);var ___$1 = cljs.core.nth.call(null,vec__21259,0,null);var ___$2 = cljs.core.nth.call(null,vec__21259,1,null);var ___$3 = cljs.core.nth.call(null,vec__21259,2,null);var V = vec__21257;var vec__21260 = cljs.core.map.call(null,((function (vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (v){return cljs.core.map.call(null,((function (vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__21256_SHARP_){return parseInt(p1__21256_SHARP_,10);
});})(vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,v);
});})(vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,cljs.core.map.call(null,((function (vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__21254_SHARP_,p2__21253_SHARP_){return cljs.core.update_in.call(null,p2__21253_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),p1__21254_SHARP_);
});})(vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly.call(null,null),((function (vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__21255_SHARP_){if(cljs.core._EQ_.call(null,p1__21255_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
});})(vec__21257,vec__21258,_,years,months,days,hours,minutes,seconds,milliseconds,vec__21259,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
], null),V));var vec__21261 = cljs.core.nth.call(null,vec__21260,0,null);var ___$4 = cljs.core.nth.call(null,vec__21261,0,null);var y = cljs.core.nth.call(null,vec__21261,1,null);var mo = cljs.core.nth.call(null,vec__21261,2,null);var d = cljs.core.nth.call(null,vec__21261,3,null);var h = cljs.core.nth.call(null,vec__21261,4,null);var m = cljs.core.nth.call(null,vec__21261,5,null);var s = cljs.core.nth.call(null,vec__21261,6,null);var ms = cljs.core.nth.call(null,vec__21261,7,null);var vec__21262 = cljs.core.nth.call(null,vec__21260,1,null);var offset_sign = cljs.core.nth.call(null,vec__21262,0,null);var offset_hours = cljs.core.nth.call(null,vec__21262,1,null);var offset_minutes = cljs.core.nth.call(null,vec__21262,2,null);var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,years))?1970:y),((cljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days))?1:check.call(null,1,d,cljs.extended_reader.days_in_month.call(null,mo,cljs.extended_reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds))?0:check.call(null,0,s,((cljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], null);
} else
{return null;
}
});
;})(timestamp,check))
})();
cljs.extended_reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.extended_reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__21264 = temp__4090__auto__;var years = cljs.core.nth.call(null,vec__21264,0,null);var months = cljs.core.nth.call(null,vec__21264,1,null);var days = cljs.core.nth.call(null,vec__21264,2,null);var hours = cljs.core.nth.call(null,vec__21264,3,null);var minutes = cljs.core.nth.call(null,vec__21264,4,null);var seconds = cljs.core.nth.call(null,vec__21264,5,null);var ms = cljs.core.nth.call(null,vec__21264,6,null);var offset = cljs.core.nth.call(null,vec__21264,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.extended_reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.extended_reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.extended_reader.parse_timestamp.call(null,s);
} else
{return cljs.extended_reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.extended_reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,(new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0)),elems);
} else
{return cljs.extended_reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.extended_reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.extended_reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.extended_reader.read_js_tag = (function read_js_tag(js){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,js),new cljs.core.Symbol(null,"clj->js","clj->js",-780735212,null));
});
cljs.extended_reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.extended_reader.read_date,"uuid",cljs.extended_reader.read_uuid,"queue",cljs.extended_reader.read_queue,"js",cljs.extended_reader.read_js_tag], null));
cljs.extended_reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.extended_reader.read_symbol.call(null,rdr,initch);var temp__4090__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended_reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag));if(cljs.core.truth_(temp__4090__auto__))
{var pfn = temp__4090__auto__;return pfn.call(null,cljs.extended_reader.read.call(null,rdr,true,null,false));
} else
{return cljs.extended_reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.extended_reader._STAR_tag_table_STAR_))));
}
});
cljs.extended_reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = cljs.core.name.call(null,tag);var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended_reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.extended_reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.extended_reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = cljs.core.name.call(null,tag);var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended_reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.extended_reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
}
if(!lt.util.load.provided_QMARK_('kibit.check')) {
goog.provide('kibit.check');
goog.require('cljs.core');
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
kibit.check.unique_alt_QMARK_ = (function unique_alt_QMARK_(simplify_map){var map__21943 = simplify_map;var map__21943__$1 = ((cljs.core.seq_QMARK_.call(null,map__21943))?cljs.core.apply.call(null,cljs.core.hash_map,map__21943):map__21943);var alt = cljs.core.get.call(null,map__21943__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));var expr = cljs.core.get.call(null,map__21943__$1,new cljs.core.Keyword(null,"expr","expr",1017032039));if(cljs.core._EQ_.call(null,alt,expr))
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
var check_expr__delegate = function (expr,kw_opts){var map__21946 = cljs.core.merge.call(null,kibit.check.default_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolution","resolution",3708840990),new cljs.core.Keyword(null,"toplevel","toplevel",4354431681)], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_opts));var map__21946__$1 = ((cljs.core.seq_QMARK_.call(null,map__21946))?cljs.core.apply.call(null,cljs.core.hash_map,map__21946):map__21946);var resolution = cljs.core.get.call(null,map__21946__$1,new cljs.core.Keyword(null,"resolution","resolution",3708840990));var guard = cljs.core.get.call(null,map__21946__$1,new cljs.core.Keyword(null,"guard","guard",1112609303));var rules = cljs.core.get.call(null,map__21946__$1,new cljs.core.Keyword(null,"rules","rules",1122778217));var rules__$1 = cljs.core.map.call(null,cljs.core.logic.prep,rules);var simplify_fn = ((function (map__21946,map__21946__$1,resolution,guard,rules,rules__$1){
return (function (p1__21944_SHARP_){return kibit.check.res__GT_simplify.call(null,resolution).call(null,p1__21944_SHARP_,rules__$1);
});})(map__21946,map__21946__$1,resolution,guard,rules,rules__$1))
;return kibit.check.check_aux.call(null,expr,simplify_fn,guard);
};
var check_expr = function (expr,var_args){
var kw_opts = null;if (arguments.length > 1) {
  kw_opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return check_expr__delegate.call(this,expr,kw_opts);};
check_expr.cljs$lang$maxFixedArity = 1;
check_expr.cljs$lang$applyTo = (function (arglist__21957){
var expr = cljs.core.first(arglist__21957);
var kw_opts = cljs.core.rest(arglist__21957);
return check_expr__delegate(expr,kw_opts);
});
check_expr.cljs$core$IFn$_invoke$arity$variadic = check_expr__delegate;
return check_expr;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-clojure-linter.expr-checker')) {
goog.provide('lt.plugins.lt_clojure_linter.expr_checker');
goog.require('cljs.core');
goog.require('kibit.check');
goog.require('kibit.check');
goog.require('cljs.extended_reader');
goog.require('cljs.extended_reader');
cljs.core.enable_console_print_BANG_.call(null);
/**
* Takes the reader state and editor, and returns the next char and new state
* of the reader
*/
lt.plugins.lt_clojure_linter.expr_checker.next_char_from_reader = (function next_char_from_reader(line_seq,p__22708){var map__22710 = p__22708;var map__22710__$1 = ((cljs.core.seq_QMARK_.call(null,map__22710))?cljs.core.apply.call(null,cljs.core.hash_map,map__22710):map__22710);var state = map__22710__$1;var buffer = cljs.core.get.call(null,map__22710__$1,new cljs.core.Keyword(null,"buffer","buffer",3930752946));var col = cljs.core.get.call(null,map__22710__$1,new cljs.core.Keyword(null,"col","col",1014002930));var line = cljs.core.get.call(null,map__22710__$1,new cljs.core.Keyword(null,"line","line",1017226086));var line_contents = cljs.core.get.call(null,map__22710__$1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725));if(cljs.core.seq.call(null,buffer))
{var popped = cljs.core.last.call(null,buffer);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [popped,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.pop)], null);
} else
{if((cljs.core.count.call(null,line_contents) < col))
{var line_contents__$1 = cljs.core.get.call(null,line_seq,(line + 1));var line__$1 = (line + 1);while(true){
if((line_contents__$1 == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"eof?","eof?",1017023029),true)], null);
} else
{if(cljs.core.empty_QMARK_.call(null,line_contents__$1))
{{
var G__22723 = cljs.core.get.call(null,line_seq,(line__$1 + 1));
var G__22724 = (line__$1 + 1);
line_contents__$1 = G__22723;
line__$1 = G__22724;
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
* @param {*} line_seq
* @param {*} state
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader = (function (line_seq,state,__meta,__extmap){
this.line_seq = line_seq;
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
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$IPushbackReader$ = true;
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$IPushbackReader$unread$arity$2 = (function (_,ch){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.conj,ch);
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k22712,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k22712,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976)))
{return self__.line_seq;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k22712,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k22712,else__20392__auto__);
} else
{return null;
}
}
}
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__22711){var self__ = this;
var this__20396__auto____$1 = this;var pred__22714 = cljs.core.keyword_identical_QMARK_;var expr__22715 = k__20397__auto__;if(cljs.core.truth_(pred__22714.call(null,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),expr__22715)))
{return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(G__22711,self__.state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__22714.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__22715)))
{return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(self__.line_seq,G__22711,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(self__.line_seq,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__22711),null));
}
}
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#lt.plugins.lt-clojure-linter.expr-checker.LineSeqPushbackReader{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),self__.line_seq],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$Reader$ = true;
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$Reader$read_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__22717 = lt.plugins.lt_clojure_linter.expr_checker.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state));var next_char = cljs.core.nth.call(null,vec__22717,0,null);var new_state = cljs.core.nth.call(null,vec__22717,1,null);if((next_char == null))
{cljs.core.deref.call(null,self__.state);
} else
{}
cljs.core.reset_BANG_.call(null,self__.state,new_state);
return next_char;
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$Reader$peek_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,lt.plugins.lt_clojure_linter.expr_checker.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state)));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),self__.line_seq],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
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
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__22711){var self__ = this;
var this__20388__auto____$1 = this;return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(self__.line_seq,self__.state,G__22711,self__.__extmap,self__.__hash));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(self__.line_seq,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(self__.line_seq,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$IndexingReader$ = true;
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_line_number$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lt.plugins.lt_clojure_linter.expr_checker.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state))));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lt.plugins.lt_clojure_linter.expr_checker.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state))));
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.cljs$lang$type = true;
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.lt-clojure-linter.expr-checker/LineSeqPushbackReader");
});
lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"lt.plugins.lt-clojure-linter.expr-checker/LineSeqPushbackReader");
});
lt.plugins.lt_clojure_linter.expr_checker.__GT_LineSeqPushbackReader = (function __GT_LineSeqPushbackReader(line_seq,state){return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(line_seq,state));
});
lt.plugins.lt_clojure_linter.expr_checker.map__GT_LineSeqPushbackReader = (function map__GT_LineSeqPushbackReader(G__22713){return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(new cljs.core.Keyword(null,"line-seq","line-seq",2201401976).cljs$core$IFn$_invoke$arity$1(G__22713),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__22713),null,cljs.core.dissoc.call(null,G__22713,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),new cljs.core.Keyword(null,"state","state",1123661827))));
});
lt.plugins.lt_clojure_linter.expr_checker.default_reader_state = (function default_reader_state(line_seq,start_line,start_col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"col","col",1014002930),start_col,new cljs.core.Keyword(null,"buffer","buffer",3930752946),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),cljs.core.get.call(null,line_seq,start_line)], null);
});
lt.plugins.lt_clojure_linter.expr_checker.editor_pushback_reader = (function editor_pushback_reader(line_seq){return (new lt.plugins.lt_clojure_linter.expr_checker.LineSeqPushbackReader(line_seq,cljs.core.atom.call(null,lt.plugins.lt_clojure_linter.expr_checker.default_reader_state.call(null,line_seq,0,0))));
});
lt.plugins.lt_clojure_linter.expr_checker.read_all_forms_in_editor = (function read_all_forms_in_editor(editor_text){var line_seq = cljs.core.vec.call(null,clojure.string.split.call(null,editor_text,/\n/));var forms = cljs.core.PersistentVector.EMPTY;var r = lt.plugins.lt_clojure_linter.expr_checker.editor_pushback_reader.call(null,line_seq);while(true){
if(cljs.core.not.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"eof?","eof?",1017023029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r)));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.last.call(null,forms));
}
})()))
{var form = cljs.extended_reader.read.call(null,r,false,new cljs.core.Keyword(null,"end","end",1014004813));var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r));{
var G__22725 = cljs.core.conj.call(null,forms,form);
var G__22726 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,lt.plugins.lt_clojure_linter.expr_checker.default_reader_state.call(null,line_seq,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(state))));
forms = G__22725;
r = G__22726;
continue;
}
} else
{return cljs.core.butlast.call(null,forms);
}
break;
}
});
lt.plugins.lt_clojure_linter.expr_checker.__GT_linter_result = (function __GT_linter_result(p__22718){var map__22721 = p__22718;var map__22721__$1 = ((cljs.core.seq_QMARK_.call(null,map__22721))?cljs.core.apply.call(null,cljs.core.hash_map,map__22721):map__22721);var res = map__22721__$1;var alt = cljs.core.get.call(null,map__22721__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));var expr = cljs.core.get.call(null,map__22721__$1,new cljs.core.Keyword(null,"expr","expr",1017032039));var map__22722 = cljs.core.meta.call(null,expr);var map__22722__$1 = ((cljs.core.seq_QMARK_.call(null,map__22722))?cljs.core.apply.call(null,cljs.core.hash_map,map__22722):map__22722);var end_column = cljs.core.get.call(null,map__22722__$1,new cljs.core.Keyword(null,"end-column","end-column",3799845882));var end_line = cljs.core.get.call(null,map__22722__$1,new cljs.core.Keyword(null,"end-line","end-line",2693041432));var column = cljs.core.get.call(null,map__22722__$1,new cljs.core.Keyword(null,"column","column",3954034376));var line = cljs.core.get.call(null,map__22722__$1,new cljs.core.Keyword(null,"line","line",1017226086));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alt","alt",1014000923),cljs.core.pr_str.call(null,alt),new cljs.core.Keyword(null,"severity","severity",2492204655),new cljs.core.Keyword(null,"warning","warning",2138350350),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_line,end_column], null)], null);
});
lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text = (function lint_editor_text(editor_text){var forms = lt.plugins.lt_clojure_linter.expr_checker.read_all_forms_in_editor.call(null,editor_text);var results = cljs.core.keep.call(null,kibit.check.check_expr,forms);cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,lt.plugins.lt_clojure_linter.expr_checker.__GT_linter_result,results)], null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,lt.plugins.lt_clojure_linter.expr_checker.__GT_linter_result,results)], null);
});
goog.exportSymbol('lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text', lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-clojure-linter')) {
goog.provide('lt.plugins.lt_clojure_linter');
goog.require('cljs.core');
goog.require('lt.plugins.lt_clojure_linter.expr_checker');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor.pool');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.lt_clojure_linter.expr_checker');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
cljs.reader.read_string.call(null,"({:message \"Consider using: (inc x)\", :severity \"warning\", :from [0 1], :to [0 8]}\n                    {:message \"Consider using: (when-not (pred? x y) (f x y))\", :severity \"warning\", :from [2 1], :to [2 33]}\n                    {:message \"Consider using: (map inc [1 2 3])\",\n                    :severity \"warning\", :from [4 1], :to [4 31]})");
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","clojure-linter","lt.plugins.lt-clojure-linter/clojure-linter",1103558991),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099)], null),new cljs.core.Keyword(null,"timeout","timeout",3994960083),45000,new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Clojure linter");
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","expr-check","lt.plugins.lt-clojure-linter/expr-check",3466832274),null], null), null),new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"callback","callback",841683895),cljs.core.identity,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker-callback","lt.plugins.lt-clojure-linter/kibit-expr-checker-callback",2077056617)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,callback){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",841683895),callback], null));
}));
lt.plugins.lt_clojure_linter.__BEH__kibit_expr_checker_callback = (function __BEH__kibit_expr_checker_callback(this$,results){cljs.core.println.call(null,"DONE!!!!");
return cljs.core.println.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(results)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker-callback","lt.plugins.lt-clojure-linter/kibit-expr-checker-callback",2077056617),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.__BEH__kibit_expr_checker_callback,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exprs-check-complete","exprs-check-complete",4114379871),null], null), null));
lt.plugins.lt_clojure_linter.plugin_id = "lt-clojure-linter";
lt.plugins.lt_clojure_linter.expr_checker_module = (function expr_checker_module(){return [cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/"),cljs.core.str(lt.plugins.lt_clojure_linter.plugin_id),cljs.core.str("/expr-checker-module.js")].join('');
});
lt.plugins.lt_clojure_linter.bg_expr_check = lt.objs.thread.thread_STAR_.call(null,(function tfun22728(){var orig__21891__auto__ = argsArray(arguments);var msg__21892__auto__ = orig__21891__auto__.shift();var args__21893__auto__ = orig__21891__auto__.map(cljs.reader.read_string);var raise = ((function (orig__21891__auto__,msg__21892__auto__,args__21893__auto__){
return (function (obj__21894__auto__,k__21895__auto__,v__21896__auto__){return _send(obj__21894__auto__,k__21895__auto__,cljs.core.pr_str.call(null,v__21896__auto__),"clj");
});})(orig__21891__auto__,msg__21892__auto__,args__21893__auto__))
;args__21893__auto__.unshift(msg__21892__auto__.obj);
return ((function (orig__21891__auto__,msg__21892__auto__,args__21893__auto__,raise){
return (function (obj_id,expr_checker_module,editor_text){delete require.cache[expr_checker_module];
var lt__$1 = require(expr_checker_module);return raise.call(null,obj_id,new cljs.core.Keyword(null,"exprs-check-complete","exprs-check-complete",4114379871),lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text(editor_text));
});})(orig__21891__auto__,msg__21892__auto__,args__21893__auto__,raise))
.apply(null,args__21893__auto__);
}));
lt.plugins.lt_clojure_linter.__BEH__do_lint = (function __BEH__do_lint(obj,editor_text,callback){return lt.plugins.lt_clojure_linter.bg_expr_check.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),callback),lt.plugins.lt_clojure_linter.expr_checker_module.call(null),editor_text);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.__BEH__do_lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-clojure-linter","run-dis","lt.plugins.lt-clojure-linter/run-dis",4409260254),new cljs.core.Keyword(null,"desc","desc",1016984067),"Idiocheck: Run dis 2",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var forms = lt.plugins.lt_clojure_linter.read_all_forms_in_editor.call(null,lt.objs.editor.__GT_val.call(null,ed));return cljs.core.map.call(null,cljs.core.comp.call(null,lt.plugins.lt_clojure_linter.__GT_linter_result,kibit.check_expr),forms);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt-clojure-linter_compiled.js.map