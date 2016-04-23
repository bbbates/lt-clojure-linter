if(!lt.util.load.provided_QMARK_('lt.plugins.lt-cljs-playground')) {
goog.provide('lt.plugins.lt_cljs_playground');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.command');
lt.plugins.lt_cljs_playground.hello_panel = (function hello_panel(this$){var e__21226__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from lt-cljs-playground"], null));var seq__24623_24636 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__24624_24637 = null;var count__24625_24638 = 0;var i__24626_24639 = 0;while(true){
if((i__24626_24639 < count__24625_24638))
{var vec__24627_24640 = cljs.core._nth.call(null,chunk__24624_24637,i__24626_24639);var ev__21227__auto___24641 = cljs.core.nth.call(null,vec__24627_24640,0,null);var func__21228__auto___24642 = cljs.core.nth.call(null,vec__24627_24640,1,null);lt.util.dom.on.call(null,e__21226__auto__,ev__21227__auto___24641,func__21228__auto___24642);
{
var G__24643 = seq__24623_24636;
var G__24644 = chunk__24624_24637;
var G__24645 = count__24625_24638;
var G__24646 = (i__24626_24639 + 1);
seq__24623_24636 = G__24643;
chunk__24624_24637 = G__24644;
count__24625_24638 = G__24645;
i__24626_24639 = G__24646;
continue;
}
} else
{var temp__4092__auto___24647 = cljs.core.seq.call(null,seq__24623_24636);if(temp__4092__auto___24647)
{var seq__24623_24648__$1 = temp__4092__auto___24647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24623_24648__$1))
{var c__20551__auto___24649 = cljs.core.chunk_first.call(null,seq__24623_24648__$1);{
var G__24650 = cljs.core.chunk_rest.call(null,seq__24623_24648__$1);
var G__24651 = c__20551__auto___24649;
var G__24652 = cljs.core.count.call(null,c__20551__auto___24649);
var G__24653 = 0;
seq__24623_24636 = G__24650;
chunk__24624_24637 = G__24651;
count__24625_24638 = G__24652;
i__24626_24639 = G__24653;
continue;
}
} else
{var vec__24628_24654 = cljs.core.first.call(null,seq__24623_24648__$1);var ev__21227__auto___24655 = cljs.core.nth.call(null,vec__24628_24654,0,null);var func__21228__auto___24656 = cljs.core.nth.call(null,vec__24628_24654,1,null);lt.util.dom.on.call(null,e__21226__auto__,ev__21227__auto___24655,func__21228__auto___24656);
{
var G__24657 = cljs.core.next.call(null,seq__24623_24648__$1);
var G__24658 = null;
var G__24659 = 0;
var G__24660 = 0;
seq__24623_24636 = G__24657;
chunk__24624_24637 = G__24658;
count__24625_24638 = G__24659;
i__24626_24639 = G__24660;
continue;
}
}
} else
{}
}
break;
}
return e__21226__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-cljs-playground","lt-cljs-playground.hello","lt.plugins.lt-cljs-playground/lt-cljs-playground.hello",1450891227),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-cljs-playground.hello","lt-cljs-playground.hello",2891098311)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-cljs-playground","on-close-destroy","lt.plugins.lt-cljs-playground/on-close-destroy",3417265029)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-cljs-playground",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.lt_cljs_playground.hello_panel.call(null,this$);
}));
lt.plugins.lt_cljs_playground.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___24661 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___24661))
{var ts_24662 = temp__4092__auto___24661;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_24662))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_24662);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-cljs-playground","on-close-destroy","lt.plugins.lt-cljs-playground/on-close-destroy",3417265029),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_cljs_playground.__BEH__on_close_destroy,new cljs.core.Keyword(null,"desc","desc",1016984067),"lt-cljs-playground: Close tab and tabset as well if last tab",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_cljs_playground.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-cljs-playground","lt-cljs-playground.hello","lt.plugins.lt-cljs-playground/lt-cljs-playground.hello",1450891227));

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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k24630,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k24630,new cljs.core.Keyword(null,"ed","ed",1013907473)))
{return self__.ed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k24630,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k24630,else__20392__auto__);
} else
{return null;
}
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__24629){var self__ = this;
var this__20396__auto____$1 = this;var pred__24632 = cljs.core.keyword_identical_QMARK_;var expr__24633 = k__20397__auto__;if(cljs.core.truth_(pred__24632.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473),expr__24633)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(G__24629,self__.state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24632.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__24633)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,G__24629,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__24629),null));
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.println.call(null,cljs.core.deref.call(null,self__.state));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))
{var popped = cljs.core.last.call(null,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.pop);
return popped;
} else
{var map__24635 = cljs.core.deref.call(null,self__.state);var map__24635__$1 = ((cljs.core.seq_QMARK_.call(null,map__24635))?cljs.core.apply.call(null,cljs.core.hash_map,map__24635):map__24635);var col = cljs.core.get.call(null,map__24635__$1,new cljs.core.Keyword(null,"col","col",1014002930));var line = cljs.core.get.call(null,map__24635__$1,new cljs.core.Keyword(null,"line","line",1017226086));var line_contents = cljs.core.get.call(null,map__24635__$1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725));if((cljs.core.count.call(null,line_contents) <= col))
{var line_contents__$1 = lt.objs.editor.line.call(null,self__.ed,(line + 1));var line__$1 = (line + 1);while(true){
if((line_contents__$1 == null))
{cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"eof?","eof?",1017023029),true);
return null;
} else
{if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line_contents__$1)))
{{
var G__24663 = lt.objs.editor.line.call(null,self__.ed,(line__$1 + 1));
var G__24664 = (line__$1 + 1);
line_contents__$1 = G__24663;
line__$1 = G__24664;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.core.println.call(null,">>>>",line__$1,line_contents__$1);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"line","line",1017226086),line__$1,new cljs.core.Keyword(null,"col","col",1014002930),0,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),line_contents__$1);
return (line_contents__$1[0]);
} else
{return null;
}
}
}
break;
}
} else
{cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",1014002930)], null),cljs.core.inc);
return (line_contents[col]);
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (_,ch){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.conj,ch);
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__24629){var self__ = this;
var this__20388__auto____$1 = this;return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,G__24629,self__.__extmap,self__.__hash));
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$type = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.lt-cljs-playground/EditorPushbackReader");
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"lt.plugins.lt-cljs-playground/EditorPushbackReader");
});
lt.plugins.lt_cljs_playground.__GT_EditorPushbackReader = (function __GT_EditorPushbackReader(ed,state){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,state));
});
lt.plugins.lt_cljs_playground.map__GT_EditorPushbackReader = (function map__GT_EditorPushbackReader(G__24631){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__24631),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__24631),null,cljs.core.dissoc.call(null,G__24631,new cljs.core.Keyword(null,"ed","ed",1013907473),new cljs.core.Keyword(null,"state","state",1123661827))));
});
lt.plugins.lt_cljs_playground.default_reader_state = (function default_reader_state(ed,start_line,start_col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"col","col",1014002930),start_col,new cljs.core.Keyword(null,"buffer","buffer",3930752946),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),lt.objs.editor.line.call(null,ed,start_line)], null);
});
lt.plugins.lt_cljs_playground.editor_pushback_reader = (function editor_pushback_reader(ed){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,0,0))));
});
lt.plugins.lt_cljs_playground.read_all_forms_in_editor = (function read_all_forms_in_editor(ed){var forms = cljs.core.PersistentVector.EMPTY;var r = lt.plugins.lt_cljs_playground.editor_pushback_reader.call(null,ed);while(true){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"eof?","eof?",1017023029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r)))))
{var form = cljs.reader.read.call(null,r,false,null,true);var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r));{
var G__24665 = cljs.core.conj.call(null,forms,form);
var G__24666 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(state),(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(state) + 1))));
forms = G__24665;
r = G__24666;
continue;
}
} else
{return forms;
}
break;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-cljs-playground","run-dis","lt.plugins.lt-cljs-playground/run-dis",856462100),new cljs.core.Keyword(null,"desc","desc",1016984067),"Idiocheck: Run dis",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return cljs.core.println.call(null,lt.plugins.lt_cljs_playground.read_all_forms_in_editor.call(null,ed));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt_cljs_playground_compiled.js.map