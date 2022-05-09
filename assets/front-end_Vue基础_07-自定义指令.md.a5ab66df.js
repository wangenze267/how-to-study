import{_ as n,c as s,o as a,a as p}from"./app.821c74b9.js";const _='{"title":"\u81EA\u5B9A\u4E49\u6307\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u6307\u4EE4","slug":"\u81EA\u5B9A\u4E49\u6307\u4EE4"}],"relativePath":"front-end/Vue\u57FA\u7840/07-\u81EA\u5B9A\u4E49\u6307\u4EE4.md"}',t={},o=p(`<h2 id="\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1">\u81EA\u5B9A\u4E49\u6307\u4EE4 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a></h2><ol><li><p>\u4EC0\u4E48\u662F\u81EA\u5B9A\u4E49\u6307\u4EE4</p></li><li><p>\u5206\u7C7B\uFF1A</p><ul><li><p>\u79C1\u6709\u81EA\u5B9A\u4E49\u6307\u4EE4</p><p>\u5728\u6BCF\u4E2A\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u5728directives\u8282\u70B9\u4E0B\u58F0\u660E\u79C1\u6709\u81EA\u5B9A\u4E49\u6307\u4EE4</p><div class="language-js"><pre><code><span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u7ED1\u5B9A\u5230\u7684HTML\u5143\u7D20\u8BBE\u7F6E\u7EA2\u8272\u7684\u6587\u5B57</span>
        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// el \u662F\u7ED1\u5B9A\u4E86\u6B64\u6307\u4EE4\u7684\uFF0C\u539F\u751F\u7684DOM\u5BF9\u8C61</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528binding.value\u6765\u5C06\u6570\u636E\u4F20\u8FDBbind</p><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&quot;blue&quot;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u7ED1\u5B9A\u5230\u7684HTML\u5143\u7D20\u8BBE\u7F6E\u7EA2\u8272\u7684\u6587\u5B57</span>
        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// el \u662F\u7ED1\u5B9A\u4E86\u6B64\u6307\u4EE4\u7684\uFF0C\u539F\u751F\u7684DOM\u5BF9\u8C61</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>binding<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u4F7F\u7528binding\u4F20\u503C
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-color</span><span class="token punctuation">&gt;</span></span>
    \u9ED8\u8BA4\u7684\u81EA\u5B9A\u4E49\u6307\u4EE4
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>update\u51FD\u6570</p><p>\u7531\u4E8E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u6267\u884C\u65F6\uFF0C\u53EA\u4F1A\u5728\u4F7F\u7528\u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u6240\u6709\u5982\u679C\u6211\u4EEC\u6267\u884C\u67D0\u4E2A\u4E8B\u4EF6\u6539\u53D8\u6570\u636E\uFF0C\u4E14\u60F3\u6E32\u67D3\u4E0A\u53BB\u5219\u6211\u4EEC\u4F1A\u7528\u5230update</p><div class="language-js"><pre><code><span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u7ED1\u5B9A\u5230\u7684HTML\u5143\u7D20\u8BBE\u7F6E\u7EA2\u8272\u7684\u6587\u5B57</span>
        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// el \u662F\u7ED1\u5B9A\u4E86\u6B64\u6307\u4EE4\u7684\uFF0C\u539F\u751F\u7684DOM\u5BF9\u8C61</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>binding<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u5728DOM\u66F4\u65B0\u65F6\u4F1A\u89E6\u53D1update\u51FD\u6570</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>binding<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u7B80\u5199\u6210\u4E3A</p><div class="language-js"><pre><code><span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">color</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4</p><div class="language-js"><pre><code><span class="token comment">//main.js</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ol>`,2),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{_ as __pageData,m as default};
