if(!lt.util.load.provided_QMARK_('cljs.tools.reader.impl.utils')) {
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
cljs.tools.reader.impl.utils.char$ = (function char$(x){if((x == null))
{return null;
} else
{return cljs.core.char$.call(null,x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function ex_info_QMARK_(ex){return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
* @param {*} splicing_QMARK_
* @param {*} form
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
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
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20559__auto__){var self__ = this;
var this__20559__auto____$1 = this;var h__20389__auto__ = self__.__hash;if(!((h__20389__auto__ == null)))
{return h__20389__auto__;
} else
{var h__20389__auto____$1 = cljs.core.hash_imap.call(null,this__20559__auto____$1);self__.__hash = h__20389__auto____$1;
return h__20389__auto____$1;
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20564__auto__,k__20565__auto__){var self__ = this;
var this__20564__auto____$1 = this;return cljs.core._lookup.call(null,this__20564__auto____$1,k__20565__auto__,null);
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20566__auto__,k22003,else__20567__auto__){var self__ = this;
var this__20566__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k22003,new cljs.core.Keyword(null,"splicing?","splicing?",1403176600)))
{return self__.splicing_QMARK_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k22003,new cljs.core.Keyword(null,"form","form",1017053238)))
{return self__.form;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k22003,else__20567__auto__);
} else
{return null;
}
}
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20571__auto__,k__20572__auto__,G__22002){var self__ = this;
var this__20571__auto____$1 = this;var pred__22005 = cljs.core.keyword_identical_QMARK_;var expr__22006 = k__20572__auto__;if(cljs.core.truth_(pred__22005.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",1403176600),expr__22006)))
{return (new cljs.tools.reader.impl.utils.ReaderConditional(G__22002,self__.form,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__22005.call(null,new cljs.core.Keyword(null,"form","form",1017053238),expr__22006)))
{return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__22002,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20572__auto__,G__22002),null));
}
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20578__auto__,writer__20579__auto__,opts__20580__auto__){var self__ = this;
var this__20578__auto____$1 = this;var pr_pair__20581__auto__ = ((function (this__20578__auto____$1){
return (function (keyval__20582__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20579__auto__,cljs.core.pr_writer,""," ","",opts__20580__auto__,keyval__20582__auto__);
});})(this__20578__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20579__auto__,pr_pair__20581__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__20580__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",1403176600),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",1017053238),self__.form],null))], null),self__.__extmap));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20569__auto__,entry__20570__auto__){var self__ = this;
var this__20569__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20570__auto__))
{return cljs.core._assoc.call(null,this__20569__auto____$1,cljs.core._nth.call(null,entry__20570__auto__,0),cljs.core._nth.call(null,entry__20570__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20569__auto____$1,entry__20570__auto__);
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20576__auto__){var self__ = this;
var this__20576__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",1403176600),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",1017053238),self__.form],null))], null),self__.__extmap));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20568__auto__){var self__ = this;
var this__20568__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20560__auto__,other__20561__auto__){var self__ = this;
var this__20560__auto____$1 = this;if(cljs.core.truth_((function (){var and__19966__auto__ = other__20561__auto__;if(cljs.core.truth_(and__19966__auto__))
{return ((this__20560__auto____$1.constructor === other__20561__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20560__auto____$1,other__20561__auto__));
} else
{return and__19966__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20563__auto__,G__22002){var self__ = this;
var this__20563__auto____$1 = this;return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__22002,self__.__extmap,self__.__hash));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20558__auto__){var self__ = this;
var this__20558__auto____$1 = this;return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20562__auto__){var self__ = this;
var this__20562__auto____$1 = this;return self__.__meta;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20573__auto__,k__20574__auto__){var self__ = this;
var this__20573__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",1017053238),null,new cljs.core.Keyword(null,"splicing?","splicing?",1403176600),null], null), null),k__20574__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20573__auto____$1),self__.__meta),k__20574__auto__);
} else
{return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20574__auto__)),null));
}
});
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__20598__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__20598__auto__,writer__20599__auto__){return cljs.core._write.call(null,writer__20599__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});
cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function __GT_ReaderConditional(splicing_QMARK_,form){return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form));
});
cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function map__GT_ReaderConditional(G__22004){return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",1403176600).cljs$core$IFn$_invoke$arity$1(G__22004),new cljs.core.Keyword(null,"form","form",1017053238).cljs$core$IFn$_invoke$arity$1(G__22004),null,cljs.core.dissoc.call(null,G__22004,new cljs.core.Keyword(null,"splicing?","splicing?",1403176600),new cljs.core.Keyword(null,"form","form",1017053238))));
});
/**
* Return true if the value is the data representation of a reader conditional
*/
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function reader_conditional_QMARK_(value){return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
* Construct a data representation of a reader conditional.
* If true, splicing? indicates read-cond-splicing.
*/
cljs.tools.reader.impl.utils.reader_conditional = (function reader_conditional(form,splicing_QMARK_){return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#?"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",1403176600).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));
return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"form","form",1017053238).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
* Checks whether a given character is whitespace
*/
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function whitespace_QMARK_(ch){if((ch == null))
{return null;
} else
{if((ch === ","))
{return true;
} else
{return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
* Checks whether a given character is numeric
*/
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function numeric_QMARK_(ch){if((ch == null))
{return null;
} else
{return goog.string.isNumeric(ch);
}
});
/**
* Checks whether the character is a newline
*/
cljs.tools.reader.impl.utils.newline_QMARK_ = (function newline_QMARK_(c){return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
* Resolves syntactical sugar in metadata
*/
cljs.tools.reader.impl.utils.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
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
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null,0);
cljs.tools.reader.impl.utils.next_id = (function next_id(){return cljs.core.swap_BANG_.call(null,cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
}
if(!lt.util.load.provided_QMARK_('goog.string.StringBuffer')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utility for fast string concatenation.
 */

goog.provide('goog.string.StringBuffer');



/**
 * Utility class to facilitate string concatenation.
 *
 * @param {*=} opt_a1 Optional first initial item to append.
 * @param {...*} var_args Other initial items to
 *     append, e.g., new goog.string.StringBuffer('foo', 'bar').
 * @constructor
 */
goog.string.StringBuffer = function(opt_a1, var_args) {
  if (opt_a1 != null) {
    this.append.apply(this, arguments);
  }
};


/**
 * Internal buffer for the string to be concatenated.
 * @type {string}
 * @private
 */
goog.string.StringBuffer.prototype.buffer_ = '';


/**
 * Sets the contents of the string buffer object, replacing what's currently
 * there.
 *
 * @param {*} s String to set.
 */
goog.string.StringBuffer.prototype.set = function(s) {
  this.buffer_ = '' + s;
};


/**
 * Appends one or more items to the buffer.
 *
 * Calling this with null, undefined, or empty arguments is an error.
 *
 * @param {*} a1 Required first string.
 * @param {*=} opt_a2 Optional second string.
 * @param {...*} var_args Other items to append,
 *     e.g., sb.append('foo', 'bar', 'baz').
 * @return {goog.string.StringBuffer} This same StringBuffer object.
 * @suppress {duplicate}
 */
goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
  // Use a1 directly to avoid arguments instantiation for single-arg case.
  this.buffer_ += a1;
  if (opt_a2 != null) { // second argument is undefined (null == undefined)
    for (var i = 1; i < arguments.length; i++) {
      this.buffer_ += arguments[i];
    }
  }
  return this;
};


/**
 * Clears the internal buffer.
 */
goog.string.StringBuffer.prototype.clear = function() {
  this.buffer_ = '';
};


/**
 * @return {number} the length of the current contents of the buffer.
 */
goog.string.StringBuffer.prototype.getLength = function() {
  return this.buffer_.length;
};


/**
 * @return {string} The concatenated string.
 * @override
 */
goog.string.StringBuffer.prototype.toString = function() {
  return this.buffer_;
};
}
if(!lt.util.load.provided_QMARK_('cljs.tools.reader.reader-types')) {
goog.provide('cljs.tools.reader.reader_types');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.utils');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('cljs.tools.reader.impl.utils');
cljs.tools.reader.reader_types.Reader = (function (){var obj21786 = {};return obj21786;
})();
cljs.tools.reader.reader_types.read_char = (function read_char(reader){if((function (){var and__19966__auto__ = reader;if(and__19966__auto__)
{return reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1;
} else
{return and__19966__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(reader);
} else
{var x__20605__auto__ = (((reader == null))?null:reader);return (function (){var or__19978__auto__ = (cljs.tools.reader.reader_types.read_char[goog.typeOf(x__20605__auto__)]);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = (cljs.tools.reader.reader_types.read_char["_"]);if(or__19978__auto____$1)
{return or__19978__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.peek_char = (function peek_char(reader){if((function (){var and__19966__auto__ = reader;if(and__19966__auto__)
{return reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1;
} else
{return and__19966__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(reader);
} else
{var x__20605__auto__ = (((reader == null))?null:reader);return (function (){var or__19978__auto__ = (cljs.tools.reader.reader_types.peek_char[goog.typeOf(x__20605__auto__)]);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = (cljs.tools.reader.reader_types.peek_char["_"]);if(or__19978__auto____$1)
{return or__19978__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.IPushbackReader = (function (){var obj21788 = {};return obj21788;
})();
cljs.tools.reader.reader_types.unread = (function unread(reader,ch){if((function (){var and__19966__auto__ = reader;if(and__19966__auto__)
{return reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2;
} else
{return and__19966__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(reader,ch);
} else
{var x__20605__auto__ = (((reader == null))?null:reader);return (function (){var or__19978__auto__ = (cljs.tools.reader.reader_types.unread[goog.typeOf(x__20605__auto__)]);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = (cljs.tools.reader.reader_types.unread["_"]);if(or__19978__auto____$1)
{return or__19978__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
cljs.tools.reader.reader_types.IndexingReader = (function (){var obj21790 = {};return obj21790;
})();
cljs.tools.reader.reader_types.get_line_number = (function get_line_number(reader){if((function (){var and__19966__auto__ = reader;if(and__19966__auto__)
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1;
} else
{return and__19966__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(reader);
} else
{var x__20605__auto__ = (((reader == null))?null:reader);return (function (){var or__19978__auto__ = (cljs.tools.reader.reader_types.get_line_number[goog.typeOf(x__20605__auto__)]);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = (cljs.tools.reader.reader_types.get_line_number["_"]);if(or__19978__auto____$1)
{return or__19978__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.get_column_number = (function get_column_number(reader){if((function (){var and__19966__auto__ = reader;if(and__19966__auto__)
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1;
} else
{return and__19966__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(reader);
} else
{var x__20605__auto__ = (((reader == null))?null:reader);return (function (){var or__19978__auto__ = (cljs.tools.reader.reader_types.get_column_number[goog.typeOf(x__20605__auto__)]);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = (cljs.tools.reader.reader_types.get_column_number["_"]);if(or__19978__auto____$1)
{return or__19978__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-column-number",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.get_file_name = (function get_file_name(reader){if((function (){var and__19966__auto__ = reader;if(and__19966__auto__)
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1;
} else
{return and__19966__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(reader);
} else
{var x__20605__auto__ = (((reader == null))?null:reader);return (function (){var or__19978__auto__ = (cljs.tools.reader.reader_types.get_file_name[goog.typeOf(x__20605__auto__)]);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = (cljs.tools.reader.reader_types.get_file_name["_"]);if(or__19978__auto____$1)
{return or__19978__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-file-name",reader);
}
}
})().call(null,reader);
}
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
cljs.tools.reader.reader_types.StringReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.StringReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/StringReader";
cljs.tools.reader.reader_types.StringReader.cljs$lang$ctorPrWriter = (function (this__20545__auto__,writer__20546__auto__,opt__20547__auto__){return cljs.core._write.call(null,writer__20546__auto__,"cljs.tools.reader.reader-types/StringReader");
});
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{var r = self__.s.charAt(self__.s_pos);self__.s_pos = (self__.s_pos + 1);
return r;
} else
{return null;
}
});
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{return self__.s.charAt(self__.s_pos);
} else
{return null;
}
});
cljs.tools.reader.reader_types.__GT_StringReader = (function __GT_StringReader(s,s_len,s_pos){return (new cljs.tools.reader.reader_types.StringReader(s,s_len,s_pos));
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.NodeReadableReader = (function (readable,buf){
this.readable = readable;
this.buf = buf;
})
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/NodeReadableReader";
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$ctorPrWriter = (function (this__20545__auto__,writer__20546__auto__,opt__20547__auto__){return cljs.core._write.call(null,writer__20546__auto__,"cljs.tools.reader.reader-types/NodeReadableReader");
});
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.buf))
{var c = (self__.buf[0]);self__.buf = null;
return cljs.tools.reader.impl.utils.char$.call(null,c);
} else
{var c = [cljs.core.str(self__.readable.read(1))].join('');if(cljs.core.truth_(c))
{return cljs.tools.reader.impl.utils.char$.call(null,c);
} else
{return null;
}
}
});
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.buf))
{} else
{self__.buf = [cljs.core.str(self__.readable.read(1))].join('');
}
if(cljs.core.truth_(self__.buf))
{return cljs.tools.reader.impl.utils.char$.call(null,(self__.buf[0]));
} else
{return null;
}
});
cljs.tools.reader.reader_types.__GT_NodeReadableReader = (function __GT_NodeReadableReader(readable,buf){return (new cljs.tools.reader.reader_types.NodeReadableReader(readable,buf));
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/PushbackReader";
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$ctorPrWriter = (function (this__20545__auto__,writer__20546__auto__,opt__20547__auto__){return cljs.core._write.call(null,writer__20546__auto__,"cljs.tools.reader.reader-types/PushbackReader");
});
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = true;
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
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
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var c = (((self__.buf_pos < self__.buf_len))?(self__.buf[self__.buf_pos]):cljs.tools.reader.reader_types.read_char.call(null,self__.rdr));if((self__.buf_pos < self__.buf_len))
{self__.buf_pos = (self__.buf_pos + 1);
} else
{}
return cljs.tools.reader.impl.utils.char$.call(null,c);
});
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var c = (((self__.buf_pos < self__.buf_len))?(self__.buf[self__.buf_pos]):cljs.tools.reader.reader_types.peek_char.call(null,self__.rdr));return cljs.tools.reader.impl.utils.char$.call(null,c);
});
cljs.tools.reader.reader_types.__GT_PushbackReader = (function __GT_PushbackReader(rdr,buf,buf_len,buf_pos){return (new cljs.tools.reader.reader_types.PushbackReader(rdr,buf,buf_len,buf_pos));
});
cljs.tools.reader.reader_types.normalize_newline = (function normalize_newline(rdr,ch){if(("\r" === ch))
{var c = cljs.tools.reader.reader_types.peek_char.call(null,rdr);if((("\f" === c)) || (("\n" === c)))
{cljs.tools.reader.reader_types.read_char.call(null,rdr);
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
cljs.tools.reader.reader_types.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.prev_column = prev_column;
this.file_name = file_name;
})
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/IndexingPushbackReader";
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__20545__auto__,writer__20546__auto__,opt__20547__auto__){return cljs.core._write.call(null,writer__20546__auto__,"cljs.tools.reader.reader-types/IndexingPushbackReader");
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$ = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.file_name;
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
self__.column = self__.prev_column;
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
return cljs.tools.reader.reader_types.unread.call(null,self__.rdr,ch);
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.tools.reader.reader_types.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.tools.reader.reader_types.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.tools.reader.impl.utils.newline_QMARK_.call(null,ch__$1);
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
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.tools.reader.reader_types.peek_char.call(null,self__.rdr);
});
cljs.tools.reader.reader_types.__GT_IndexingPushbackReader = (function __GT_IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){return (new cljs.tools.reader.reader_types.IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name));
});
/**
* Returns an object of the same type and value as `obj`, with its
* metadata merged over `m`.
*/
cljs.tools.reader.reader_types.merge_meta = (function merge_meta(obj,m){var orig_meta = cljs.core.meta.call(null,obj);return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,m,cljs.core.dissoc.call(null,orig_meta,new cljs.core.Keyword(null,"source","source",4412365709))));
});
/**
* Returns a string containing the contents of the top most source
* logging frame.
*/
cljs.tools.reader.reader_types.peek_source_log = (function peek_source_log(frames){return cljs.core.subs.call(null,[cljs.core.str(new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(frames))].join(''),cljs.core.first.call(null,new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(frames)));
});
/**
* Logs `char` to all currently active source logging frames.
*/
cljs.tools.reader.reader_types.log_source_char = (function log_source_char(frames,char$){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(frames);if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;return buffer.append(char$);
} else
{return null;
}
});
/**
* Removes the last logged character from all currently active source
* logging frames. Called when pushing a character back.
*/
cljs.tools.reader.reader_types.drop_last_logged_char = (function drop_last_logged_char(frames){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(frames);if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;return buffer.set(cljs.core.subs.call(null,[cljs.core.str(buffer)].join(''),0,(buffer.getLength() - 1)));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.SourceLoggingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,prev_column,file_name,frames){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.prev_column = prev_column;
this.file_name = file_name;
this.frames = frames;
})
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/SourceLoggingPushbackReader";
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$ctorPrWriter = (function (this__20545__auto__,writer__20546__auto__,opt__20547__auto__){return cljs.core._write.call(null,writer__20546__auto__,"cljs.tools.reader.reader-types/SourceLoggingPushbackReader");
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$ = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.file_name;
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
self__.column = self__.prev_column;
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
if(cljs.core.truth_(ch))
{cljs.tools.reader.reader_types.drop_last_logged_char.call(null,cljs.core.deref.call(null,self__.frames));
} else
{}
return cljs.tools.reader.reader_types.unread.call(null,self__.rdr,ch);
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.tools.reader.reader_types.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.tools.reader.reader_types.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.tools.reader.impl.utils.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.prev_column = self__.column;
self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
cljs.tools.reader.reader_types.log_source_char.call(null,cljs.core.deref.call(null,self__.frames),ch__$1);
return ch__$1;
} else
{return null;
}
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.tools.reader.reader_types.peek_char.call(null,self__.rdr);
});
cljs.tools.reader.reader_types.__GT_SourceLoggingPushbackReader = (function __GT_SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name,frames){return (new cljs.tools.reader.reader_types.SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name,frames));
});
/**
* Returns true if the reader satisfies IndexingReader
*/
cljs.tools.reader.reader_types.indexing_reader_QMARK_ = (function indexing_reader_QMARK_(rdr){var G__21792 = rdr;if(G__21792)
{var bit__20621__auto__ = null;if(cljs.core.truth_((function (){var or__19978__auto__ = bit__20621__auto__;if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{return G__21792.cljs$tools$reader$reader_types$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* Creates a StringReader from a given string
*/
cljs.tools.reader.reader_types.string_reader = (function string_reader(s){return (new cljs.tools.reader.reader_types.StringReader(s,cljs.core.count.call(null,s),0));
});
/**
* Creates a PushbackReader from a given string
*/
cljs.tools.reader.reader_types.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){return string_push_back_reader.call(null,s,1);
});
var string_push_back_reader__2 = (function (s,buf_len){return (new cljs.tools.reader.reader_types.PushbackReader(cljs.tools.reader.reader_types.string_reader.call(null,s),cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
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
cljs.tools.reader.reader_types.node_readable_push_back_reader = (function node_readable_push_back_reader(readable){return (new cljs.tools.reader.reader_types.PushbackReader((new cljs.tools.reader.reader_types.NodeReadableReader(readable,null)),cljs.core.object_array.call(null,1),1,1));
});
/**
* Creates an IndexingPushbackReader from a given string or PushbackReader
*/
cljs.tools.reader.reader_types.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s_or_rdr){return indexing_push_back_reader.call(null,s_or_rdr,1);
});
var indexing_push_back_reader__2 = (function (s_or_rdr,buf_len){return indexing_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var indexing_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.tools.reader.reader_types.IndexingPushbackReader(((typeof s_or_rdr === 'string')?cljs.tools.reader.reader_types.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,0,file_name));
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
cljs.tools.reader.reader_types.source_logging_push_back_reader = (function() {
var source_logging_push_back_reader = null;
var source_logging_push_back_reader__1 = (function (s_or_rdr){return source_logging_push_back_reader.call(null,s_or_rdr,1);
});
var source_logging_push_back_reader__2 = (function (s_or_rdr,buf_len){return source_logging_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var source_logging_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.tools.reader.reader_types.SourceLoggingPushbackReader(((typeof s_or_rdr === 'string')?cljs.tools.reader.reader_types.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,0,file_name,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),(new goog.string.StringBuffer()),new cljs.core.Keyword(null,"offset","offset",4289091589),cljs.core.list(0)], null))));
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
/**
* Reads a line from the reader or from *in* if no reader is specified
*/
cljs.tools.reader.reader_types.read_line = (function read_line(rdr){var c = cljs.tools.reader.reader_types.read_char.call(null,rdr);var s = (new goog.string.StringBuffer());while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_.call(null,c))
{return [cljs.core.str(s)].join('');
} else
{{
var G__21795 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__21796 = s.append(c);
c = G__21795;
s = G__21796;
continue;
}
}
break;
}
});
/**
* Throws an ExceptionInfo with the given message.
* If rdr is an IndexingReader, additional information about column and line number is provided
* @param {...*} var_args
*/
cljs.tools.reader.reader_types.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"reader-exception","reader-exception",2203264823)], null),((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.tools.reader.reader_types.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"column","column",3954034376),cljs.tools.reader.reader_types.get_column_number.call(null,rdr)], null),(function (){var temp__4092__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var file_name = temp__4092__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),file_name], null);
} else
{return null;
}
})()):null)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__21797){
var rdr = cljs.core.first(arglist__21797);
var msg = cljs.core.rest(arglist__21797);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.tools.reader.reader_types.source_logging_reader_QMARK_ = (function source_logging_reader_QMARK_(rdr){return (rdr instanceof cljs.tools.reader.reader_types.SourceLoggingPushbackReader);
});
/**
* Returns true if rdr is an IndexingReader and the current char starts a new line
*/
cljs.tools.reader.reader_types.line_start_QMARK_ = (function line_start_QMARK_(rdr){if(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))
{return (1 === cljs.tools.reader.reader_types.get_column_number.call(null,rdr));
} else
{return null;
}
});
cljs.tools.reader.reader_types.log_source_STAR_ = (function log_source_STAR_(reader,f){var buffer = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader.frames));try{cljs.core.swap_BANG_.call(null,reader.frames,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",4289091589)], null),cljs.core.conj,buffer.getLength());
var ret = f.call(null);if((function (){var G__21794 = ret;if(G__21794)
{var bit__20621__auto__ = (G__21794.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__20621__auto__) || (G__21794.cljs$core$IMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.tools.reader.reader_types.merge_meta.call(null,ret,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",4412365709),cljs.tools.reader.reader_types.peek_source_log.call(null,cljs.core.deref.call(null,reader.frames))], null));
} else
{return ret;
}
}finally {cljs.core.swap_BANG_.call(null,reader.frames,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",4289091589)], null),cljs.core.rest);
}});
}
if(!lt.util.load.provided_QMARK_('cljs.tools.reader.impl.commons')) {
goog.provide('cljs.tools.reader.impl.commons');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.reader_types');
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.tools.reader.impl.commons.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,reader))));
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.tools.reader.impl.commons.read_past = (function read_past(pred,rdr){var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);while(true){
if(pred.call(null,ch))
{{
var G__21998 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__21998;
continue;
}
} else
{return ch;
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.tools.reader.impl.commons.skip_line = (function skip_line(reader){while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_.call(null,cljs.tools.reader.reader_types.read_char.call(null,reader)))
{} else
{{
continue;
}
}
break;
}
return reader;
});
cljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
cljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
cljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
cljs.tools.reader.impl.commons.match_int = (function match_int(s){var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,cljs.tools.reader.impl.commons.int_pattern,s));if(!((m.call(null,2) == null)))
{return 0;
} else
{var negate_QMARK_ = ("-" === m.call(null,1));var a = ((!((m.call(null,3) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,3),10], null):((!((m.call(null,4) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,4),16], null):((!((m.call(null,5) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,5),8], null):((!((m.call(null,7) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,7),parseInt(m.call(null,6))], null):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null):null)))));var n = a.call(null,0);if((n == null))
{return null;
} else
{var bn = parseInt(n,a.call(null,1));var bn__$1 = ((negate_QMARK_)?(-1 * bn):bn);if(cljs.core.truth_(isNaN(bn__$1)))
{return null;
} else
{return bn__$1;
}
}
}
});
cljs.tools.reader.impl.commons.match_ratio = (function match_ratio(s){var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,cljs.tools.reader.impl.commons.ratio_pattern,s));var numerator = m.call(null,1);var denominator = m.call(null,2);var numerator__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/^\+/,numerator))?cljs.core.subs.call(null,numerator,1):numerator);return (parseInt(numerator__$1) / parseInt(denominator));
});
cljs.tools.reader.impl.commons.match_float = (function match_float(s){var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,cljs.tools.reader.impl.commons.float_pattern,s));if(!((m.call(null,4) == null)))
{return parseFloat(m.call(null,1));
} else
{return parseFloat(s);
}
});
cljs.tools.reader.impl.commons.matches_QMARK_ = (function matches_QMARK_(pattern,s){var vec__21987 = cljs.core.re_find.call(null,pattern,s);var match = cljs.core.nth.call(null,vec__21987,0,null);return (match === s);
});
cljs.tools.reader.impl.commons.match_number = (function match_number(s){if(cljs.tools.reader.impl.commons.matches_QMARK_.call(null,cljs.tools.reader.impl.commons.int_pattern,s))
{return cljs.tools.reader.impl.commons.match_int.call(null,s);
} else
{if(cljs.tools.reader.impl.commons.matches_QMARK_.call(null,cljs.tools.reader.impl.commons.float_pattern,s))
{return cljs.tools.reader.impl.commons.match_float.call(null,s);
} else
{if(cljs.tools.reader.impl.commons.matches_QMARK_.call(null,cljs.tools.reader.impl.commons.ratio_pattern,s))
{return cljs.tools.reader.impl.commons.match_ratio.call(null,s);
} else
{return null;
}
}
}
});
/**
* Parses a string into a vector of the namespace and symbol
*/
cljs.tools.reader.impl.commons.parse_symbol = (function parse_symbol(token){if((("" === token)) || (/:$/.test(token) === true) || (/^::/.test(token) === true))
{return null;
} else
{var ns_idx = token.indexOf("/");var ns = (((ns_idx > 0))?cljs.core.subs.call(null,token,0,ns_idx):null);if(!((ns == null)))
{var ns_idx__$1 = (ns_idx + 1);if((ns_idx__$1 === cljs.core.count.call(null,token)))
{return null;
} else
{var sym = cljs.core.subs.call(null,token,ns_idx__$1);if((!(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,cljs.core.nth.call(null,sym,0)))) && (!(("" === sym))) && (/:$/.test(ns) === false) && (((sym === "/")) || ((-1 === sym.indexOf("/")))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,sym], null);
} else
{return null;
}
}
} else
{if(((token === "/")) || ((-1 === token.indexOf("/"))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,token], null);
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
cljs.tools.reader.impl.commons.read_comment = (function() { 
var read_comment__delegate = function (rdr,_){return cljs.tools.reader.impl.commons.skip_line.call(null,rdr);
};
var read_comment = function (rdr,var_args){
var _ = null;if (arguments.length > 1) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return read_comment__delegate.call(this,rdr,_);};
read_comment.cljs$lang$maxFixedArity = 1;
read_comment.cljs$lang$applyTo = (function (arglist__21999){
var rdr = cljs.core.first(arglist__21999);
var _ = cljs.core.rest(arglist__21999);
return read_comment__delegate(rdr,_);
});
read_comment.cljs$core$IFn$_invoke$arity$variadic = read_comment__delegate;
return read_comment;
})()
;
cljs.tools.reader.impl.commons.throwing_reader = (function throwing_reader(msg){return (function() { 
var G__22000__delegate = function (rdr,_){return cljs.tools.reader.reader_types.reader_error.call(null,rdr,msg);
};
var G__22000 = function (rdr,var_args){
var _ = null;if (arguments.length > 1) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__22000__delegate.call(this,rdr,_);};
G__22000.cljs$lang$maxFixedArity = 1;
G__22000.cljs$lang$applyTo = (function (arglist__22001){
var rdr = cljs.core.first(arglist__22001);
var _ = cljs.core.rest(arglist__22001);
return G__22000__delegate(rdr,_);
});
G__22000.cljs$core$IFn$_invoke$arity$variadic = G__22000__delegate;
return G__22000;
})()
;
});
}
if(!lt.util.load.provided_QMARK_('cljs.tools.reader')) {
goog.provide('cljs.tools.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader.reader_types');
goog.require('goog.string');
goog.require('cljs.tools.reader.reader_types');
goog.require('goog.array');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.commons');
goog.require('goog.string.StringBuffer');
goog.require('cljs.tools.reader.impl.utils');
goog.require('goog.array');
goog.require('goog.string');
cljs.tools.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var G__21799 = ch;if(cljs.core._EQ_.call(null,"@",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"`",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"\"",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"(",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,")",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,";",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"[",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"{",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"\\",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"]",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"}",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"^",G__21799))
{return true;
} else
{if(cljs.core._EQ_.call(null,"~",G__21799))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
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
});
cljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
* Read in a single logical token from the reader
*/
cljs.tools.reader.read_token = (function read_token(rdr,initch){if((initch == null))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else
{cljs.tools.reader.sb.clear();
var ch = initch;while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))
{if((ch == null))
{} else
{cljs.tools.reader.reader_types.unread.call(null,rdr,ch);
}
return cljs.tools.reader.sb.toString();
} else
{cljs.tools.reader.sb.append(ch);
{
var G__21959 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__21959;
continue;
}
}
break;
}
}
});
cljs.tools.reader.read_dispatch = (function read_dispatch(rdr,_,opts,pending_forms){var temp__4090__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);if(cljs.core.truth_(temp__4090__auto__))
{var ch = temp__4090__auto__;var temp__4090__auto____$1 = cljs.tools.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(temp__4090__auto____$1))
{var dm = temp__4090__auto____$1;return dm.call(null,rdr,ch,opts,pending_forms);
} else
{return cljs.tools.reader.read_tagged.call(null,(function (){var G__21801 = rdr;cljs.tools.reader.reader_types.unread.call(null,G__21801,ch);
return G__21801;
})(),ch,opts,pending_forms);
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch,opts,pending_forms){return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.tools.reader.read_regex = (function read_regex(rdr,ch,opts,pending_forms){var sb = (new goog.string.StringBuffer());var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);while(true){
if(("\"" === ch__$1))
{return cljs.core.re_pattern.call(null,[cljs.core.str(sb)].join(''));
} else
{if((ch__$1 == null))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else
{sb.append(ch__$1);
if(("\\" === ch__$1))
{var ch_21960__$2 = cljs.tools.reader.reader_types.read_char.call(null,rdr);if((ch_21960__$2 == null))
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else
{}
sb.append(ch_21960__$2);
} else
{}
{
var G__21961 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch__$1 = G__21961;
continue;
}
}
}
break;
}
});
cljs.tools.reader.char_code = (function char_code(ch,base){var code = parseInt(ch,base);if(cljs.core.truth_(isNaN(code)))
{return -1;
} else
{return code;
}
});
cljs.tools.reader.read_unicode_char = (function() {
var read_unicode_char = null;
var read_unicode_char__4 = (function (token,offset,length,base){var l = (offset + length);if((cljs.core.count.call(null,token) === l))
{} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid unicode character: \\"),cljs.core.str(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",1350190758)], null));
}
var i = offset;var uc = 0;while(true){
if((i === l))
{return String.fromCharCode(uc);
} else
{var d = cljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);if((d === -1))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(cljs.core.nth.call(null,token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",1350190758)], null));
} else
{{
var G__21962 = (i + 1);
var G__21963 = (d + (uc * base));
i = G__21962;
uc = G__21963;
continue;
}
}
}
break;
}
});
var read_unicode_char__5 = (function (rdr,initch,base,length,exact_QMARK_){var i = 1;var uc = cljs.tools.reader.char_code.call(null,initch,base);while(true){
if((uc === -1))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",1350190758)], null));
} else
{if(!((i === length)))
{var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);if(cljs.core.truth_((function (){var or__19978__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = cljs.tools.reader.macros.call(null,ch);if(cljs.core.truth_(or__19978__auto____$1))
{return or__19978__auto____$1;
} else
{return (ch == null);
}
}
})()))
{if(cljs.core.truth_(exact_QMARK_))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid character length: "),cljs.core.str(i),cljs.core.str(", should be: "),cljs.core.str(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",1350190758)], null));
} else
{return String.fromCharCode(uc);
}
} else
{var d = cljs.tools.reader.char_code.call(null,ch,base);cljs.tools.reader.reader_types.read_char.call(null,rdr);
if((d === -1))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",1350190758)], null));
} else
{{
var G__21964 = (i + 1);
var G__21965 = (d + (uc * base));
i = G__21964;
uc = G__21965;
continue;
}
}
}
} else
{return String.fromCharCode(uc);
}
}
break;
}
});
read_unicode_char = function(rdr,initch,base,length,exact_QMARK_){
switch(arguments.length){
case 4:
return read_unicode_char__4.call(this,rdr,initch,base,length);
case 5:
return read_unicode_char__5.call(this,rdr,initch,base,length,exact_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read_unicode_char.cljs$core$IFn$_invoke$arity$4 = read_unicode_char__4;
read_unicode_char.cljs$core$IFn$_invoke$arity$5 = read_unicode_char__5;
return read_unicode_char;
})()
;
cljs.tools.reader.upper_limit = "\uD7FF".charCodeAt(0);
cljs.tools.reader.lower_limit = "\uE000".charCodeAt(0);
cljs.tools.reader.valid_octal_QMARK_ = (function valid_octal_QMARK_(token,base){return (parseInt(token,base) <= 255);
});
/**
* Read in a character literal
*/
cljs.tools.reader.read_char_STAR_ = (function read_char_STAR_(rdr,backslash,opts,pending_forms){var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);if(!((ch == null)))
{var token = (((cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))?[cljs.core.str(ch)].join(''):cljs.tools.reader.read_token.call(null,rdr,ch));var token_len = token.length;if((1 === token_len))
{return token.charAt(0);
} else
{if(cljs.core._EQ_.call(null,token,"newline"))
{return "\n";
} else
{if(cljs.core._EQ_.call(null,token,"space"))
{return " ";
} else
{if(cljs.core._EQ_.call(null,token,"tab"))
{return "\t";
} else
{if(cljs.core._EQ_.call(null,token,"backspace"))
{return "\b";
} else
{if(cljs.core._EQ_.call(null,token,"formfeed"))
{return "\f";
} else
{if(cljs.core._EQ_.call(null,token,"return"))
{return "\r";
} else
{if(cljs.core.truth_(goog.string.startsWith(token,"u")))
{var c = cljs.tools.reader.read_unicode_char.call(null,token,1,4,16);var ic = c.charCodeAt(0);if(((ic > cljs.tools.reader.upper_limit)) && ((ic < cljs.tools.reader.lower_limit)))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid character constant: \\u",c);
} else
{return c;
}
} else
{if(cljs.core.truth_(goog.string.startsWith(token,"o")))
{var len = (token_len - 1);if((len > 3))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid octal escape sequence length: ",len);
} else
{var offset = 1;var base = 8;var uc = cljs.tools.reader.read_unicode_char.call(null,token,offset,len,base);if(!(cljs.tools.reader.valid_octal_QMARK_.call(null,cljs.core.subs.call(null,token,offset),base)))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else
{return uc;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported character: \\",token);
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
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.starting_line_col_info = (function starting_line_col_info(rdr){if(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),((cljs.tools.reader.reader_types.get_column_number.call(null,rdr) - 1) | 0)], null);
} else
{return null;
}
});
cljs.tools.reader.ending_line_col_info = (function ending_line_col_info(rdr){if(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),cljs.tools.reader.reader_types.get_column_number.call(null,rdr)], null);
} else
{return null;
}
});
if(typeof cljs.tools.reader.READ_EOF !== 'undefined')
{} else
{cljs.tools.reader.READ_EOF = (new Object());
}
if(typeof cljs.tools.reader.READ_FINISHED !== 'undefined')
{} else
{cljs.tools.reader.READ_FINISHED = (new Object());
}
cljs.tools.reader._STAR_read_delim_STAR_ = false;
cljs.tools.reader.read_delimited_internal = (function read_delimited_internal(delim,rdr,opts,pending_forms){var vec__21803 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var start_line = cljs.core.nth.call(null,vec__21803,0,null);var start_column = cljs.core.nth.call(null,vec__21803,1,null);var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var form = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms);if((form === cljs.tools.reader.READ_FINISHED))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{if((form === cljs.tools.reader.READ_EOF))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading",(cljs.core.truth_(start_line)?[cljs.core.str(", starting at line "),cljs.core.str(start_line),cljs.core.str(" and column "),cljs.core.str(start_column)].join(''):null));
} else
{{
var G__21966 = cljs.core.conj_BANG_.call(null,a,form);
a = G__21966;
continue;
}
}
}
break;
}
});
/**
* Reads and returns a collection ended with delim
*/
cljs.tools.reader.read_delimited = (function read_delimited(delim,rdr,opts,pending_forms){var _STAR_read_delim_STAR_21805 = cljs.tools.reader._STAR_read_delim_STAR_;try{cljs.tools.reader._STAR_read_delim_STAR_ = true;
return cljs.tools.reader.read_delimited_internal.call(null,delim,rdr,opts,pending_forms);
}finally {cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_21805;
}});
/**
* Read in a list, including its location if the reader is an indexing reader
*/
cljs.tools.reader.read_list = (function read_list(rdr,_,opts,pending_forms){var vec__21808 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var start_line = cljs.core.nth.call(null,vec__21808,0,null);var start_column = cljs.core.nth.call(null,vec__21808,1,null);var the_list = cljs.tools.reader.read_delimited.call(null,")",rdr,opts,pending_forms);var vec__21809 = cljs.tools.reader.ending_line_col_info.call(null,rdr);var end_line = cljs.core.nth.call(null,vec__21809,0,null);var end_column = cljs.core.nth.call(null,vec__21809,1,null);return cljs.core.with_meta.call(null,((cljs.core.empty_QMARK_.call(null,the_list))?cljs.core.List.EMPTY:cljs.core.apply.call(null,cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4092__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var file = temp__4092__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),file], null);
} else
{return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"column","column",3954034376),start_column,new cljs.core.Keyword(null,"end-line","end-line",2693041432),end_line,new cljs.core.Keyword(null,"end-column","end-column",3799845882),end_column], null)):null));
});
/**
* Read in a vector, including its location if the reader is an indexing reader
*/
cljs.tools.reader.read_vector = (function read_vector(rdr,_,opts,pending_forms){var vec__21812 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var start_line = cljs.core.nth.call(null,vec__21812,0,null);var start_column = cljs.core.nth.call(null,vec__21812,1,null);var the_vector = cljs.tools.reader.read_delimited.call(null,"]",rdr,opts,pending_forms);var vec__21813 = cljs.tools.reader.ending_line_col_info.call(null,rdr);var end_line = cljs.core.nth.call(null,vec__21813,0,null);var end_column = cljs.core.nth.call(null,vec__21813,1,null);return cljs.core.with_meta.call(null,the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4092__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var file = temp__4092__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),file], null);
} else
{return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"column","column",3954034376),start_column,new cljs.core.Keyword(null,"end-line","end-line",2693041432),end_line,new cljs.core.Keyword(null,"end-column","end-column",3799845882),end_column], null)):null));
});
cljs.tools.reader.duplicate_keys_error = (function duplicate_keys_error(msg,coll){var duplicates = (function duplicates(seq){var iter__20695__auto__ = (function iter__21870(s__21871){return (new cljs.core.LazySeq(null,(function (){var s__21871__$1 = s__21871;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21871__$1);if(temp__4092__auto__)
{var s__21871__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21871__$2))
{var c__20693__auto__ = cljs.core.chunk_first.call(null,s__21871__$2);var size__20694__auto__ = cljs.core.count.call(null,c__20693__auto__);var b__21873 = cljs.core.chunk_buffer.call(null,size__20694__auto__);if((function (){var i__21872 = 0;while(true){
if((i__21872 < size__20694__auto__))
{var vec__21876 = cljs.core._nth.call(null,c__20693__auto__,i__21872);var id = cljs.core.nth.call(null,vec__21876,0,null);var freq = cljs.core.nth.call(null,vec__21876,1,null);if((freq > 1))
{cljs.core.chunk_append.call(null,b__21873,id);
{
var G__21967 = (i__21872 + 1);
i__21872 = G__21967;
continue;
}
} else
{{
var G__21968 = (i__21872 + 1);
i__21872 = G__21968;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),iter__21870.call(null,cljs.core.chunk_rest.call(null,s__21871__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),null);
}
} else
{var vec__21877 = cljs.core.first.call(null,s__21871__$2);var id = cljs.core.nth.call(null,vec__21877,0,null);var freq = cljs.core.nth.call(null,vec__21877,1,null);if((freq > 1))
{return cljs.core.cons.call(null,id,iter__21870.call(null,cljs.core.rest.call(null,s__21871__$2)));
} else
{{
var G__21969 = cljs.core.rest.call(null,s__21871__$2);
s__21871__$1 = G__21969;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20695__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > 1))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
/**
* Read in a map, including its location if the reader is an indexing reader
*/
cljs.tools.reader.read_map = (function read_map(rdr,_,opts,pending_forms){var vec__21880 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var start_line = cljs.core.nth.call(null,vec__21880,0,null);var start_column = cljs.core.nth.call(null,vec__21880,1,null);var the_map = cljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);var map_count = cljs.core.count.call(null,the_map);var ks = cljs.core.take_nth.call(null,2,the_map);var key_set = cljs.core.set.call(null,ks);var vec__21881 = cljs.tools.reader.ending_line_col_info.call(null,rdr);var end_line = cljs.core.nth.call(null,vec__21881,0,null);var end_column = cljs.core.nth.call(null,vec__21881,1,null);if(cljs.core.odd_QMARK_.call(null,map_count))
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,key_set),cljs.core.count.call(null,ks)))
{} else
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,cljs.tools.reader.duplicate_keys_error.call(null,"Map literal contains duplicate key",ks));
}
return cljs.core.with_meta.call(null,(((map_count === 0))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.to_array.call(null,the_map))),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4092__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var file = temp__4092__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),file], null);
} else
{return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"column","column",3954034376),start_column,new cljs.core.Keyword(null,"end-line","end-line",2693041432),end_line,new cljs.core.Keyword(null,"end-column","end-column",3799845882),end_column], null)):null));
});
cljs.tools.reader.read_number = (function read_number(rdr,initch){var sb = (function (){var G__21884 = (new goog.string.StringBuffer());G__21884.append(initch);
return G__21884;
})();var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);while(true){
if(cljs.core.truth_((function (){var or__19978__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);if(or__19978__auto__)
{return or__19978__auto__;
} else
{var or__19978__auto____$1 = cljs.tools.reader.macros.call(null,ch);if(cljs.core.truth_(or__19978__auto____$1))
{return or__19978__auto____$1;
} else
{return (ch == null);
}
}
})()))
{var s = [cljs.core.str(sb)].join('');cljs.tools.reader.reader_types.unread.call(null,rdr,ch);
var or__19978__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid number format [",s,"]");
}
} else
{{
var G__21970 = (function (){var G__21885 = sb;G__21885.append(ch);
return G__21885;
})();
var G__21971 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__21970;
ch = G__21971;
continue;
}
}
break;
}
});
cljs.tools.reader.escape_char = (function escape_char(sb,rdr){var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);var G__21887 = ch;if(cljs.core._EQ_.call(null,"u",G__21887))
{var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);if((-1 === parseInt((ch__$1 | 0),16)))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch__$1);
} else
{return cljs.tools.reader.read_unicode_char.call(null,rdr,ch__$1,16,4,true);
}
} else
{if(cljs.core._EQ_.call(null,"f",G__21887))
{return "\f";
} else
{if(cljs.core._EQ_.call(null,"b",G__21887))
{return "\b";
} else
{if(cljs.core._EQ_.call(null,"\"",G__21887))
{return "\"";
} else
{if(cljs.core._EQ_.call(null,"\\",G__21887))
{return "\\";
} else
{if(cljs.core._EQ_.call(null,"n",G__21887))
{return "\n";
} else
{if(cljs.core._EQ_.call(null,"r",G__21887))
{return "\r";
} else
{if(cljs.core._EQ_.call(null,"t",G__21887))
{return "\t";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch))
{var ch__$1 = cljs.tools.reader.read_unicode_char.call(null,rdr,ch,8,3,false);if(((ch__$1 | 0) > 223))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else
{return ch__$1;
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported escape character: \\",ch);
}
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
});
cljs.tools.reader.read_string_STAR_ = (function read_string_STAR_(reader,_,opts,pending_forms){var sb = (new goog.string.StringBuffer());var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF while reading string");
} else
{var G__21891 = ch;if(cljs.core._EQ_.call(null,"\"",G__21891))
{return [cljs.core.str(sb)].join('');
} else
{if(cljs.core._EQ_.call(null,"\\",G__21891))
{{
var G__21972 = (function (){var G__21892 = sb;G__21892.append(cljs.tools.reader.escape_char.call(null,sb,reader));
return G__21892;
})();
var G__21973 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__21972;
ch = G__21973;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21974 = (function (){var G__21893 = sb;G__21893.append(ch);
return G__21893;
})();
var G__21975 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__21974;
ch = G__21975;
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
cljs.tools.reader.loc_info = (function loc_info(rdr,line,column){if((line == null))
{return null;
} else
{var file = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),file], null));var vec__21895 = cljs.tools.reader.ending_line_col_info.call(null,rdr);var end_line = cljs.core.nth.call(null,vec__21895,0,null);var end_column = cljs.core.nth.call(null,vec__21895,1,null);var lcm = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"column","column",3954034376),column,new cljs.core.Keyword(null,"end-line","end-line",2693041432),end_line,new cljs.core.Keyword(null,"end-column","end-column",3799845882),end_column], null);return cljs.core.merge.call(null,filem,lcm);
}
});
cljs.tools.reader.read_symbol = (function read_symbol(rdr,initch){var vec__21898 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var line = cljs.core.nth.call(null,vec__21898,0,null);var column = cljs.core.nth.call(null,vec__21898,1,null);var token = cljs.tools.reader.read_token.call(null,rdr,initch);if((token == null))
{return null;
} else
{var G__21899 = token;if(cljs.core._EQ_.call(null,"+Infinity",G__21899))
{return Number.POSITIVE_INFINITY;
} else
{if(cljs.core._EQ_.call(null,"Infinity",G__21899))
{return Number.POSITIVE_INFINITY;
} else
{if(cljs.core._EQ_.call(null,"-Infinity",G__21899))
{return Number.NEGATIVE_INFINITY;
} else
{if(cljs.core._EQ_.call(null,"NaN",G__21899))
{return Number.NaN;
} else
{if(cljs.core._EQ_.call(null,"/",G__21899))
{return new cljs.core.Symbol(null,"/","/",-1640531480,null);
} else
{if(cljs.core._EQ_.call(null,"false",G__21899))
{return false;
} else
{if(cljs.core._EQ_.call(null,"true",G__21899))
{return true;
} else
{if(cljs.core._EQ_.call(null,"nil",G__21899))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var p = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);if(!((p == null)))
{var sym = cljs.core.symbol.call(null,cljs.core._nth.call(null,p,0),cljs.core._nth.call(null,p,1));return cljs.core._with_meta.call(null,sym,cljs.tools.reader.loc_info.call(null,rdr,line,column));
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token: ",token);
}
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
/**
* Map from ns alias to ns, if non-nil, it will be used to resolve read-time
* ns aliases.
* 
* Defaults to nil
*/
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_ns = (function resolve_ns(sym){var or__19978__auto__ = cljs.core.get.call(null,cljs.tools.reader._STAR_alias_map_STAR_,sym);if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{var temp__4092__auto__ = cljs.tools.reader.find_ns.call(null,sym);if(cljs.core.truth_(temp__4092__auto__))
{var ns = temp__4092__auto__;return cljs.core.symbol.call(null,cljs.tools.reader.ns_name.call(null,ns));
} else
{return null;
}
}
});
cljs.tools.reader.read_keyword = (function read_keyword(reader,initch,opts,pending_forms){var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))
{var token = cljs.tools.reader.read_token.call(null,reader,ch);var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);if(!((s == null)))
{var ns = cljs.core._nth.call(null,s,0);var name = cljs.core._nth.call(null,s,1);if((":" === token.charAt(0)))
{if(!((ns == null)))
{var ns__$1 = cljs.tools.reader.resolve_ns.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,ns,1)));if(!((ns__$1 == null)))
{return cljs.core.keyword.call(null,[cljs.core.str(ns__$1)].join(''),name);
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else
{return cljs.core.keyword.call(null,[cljs.core.str(cljs.tools.reader._STAR_ns_STAR_)].join(''),cljs.core.subs.call(null,name,1));
}
} else
{return cljs.core.keyword.call(null,ns,name);
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :");
}
});
/**
* Returns a function which wraps a reader in a call to sym
*/
cljs.tools.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_,opts,pending_forms){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)),sym);
});
});
/**
* Read metadata and return the following object with the metadata applied
*/
cljs.tools.reader.read_meta = (function read_meta(rdr,_,opts,pending_forms){if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,rdr)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,rdr)))))
{return cljs.tools.reader.reader_types.log_source_STAR_.call(null,rdr,(function (){var vec__21906 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var line = cljs.core.nth.call(null,vec__21906,0,null);var column = cljs.core.nth.call(null,vec__21906,1,null);var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}
var o = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);if((function (){var G__21907 = o;if(G__21907)
{var bit__20621__auto__ = (G__21907.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__20621__auto__) || (G__21907.cljs$core$IMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var m__$1 = (cljs.core.truth_((function (){var and__19966__auto__ = line;if(cljs.core.truth_(and__19966__auto__))
{return cljs.core.seq_QMARK_.call(null,o);
} else
{return and__19966__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"column","column",3954034376),column):m);if((function (){var G__21908 = o;if(G__21908)
{var bit__20621__auto__ = (G__21908.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20621__auto__) || (G__21908.cljs$core$IWithMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else
{return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}));
} else
{var vec__21909 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var line = cljs.core.nth.call(null,vec__21909,0,null);var column = cljs.core.nth.call(null,vec__21909,1,null);var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}
var o = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);if((function (){var G__21910 = o;if(G__21910)
{var bit__20621__auto__ = (G__21910.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__20621__auto__) || (G__21910.cljs$core$IMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var m__$1 = (cljs.core.truth_((function (){var and__19966__auto__ = line;if(cljs.core.truth_(and__19966__auto__))
{return cljs.core.seq_QMARK_.call(null,o);
} else
{return and__19966__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"column","column",3954034376),column):m);if((function (){var G__21911 = o;if(G__21911)
{var bit__20621__auto__ = (G__21911.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20621__auto__) || (G__21911.cljs$core$IWithMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else
{return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}
});
cljs.tools.reader.read_set = (function read_set(rdr,_,opts,pending_forms){var vec__21914 = cljs.tools.reader.starting_line_col_info.call(null,rdr);var start_line = cljs.core.nth.call(null,vec__21914,0,null);var start_column = cljs.core.nth.call(null,vec__21914,1,null);var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - 1) | 0):null);var coll = cljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);var the_set = cljs.core.set.call(null,coll);var vec__21915 = cljs.tools.reader.ending_line_col_info.call(null,rdr);var end_line = cljs.core.nth.call(null,vec__21915,0,null);var end_column = cljs.core.nth.call(null,vec__21915,1,null);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set)))
{} else
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,cljs.tools.reader.duplicate_keys_error.call(null,"Set literal contains duplicate key",coll));
}
return cljs.core.with_meta.call(null,the_set,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4092__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var file = temp__4092__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),file], null);
} else
{return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"column","column",3954034376),start_column__$1,new cljs.core.Keyword(null,"end-line","end-line",2693041432),end_line,new cljs.core.Keyword(null,"end-column","end-column",3799845882),end_column], null)):null));
});
/**
* Read and discard the first object from rdr
*/
cljs.tools.reader.read_discard = (function read_discard(rdr,_,opts,pending_forms){var G__21917 = rdr;cljs.tools.reader.read_STAR_.call(null,G__21917,true,null,opts,pending_forms);
return G__21917;
});
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",1017020587),null,new cljs.core.Keyword(null,"none","none",1017291434),null], null), null);
cljs.tools.reader.has_feature_QMARK_ = (function has_feature_QMARK_(rdr,feature,opts){if((feature instanceof cljs.core.Keyword))
{return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",2558708147),feature)) || (cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"features","features",723244975)),feature));
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str("Feature should be a keyword: "),cljs.core.str(feature)].join(''));
}
});
cljs.tools.reader.check_eof_error = (function check_eof_error(form,rdr,first_line){if((form === cljs.tools.reader.READ_EOF))
{if((first_line < 0))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading, starting at line ",first_line);
}
} else
{return null;
}
});
cljs.tools.reader.check_reserved_features = (function check_reserved_features(rdr,form){if(cljs.core.truth_(cljs.core.get.call(null,cljs.tools.reader.RESERVED_FEATURES,form)))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str("Feature name "),cljs.core.str(form),cljs.core.str(" is reserved")].join(''));
} else
{return null;
}
});
cljs.tools.reader.check_invalid_read_cond = (function check_invalid_read_cond(form,rdr,first_line){if((form === cljs.tools.reader.READ_FINISHED))
{if((first_line < 0))
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"read-cond requires an even number of forms");
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str("read-cond starting on line "),cljs.core.str(first_line),cljs.core.str(" requires an even number of forms")].join(''));
}
} else
{return null;
}
});
/**
* Read next form and suppress. Return nil or READ_FINISHED.
*/
cljs.tools.reader.read_suppress = (function read_suppress(first_line,rdr,opts,pending_forms){var _STAR_suppress_read_STAR_21919 = cljs.tools.reader._STAR_suppress_read_STAR_;try{cljs.tools.reader._STAR_suppress_read_STAR_ = true;
var form = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);cljs.tools.reader.check_eof_error.call(null,form,rdr,first_line);
if((form === cljs.tools.reader.READ_FINISHED))
{return cljs.tools.reader.READ_FINISHED;
} else
{return null;
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_21919;
}});
if(typeof cljs.tools.reader.NO_MATCH !== 'undefined')
{} else
{cljs.tools.reader.NO_MATCH = (new Object());
}
/**
* Read next feature. If matched, read next form and return.
* Otherwise, read and skip next form, returning READ_FINISHED or nil.
*/
cljs.tools.reader.match_feature = (function match_feature(first_line,rdr,opts,pending_forms){var feature = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);cljs.tools.reader.check_eof_error.call(null,feature,rdr,first_line);
if(cljs.core._EQ_.call(null,feature,cljs.tools.reader.READ_FINISHED))
{return cljs.tools.reader.READ_FINISHED;
} else
{cljs.tools.reader.check_reserved_features.call(null,rdr,feature);
if(cljs.tools.reader.has_feature_QMARK_.call(null,rdr,feature,opts))
{var G__21921 = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);cljs.tools.reader.check_eof_error.call(null,G__21921,rdr,first_line);
cljs.tools.reader.check_invalid_read_cond.call(null,G__21921,rdr,first_line);
return G__21921;
} else
{var or__19978__auto__ = cljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{return cljs.tools.reader.NO_MATCH;
}
}
}
});
cljs.tools.reader.read_cond_delimited = (function read_cond_delimited(rdr,splicing,opts,pending_forms){var first_line = ((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.tools.reader.reader_types.get_line_number.call(null,rdr):-1);var result = (function (){var matched = cljs.tools.reader.NO_MATCH;var finished = null;while(true){
if((matched === cljs.tools.reader.NO_MATCH))
{var match = cljs.tools.reader.match_feature.call(null,first_line,rdr,opts,pending_forms);if((match === cljs.tools.reader.READ_FINISHED))
{return cljs.tools.reader.READ_FINISHED;
} else
{{
var G__21976 = match;
var G__21977 = null;
matched = G__21976;
finished = G__21977;
continue;
}
}
} else
{if(!((finished === cljs.tools.reader.READ_FINISHED)))
{{
var G__21978 = matched;
var G__21979 = cljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
matched = G__21978;
finished = G__21979;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return matched;
} else
{return null;
}
}
}
break;
}
})();if((result === cljs.tools.reader.READ_FINISHED))
{return rdr;
} else
{if(cljs.core.truth_(splicing))
{if((function (){var G__21923 = result;if(G__21923)
{var bit__20621__auto__ = (G__21923.cljs$lang$protocol_mask$partition0$ & 16777216);if((bit__20621__auto__) || (G__21923.cljs$core$ISequential$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{goog.array.insertArrayAt(pending_forms,cljs.core.to_array.call(null,result),0);
return rdr;
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Spliced form list in read-cond-splicing must implement java.util.List.");
}
} else
{return result;
}
}
});
cljs.tools.reader.read_cond = (function read_cond(rdr,_,opts,pending_forms){if(cljs.core.not.call(null,(function (){var and__19966__auto__ = opts;if(cljs.core.truth_(and__19966__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preserve","preserve",4032209342),null,new cljs.core.Keyword(null,"allow","allow",1106810555),null], null), null).call(null,new cljs.core.Keyword(null,"read-cond","read-cond",4148754539).cljs$core$IFn$_invoke$arity$1(opts));
} else
{return and__19966__auto__;
}
})()))
{throw cljs.core.ex_info.call(null,"Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"runtime-exception","runtime-exception",1448708108)], null));
} else
{}
var temp__4090__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);if(cljs.core.truth_(temp__4090__auto__))
{var ch = temp__4090__auto__;var splicing = cljs.core._EQ_.call(null,ch,"@");var ch__$1 = ((splicing)?cljs.tools.reader.reader_types.read_char.call(null,rdr):ch);if(splicing)
{if(cljs.core.truth_(cljs.tools.reader._STAR_read_delim_STAR_))
{} else
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,"cond-splice not in list");
}
} else
{}
var temp__4090__auto____$1 = ((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch__$1))?cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);if(cljs.core.truth_(temp__4090__auto____$1))
{var ch__$2 = temp__4090__auto____$1;if(cljs.core.not_EQ_.call(null,ch__$2,"("))
{throw cljs.core.ex_info.call(null,"read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"runtime-exception","runtime-exception",1448708108)], null));
} else
{var _STAR_suppress_read_STAR_21925 = cljs.tools.reader._STAR_suppress_read_STAR_;try{cljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__19978__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"preserve","preserve",4032209342),new cljs.core.Keyword(null,"read-cond","read-cond",4148754539).cljs$core$IFn$_invoke$arity$1(opts));
}
})();
if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_))
{return cljs.tools.reader.impl.utils.reader_conditional.call(null,cljs.tools.reader.read_list.call(null,rdr,ch__$2,opts,pending_forms),splicing);
} else
{return cljs.tools.reader.read_cond_delimited.call(null,rdr,splicing,opts,pending_forms);
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_21925;
}}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.arg_env = null;
/**
* Get a symbol for an anonymous ?argument?
*/
cljs.tools.reader.garg = (function garg(n){return cljs.core.symbol.call(null,[cljs.core.str((((-1 === n))?"rest":[cljs.core.str("p"),cljs.core.str(n)].join(''))),cljs.core.str("__"),cljs.core.str(cljs.tools.reader.impl.utils.next_id.call(null)),cljs.core.str("#")].join(''));
});
cljs.tools.reader.read_fn = (function read_fn(rdr,_,opts,pending_forms){if(cljs.core.truth_(cljs.tools.reader.arg_env))
{throw cljs.core.ex_info.call(null,"Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-state","illegal-state",686026476)], null));
} else
{}
var arg_env21928 = cljs.tools.reader.arg_env;try{cljs.tools.reader.arg_env = cljs.core.sorted_map.call(null);
var form = cljs.tools.reader.read_STAR_.call(null,(function (){var G__21929 = rdr;cljs.tools.reader.reader_types.unread.call(null,G__21929,"(");
return G__21929;
})(),true,null,opts,pending_forms);var rargs = cljs.core.rseq.call(null,cljs.tools.reader.arg_env);var args = ((rargs)?(function (){var higharg = cljs.core.key.call(null,cljs.core.first.call(null,rargs));var args = (function (){var i = 1;var args = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if((i > higharg))
{return cljs.core.persistent_BANG_.call(null,args);
} else
{{
var G__21980 = (i + 1);
var G__21981 = cljs.core.conj_BANG_.call(null,args,(function (){var or__19978__auto__ = cljs.core.get.call(null,cljs.tools.reader.arg_env,i);if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{return cljs.tools.reader.garg.call(null,i);
}
})());
i = G__21980;
args = G__21981;
continue;
}
}
break;
}
})();var args__$1 = (cljs.core.truth_(cljs.tools.reader.arg_env.call(null,-1))?cljs.core.conj.call(null,args,new cljs.core.Symbol(null,"&","&",-1640531489,null),cljs.tools.reader.arg_env.call(null,-1)):args);return args__$1;
})():cljs.core.PersistentVector.EMPTY);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),args),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null));
}finally {cljs.tools.reader.arg_env = arg_env21928;
}});
/**
* Registers an argument to the arg-env
*/
cljs.tools.reader.register_arg = (function register_arg(n){if(cljs.core.truth_(cljs.tools.reader.arg_env))
{var temp__4090__auto__ = cljs.tools.reader.arg_env.call(null,n);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return ret;
} else
{var g = cljs.tools.reader.garg.call(null,n);cljs.tools.reader.arg_env = cljs.core.assoc.call(null,cljs.tools.reader.arg_env,n,g);
return g;
}
} else
{throw cljs.core.ex_info.call(null,"Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-state","illegal-state",686026476)], null));
}
});
cljs.tools.reader.read_arg = (function read_arg(rdr,pct,opts,pending_forms){if((cljs.tools.reader.arg_env == null))
{return cljs.tools.reader.read_symbol.call(null,rdr,pct);
} else
{var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))
{return cljs.tools.reader.register_arg.call(null,1);
} else
{if(cljs.core._EQ_.call(null,ch,"&"))
{cljs.tools.reader.reader_types.read_char.call(null,rdr);
return cljs.tools.reader.register_arg.call(null,-1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var n = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);if(!(cljs.core.integer_QMARK_.call(null,n)))
{throw cljs.core.ex_info.call(null,"Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-state","illegal-state",686026476)], null));
} else
{return cljs.tools.reader.register_arg.call(null,n);
}
} else
{return null;
}
}
}
}
});
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = (function read_unquote(rdr,comma,opts,pending_forms){var temp__4090__auto__ = cljs.tools.reader.reader_types.peek_char.call(null,rdr);if(cljs.core.truth_(temp__4090__auto__))
{var ch = temp__4090__auto__;if(cljs.core._EQ_.call(null,"@",ch))
{return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-276696001,null)).call(null,(function (){var G__21931 = rdr;cljs.tools.reader.reader_types.read_char.call(null,G__21931);
return G__21931;
})(),"@",opts,pending_forms);
} else
{return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",686391551,null)).call(null,rdr,"~",opts,pending_forms);
}
} else
{return null;
}
});
cljs.tools.reader.unquote_splicing_QMARK_ = (function unquote_splicing_QMARK_(form){return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-276696001,null)));
});
cljs.tools.reader.unquote_QMARK_ = (function unquote_QMARK_(form){return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",686391551,null)));
});
/**
* Expand a list by resolving its syntax quotes and unquotes
*/
cljs.tools.reader.expand_list = (function expand_list(s){var s__$1 = cljs.core.seq.call(null,s);var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(s__$1)
{var item = cljs.core.first.call(null,s__$1);var ret = cljs.core.conj_BANG_.call(null,r,((cljs.tools.reader.unquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol("clojure.core","list","clojure.core/list",-606680616,null)):((cljs.tools.reader.unquote_splicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.tools.reader.syntax_quote_STAR_.call(null,item)),new cljs.core.Symbol("clojure.core","list","clojure.core/list",-606680616,null)):null))));{
var G__21982 = cljs.core.next.call(null,s__$1);
var G__21983 = ret;
s__$1 = G__21982;
r = G__21983;
continue;
}
} else
{return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,r));
}
break;
}
});
/**
* Flatten a map into a seq of alternate keys and values
*/
cljs.tools.reader.flatten_map = (function flatten_map(form){var s = cljs.core.seq.call(null,form);var key_vals = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(s)
{var e = cljs.core.first.call(null,s);{
var G__21984 = cljs.core.next.call(null,s);
var G__21985 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,key_vals,cljs.core.key.call(null,e)),cljs.core.val.call(null,e));
s = G__21984;
key_vals = G__21985;
continue;
}
} else
{return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,key_vals));
}
break;
}
});
cljs.tools.reader.register_gensym = (function register_gensym(sym){if(cljs.core.not.call(null,cljs.tools.reader.gensym_env))
{throw cljs.core.ex_info.call(null,"Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-state","illegal-state",686026476)], null));
} else
{}
var or__19978__auto__ = cljs.core.get.call(null,cljs.tools.reader.gensym_env,sym);if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{var gs = cljs.core.symbol.call(null,[cljs.core.str(cljs.core.subs.call(null,cljs.core.name.call(null,sym),0,(cljs.core.count.call(null,cljs.core.name.call(null,sym)) - 1))),cljs.core.str("__"),cljs.core.str(cljs.tools.reader.impl.utils.next_id.call(null)),cljs.core.str("__auto__")].join(''));cljs.tools.reader.gensym_env = cljs.core.assoc.call(null,cljs.tools.reader.gensym_env,sym,gs);
return gs;
}
});
cljs.tools.reader.add_meta = (function add_meta(form,ret){if((function (){var and__19966__auto__ = (function (){var G__21935 = form;if(G__21935)
{var bit__20621__auto__ = (G__21935.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20621__auto__) || (G__21935.cljs$core$IWithMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(and__19966__auto__)
{return cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.meta.call(null,form),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"column","column",3954034376),new cljs.core.Keyword(null,"end-line","end-line",2693041432),new cljs.core.Keyword(null,"end-column","end-column",3799845882),new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"source","source",4412365709)));
} else
{return and__19966__auto__;
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.tools.reader.syntax_quote_STAR_.call(null,cljs.core.meta.call(null,form))),ret),new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",1624229584,null));
} else
{return ret;
}
});
cljs.tools.reader.syntax_quote_coll = (function syntax_quote_coll(type,coll){var res = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-458022360,null),cljs.tools.reader.expand_list.call(null,coll))),new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",58729467,null));if(cljs.core.truth_(type))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,res),type),new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1592219542,null));
} else
{return res;
}
});
/**
* Decide which map type to use, array-map if less than 16 elements
*/
cljs.tools.reader.map_func = (function map_func(coll){if((cljs.core.count.call(null,coll) >= 16))
{return new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",1529837351,null);
} else
{return new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-109878500,null);
}
});
cljs.tools.reader.bool_QMARK_ = (function bool_QMARK_(x){return ((x instanceof Boolean)) || (x === true) || (x === false);
});
/**
* Resolve a symbol s into its fully qualified namespace version
*/
cljs.tools.reader.resolve_symbol = (function resolve_symbol(s){throw cljs.core.ex_info.call(null,"resolve-symbol is not implemented",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",1014018617),s], null));
});
cljs.tools.reader.syntax_quote_STAR_ = (function syntax_quote_STAR_(form){return cljs.tools.reader.add_meta.call(null,form,((cljs.core.special_symbol_QMARK_.call(null,form))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null)):(((form instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_((function (){var and__19966__auto__ = cljs.core.not.call(null,cljs.core.namespace.call(null,form));if(and__19966__auto__)
{return goog.string.endsWith(cljs.core.name.call(null,form),"#");
} else
{return and__19966__auto__;
}
})())?cljs.tools.reader.register_gensym.call(null,form):cljs.tools.reader.resolve_symbol.call(null,form))),new cljs.core.Symbol(null,"quote","quote",-1532577739,null)):((cljs.tools.reader.unquote_QMARK_.call(null,form))?cljs.core.second.call(null,form):((cljs.tools.reader.unquote_splicing_QMARK_.call(null,form))?(function(){throw cljs.core.ex_info.call(null,"unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"illegal-state","illegal-state",686026476)], null))})():((cljs.core.coll_QMARK_.call(null,form))?(((function (){var G__21937 = form;if(G__21937)
{var bit__20621__auto__ = (G__21937.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__20621__auto__) || (G__21937.cljs$core$IRecord$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?form:((cljs.core.map_QMARK_.call(null,form))?cljs.tools.reader.syntax_quote_coll.call(null,cljs.tools.reader.map_func.call(null,form),cljs.tools.reader.flatten_map.call(null,form)):((cljs.core.vector_QMARK_.call(null,form))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.tools.reader.syntax_quote_coll.call(null,null,form)),new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",1416532904,null)):((cljs.core.set_QMARK_.call(null,form))?cljs.tools.reader.syntax_quote_coll.call(null,new cljs.core.Symbol("cljs.core","hash-set","cljs.core/hash-set",1529650777,null),form):(((cljs.core.seq_QMARK_.call(null,form)) || (cljs.core.list_QMARK_.call(null,form)))?(function (){var seq = cljs.core.seq.call(null,form);if(seq)
{return cljs.tools.reader.syntax_quote_coll.call(null,null,seq);
} else
{return cljs.core.list(new cljs.core.Symbol("cljs.core","list","cljs.core/list",1404986534,null));
}
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function(){throw cljs.core.ex_info.call(null,"Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",3740225345)], null))})():null)))))):((((form instanceof cljs.core.Keyword)) || (typeof form === 'number') || (typeof form === 'string') || ((form == null)) || (cljs.tools.reader.bool_QMARK_.call(null,form)) || ((form instanceof RegExp)))?form:((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null)):null))))))));
});
cljs.tools.reader.read_syntax_quote = (function read_syntax_quote(rdr,backquote,opts,pending_forms){var gensym_env21939 = cljs.tools.reader.gensym_env;try{cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;
return cljs.tools.reader.syntax_quote_STAR_.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
}finally {cljs.tools.reader.gensym_env = gensym_env21939;
}});
cljs.tools.reader.macros = (function macros(ch){var G__21941 = ch;if(cljs.core._EQ_.call(null,"@",G__21941))
{return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",-564909588,null));
} else
{if(cljs.core._EQ_.call(null,"`",G__21941))
{return cljs.tools.reader.read_syntax_quote;
} else
{if(cljs.core._EQ_.call(null,"\"",G__21941))
{return cljs.tools.reader.read_string_STAR_;
} else
{if(cljs.core._EQ_.call(null,"#",G__21941))
{return cljs.tools.reader.read_dispatch;
} else
{if(cljs.core._EQ_.call(null,"%",G__21941))
{return cljs.tools.reader.read_arg;
} else
{if(cljs.core._EQ_.call(null,"'",G__21941))
{return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if(cljs.core._EQ_.call(null,"(",G__21941))
{return cljs.tools.reader.read_list;
} else
{if(cljs.core._EQ_.call(null,")",G__21941))
{return cljs.tools.reader.read_unmatched_delimiter;
} else
{if(cljs.core._EQ_.call(null,":",G__21941))
{return cljs.tools.reader.read_keyword;
} else
{if(cljs.core._EQ_.call(null,";",G__21941))
{return cljs.tools.reader.impl.commons.read_comment;
} else
{if(cljs.core._EQ_.call(null,"[",G__21941))
{return cljs.tools.reader.read_vector;
} else
{if(cljs.core._EQ_.call(null,"{",G__21941))
{return cljs.tools.reader.read_map;
} else
{if(cljs.core._EQ_.call(null,"\\",G__21941))
{return cljs.tools.reader.read_char_STAR_;
} else
{if(cljs.core._EQ_.call(null,"]",G__21941))
{return cljs.tools.reader.read_unmatched_delimiter;
} else
{if(cljs.core._EQ_.call(null,"}",G__21941))
{return cljs.tools.reader.read_unmatched_delimiter;
} else
{if(cljs.core._EQ_.call(null,"^",G__21941))
{return cljs.tools.reader.read_meta;
} else
{if(cljs.core._EQ_.call(null,"~",G__21941))
{return cljs.tools.reader.read_unquote;
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
cljs.tools.reader.dispatch_macros = (function dispatch_macros(ch){var G__21943 = ch;if(cljs.core._EQ_.call(null,"!",G__21943))
{return cljs.tools.reader.impl.commons.read_comment;
} else
{if(cljs.core._EQ_.call(null,"\"",G__21943))
{return cljs.tools.reader.read_regex;
} else
{if(cljs.core._EQ_.call(null,"'",G__21943))
{return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"var","var",-1640415008,null));
} else
{if(cljs.core._EQ_.call(null,"(",G__21943))
{return cljs.tools.reader.read_fn;
} else
{if(cljs.core._EQ_.call(null,"{",G__21943))
{return cljs.tools.reader.read_set;
} else
{if(cljs.core._EQ_.call(null,"<",G__21943))
{return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");
} else
{if(cljs.core._EQ_.call(null,"=",G__21943))
{return cljs.tools.reader.impl.commons.throwing_reader.call(null,"read-eval not supported");
} else
{if(cljs.core._EQ_.call(null,"^",G__21943))
{return cljs.tools.reader.read_meta;
} else
{if(cljs.core._EQ_.call(null,"?",G__21943))
{return cljs.tools.reader.read_cond;
} else
{if(cljs.core._EQ_.call(null,"_",G__21943))
{return cljs.tools.reader.read_discard;
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
});
cljs.tools.reader.read_tagged = (function read_tagged(rdr,initch,opts,pending_forms){var tag = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);if(!((tag instanceof cljs.core.Symbol)))
{cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Reader tag must be a symbol");
} else
{}
if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_))
{return cljs.tools.reader.tagged_literal.call(null,tag,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else
{var temp__4090__auto__ = (function (){var or__19978__auto__ = cljs.tools.reader._STAR_data_readers_STAR_.call(null,tag);if(cljs.core.truth_(or__19978__auto__))
{return or__19978__auto__;
} else
{return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var f = temp__4090__auto__;return f.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else
{var temp__4090__auto____$1 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;if(cljs.core.truth_(temp__4090__auto____$1))
{var f = temp__4090__auto____$1;return f.call(null,tag,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else
{return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No reader function for tag ",cljs.core.name.call(null,tag));
}
}
}
});
/**
* Map from reader tag symbols to data reader Vars.
* Reader tags without namespace qualifiers are reserved for Clojure.
* This light version of tools.reader has no implementation for default
* reader tags such as #inst and #uuid.
*/
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
* When no data reader is found for a tag and *default-data-reader-fn*
* is non-nil, it will be called with two arguments, the tag and the value.
* If *default-data-reader-fn* is nil (the default value), an exception
* will be thrown for the unknown tag.
*/
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
* Default map of data reader functions provided by Clojure.
* May be overridden by binding *data-readers*
*/
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = (function read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){while(true){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,reader)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,reader)))))
{return cljs.tools.reader.reader_types.log_source_STAR_.call(null,reader,(function (){while(true){
if(!(goog.array.isEmpty(pending_forms)))
{var form = (pending_forms[0]);goog.array.removeAt(pending_forms,0);
return form;
} else
{var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))
{{
continue;
}
} else
{if((ch == null))
{if(eof_error_QMARK_)
{return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if((ch === return_on))
{return cljs.tools.reader.READ_FINISHED;
} else
{if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch))
{return cljs.tools.reader.read_number.call(null,reader,ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.tools.reader.macros.call(null,ch);if(!((f == null)))
{var res = f.call(null,reader,ch,opts,pending_forms);if((res === reader))
{{
continue;
}
} else
{return res;
}
} else
{return cljs.tools.reader.read_symbol.call(null,reader,ch);
}
} else
{return null;
}
}
}
}
}
}
break;
}
}));
} else
{if(!(goog.array.isEmpty(pending_forms)))
{var form = (pending_forms[0]);goog.array.removeAt(pending_forms,0);
return form;
} else
{var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))
{{
continue;
}
} else
{if((ch == null))
{if(eof_error_QMARK_)
{return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if((ch === return_on))
{return cljs.tools.reader.READ_FINISHED;
} else
{if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch))
{return cljs.tools.reader.read_number.call(null,reader,ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.tools.reader.macros.call(null,ch);if(!((f == null)))
{var res = f.call(null,reader,ch,opts,pending_forms);if((res === reader))
{{
continue;
}
} else
{return res;
}
} else
{return cljs.tools.reader.read_symbol.call(null,reader,ch);
}
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
cljs.tools.reader.read_STAR_ = (function() {
var read_STAR_ = null;
var read_STAR___5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){return read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
});
var read_STAR___6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){try{return cljs.tools.reader.read_STAR__internal.call(null,reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}catch (e21945){if((e21945 instanceof Error))
{var e = e21945;if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e))
{var d = cljs.core.ex_data.call(null,e);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",2203264823),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(d)))
{throw e;
} else
{throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"reader-exception","reader-exception",2203264823)], null),d,((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",3954034376),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",1017047278),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else
{throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"reader-exception","reader-exception",2203264823)], null),((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",3954034376),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",1017047278),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21945;
} else
{return null;
}
}
}});
read_STAR_ = function(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
switch(arguments.length){
case 5:
return read_STAR___5.call(this,reader,eof_error_QMARK_,sentinel,return_on,opts);
case 6:
return read_STAR___6.call(this,reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read_STAR_.cljs$core$IFn$_invoke$arity$5 = read_STAR___5;
read_STAR_.cljs$core$IFn$_invoke$arity$6 = read_STAR___6;
return read_STAR_;
})()
;
/**
* Reads the first object from an IPushbackReader or a java.io.PushbackReader.
* Returns the object read. If EOF, throws if eof-error? is true.
* Otherwise returns sentinel. If no stream is providen, *in* will be used.
* 
* Opts is a persistent map with valid keys:
* :read-cond - :allow to process reader conditionals, or
* :preserve to keep all branches
* :features - persistent set of feature keywords for reader conditionals
* :eof - on eof, return value unless :eofthrow, then throw.
* if not specified, will throw
* 
* To read data structures only, use clojure.tools.reader.edn/read
* 
* Note that the function signature of clojure.tools.reader/read and
* clojure.tools.reader.edn/read is not the same for eof-handling
*/
cljs.tools.reader.read = (function() {
var read = null;
var read__1 = (function (reader){return read.call(null,reader,true,null);
});
var read__2 = (function (p__21946,reader){var map__21948 = p__21946;var map__21948__$1 = ((cljs.core.seq_QMARK_.call(null,map__21948))?cljs.core.apply.call(null,cljs.core.hash_map,map__21948):map__21948);var opts = map__21948__$1;var eof = cljs.core.get.call(null,map__21948__$1,new cljs.core.Keyword(null,"eof","eof",1014004846),new cljs.core.Keyword(null,"eofthrow","eofthrow",3703262940));return cljs.tools.reader.read_STAR_.call(null,reader,cljs.core._EQ_.call(null,eof,new cljs.core.Keyword(null,"eofthrow","eofthrow",3703262940)),eof,null,opts,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});
var read__3 = (function (reader,eof_error_QMARK_,sentinel){return cljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});
read = function(reader,eof_error_QMARK_,sentinel){
switch(arguments.length){
case 1:
return read__1.call(this,reader);
case 2:
return read__2.call(this,reader,eof_error_QMARK_);
case 3:
return read__3.call(this,reader,eof_error_QMARK_,sentinel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read.cljs$core$IFn$_invoke$arity$1 = read__1;
read.cljs$core$IFn$_invoke$arity$2 = read__2;
read.cljs$core$IFn$_invoke$arity$3 = read__3;
return read;
})()
;
/**
* Reads one object from the string s.
* Returns nil when s is nil or empty.
* 
* To read data structures only, use clojure.tools.reader.edn/read-string
* 
* Note that the function signature of clojure.tools.reader/read-string and
* clojure.tools.reader.edn/read-string is not the same for eof-handling
*/
cljs.tools.reader.read_string = (function() {
var read_string = null;
var read_string__1 = (function (s){return read_string.call(null,cljs.core.PersistentArrayMap.EMPTY,s);
});
var read_string__2 = (function (opts,s){if(cljs.core.truth_((function (){var and__19966__auto__ = s;if(cljs.core.truth_(and__19966__auto__))
{return !((s === ""));
} else
{return and__19966__auto__;
}
})()))
{return cljs.tools.reader.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else
{return null;
}
});
read_string = function(opts,s){
switch(arguments.length){
case 1:
return read_string__1.call(this,opts);
case 2:
return read_string__2.call(this,opts,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read_string.cljs$core$IFn$_invoke$arity$1 = read_string__1;
read_string.cljs$core$IFn$_invoke$arity$2 = read_string__2;
return read_string;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-cljs-playground')) {
goog.provide('lt.plugins.lt_cljs_playground');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('cljs.tools.reader');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('lt.objs.command');
lt.plugins.lt_cljs_playground.hello_panel = (function hello_panel(this$){var e__21401__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from lt-cljs-playground"], null));var seq__22827_22840 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__22828_22841 = null;var count__22829_22842 = 0;var i__22830_22843 = 0;while(true){
if((i__22830_22843 < count__22829_22842))
{var vec__22831_22844 = cljs.core._nth.call(null,chunk__22828_22841,i__22830_22843);var ev__21402__auto___22845 = cljs.core.nth.call(null,vec__22831_22844,0,null);var func__21403__auto___22846 = cljs.core.nth.call(null,vec__22831_22844,1,null);lt.util.dom.on.call(null,e__21401__auto__,ev__21402__auto___22845,func__21403__auto___22846);
{
var G__22847 = seq__22827_22840;
var G__22848 = chunk__22828_22841;
var G__22849 = count__22829_22842;
var G__22850 = (i__22830_22843 + 1);
seq__22827_22840 = G__22847;
chunk__22828_22841 = G__22848;
count__22829_22842 = G__22849;
i__22830_22843 = G__22850;
continue;
}
} else
{var temp__4092__auto___22851 = cljs.core.seq.call(null,seq__22827_22840);if(temp__4092__auto___22851)
{var seq__22827_22852__$1 = temp__4092__auto___22851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22827_22852__$1))
{var c__20726__auto___22853 = cljs.core.chunk_first.call(null,seq__22827_22852__$1);{
var G__22854 = cljs.core.chunk_rest.call(null,seq__22827_22852__$1);
var G__22855 = c__20726__auto___22853;
var G__22856 = cljs.core.count.call(null,c__20726__auto___22853);
var G__22857 = 0;
seq__22827_22840 = G__22854;
chunk__22828_22841 = G__22855;
count__22829_22842 = G__22856;
i__22830_22843 = G__22857;
continue;
}
} else
{var vec__22832_22858 = cljs.core.first.call(null,seq__22827_22852__$1);var ev__21402__auto___22859 = cljs.core.nth.call(null,vec__22832_22858,0,null);var func__21403__auto___22860 = cljs.core.nth.call(null,vec__22832_22858,1,null);lt.util.dom.on.call(null,e__21401__auto__,ev__21402__auto___22859,func__21403__auto___22860);
{
var G__22861 = cljs.core.next.call(null,seq__22827_22852__$1);
var G__22862 = null;
var G__22863 = 0;
var G__22864 = 0;
seq__22827_22840 = G__22861;
chunk__22828_22841 = G__22862;
count__22829_22842 = G__22863;
i__22830_22843 = G__22864;
continue;
}
}
} else
{}
}
break;
}
return e__21401__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-cljs-playground","lt-cljs-playground.hello","lt.plugins.lt-cljs-playground/lt-cljs-playground.hello",1450891227),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-cljs-playground.hello","lt-cljs-playground.hello",2891098311)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-cljs-playground","on-close-destroy","lt.plugins.lt-cljs-playground/on-close-destroy",3417265029)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-cljs-playground",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.lt_cljs_playground.hello_panel.call(null,this$);
}));
lt.plugins.lt_cljs_playground.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___22865 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___22865))
{var ts_22866 = temp__4092__auto___22865;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_22866))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_22866);
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20559__auto__){var self__ = this;
var this__20559__auto____$1 = this;var h__20389__auto__ = self__.__hash;if(!((h__20389__auto__ == null)))
{return h__20389__auto__;
} else
{var h__20389__auto____$1 = cljs.core.hash_imap.call(null,this__20559__auto____$1);self__.__hash = h__20389__auto____$1;
return h__20389__auto____$1;
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20564__auto__,k__20565__auto__){var self__ = this;
var this__20564__auto____$1 = this;return cljs.core._lookup.call(null,this__20564__auto____$1,k__20565__auto__,null);
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20566__auto__,k22834,else__20567__auto__){var self__ = this;
var this__20566__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k22834,new cljs.core.Keyword(null,"ed","ed",1013907473)))
{return self__.ed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k22834,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k22834,else__20567__auto__);
} else
{return null;
}
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20571__auto__,k__20572__auto__,G__22833){var self__ = this;
var this__20571__auto____$1 = this;var pred__22836 = cljs.core.keyword_identical_QMARK_;var expr__22837 = k__20572__auto__;if(cljs.core.truth_(pred__22836.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473),expr__22837)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(G__22833,self__.state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__22836.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__22837)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,G__22833,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20572__auto__,G__22833),null));
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20578__auto__,writer__20579__auto__,opts__20580__auto__){var self__ = this;
var this__20578__auto____$1 = this;var pr_pair__20581__auto__ = ((function (this__20578__auto____$1){
return (function (keyval__20582__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20579__auto__,cljs.core.pr_writer,""," ","",opts__20580__auto__,keyval__20582__auto__);
});})(this__20578__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20579__auto__,pr_pair__20581__auto__,"#lt.plugins.lt-cljs-playground.EditorPushbackReader{",", ","}",opts__20580__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ed","ed",1013907473),self__.ed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20569__auto__,entry__20570__auto__){var self__ = this;
var this__20569__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20570__auto__))
{return cljs.core._assoc.call(null,this__20569__auto____$1,cljs.core._nth.call(null,entry__20570__auto__,0),cljs.core._nth.call(null,entry__20570__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20569__auto____$1,entry__20570__auto__);
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))
{var popped = cljs.core.last.call(null,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.pop);
return popped;
} else
{var map__22839 = cljs.core.deref.call(null,self__.state);var map__22839__$1 = ((cljs.core.seq_QMARK_.call(null,map__22839))?cljs.core.apply.call(null,cljs.core.hash_map,map__22839):map__22839);var col = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"col","col",1014002930));var line = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"line","line",1017226086));var line_contents = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725));if((cljs.core.count.call(null,line_contents) <= col))
{var line_contents__$1 = lt.objs.editor.line.call(null,self__.ed,(line + 1));var line__$1 = (line + 1);while(true){
if((line_contents__$1 == null))
{cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"eof?","eof?",1017023029),true);
cljs.core.println.call(null,"THE END!",cljs.core.deref.call(null,self__.state));
return null;
} else
{if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line_contents__$1)))
{{
var G__22867 = lt.objs.editor.line.call(null,self__.ed,(line__$1 + 1));
var G__22868 = (line__$1 + 1);
line_contents__$1 = G__22867;
line__$1 = G__22868;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"line","line",1017226086),line__$1,new cljs.core.Keyword(null,"col","col",1014002930),1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),line_contents__$1);
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20576__auto__){var self__ = this;
var this__20576__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ed","ed",1013907473),self__.ed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null))], null),self__.__extmap));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20568__auto__){var self__ = this;
var this__20568__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20560__auto__,other__20561__auto__){var self__ = this;
var this__20560__auto____$1 = this;if(cljs.core.truth_((function (){var and__19966__auto__ = other__20561__auto__;if(cljs.core.truth_(and__19966__auto__))
{return ((this__20560__auto____$1.constructor === other__20561__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20560__auto____$1,other__20561__auto__));
} else
{return and__19966__auto__;
}
})()))
{return true;
} else
{return false;
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20563__auto__,G__22833){var self__ = this;
var this__20563__auto____$1 = this;return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,G__22833,self__.__extmap,self__.__hash));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20558__auto__){var self__ = this;
var this__20558__auto____$1 = this;return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20562__auto__){var self__ = this;
var this__20562__auto____$1 = this;return self__.__meta;
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20573__auto__,k__20574__auto__){var self__ = this;
var this__20573__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"ed","ed",1013907473),null], null), null),k__20574__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20573__auto____$1),self__.__meta),k__20574__auto__);
} else
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20574__auto__)),null));
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$type = true;
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$ctorPrSeq = (function (this__20598__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.lt-cljs-playground/EditorPushbackReader");
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.cljs$lang$ctorPrWriter = (function (this__20598__auto__,writer__20599__auto__){return cljs.core._write.call(null,writer__20599__auto__,"lt.plugins.lt-cljs-playground/EditorPushbackReader");
});
lt.plugins.lt_cljs_playground.__GT_EditorPushbackReader = (function __GT_EditorPushbackReader(ed,state){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,state));
});
lt.plugins.lt_cljs_playground.map__GT_EditorPushbackReader = (function map__GT_EditorPushbackReader(G__22835){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__22835),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__22835),null,cljs.core.dissoc.call(null,G__22835,new cljs.core.Keyword(null,"ed","ed",1013907473),new cljs.core.Keyword(null,"state","state",1123661827))));
});
lt.plugins.lt_cljs_playground.default_reader_state = (function default_reader_state(ed,start_line,start_col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"col","col",1014002930),start_col,new cljs.core.Keyword(null,"buffer","buffer",3930752946),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),lt.objs.editor.line.call(null,ed,start_line)], null);
});
lt.plugins.lt_cljs_playground.editor_pushback_reader = (function editor_pushback_reader(ed){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,0,0))));
});
lt.plugins.lt_cljs_playground.read_all_forms_in_editor = (function read_all_forms_in_editor(ed){var forms = cljs.core.PersistentVector.EMPTY;var r = lt.plugins.lt_cljs_playground.editor_pushback_reader.call(null,ed);while(true){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"eof?","eof?",1017023029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r)))))
{var form = cljs.reader.read.call(null,r,false,new cljs.core.Keyword(null,"end","end",1014004813),true);var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r));{
var G__22869 = cljs.core.conj.call(null,forms,form);
var G__22870 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(state))));
forms = G__22869;
r = G__22870;
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