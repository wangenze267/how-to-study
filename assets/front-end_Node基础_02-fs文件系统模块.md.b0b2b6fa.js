import{_ as n,c as s,o as a,a as t}from"./app.821c74b9.js";const h='{"title":"fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757","slug":"fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757"},{"level":3,"title":"\u4EC0\u4E48\u662Ffs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757","slug":"\u4EC0\u4E48\u662Ffs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u8BFB\u53D6\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9","slug":"\u8BFB\u53D6\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9"},{"level":3,"title":"\u5224\u65AD\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C","slug":"\u5224\u65AD\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C"},{"level":3,"title":"\u5411\u6307\u5B9A\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9","slug":"\u5411\u6307\u5B9A\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9"},{"level":3,"title":"\u8DEF\u5F84\u52A8\u6001\u62FC\u63A5","slug":"\u8DEF\u5F84\u52A8\u6001\u62FC\u63A5"}],"relativePath":"front-end/Node\u57FA\u7840/02-fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757.md"}',p={},o=t(`<h2 id="fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757" tabindex="-1">fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757 <a class="header-anchor" href="#fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662Ffs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757" tabindex="-1">\u4EC0\u4E48\u662Ffs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757 <a class="header-anchor" href="#\u4EC0\u4E48\u662Ffs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757" aria-hidden="true">#</a></h3><p>fs\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757\u662FNode.js\u5B98\u65B9\u63D0\u4F9B\u7528\u6765\u64CD\u4F5C\u6587\u4EF6\u7684\u6A21\u5757\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u7528\u6765\u6EE1\u8DB3\u7528\u6237\u5BF9\u6587\u4EF6\u7684\u64CD\u4F5C\u9700\u6C42</p><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li><p>\u5F15\u5BFC</p><div class="language-js"><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u4F7F\u7528\uFF0C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u76F4\u63A5\u8C03\u7528fs\u5373\u53EF</p></li></ol><h3 id="\u8BFB\u53D6\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9" tabindex="-1">\u8BFB\u53D6\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9 <a class="header-anchor" href="#\u8BFB\u53D6\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a></h3><p><code>fs.readFile()</code>\u65B9\u6CD5\u53EF\u4EE5\u62C2\u53BB\u6307\u5B9A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5176\u4E2D<code>readFile</code>\u4E2D\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C<code>path</code>\u548C<code>callback</code>\u4E3A\u5FC5\u9009\u53C2\u6570\uFF0C<code>options</code>\u4E3A\u53EF\u9009\u53C2\u6570</p><div class="language-js"><pre><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre></div><ol><li>path\uFF1A\u6587\u4EF6\u8DEF\u5F84</li><li>option\uFF1A\u8868\u793A\u4EE5\u7F16\u7801\u683C\u5F0F\u6765\u8BFB\u53D6\u6587\u4EF6</li><li>callback\uFF1A\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u4E4B\u540E\uFF0C\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u62FF\u5230\u7684\u8BFB\u53D6\u7ED3\u679C</li></ol><div class="language-js"><pre><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./text.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-------&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5176\u4E2D\u5F53\u8BFB\u53D6\u5931\u8D25\u540E\u7684err\u4E3A\u5BF9\u8C61\u5F62\u5F0F\uFF0CdataStr\u4E3A\u6587\u4EF6\u5185\u7684\u5185\u5BB9</p><h3 id="\u5224\u65AD\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C" tabindex="-1">\u5224\u65AD\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C <a class="header-anchor" href="#\u5224\u65AD\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u60F3\u8981\u5224\u65AD\u6587\u4EF6\u7684\u8BFB\u53D6\u7ED3\u679C\u5219\u9700\u8981\u901A\u8FC7err\u8FDB\u884C\u5224\u65AD\uFF0C\u56E0\u4E3A\u5F53\u6587\u4EF6\u8BFB\u53D6\u6210\u529F\u7684\u65F6\u5019err\u4E3Anull\uFF0C\u6240\u4EE5\u4F7F\u7528if\u6765\u8FDB\u884C\u8BFB\u53D6\u6587\u4EF6\u5224\u65AD</p><div class="language-js"><pre><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./text.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6587\u4EF6\u8BFB\u53D6\u5931\u8D25&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-------&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6587\u4EF6\u7684\u5185\u5BB9\u662F&#39;</span> <span class="token operator">+</span> dataStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5411\u6307\u5B9A\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9" tabindex="-1">\u5411\u6307\u5B9A\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9 <a class="header-anchor" href="#\u5411\u6307\u5B9A\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9" aria-hidden="true">#</a></h3><p><code>fs.writeFile</code>\u65B9\u6CD5\u53EF\u4EE5\u5411\u6307\u5B9A\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B</p><div class="language-js"><pre><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre></div><ol><li>file\uFF1A\u5FC5\u9009\u53C2\u6570\uFF0C\u6307\u5B9A\u6587\u4EF6\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32</li><li>data\uFF1A\u5FC5\u9009\u53C2\u6570\uFF0C\u5199\u5165\u5185\u5BB9</li><li>option\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u6307\u5B9A\u4EE5\u4EC0\u4E48\u683C\u5F0F\u5199\u5165\u6587\u4EF6\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u4E3Autf8</li><li>callback\uFF1A\u56DE\u8C03\u51FD\u6570</li></ol><div class="language-js"><pre><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./text.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hello second&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-------&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u8DEF\u5F84\u52A8\u6001\u62FC\u63A5" tabindex="-1">\u8DEF\u5F84\u52A8\u6001\u62FC\u63A5 <a class="header-anchor" href="#\u8DEF\u5F84\u52A8\u6001\u62FC\u63A5" aria-hidden="true">#</a></h3><p>\u5728\u4F7F\u7528fs\u6A21\u5757\u64CD\u4F5C\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u8DEF\u5F84\u4EE5./\u6216\u8005../\u5F00\u5934\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5F88\u5BB9\u6613\u51FA\u73B0\u8DEF\u5F84\u62FC\u63A5\u9519\u8BEF\u7684\u95EE\u9898\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u5728\u8FD0\u884C\u4EE3\u7801\u7684\u65F6\u5019\u4F1A\u6267\u884Cnode\u547D\u4EE4\u6240\u5904\u7684\u76EE\u5F55\uFF0C\u52A8\u6001\u62FC\u63A5\u51FA\u88AB\u64CD\u4F5C\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84\u3002\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u63D0\u4F9B\u4E00\u4E2A\u5B8C\u6574\u7684\u8DEF\u5F84\u5373\u53EF\u89E3\u51B3\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u7684\u8BDD\u79FB\u690D\u6027\u4F1A\u5F88\u5DEE\uFF0C\u4E0D\u5229\u4E8E\u7EF4\u62A4\uFF0C\u6240\u4EE5\u8FD8\u6709\u5176\u4ED6\u7684\u89E3\u51B3\u65B9\u6848\u5982\u4E0B\u3002</p><p><code>__dirname</code>\u8868\u793A\u5F53\u524D\u6587\u4EF6\u6240\u5904\u76EE\u5F55\u53EF\u4EE5\u8FDB\u884C\u8DEF\u5F84\u62FC\u63A5\uFF0C\u6765\u5B8C\u6210\u8DEF\u5F84\u7684\u52A8\u6001\u66F4\u6539</p>`,22),e=[o];function c(l,i,u,r,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
