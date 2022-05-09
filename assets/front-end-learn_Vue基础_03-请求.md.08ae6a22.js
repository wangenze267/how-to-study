import{_ as n,c as s,o as a,d as t}from"./app.c75c9a8c.js";const m='{"title":"axios","description":"","frontmatter":{},"headers":[{"level":2,"title":"axios","slug":"axios"}],"relativePath":"front-end-learn/Vue\u57FA\u7840/03-\u8BF7\u6C42.md"}',o={},p=t(`<h2 id="axios" tabindex="-1">axios <a class="header-anchor" href="#axios" aria-hidden="true">#</a></h2><ol><li><p>\u5B89\u88C5</p><div class="language-"><pre><code>npm i axios -S
</code></pre></div></li><li><p>\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token comment">//\u7EC4\u4EF6</span>


<span class="token keyword">async</span> getinfo<span class="token punctuation">{</span>
    <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div></li><li><p>\u5168\u5C40\u5C01\u88C5</p><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token comment">//\u5168\u5C40\u914D\u7F6E\u8BF7\u6C42\u6839\u8DEF\u5F84</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>base<span class="token punctuation">.</span><span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">&#39;url&#39;</span>
<span class="token comment">//\u6302\u8F7D\u5168\u5C40\u5B9E\u4F8B</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>axios <span class="token operator">=</span> axios
<span class="token comment">//\u7EC4\u4EF6\u5185\u65E0\u9700\u58F0\u660E</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token function">btnBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> res <span class="token operator">=</span>  <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/book&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol>`,2),e=[p];function c(i,l,u,k,r,d){return a(),s("div",null,e)}var x=n(o,[["render",c]]);export{m as __pageData,x as default};
