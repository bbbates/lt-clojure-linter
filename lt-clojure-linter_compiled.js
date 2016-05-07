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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__26346){var vec__26347 = p__26346;var k = cljs.core.nth.call(null,vec__26347,0,null);var v = cljs.core.nth.call(null,vec__26347,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__26350){var vec__26351 = p__26350;var k = cljs.core.nth.call(null,vec__26351,0,null);var v = cljs.core.nth.call(null,vec__26351,1,null);if((k instanceof cljs.core.Keyword))
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
cljs.core.logic.IUnifyTerms = (function (){var obj26191 = {};return obj26191;
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
cljs.core.logic.IUnifyWithNil = (function (){var obj26193 = {};return obj26193;
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
cljs.core.logic.IUnifyWithObject = (function (){var obj26195 = {};return obj26195;
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
cljs.core.logic.IUnifyWithLVar = (function (){var obj26197 = {};return obj26197;
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
cljs.core.logic.IUnifyWithLSeq = (function (){var obj26199 = {};return obj26199;
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
cljs.core.logic.IUnifyWithSequential = (function (){var obj26201 = {};return obj26201;
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
cljs.core.logic.IUnifyWithMap = (function (){var obj26203 = {};return obj26203;
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
cljs.core.logic.IReifyTerm = (function (){var obj26205 = {};return obj26205;
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
cljs.core.logic.IWalkTerm = (function (){var obj26207 = {};return obj26207;
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
cljs.core.logic.IOccursCheckTerm = (function (){var obj26209 = {};return obj26209;
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
cljs.core.logic.IBuildTerm = (function (){var obj26211 = {};return obj26211;
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
cljs.core.logic.IBind = (function (){var obj26213 = {};return obj26213;
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
cljs.core.logic.IMPlus = (function (){var obj26215 = {};return obj26215;
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
cljs.core.logic.ITake = (function (){var obj26217 = {};return obj26217;
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
cljs.core.logic.IPair = (function (){var obj26219 = {};return obj26219;
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
var ___$1 = this;var pred__26220 = cljs.core._EQ__EQ_;var expr__26221 = i;if(cljs.core.truth_(pred__26220.call(null,0,expr__26221)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__26220.call(null,1,expr__26221)))
{return self__.rhs;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var pred__26223 = cljs.core._EQ__EQ_;var expr__26224 = i;if(cljs.core.truth_(pred__26223.call(null,0,expr__26224)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__26223.call(null,1,expr__26224)))
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
cljs.core.logic.ISubstitutions = (function (){var obj26227 = {};return obj26227;
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
cljs.core.logic.not_found = (function (){var obj26229 = {};return obj26229;
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
var G__26286 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__26286;
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
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (l,p__26232){var vec__26233 = p__26232;var k = cljs.core.nth.call(null,vec__26233,0,null);var v__$1 = cljs.core.nth.call(null,vec__26233,1,null);return cljs.core.conj.call(null,l,cljs.core.logic.pair.call(null,k,v__$1));
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
cljs.core.logic.LConsSeq = (function (){var obj26235 = {};return obj26235;
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
var G__26287 = cljs.core.logic._lnext.call(null,v__$2);
var G__26288 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__26287;
s__$1 = G__26288;
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
var G__26289 = cljs.core.logic._lnext.call(null,v__$2);
var G__26290 = x__$1;
var G__26291 = s__$1;
v__$2 = G__26289;
x__$1 = G__26290;
s__$1 = G__26291;
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
var G__26292 = cljs.core.logic._lnext.call(null,me);
var G__26293 = cljs.core.logic._lnext.call(null,you);
me = G__26292;
you = G__26293;
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
var G__26294 = cljs.core.logic._lnext.call(null,u__$1);
var G__26295 = cljs.core.logic._lnext.call(null,v__$2);
var G__26296 = s__$2;
u__$1 = G__26294;
v__$2 = G__26295;
s__$1 = G__26296;
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
var G__26297 = cljs.core.logic._lnext.call(null,u__$1);
var G__26298 = cljs.core._next.call(null,v__$1);
var G__26299 = s__$2;
u__$1 = G__26297;
v__$1 = G__26298;
s__$1 = G__26299;
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
var G__26300 = cljs.core._next.call(null,u__$1);
var G__26301 = cljs.core._next.call(null,v__$1);
var G__26302 = s__$2;
u__$1 = G__26300;
v__$1 = G__26301;
s__$1 = G__26302;
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
cljs.core.logic.not_found = (function (){var obj26237 = {};return obj26237;
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
var G__26303 = cljs.core.next.call(null,ks);
var G__26304 = s__$2;
ks = G__26303;
s__$1 = G__26304;
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
var G__26305 = cljs.core.next.call(null,v__$1);
var G__26306 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__26305;
s__$1 = G__26306;
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
{var vec__26239 = cljs.core._first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__26239,0,null);var vfv = cljs.core.nth.call(null,vec__26239,1,null);{
var G__26307 = cljs.core._next.call(null,v__$1);
var G__26308 = cljs.core._assoc_BANG_.call(null,r,vfk,cljs.core.logic._walk_STAR_.call(null,s,vfv));
v__$1 = G__26307;
r = G__26308;
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
var G__26309 = cljs.core._next.call(null,v__$2);
var G__26310 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.first.call(null,v__$2)));
v__$2 = G__26309;
r = G__26310;
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
{return cljs.core.map.call(null,(function (p1__26240_SHARP_){return cljs.core.logic._walk_STAR_.call(null,s,p1__26240_SHARP_);
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
var G__26311 = cljs.core._next.call(null,v__$1);
var G__26312 = x__$1;
var G__26313 = s__$1;
v__$1 = G__26311;
x__$1 = G__26312;
s__$1 = G__26313;
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
cljs.core.logic.mplus = (function mplus(a,f){if((function (){var G__26242 = a;if(G__26242)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__26242.cljs$core$logic$IMPlus$;
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
cljs.core.logic.take_STAR_ = (function take_STAR_(x){if((function (){var G__26244 = x;if(G__26244)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__26244.cljs$core$logic$ITake$;
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
cljs.core.logic.Inc.prototype.apply = (function (self__,args26245){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26245)));
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
cljs.core.logic.IIfA = (function (){var obj26247 = {};return obj26247;
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
cljs.core.logic.IIfU = (function (){var obj26249 = {};return obj26249;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__26251 = gs;var vec__26252 = G__26251;var g0 = cljs.core.nth.call(null,vec__26252,0,null);var gr = cljs.core.nthnext.call(null,vec__26252,1);var b__$3 = b__$2;var G__26251__$1 = G__26251;while(true){
var b__$4 = b__$3;var vec__26253 = G__26251__$1;var g0__$1 = cljs.core.nth.call(null,vec__26253,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__26253,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__26314 = b__$5;
var G__26315 = gr__$1;
b__$3 = G__26314;
G__26251__$1 = G__26315;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__26255 = gs;var vec__26256 = G__26255;var g0 = cljs.core.nth.call(null,vec__26256,0,null);var gr = cljs.core.nthnext.call(null,vec__26256,1);var b__$3 = b__$2;var G__26255__$1 = G__26255;while(true){
var b__$4 = b__$3;var vec__26257 = G__26255__$1;var g0__$1 = cljs.core.nth.call(null,vec__26257,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__26257,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__26316 = b__$5;
var G__26317 = gr__$1;
b__$3 = G__26316;
G__26255__$1 = G__26317;
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
cljs.core.logic.membero = (function membero(x,l){return (function (a26259){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a26259,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,a__21254__auto__,((function (tail){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,x,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(tail))
);
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a26259,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (head,tail){
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
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a26261){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a26261,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,(function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4090__auto__))
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
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a26261,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (a,d){
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
cljs.core.logic.IUnifyWithPMap = (function (){var obj26263 = {};return obj26263;
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
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k26265,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k26265,else__20392__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__26264){var self__ = this;
var this__20396__auto____$1 = this;var pred__26267 = cljs.core.keyword_identical_QMARK_;var expr__26268 = k__20397__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__26264),null));
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
var G__26318 = cljs.core.next.call(null,ks);
var G__26319 = s__$2;
ks = G__26318;
s__$1 = G__26319;
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
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__26264){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.logic.PMap(G__26264,self__.__extmap,self__.__hash));
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
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__26266){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__26266)));
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
{var vec__26271 = expr__$1;var f = cljs.core.nth.call(null,vec__26271,0,null);var n = cljs.core.nthnext.call(null,vec__26271,1);var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",-1640531481,null));var tail = prep_STAR_.call(null,n,store,lcons_QMARK_,skip);if(skip)
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
var G__26320__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier_STAR_,unifier_STAR_.call(null,u,w),ts);
};
var G__26320 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26320__delegate.call(this,u,w,ts);};
G__26320.cljs$lang$maxFixedArity = 2;
G__26320.cljs$lang$applyTo = (function (arglist__26321){
var u = cljs.core.first(arglist__26321);
arglist__26321 = cljs.core.next(arglist__26321);
var w = cljs.core.first(arglist__26321);
var ts = cljs.core.rest(arglist__26321);
return G__26320__delegate(u,w,ts);
});
G__26320.cljs$core$IFn$_invoke$arity$variadic = G__26320__delegate;
return G__26320;
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
return (function (p__26274){var vec__26275 = p__26274;var k = cljs.core.nth.call(null,vec__26275,0,null);var v = cljs.core.nth.call(null,vec__26275,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify.call(null,s,v)], null);
});})(lvars,s))
,lvars));
}
});
var binding_map_STAR___3 = (function() { 
var G__26322__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map_STAR_,binding_map_STAR_.call(null,u,w),ts);
};
var G__26322 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26322__delegate.call(this,u,w,ts);};
G__26322.cljs$lang$maxFixedArity = 2;
G__26322.cljs$lang$applyTo = (function (arglist__26323){
var u = cljs.core.first(arglist__26323);
arglist__26323 = cljs.core.next(arglist__26323);
var w = cljs.core.first(arglist__26323);
var ts = cljs.core.rest(arglist__26323);
return G__26322__delegate(u,w,ts);
});
G__26322.cljs$core$IFn$_invoke$arity$variadic = G__26322__delegate;
return G__26322;
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
var G__26324__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier,unifier.call(null,u,w),ts);
};
var G__26324 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26324__delegate.call(this,u,w,ts);};
G__26324.cljs$lang$maxFixedArity = 2;
G__26324.cljs$lang$applyTo = (function (arglist__26325){
var u = cljs.core.first(arglist__26325);
arglist__26325 = cljs.core.next(arglist__26325);
var w = cljs.core.first(arglist__26325);
var ts = cljs.core.rest(arglist__26325);
return G__26324__delegate(u,w,ts);
});
G__26324.cljs$core$IFn$_invoke$arity$variadic = G__26324__delegate;
return G__26324;
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
var G__26326__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map,binding_map.call(null,u,w),ts);
};
var G__26326 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26326__delegate.call(this,u,w,ts);};
G__26326.cljs$lang$maxFixedArity = 2;
G__26326.cljs$lang$applyTo = (function (arglist__26327){
var u = cljs.core.first(arglist__26327);
arglist__26327 = cljs.core.next(arglist__26327);
var w = cljs.core.first(arglist__26327);
var ts = cljs.core.rest(arglist__26327);
return G__26326__delegate(u,w,ts);
});
G__26326.cljs$core$IFn$_invoke$arity$variadic = G__26326__delegate;
return G__26326;
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
kibit.rules.util.compile_rule = (function compile_rule(rule){var vec__29689 = cljs.core.logic.prep.call(null,rule);var pat = cljs.core.nth.call(null,vec__29689,0,null);var alt = cljs.core.nth.call(null,vec__29689,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__29689,pat,alt){
return (function (expr){return ((function (vec__29689,pat,alt){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,expr,pat);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(vec__29689,pat,alt))
});})(vec__29689,pat,alt))
,((function (vec__29689,pat,alt){
return (function (sbst){return ((function (vec__29689,pat,alt){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,sbst,alt);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(vec__29689,pat,alt))
});})(vec__29689,pat,alt))
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
var rules__21590__auto___29757 = (function (){var iter__20520__auto__ = (function iter__29726(s__29727){return (new cljs.core.LazySeq(null,(function (){var s__29727__$1 = s__29727;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29727__$1);if(temp__4092__auto__)
{var s__29727__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29727__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__29727__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__29729 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__29728 = 0;while(true){
if((i__29728 < size__20519__auto__))
{var rule__21591__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__29728);cljs.core.chunk_append.call(null,b__29729,kibit.rules.util.compile_rule.call(null,rule__21591__auto__));
{
var G__29758 = (i__29728 + 1);
i__29728 = G__29758;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29729),iter__29726.call(null,cljs.core.chunk_rest.call(null,s__29727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29729),null);
}
} else
{var rule__21591__auto__ = cljs.core.first.call(null,s__29727__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21591__auto__),iter__29726.call(null,cljs.core.rest.call(null,s__29727__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),cljs.core.list(new cljs.core.Symbol(null,"interpose","interpose",-1137596122,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",640354914,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),cljs.core.list(new cljs.core.Symbol(null,"reverse","reverse",-540685157,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol("clojure.string","reverse","clojure.string/reverse",-124256342,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",640354914,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",1573062323,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",1573062323,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",2113019871,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null)),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)))),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)))),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"ffirst","ffirst",1377082307,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"fnext","fnext",-1542954478,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"nnext","nnext",-1535566310,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"next","next",-1637153620,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"nfirst","nfirst",1606115515,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,".toString",".toString",-661012909,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-1636995411,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-110723002,null),new cljs.core.Symbol(null,"?pred","?pred",-1578900327,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"with-meta","with-meta",-774206363,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"?f","?f",-1640529472,null),cljs.core.list(new cljs.core.Symbol(null,"meta","meta",-1637183554,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?arg","?arg",-1638557840,null))),cljs.core.list(new cljs.core.Symbol(null,"vary-meta","vary-meta",-1312644487,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?f","?f",-1640529472,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?arg","?arg",-1638557840,null))], null)));
})();kibit.rules.misc.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21590__auto___29757,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fun = cljs.core.logic.lvar.call(null);var args = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (fun,args,rules__21590__auto___29757){
return (function (expr){return ((function (fun,args,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (fun,args,rules__21590__auto___29757){
return (function (a29730){return (new cljs.core.logic.Inc(((function (fun,args,rules__21590__auto___29757){
return (function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a29730,((function (fun,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,expr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.lcons.call(null,fun,args)),args),new cljs.core.Symbol(null,"fn","fn",-1640528255,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(fun,args,rules__21590__auto___29757))
),(new cljs.core.logic.Inc(((function (fun,args,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a29730,((function (fun,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,expr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.lcons.call(null,fun,args)),args),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(fun,args,rules__21590__auto___29757))
);
});})(fun,args,rules__21590__auto___29757))
)));
});})(fun,args,rules__21590__auto___29757))
));
});})(fun,args,rules__21590__auto___29757))
),((function (fun,args,rules__21590__auto___29757){
return (function (a29731){var fun__$1 = cljs.core.logic._walk_STAR_.call(null,a29731,fun);return ((function (fun__$1,fun,args,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (fun__$1,fun,args,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (fun__$1,fun,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,((function (fun__$1,fun,args,rules__21590__auto___29757){
return (function (p1__29716_SHARP_){return ((p1__29716_SHARP_ instanceof cljs.core.Keyword)) || (((p1__29716_SHARP_ instanceof cljs.core.Symbol)) && (cljs.core.not_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [".",null,"/",null], null), null),[cljs.core.str(p1__29716_SHARP_)].join(''))));
});})(fun__$1,fun,args,rules__21590__auto___29757))
.call(null,fun__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(fun__$1,fun,args,rules__21590__auto___29757))
);
});})(fun__$1,fun,args,rules__21590__auto___29757))
));
});})(fun__$1,fun,args,rules__21590__auto___29757))
.call(null,a29731);
});})(fun,args,rules__21590__auto___29757))
);
});
;})(fun,args,rules__21590__auto___29757))
});})(fun,args,rules__21590__auto___29757))
,((function (fun,args,rules__21590__auto___29757){
return (function (p1__29717_SHARP_){return ((function (fun,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29717_SHARP_,fun);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(fun,args,rules__21590__auto___29757))
});})(fun,args,rules__21590__auto___29757))
], null);
})(),(function (){var obj = cljs.core.logic.lvar.call(null);var method = cljs.core.logic.lvar.call(null);var args = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (obj,method,args,rules__21590__auto___29757){
return (function (p1__29718_SHARP_){return ((function (obj,method,args,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (obj,method,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29718_SHARP_,cljs.core.logic.lcons.call(null,new cljs.core.Symbol(null,".",".",-1640531481,null),cljs.core.logic.lcons.call(null,obj,cljs.core.logic.lcons.call(null,method,args))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(obj,method,args,rules__21590__auto___29757))
),((function (obj,method,args,rules__21590__auto___29757){
return (function (a29732){var obj__$1 = cljs.core.logic._walk_STAR_.call(null,a29732,obj);return ((function (obj__$1,obj,method,args,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (obj__$1,obj,method,args,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (obj__$1,obj,method,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.complement.call(null,kibit.rules.misc.class_symbol_QMARK_).call(null,obj__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(obj__$1,obj,method,args,rules__21590__auto___29757))
);
});})(obj__$1,obj,method,args,rules__21590__auto___29757))
));
});})(obj__$1,obj,method,args,rules__21590__auto___29757))
.call(null,a29732);
});})(obj,method,args,rules__21590__auto___29757))
);
});
;})(obj,method,args,rules__21590__auto___29757))
});})(obj,method,args,rules__21590__auto___29757))
,((function (obj,method,args,rules__21590__auto___29757){
return (function (p1__29719_SHARP_){return ((function (obj,method,args,rules__21590__auto___29757){
return (function (a29733){var method__$1 = cljs.core.logic._walk_STAR_.call(null,a29733,method);var args__$1 = cljs.core.logic._walk_STAR_.call(null,a29733,args);return ((function (method__$1,args__$1,obj,method,args,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (method__$1,args__$1,obj,method,args,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,(function (){var s_QMARK_ = cljs.core.seq_QMARK_.call(null,method__$1);var args__$2 = ((s_QMARK_)?cljs.core.rest.call(null,method__$1):args__$1);var method__$2 = ((s_QMARK_)?cljs.core.first.call(null,method__$1):method__$1);return ((function (s_QMARK_,args__$2,method__$2,method__$1,args__$1,obj,method,args,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29719_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,[cljs.core.str("."),cljs.core.str(method__$2)].join(''))),cljs.core._conj.call(null,cljs.core.List.EMPTY,obj),args__$2))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(s_QMARK_,args__$2,method__$2,method__$1,args__$1,obj,method,args,rules__21590__auto___29757))
})());
});})(method__$1,args__$1,obj,method,args,rules__21590__auto___29757))
));
});})(method__$1,args__$1,obj,method,args,rules__21590__auto___29757))
.call(null,a29733);
});
;})(obj,method,args,rules__21590__auto___29757))
});})(obj,method,args,rules__21590__auto___29757))
], null);
})(),(function (){var args = cljs.core.logic.lvar.call(null);var klass = cljs.core.logic.lvar.call(null);var static_method = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (args,klass,static_method,rules__21590__auto___29757){
return (function (p1__29720_SHARP_){return ((function (args,klass,static_method,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (args,klass,static_method,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29720_SHARP_,cljs.core.logic.lcons.call(null,new cljs.core.Symbol(null,".",".",-1640531481,null),cljs.core.logic.lcons.call(null,klass,cljs.core.logic.lcons.call(null,static_method,args))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(args,klass,static_method,rules__21590__auto___29757))
),((function (args,klass,static_method,rules__21590__auto___29757){
return (function (a29734){var klass__$1 = cljs.core.logic._walk_STAR_.call(null,a29734,klass);return ((function (klass__$1,args,klass,static_method,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (klass__$1,args,klass,static_method,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (klass__$1,args,klass,static_method,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,kibit.rules.misc.class_symbol_QMARK_.call(null,klass__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(klass__$1,args,klass,static_method,rules__21590__auto___29757))
);
});})(klass__$1,args,klass,static_method,rules__21590__auto___29757))
));
});})(klass__$1,args,klass,static_method,rules__21590__auto___29757))
.call(null,a29734);
});})(args,klass,static_method,rules__21590__auto___29757))
);
});
;})(args,klass,static_method,rules__21590__auto___29757))
});})(args,klass,static_method,rules__21590__auto___29757))
,((function (args,klass,static_method,rules__21590__auto___29757){
return (function (p1__29721_SHARP_){return ((function (args,klass,static_method,rules__21590__auto___29757){
return (function (a29735){var klass__$1 = cljs.core.logic._walk_STAR_.call(null,a29735,klass);var static_method__$1 = cljs.core.logic._walk_STAR_.call(null,a29735,static_method);var args__$1 = cljs.core.logic._walk_STAR_.call(null,a29735,args);return ((function (klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,(function (){var s_QMARK_ = cljs.core.seq_QMARK_.call(null,static_method__$1);var args__$2 = ((s_QMARK_)?cljs.core.rest.call(null,static_method__$1):args__$1);var static_method__$2 = ((s_QMARK_)?cljs.core.first.call(null,static_method__$1):static_method__$1);return ((function (s_QMARK_,args__$2,static_method__$2,klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29721_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,[cljs.core.str(klass__$1),cljs.core.str("/"),cljs.core.str(static_method__$2)].join(''))),args__$2))));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
;})(s_QMARK_,args__$2,static_method__$2,klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21590__auto___29757))
})());
});})(klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21590__auto___29757))
));
});})(klass__$1,static_method__$1,args__$1,args,klass,static_method,rules__21590__auto___29757))
.call(null,a29735);
});
;})(args,klass,static_method,rules__21590__auto___29757))
});})(args,klass,static_method,rules__21590__auto___29757))
], null);
})(),(function (){var arg = cljs.core.logic.lvar.call(null);var form = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (arg,form,rules__21590__auto___29757){
return (function (p1__29722_SHARP_){return ((function (arg,form,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,a__21306__auto__,((function (arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29722_SHARP_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),arg),new cljs.core.Symbol(null,"->","->",-1640530070,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(arg,form,rules__21590__auto___29757))
);
});
;})(arg,form,rules__21590__auto___29757))
});})(arg,form,rules__21590__auto___29757))
,((function (arg,form,rules__21590__auto___29757){
return (function (sbst){return ((function (arg,form,rules__21590__auto___29757){
return (function (a29736){return (new cljs.core.logic.Inc(((function (arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a29736,((function (arg,form,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (arg,form,rules__21590__auto___29757){
return (function (a29737){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a29737,form);return ((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (p1__29723_SHARP_){return ((p1__29723_SHARP_ instanceof cljs.core.Symbol)) || ((p1__29723_SHARP_ instanceof cljs.core.Keyword));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(form__$1,arg,form,rules__21590__auto___29757))
);
});})(form__$1,arg,form,rules__21590__auto___29757))
));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,a29737);
});})(arg,form,rules__21590__auto___29757))
),((function (arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,sbst,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg),form));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(arg,form,rules__21590__auto___29757))
);
});})(arg,form,rules__21590__auto___29757))
),(new cljs.core.logic.Inc(((function (arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a29736,((function (arg,form,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (arg,form,rules__21590__auto___29757){
return (function (a29738){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a29738,form);return ((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.seq_QMARK_.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(form__$1,arg,form,rules__21590__auto___29757))
);
});})(form__$1,arg,form,rules__21590__auto___29757))
));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,a29738);
});})(arg,form,rules__21590__auto___29757))
),((function (arg,form,rules__21590__auto___29757){
return (function (a29739){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a29739,form);return ((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,sbst,cljs.core.list_STAR_.call(null,cljs.core.first.call(null,form__$1),arg,cljs.core.rest.call(null,form__$1)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(form__$1,arg,form,rules__21590__auto___29757))
);
});})(form__$1,arg,form,rules__21590__auto___29757))
));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,a29739);
});})(arg,form,rules__21590__auto___29757))
);
});})(arg,form,rules__21590__auto___29757))
);
});})(arg,form,rules__21590__auto___29757))
)));
});})(arg,form,rules__21590__auto___29757))
));
});
;})(arg,form,rules__21590__auto___29757))
});})(arg,form,rules__21590__auto___29757))
], null);
})(),(function (){var arg = cljs.core.logic.lvar.call(null);var form = cljs.core.logic.lvar.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (arg,form,rules__21590__auto___29757){
return (function (p1__29724_SHARP_){return ((function (arg,form,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,a__21306__auto__,((function (arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,p1__29724_SHARP_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),arg),new cljs.core.Symbol(null,"->>","->>",-1640486298,null)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(arg,form,rules__21590__auto___29757))
);
});
;})(arg,form,rules__21590__auto___29757))
});})(arg,form,rules__21590__auto___29757))
,((function (arg,form,rules__21590__auto___29757){
return (function (sbst){return ((function (arg,form,rules__21590__auto___29757){
return (function (a29740){return (new cljs.core.logic.Inc(((function (arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a29740,((function (arg,form,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (arg,form,rules__21590__auto___29757){
return (function (a29741){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a29741,form);return ((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (p1__29725_SHARP_){return ((p1__29725_SHARP_ instanceof cljs.core.Symbol)) || ((p1__29725_SHARP_ instanceof cljs.core.Keyword));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(form__$1,arg,form,rules__21590__auto___29757))
);
});})(form__$1,arg,form,rules__21590__auto___29757))
));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,a29741);
});})(arg,form,rules__21590__auto___29757))
),((function (arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,sbst,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg),form));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(arg,form,rules__21590__auto___29757))
);
});})(arg,form,rules__21590__auto___29757))
),(new cljs.core.logic.Inc(((function (arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a29740,((function (arg,form,rules__21590__auto___29757){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,((function (arg,form,rules__21590__auto___29757){
return (function (a29742){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a29742,form);return ((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.seq_QMARK_.call(null,form__$1),true);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(form__$1,arg,form,rules__21590__auto___29757))
);
});})(form__$1,arg,form,rules__21590__auto___29757))
));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,a29742);
});})(arg,form,rules__21590__auto___29757))
),((function (arg,form,rules__21590__auto___29757){
return (function (a29743){var form__$1 = cljs.core.logic._walk_STAR_.call(null,a29743,form);return ((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21254__auto__){return (new cljs.core.logic.Inc(((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto__,((function (form__$1,arg,form,rules__21590__auto___29757){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,sbst,cljs.core.concat.call(null,form__$1,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg)));if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(form__$1,arg,form,rules__21590__auto___29757))
);
});})(form__$1,arg,form,rules__21590__auto___29757))
));
});})(form__$1,arg,form,rules__21590__auto___29757))
.call(null,a29743);
});})(arg,form,rules__21590__auto___29757))
);
});})(arg,form,rules__21590__auto___29757))
);
});})(arg,form,rules__21590__auto___29757))
)));
});})(arg,form,rules__21590__auto___29757))
));
});
;})(arg,form,rules__21590__auto___29757))
});})(arg,form,rules__21590__auto___29757))
], null);
})()], null)));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.collections')) {
goog.provide('kibit.rules.collections');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21590__auto___29714 = (function (){var iter__20520__auto__ = (function iter__29700(s__29701){return (new cljs.core.LazySeq(null,(function (){var s__29701__$1 = s__29701;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29701__$1);if(temp__4092__auto__)
{var s__29701__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29701__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__29701__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__29703 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__29702 = 0;while(true){
if((i__29702 < size__20519__auto__))
{var rule__21591__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__29702);cljs.core.chunk_append.call(null,b__29703,kibit.rules.util.compile_rule.call(null,rule__21591__auto__));
{
var G__29715 = (i__29702 + 1);
i__29702 = G__29715;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29703),iter__29700.call(null,cljs.core.chunk_rest.call(null,s__29701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29703),null);
}
} else
{var rule__21591__auto__ = cljs.core.first.call(null,s__29701__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21591__auto__),iter__29700.call(null,cljs.core.rest.call(null,s__29701__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1637472031,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",1834048252,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",-1640414899,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null)),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key0","?key0",-1579061207,null),new cljs.core.Symbol(null,"?key1","?key1",-1579061206,null)], null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"?key","?key",-1638548615,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null),cljs.core.list(new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?key","?key",-1638548615,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?key","?key",-1638548615,null)], null),new cljs.core.Symbol(null,"?fn","?fn",-1640467712,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",705189474,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?keys","?keys",-1579061140,null),new cljs.core.Symbol(null,"assoc","assoc",-1547409970,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-2005053546,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null),new cljs.core.Symbol(null,"?keys","?keys",-1579061140,null),new cljs.core.Symbol(null,"?val","?val",-1638538181,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null)),cljs.core.list(new cljs.core.Symbol(null,"set","set",-1640417765,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"take","take",-1636979136,null),new cljs.core.Symbol(null,"?n","?n",-1640529464,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",-480456640,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",-480456640,null),new cljs.core.Symbol(null,"?n","?n",-1640529464,null),new cljs.core.Symbol(null,"?coll","?coll",-1579290268,null))], null)));
})();kibit.rules.collections.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21590__auto___29714,cljs.core.PersistentVector.EMPTY));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.control-structures')) {
goog.provide('kibit.rules.control_structures');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21590__auto___29686 = (function (){var iter__20520__auto__ = (function iter__29672(s__29673){return (new cljs.core.LazySeq(null,(function (){var s__29673__$1 = s__29673;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29673__$1);if(temp__4092__auto__)
{var s__29673__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29673__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__29673__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__29675 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__29674 = 0;while(true){
if((i__29674 < size__20519__auto__))
{var rule__21591__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__29674);cljs.core.chunk_append.call(null,b__29675,kibit.rules.util.compile_rule.call(null,rule__21591__auto__));
{
var G__29687 = (i__29674 + 1);
i__29674 = G__29687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29675),iter__29672.call(null,cljs.core.chunk_rest.call(null,s__29673__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29675),null);
}
} else
{var rule__21591__auto__ = cljs.core.first.call(null,s__29673__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21591__auto__),iter__29672.call(null,cljs.core.rest.call(null,s__29673__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),null),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),null,new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null)),cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1461176100,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,"?expr","?expr",-1579221907,null),null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",401149633,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,"?expr","?expr",-1579221907,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",1461178332,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),new cljs.core.Symbol(null,"?z","?z",-1640529452,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",401151865,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),new cljs.core.Symbol(null,"?test","?test",-1578793206,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",-1532142362,null)))),cljs.core.list(new cljs.core.Symbol(null,"while","while",-1527429910,null),new cljs.core.Symbol(null,"?test","?test",-1578793206,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",-1640528316,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",-1637203875,null),new cljs.core.Symbol(null,"?binding","?binding",674116383,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?exprs","?exprs",260066808,null))], null)));
})();kibit.rules.control_structures.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21590__auto___29686,cljs.core.PersistentVector.EMPTY));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.equality')) {
goog.provide('kibit.rules.equality');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21590__auto___29670 = (function (){var iter__20520__auto__ = (function iter__29656(s__29657){return (new cljs.core.LazySeq(null,(function (){var s__29657__$1 = s__29657;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29657__$1);if(temp__4092__auto__)
{var s__29657__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29657__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__29657__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__29659 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__29658 = 0;while(true){
if((i__29658 < size__20519__auto__))
{var rule__21591__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__29658);cljs.core.chunk_append.call(null,b__29659,kibit.rules.util.compile_rule.call(null,rule__21591__auto__));
{
var G__29671 = (i__29658 + 1);
i__29658 = G__29671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29659),iter__29656.call(null,cljs.core.chunk_rest.call(null,s__29657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29659),null);
}
} else
{var rule__21591__auto__ = cljs.core.first.call(null,s__29657__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21591__auto__),iter__29656.call(null,cljs.core.rest.call(null,s__29657__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"==","==",-1640529575,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"==","==",-1640529575,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),0,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1529891286,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",1372554549,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),null,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null)));
})();kibit.rules.equality.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21590__auto___29670,cljs.core.PersistentVector.EMPTY));
}
if(!lt.util.load.provided_QMARK_('kibit.rules.arithmetic')) {
goog.provide('kibit.rules.arithmetic');
goog.require('cljs.core');
goog.require('kibit.rules.util');
var rules__21590__auto___29654 = (function (){var iter__20520__auto__ = (function iter__29640(s__29641){return (new cljs.core.LazySeq(null,(function (){var s__29641__$1 = s__29641;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29641__$1);if(temp__4092__auto__)
{var s__29641__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29641__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__29641__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__29643 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__29642 = 0;while(true){
if((i__29642 < size__20519__auto__))
{var rule__21591__auto__ = cljs.core._nth.call(null,c__20518__auto__,i__29642);cljs.core.chunk_append.call(null,b__29643,kibit.rules.util.compile_rule.call(null,rule__21591__auto__));
{
var G__29655 = (i__29642 + 1);
i__29642 = G__29655;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29643),iter__29640.call(null,cljs.core.chunk_rest.call(null,s__29641__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29643),null);
}
} else
{var rule__21591__auto__ = cljs.core.first.call(null,s__29641__$2);return cljs.core.cons.call(null,kibit.rules.util.compile_rule.call(null,rule__21591__auto__),iter__29640.call(null,cljs.core.rest.call(null,s__29641__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20520__auto__.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),1,new cljs.core.Symbol(null,"?x","?x",-1640529454,null)),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-1640432197,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,".",".",-1640531481,null),new cljs.core.Symbol(null,"?xs","?xs",-1640467149,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),1),new cljs.core.Symbol(null,"?x","?x",-1640529454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0),0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("Math","sqrt","Math/sqrt",-1481562997,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",-1488621581,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),2),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",-1488621581,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null),2))),cljs.core.list(new cljs.core.Symbol("Math","hypot","Math/hypot",-1384785649,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),new cljs.core.Symbol(null,"?y","?y",-1640529453,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-1640432197,null),cljs.core.list(new cljs.core.Symbol("Math","exp","Math/exp",-1488676984,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))),cljs.core.list(new cljs.core.Symbol("Math","expm1","Math/expm1",-1392337428,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null),0.5)),cljs.core.list(new cljs.core.Symbol("Math","round","Math/round",-1375834311,null),new cljs.core.Symbol(null,"?x","?x",-1640529454,null))], null)));
})();kibit.rules.arithmetic.rules = cljs.core.vec.call(null,cljs.core.concat.call(null,rules__21590__auto___29654,cljs.core.PersistentVector.EMPTY));
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
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj29575 = {};return obj29575;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj29577 = {};return obj29577;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj29579 = {};return obj29579;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj29581 = {};return obj29581;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj29583 = {};return obj29583;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){return b;
});
var add_BANG___2 = (function (b,itm){if(!((itm == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"itm","itm",-1640426917,null)))))].join('')));
}
return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj29585 = {};return obj29585;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__29521 = (cnt + 1);
cnt = G__29521;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__20651__auto__ = self__.length;var x = 0;while(true){
if((x < n__20651__auto__))
{var v_29522 = this$.pop();if(keep_QMARK_.call(null,v_29522))
{this$.unshift(v_29522);
} else
{}
{
var G__29523 = (x + 1);
x = G__29523;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;self__.buf.unbounded_unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{} else
{self__.buf.unshift(itm);
}
return this$__$1;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
self__.buf.unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_29571 = 0;while(true){
var m_29572 = cljs.core.async.impl.dispatch.tasks.pop();if((m_29572 == null))
{} else
{m_29572.call(null);
if((count_29571 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__29573 = (count_29571 + 1);
count_29571 = G__29573;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19791__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19791__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t29527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t29527 = (function (val,box,meta29528){
this.val = val;
this.box = box;
this.meta29528 = meta29528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t29527.cljs$lang$type = true;
cljs.core.async.impl.channels.t29527.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t29527";
cljs.core.async.impl.channels.t29527.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t29527");
});
cljs.core.async.impl.channels.t29527.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t29527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29529){var self__ = this;
var _29529__$1 = this;return self__.meta29528;
});
cljs.core.async.impl.channels.t29527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29529,meta29528__$1){var self__ = this;
var _29529__$1 = this;return (new cljs.core.async.impl.channels.t29527(self__.val,self__.box,meta29528__$1));
});
cljs.core.async.impl.channels.__GT_t29527 = (function __GT_t29527(val__$1,box__$1,meta29528){return (new cljs.core.async.impl.channels.t29527(val__$1,box__$1,meta29528));
});
}
return (new cljs.core.async.impl.channels.t29527(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20373__auto__,writer__20374__auto__,opts__20375__auto__){return cljs.core._write.call(null,writer__20374__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;
cljs.core.async.impl.channels.MMC = (function (){var obj29531 = {};return obj29531;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (self__.puts.length === 0);
} else
{return and__19791__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_29546 = self__.takes.pop();if((taker_29546 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29546))
{var take_cb_29547 = cljs.core.async.impl.protocols.commit.call(null,taker_29546);var val_29548 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29547,val_29548,taker_29546,this$__$1){
return (function (){return take_cb_29547.call(null,val_29548);
});})(take_cb_29547,val_29548,taker_29546,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf)))
{} else
{var putter_29549 = self__.puts.pop();if((putter_29549 == null))
{} else
{var put_handler_29550 = putter_29549.handler;var val_29551 = putter_29549.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29550))
{var put_cb_29552 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29550);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29552,put_handler_29550,val_29551,putter_29549,_,retval,this$__$1){
return (function (){return put_cb_29552.call(null,true);
});})(put_cb_29552,put_handler_29550,val_29551,putter_29549,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_29551)))
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__19791__auto__;
}
})()))
{var has_val = (function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})();var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);return cljs.core.async.impl.channels.box.call(null,val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__19791__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > 0)) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var taker_29553 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29553))
{var take_cb_29554 = cljs.core.async.impl.protocols.commit.call(null,taker_29553);var val_29555__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29554,val_29555__$1,taker_29553,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_29554.call(null,val_29555__$1);
});})(take_cb_29554,val_29555__$1,taker_29553,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
return cljs.core.async.impl.channels.box.call(null,true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_29556 = self__.puts.pop();if((putter_29556 == null))
{} else
{var put_handler_29557 = putter_29556.handler;var val_29558 = putter_29556.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29557))
{var put_cb_29559 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29557);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29559,put_handler_29557,val_29558,putter_29556,this$__$1){
return (function (){return put_cb_29559.call(null,true);
});})(put_cb_29559,put_handler_29557,val_29558,putter_29556,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly.call(null,false));
return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__19803__auto__ = exh;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.call(null,buf,null);
});
var chan__2 = (function (buf,xform){return chan.call(null,buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__29560 = null;
var G__29560__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e29534){var t = e29534;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__29560__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e29535){var t = e29535;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__29560 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__29560__1.call(this,buf__$1);
case 2:
return G__29560__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29560;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__29606 = (level + 1);
level = G__29606;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_29607 = 0;while(true){
if((i_29607 < arr.length))
{(arr[i_29607] = null);
{
var G__29608 = (i_29607 + 1);
i_29607 = G__29608;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__29609 = x_SINGLEQUOTE_;
x__$1 = G__29609;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__29610 = x__$1;
var G__29611 = k;
var G__29612 = (level - 1);
var G__29613 = update;
x = G__29610;
k = G__29611;
level = G__29612;
update = G__29613;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_29614 = (self__.level + 1);while(true){
if((i_29614 <= (new_level + 1)))
{(update[i_29614] = self__.header);
{
var G__29615 = (i_29614 + 1);
i_29614 = G__29615;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_29616 = 0;while(true){
if((i_29616 <= self__.level))
{var links_29617 = (update[i_29616]).forward;if(((links_29617[i_29616]) === x__$1))
{(links_29617[i_29616] = (x__$1.forward[i_29616]));
{
var G__29618 = (i_29616 + 1);
i_29616 = G__29618;
continue;
}
} else
{{
var G__29619 = (i_29616 + 1);
i_29616 = G__29619;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__29620 = x_SINGLEQUOTE_;
x__$1 = G__29620;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__29621 = nx;
var G__29622 = (level__$1 - 1);
x = G__29621;
level__$1 = G__29622;
continue;
}
} else
{{
var G__29623 = x;
var G__29624 = (level__$1 - 1);
x = G__29623;
level__$1 = G__29624;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__29625 = x_SINGLEQUOTE_;
x__$1 = G__29625;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__29626 = nx;
var G__29627 = (level__$1 - 1);
x = G__29626;
level__$1 = G__29627;
continue;
}
} else
{{
var G__29628 = x;
var G__29629 = (level__$1 - 1);
x = G__29628;
level__$1 = G__29629;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__19803__auto__ = (cljs.core.truth_((function (){var and__19791__auto__ = me;if(cljs.core.truth_(and__19791__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__19791__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__19803__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__19803__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t29451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t29451 = (function (f,fn_handler,meta29452){
this.f = f;
this.fn_handler = fn_handler;
this.meta29452 = meta29452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t29451.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t29451.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t29451";
cljs.core.async.impl.ioc_helpers.t29451.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t29451");
});
cljs.core.async.impl.ioc_helpers.t29451.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t29451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t29451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t29451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29453){var self__ = this;
var _29453__$1 = this;return self__.meta29452;
});
cljs.core.async.impl.ioc_helpers.t29451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29453,meta29452__$1){var self__ = this;
var _29453__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t29451(self__.f,self__.fn_handler,meta29452__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t29451 = (function __GT_t29451(f__$1,fn_handler__$1,meta29452){return (new cljs.core.async.impl.ioc_helpers.t29451(f__$1,fn_handler__$1,meta29452));
});
}
return (new cljs.core.async.impl.ioc_helpers.t29451(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e29455){if((e29455 instanceof Object))
{var ex = e29455;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29455;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_29458_29501 = state;(statearr_29458_29501[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_29458_29501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_29459_29502 = state;(statearr_29459_29502[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_29459_29502[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_29462_29503 = state;(statearr_29462_29503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_29462_29503[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_29463_29504 = state;(statearr_29463_29504[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_29463_29504[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29464){var map__29469 = p__29464;var map__29469__$1 = ((cljs.core.seq_QMARK_.call(null,map__29469))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);var opts = map__29469__$1;var statearr_29470_29505 = state;(statearr_29470_29505[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__29469,map__29469__$1,opts){
return (function (val){var statearr_29471_29506 = state;(statearr_29471_29506[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29469,map__29469__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_29472_29507 = state;(statearr_29472_29507[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29464 = null;if (arguments.length > 3) {
  p__29464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29464);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29508){
var state = cljs.core.first(arglist__29508);
arglist__29508 = cljs.core.next(arglist__29508);
var cont_block = cljs.core.first(arglist__29508);
arglist__29508 = cljs.core.next(arglist__29508);
var ports = cljs.core.first(arglist__29508);
var p__29464 = cljs.core.rest(arglist__29508);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29464);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k29474,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k29474,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29474,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29474,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29474,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29474,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k29474,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__29473){var self__ = this;
var this__20396__auto____$1 = this;var pred__29476 = cljs.core.keyword_identical_QMARK_;var expr__29477 = k__20397__auto__;if(cljs.core.truth_(pred__29476.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__29477)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29473,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29476.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__29477)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29473,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29476.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__29477)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29473,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29476.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__29477)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29473,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29476.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__29477)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29473,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__29473),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__29473){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29473,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__29475){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__29475),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__29475),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__29475),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__29475),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__29475),null,cljs.core.dissoc.call(null,G__29475,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_29480 = state;(statearr_29480[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_29480;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__19791__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = catch_block;if(cljs.core.truth_(and__19791__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_29486 = state;(statearr_29486[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_29486[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_29486[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_29486[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_29486;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_29487_29509 = state;(statearr_29487_29509[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__29510 = state;
state = G__29510;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = cljs.core.not.call(null,catch_block);if(and__19791__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_29488 = state;(statearr_29488[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29488[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_29488;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_29489 = state;(statearr_29489[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29489[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_29489;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_29490 = state;(statearr_29490[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29490[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_29490;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("No matching clause"));
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26369 = (function (f,fn_handler,meta26370){
this.f = f;
this.fn_handler = fn_handler;
this.meta26370 = meta26370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26369.cljs$lang$type = true;
cljs.core.async.t26369.cljs$lang$ctorStr = "cljs.core.async/t26369";
cljs.core.async.t26369.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26369");
});
cljs.core.async.t26369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26371){var self__ = this;
var _26371__$1 = this;return self__.meta26370;
});
cljs.core.async.t26369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26371,meta26370__$1){var self__ = this;
var _26371__$1 = this;return (new cljs.core.async.t26369(self__.f,self__.fn_handler,meta26370__$1));
});
cljs.core.async.__GT_t26369 = (function __GT_t26369(f__$1,fn_handler__$1,meta26370){return (new cljs.core.async.t26369(f__$1,fn_handler__$1,meta26370));
});
}
return (new cljs.core.async.t26369(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26373 = buff;if(G__26373)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__26373.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26373.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26373);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26373);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_29076 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29076);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_29076,ret){
return (function (){return fn1.call(null,val_29076);
});})(val_29076,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___29077 = n;var x_29078 = 0;while(true){
if((x_29078 < n__20651__auto___29077))
{(a[x_29078] = 0);
{
var G__29079 = (x_29078 + 1);
x_29078 = G__29079;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__29080 = (i + 1);
i = G__29080;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26377 = (function (flag,alt_flag,meta26378){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26378 = meta26378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26377.cljs$lang$type = true;
cljs.core.async.t26377.cljs$lang$ctorStr = "cljs.core.async/t26377";
cljs.core.async.t26377.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26377");
});})(flag))
;
cljs.core.async.t26377.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t26377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t26377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26379){var self__ = this;
var _26379__$1 = this;return self__.meta26378;
});})(flag))
;
cljs.core.async.t26377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26379,meta26378__$1){var self__ = this;
var _26379__$1 = this;return (new cljs.core.async.t26377(self__.flag,self__.alt_flag,meta26378__$1));
});})(flag))
;
cljs.core.async.__GT_t26377 = ((function (flag){
return (function __GT_t26377(flag__$1,alt_flag__$1,meta26378){return (new cljs.core.async.t26377(flag__$1,alt_flag__$1,meta26378));
});})(flag))
;
}
return (new cljs.core.async.t26377(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26383 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26383 = (function (cb,flag,alt_handler,meta26384){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26384 = meta26384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26383.cljs$lang$type = true;
cljs.core.async.t26383.cljs$lang$ctorStr = "cljs.core.async/t26383";
cljs.core.async.t26383.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26383");
});
cljs.core.async.t26383.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26385){var self__ = this;
var _26385__$1 = this;return self__.meta26384;
});
cljs.core.async.t26383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26385,meta26384__$1){var self__ = this;
var _26385__$1 = this;return (new cljs.core.async.t26383(self__.cb,self__.flag,self__.alt_handler,meta26384__$1));
});
cljs.core.async.__GT_t26383 = (function __GT_t26383(cb__$1,flag__$1,alt_handler__$1,meta26384){return (new cljs.core.async.t26383(cb__$1,flag__$1,alt_handler__$1,meta26384));
});
}
return (new cljs.core.async.t26383(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26386_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26386_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26387_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26387_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19803__auto__ = wport;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__29081 = (i + 1);
i = G__29081;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19803__auto__ = ret;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__19791__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__26388){var map__26390 = p__26388;var map__26390__$1 = ((cljs.core.seq_QMARK_.call(null,map__26390))?cljs.core.apply.call(null,cljs.core.hash_map,map__26390):map__26390);var opts = map__26390__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26388 = null;if (arguments.length > 1) {
  p__26388 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26388);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29082){
var ports = cljs.core.first(arglist__29082);
var p__26388 = cljs.core.rest(arglist__29082);
return alts_BANG___delegate(ports,p__26388);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__22938__auto___29083 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29083){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29083){
return (function (state_26461){var state_val_26462 = (state_26461[1]);if((state_val_26462 === 1))
{var state_26461__$1 = state_26461;var statearr_26463_29084 = state_26461__$1;(statearr_26463_29084[2] = null);
(statearr_26463_29084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 2))
{var state_26461__$1 = state_26461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26461__$1,4,from);
} else
{if((state_val_26462 === 3))
{var inst_26459 = (state_26461[2]);var state_26461__$1 = state_26461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26461__$1,inst_26459);
} else
{if((state_val_26462 === 4))
{var inst_26440 = (state_26461[7]);var inst_26440__$1 = (state_26461[2]);var inst_26441 = (inst_26440__$1 == null);var state_26461__$1 = (function (){var statearr_26464 = state_26461;(statearr_26464[7] = inst_26440__$1);
return statearr_26464;
})();if(cljs.core.truth_(inst_26441))
{var statearr_26465_29085 = state_26461__$1;(statearr_26465_29085[1] = 5);
} else
{var statearr_26466_29086 = state_26461__$1;(statearr_26466_29086[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 5))
{var state_26461__$1 = state_26461;if(cljs.core.truth_(close_QMARK_))
{var statearr_26467_29087 = state_26461__$1;(statearr_26467_29087[1] = 8);
} else
{var statearr_26468_29088 = state_26461__$1;(statearr_26468_29088[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 6))
{var inst_26440 = (state_26461[7]);var state_26461__$1 = state_26461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26461__$1,11,to,inst_26440);
} else
{if((state_val_26462 === 7))
{var inst_26457 = (state_26461[2]);var state_26461__$1 = state_26461;var statearr_26469_29089 = state_26461__$1;(statearr_26469_29089[2] = inst_26457);
(statearr_26469_29089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 8))
{var inst_26444 = cljs.core.async.close_BANG_.call(null,to);var state_26461__$1 = state_26461;var statearr_26470_29090 = state_26461__$1;(statearr_26470_29090[2] = inst_26444);
(statearr_26470_29090[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 9))
{var state_26461__$1 = state_26461;var statearr_26471_29091 = state_26461__$1;(statearr_26471_29091[2] = null);
(statearr_26471_29091[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 10))
{var inst_26447 = (state_26461[2]);var state_26461__$1 = state_26461;var statearr_26472_29092 = state_26461__$1;(statearr_26472_29092[2] = inst_26447);
(statearr_26472_29092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 11))
{var inst_26450 = (state_26461[2]);var state_26461__$1 = state_26461;if(cljs.core.truth_(inst_26450))
{var statearr_26473_29093 = state_26461__$1;(statearr_26473_29093[1] = 12);
} else
{var statearr_26474_29094 = state_26461__$1;(statearr_26474_29094[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 12))
{var state_26461__$1 = state_26461;var statearr_26475_29095 = state_26461__$1;(statearr_26475_29095[2] = null);
(statearr_26475_29095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 13))
{var state_26461__$1 = state_26461;var statearr_26476_29096 = state_26461__$1;(statearr_26476_29096[2] = null);
(statearr_26476_29096[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 14))
{var inst_26455 = (state_26461[2]);var state_26461__$1 = state_26461;var statearr_26477_29097 = state_26461__$1;(statearr_26477_29097[2] = inst_26455);
(statearr_26477_29097[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29083))
;return ((function (switch__22862__auto__,c__22938__auto___29083){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26481 = [null,null,null,null,null,null,null,null];(statearr_26481[0] = state_machine__22863__auto__);
(statearr_26481[1] = 1);
return statearr_26481;
});
var state_machine__22863__auto____1 = (function (state_26461){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26461);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26482){if((e26482 instanceof Object))
{var ex__22866__auto__ = e26482;var statearr_26483_29098 = state_26461;(statearr_26483_29098[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29099 = state_26461;
state_26461 = G__29099;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26461){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29083))
})();var state__22940__auto__ = (function (){var statearr_26484 = f__22939__auto__.call(null);(statearr_26484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29083);
return statearr_26484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29083))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__26667){var vec__26668 = p__26667;var v = cljs.core.nth.call(null,vec__26668,0,null);var p = cljs.core.nth.call(null,vec__26668,1,null);var job = vec__26668;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22938__auto___29100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29100,res,vec__26668,v,p,job,jobs,results){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29100,res,vec__26668,v,p,job,jobs,results){
return (function (state_26673){var state_val_26674 = (state_26673[1]);if((state_val_26674 === 2))
{var inst_26670 = (state_26673[2]);var inst_26671 = cljs.core.async.close_BANG_.call(null,res);var state_26673__$1 = (function (){var statearr_26675 = state_26673;(statearr_26675[7] = inst_26670);
return statearr_26675;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26673__$1,inst_26671);
} else
{if((state_val_26674 === 1))
{var state_26673__$1 = state_26673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26673__$1,2,res,v);
} else
{return null;
}
}
});})(c__22938__auto___29100,res,vec__26668,v,p,job,jobs,results))
;return ((function (switch__22862__auto__,c__22938__auto___29100,res,vec__26668,v,p,job,jobs,results){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26679 = [null,null,null,null,null,null,null,null];(statearr_26679[0] = state_machine__22863__auto__);
(statearr_26679[1] = 1);
return statearr_26679;
});
var state_machine__22863__auto____1 = (function (state_26673){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26673);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26680){if((e26680 instanceof Object))
{var ex__22866__auto__ = e26680;var statearr_26681_29101 = state_26673;(statearr_26681_29101[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26673);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29102 = state_26673;
state_26673 = G__29102;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29100,res,vec__26668,v,p,job,jobs,results))
})();var state__22940__auto__ = (function (){var statearr_26682 = f__22939__auto__.call(null);(statearr_26682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29100);
return statearr_26682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29100,res,vec__26668,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26683){var vec__26684 = p__26683;var v = cljs.core.nth.call(null,vec__26684,0,null);var p = cljs.core.nth.call(null,vec__26684,1,null);var job = vec__26684;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___29103 = n;var __29104 = 0;while(true){
if((__29104 < n__20651__auto___29103))
{var G__26685_29105 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26685_29105))
{var c__22938__auto___29106 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__29104,c__22938__auto___29106,G__26685_29105,n__20651__auto___29103,jobs,results,process,async){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (__29104,c__22938__auto___29106,G__26685_29105,n__20651__auto___29103,jobs,results,process,async){
return (function (state_26698){var state_val_26699 = (state_26698[1]);if((state_val_26699 === 7))
{var inst_26694 = (state_26698[2]);var state_26698__$1 = state_26698;var statearr_26700_29107 = state_26698__$1;(statearr_26700_29107[2] = inst_26694);
(statearr_26700_29107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26699 === 6))
{var state_26698__$1 = state_26698;var statearr_26701_29108 = state_26698__$1;(statearr_26701_29108[2] = null);
(statearr_26701_29108[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26699 === 5))
{var state_26698__$1 = state_26698;var statearr_26702_29109 = state_26698__$1;(statearr_26702_29109[2] = null);
(statearr_26702_29109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26699 === 4))
{var inst_26688 = (state_26698[2]);var inst_26689 = async.call(null,inst_26688);var state_26698__$1 = state_26698;if(cljs.core.truth_(inst_26689))
{var statearr_26703_29110 = state_26698__$1;(statearr_26703_29110[1] = 5);
} else
{var statearr_26704_29111 = state_26698__$1;(statearr_26704_29111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26699 === 3))
{var inst_26696 = (state_26698[2]);var state_26698__$1 = state_26698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26698__$1,inst_26696);
} else
{if((state_val_26699 === 2))
{var state_26698__$1 = state_26698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26698__$1,4,jobs);
} else
{if((state_val_26699 === 1))
{var state_26698__$1 = state_26698;var statearr_26705_29112 = state_26698__$1;(statearr_26705_29112[2] = null);
(statearr_26705_29112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__29104,c__22938__auto___29106,G__26685_29105,n__20651__auto___29103,jobs,results,process,async))
;return ((function (__29104,switch__22862__auto__,c__22938__auto___29106,G__26685_29105,n__20651__auto___29103,jobs,results,process,async){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26709 = [null,null,null,null,null,null,null];(statearr_26709[0] = state_machine__22863__auto__);
(statearr_26709[1] = 1);
return statearr_26709;
});
var state_machine__22863__auto____1 = (function (state_26698){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26698);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26710){if((e26710 instanceof Object))
{var ex__22866__auto__ = e26710;var statearr_26711_29113 = state_26698;(statearr_26711_29113[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29114 = state_26698;
state_26698 = G__29114;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26698){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(__29104,switch__22862__auto__,c__22938__auto___29106,G__26685_29105,n__20651__auto___29103,jobs,results,process,async))
})();var state__22940__auto__ = (function (){var statearr_26712 = f__22939__auto__.call(null);(statearr_26712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29106);
return statearr_26712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(__29104,c__22938__auto___29106,G__26685_29105,n__20651__auto___29103,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26685_29105))
{var c__22938__auto___29115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__29104,c__22938__auto___29115,G__26685_29105,n__20651__auto___29103,jobs,results,process,async){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (__29104,c__22938__auto___29115,G__26685_29105,n__20651__auto___29103,jobs,results,process,async){
return (function (state_26725){var state_val_26726 = (state_26725[1]);if((state_val_26726 === 7))
{var inst_26721 = (state_26725[2]);var state_26725__$1 = state_26725;var statearr_26727_29116 = state_26725__$1;(statearr_26727_29116[2] = inst_26721);
(statearr_26727_29116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26726 === 6))
{var state_26725__$1 = state_26725;var statearr_26728_29117 = state_26725__$1;(statearr_26728_29117[2] = null);
(statearr_26728_29117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26726 === 5))
{var state_26725__$1 = state_26725;var statearr_26729_29118 = state_26725__$1;(statearr_26729_29118[2] = null);
(statearr_26729_29118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26726 === 4))
{var inst_26715 = (state_26725[2]);var inst_26716 = process.call(null,inst_26715);var state_26725__$1 = state_26725;if(cljs.core.truth_(inst_26716))
{var statearr_26730_29119 = state_26725__$1;(statearr_26730_29119[1] = 5);
} else
{var statearr_26731_29120 = state_26725__$1;(statearr_26731_29120[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26726 === 3))
{var inst_26723 = (state_26725[2]);var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else
{if((state_val_26726 === 2))
{var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,4,jobs);
} else
{if((state_val_26726 === 1))
{var state_26725__$1 = state_26725;var statearr_26732_29121 = state_26725__$1;(statearr_26732_29121[2] = null);
(statearr_26732_29121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__29104,c__22938__auto___29115,G__26685_29105,n__20651__auto___29103,jobs,results,process,async))
;return ((function (__29104,switch__22862__auto__,c__22938__auto___29115,G__26685_29105,n__20651__auto___29103,jobs,results,process,async){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26736 = [null,null,null,null,null,null,null];(statearr_26736[0] = state_machine__22863__auto__);
(statearr_26736[1] = 1);
return statearr_26736;
});
var state_machine__22863__auto____1 = (function (state_26725){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26725);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object))
{var ex__22866__auto__ = e26737;var statearr_26738_29122 = state_26725;(statearr_26738_29122[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29123 = state_26725;
state_26725 = G__29123;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(__29104,switch__22862__auto__,c__22938__auto___29115,G__26685_29105,n__20651__auto___29103,jobs,results,process,async))
})();var state__22940__auto__ = (function (){var statearr_26739 = f__22939__auto__.call(null);(statearr_26739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29115);
return statearr_26739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(__29104,c__22938__auto___29115,G__26685_29105,n__20651__auto___29103,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__29124 = (__29104 + 1);
__29104 = G__29124;
continue;
}
} else
{}
break;
}
var c__22938__auto___29125 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29125,jobs,results,process,async){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29125,jobs,results,process,async){
return (function (state_26760){var state_val_26761 = (state_26760[1]);if((state_val_26761 === 9))
{var inst_26753 = (state_26760[2]);var state_26760__$1 = (function (){var statearr_26762 = state_26760;(statearr_26762[7] = inst_26753);
return statearr_26762;
})();var statearr_26763_29126 = state_26760__$1;(statearr_26763_29126[2] = null);
(statearr_26763_29126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26761 === 8))
{var inst_26747 = (state_26760[8]);var inst_26751 = (state_26760[2]);var state_26760__$1 = (function (){var statearr_26764 = state_26760;(statearr_26764[9] = inst_26751);
return statearr_26764;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26760__$1,9,results,inst_26747);
} else
{if((state_val_26761 === 7))
{var inst_26756 = (state_26760[2]);var state_26760__$1 = state_26760;var statearr_26765_29127 = state_26760__$1;(statearr_26765_29127[2] = inst_26756);
(statearr_26765_29127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26761 === 6))
{var inst_26747 = (state_26760[8]);var inst_26742 = (state_26760[10]);var inst_26747__$1 = cljs.core.async.chan.call(null,1);var inst_26748 = [inst_26742,inst_26747__$1];var inst_26749 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26748,null));var state_26760__$1 = (function (){var statearr_26766 = state_26760;(statearr_26766[8] = inst_26747__$1);
return statearr_26766;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26760__$1,8,jobs,inst_26749);
} else
{if((state_val_26761 === 5))
{var inst_26745 = cljs.core.async.close_BANG_.call(null,jobs);var state_26760__$1 = state_26760;var statearr_26767_29128 = state_26760__$1;(statearr_26767_29128[2] = inst_26745);
(statearr_26767_29128[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26761 === 4))
{var inst_26742 = (state_26760[10]);var inst_26742__$1 = (state_26760[2]);var inst_26743 = (inst_26742__$1 == null);var state_26760__$1 = (function (){var statearr_26768 = state_26760;(statearr_26768[10] = inst_26742__$1);
return statearr_26768;
})();if(cljs.core.truth_(inst_26743))
{var statearr_26769_29129 = state_26760__$1;(statearr_26769_29129[1] = 5);
} else
{var statearr_26770_29130 = state_26760__$1;(statearr_26770_29130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26761 === 3))
{var inst_26758 = (state_26760[2]);var state_26760__$1 = state_26760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26760__$1,inst_26758);
} else
{if((state_val_26761 === 2))
{var state_26760__$1 = state_26760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26760__$1,4,from);
} else
{if((state_val_26761 === 1))
{var state_26760__$1 = state_26760;var statearr_26771_29131 = state_26760__$1;(statearr_26771_29131[2] = null);
(statearr_26771_29131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29125,jobs,results,process,async))
;return ((function (switch__22862__auto__,c__22938__auto___29125,jobs,results,process,async){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26775 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26775[0] = state_machine__22863__auto__);
(statearr_26775[1] = 1);
return statearr_26775;
});
var state_machine__22863__auto____1 = (function (state_26760){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26760);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26776){if((e26776 instanceof Object))
{var ex__22866__auto__ = e26776;var statearr_26777_29132 = state_26760;(statearr_26777_29132[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29133 = state_26760;
state_26760 = G__29133;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26760){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29125,jobs,results,process,async))
})();var state__22940__auto__ = (function (){var statearr_26778 = f__22939__auto__.call(null);(statearr_26778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29125);
return statearr_26778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29125,jobs,results,process,async))
);
var c__22938__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto__,jobs,results,process,async){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto__,jobs,results,process,async){
return (function (state_26816){var state_val_26817 = (state_26816[1]);if((state_val_26817 === 1))
{var state_26816__$1 = state_26816;var statearr_26818_29134 = state_26816__$1;(statearr_26818_29134[2] = null);
(statearr_26818_29134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 2))
{var state_26816__$1 = state_26816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26816__$1,4,results);
} else
{if((state_val_26817 === 3))
{var inst_26814 = (state_26816[2]);var state_26816__$1 = state_26816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26816__$1,inst_26814);
} else
{if((state_val_26817 === 4))
{var inst_26781 = (state_26816[7]);var inst_26781__$1 = (state_26816[2]);var inst_26782 = (inst_26781__$1 == null);var state_26816__$1 = (function (){var statearr_26819 = state_26816;(statearr_26819[7] = inst_26781__$1);
return statearr_26819;
})();if(cljs.core.truth_(inst_26782))
{var statearr_26820_29135 = state_26816__$1;(statearr_26820_29135[1] = 5);
} else
{var statearr_26821_29136 = state_26816__$1;(statearr_26821_29136[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 5))
{var state_26816__$1 = state_26816;if(cljs.core.truth_(close_QMARK_))
{var statearr_26822_29137 = state_26816__$1;(statearr_26822_29137[1] = 8);
} else
{var statearr_26823_29138 = state_26816__$1;(statearr_26823_29138[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 6))
{var inst_26781 = (state_26816[7]);var state_26816__$1 = state_26816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26816__$1,11,inst_26781);
} else
{if((state_val_26817 === 7))
{var inst_26812 = (state_26816[2]);var state_26816__$1 = state_26816;var statearr_26824_29139 = state_26816__$1;(statearr_26824_29139[2] = inst_26812);
(statearr_26824_29139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 8))
{var inst_26785 = cljs.core.async.close_BANG_.call(null,to);var state_26816__$1 = state_26816;var statearr_26825_29140 = state_26816__$1;(statearr_26825_29140[2] = inst_26785);
(statearr_26825_29140[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 9))
{var state_26816__$1 = state_26816;var statearr_26826_29141 = state_26816__$1;(statearr_26826_29141[2] = null);
(statearr_26826_29141[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 10))
{var inst_26788 = (state_26816[2]);var state_26816__$1 = state_26816;var statearr_26827_29142 = state_26816__$1;(statearr_26827_29142[2] = inst_26788);
(statearr_26827_29142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 11))
{var inst_26791 = (state_26816[2]);var state_26816__$1 = (function (){var statearr_26828 = state_26816;(statearr_26828[8] = inst_26791);
return statearr_26828;
})();var statearr_26829_29143 = state_26816__$1;(statearr_26829_29143[2] = null);
(statearr_26829_29143[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 12))
{var inst_26791 = (state_26816[8]);var state_26816__$1 = state_26816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26816__$1,14,inst_26791);
} else
{if((state_val_26817 === 13))
{var inst_26809 = (state_26816[2]);var state_26816__$1 = (function (){var statearr_26830 = state_26816;(statearr_26830[9] = inst_26809);
return statearr_26830;
})();var statearr_26831_29144 = state_26816__$1;(statearr_26831_29144[2] = null);
(statearr_26831_29144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 14))
{var inst_26796 = (state_26816[10]);var inst_26794 = (state_26816[11]);var inst_26794__$1 = (state_26816[2]);var inst_26795 = (inst_26794__$1 == null);var inst_26796__$1 = cljs.core.not.call(null,inst_26795);var state_26816__$1 = (function (){var statearr_26832 = state_26816;(statearr_26832[10] = inst_26796__$1);
(statearr_26832[11] = inst_26794__$1);
return statearr_26832;
})();if(inst_26796__$1)
{var statearr_26833_29145 = state_26816__$1;(statearr_26833_29145[1] = 15);
} else
{var statearr_26834_29146 = state_26816__$1;(statearr_26834_29146[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 15))
{var inst_26794 = (state_26816[11]);var state_26816__$1 = state_26816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26816__$1,18,to,inst_26794);
} else
{if((state_val_26817 === 16))
{var inst_26796 = (state_26816[10]);var state_26816__$1 = state_26816;var statearr_26835_29147 = state_26816__$1;(statearr_26835_29147[2] = inst_26796);
(statearr_26835_29147[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 17))
{var inst_26802 = (state_26816[2]);var state_26816__$1 = state_26816;if(cljs.core.truth_(inst_26802))
{var statearr_26836_29148 = state_26816__$1;(statearr_26836_29148[1] = 19);
} else
{var statearr_26837_29149 = state_26816__$1;(statearr_26837_29149[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 18))
{var inst_26799 = (state_26816[2]);var state_26816__$1 = state_26816;var statearr_26838_29150 = state_26816__$1;(statearr_26838_29150[2] = inst_26799);
(statearr_26838_29150[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 19))
{var state_26816__$1 = state_26816;var statearr_26839_29151 = state_26816__$1;(statearr_26839_29151[2] = null);
(statearr_26839_29151[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 20))
{var state_26816__$1 = state_26816;var statearr_26840_29152 = state_26816__$1;(statearr_26840_29152[2] = null);
(statearr_26840_29152[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26817 === 21))
{var inst_26807 = (state_26816[2]);var state_26816__$1 = state_26816;var statearr_26841_29153 = state_26816__$1;(statearr_26841_29153[2] = inst_26807);
(statearr_26841_29153[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
});})(c__22938__auto__,jobs,results,process,async))
;return ((function (switch__22862__auto__,c__22938__auto__,jobs,results,process,async){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26845 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26845[0] = state_machine__22863__auto__);
(statearr_26845[1] = 1);
return statearr_26845;
});
var state_machine__22863__auto____1 = (function (state_26816){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26816);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26846){if((e26846 instanceof Object))
{var ex__22866__auto__ = e26846;var statearr_26847_29154 = state_26816;(statearr_26847_29154[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29155 = state_26816;
state_26816 = G__29155;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26816){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto__,jobs,results,process,async))
})();var state__22940__auto__ = (function (){var statearr_26848 = f__22939__auto__.call(null);(statearr_26848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto__);
return statearr_26848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto__,jobs,results,process,async))
);
return c__22938__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1107031534));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1964407721));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22938__auto___29156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29156,tc,fc){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29156,tc,fc){
return (function (state_26924){var state_val_26925 = (state_26924[1]);if((state_val_26925 === 1))
{var state_26924__$1 = state_26924;var statearr_26926_29157 = state_26924__$1;(statearr_26926_29157[2] = null);
(statearr_26926_29157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 2))
{var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,4,ch);
} else
{if((state_val_26925 === 3))
{var inst_26922 = (state_26924[2]);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26924__$1,inst_26922);
} else
{if((state_val_26925 === 4))
{var inst_26901 = (state_26924[7]);var inst_26901__$1 = (state_26924[2]);var inst_26902 = (inst_26901__$1 == null);var state_26924__$1 = (function (){var statearr_26927 = state_26924;(statearr_26927[7] = inst_26901__$1);
return statearr_26927;
})();if(cljs.core.truth_(inst_26902))
{var statearr_26928_29158 = state_26924__$1;(statearr_26928_29158[1] = 5);
} else
{var statearr_26929_29159 = state_26924__$1;(statearr_26929_29159[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 5))
{var inst_26904 = cljs.core.async.close_BANG_.call(null,tc);var inst_26905 = cljs.core.async.close_BANG_.call(null,fc);var state_26924__$1 = (function (){var statearr_26930 = state_26924;(statearr_26930[8] = inst_26904);
return statearr_26930;
})();var statearr_26931_29160 = state_26924__$1;(statearr_26931_29160[2] = inst_26905);
(statearr_26931_29160[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 6))
{var inst_26901 = (state_26924[7]);var inst_26907 = p.call(null,inst_26901);var state_26924__$1 = state_26924;if(cljs.core.truth_(inst_26907))
{var statearr_26932_29161 = state_26924__$1;(statearr_26932_29161[1] = 9);
} else
{var statearr_26933_29162 = state_26924__$1;(statearr_26933_29162[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 7))
{var inst_26920 = (state_26924[2]);var state_26924__$1 = state_26924;var statearr_26934_29163 = state_26924__$1;(statearr_26934_29163[2] = inst_26920);
(statearr_26934_29163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 8))
{var inst_26913 = (state_26924[2]);var state_26924__$1 = state_26924;if(cljs.core.truth_(inst_26913))
{var statearr_26935_29164 = state_26924__$1;(statearr_26935_29164[1] = 12);
} else
{var statearr_26936_29165 = state_26924__$1;(statearr_26936_29165[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 9))
{var state_26924__$1 = state_26924;var statearr_26937_29166 = state_26924__$1;(statearr_26937_29166[2] = tc);
(statearr_26937_29166[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 10))
{var state_26924__$1 = state_26924;var statearr_26938_29167 = state_26924__$1;(statearr_26938_29167[2] = fc);
(statearr_26938_29167[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 11))
{var inst_26901 = (state_26924[7]);var inst_26911 = (state_26924[2]);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26924__$1,8,inst_26911,inst_26901);
} else
{if((state_val_26925 === 12))
{var state_26924__$1 = state_26924;var statearr_26939_29168 = state_26924__$1;(statearr_26939_29168[2] = null);
(statearr_26939_29168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 13))
{var state_26924__$1 = state_26924;var statearr_26940_29169 = state_26924__$1;(statearr_26940_29169[2] = null);
(statearr_26940_29169[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26925 === 14))
{var inst_26918 = (state_26924[2]);var state_26924__$1 = state_26924;var statearr_26941_29170 = state_26924__$1;(statearr_26941_29170[2] = inst_26918);
(statearr_26941_29170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29156,tc,fc))
;return ((function (switch__22862__auto__,c__22938__auto___29156,tc,fc){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_26945 = [null,null,null,null,null,null,null,null,null];(statearr_26945[0] = state_machine__22863__auto__);
(statearr_26945[1] = 1);
return statearr_26945;
});
var state_machine__22863__auto____1 = (function (state_26924){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26924);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e26946){if((e26946 instanceof Object))
{var ex__22866__auto__ = e26946;var statearr_26947_29171 = state_26924;(statearr_26947_29171[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29172 = state_26924;
state_26924 = G__29172;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26924){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29156,tc,fc))
})();var state__22940__auto__ = (function (){var statearr_26948 = f__22939__auto__.call(null);(statearr_26948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29156);
return statearr_26948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29156,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22938__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto__){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto__){
return (function (state_26995){var state_val_26996 = (state_26995[1]);if((state_val_26996 === 7))
{var inst_26991 = (state_26995[2]);var state_26995__$1 = state_26995;var statearr_26997_29173 = state_26995__$1;(statearr_26997_29173[2] = inst_26991);
(statearr_26997_29173[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26996 === 6))
{var inst_26981 = (state_26995[7]);var inst_26984 = (state_26995[8]);var inst_26988 = f.call(null,inst_26981,inst_26984);var inst_26981__$1 = inst_26988;var state_26995__$1 = (function (){var statearr_26998 = state_26995;(statearr_26998[7] = inst_26981__$1);
return statearr_26998;
})();var statearr_26999_29174 = state_26995__$1;(statearr_26999_29174[2] = null);
(statearr_26999_29174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26996 === 5))
{var inst_26981 = (state_26995[7]);var state_26995__$1 = state_26995;var statearr_27000_29175 = state_26995__$1;(statearr_27000_29175[2] = inst_26981);
(statearr_27000_29175[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26996 === 4))
{var inst_26984 = (state_26995[8]);var inst_26984__$1 = (state_26995[2]);var inst_26985 = (inst_26984__$1 == null);var state_26995__$1 = (function (){var statearr_27001 = state_26995;(statearr_27001[8] = inst_26984__$1);
return statearr_27001;
})();if(cljs.core.truth_(inst_26985))
{var statearr_27002_29176 = state_26995__$1;(statearr_27002_29176[1] = 5);
} else
{var statearr_27003_29177 = state_26995__$1;(statearr_27003_29177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26996 === 3))
{var inst_26993 = (state_26995[2]);var state_26995__$1 = state_26995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26995__$1,inst_26993);
} else
{if((state_val_26996 === 2))
{var state_26995__$1 = state_26995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26995__$1,4,ch);
} else
{if((state_val_26996 === 1))
{var inst_26981 = init;var state_26995__$1 = (function (){var statearr_27004 = state_26995;(statearr_27004[7] = inst_26981);
return statearr_27004;
})();var statearr_27005_29178 = state_26995__$1;(statearr_27005_29178[2] = null);
(statearr_27005_29178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__22938__auto__))
;return ((function (switch__22862__auto__,c__22938__auto__){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_27009 = [null,null,null,null,null,null,null,null,null];(statearr_27009[0] = state_machine__22863__auto__);
(statearr_27009[1] = 1);
return statearr_27009;
});
var state_machine__22863__auto____1 = (function (state_26995){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_26995);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e27010){if((e27010 instanceof Object))
{var ex__22866__auto__ = e27010;var statearr_27011_29179 = state_26995;(statearr_27011_29179[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29180 = state_26995;
state_26995 = G__29180;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_26995){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_26995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto__))
})();var state__22940__auto__ = (function (){var statearr_27012 = f__22939__auto__.call(null);(statearr_27012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto__);
return statearr_27012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto__))
);
return c__22938__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22938__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto__){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto__){
return (function (state_27086){var state_val_27087 = (state_27086[1]);if((state_val_27087 === 1))
{var inst_27062 = cljs.core.seq.call(null,coll);var inst_27063 = inst_27062;var state_27086__$1 = (function (){var statearr_27088 = state_27086;(statearr_27088[7] = inst_27063);
return statearr_27088;
})();var statearr_27089_29181 = state_27086__$1;(statearr_27089_29181[2] = null);
(statearr_27089_29181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 2))
{var inst_27063 = (state_27086[7]);var state_27086__$1 = state_27086;if(cljs.core.truth_(inst_27063))
{var statearr_27090_29182 = state_27086__$1;(statearr_27090_29182[1] = 4);
} else
{var statearr_27091_29183 = state_27086__$1;(statearr_27091_29183[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 3))
{var inst_27084 = (state_27086[2]);var state_27086__$1 = state_27086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27086__$1,inst_27084);
} else
{if((state_val_27087 === 4))
{var inst_27063 = (state_27086[7]);var inst_27066 = cljs.core.first.call(null,inst_27063);var state_27086__$1 = state_27086;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27086__$1,7,ch,inst_27066);
} else
{if((state_val_27087 === 5))
{var inst_27063 = (state_27086[7]);var state_27086__$1 = state_27086;var statearr_27092_29184 = state_27086__$1;(statearr_27092_29184[2] = inst_27063);
(statearr_27092_29184[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 6))
{var inst_27071 = (state_27086[2]);var state_27086__$1 = state_27086;if(cljs.core.truth_(inst_27071))
{var statearr_27093_29185 = state_27086__$1;(statearr_27093_29185[1] = 8);
} else
{var statearr_27094_29186 = state_27086__$1;(statearr_27094_29186[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 7))
{var inst_27068 = (state_27086[2]);var state_27086__$1 = state_27086;var statearr_27095_29187 = state_27086__$1;(statearr_27095_29187[2] = inst_27068);
(statearr_27095_29187[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 8))
{var inst_27063 = (state_27086[7]);var inst_27073 = cljs.core.next.call(null,inst_27063);var inst_27063__$1 = inst_27073;var state_27086__$1 = (function (){var statearr_27096 = state_27086;(statearr_27096[7] = inst_27063__$1);
return statearr_27096;
})();var statearr_27097_29188 = state_27086__$1;(statearr_27097_29188[2] = null);
(statearr_27097_29188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 9))
{var state_27086__$1 = state_27086;if(cljs.core.truth_(close_QMARK_))
{var statearr_27098_29189 = state_27086__$1;(statearr_27098_29189[1] = 11);
} else
{var statearr_27099_29190 = state_27086__$1;(statearr_27099_29190[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 10))
{var inst_27082 = (state_27086[2]);var state_27086__$1 = state_27086;var statearr_27100_29191 = state_27086__$1;(statearr_27100_29191[2] = inst_27082);
(statearr_27100_29191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 11))
{var inst_27077 = cljs.core.async.close_BANG_.call(null,ch);var state_27086__$1 = state_27086;var statearr_27101_29192 = state_27086__$1;(statearr_27101_29192[2] = inst_27077);
(statearr_27101_29192[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 12))
{var state_27086__$1 = state_27086;var statearr_27102_29193 = state_27086__$1;(statearr_27102_29193[2] = null);
(statearr_27102_29193[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27087 === 13))
{var inst_27080 = (state_27086[2]);var state_27086__$1 = state_27086;var statearr_27103_29194 = state_27086__$1;(statearr_27103_29194[2] = inst_27080);
(statearr_27103_29194[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto__))
;return ((function (switch__22862__auto__,c__22938__auto__){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_27107 = [null,null,null,null,null,null,null,null];(statearr_27107[0] = state_machine__22863__auto__);
(statearr_27107[1] = 1);
return statearr_27107;
});
var state_machine__22863__auto____1 = (function (state_27086){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_27086);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e27108){if((e27108 instanceof Object))
{var ex__22866__auto__ = e27108;var statearr_27109_29195 = state_27086;(statearr_27109_29195[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29196 = state_27086;
state_27086 = G__29196;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto__))
})();var state__22940__auto__ = (function (){var statearr_27110 = f__22939__auto__.call(null);(statearr_27110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto__);
return statearr_27110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto__))
);
return c__22938__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj27112 = {};return obj27112;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj27114 = {};return obj27114;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27336 = (function (cs,ch,mult,meta27337){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27337 = meta27337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27336.cljs$lang$type = true;
cljs.core.async.t27336.cljs$lang$ctorStr = "cljs.core.async/t27336";
cljs.core.async.t27336.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27336");
});})(cs))
;
cljs.core.async.t27336.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27336.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27336.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27336.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27336.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27338){var self__ = this;
var _27338__$1 = this;return self__.meta27337;
});})(cs))
;
cljs.core.async.t27336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27338,meta27337__$1){var self__ = this;
var _27338__$1 = this;return (new cljs.core.async.t27336(self__.cs,self__.ch,self__.mult,meta27337__$1));
});})(cs))
;
cljs.core.async.__GT_t27336 = ((function (cs){
return (function __GT_t27336(cs__$1,ch__$1,mult__$1,meta27337){return (new cljs.core.async.t27336(cs__$1,ch__$1,mult__$1,meta27337));
});})(cs))
;
}
return (new cljs.core.async.t27336(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22938__auto___29197 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29197,cs,m,dchan,dctr,done){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29197,cs,m,dchan,dctr,done){
return (function (state_27469){var state_val_27470 = (state_27469[1]);if((state_val_27470 === 32))
{var inst_27411 = (state_27469[7]);var inst_27412 = (state_27469[8]);var inst_27410 = (state_27469[9]);var inst_27409 = (state_27469[10]);var inst_27424 = (state_27469[2]);var inst_27425 = (inst_27412 + 1);var tmp27471 = inst_27411;var tmp27472 = inst_27410;var tmp27473 = inst_27409;var inst_27409__$1 = tmp27473;var inst_27410__$1 = tmp27472;var inst_27411__$1 = tmp27471;var inst_27412__$1 = inst_27425;var state_27469__$1 = (function (){var statearr_27474 = state_27469;(statearr_27474[7] = inst_27411__$1);
(statearr_27474[8] = inst_27412__$1);
(statearr_27474[9] = inst_27410__$1);
(statearr_27474[11] = inst_27424);
(statearr_27474[10] = inst_27409__$1);
return statearr_27474;
})();var statearr_27475_29198 = state_27469__$1;(statearr_27475_29198[2] = null);
(statearr_27475_29198[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 1))
{var state_27469__$1 = state_27469;var statearr_27476_29199 = state_27469__$1;(statearr_27476_29199[2] = null);
(statearr_27476_29199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 33))
{var inst_27428 = (state_27469[12]);var inst_27430 = cljs.core.chunked_seq_QMARK_.call(null,inst_27428);var state_27469__$1 = state_27469;if(inst_27430)
{var statearr_27477_29200 = state_27469__$1;(statearr_27477_29200[1] = 36);
} else
{var statearr_27478_29201 = state_27469__$1;(statearr_27478_29201[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 2))
{var state_27469__$1 = state_27469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27469__$1,4,ch);
} else
{if((state_val_27470 === 34))
{var state_27469__$1 = state_27469;var statearr_27479_29202 = state_27469__$1;(statearr_27479_29202[2] = null);
(statearr_27479_29202[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 3))
{var inst_27467 = (state_27469[2]);var state_27469__$1 = state_27469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27469__$1,inst_27467);
} else
{if((state_val_27470 === 35))
{var inst_27451 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27480_29203 = state_27469__$1;(statearr_27480_29203[2] = inst_27451);
(statearr_27480_29203[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 4))
{var inst_27341 = (state_27469[13]);var inst_27341__$1 = (state_27469[2]);var inst_27342 = (inst_27341__$1 == null);var state_27469__$1 = (function (){var statearr_27481 = state_27469;(statearr_27481[13] = inst_27341__$1);
return statearr_27481;
})();if(cljs.core.truth_(inst_27342))
{var statearr_27482_29204 = state_27469__$1;(statearr_27482_29204[1] = 5);
} else
{var statearr_27483_29205 = state_27469__$1;(statearr_27483_29205[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 36))
{var inst_27428 = (state_27469[12]);var inst_27432 = cljs.core.chunk_first.call(null,inst_27428);var inst_27433 = cljs.core.chunk_rest.call(null,inst_27428);var inst_27434 = cljs.core.count.call(null,inst_27432);var inst_27409 = inst_27433;var inst_27410 = inst_27432;var inst_27411 = inst_27434;var inst_27412 = 0;var state_27469__$1 = (function (){var statearr_27484 = state_27469;(statearr_27484[7] = inst_27411);
(statearr_27484[8] = inst_27412);
(statearr_27484[9] = inst_27410);
(statearr_27484[10] = inst_27409);
return statearr_27484;
})();var statearr_27485_29206 = state_27469__$1;(statearr_27485_29206[2] = null);
(statearr_27485_29206[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 5))
{var inst_27348 = cljs.core.deref.call(null,cs);var inst_27349 = cljs.core.seq.call(null,inst_27348);var inst_27350 = inst_27349;var inst_27351 = null;var inst_27352 = 0;var inst_27353 = 0;var state_27469__$1 = (function (){var statearr_27486 = state_27469;(statearr_27486[14] = inst_27351);
(statearr_27486[15] = inst_27350);
(statearr_27486[16] = inst_27353);
(statearr_27486[17] = inst_27352);
return statearr_27486;
})();var statearr_27487_29207 = state_27469__$1;(statearr_27487_29207[2] = null);
(statearr_27487_29207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 37))
{var inst_27428 = (state_27469[12]);var inst_27437 = (state_27469[18]);var inst_27341 = (state_27469[13]);var inst_27437__$1 = cljs.core.first.call(null,inst_27428);var inst_27438 = cljs.core.async.put_BANG_.call(null,inst_27437__$1,inst_27341,done);var state_27469__$1 = (function (){var statearr_27488 = state_27469;(statearr_27488[18] = inst_27437__$1);
return statearr_27488;
})();if(cljs.core.truth_(inst_27438))
{var statearr_27489_29208 = state_27469__$1;(statearr_27489_29208[1] = 39);
} else
{var statearr_27490_29209 = state_27469__$1;(statearr_27490_29209[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 6))
{var inst_27401 = (state_27469[19]);var inst_27400 = cljs.core.deref.call(null,cs);var inst_27401__$1 = cljs.core.keys.call(null,inst_27400);var inst_27402 = cljs.core.count.call(null,inst_27401__$1);var inst_27403 = cljs.core.reset_BANG_.call(null,dctr,inst_27402);var inst_27408 = cljs.core.seq.call(null,inst_27401__$1);var inst_27409 = inst_27408;var inst_27410 = null;var inst_27411 = 0;var inst_27412 = 0;var state_27469__$1 = (function (){var statearr_27491 = state_27469;(statearr_27491[20] = inst_27403);
(statearr_27491[19] = inst_27401__$1);
(statearr_27491[7] = inst_27411);
(statearr_27491[8] = inst_27412);
(statearr_27491[9] = inst_27410);
(statearr_27491[10] = inst_27409);
return statearr_27491;
})();var statearr_27492_29210 = state_27469__$1;(statearr_27492_29210[2] = null);
(statearr_27492_29210[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 38))
{var inst_27448 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27493_29211 = state_27469__$1;(statearr_27493_29211[2] = inst_27448);
(statearr_27493_29211[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 7))
{var inst_27465 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27494_29212 = state_27469__$1;(statearr_27494_29212[2] = inst_27465);
(statearr_27494_29212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 39))
{var state_27469__$1 = state_27469;var statearr_27495_29213 = state_27469__$1;(statearr_27495_29213[2] = null);
(statearr_27495_29213[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 8))
{var inst_27353 = (state_27469[16]);var inst_27352 = (state_27469[17]);var inst_27355 = (inst_27353 < inst_27352);var inst_27356 = inst_27355;var state_27469__$1 = state_27469;if(cljs.core.truth_(inst_27356))
{var statearr_27496_29214 = state_27469__$1;(statearr_27496_29214[1] = 10);
} else
{var statearr_27497_29215 = state_27469__$1;(statearr_27497_29215[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 40))
{var inst_27437 = (state_27469[18]);var inst_27441 = done.call(null,null);var inst_27442 = cljs.core.async.untap_STAR_.call(null,m,inst_27437);var state_27469__$1 = (function (){var statearr_27498 = state_27469;(statearr_27498[21] = inst_27441);
return statearr_27498;
})();var statearr_27499_29216 = state_27469__$1;(statearr_27499_29216[2] = inst_27442);
(statearr_27499_29216[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 9))
{var inst_27398 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27500_29217 = state_27469__$1;(statearr_27500_29217[2] = inst_27398);
(statearr_27500_29217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 41))
{var inst_27428 = (state_27469[12]);var inst_27444 = (state_27469[2]);var inst_27445 = cljs.core.next.call(null,inst_27428);var inst_27409 = inst_27445;var inst_27410 = null;var inst_27411 = 0;var inst_27412 = 0;var state_27469__$1 = (function (){var statearr_27501 = state_27469;(statearr_27501[22] = inst_27444);
(statearr_27501[7] = inst_27411);
(statearr_27501[8] = inst_27412);
(statearr_27501[9] = inst_27410);
(statearr_27501[10] = inst_27409);
return statearr_27501;
})();var statearr_27502_29218 = state_27469__$1;(statearr_27502_29218[2] = null);
(statearr_27502_29218[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 10))
{var inst_27351 = (state_27469[14]);var inst_27353 = (state_27469[16]);var inst_27359 = cljs.core._nth.call(null,inst_27351,inst_27353);var inst_27360 = cljs.core.nth.call(null,inst_27359,0,null);var inst_27361 = cljs.core.nth.call(null,inst_27359,1,null);var state_27469__$1 = (function (){var statearr_27503 = state_27469;(statearr_27503[23] = inst_27360);
return statearr_27503;
})();if(cljs.core.truth_(inst_27361))
{var statearr_27504_29219 = state_27469__$1;(statearr_27504_29219[1] = 13);
} else
{var statearr_27505_29220 = state_27469__$1;(statearr_27505_29220[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 42))
{var state_27469__$1 = state_27469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27469__$1,45,dchan);
} else
{if((state_val_27470 === 11))
{var inst_27350 = (state_27469[15]);var inst_27370 = (state_27469[24]);var inst_27370__$1 = cljs.core.seq.call(null,inst_27350);var state_27469__$1 = (function (){var statearr_27506 = state_27469;(statearr_27506[24] = inst_27370__$1);
return statearr_27506;
})();if(inst_27370__$1)
{var statearr_27507_29221 = state_27469__$1;(statearr_27507_29221[1] = 16);
} else
{var statearr_27508_29222 = state_27469__$1;(statearr_27508_29222[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 43))
{var state_27469__$1 = state_27469;var statearr_27509_29223 = state_27469__$1;(statearr_27509_29223[2] = null);
(statearr_27509_29223[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 12))
{var inst_27396 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27510_29224 = state_27469__$1;(statearr_27510_29224[2] = inst_27396);
(statearr_27510_29224[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 44))
{var inst_27462 = (state_27469[2]);var state_27469__$1 = (function (){var statearr_27511 = state_27469;(statearr_27511[25] = inst_27462);
return statearr_27511;
})();var statearr_27512_29225 = state_27469__$1;(statearr_27512_29225[2] = null);
(statearr_27512_29225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 13))
{var inst_27360 = (state_27469[23]);var inst_27363 = cljs.core.async.close_BANG_.call(null,inst_27360);var state_27469__$1 = state_27469;var statearr_27513_29226 = state_27469__$1;(statearr_27513_29226[2] = inst_27363);
(statearr_27513_29226[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 45))
{var inst_27459 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27517_29227 = state_27469__$1;(statearr_27517_29227[2] = inst_27459);
(statearr_27517_29227[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 14))
{var state_27469__$1 = state_27469;var statearr_27518_29228 = state_27469__$1;(statearr_27518_29228[2] = null);
(statearr_27518_29228[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 15))
{var inst_27351 = (state_27469[14]);var inst_27350 = (state_27469[15]);var inst_27353 = (state_27469[16]);var inst_27352 = (state_27469[17]);var inst_27366 = (state_27469[2]);var inst_27367 = (inst_27353 + 1);var tmp27514 = inst_27351;var tmp27515 = inst_27350;var tmp27516 = inst_27352;var inst_27350__$1 = tmp27515;var inst_27351__$1 = tmp27514;var inst_27352__$1 = tmp27516;var inst_27353__$1 = inst_27367;var state_27469__$1 = (function (){var statearr_27519 = state_27469;(statearr_27519[14] = inst_27351__$1);
(statearr_27519[15] = inst_27350__$1);
(statearr_27519[16] = inst_27353__$1);
(statearr_27519[17] = inst_27352__$1);
(statearr_27519[26] = inst_27366);
return statearr_27519;
})();var statearr_27520_29229 = state_27469__$1;(statearr_27520_29229[2] = null);
(statearr_27520_29229[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 16))
{var inst_27370 = (state_27469[24]);var inst_27372 = cljs.core.chunked_seq_QMARK_.call(null,inst_27370);var state_27469__$1 = state_27469;if(inst_27372)
{var statearr_27521_29230 = state_27469__$1;(statearr_27521_29230[1] = 19);
} else
{var statearr_27522_29231 = state_27469__$1;(statearr_27522_29231[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 17))
{var state_27469__$1 = state_27469;var statearr_27523_29232 = state_27469__$1;(statearr_27523_29232[2] = null);
(statearr_27523_29232[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 18))
{var inst_27394 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27524_29233 = state_27469__$1;(statearr_27524_29233[2] = inst_27394);
(statearr_27524_29233[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 19))
{var inst_27370 = (state_27469[24]);var inst_27374 = cljs.core.chunk_first.call(null,inst_27370);var inst_27375 = cljs.core.chunk_rest.call(null,inst_27370);var inst_27376 = cljs.core.count.call(null,inst_27374);var inst_27350 = inst_27375;var inst_27351 = inst_27374;var inst_27352 = inst_27376;var inst_27353 = 0;var state_27469__$1 = (function (){var statearr_27525 = state_27469;(statearr_27525[14] = inst_27351);
(statearr_27525[15] = inst_27350);
(statearr_27525[16] = inst_27353);
(statearr_27525[17] = inst_27352);
return statearr_27525;
})();var statearr_27526_29234 = state_27469__$1;(statearr_27526_29234[2] = null);
(statearr_27526_29234[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 20))
{var inst_27370 = (state_27469[24]);var inst_27380 = cljs.core.first.call(null,inst_27370);var inst_27381 = cljs.core.nth.call(null,inst_27380,0,null);var inst_27382 = cljs.core.nth.call(null,inst_27380,1,null);var state_27469__$1 = (function (){var statearr_27527 = state_27469;(statearr_27527[27] = inst_27381);
return statearr_27527;
})();if(cljs.core.truth_(inst_27382))
{var statearr_27528_29235 = state_27469__$1;(statearr_27528_29235[1] = 22);
} else
{var statearr_27529_29236 = state_27469__$1;(statearr_27529_29236[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 21))
{var inst_27391 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27530_29237 = state_27469__$1;(statearr_27530_29237[2] = inst_27391);
(statearr_27530_29237[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 22))
{var inst_27381 = (state_27469[27]);var inst_27384 = cljs.core.async.close_BANG_.call(null,inst_27381);var state_27469__$1 = state_27469;var statearr_27531_29238 = state_27469__$1;(statearr_27531_29238[2] = inst_27384);
(statearr_27531_29238[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 23))
{var state_27469__$1 = state_27469;var statearr_27532_29239 = state_27469__$1;(statearr_27532_29239[2] = null);
(statearr_27532_29239[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 24))
{var inst_27370 = (state_27469[24]);var inst_27387 = (state_27469[2]);var inst_27388 = cljs.core.next.call(null,inst_27370);var inst_27350 = inst_27388;var inst_27351 = null;var inst_27352 = 0;var inst_27353 = 0;var state_27469__$1 = (function (){var statearr_27533 = state_27469;(statearr_27533[14] = inst_27351);
(statearr_27533[15] = inst_27350);
(statearr_27533[16] = inst_27353);
(statearr_27533[17] = inst_27352);
(statearr_27533[28] = inst_27387);
return statearr_27533;
})();var statearr_27534_29240 = state_27469__$1;(statearr_27534_29240[2] = null);
(statearr_27534_29240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 25))
{var inst_27411 = (state_27469[7]);var inst_27412 = (state_27469[8]);var inst_27414 = (inst_27412 < inst_27411);var inst_27415 = inst_27414;var state_27469__$1 = state_27469;if(cljs.core.truth_(inst_27415))
{var statearr_27535_29241 = state_27469__$1;(statearr_27535_29241[1] = 27);
} else
{var statearr_27536_29242 = state_27469__$1;(statearr_27536_29242[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 26))
{var inst_27401 = (state_27469[19]);var inst_27455 = (state_27469[2]);var inst_27456 = cljs.core.seq.call(null,inst_27401);var state_27469__$1 = (function (){var statearr_27537 = state_27469;(statearr_27537[29] = inst_27455);
return statearr_27537;
})();if(inst_27456)
{var statearr_27538_29243 = state_27469__$1;(statearr_27538_29243[1] = 42);
} else
{var statearr_27539_29244 = state_27469__$1;(statearr_27539_29244[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 27))
{var inst_27412 = (state_27469[8]);var inst_27410 = (state_27469[9]);var inst_27417 = (state_27469[30]);var inst_27341 = (state_27469[13]);var inst_27417__$1 = cljs.core._nth.call(null,inst_27410,inst_27412);var inst_27418 = cljs.core.async.put_BANG_.call(null,inst_27417__$1,inst_27341,done);var state_27469__$1 = (function (){var statearr_27540 = state_27469;(statearr_27540[30] = inst_27417__$1);
return statearr_27540;
})();if(cljs.core.truth_(inst_27418))
{var statearr_27541_29245 = state_27469__$1;(statearr_27541_29245[1] = 30);
} else
{var statearr_27542_29246 = state_27469__$1;(statearr_27542_29246[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 28))
{var inst_27428 = (state_27469[12]);var inst_27409 = (state_27469[10]);var inst_27428__$1 = cljs.core.seq.call(null,inst_27409);var state_27469__$1 = (function (){var statearr_27543 = state_27469;(statearr_27543[12] = inst_27428__$1);
return statearr_27543;
})();if(inst_27428__$1)
{var statearr_27544_29247 = state_27469__$1;(statearr_27544_29247[1] = 33);
} else
{var statearr_27545_29248 = state_27469__$1;(statearr_27545_29248[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 29))
{var inst_27453 = (state_27469[2]);var state_27469__$1 = state_27469;var statearr_27546_29249 = state_27469__$1;(statearr_27546_29249[2] = inst_27453);
(statearr_27546_29249[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 30))
{var state_27469__$1 = state_27469;var statearr_27547_29250 = state_27469__$1;(statearr_27547_29250[2] = null);
(statearr_27547_29250[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27470 === 31))
{var inst_27417 = (state_27469[30]);var inst_27421 = done.call(null,null);var inst_27422 = cljs.core.async.untap_STAR_.call(null,m,inst_27417);var state_27469__$1 = (function (){var statearr_27548 = state_27469;(statearr_27548[31] = inst_27421);
return statearr_27548;
})();var statearr_27549_29251 = state_27469__$1;(statearr_27549_29251[2] = inst_27422);
(statearr_27549_29251[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29197,cs,m,dchan,dctr,done))
;return ((function (switch__22862__auto__,c__22938__auto___29197,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_27553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27553[0] = state_machine__22863__auto__);
(statearr_27553[1] = 1);
return statearr_27553;
});
var state_machine__22863__auto____1 = (function (state_27469){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_27469);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e27554){if((e27554 instanceof Object))
{var ex__22866__auto__ = e27554;var statearr_27555_29252 = state_27469;(statearr_27555_29252[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29253 = state_27469;
state_27469 = G__29253;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29197,cs,m,dchan,dctr,done))
})();var state__22940__auto__ = (function (){var statearr_27556 = f__22939__auto__.call(null);(statearr_27556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29197);
return statearr_27556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29197,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj27558 = {};return obj27558;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27678 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27679){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta27679 = meta27679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27678.cljs$lang$type = true;
cljs.core.async.t27678.cljs$lang$ctorStr = "cljs.core.async/t27678";
cljs.core.async.t27678.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27678");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27678.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27680){var self__ = this;
var _27680__$1 = this;return self__.meta27679;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27680,meta27679__$1){var self__ = this;
var _27680__$1 = this;return (new cljs.core.async.t27678(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27679__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27678 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27678(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27679){return (new cljs.core.async.t27678(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27679));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27678(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22938__auto___29254 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27750){var state_val_27751 = (state_27750[1]);if((state_val_27751 === 1))
{var inst_27684 = (state_27750[7]);var inst_27684__$1 = calc_state.call(null);var inst_27685 = cljs.core.seq_QMARK_.call(null,inst_27684__$1);var state_27750__$1 = (function (){var statearr_27752 = state_27750;(statearr_27752[7] = inst_27684__$1);
return statearr_27752;
})();if(inst_27685)
{var statearr_27753_29255 = state_27750__$1;(statearr_27753_29255[1] = 2);
} else
{var statearr_27754_29256 = state_27750__$1;(statearr_27754_29256[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 2))
{var inst_27684 = (state_27750[7]);var inst_27687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27684);var state_27750__$1 = state_27750;var statearr_27755_29257 = state_27750__$1;(statearr_27755_29257[2] = inst_27687);
(statearr_27755_29257[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 3))
{var inst_27684 = (state_27750[7]);var state_27750__$1 = state_27750;var statearr_27756_29258 = state_27750__$1;(statearr_27756_29258[2] = inst_27684);
(statearr_27756_29258[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 4))
{var inst_27684 = (state_27750[7]);var inst_27690 = (state_27750[2]);var inst_27691 = cljs.core.get.call(null,inst_27690,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27692 = cljs.core.get.call(null,inst_27690,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27693 = cljs.core.get.call(null,inst_27690,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27694 = inst_27684;var state_27750__$1 = (function (){var statearr_27757 = state_27750;(statearr_27757[8] = inst_27692);
(statearr_27757[9] = inst_27691);
(statearr_27757[10] = inst_27694);
(statearr_27757[11] = inst_27693);
return statearr_27757;
})();var statearr_27758_29259 = state_27750__$1;(statearr_27758_29259[2] = null);
(statearr_27758_29259[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 5))
{var inst_27694 = (state_27750[10]);var inst_27697 = cljs.core.seq_QMARK_.call(null,inst_27694);var state_27750__$1 = state_27750;if(inst_27697)
{var statearr_27759_29260 = state_27750__$1;(statearr_27759_29260[1] = 7);
} else
{var statearr_27760_29261 = state_27750__$1;(statearr_27760_29261[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 6))
{var inst_27748 = (state_27750[2]);var state_27750__$1 = state_27750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27750__$1,inst_27748);
} else
{if((state_val_27751 === 7))
{var inst_27694 = (state_27750[10]);var inst_27699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27694);var state_27750__$1 = state_27750;var statearr_27761_29262 = state_27750__$1;(statearr_27761_29262[2] = inst_27699);
(statearr_27761_29262[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 8))
{var inst_27694 = (state_27750[10]);var state_27750__$1 = state_27750;var statearr_27762_29263 = state_27750__$1;(statearr_27762_29263[2] = inst_27694);
(statearr_27762_29263[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 9))
{var inst_27702 = (state_27750[12]);var inst_27702__$1 = (state_27750[2]);var inst_27703 = cljs.core.get.call(null,inst_27702__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27704 = cljs.core.get.call(null,inst_27702__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27705 = cljs.core.get.call(null,inst_27702__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27750__$1 = (function (){var statearr_27763 = state_27750;(statearr_27763[13] = inst_27704);
(statearr_27763[14] = inst_27705);
(statearr_27763[12] = inst_27702__$1);
return statearr_27763;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27750__$1,10,inst_27703);
} else
{if((state_val_27751 === 10))
{var inst_27710 = (state_27750[15]);var inst_27709 = (state_27750[16]);var inst_27708 = (state_27750[2]);var inst_27709__$1 = cljs.core.nth.call(null,inst_27708,0,null);var inst_27710__$1 = cljs.core.nth.call(null,inst_27708,1,null);var inst_27711 = (inst_27709__$1 == null);var inst_27712 = cljs.core._EQ_.call(null,inst_27710__$1,change);var inst_27713 = (inst_27711) || (inst_27712);var state_27750__$1 = (function (){var statearr_27764 = state_27750;(statearr_27764[15] = inst_27710__$1);
(statearr_27764[16] = inst_27709__$1);
return statearr_27764;
})();if(cljs.core.truth_(inst_27713))
{var statearr_27765_29264 = state_27750__$1;(statearr_27765_29264[1] = 11);
} else
{var statearr_27766_29265 = state_27750__$1;(statearr_27766_29265[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 11))
{var inst_27709 = (state_27750[16]);var inst_27715 = (inst_27709 == null);var state_27750__$1 = state_27750;if(cljs.core.truth_(inst_27715))
{var statearr_27767_29266 = state_27750__$1;(statearr_27767_29266[1] = 14);
} else
{var statearr_27768_29267 = state_27750__$1;(statearr_27768_29267[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 12))
{var inst_27724 = (state_27750[17]);var inst_27705 = (state_27750[14]);var inst_27710 = (state_27750[15]);var inst_27724__$1 = inst_27705.call(null,inst_27710);var state_27750__$1 = (function (){var statearr_27769 = state_27750;(statearr_27769[17] = inst_27724__$1);
return statearr_27769;
})();if(cljs.core.truth_(inst_27724__$1))
{var statearr_27770_29268 = state_27750__$1;(statearr_27770_29268[1] = 17);
} else
{var statearr_27771_29269 = state_27750__$1;(statearr_27771_29269[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 13))
{var inst_27746 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27772_29270 = state_27750__$1;(statearr_27772_29270[2] = inst_27746);
(statearr_27772_29270[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 14))
{var inst_27710 = (state_27750[15]);var inst_27717 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27710);var state_27750__$1 = state_27750;var statearr_27773_29271 = state_27750__$1;(statearr_27773_29271[2] = inst_27717);
(statearr_27773_29271[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 15))
{var state_27750__$1 = state_27750;var statearr_27774_29272 = state_27750__$1;(statearr_27774_29272[2] = null);
(statearr_27774_29272[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 16))
{var inst_27720 = (state_27750[2]);var inst_27721 = calc_state.call(null);var inst_27694 = inst_27721;var state_27750__$1 = (function (){var statearr_27775 = state_27750;(statearr_27775[18] = inst_27720);
(statearr_27775[10] = inst_27694);
return statearr_27775;
})();var statearr_27776_29273 = state_27750__$1;(statearr_27776_29273[2] = null);
(statearr_27776_29273[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 17))
{var inst_27724 = (state_27750[17]);var state_27750__$1 = state_27750;var statearr_27777_29274 = state_27750__$1;(statearr_27777_29274[2] = inst_27724);
(statearr_27777_29274[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 18))
{var inst_27704 = (state_27750[13]);var inst_27705 = (state_27750[14]);var inst_27710 = (state_27750[15]);var inst_27727 = cljs.core.empty_QMARK_.call(null,inst_27705);var inst_27728 = inst_27704.call(null,inst_27710);var inst_27729 = cljs.core.not.call(null,inst_27728);var inst_27730 = (inst_27727) && (inst_27729);var state_27750__$1 = state_27750;var statearr_27778_29275 = state_27750__$1;(statearr_27778_29275[2] = inst_27730);
(statearr_27778_29275[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 19))
{var inst_27732 = (state_27750[2]);var state_27750__$1 = state_27750;if(cljs.core.truth_(inst_27732))
{var statearr_27779_29276 = state_27750__$1;(statearr_27779_29276[1] = 20);
} else
{var statearr_27780_29277 = state_27750__$1;(statearr_27780_29277[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 20))
{var inst_27709 = (state_27750[16]);var state_27750__$1 = state_27750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27750__$1,23,out,inst_27709);
} else
{if((state_val_27751 === 21))
{var inst_27702 = (state_27750[12]);var inst_27694 = inst_27702;var state_27750__$1 = (function (){var statearr_27781 = state_27750;(statearr_27781[10] = inst_27694);
return statearr_27781;
})();var statearr_27782_29278 = state_27750__$1;(statearr_27782_29278[2] = null);
(statearr_27782_29278[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 22))
{var inst_27744 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27783_29279 = state_27750__$1;(statearr_27783_29279[2] = inst_27744);
(statearr_27783_29279[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 23))
{var inst_27735 = (state_27750[2]);var state_27750__$1 = state_27750;if(cljs.core.truth_(inst_27735))
{var statearr_27784_29280 = state_27750__$1;(statearr_27784_29280[1] = 24);
} else
{var statearr_27785_29281 = state_27750__$1;(statearr_27785_29281[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 24))
{var inst_27702 = (state_27750[12]);var inst_27694 = inst_27702;var state_27750__$1 = (function (){var statearr_27786 = state_27750;(statearr_27786[10] = inst_27694);
return statearr_27786;
})();var statearr_27787_29282 = state_27750__$1;(statearr_27787_29282[2] = null);
(statearr_27787_29282[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 25))
{var state_27750__$1 = state_27750;var statearr_27788_29283 = state_27750__$1;(statearr_27788_29283[2] = null);
(statearr_27788_29283[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 26))
{var inst_27740 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27789_29284 = state_27750__$1;(statearr_27789_29284[2] = inst_27740);
(statearr_27789_29284[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
});})(c__22938__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22862__auto__,c__22938__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_27793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27793[0] = state_machine__22863__auto__);
(statearr_27793[1] = 1);
return statearr_27793;
});
var state_machine__22863__auto____1 = (function (state_27750){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_27750);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e27794){if((e27794 instanceof Object))
{var ex__22866__auto__ = e27794;var statearr_27795_29285 = state_27750;(statearr_27795_29285[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27750);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29286 = state_27750;
state_27750 = G__29286;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_27750){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_27750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22940__auto__ = (function (){var statearr_27796 = f__22939__auto__.call(null);(statearr_27796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29254);
return statearr_27796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27798 = {};return obj27798;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__19803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19803__auto__,mults){
return (function (p1__27799_SHARP_){if(cljs.core.truth_(p1__27799_SHARP_.call(null,topic)))
{return p1__27799_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27799_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27922 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27923){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27923 = meta27923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27922.cljs$lang$type = true;
cljs.core.async.t27922.cljs$lang$ctorStr = "cljs.core.async/t27922";
cljs.core.async.t27922.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27922");
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27924){var self__ = this;
var _27924__$1 = this;return self__.meta27923;
});})(mults,ensure_mult))
;
cljs.core.async.t27922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27924,meta27923__$1){var self__ = this;
var _27924__$1 = this;return (new cljs.core.async.t27922(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27923__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27922 = ((function (mults,ensure_mult){
return (function __GT_t27922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27923){return (new cljs.core.async.t27922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27923));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27922(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22938__auto___29287 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29287,mults,ensure_mult,p){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29287,mults,ensure_mult,p){
return (function (state_27996){var state_val_27997 = (state_27996[1]);if((state_val_27997 === 1))
{var state_27996__$1 = state_27996;var statearr_27998_29288 = state_27996__$1;(statearr_27998_29288[2] = null);
(statearr_27998_29288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 2))
{var state_27996__$1 = state_27996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,4,ch);
} else
{if((state_val_27997 === 3))
{var inst_27994 = (state_27996[2]);var state_27996__$1 = state_27996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27996__$1,inst_27994);
} else
{if((state_val_27997 === 4))
{var inst_27927 = (state_27996[7]);var inst_27927__$1 = (state_27996[2]);var inst_27928 = (inst_27927__$1 == null);var state_27996__$1 = (function (){var statearr_27999 = state_27996;(statearr_27999[7] = inst_27927__$1);
return statearr_27999;
})();if(cljs.core.truth_(inst_27928))
{var statearr_28000_29289 = state_27996__$1;(statearr_28000_29289[1] = 5);
} else
{var statearr_28001_29290 = state_27996__$1;(statearr_28001_29290[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 5))
{var inst_27934 = cljs.core.deref.call(null,mults);var inst_27935 = cljs.core.vals.call(null,inst_27934);var inst_27936 = cljs.core.seq.call(null,inst_27935);var inst_27937 = inst_27936;var inst_27938 = null;var inst_27939 = 0;var inst_27940 = 0;var state_27996__$1 = (function (){var statearr_28002 = state_27996;(statearr_28002[8] = inst_27939);
(statearr_28002[9] = inst_27938);
(statearr_28002[10] = inst_27937);
(statearr_28002[11] = inst_27940);
return statearr_28002;
})();var statearr_28003_29291 = state_27996__$1;(statearr_28003_29291[2] = null);
(statearr_28003_29291[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 6))
{var inst_27927 = (state_27996[7]);var inst_27977 = (state_27996[12]);var inst_27975 = (state_27996[13]);var inst_27975__$1 = topic_fn.call(null,inst_27927);var inst_27976 = cljs.core.deref.call(null,mults);var inst_27977__$1 = cljs.core.get.call(null,inst_27976,inst_27975__$1);var state_27996__$1 = (function (){var statearr_28004 = state_27996;(statearr_28004[12] = inst_27977__$1);
(statearr_28004[13] = inst_27975__$1);
return statearr_28004;
})();if(cljs.core.truth_(inst_27977__$1))
{var statearr_28005_29292 = state_27996__$1;(statearr_28005_29292[1] = 19);
} else
{var statearr_28006_29293 = state_27996__$1;(statearr_28006_29293[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 7))
{var inst_27992 = (state_27996[2]);var state_27996__$1 = state_27996;var statearr_28007_29294 = state_27996__$1;(statearr_28007_29294[2] = inst_27992);
(statearr_28007_29294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 8))
{var inst_27939 = (state_27996[8]);var inst_27940 = (state_27996[11]);var inst_27942 = (inst_27940 < inst_27939);var inst_27943 = inst_27942;var state_27996__$1 = state_27996;if(cljs.core.truth_(inst_27943))
{var statearr_28011_29295 = state_27996__$1;(statearr_28011_29295[1] = 10);
} else
{var statearr_28012_29296 = state_27996__$1;(statearr_28012_29296[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 9))
{var inst_27973 = (state_27996[2]);var state_27996__$1 = state_27996;var statearr_28013_29297 = state_27996__$1;(statearr_28013_29297[2] = inst_27973);
(statearr_28013_29297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 10))
{var inst_27939 = (state_27996[8]);var inst_27938 = (state_27996[9]);var inst_27937 = (state_27996[10]);var inst_27940 = (state_27996[11]);var inst_27945 = cljs.core._nth.call(null,inst_27938,inst_27940);var inst_27946 = cljs.core.async.muxch_STAR_.call(null,inst_27945);var inst_27947 = cljs.core.async.close_BANG_.call(null,inst_27946);var inst_27948 = (inst_27940 + 1);var tmp28008 = inst_27939;var tmp28009 = inst_27938;var tmp28010 = inst_27937;var inst_27937__$1 = tmp28010;var inst_27938__$1 = tmp28009;var inst_27939__$1 = tmp28008;var inst_27940__$1 = inst_27948;var state_27996__$1 = (function (){var statearr_28014 = state_27996;(statearr_28014[8] = inst_27939__$1);
(statearr_28014[9] = inst_27938__$1);
(statearr_28014[14] = inst_27947);
(statearr_28014[10] = inst_27937__$1);
(statearr_28014[11] = inst_27940__$1);
return statearr_28014;
})();var statearr_28015_29298 = state_27996__$1;(statearr_28015_29298[2] = null);
(statearr_28015_29298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 11))
{var inst_27951 = (state_27996[15]);var inst_27937 = (state_27996[10]);var inst_27951__$1 = cljs.core.seq.call(null,inst_27937);var state_27996__$1 = (function (){var statearr_28016 = state_27996;(statearr_28016[15] = inst_27951__$1);
return statearr_28016;
})();if(inst_27951__$1)
{var statearr_28017_29299 = state_27996__$1;(statearr_28017_29299[1] = 13);
} else
{var statearr_28018_29300 = state_27996__$1;(statearr_28018_29300[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 12))
{var inst_27971 = (state_27996[2]);var state_27996__$1 = state_27996;var statearr_28019_29301 = state_27996__$1;(statearr_28019_29301[2] = inst_27971);
(statearr_28019_29301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 13))
{var inst_27951 = (state_27996[15]);var inst_27953 = cljs.core.chunked_seq_QMARK_.call(null,inst_27951);var state_27996__$1 = state_27996;if(inst_27953)
{var statearr_28020_29302 = state_27996__$1;(statearr_28020_29302[1] = 16);
} else
{var statearr_28021_29303 = state_27996__$1;(statearr_28021_29303[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 14))
{var state_27996__$1 = state_27996;var statearr_28022_29304 = state_27996__$1;(statearr_28022_29304[2] = null);
(statearr_28022_29304[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 15))
{var inst_27969 = (state_27996[2]);var state_27996__$1 = state_27996;var statearr_28023_29305 = state_27996__$1;(statearr_28023_29305[2] = inst_27969);
(statearr_28023_29305[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 16))
{var inst_27951 = (state_27996[15]);var inst_27955 = cljs.core.chunk_first.call(null,inst_27951);var inst_27956 = cljs.core.chunk_rest.call(null,inst_27951);var inst_27957 = cljs.core.count.call(null,inst_27955);var inst_27937 = inst_27956;var inst_27938 = inst_27955;var inst_27939 = inst_27957;var inst_27940 = 0;var state_27996__$1 = (function (){var statearr_28024 = state_27996;(statearr_28024[8] = inst_27939);
(statearr_28024[9] = inst_27938);
(statearr_28024[10] = inst_27937);
(statearr_28024[11] = inst_27940);
return statearr_28024;
})();var statearr_28025_29306 = state_27996__$1;(statearr_28025_29306[2] = null);
(statearr_28025_29306[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 17))
{var inst_27951 = (state_27996[15]);var inst_27960 = cljs.core.first.call(null,inst_27951);var inst_27961 = cljs.core.async.muxch_STAR_.call(null,inst_27960);var inst_27962 = cljs.core.async.close_BANG_.call(null,inst_27961);var inst_27963 = cljs.core.next.call(null,inst_27951);var inst_27937 = inst_27963;var inst_27938 = null;var inst_27939 = 0;var inst_27940 = 0;var state_27996__$1 = (function (){var statearr_28026 = state_27996;(statearr_28026[8] = inst_27939);
(statearr_28026[9] = inst_27938);
(statearr_28026[16] = inst_27962);
(statearr_28026[10] = inst_27937);
(statearr_28026[11] = inst_27940);
return statearr_28026;
})();var statearr_28027_29307 = state_27996__$1;(statearr_28027_29307[2] = null);
(statearr_28027_29307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 18))
{var inst_27966 = (state_27996[2]);var state_27996__$1 = state_27996;var statearr_28028_29308 = state_27996__$1;(statearr_28028_29308[2] = inst_27966);
(statearr_28028_29308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 19))
{var inst_27927 = (state_27996[7]);var inst_27977 = (state_27996[12]);var inst_27979 = cljs.core.async.muxch_STAR_.call(null,inst_27977);var state_27996__$1 = state_27996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27996__$1,22,inst_27979,inst_27927);
} else
{if((state_val_27997 === 20))
{var state_27996__$1 = state_27996;var statearr_28029_29309 = state_27996__$1;(statearr_28029_29309[2] = null);
(statearr_28029_29309[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 21))
{var inst_27989 = (state_27996[2]);var state_27996__$1 = (function (){var statearr_28030 = state_27996;(statearr_28030[17] = inst_27989);
return statearr_28030;
})();var statearr_28031_29310 = state_27996__$1;(statearr_28031_29310[2] = null);
(statearr_28031_29310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 22))
{var inst_27981 = (state_27996[2]);var state_27996__$1 = state_27996;if(cljs.core.truth_(inst_27981))
{var statearr_28032_29311 = state_27996__$1;(statearr_28032_29311[1] = 23);
} else
{var statearr_28033_29312 = state_27996__$1;(statearr_28033_29312[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 23))
{var state_27996__$1 = state_27996;var statearr_28034_29313 = state_27996__$1;(statearr_28034_29313[2] = null);
(statearr_28034_29313[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 24))
{var inst_27975 = (state_27996[13]);var inst_27984 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27975);var state_27996__$1 = state_27996;var statearr_28035_29314 = state_27996__$1;(statearr_28035_29314[2] = inst_27984);
(statearr_28035_29314[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27997 === 25))
{var inst_27986 = (state_27996[2]);var state_27996__$1 = state_27996;var statearr_28036_29315 = state_27996__$1;(statearr_28036_29315[2] = inst_27986);
(statearr_28036_29315[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
});})(c__22938__auto___29287,mults,ensure_mult,p))
;return ((function (switch__22862__auto__,c__22938__auto___29287,mults,ensure_mult,p){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28040[0] = state_machine__22863__auto__);
(statearr_28040[1] = 1);
return statearr_28040;
});
var state_machine__22863__auto____1 = (function (state_27996){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_27996);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28041){if((e28041 instanceof Object))
{var ex__22866__auto__ = e28041;var statearr_28042_29316 = state_27996;(statearr_28042_29316[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29317 = state_27996;
state_27996 = G__29317;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_27996){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_27996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29287,mults,ensure_mult,p))
})();var state__22940__auto__ = (function (){var statearr_28043 = f__22939__auto__.call(null);(statearr_28043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29287);
return statearr_28043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29287,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__22938__auto___29318 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28150){var state_val_28151 = (state_28150[1]);if((state_val_28151 === 1))
{var state_28150__$1 = state_28150;var statearr_28152_29319 = state_28150__$1;(statearr_28152_29319[2] = null);
(statearr_28152_29319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 2))
{var inst_28113 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28114 = 0;var state_28150__$1 = (function (){var statearr_28153 = state_28150;(statearr_28153[7] = inst_28113);
(statearr_28153[8] = inst_28114);
return statearr_28153;
})();var statearr_28154_29320 = state_28150__$1;(statearr_28154_29320[2] = null);
(statearr_28154_29320[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 3))
{var inst_28148 = (state_28150[2]);var state_28150__$1 = state_28150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else
{if((state_val_28151 === 4))
{var inst_28114 = (state_28150[8]);var inst_28116 = (inst_28114 < cnt);var state_28150__$1 = state_28150;if(cljs.core.truth_(inst_28116))
{var statearr_28155_29321 = state_28150__$1;(statearr_28155_29321[1] = 6);
} else
{var statearr_28156_29322 = state_28150__$1;(statearr_28156_29322[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 5))
{var inst_28134 = (state_28150[2]);var state_28150__$1 = (function (){var statearr_28157 = state_28150;(statearr_28157[9] = inst_28134);
return statearr_28157;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,12,dchan);
} else
{if((state_val_28151 === 6))
{var state_28150__$1 = state_28150;var statearr_28158_29323 = state_28150__$1;(statearr_28158_29323[2] = null);
(statearr_28158_29323[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 7))
{var state_28150__$1 = state_28150;var statearr_28159_29324 = state_28150__$1;(statearr_28159_29324[2] = null);
(statearr_28159_29324[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 8))
{var inst_28132 = (state_28150[2]);var state_28150__$1 = state_28150;var statearr_28160_29325 = state_28150__$1;(statearr_28160_29325[2] = inst_28132);
(statearr_28160_29325[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 9))
{var inst_28114 = (state_28150[8]);var inst_28127 = (state_28150[2]);var inst_28128 = (inst_28114 + 1);var inst_28114__$1 = inst_28128;var state_28150__$1 = (function (){var statearr_28161 = state_28150;(statearr_28161[10] = inst_28127);
(statearr_28161[8] = inst_28114__$1);
return statearr_28161;
})();var statearr_28162_29326 = state_28150__$1;(statearr_28162_29326[2] = null);
(statearr_28162_29326[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 10))
{var inst_28118 = (state_28150[2]);var inst_28119 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28150__$1 = (function (){var statearr_28163 = state_28150;(statearr_28163[11] = inst_28118);
return statearr_28163;
})();var statearr_28164_29327 = state_28150__$1;(statearr_28164_29327[2] = inst_28119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 11))
{var inst_28114 = (state_28150[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28150,10,Object,null,9);var inst_28123 = chs__$1.call(null,inst_28114);var inst_28124 = done.call(null,inst_28114);var inst_28125 = cljs.core.async.take_BANG_.call(null,inst_28123,inst_28124);var state_28150__$1 = state_28150;var statearr_28165_29328 = state_28150__$1;(statearr_28165_29328[2] = inst_28125);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 12))
{var inst_28136 = (state_28150[12]);var inst_28136__$1 = (state_28150[2]);var inst_28137 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28136__$1);var state_28150__$1 = (function (){var statearr_28166 = state_28150;(statearr_28166[12] = inst_28136__$1);
return statearr_28166;
})();if(cljs.core.truth_(inst_28137))
{var statearr_28167_29329 = state_28150__$1;(statearr_28167_29329[1] = 13);
} else
{var statearr_28168_29330 = state_28150__$1;(statearr_28168_29330[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 13))
{var inst_28139 = cljs.core.async.close_BANG_.call(null,out);var state_28150__$1 = state_28150;var statearr_28169_29331 = state_28150__$1;(statearr_28169_29331[2] = inst_28139);
(statearr_28169_29331[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 14))
{var inst_28136 = (state_28150[12]);var inst_28141 = cljs.core.apply.call(null,f,inst_28136);var state_28150__$1 = state_28150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,16,out,inst_28141);
} else
{if((state_val_28151 === 15))
{var inst_28146 = (state_28150[2]);var state_28150__$1 = state_28150;var statearr_28170_29332 = state_28150__$1;(statearr_28170_29332[2] = inst_28146);
(statearr_28170_29332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 16))
{var inst_28143 = (state_28150[2]);var state_28150__$1 = (function (){var statearr_28171 = state_28150;(statearr_28171[13] = inst_28143);
return statearr_28171;
})();var statearr_28172_29333 = state_28150__$1;(statearr_28172_29333[2] = null);
(statearr_28172_29333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29318,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22862__auto__,c__22938__auto___29318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28176[0] = state_machine__22863__auto__);
(statearr_28176[1] = 1);
return statearr_28176;
});
var state_machine__22863__auto____1 = (function (state_28150){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28150);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object))
{var ex__22866__auto__ = e28177;var statearr_28178_29334 = state_28150;(statearr_28178_29334[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29335 = state_28150;
state_28150 = G__29335;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29318,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22940__auto__ = (function (){var statearr_28179 = f__22939__auto__.call(null);(statearr_28179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29318);
return statearr_28179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29318,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22938__auto___29336 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29336,out){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29336,out){
return (function (state_28263){var state_val_28264 = (state_28263[1]);if((state_val_28264 === 1))
{var inst_28234 = cljs.core.vec.call(null,chs);var inst_28235 = inst_28234;var state_28263__$1 = (function (){var statearr_28265 = state_28263;(statearr_28265[7] = inst_28235);
return statearr_28265;
})();var statearr_28266_29337 = state_28263__$1;(statearr_28266_29337[2] = null);
(statearr_28266_29337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 2))
{var inst_28235 = (state_28263[7]);var inst_28237 = cljs.core.count.call(null,inst_28235);var inst_28238 = (inst_28237 > 0);var state_28263__$1 = state_28263;if(cljs.core.truth_(inst_28238))
{var statearr_28267_29338 = state_28263__$1;(statearr_28267_29338[1] = 4);
} else
{var statearr_28268_29339 = state_28263__$1;(statearr_28268_29339[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 3))
{var inst_28261 = (state_28263[2]);var state_28263__$1 = state_28263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28263__$1,inst_28261);
} else
{if((state_val_28264 === 4))
{var inst_28235 = (state_28263[7]);var state_28263__$1 = state_28263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28263__$1,7,inst_28235);
} else
{if((state_val_28264 === 5))
{var inst_28257 = cljs.core.async.close_BANG_.call(null,out);var state_28263__$1 = state_28263;var statearr_28269_29340 = state_28263__$1;(statearr_28269_29340[2] = inst_28257);
(statearr_28269_29340[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 6))
{var inst_28259 = (state_28263[2]);var state_28263__$1 = state_28263;var statearr_28270_29341 = state_28263__$1;(statearr_28270_29341[2] = inst_28259);
(statearr_28270_29341[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 7))
{var inst_28242 = (state_28263[8]);var inst_28243 = (state_28263[9]);var inst_28242__$1 = (state_28263[2]);var inst_28243__$1 = cljs.core.nth.call(null,inst_28242__$1,0,null);var inst_28244 = cljs.core.nth.call(null,inst_28242__$1,1,null);var inst_28245 = (inst_28243__$1 == null);var state_28263__$1 = (function (){var statearr_28271 = state_28263;(statearr_28271[8] = inst_28242__$1);
(statearr_28271[10] = inst_28244);
(statearr_28271[9] = inst_28243__$1);
return statearr_28271;
})();if(cljs.core.truth_(inst_28245))
{var statearr_28272_29342 = state_28263__$1;(statearr_28272_29342[1] = 8);
} else
{var statearr_28273_29343 = state_28263__$1;(statearr_28273_29343[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 8))
{var inst_28242 = (state_28263[8]);var inst_28244 = (state_28263[10]);var inst_28243 = (state_28263[9]);var inst_28235 = (state_28263[7]);var inst_28247 = (function (){var c = inst_28244;var v = inst_28243;var vec__28240 = inst_28242;var cs = inst_28235;return ((function (c,v,vec__28240,cs,inst_28242,inst_28244,inst_28243,inst_28235,state_val_28264,c__22938__auto___29336,out){
return (function (p1__28180_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28180_SHARP_);
});
;})(c,v,vec__28240,cs,inst_28242,inst_28244,inst_28243,inst_28235,state_val_28264,c__22938__auto___29336,out))
})();var inst_28248 = cljs.core.filterv.call(null,inst_28247,inst_28235);var inst_28235__$1 = inst_28248;var state_28263__$1 = (function (){var statearr_28274 = state_28263;(statearr_28274[7] = inst_28235__$1);
return statearr_28274;
})();var statearr_28275_29344 = state_28263__$1;(statearr_28275_29344[2] = null);
(statearr_28275_29344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 9))
{var inst_28243 = (state_28263[9]);var state_28263__$1 = state_28263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28263__$1,11,out,inst_28243);
} else
{if((state_val_28264 === 10))
{var inst_28255 = (state_28263[2]);var state_28263__$1 = state_28263;var statearr_28277_29345 = state_28263__$1;(statearr_28277_29345[2] = inst_28255);
(statearr_28277_29345[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28264 === 11))
{var inst_28235 = (state_28263[7]);var inst_28252 = (state_28263[2]);var tmp28276 = inst_28235;var inst_28235__$1 = tmp28276;var state_28263__$1 = (function (){var statearr_28278 = state_28263;(statearr_28278[11] = inst_28252);
(statearr_28278[7] = inst_28235__$1);
return statearr_28278;
})();var statearr_28279_29346 = state_28263__$1;(statearr_28279_29346[2] = null);
(statearr_28279_29346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29336,out))
;return ((function (switch__22862__auto__,c__22938__auto___29336,out){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28283 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28283[0] = state_machine__22863__auto__);
(statearr_28283[1] = 1);
return statearr_28283;
});
var state_machine__22863__auto____1 = (function (state_28263){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28263);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28284){if((e28284 instanceof Object))
{var ex__22866__auto__ = e28284;var statearr_28285_29347 = state_28263;(statearr_28285_29347[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29348 = state_28263;
state_28263 = G__29348;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28263){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29336,out))
})();var state__22940__auto__ = (function (){var statearr_28286 = f__22939__auto__.call(null);(statearr_28286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29336);
return statearr_28286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29336,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22938__auto___29349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29349,out){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29349,out){
return (function (state_28356){var state_val_28357 = (state_28356[1]);if((state_val_28357 === 1))
{var inst_28333 = 0;var state_28356__$1 = (function (){var statearr_28358 = state_28356;(statearr_28358[7] = inst_28333);
return statearr_28358;
})();var statearr_28359_29350 = state_28356__$1;(statearr_28359_29350[2] = null);
(statearr_28359_29350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 2))
{var inst_28333 = (state_28356[7]);var inst_28335 = (inst_28333 < n);var state_28356__$1 = state_28356;if(cljs.core.truth_(inst_28335))
{var statearr_28360_29351 = state_28356__$1;(statearr_28360_29351[1] = 4);
} else
{var statearr_28361_29352 = state_28356__$1;(statearr_28361_29352[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 3))
{var inst_28353 = (state_28356[2]);var inst_28354 = cljs.core.async.close_BANG_.call(null,out);var state_28356__$1 = (function (){var statearr_28362 = state_28356;(statearr_28362[8] = inst_28353);
return statearr_28362;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28356__$1,inst_28354);
} else
{if((state_val_28357 === 4))
{var state_28356__$1 = state_28356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28356__$1,7,ch);
} else
{if((state_val_28357 === 5))
{var state_28356__$1 = state_28356;var statearr_28363_29353 = state_28356__$1;(statearr_28363_29353[2] = null);
(statearr_28363_29353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 6))
{var inst_28351 = (state_28356[2]);var state_28356__$1 = state_28356;var statearr_28364_29354 = state_28356__$1;(statearr_28364_29354[2] = inst_28351);
(statearr_28364_29354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 7))
{var inst_28338 = (state_28356[9]);var inst_28338__$1 = (state_28356[2]);var inst_28339 = (inst_28338__$1 == null);var inst_28340 = cljs.core.not.call(null,inst_28339);var state_28356__$1 = (function (){var statearr_28365 = state_28356;(statearr_28365[9] = inst_28338__$1);
return statearr_28365;
})();if(inst_28340)
{var statearr_28366_29355 = state_28356__$1;(statearr_28366_29355[1] = 8);
} else
{var statearr_28367_29356 = state_28356__$1;(statearr_28367_29356[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 8))
{var inst_28338 = (state_28356[9]);var state_28356__$1 = state_28356;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28356__$1,11,out,inst_28338);
} else
{if((state_val_28357 === 9))
{var state_28356__$1 = state_28356;var statearr_28368_29357 = state_28356__$1;(statearr_28368_29357[2] = null);
(statearr_28368_29357[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 10))
{var inst_28348 = (state_28356[2]);var state_28356__$1 = state_28356;var statearr_28369_29358 = state_28356__$1;(statearr_28369_29358[2] = inst_28348);
(statearr_28369_29358[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28357 === 11))
{var inst_28333 = (state_28356[7]);var inst_28343 = (state_28356[2]);var inst_28344 = (inst_28333 + 1);var inst_28333__$1 = inst_28344;var state_28356__$1 = (function (){var statearr_28370 = state_28356;(statearr_28370[7] = inst_28333__$1);
(statearr_28370[10] = inst_28343);
return statearr_28370;
})();var statearr_28371_29359 = state_28356__$1;(statearr_28371_29359[2] = null);
(statearr_28371_29359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29349,out))
;return ((function (switch__22862__auto__,c__22938__auto___29349,out){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28375 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28375[0] = state_machine__22863__auto__);
(statearr_28375[1] = 1);
return statearr_28375;
});
var state_machine__22863__auto____1 = (function (state_28356){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28356);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28376){if((e28376 instanceof Object))
{var ex__22866__auto__ = e28376;var statearr_28377_29360 = state_28356;(statearr_28377_29360[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28356);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29361 = state_28356;
state_28356 = G__29361;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28356){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29349,out))
})();var state__22940__auto__ = (function (){var statearr_28378 = f__22939__auto__.call(null);(statearr_28378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29349);
return statearr_28378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29349,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28386 = (function (ch,f,map_LT_,meta28387){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28387 = meta28387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28386.cljs$lang$type = true;
cljs.core.async.t28386.cljs$lang$ctorStr = "cljs.core.async/t28386";
cljs.core.async.t28386.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28386");
});
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28389 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28389 = (function (fn1,_,meta28387,ch,f,map_LT_,meta28390){
this.fn1 = fn1;
this._ = _;
this.meta28387 = meta28387;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28390 = meta28390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28389.cljs$lang$type = true;
cljs.core.async.t28389.cljs$lang$ctorStr = "cljs.core.async/t28389";
cljs.core.async.t28389.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28389");
});})(___$1))
;
cljs.core.async.t28389.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28389.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28379_SHARP_){return f1.call(null,(((p1__28379_SHARP_ == null))?null:self__.f.call(null,p1__28379_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28391){var self__ = this;
var _28391__$1 = this;return self__.meta28390;
});})(___$1))
;
cljs.core.async.t28389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28391,meta28390__$1){var self__ = this;
var _28391__$1 = this;return (new cljs.core.async.t28389(self__.fn1,self__._,self__.meta28387,self__.ch,self__.f,self__.map_LT_,meta28390__$1));
});})(___$1))
;
cljs.core.async.__GT_t28389 = ((function (___$1){
return (function __GT_t28389(fn1__$1,___$2,meta28387__$1,ch__$2,f__$2,map_LT___$2,meta28390){return (new cljs.core.async.t28389(fn1__$1,___$2,meta28387__$1,ch__$2,f__$2,map_LT___$2,meta28390));
});})(___$1))
;
}
return (new cljs.core.async.t28389(fn1,___$1,self__.meta28387,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19791__auto__ = ret;if(cljs.core.truth_(and__19791__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__19791__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t28386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28388){var self__ = this;
var _28388__$1 = this;return self__.meta28387;
});
cljs.core.async.t28386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28388,meta28387__$1){var self__ = this;
var _28388__$1 = this;return (new cljs.core.async.t28386(self__.ch,self__.f,self__.map_LT_,meta28387__$1));
});
cljs.core.async.__GT_t28386 = (function __GT_t28386(ch__$1,f__$1,map_LT___$1,meta28387){return (new cljs.core.async.t28386(ch__$1,f__$1,map_LT___$1,meta28387));
});
}
return (new cljs.core.async.t28386(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28395 = (function (ch,f,map_GT_,meta28396){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28396 = meta28396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28395.cljs$lang$type = true;
cljs.core.async.t28395.cljs$lang$ctorStr = "cljs.core.async/t28395";
cljs.core.async.t28395.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28395");
});
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28397){var self__ = this;
var _28397__$1 = this;return self__.meta28396;
});
cljs.core.async.t28395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28397,meta28396__$1){var self__ = this;
var _28397__$1 = this;return (new cljs.core.async.t28395(self__.ch,self__.f,self__.map_GT_,meta28396__$1));
});
cljs.core.async.__GT_t28395 = (function __GT_t28395(ch__$1,f__$1,map_GT___$1,meta28396){return (new cljs.core.async.t28395(ch__$1,f__$1,map_GT___$1,meta28396));
});
}
return (new cljs.core.async.t28395(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28401 = (function (ch,p,filter_GT_,meta28402){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28402 = meta28402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28401.cljs$lang$type = true;
cljs.core.async.t28401.cljs$lang$ctorStr = "cljs.core.async/t28401";
cljs.core.async.t28401.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28401");
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t28401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28403){var self__ = this;
var _28403__$1 = this;return self__.meta28402;
});
cljs.core.async.t28401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28403,meta28402__$1){var self__ = this;
var _28403__$1 = this;return (new cljs.core.async.t28401(self__.ch,self__.p,self__.filter_GT_,meta28402__$1));
});
cljs.core.async.__GT_t28401 = (function __GT_t28401(ch__$1,p__$1,filter_GT___$1,meta28402){return (new cljs.core.async.t28401(ch__$1,p__$1,filter_GT___$1,meta28402));
});
}
return (new cljs.core.async.t28401(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22938__auto___29362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29362,out){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29362,out){
return (function (state_28465){var state_val_28466 = (state_28465[1]);if((state_val_28466 === 1))
{var state_28465__$1 = state_28465;var statearr_28467_29363 = state_28465__$1;(statearr_28467_29363[2] = null);
(statearr_28467_29363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 2))
{var state_28465__$1 = state_28465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28465__$1,4,ch);
} else
{if((state_val_28466 === 3))
{var inst_28463 = (state_28465[2]);var state_28465__$1 = state_28465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28465__$1,inst_28463);
} else
{if((state_val_28466 === 4))
{var inst_28447 = (state_28465[7]);var inst_28447__$1 = (state_28465[2]);var inst_28448 = (inst_28447__$1 == null);var state_28465__$1 = (function (){var statearr_28468 = state_28465;(statearr_28468[7] = inst_28447__$1);
return statearr_28468;
})();if(cljs.core.truth_(inst_28448))
{var statearr_28469_29364 = state_28465__$1;(statearr_28469_29364[1] = 5);
} else
{var statearr_28470_29365 = state_28465__$1;(statearr_28470_29365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 5))
{var inst_28450 = cljs.core.async.close_BANG_.call(null,out);var state_28465__$1 = state_28465;var statearr_28471_29366 = state_28465__$1;(statearr_28471_29366[2] = inst_28450);
(statearr_28471_29366[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 6))
{var inst_28447 = (state_28465[7]);var inst_28452 = p.call(null,inst_28447);var state_28465__$1 = state_28465;if(cljs.core.truth_(inst_28452))
{var statearr_28472_29367 = state_28465__$1;(statearr_28472_29367[1] = 8);
} else
{var statearr_28473_29368 = state_28465__$1;(statearr_28473_29368[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 7))
{var inst_28461 = (state_28465[2]);var state_28465__$1 = state_28465;var statearr_28474_29369 = state_28465__$1;(statearr_28474_29369[2] = inst_28461);
(statearr_28474_29369[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 8))
{var inst_28447 = (state_28465[7]);var state_28465__$1 = state_28465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28465__$1,11,out,inst_28447);
} else
{if((state_val_28466 === 9))
{var state_28465__$1 = state_28465;var statearr_28475_29370 = state_28465__$1;(statearr_28475_29370[2] = null);
(statearr_28475_29370[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 10))
{var inst_28458 = (state_28465[2]);var state_28465__$1 = (function (){var statearr_28476 = state_28465;(statearr_28476[8] = inst_28458);
return statearr_28476;
})();var statearr_28477_29371 = state_28465__$1;(statearr_28477_29371[2] = null);
(statearr_28477_29371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28466 === 11))
{var inst_28455 = (state_28465[2]);var state_28465__$1 = state_28465;var statearr_28478_29372 = state_28465__$1;(statearr_28478_29372[2] = inst_28455);
(statearr_28478_29372[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29362,out))
;return ((function (switch__22862__auto__,c__22938__auto___29362,out){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28482 = [null,null,null,null,null,null,null,null,null];(statearr_28482[0] = state_machine__22863__auto__);
(statearr_28482[1] = 1);
return statearr_28482;
});
var state_machine__22863__auto____1 = (function (state_28465){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28465);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28483){if((e28483 instanceof Object))
{var ex__22866__auto__ = e28483;var statearr_28484_29373 = state_28465;(statearr_28484_29373[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28465);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29374 = state_28465;
state_28465 = G__29374;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28465){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29362,out))
})();var state__22940__auto__ = (function (){var statearr_28485 = f__22939__auto__.call(null);(statearr_28485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29362);
return statearr_28485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29362,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22938__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto__){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto__){
return (function (state_28651){var state_val_28652 = (state_28651[1]);if((state_val_28652 === 1))
{var state_28651__$1 = state_28651;var statearr_28653_29375 = state_28651__$1;(statearr_28653_29375[2] = null);
(statearr_28653_29375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 2))
{var state_28651__$1 = state_28651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28651__$1,4,in$);
} else
{if((state_val_28652 === 3))
{var inst_28649 = (state_28651[2]);var state_28651__$1 = state_28651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28651__$1,inst_28649);
} else
{if((state_val_28652 === 4))
{var inst_28592 = (state_28651[7]);var inst_28592__$1 = (state_28651[2]);var inst_28593 = (inst_28592__$1 == null);var state_28651__$1 = (function (){var statearr_28654 = state_28651;(statearr_28654[7] = inst_28592__$1);
return statearr_28654;
})();if(cljs.core.truth_(inst_28593))
{var statearr_28655_29376 = state_28651__$1;(statearr_28655_29376[1] = 5);
} else
{var statearr_28656_29377 = state_28651__$1;(statearr_28656_29377[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 5))
{var inst_28595 = cljs.core.async.close_BANG_.call(null,out);var state_28651__$1 = state_28651;var statearr_28657_29378 = state_28651__$1;(statearr_28657_29378[2] = inst_28595);
(statearr_28657_29378[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 6))
{var inst_28592 = (state_28651[7]);var inst_28601 = f.call(null,inst_28592);var inst_28602 = cljs.core.seq.call(null,inst_28601);var inst_28603 = inst_28602;var inst_28604 = null;var inst_28605 = 0;var inst_28606 = 0;var state_28651__$1 = (function (){var statearr_28658 = state_28651;(statearr_28658[8] = inst_28605);
(statearr_28658[9] = inst_28606);
(statearr_28658[10] = inst_28604);
(statearr_28658[11] = inst_28603);
return statearr_28658;
})();var statearr_28659_29379 = state_28651__$1;(statearr_28659_29379[2] = null);
(statearr_28659_29379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 7))
{var inst_28647 = (state_28651[2]);var state_28651__$1 = state_28651;var statearr_28660_29380 = state_28651__$1;(statearr_28660_29380[2] = inst_28647);
(statearr_28660_29380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 8))
{var inst_28605 = (state_28651[8]);var inst_28606 = (state_28651[9]);var inst_28608 = (inst_28606 < inst_28605);var inst_28609 = inst_28608;var state_28651__$1 = state_28651;if(cljs.core.truth_(inst_28609))
{var statearr_28661_29381 = state_28651__$1;(statearr_28661_29381[1] = 10);
} else
{var statearr_28662_29382 = state_28651__$1;(statearr_28662_29382[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 9))
{var inst_28639 = (state_28651[2]);var inst_28640 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28651__$1 = (function (){var statearr_28663 = state_28651;(statearr_28663[12] = inst_28639);
return statearr_28663;
})();if(cljs.core.truth_(inst_28640))
{var statearr_28664_29383 = state_28651__$1;(statearr_28664_29383[1] = 21);
} else
{var statearr_28665_29384 = state_28651__$1;(statearr_28665_29384[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 10))
{var inst_28606 = (state_28651[9]);var inst_28604 = (state_28651[10]);var inst_28611 = cljs.core._nth.call(null,inst_28604,inst_28606);var state_28651__$1 = state_28651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28651__$1,13,out,inst_28611);
} else
{if((state_val_28652 === 11))
{var inst_28603 = (state_28651[11]);var inst_28617 = (state_28651[13]);var inst_28617__$1 = cljs.core.seq.call(null,inst_28603);var state_28651__$1 = (function (){var statearr_28669 = state_28651;(statearr_28669[13] = inst_28617__$1);
return statearr_28669;
})();if(inst_28617__$1)
{var statearr_28670_29385 = state_28651__$1;(statearr_28670_29385[1] = 14);
} else
{var statearr_28671_29386 = state_28651__$1;(statearr_28671_29386[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 12))
{var inst_28637 = (state_28651[2]);var state_28651__$1 = state_28651;var statearr_28672_29387 = state_28651__$1;(statearr_28672_29387[2] = inst_28637);
(statearr_28672_29387[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 13))
{var inst_28605 = (state_28651[8]);var inst_28606 = (state_28651[9]);var inst_28604 = (state_28651[10]);var inst_28603 = (state_28651[11]);var inst_28613 = (state_28651[2]);var inst_28614 = (inst_28606 + 1);var tmp28666 = inst_28605;var tmp28667 = inst_28604;var tmp28668 = inst_28603;var inst_28603__$1 = tmp28668;var inst_28604__$1 = tmp28667;var inst_28605__$1 = tmp28666;var inst_28606__$1 = inst_28614;var state_28651__$1 = (function (){var statearr_28673 = state_28651;(statearr_28673[8] = inst_28605__$1);
(statearr_28673[9] = inst_28606__$1);
(statearr_28673[14] = inst_28613);
(statearr_28673[10] = inst_28604__$1);
(statearr_28673[11] = inst_28603__$1);
return statearr_28673;
})();var statearr_28674_29388 = state_28651__$1;(statearr_28674_29388[2] = null);
(statearr_28674_29388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 14))
{var inst_28617 = (state_28651[13]);var inst_28619 = cljs.core.chunked_seq_QMARK_.call(null,inst_28617);var state_28651__$1 = state_28651;if(inst_28619)
{var statearr_28675_29389 = state_28651__$1;(statearr_28675_29389[1] = 17);
} else
{var statearr_28676_29390 = state_28651__$1;(statearr_28676_29390[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 15))
{var state_28651__$1 = state_28651;var statearr_28677_29391 = state_28651__$1;(statearr_28677_29391[2] = null);
(statearr_28677_29391[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 16))
{var inst_28635 = (state_28651[2]);var state_28651__$1 = state_28651;var statearr_28678_29392 = state_28651__$1;(statearr_28678_29392[2] = inst_28635);
(statearr_28678_29392[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 17))
{var inst_28617 = (state_28651[13]);var inst_28621 = cljs.core.chunk_first.call(null,inst_28617);var inst_28622 = cljs.core.chunk_rest.call(null,inst_28617);var inst_28623 = cljs.core.count.call(null,inst_28621);var inst_28603 = inst_28622;var inst_28604 = inst_28621;var inst_28605 = inst_28623;var inst_28606 = 0;var state_28651__$1 = (function (){var statearr_28679 = state_28651;(statearr_28679[8] = inst_28605);
(statearr_28679[9] = inst_28606);
(statearr_28679[10] = inst_28604);
(statearr_28679[11] = inst_28603);
return statearr_28679;
})();var statearr_28680_29393 = state_28651__$1;(statearr_28680_29393[2] = null);
(statearr_28680_29393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 18))
{var inst_28617 = (state_28651[13]);var inst_28626 = cljs.core.first.call(null,inst_28617);var state_28651__$1 = state_28651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28651__$1,20,out,inst_28626);
} else
{if((state_val_28652 === 19))
{var inst_28632 = (state_28651[2]);var state_28651__$1 = state_28651;var statearr_28681_29394 = state_28651__$1;(statearr_28681_29394[2] = inst_28632);
(statearr_28681_29394[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 20))
{var inst_28617 = (state_28651[13]);var inst_28628 = (state_28651[2]);var inst_28629 = cljs.core.next.call(null,inst_28617);var inst_28603 = inst_28629;var inst_28604 = null;var inst_28605 = 0;var inst_28606 = 0;var state_28651__$1 = (function (){var statearr_28682 = state_28651;(statearr_28682[8] = inst_28605);
(statearr_28682[9] = inst_28606);
(statearr_28682[10] = inst_28604);
(statearr_28682[11] = inst_28603);
(statearr_28682[15] = inst_28628);
return statearr_28682;
})();var statearr_28683_29395 = state_28651__$1;(statearr_28683_29395[2] = null);
(statearr_28683_29395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 21))
{var state_28651__$1 = state_28651;var statearr_28684_29396 = state_28651__$1;(statearr_28684_29396[2] = null);
(statearr_28684_29396[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 22))
{var state_28651__$1 = state_28651;var statearr_28685_29397 = state_28651__$1;(statearr_28685_29397[2] = null);
(statearr_28685_29397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28652 === 23))
{var inst_28645 = (state_28651[2]);var state_28651__$1 = state_28651;var statearr_28686_29398 = state_28651__$1;(statearr_28686_29398[2] = inst_28645);
(statearr_28686_29398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
});})(c__22938__auto__))
;return ((function (switch__22862__auto__,c__22938__auto__){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28690[0] = state_machine__22863__auto__);
(statearr_28690[1] = 1);
return statearr_28690;
});
var state_machine__22863__auto____1 = (function (state_28651){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28651);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28691){if((e28691 instanceof Object))
{var ex__22866__auto__ = e28691;var statearr_28692_29399 = state_28651;(statearr_28692_29399[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29400 = state_28651;
state_28651 = G__29400;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28651){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto__))
})();var state__22940__auto__ = (function (){var statearr_28693 = f__22939__auto__.call(null);(statearr_28693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto__);
return statearr_28693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto__))
);
return c__22938__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22938__auto___29401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29401,out){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29401,out){
return (function (state_28765){var state_val_28766 = (state_28765[1]);if((state_val_28766 === 1))
{var inst_28742 = null;var state_28765__$1 = (function (){var statearr_28767 = state_28765;(statearr_28767[7] = inst_28742);
return statearr_28767;
})();var statearr_28768_29402 = state_28765__$1;(statearr_28768_29402[2] = null);
(statearr_28768_29402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 2))
{var state_28765__$1 = state_28765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28765__$1,4,ch);
} else
{if((state_val_28766 === 3))
{var inst_28762 = (state_28765[2]);var inst_28763 = cljs.core.async.close_BANG_.call(null,out);var state_28765__$1 = (function (){var statearr_28769 = state_28765;(statearr_28769[8] = inst_28762);
return statearr_28769;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28765__$1,inst_28763);
} else
{if((state_val_28766 === 4))
{var inst_28745 = (state_28765[9]);var inst_28745__$1 = (state_28765[2]);var inst_28746 = (inst_28745__$1 == null);var inst_28747 = cljs.core.not.call(null,inst_28746);var state_28765__$1 = (function (){var statearr_28770 = state_28765;(statearr_28770[9] = inst_28745__$1);
return statearr_28770;
})();if(inst_28747)
{var statearr_28771_29403 = state_28765__$1;(statearr_28771_29403[1] = 5);
} else
{var statearr_28772_29404 = state_28765__$1;(statearr_28772_29404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 5))
{var inst_28742 = (state_28765[7]);var inst_28745 = (state_28765[9]);var inst_28749 = cljs.core._EQ_.call(null,inst_28745,inst_28742);var state_28765__$1 = state_28765;if(inst_28749)
{var statearr_28773_29405 = state_28765__$1;(statearr_28773_29405[1] = 8);
} else
{var statearr_28774_29406 = state_28765__$1;(statearr_28774_29406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 6))
{var state_28765__$1 = state_28765;var statearr_28776_29407 = state_28765__$1;(statearr_28776_29407[2] = null);
(statearr_28776_29407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 7))
{var inst_28760 = (state_28765[2]);var state_28765__$1 = state_28765;var statearr_28777_29408 = state_28765__$1;(statearr_28777_29408[2] = inst_28760);
(statearr_28777_29408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 8))
{var inst_28742 = (state_28765[7]);var tmp28775 = inst_28742;var inst_28742__$1 = tmp28775;var state_28765__$1 = (function (){var statearr_28778 = state_28765;(statearr_28778[7] = inst_28742__$1);
return statearr_28778;
})();var statearr_28779_29409 = state_28765__$1;(statearr_28779_29409[2] = null);
(statearr_28779_29409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 9))
{var inst_28745 = (state_28765[9]);var state_28765__$1 = state_28765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28765__$1,11,out,inst_28745);
} else
{if((state_val_28766 === 10))
{var inst_28757 = (state_28765[2]);var state_28765__$1 = state_28765;var statearr_28780_29410 = state_28765__$1;(statearr_28780_29410[2] = inst_28757);
(statearr_28780_29410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28766 === 11))
{var inst_28745 = (state_28765[9]);var inst_28754 = (state_28765[2]);var inst_28742 = inst_28745;var state_28765__$1 = (function (){var statearr_28781 = state_28765;(statearr_28781[7] = inst_28742);
(statearr_28781[10] = inst_28754);
return statearr_28781;
})();var statearr_28782_29411 = state_28765__$1;(statearr_28782_29411[2] = null);
(statearr_28782_29411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29401,out))
;return ((function (switch__22862__auto__,c__22938__auto___29401,out){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28786 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28786[0] = state_machine__22863__auto__);
(statearr_28786[1] = 1);
return statearr_28786;
});
var state_machine__22863__auto____1 = (function (state_28765){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28765);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28787){if((e28787 instanceof Object))
{var ex__22866__auto__ = e28787;var statearr_28788_29412 = state_28765;(statearr_28788_29412[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29413 = state_28765;
state_28765 = G__29413;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28765){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29401,out))
})();var state__22940__auto__ = (function (){var statearr_28789 = f__22939__auto__.call(null);(statearr_28789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29401);
return statearr_28789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29401,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22938__auto___29414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29414,out){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29414,out){
return (function (state_28894){var state_val_28895 = (state_28894[1]);if((state_val_28895 === 1))
{var inst_28857 = (new Array(n));var inst_28858 = inst_28857;var inst_28859 = 0;var state_28894__$1 = (function (){var statearr_28896 = state_28894;(statearr_28896[7] = inst_28858);
(statearr_28896[8] = inst_28859);
return statearr_28896;
})();var statearr_28897_29415 = state_28894__$1;(statearr_28897_29415[2] = null);
(statearr_28897_29415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 2))
{var state_28894__$1 = state_28894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,4,ch);
} else
{if((state_val_28895 === 3))
{var inst_28892 = (state_28894[2]);var state_28894__$1 = state_28894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28894__$1,inst_28892);
} else
{if((state_val_28895 === 4))
{var inst_28862 = (state_28894[9]);var inst_28862__$1 = (state_28894[2]);var inst_28863 = (inst_28862__$1 == null);var inst_28864 = cljs.core.not.call(null,inst_28863);var state_28894__$1 = (function (){var statearr_28898 = state_28894;(statearr_28898[9] = inst_28862__$1);
return statearr_28898;
})();if(inst_28864)
{var statearr_28899_29416 = state_28894__$1;(statearr_28899_29416[1] = 5);
} else
{var statearr_28900_29417 = state_28894__$1;(statearr_28900_29417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 5))
{var inst_28862 = (state_28894[9]);var inst_28858 = (state_28894[7]);var inst_28859 = (state_28894[8]);var inst_28867 = (state_28894[10]);var inst_28866 = (inst_28858[inst_28859] = inst_28862);var inst_28867__$1 = (inst_28859 + 1);var inst_28868 = (inst_28867__$1 < n);var state_28894__$1 = (function (){var statearr_28901 = state_28894;(statearr_28901[10] = inst_28867__$1);
(statearr_28901[11] = inst_28866);
return statearr_28901;
})();if(cljs.core.truth_(inst_28868))
{var statearr_28902_29418 = state_28894__$1;(statearr_28902_29418[1] = 8);
} else
{var statearr_28903_29419 = state_28894__$1;(statearr_28903_29419[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 6))
{var inst_28859 = (state_28894[8]);var inst_28880 = (inst_28859 > 0);var state_28894__$1 = state_28894;if(cljs.core.truth_(inst_28880))
{var statearr_28905_29420 = state_28894__$1;(statearr_28905_29420[1] = 12);
} else
{var statearr_28906_29421 = state_28894__$1;(statearr_28906_29421[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 7))
{var inst_28890 = (state_28894[2]);var state_28894__$1 = state_28894;var statearr_28907_29422 = state_28894__$1;(statearr_28907_29422[2] = inst_28890);
(statearr_28907_29422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 8))
{var inst_28858 = (state_28894[7]);var inst_28867 = (state_28894[10]);var tmp28904 = inst_28858;var inst_28858__$1 = tmp28904;var inst_28859 = inst_28867;var state_28894__$1 = (function (){var statearr_28908 = state_28894;(statearr_28908[7] = inst_28858__$1);
(statearr_28908[8] = inst_28859);
return statearr_28908;
})();var statearr_28909_29423 = state_28894__$1;(statearr_28909_29423[2] = null);
(statearr_28909_29423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 9))
{var inst_28858 = (state_28894[7]);var inst_28872 = cljs.core.vec.call(null,inst_28858);var state_28894__$1 = state_28894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28894__$1,11,out,inst_28872);
} else
{if((state_val_28895 === 10))
{var inst_28878 = (state_28894[2]);var state_28894__$1 = state_28894;var statearr_28910_29424 = state_28894__$1;(statearr_28910_29424[2] = inst_28878);
(statearr_28910_29424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 11))
{var inst_28874 = (state_28894[2]);var inst_28875 = (new Array(n));var inst_28858 = inst_28875;var inst_28859 = 0;var state_28894__$1 = (function (){var statearr_28911 = state_28894;(statearr_28911[12] = inst_28874);
(statearr_28911[7] = inst_28858);
(statearr_28911[8] = inst_28859);
return statearr_28911;
})();var statearr_28912_29425 = state_28894__$1;(statearr_28912_29425[2] = null);
(statearr_28912_29425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 12))
{var inst_28858 = (state_28894[7]);var inst_28882 = cljs.core.vec.call(null,inst_28858);var state_28894__$1 = state_28894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28894__$1,15,out,inst_28882);
} else
{if((state_val_28895 === 13))
{var state_28894__$1 = state_28894;var statearr_28913_29426 = state_28894__$1;(statearr_28913_29426[2] = null);
(statearr_28913_29426[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 14))
{var inst_28887 = (state_28894[2]);var inst_28888 = cljs.core.async.close_BANG_.call(null,out);var state_28894__$1 = (function (){var statearr_28914 = state_28894;(statearr_28914[13] = inst_28887);
return statearr_28914;
})();var statearr_28915_29427 = state_28894__$1;(statearr_28915_29427[2] = inst_28888);
(statearr_28915_29427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28895 === 15))
{var inst_28884 = (state_28894[2]);var state_28894__$1 = state_28894;var statearr_28916_29428 = state_28894__$1;(statearr_28916_29428[2] = inst_28884);
(statearr_28916_29428[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29414,out))
;return ((function (switch__22862__auto__,c__22938__auto___29414,out){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_28920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28920[0] = state_machine__22863__auto__);
(statearr_28920[1] = 1);
return statearr_28920;
});
var state_machine__22863__auto____1 = (function (state_28894){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_28894);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e28921){if((e28921 instanceof Object))
{var ex__22866__auto__ = e28921;var statearr_28922_29429 = state_28894;(statearr_28922_29429[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29430 = state_28894;
state_28894 = G__29430;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_28894){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_28894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29414,out))
})();var state__22940__auto__ = (function (){var statearr_28923 = f__22939__auto__.call(null);(statearr_28923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29414);
return statearr_28923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29414,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22938__auto___29431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22938__auto___29431,out){
return (function (){var f__22939__auto__ = (function (){var switch__22862__auto__ = ((function (c__22938__auto___29431,out){
return (function (state_29036){var state_val_29037 = (state_29036[1]);if((state_val_29037 === 1))
{var inst_28995 = [];var inst_28996 = inst_28995;var inst_28997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_29036__$1 = (function (){var statearr_29038 = state_29036;(statearr_29038[7] = inst_28997);
(statearr_29038[8] = inst_28996);
return statearr_29038;
})();var statearr_29039_29432 = state_29036__$1;(statearr_29039_29432[2] = null);
(statearr_29039_29432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 2))
{var state_29036__$1 = state_29036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29036__$1,4,ch);
} else
{if((state_val_29037 === 3))
{var inst_29034 = (state_29036[2]);var state_29036__$1 = state_29036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29036__$1,inst_29034);
} else
{if((state_val_29037 === 4))
{var inst_29000 = (state_29036[9]);var inst_29000__$1 = (state_29036[2]);var inst_29001 = (inst_29000__$1 == null);var inst_29002 = cljs.core.not.call(null,inst_29001);var state_29036__$1 = (function (){var statearr_29040 = state_29036;(statearr_29040[9] = inst_29000__$1);
return statearr_29040;
})();if(inst_29002)
{var statearr_29041_29433 = state_29036__$1;(statearr_29041_29433[1] = 5);
} else
{var statearr_29042_29434 = state_29036__$1;(statearr_29042_29434[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 5))
{var inst_28997 = (state_29036[7]);var inst_29004 = (state_29036[10]);var inst_29000 = (state_29036[9]);var inst_29004__$1 = f.call(null,inst_29000);var inst_29005 = cljs.core._EQ_.call(null,inst_29004__$1,inst_28997);var inst_29006 = cljs.core.keyword_identical_QMARK_.call(null,inst_28997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_29007 = (inst_29005) || (inst_29006);var state_29036__$1 = (function (){var statearr_29043 = state_29036;(statearr_29043[10] = inst_29004__$1);
return statearr_29043;
})();if(cljs.core.truth_(inst_29007))
{var statearr_29044_29435 = state_29036__$1;(statearr_29044_29435[1] = 8);
} else
{var statearr_29045_29436 = state_29036__$1;(statearr_29045_29436[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 6))
{var inst_28996 = (state_29036[8]);var inst_29021 = inst_28996.length;var inst_29022 = (inst_29021 > 0);var state_29036__$1 = state_29036;if(cljs.core.truth_(inst_29022))
{var statearr_29047_29437 = state_29036__$1;(statearr_29047_29437[1] = 12);
} else
{var statearr_29048_29438 = state_29036__$1;(statearr_29048_29438[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 7))
{var inst_29032 = (state_29036[2]);var state_29036__$1 = state_29036;var statearr_29049_29439 = state_29036__$1;(statearr_29049_29439[2] = inst_29032);
(statearr_29049_29439[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 8))
{var inst_28996 = (state_29036[8]);var inst_29004 = (state_29036[10]);var inst_29000 = (state_29036[9]);var inst_29009 = inst_28996.push(inst_29000);var tmp29046 = inst_28996;var inst_28996__$1 = tmp29046;var inst_28997 = inst_29004;var state_29036__$1 = (function (){var statearr_29050 = state_29036;(statearr_29050[11] = inst_29009);
(statearr_29050[7] = inst_28997);
(statearr_29050[8] = inst_28996__$1);
return statearr_29050;
})();var statearr_29051_29440 = state_29036__$1;(statearr_29051_29440[2] = null);
(statearr_29051_29440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 9))
{var inst_28996 = (state_29036[8]);var inst_29012 = cljs.core.vec.call(null,inst_28996);var state_29036__$1 = state_29036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29036__$1,11,out,inst_29012);
} else
{if((state_val_29037 === 10))
{var inst_29019 = (state_29036[2]);var state_29036__$1 = state_29036;var statearr_29052_29441 = state_29036__$1;(statearr_29052_29441[2] = inst_29019);
(statearr_29052_29441[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 11))
{var inst_29004 = (state_29036[10]);var inst_29000 = (state_29036[9]);var inst_29014 = (state_29036[2]);var inst_29015 = [];var inst_29016 = inst_29015.push(inst_29000);var inst_28996 = inst_29015;var inst_28997 = inst_29004;var state_29036__$1 = (function (){var statearr_29053 = state_29036;(statearr_29053[12] = inst_29016);
(statearr_29053[13] = inst_29014);
(statearr_29053[7] = inst_28997);
(statearr_29053[8] = inst_28996);
return statearr_29053;
})();var statearr_29054_29442 = state_29036__$1;(statearr_29054_29442[2] = null);
(statearr_29054_29442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 12))
{var inst_28996 = (state_29036[8]);var inst_29024 = cljs.core.vec.call(null,inst_28996);var state_29036__$1 = state_29036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29036__$1,15,out,inst_29024);
} else
{if((state_val_29037 === 13))
{var state_29036__$1 = state_29036;var statearr_29055_29443 = state_29036__$1;(statearr_29055_29443[2] = null);
(statearr_29055_29443[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 14))
{var inst_29029 = (state_29036[2]);var inst_29030 = cljs.core.async.close_BANG_.call(null,out);var state_29036__$1 = (function (){var statearr_29056 = state_29036;(statearr_29056[14] = inst_29029);
return statearr_29056;
})();var statearr_29057_29444 = state_29036__$1;(statearr_29057_29444[2] = inst_29030);
(statearr_29057_29444[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29037 === 15))
{var inst_29026 = (state_29036[2]);var state_29036__$1 = state_29036;var statearr_29058_29445 = state_29036__$1;(statearr_29058_29445[2] = inst_29026);
(statearr_29058_29445[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__22938__auto___29431,out))
;return ((function (switch__22862__auto__,c__22938__auto___29431,out){
return (function() {
var state_machine__22863__auto__ = null;
var state_machine__22863__auto____0 = (function (){var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29062[0] = state_machine__22863__auto__);
(statearr_29062[1] = 1);
return statearr_29062;
});
var state_machine__22863__auto____1 = (function (state_29036){while(true){
var ret_value__22864__auto__ = (function (){try{while(true){
var result__22865__auto__ = switch__22862__auto__.call(null,state_29036);if(cljs.core.keyword_identical_QMARK_.call(null,result__22865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22865__auto__;
}
break;
}
}catch (e29063){if((e29063 instanceof Object))
{var ex__22866__auto__ = e29063;var statearr_29064_29446 = state_29036;(statearr_29064_29446[5] = ex__22866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29036);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29447 = state_29036;
state_29036 = G__29447;
continue;
}
} else
{return ret_value__22864__auto__;
}
break;
}
});
state_machine__22863__auto__ = function(state_29036){
switch(arguments.length){
case 0:
return state_machine__22863__auto____0.call(this);
case 1:
return state_machine__22863__auto____1.call(this,state_29036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22863__auto____0;
state_machine__22863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22863__auto____1;
return state_machine__22863__auto__;
})()
;})(switch__22862__auto__,c__22938__auto___29431,out))
})();var state__22940__auto__ = (function (){var statearr_29065 = f__22939__auto__.call(null);(statearr_29065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22938__auto___29431);
return statearr_29065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22940__auto__);
});})(c__22938__auto___29431,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
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
return (function (a26353){var pat__$1 = cljs.core.logic._walk_STAR_.call(null,a26353,pat);var subst__$1 = cljs.core.logic._walk_STAR_.call(null,a26353,subst);return ((function (pat__$1,subst__$1,pat,subst,q){
return (function (a__21254__auto____$2){return (new cljs.core.logic.Inc(((function (pat__$1,subst__$1,pat,subst,q){
return (function (){return cljs.core.logic._bind.call(null,a__21254__auto____$2,((function (pat__$1,subst__$1,pat,subst,q){
return (function (a__21306__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21306__auto__,pat__$1.call(null,expr)),subst__$1.call(null,q));
});})(pat__$1,subst__$1,pat,subst,q))
);
});})(pat__$1,subst__$1,pat,subst,q))
));
});})(pat__$1,subst__$1,pat,subst,q))
.call(null,a26353);
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
kibit.core.simplify = (function simplify(expr,rules){return cljs.core.ffirst.call(null,cljs.core.drop_while.call(null,(function (p1__26355_SHARP_){return cljs.core.apply.call(null,cljs.core.not_EQ_,p1__26355_SHARP_);
}),cljs.core.partition.call(null,2,1,cljs.core.iterate.call(null,cljs.core.partial.call(null,clojure.walk.prewalk,(function (p1__26354_SHARP_){return kibit.core.simplify_one.call(null,p1__26354_SHARP_,rules);
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
cljs.extended_reader.Reader = (function (){var obj25972 = {};return obj25972;
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
cljs.extended_reader.IPushbackReader = (function (){var obj25974 = {};return obj25974;
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
cljs.extended_reader.IndexingReader = (function (){var obj25976 = {};return obj25976;
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
var reader_error__delegate = function (rdr,msg){var error_msg = cljs.core.apply.call(null,cljs.core.str,msg);throw (new Error([cljs.core.str(error_msg),cljs.core.str((((function (){var G__25978 = rdr;if(G__25978)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25978.cljs$extended$reader$IndexingReader$;
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
reader_error.cljs$lang$applyTo = (function (arglist__26066){
var rdr = cljs.core.first(arglist__26066);
var msg = cljs.core.rest(arglist__26066);
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
var G__26067 = cljs.extended_reader.read_char.call(null,rdr);
ch = G__26067;
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
var G__26068 = (function (){sb.append(ch);
return sb;
})();
var G__26069 = cljs.extended_reader.read_char.call(null,rdr);
sb = G__26068;
ch = G__26069;
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
var make_unicode_char__delegate = function (code_str,p__25979){var vec__25981 = p__25979;var base = cljs.core.nth.call(null,vec__25981,0,null);var base__$1 = (function (){var or__19803__auto__ = base;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return 16;
}
})();var code = parseInt(code_str,base__$1);return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__25979 = null;if (arguments.length > 1) {
  p__25979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_unicode_char__delegate.call(this,code_str,p__25979);};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__26070){
var code_str = cljs.core.first(arglist__26070);
var p__25979 = cljs.core.rest(arglist__26070);
return make_unicode_char__delegate(code_str,p__25979);
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
var G__26071 = cljs.extended_reader.read_char.call(null,rdr);
ch = G__26071;
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
var G__26072 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__26072;
continue;
}
} else
{cljs.extended_reader.unread.call(null,rdr,ch);
var o = cljs.extended_reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__26073 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__26073;
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
cljs.extended_reader.maybe_get_pos = (function maybe_get_pos(rdr){if((function (){var G__25983 = rdr;if(G__25983)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25983.cljs$extended$reader$IndexingReader$;
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
cljs.extended_reader.with_source_log = (function with_source_log(rdr,f,prefix){if((rdr instanceof cljs.extended.reader.SourceLoggingPushbackReader))
{var frame = rdr.source_log_frames;var new_frame = cljs.core.atom.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,frame),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",4289091589)], null),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frame)).getLength()));var ret = f.call(null);var source = [cljs.core.str(prefix),cljs.core.str(cljs.extended_reader.peek_source_log.call(null,new_frame))].join('');return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret,source], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
});
cljs.extended_reader.read_list = (function read_list(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__25985 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,")",rdr,true);
});})(pos))
,"(");var the_list = cljs.core.nth.call(null,vec__25985,0,null);var source = cljs.core.nth.call(null,vec__25985,1,null);return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.list,the_list),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended_reader.read_comment = cljs.extended_reader.skip_line;
cljs.extended_reader.read_vector = (function read_vector(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__25987 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,"]",rdr,true);
});})(pos))
,"[");var the_vec = cljs.core.nth.call(null,vec__25987,0,null);var source = cljs.core.nth.call(null,vec__25987,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_vec),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended_reader.read_map = (function read_map(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__25989 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"{");var l = cljs.core.nth.call(null,vec__25989,0,null);var source = cljs.core.nth.call(null,vec__25989,1,null);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
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
var G__26074 = (function (){buffer.append(ch);
return buffer;
})();
var G__26075 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__26074;
ch = G__26075;
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
var G__26076 = (function (){buffer.append(cljs.extended_reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__26077 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__26076;
ch = G__26077;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__26078 = (function (){buffer.append(ch);
return buffer;
})();
var G__26079 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__26078;
ch = G__26079;
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
cljs.extended_reader.read_meta = (function read_meta(rdr,_){var vec__25993 = (((function (){var G__25994 = rdr;if(G__25994)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25994.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.extended_reader.get_line_number.call(null,rdr),(cljs.extended_reader.get_column_number.call(null,rdr) - 1)], null):null);var line = cljs.core.nth.call(null,vec__25993,0,null);var column = cljs.core.nth.call(null,vec__25993,1,null);var m = cljs.extended_reader.desugar_meta.call(null,cljs.extended_reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.extended_reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.extended_reader.read.call(null,rdr,true,null,true);if((function (){var G__25995 = o;if(G__25995)
{var bit__20446__auto__ = (G__25995.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20446__auto__) || (G__25995.cljs$core$IWithMeta$))
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
cljs.extended_reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){var and__19791__auto__ = (function (){var G__25999 = form;if(G__25999)
{var bit__20446__auto__ = (G__25999.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__25999.cljs$core$ISeq$))
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
cljs.extended_reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){var and__19791__auto__ = (function (){var G__26003 = form;if(G__26003)
{var bit__20446__auto__ = (G__26003.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__26003.cljs$core$ISeq$))
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
cljs.extended_reader.sqExpandList = (function sqExpandList(sq){return cljs.core.doall.call(null,(function (){var iter__20520__auto__ = (function iter__26008(s__26009){return (new cljs.core.LazySeq(null,(function (){var s__26009__$1 = s__26009;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26009__$1);if(temp__4092__auto__)
{var s__26009__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26009__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__26009__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__26011 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__26010 = 0;while(true){
if((i__26010 < size__20519__auto__))
{var item = cljs.core._nth.call(null,c__20518__auto__,i__26010);cljs.core.chunk_append.call(null,b__26011,((cljs.extended_reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended_reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended_reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))));
{
var G__26080 = (i__26010 + 1);
i__26010 = G__26080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26011),iter__26008.call(null,cljs.core.chunk_rest.call(null,s__26009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26011),null);
}
} else
{var item = cljs.core.first.call(null,s__26009__$2);return cljs.core.cons.call(null,((cljs.extended_reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended_reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended_reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))),iter__26008.call(null,cljs.core.rest.call(null,s__26009__$2)));
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
{if((function (){var G__26020 = form;if(G__26020)
{var bit__20446__auto__ = (G__26020.cljs$lang$protocol_mask$partition0$ & 8);if((bit__20446__auto__) || (G__26020.cljs$core$ICollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{if((function (){var G__26021 = form;if(G__26021)
{var bit__20446__auto__ = (G__26021.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__20446__auto__) || (G__26021.cljs$core$IRecord$))
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
{if((function (){var G__26022 = form;if(G__26022)
{var bit__20446__auto__ = (G__26022.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__20446__auto__) || (G__26022.cljs$core$IMap$))
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
{if((function (){var G__26023 = form;if(G__26023)
{var bit__20446__auto__ = (G__26023.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__20446__auto__) || (G__26023.cljs$core$IVector$))
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
{if((function (){var G__26024 = form;if(G__26024)
{var bit__20446__auto__ = (G__26024.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__20446__auto__) || (G__26024.cljs$core$ISet$))
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
{if((function (){var or__19803__auto__ = (function (){var G__26026 = form;if(G__26026)
{var bit__20446__auto__ = (G__26026.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__26026.cljs$core$ISeq$))
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
{var G__26027 = form;if(G__26027)
{var bit__20446__auto__ = (G__26027.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__20446__auto__) || (G__26027.cljs$core$IList$))
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
cljs.extended_reader.read_syntax_quote = (function read_syntax_quote(rdr,_){var _STAR_gensym_env_STAR_26029 = cljs.extended_reader._STAR_gensym_env_STAR_;try{cljs.extended_reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var form = cljs.extended_reader.read.call(null,rdr,true,null,true);return cljs.extended_reader.syntaxQuote.call(null,form);
}finally {cljs.extended_reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_26029;
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
var _STAR_arg_env_STAR_26036 = cljs.extended_reader._STAR_arg_env_STAR_;try{cljs.extended_reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
cljs.extended_reader.unread.call(null,rdr,"(");
var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__26037 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos,_STAR_arg_env_STAR_26036){
return (function (){return cljs.extended_reader.read.call(null,rdr,true,null,true);
});})(pos,_STAR_arg_env_STAR_26036))
,"#");var form = cljs.core.nth.call(null,vec__26037,0,null);var source = cljs.core.nth.call(null,vec__26037,1,null);var argsyms = cljs.core.deref.call(null,cljs.extended_reader._STAR_arg_env_STAR_);var rargs = cljs.core.rseq.call(null,argsyms);var highpair = cljs.core.first.call(null,rargs);var higharg = (cljs.core.truth_(highpair)?cljs.core.key.call(null,highpair):0);var args = (((higharg > 0))?cljs.core.doall.call(null,(function (){var iter__20520__auto__ = ((function (pos,vec__26037,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_26036){
return (function iter__26038(s__26039){return (new cljs.core.LazySeq(null,((function (pos,vec__26037,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_26036){
return (function (){var s__26039__$1 = s__26039;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26039__$1);if(temp__4092__auto__)
{var s__26039__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26039__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__26039__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__26041 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__26040 = 0;while(true){
if((i__26040 < size__20519__auto__))
{var i = cljs.core._nth.call(null,c__20518__auto__,i__26040);cljs.core.chunk_append.call(null,b__26041,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended_reader.garg.call(null,i);
}
})());
{
var G__26081 = (i__26040 + 1);
i__26040 = G__26081;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26041),iter__26038.call(null,cljs.core.chunk_rest.call(null,s__26039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26041),null);
}
} else
{var i = cljs.core.first.call(null,s__26039__$2);return cljs.core.cons.call(null,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended_reader.garg.call(null,i);
}
})(),iter__26038.call(null,cljs.core.rest.call(null,s__26039__$2)));
}
} else
{return null;
}
break;
}
});})(pos,vec__26037,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_26036))
,null,null));
});})(pos,vec__26037,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_26036))
;return iter__20520__auto__.call(null,cljs.core.range.call(null,1,(1 + higharg)));
})()):rargs);var restsym = cljs.core.get.call(null,argsyms,-1);var args__$1 = (cljs.core.truth_(restsym)?cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-1640531489,null),restsym], null)):args);return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),cljs.core.vec.call(null,args__$1)),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)),cljs.extended_reader.prep_meta.call(null,rdr,pos,source));
}finally {cljs.extended_reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_26036;
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
cljs.extended_reader.read_set = (function read_set(rdr,_){var pos = cljs.extended_reader.maybe_get_pos.call(null,rdr);var vec__26043 = cljs.extended_reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended_reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"#{");var the_set = cljs.core.nth.call(null,vec__26043,0,null);var source = cljs.core.nth.call(null,vec__26043,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_set),cljs.extended_reader.prep_meta.call(null,rdr,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",3954034376)], null),cljs.core.dec),source));
});
cljs.extended_reader.read_regex = (function read_regex(reader){var buffer = "";var ch = cljs.extended_reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended_reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__26082 = [cljs.core.str(buffer),cljs.core.str(ch),cljs.core.str(cljs.extended_reader.read_char.call(null,reader))].join('');
var G__26083 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__26082;
ch = G__26083;
continue;
}
} else
{if(("\"" === ch))
{return cljs.core.re_pattern.call(null,buffer);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__26084 = [cljs.core.str(buffer),cljs.core.str(ch)].join('');
var G__26085 = cljs.extended_reader.read_char.call(null,reader);
buffer = G__26084;
ch = G__26085;
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
var G__26086 = reader;
var G__26087 = eof_is_error;
var G__26088 = sentinel;
var G__26089 = is_recursive;
reader = G__26086;
eof_is_error = G__26087;
sentinel = G__26088;
is_recursive = G__26089;
continue;
}
} else
{if(cljs.extended_reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__26090 = cljs.extended_reader.read_comment.call(null,reader,ch);
var G__26091 = eof_is_error;
var G__26092 = sentinel;
var G__26093 = is_recursive;
reader = G__26090;
eof_is_error = G__26091;
sentinel = G__26092;
is_recursive = G__26093;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.extended_reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.extended_reader.number_literal_QMARK_.call(null,reader,ch))?cljs.extended_reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.extended_reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__26094 = reader;
var G__26095 = eof_is_error;
var G__26096 = sentinel;
var G__26097 = is_recursive;
reader = G__26094;
eof_is_error = G__26095;
sentinel = G__26096;
is_recursive = G__26097;
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
var G__26098 = b.append("0");
b = G__26098;
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
{var vec__26048 = temp__4092__auto__;var vec__26049 = cljs.core.nth.call(null,vec__26048,0,null);var _ = cljs.core.nth.call(null,vec__26049,0,null);var years = cljs.core.nth.call(null,vec__26049,1,null);var months = cljs.core.nth.call(null,vec__26049,2,null);var days = cljs.core.nth.call(null,vec__26049,3,null);var hours = cljs.core.nth.call(null,vec__26049,4,null);var minutes = cljs.core.nth.call(null,vec__26049,5,null);var seconds = cljs.core.nth.call(null,vec__26049,6,null);var milliseconds = cljs.core.nth.call(null,vec__26049,7,null);var vec__26050 = cljs.core.nth.call(null,vec__26048,1,null);var ___$1 = cljs.core.nth.call(null,vec__26050,0,null);var ___$2 = cljs.core.nth.call(null,vec__26050,1,null);var ___$3 = cljs.core.nth.call(null,vec__26050,2,null);var V = vec__26048;var vec__26051 = cljs.core.map.call(null,((function (vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (v){return cljs.core.map.call(null,((function (vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__26047_SHARP_){return parseInt(p1__26047_SHARP_,10);
});})(vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,v);
});})(vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,cljs.core.map.call(null,((function (vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__26045_SHARP_,p2__26044_SHARP_){return cljs.core.update_in.call(null,p2__26044_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),p1__26045_SHARP_);
});})(vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly.call(null,null),((function (vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__26046_SHARP_){if(cljs.core._EQ_.call(null,p1__26046_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
});})(vec__26048,vec__26049,_,years,months,days,hours,minutes,seconds,milliseconds,vec__26050,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
], null),V));var vec__26052 = cljs.core.nth.call(null,vec__26051,0,null);var ___$4 = cljs.core.nth.call(null,vec__26052,0,null);var y = cljs.core.nth.call(null,vec__26052,1,null);var mo = cljs.core.nth.call(null,vec__26052,2,null);var d = cljs.core.nth.call(null,vec__26052,3,null);var h = cljs.core.nth.call(null,vec__26052,4,null);var m = cljs.core.nth.call(null,vec__26052,5,null);var s = cljs.core.nth.call(null,vec__26052,6,null);var ms = cljs.core.nth.call(null,vec__26052,7,null);var vec__26053 = cljs.core.nth.call(null,vec__26051,1,null);var offset_sign = cljs.core.nth.call(null,vec__26053,0,null);var offset_hours = cljs.core.nth.call(null,vec__26053,1,null);var offset_minutes = cljs.core.nth.call(null,vec__26053,2,null);var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,years))?1970:y),((cljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days))?1:check.call(null,1,d,cljs.extended_reader.days_in_month.call(null,mo,cljs.extended_reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds))?0:check.call(null,0,s,((cljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], null);
} else
{return null;
}
});
;})(timestamp,check))
})();
cljs.extended_reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.extended_reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__26055 = temp__4090__auto__;var years = cljs.core.nth.call(null,vec__26055,0,null);var months = cljs.core.nth.call(null,vec__26055,1,null);var days = cljs.core.nth.call(null,vec__26055,2,null);var hours = cljs.core.nth.call(null,vec__26055,3,null);var minutes = cljs.core.nth.call(null,vec__26055,4,null);var seconds = cljs.core.nth.call(null,vec__26055,5,null);var ms = cljs.core.nth.call(null,vec__26055,6,null);var offset = cljs.core.nth.call(null,vec__26055,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
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
kibit.check.unique_alt_QMARK_ = (function unique_alt_QMARK_(simplify_map){var map__26329 = simplify_map;var map__26329__$1 = ((cljs.core.seq_QMARK_.call(null,map__26329))?cljs.core.apply.call(null,cljs.core.hash_map,map__26329):map__26329);var alt = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));var expr = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"expr","expr",1017032039));if(cljs.core._EQ_.call(null,alt,expr))
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
var check_expr__delegate = function (expr,kw_opts){var map__26332 = cljs.core.merge.call(null,kibit.check.default_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolution","resolution",3708840990),new cljs.core.Keyword(null,"toplevel","toplevel",4354431681)], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_opts));var map__26332__$1 = ((cljs.core.seq_QMARK_.call(null,map__26332))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);var resolution = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"resolution","resolution",3708840990));var guard = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"guard","guard",1112609303));var rules = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"rules","rules",1122778217));var rules__$1 = cljs.core.map.call(null,cljs.core.logic.prep,rules);var simplify_fn = ((function (map__26332,map__26332__$1,resolution,guard,rules,rules__$1){
return (function (p1__26330_SHARP_){return kibit.check.res__GT_simplify.call(null,resolution).call(null,p1__26330_SHARP_,rules__$1);
});})(map__26332,map__26332__$1,resolution,guard,rules,rules__$1))
;return kibit.check.check_aux.call(null,expr,simplify_fn,guard);
};
var check_expr = function (expr,var_args){
var kw_opts = null;if (arguments.length > 1) {
  kw_opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return check_expr__delegate.call(this,expr,kw_opts);};
check_expr.cljs$lang$maxFixedArity = 1;
check_expr.cljs$lang$applyTo = (function (arglist__26343){
var expr = cljs.core.first(arglist__26343);
var kw_opts = cljs.core.rest(arglist__26343);
return check_expr__delegate(expr,kw_opts);
});
check_expr.cljs$core$IFn$_invoke$arity$variadic = check_expr__delegate;
return check_expr;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-clojure-linter')) {
goog.provide('lt.plugins.lt_clojure_linter');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('lt.objs.plugins');
goog.require('kibit.check');
goog.require('lt.objs.editor.pool');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('cljs.core.logic');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('cljs.extended_reader');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.extended_reader');
goog.require('cljs.core.async');
goog.require('kibit.check');
goog.require('lt.objs.command');
/**
* Takes the reader state and editor, and returns the next char and new state
* of the reader
*/
lt.plugins.lt_clojure_linter.next_char_from_reader = (function next_char_from_reader(line_seq,p__32234){var map__32236 = p__32234;var map__32236__$1 = ((cljs.core.seq_QMARK_.call(null,map__32236))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);var state = map__32236__$1;var buffer = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"buffer","buffer",3930752946));var col = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"col","col",1014002930));var line = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"line","line",1017226086));var line_contents = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725));if(cljs.core.seq.call(null,buffer))
{var popped = cljs.core.last.call(null,buffer);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [popped,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.pop)], null);
} else
{if((cljs.core.count.call(null,line_contents) < col))
{var line_contents__$1 = cljs.core.get.call(null,line_seq,(line + 1));var line__$1 = (line + 1);while(true){
if((line_contents__$1 == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"eof?","eof?",1017023029),true)], null);
} else
{if(cljs.core.empty_QMARK_.call(null,line_contents__$1))
{{
var G__32249 = cljs.core.get.call(null,line_seq,(line__$1 + 1));
var G__32250 = (line__$1 + 1);
line_contents__$1 = G__32249;
line__$1 = G__32250;
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
lt.plugins.lt_clojure_linter.LineSeqPushbackReader = (function (line_seq,state,__meta,__extmap){
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
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$IPushbackReader$ = true;
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$IPushbackReader$unread$arity$2 = (function (_,ch){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.conj,ch);
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k32238,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k32238,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976)))
{return self__.line_seq;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32238,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k32238,else__20392__auto__);
} else
{return null;
}
}
}
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__32237){var self__ = this;
var this__20396__auto____$1 = this;var pred__32240 = cljs.core.keyword_identical_QMARK_;var expr__32241 = k__20397__auto__;if(cljs.core.truth_(pred__32240.call(null,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),expr__32241)))
{return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(G__32237,self__.state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32240.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__32241)))
{return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(self__.line_seq,G__32237,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(self__.line_seq,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__32237),null));
}
}
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#lt.plugins.lt-clojure-linter.LineSeqPushbackReader{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),self__.line_seq],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$Reader$ = true;
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$Reader$read_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__32243 = lt.plugins.lt_clojure_linter.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state));var next_char = cljs.core.nth.call(null,vec__32243,0,null);var new_state = cljs.core.nth.call(null,vec__32243,1,null);if((next_char == null))
{cljs.core.deref.call(null,self__.state);
} else
{}
cljs.core.reset_BANG_.call(null,self__.state,new_state);
return next_char;
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$Reader$peek_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,lt.plugins.lt_clojure_linter.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state)));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),self__.line_seq],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
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
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__32237){var self__ = this;
var this__20388__auto____$1 = this;return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(self__.line_seq,self__.state,G__32237,self__.__extmap,self__.__hash));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(self__.line_seq,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(self__.line_seq,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$IndexingReader$ = true;
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_line_number$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lt.plugins.lt_clojure_linter.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state))));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.prototype.cljs$extended_reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lt.plugins.lt_clojure_linter.next_char_from_reader.call(null,self__.line_seq,cljs.core.deref.call(null,self__.state))));
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.cljs$lang$type = true;
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.lt-clojure-linter/LineSeqPushbackReader");
});
lt.plugins.lt_clojure_linter.LineSeqPushbackReader.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"lt.plugins.lt-clojure-linter/LineSeqPushbackReader");
});
lt.plugins.lt_clojure_linter.__GT_LineSeqPushbackReader = (function __GT_LineSeqPushbackReader(line_seq,state){return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(line_seq,state));
});
lt.plugins.lt_clojure_linter.map__GT_LineSeqPushbackReader = (function map__GT_LineSeqPushbackReader(G__32239){return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(new cljs.core.Keyword(null,"line-seq","line-seq",2201401976).cljs$core$IFn$_invoke$arity$1(G__32239),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__32239),null,cljs.core.dissoc.call(null,G__32239,new cljs.core.Keyword(null,"line-seq","line-seq",2201401976),new cljs.core.Keyword(null,"state","state",1123661827))));
});
lt.plugins.lt_clojure_linter.default_reader_state = (function default_reader_state(line_seq,start_line,start_col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"col","col",1014002930),start_col,new cljs.core.Keyword(null,"buffer","buffer",3930752946),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),cljs.core.get.call(null,line_seq,start_line)], null);
});
lt.plugins.lt_clojure_linter.editor_pushback_reader = (function editor_pushback_reader(line_seq){return (new lt.plugins.lt_clojure_linter.LineSeqPushbackReader(line_seq,cljs.core.atom.call(null,lt.plugins.lt_clojure_linter.default_reader_state.call(null,line_seq,0,0))));
});
lt.plugins.lt_clojure_linter.read_all_forms_in_editor = (function read_all_forms_in_editor(editor_text){var line_seq = cljs.core.vec.call(null,clojure.string.split.call(null,editor_text,/\n/));var forms = cljs.core.PersistentVector.EMPTY;var r = lt.plugins.lt_clojure_linter.editor_pushback_reader.call(null,line_seq);while(true){
if(cljs.core.not.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"eof?","eof?",1017023029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r)));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.last.call(null,forms));
}
})()))
{var form = cljs.extended_reader.read.call(null,r,false,new cljs.core.Keyword(null,"end","end",1014004813));var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r));{
var G__32251 = cljs.core.conj.call(null,forms,form);
var G__32252 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,lt.plugins.lt_clojure_linter.default_reader_state.call(null,line_seq,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(state))));
forms = G__32251;
r = G__32252;
continue;
}
} else
{return cljs.core.butlast.call(null,forms);
}
break;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","clojure-linter","lt.plugins.lt-clojure-linter/clojure-linter",1103558991),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099)], null),new cljs.core.Keyword(null,"timeout","timeout",3994960083),20000,new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Clojure linter");
lt.plugins.lt_clojure_linter.__GT_linter_result = (function __GT_linter_result(p__32244){var map__32247 = p__32244;var map__32247__$1 = ((cljs.core.seq_QMARK_.call(null,map__32247))?cljs.core.apply.call(null,cljs.core.hash_map,map__32247):map__32247);var res = map__32247__$1;var alt = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"alt","alt",1014000923));var expr = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"expr","expr",1017032039));var map__32248 = cljs.core.meta.call(null,expr);var map__32248__$1 = ((cljs.core.seq_QMARK_.call(null,map__32248))?cljs.core.apply.call(null,cljs.core.hash_map,map__32248):map__32248);var end_column = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"end-column","end-column",3799845882));var end_line = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"end-line","end-line",2693041432));var column = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"column","column",3954034376));var line = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"line","line",1017226086));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("Consider using: "),cljs.core.str(alt)].join(''),new cljs.core.Keyword(null,"severity","severity",2492204655),"warning",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_line,end_column], null)], null);
});
lt.plugins.lt_clojure_linter.__BEH__do_lint = (function __BEH__do_lint(obj,editor_text,callback){return lt.plugins.lt_clojure_linter.bg_expr_check.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","kibit-expr-checker","lt.plugins.lt-clojure-linter/kibit-expr-checker",2221486157),new cljs.core.Keyword(null,"callback","callback",841683895),callback),lt.plugins.lt_clojure_linter.plugin_js_dir.call(null),editor_text);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-clojure-linter","do-lint","lt.plugins.lt-clojure-linter/do-lint",4783891099),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_clojure_linter.__BEH__do_lint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-clojure-linter","run-dis","lt.plugins.lt-clojure-linter/run-dis",4409260254),new cljs.core.Keyword(null,"desc","desc",1016984067),"Idiocheck: Run dis 2",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var forms = lt.plugins.lt_clojure_linter.read_all_forms_in_editor.call(null,lt.objs.editor.__GT_val.call(null,ed));return cljs.core.map.call(null,cljs.core.comp.call(null,lt.plugins.lt_clojure_linter.__GT_linter_result,kibit.check.check_expr),forms);
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=lt-clojure-linter_compiled.js.map