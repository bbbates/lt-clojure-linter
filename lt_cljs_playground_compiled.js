if(!lt.util.load.provided_QMARK_('cljs.extended.reader')) {
goog.provide('cljs.extended.reader');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string');
cljs.extended.reader.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"try*","try*",-1636962424,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"&","&",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null], null), null);
cljs.extended.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.extended.reader.Reader = (function (){var obj22323 = {};return obj22323;
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
cljs.extended.reader.IPushbackReader = (function (){var obj22325 = {};return obj22325;
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
cljs.extended.reader.IndexingReader = (function (){var obj22327 = {};return obj22327;
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
var reader_error__delegate = function (rdr,msg){var error_msg = cljs.core.apply.call(null,cljs.core.str,msg);throw (new Error([cljs.core.str(error_msg),cljs.core.str((((function (){var G__22329 = rdr;if(G__22329)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22329.cljs$extended$reader$IndexingReader$;
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
reader_error.cljs$lang$applyTo = (function (arglist__22407){
var rdr = cljs.core.first(arglist__22407);
var msg = cljs.core.rest(arglist__22407);
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
var G__22408 = cljs.extended.reader.read_char.call(null,rdr);
ch = G__22408;
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
var G__22409 = (function (){sb.append(ch);
return sb;
})();
var G__22410 = cljs.extended.reader.read_char.call(null,rdr);
sb = G__22409;
ch = G__22410;
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
var make_unicode_char__delegate = function (code_str,p__22330){var vec__22332 = p__22330;var base = cljs.core.nth.call(null,vec__22332,0,null);var base__$1 = (function (){var or__19803__auto__ = base;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return 16;
}
})();var code = parseInt(code_str,base__$1);return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__22330 = null;if (arguments.length > 1) {
  p__22330 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_unicode_char__delegate.call(this,code_str,p__22330);};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__22411){
var code_str = cljs.core.first(arglist__22411);
var p__22330 = cljs.core.rest(arglist__22411);
return make_unicode_char__delegate(code_str,p__22330);
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
var G__22412 = cljs.extended.reader.read_char.call(null,rdr);
ch = G__22412;
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
var G__22413 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__22413;
continue;
}
} else
{cljs.extended.reader.unread.call(null,rdr,ch);
var o = cljs.extended.reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__22414 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__22414;
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
cljs.extended.reader.maybe_get_pos = (function maybe_get_pos(rdr){if((function (){var G__22334 = rdr;if(G__22334)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22334.cljs$extended$reader$IndexingReader$;
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
cljs.extended.reader.read_list = (function read_list(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__22336 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,")",rdr,true);
});})(pos))
,"(");var the_list = cljs.core.nth.call(null,vec__22336,0,null);var source = cljs.core.nth.call(null,vec__22336,1,null);return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.list,the_list),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_comment = cljs.extended.reader.skip_line;
cljs.extended.reader.read_vector = (function read_vector(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__22338 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"]",rdr,true);
});})(pos))
,"[");var the_vec = cljs.core.nth.call(null,vec__22338,0,null);var source = cljs.core.nth.call(null,vec__22338,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_vec),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_map = (function read_map(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__22340 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"{");var l = cljs.core.nth.call(null,vec__22340,0,null);var source = cljs.core.nth.call(null,vec__22340,1,null);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
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
var G__22415 = (function (){buffer.append(ch);
return buffer;
})();
var G__22416 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__22415;
ch = G__22416;
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
var G__22417 = (function (){buffer.append(cljs.extended.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__22418 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__22417;
ch = G__22418;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__22419 = (function (){buffer.append(ch);
return buffer;
})();
var G__22420 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__22419;
ch = G__22420;
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
cljs.extended.reader.read_meta = (function read_meta(rdr,_){var vec__22344 = (((function (){var G__22345 = rdr;if(G__22345)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__22345.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.extended.reader.get_line_number.call(null,rdr),(cljs.extended.reader.get_column_number.call(null,rdr) - 1)], null):null);var line = cljs.core.nth.call(null,vec__22344,0,null);var column = cljs.core.nth.call(null,vec__22344,1,null);var m = cljs.extended.reader.desugar_meta.call(null,cljs.extended.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.extended.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.extended.reader.read.call(null,rdr,true,null,true);if((function (){var G__22346 = o;if(G__22346)
{var bit__20446__auto__ = (G__22346.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__20446__auto__) || (G__22346.cljs$core$IWithMeta$))
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
cljs.extended.reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){var and__19791__auto__ = (function (){var G__22350 = form;if(G__22350)
{var bit__20446__auto__ = (G__22350.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__22350.cljs$core$ISeq$))
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
cljs.extended.reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){var and__19791__auto__ = (function (){var G__22354 = form;if(G__22354)
{var bit__20446__auto__ = (G__22354.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__22354.cljs$core$ISeq$))
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
cljs.extended.reader.sqExpandList = (function sqExpandList(sq){return cljs.core.doall.call(null,(function (){var iter__20520__auto__ = (function iter__22359(s__22360){return (new cljs.core.LazySeq(null,(function (){var s__22360__$1 = s__22360;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22360__$1);if(temp__4092__auto__)
{var s__22360__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22360__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22360__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22362 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22361 = 0;while(true){
if((i__22361 < size__20519__auto__))
{var item = cljs.core._nth.call(null,c__20518__auto__,i__22361);cljs.core.chunk_append.call(null,b__22362,((cljs.extended.reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))));
{
var G__22421 = (i__22361 + 1);
i__22361 = G__22421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22362),iter__22359.call(null,cljs.core.chunk_rest.call(null,s__22360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22362),null);
}
} else
{var item = cljs.core.first.call(null,s__22360__$2);return cljs.core.cons.call(null,((cljs.extended.reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))),iter__22359.call(null,cljs.core.rest.call(null,s__22360__$2)));
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
{if((function (){var G__22371 = form;if(G__22371)
{var bit__20446__auto__ = (G__22371.cljs$lang$protocol_mask$partition0$ & 8);if((bit__20446__auto__) || (G__22371.cljs$core$ICollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{if((function (){var G__22372 = form;if(G__22372)
{var bit__20446__auto__ = (G__22372.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__20446__auto__) || (G__22372.cljs$core$IRecord$))
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
{if((function (){var G__22373 = form;if(G__22373)
{var bit__20446__auto__ = (G__22373.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__20446__auto__) || (G__22373.cljs$core$IMap$))
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
{if((function (){var G__22374 = form;if(G__22374)
{var bit__20446__auto__ = (G__22374.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__20446__auto__) || (G__22374.cljs$core$IVector$))
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
{if((function (){var G__22375 = form;if(G__22375)
{var bit__20446__auto__ = (G__22375.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__20446__auto__) || (G__22375.cljs$core$ISet$))
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
{if((function (){var or__19803__auto__ = (function (){var G__22377 = form;if(G__22377)
{var bit__20446__auto__ = (G__22377.cljs$lang$protocol_mask$partition0$ & 64);if((bit__20446__auto__) || (G__22377.cljs$core$ISeq$))
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
{var G__22378 = form;if(G__22378)
{var bit__20446__auto__ = (G__22378.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__20446__auto__) || (G__22378.cljs$core$IList$))
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
cljs.extended.reader.read_syntax_quote = (function read_syntax_quote(rdr,_){var _STAR_gensym_env_STAR_22380 = cljs.extended.reader._STAR_gensym_env_STAR_;try{cljs.extended.reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var form = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.extended.reader.syntaxQuote.call(null,form);
}finally {cljs.extended.reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_22380;
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
var _STAR_arg_env_STAR_22387 = cljs.extended.reader._STAR_arg_env_STAR_;try{cljs.extended.reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
cljs.extended.reader.unread.call(null,rdr,"(");
var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__22388 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos,_STAR_arg_env_STAR_22387){
return (function (){return cljs.extended.reader.read.call(null,rdr,true,null,true);
});})(pos,_STAR_arg_env_STAR_22387))
,"#");var form = cljs.core.nth.call(null,vec__22388,0,null);var source = cljs.core.nth.call(null,vec__22388,1,null);var argsyms = cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_);var rargs = cljs.core.rseq.call(null,argsyms);var highpair = cljs.core.first.call(null,rargs);var higharg = (cljs.core.truth_(highpair)?cljs.core.key.call(null,highpair):0);var args = (((higharg > 0))?cljs.core.doall.call(null,(function (){var iter__20520__auto__ = ((function (pos,vec__22388,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_22387){
return (function iter__22389(s__22390){return (new cljs.core.LazySeq(null,((function (pos,vec__22388,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_22387){
return (function (){var s__22390__$1 = s__22390;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22390__$1);if(temp__4092__auto__)
{var s__22390__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22390__$2))
{var c__20518__auto__ = cljs.core.chunk_first.call(null,s__22390__$2);var size__20519__auto__ = cljs.core.count.call(null,c__20518__auto__);var b__22392 = cljs.core.chunk_buffer.call(null,size__20519__auto__);if((function (){var i__22391 = 0;while(true){
if((i__22391 < size__20519__auto__))
{var i = cljs.core._nth.call(null,c__20518__auto__,i__22391);cljs.core.chunk_append.call(null,b__22392,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended.reader.garg.call(null,i);
}
})());
{
var G__22422 = (i__22391 + 1);
i__22391 = G__22422;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22392),iter__22389.call(null,cljs.core.chunk_rest.call(null,s__22390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22392),null);
}
} else
{var i = cljs.core.first.call(null,s__22390__$2);return cljs.core.cons.call(null,(function (){var or__19803__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.extended.reader.garg.call(null,i);
}
})(),iter__22389.call(null,cljs.core.rest.call(null,s__22390__$2)));
}
} else
{return null;
}
break;
}
});})(pos,vec__22388,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_22387))
,null,null));
});})(pos,vec__22388,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_22387))
;return iter__20520__auto__.call(null,cljs.core.range.call(null,1,(1 + higharg)));
})()):rargs);var restsym = cljs.core.get.call(null,argsyms,-1);var args__$1 = (cljs.core.truth_(restsym)?cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-1640531489,null),restsym], null)):args);return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),cljs.core.vec.call(null,args__$1)),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
}finally {cljs.extended.reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_22387;
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
cljs.extended.reader.read_set = (function read_set(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__22394 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"#{");var the_set = cljs.core.nth.call(null,vec__22394,0,null);var source = cljs.core.nth.call(null,vec__22394,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_set),cljs.extended.reader.prep_meta.call(null,rdr,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",3954034376)], null),cljs.core.dec),source));
});
cljs.extended.reader.read_regex = (function read_regex(reader){var buffer = "";var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__22423 = [cljs.core.str(buffer),cljs.core.str(ch),cljs.core.str(cljs.extended.reader.read_char.call(null,reader))].join('');
var G__22424 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__22423;
ch = G__22424;
continue;
}
} else
{if(("\"" === ch))
{return cljs.core.re_pattern.call(null,buffer);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__22425 = [cljs.core.str(buffer),cljs.core.str(ch)].join('');
var G__22426 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__22425;
ch = G__22426;
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
var G__22427 = reader;
var G__22428 = eof_is_error;
var G__22429 = sentinel;
var G__22430 = is_recursive;
reader = G__22427;
eof_is_error = G__22428;
sentinel = G__22429;
is_recursive = G__22430;
continue;
}
} else
{if(cljs.extended.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__22431 = cljs.extended.reader.read_comment.call(null,reader,ch);
var G__22432 = eof_is_error;
var G__22433 = sentinel;
var G__22434 = is_recursive;
reader = G__22431;
eof_is_error = G__22432;
sentinel = G__22433;
is_recursive = G__22434;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.extended.reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.extended.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.extended.reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.extended.reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__22435 = reader;
var G__22436 = eof_is_error;
var G__22437 = sentinel;
var G__22438 = is_recursive;
reader = G__22435;
eof_is_error = G__22436;
sentinel = G__22437;
is_recursive = G__22438;
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
var G__22439 = b.append("0");
b = G__22439;
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
{var vec__22399 = temp__4092__auto__;var vec__22400 = cljs.core.nth.call(null,vec__22399,0,null);var _ = cljs.core.nth.call(null,vec__22400,0,null);var years = cljs.core.nth.call(null,vec__22400,1,null);var months = cljs.core.nth.call(null,vec__22400,2,null);var days = cljs.core.nth.call(null,vec__22400,3,null);var hours = cljs.core.nth.call(null,vec__22400,4,null);var minutes = cljs.core.nth.call(null,vec__22400,5,null);var seconds = cljs.core.nth.call(null,vec__22400,6,null);var milliseconds = cljs.core.nth.call(null,vec__22400,7,null);var vec__22401 = cljs.core.nth.call(null,vec__22399,1,null);var ___$1 = cljs.core.nth.call(null,vec__22401,0,null);var ___$2 = cljs.core.nth.call(null,vec__22401,1,null);var ___$3 = cljs.core.nth.call(null,vec__22401,2,null);var V = vec__22399;var vec__22402 = cljs.core.map.call(null,((function (vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (v){return cljs.core.map.call(null,((function (vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__22398_SHARP_){return parseInt(p1__22398_SHARP_,10);
});})(vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,v);
});})(vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,cljs.core.map.call(null,((function (vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__22396_SHARP_,p2__22395_SHARP_){return cljs.core.update_in.call(null,p2__22395_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),p1__22396_SHARP_);
});})(vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly.call(null,null),((function (vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__22397_SHARP_){if(cljs.core._EQ_.call(null,p1__22397_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
});})(vec__22399,vec__22400,_,years,months,days,hours,minutes,seconds,milliseconds,vec__22401,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
], null),V));var vec__22403 = cljs.core.nth.call(null,vec__22402,0,null);var ___$4 = cljs.core.nth.call(null,vec__22403,0,null);var y = cljs.core.nth.call(null,vec__22403,1,null);var mo = cljs.core.nth.call(null,vec__22403,2,null);var d = cljs.core.nth.call(null,vec__22403,3,null);var h = cljs.core.nth.call(null,vec__22403,4,null);var m = cljs.core.nth.call(null,vec__22403,5,null);var s = cljs.core.nth.call(null,vec__22403,6,null);var ms = cljs.core.nth.call(null,vec__22403,7,null);var vec__22404 = cljs.core.nth.call(null,vec__22402,1,null);var offset_sign = cljs.core.nth.call(null,vec__22404,0,null);var offset_hours = cljs.core.nth.call(null,vec__22404,1,null);var offset_minutes = cljs.core.nth.call(null,vec__22404,2,null);var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,years))?1970:y),((cljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days))?1:check.call(null,1,d,cljs.extended.reader.days_in_month.call(null,mo,cljs.extended.reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds))?0:check.call(null,0,s,((cljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], null);
} else
{return null;
}
});
;})(timestamp,check))
})();
cljs.extended.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.extended.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__22406 = temp__4090__auto__;var years = cljs.core.nth.call(null,vec__22406,0,null);var months = cljs.core.nth.call(null,vec__22406,1,null);var days = cljs.core.nth.call(null,vec__22406,2,null);var hours = cljs.core.nth.call(null,vec__22406,3,null);var minutes = cljs.core.nth.call(null,vec__22406,4,null);var seconds = cljs.core.nth.call(null,vec__22406,5,null);var ms = cljs.core.nth.call(null,vec__22406,6,null);var offset = cljs.core.nth.call(null,vec__22406,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
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
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-cljs-playground')) {
goog.provide('lt.plugins.lt_cljs_playground');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('cljs.extended.reader');
goog.require('cljs.extended.reader');
goog.require('lt.objs.command');
/**
* Takes the reader state and editor, and returns the next char and new state
* of the reader
*/
lt.plugins.lt_cljs_playground.next_char_from_reader = (function next_char_from_reader(ed,p__21743){var map__21745 = p__21743;var map__21745__$1 = ((cljs.core.seq_QMARK_.call(null,map__21745))?cljs.core.apply.call(null,cljs.core.hash_map,map__21745):map__21745);var state = map__21745__$1;var buffer = cljs.core.get.call(null,map__21745__$1,new cljs.core.Keyword(null,"buffer","buffer",3930752946));var col = cljs.core.get.call(null,map__21745__$1,new cljs.core.Keyword(null,"col","col",1014002930));var line = cljs.core.get.call(null,map__21745__$1,new cljs.core.Keyword(null,"line","line",1017226086));var line_contents = cljs.core.get.call(null,map__21745__$1,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725));if(cljs.core.seq.call(null,buffer))
{var popped = cljs.core.last.call(null,buffer);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [popped,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.pop)], null);
} else
{if((cljs.core.count.call(null,line_contents) < col))
{var line_contents__$1 = lt.objs.editor.line.call(null,ed,(line + 1));var line__$1 = (line + 1);while(true){
if((line_contents__$1 == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"eof?","eof?",1017023029),true)], null);
} else
{if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line_contents__$1)))
{{
var G__21754 = lt.objs.editor.line.call(null,ed,(line__$1 + 1));
var G__21755 = (line__$1 + 1);
line_contents__$1 = G__21754;
line__$1 = G__21755;
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k21747,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21747,new cljs.core.Keyword(null,"ed","ed",1013907473)))
{return self__.ed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21747,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21747,else__20392__auto__);
} else
{return null;
}
}
}
});
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__21746){var self__ = this;
var this__20396__auto____$1 = this;var pred__21749 = cljs.core.keyword_identical_QMARK_;var expr__21750 = k__20397__auto__;if(cljs.core.truth_(pred__21749.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473),expr__21750)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(G__21746,self__.state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21749.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__21750)))
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,G__21746,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__21746),null));
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
var ___$1 = this;var vec__21752 = lt.plugins.lt_cljs_playground.next_char_from_reader.call(null,self__.ed,cljs.core.deref.call(null,self__.state));var next_char = cljs.core.nth.call(null,vec__21752,0,null);var new_state = cljs.core.nth.call(null,vec__21752,1,null);if((next_char == null))
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
lt.plugins.lt_cljs_playground.EditorPushbackReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__21746){var self__ = this;
var this__20388__auto____$1 = this;return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(self__.ed,self__.state,G__21746,self__.__extmap,self__.__hash));
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
lt.plugins.lt_cljs_playground.map__GT_EditorPushbackReader = (function map__GT_EditorPushbackReader(G__21748){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(G__21748),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__21748),null,cljs.core.dissoc.call(null,G__21748,new cljs.core.Keyword(null,"ed","ed",1013907473),new cljs.core.Keyword(null,"state","state",1123661827))));
});
lt.plugins.lt_cljs_playground.default_reader_state = (function default_reader_state(ed,start_line,start_col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),start_line,new cljs.core.Keyword(null,"col","col",1014002930),start_col,new cljs.core.Keyword(null,"buffer","buffer",3930752946),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line-contents","line-contents",1292358725),lt.objs.editor.line.call(null,ed,start_line)], null);
});
lt.plugins.lt_cljs_playground.editor_pushback_reader = (function editor_pushback_reader(ed){return (new lt.plugins.lt_cljs_playground.EditorPushbackReader(ed,cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,0,0))));
});
lt.plugins.lt_cljs_playground.read_all_forms_in_editor = (function read_all_forms_in_editor(ed){var forms = cljs.core.PersistentVector.EMPTY;var r = lt.plugins.lt_cljs_playground.editor_pushback_reader.call(null,ed);while(true){
if(cljs.core.not.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"eof?","eof?",1017023029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r)));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.last.call(null,forms));
}
})()))
{var form = cljs.extended.reader.read.call(null,r,false,new cljs.core.Keyword(null,"end","end",1014004813));var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(r));{
var G__21756 = cljs.core.conj.call(null,forms,form);
var G__21757 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,lt.plugins.lt_cljs_playground.default_reader_state.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(state))));
forms = G__21756;
r = G__21757;
continue;
}
} else
{return cljs.core.remove.call(null,((function (forms,r){
return (function (p1__21753_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),p1__21753_SHARP_);
});})(forms,r))
,forms);
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