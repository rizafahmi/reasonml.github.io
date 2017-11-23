webpackJsonp([325],{"./node_modules/json-loader/index.js!./.cache/json/api-ast-helper-exp-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Ast_helper.Exp.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Ast_helper.Pat.html" title="Ast_helper.Pat">Previous</a>\n&#xA0;<a class="up" href="Ast_helper.html" title="Ast_helper">Up</a>\n&#xA0;<a class="post" href="Ast_helper.Val.html" title="Ast_helper.Val">Next</a>\n</div>\n<h1>Module <a href="type_Ast_helper.Exp.html">Ast_helper.Exp</a></h1>\n\n<pre><span class="keyword">module</span> Exp: sig .. end</pre><div class="info module top">\nExpressions<br>\n</div>\n<hr width="100%">\n\n<pre id="VALmk"><span class="keyword">let</span> mk:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.expression_desc) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALattr"><span class="keyword">let</span> attr: (Parsetree.expression, Parsetree.attribute) =&gt; Parsetree.expression;\n</pre>\n<pre id="VALident"><span class="keyword">let</span> ident:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Ast_helper.lid) =&gt; Parsetree.expression;\n</pre>\n<pre id="VALconstant"><span class="keyword">let</span> constant:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Asttypes.constant) =&gt; Parsetree.expression;\n</pre>\n<pre id="VALlet_"><span class="keyword">let</span> let_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Asttypes.rec_flag,\n    list(Parsetree.value_binding),\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALfun_"><span class="keyword">let</span> fun_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Asttypes.label,\n    option(Parsetree.expression),\n    Parsetree.pattern,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALfunction_"><span class="keyword">let</span> function_:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, list(Parsetree.case)) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALapply"><span class="keyword">let</span> apply:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    list((Asttypes.label, Parsetree.expression))\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALmatch_"><span class="keyword">let</span> match:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    list(Parsetree.case)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALtry_"><span class="keyword">let</span> try_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    list(Parsetree.case)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALtuple"><span class="keyword">let</span> tuple:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, list(Parsetree.expression)) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALconstruct"><span class="keyword">let</span> construct:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Ast_helper.lid,\n    option(Parsetree.expression)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALvariant"><span class="keyword">let</span> variant:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Asttypes.label,\n    option(Parsetree.expression)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALrecord"><span class="keyword">let</span> record:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    list((Ast_helper.lid, Parsetree.expression)),\n    option(Parsetree.expression)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALfield"><span class="keyword">let</span> field:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.expression, Ast_helper.lid) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALsetfield"><span class="keyword">let</span> setfield:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    Ast_helper.lid,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALarray"><span class="keyword">let</span> array:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, list(Parsetree.expression)) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALifthenelse"><span class="keyword">let</span> ifthenelse:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    Parsetree.expression,\n    option(Parsetree.expression)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALsequence"><span class="keyword">let</span> sequence:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALwhile_"><span class="keyword">let</span> while_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALfor_"><span class="keyword">let</span> for_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.pattern,\n    Parsetree.expression,\n    Parsetree.expression,\n    Asttypes.direction_flag,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALcoerce"><span class="keyword">let</span> coerce:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    option(Parsetree.core_type),\n    Parsetree.core_type\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALconstraint_"><span class="keyword">let</span> constraint_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    Parsetree.core_type\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALsend"><span class="keyword">let</span> send:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.expression, string) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALnew_"><span class="keyword">let</span> new_:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Ast_helper.lid) =&gt; Parsetree.expression;\n</pre>\n<pre id="VALsetinstvar"><span class="keyword">let</span> setinstvar:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Ast_helper.str, Parsetree.expression) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALoverride"><span class="keyword">let</span> override:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    list((Ast_helper.str, Parsetree.expression))\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALletmodule"><span class="keyword">let</span> letmodule:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Ast_helper.str,\n    Parsetree.module_expr,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALassert_"><span class="keyword">let</span> assert_:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.expression) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALlazy_"><span class="keyword">let</span> lazy_:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.expression) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALpoly"><span class="keyword">let</span> poly:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Parsetree.expression,\n    option(Parsetree.core_type)\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALobject_"><span class="keyword">let</span> object_:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.class_structure) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALnewtype"><span class="keyword">let</span> newtype:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, string, Parsetree.expression) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALpack"><span class="keyword">let</span> pack:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.module_expr) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALopen_"><span class="keyword">let</span> open_:\n  (\n    ~loc: Ast_helper.loc=?,\n    ~attrs: Ast_helper.attrs=?,\n    Asttypes.override_flag,\n    Ast_helper.lid,\n    Parsetree.expression\n  ) =&gt;\n  Parsetree.expression;\n</pre>\n<pre id="VALextension"><span class="keyword">let</span> extension:\n  (~loc: Ast_helper.loc=?, ~attrs: Ast_helper.attrs=?, Parsetree.extension) =&gt; Parsetree.expression;\n</pre>\n<pre id="VALcase"><span class="keyword">let</span> case:\n  (Parsetree.pattern, ~guard: Parsetree.expression=?, Parsetree.expression) =&gt; Parsetree.case;\n</pre></div>'}}},pathContext:{relativePath:"api/Ast_helper.Exp.html"}}}});
//# sourceMappingURL=path---api-ast-helper-exp-html-0db8d80eb64db2a0fddb.js.map