import{_ as n,c as s,o as a,a as t}from"./app.821c74b9.js";const f='{"title":"\u7EE7\u627F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EE7\u627F","slug":"\u7EE7\u627F"},{"level":3,"title":"call()","slug":"call"},{"level":3,"title":"\u901A\u8FC7\u6784\u9020\u51FD\u6570\u7EE7\u627F\u7236\u7C7B\u578B\u7684\u5C5E\u6027","slug":"\u901A\u8FC7\u6784\u9020\u51FD\u6570\u7EE7\u627F\u7236\u7C7B\u578B\u7684\u5C5E\u6027"},{"level":3,"title":"\u901A\u8FC7\u539F\u578B\u5BF9\u8C61\u7EE7\u627F\u65B9\u6CD5","slug":"\u901A\u8FC7\u539F\u578B\u5BF9\u8C61\u7EE7\u627F\u65B9\u6CD5"}],"relativePath":"front-end/ES6\u5B66\u4E60/04-\u7EE7\u627F.md"}',p={},o=t(`<h2 id="\u7EE7\u627F" tabindex="-1">\u7EE7\u627F <a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a></h2><h3 id="call" tabindex="-1">call() <a class="header-anchor" href="#call" aria-hidden="true">#</a></h3><p><code>call()</code>\u8C03\u7528\u8BE5\u51FD\u6570\u53EF\u4EE5\u4FEE\u6539\u51FD\u6570\u8FD0\u884C\u65F6<code>this</code>\u7684\u6307\u5411\uFF0C\u53C2\u6570\u4E3A<code>thisArg</code>\u5F53\u524D\u8C03\u7528\u51FD\u6570\u7684<code>this</code>\u7684\u6307\u5411\u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mxr\u5973\u88C5&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6B64\u65F6this\u6307\u5411\u4E3Awindow</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// \u6B64\u65F6\u7684this\u6307\u5411\u4E3Aobj\u5BF9\u8C61</span>
<span class="token comment">// \u5982\u679C\u51FD\u6570\u4E2D\u60F3\u8981\u6709\u53C2\u6570\u5219</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u901A\u8FC7\u6784\u9020\u51FD\u6570\u7EE7\u627F\u7236\u7C7B\u578B\u7684\u5C5E\u6027" tabindex="-1">\u901A\u8FC7\u6784\u9020\u51FD\u6570\u7EE7\u627F\u7236\u7C7B\u578B\u7684\u5C5E\u6027 <a class="header-anchor" href="#\u901A\u8FC7\u6784\u9020\u51FD\u6570\u7EE7\u627F\u7236\u7C7B\u578B\u7684\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u901A\u8FC7<code>call()</code>\u6765\u628A\u7236\u7C7B\u578B\u7684<code>this</code>\u6307\u5411\u5B50\u7C7B\u578B\u7684<code>this</code>\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5B50\u7C7B\u578B\u7EE7\u627F\u7236\u7C7B\u578B\u7684\u5C5E\u6027\u2014\u2014<strong>\u7EC4\u5408\u7EE7\u627F</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Father</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this \u6307\u5411\u7236\u6784\u9020\u51FD\u6570\u7684\u5BF9\u8C61\u5B9E\u4F8B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Son</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// this\u6307\u5411\u5B50\u6784\u9020\u51FD\u6570\u7684\u5BF9\u8C61\u5B9E\u4F8B</span>
    <span class="token function">Father</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// \u603B\u7ED3\uFF1A\u5999\u4E0D\u53EF\u8A00</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5373\u6211\u4EEC\u5728\u5B50\u6784\u9020\u51FD\u6570\u4E2D\u901A\u8FC7<code>call()</code>\u6765\u6539\u53D8\u7236\u6784\u9020\u51FD\u6570\u7684\u6307\u5411\u6307\u5411\u6539\u4E3A\u5B50\u6784\u9020\u51FD\u6570\u4E2D\u7684<code>this</code>\u5373\u5B50\u6784\u9020\u51FD\u6570\uFF0C<strong>\u5999\u4E0D\u53EF\u8A00</strong></p><h3 id="\u901A\u8FC7\u539F\u578B\u5BF9\u8C61\u7EE7\u627F\u65B9\u6CD5" tabindex="-1">\u901A\u8FC7\u539F\u578B\u5BF9\u8C61\u7EE7\u627F\u65B9\u6CD5 <a class="header-anchor" href="#\u901A\u8FC7\u539F\u578B\u5BF9\u8C61\u7EE7\u627F\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token class-name">Father</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">code</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;coding&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u7ED9\u7236\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u6DFB\u52A0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u800C\u5728\u4F7F\u7528<code>call</code>\u4E4B\u540E\u5B50\u6784\u9020\u51FD\u6570\u5E76\u6CA1\u6709\u83B7\u5F97\u6211\u4EEC\u7684\u65B9\u6CD5\uFF0C\u8BF4\u660E\u539F\u578B\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u6CA1\u6709\u88AB\u7EE7\u627F</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>son.prototype = Father.prototype</code>\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6253\u5370\u5C31\u53EF\u4EE5\u770B\u5230\u88AB\u7EE7\u627F\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F\u8FD9\u6837\u4F1A\u6709\u4E00\u4E2A<strong>\u95EE\u9898</strong>\u5C31\u662F\u5982\u679C\u6211\u4EEC\u7684\u5B50\u6784\u9020\u51FD\u6570\u542B\u6709\u81EA\u5DF1\u7279\u5B9A\u7684\u65B9\u6CD5\uFF0C\u8FD9\u6837\u8FDB\u884C\u7EE7\u627F\u7684\u8BDD\u4F1A\u5BFC\u81F4\u4E24\u4E2A<code>prototype</code>\u7684\u5F15\u7528\u76F8\u540C\uFF0C\u6307\u5411\u76F8\u540C\uFF0C\u6240\u4EE5\u662F\u4E0D\u53EF\u884C\u7684\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u5B9E\u4F8B\u5316\u4E00\u4E2A\u7236\u6784\u9020\u51FD\u6570\u7684\u5BF9\u8C61\uFF0C\u7136\u540E\u901A\u8FC7\u8D4B\u503C\uFF0C\u6700\u540E\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u5B9E\u4F8B\u901A\u8FC7\u539F\u578B\u94FE\u5411\u4E0A\u5BFB\u627E\u6211\u4EEC\u539F\u6765\u60F3\u8981\u8D4B\u503C\u7684<code>Father.prototype</code>\u5C31\u80FD\u62FF\u5230\u7236\u6784\u9020\u51FD\u6570\u7684\u65B9\u6CD5\u4E86</p><div class="language-js"><pre><code>son<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5F53\u7136\u5982\u679C\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F\u6765\u4FEE\u6539\u4E86\u539F\u578B\u5BF9\u8C61\u4E00\u5B9A\u8981\u628A\u5176<code>constructor</code>\u6307\u56DE\u539F\u6765\u7684\u6784\u9020\u51FD\u6570</p><div class="language-js"><pre><code>son<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Son
</code></pre></div>`,16),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
