import{_ as a,c as n,o as s,a as t}from"./app.821c74b9.js";const h='{"title":"\u63D2\u69FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"},{"level":3,"title":"\u4EC0\u4E48\u662F\u63D2\u69FD\uFF1F","slug":"\u4EC0\u4E48\u662F\u63D2\u69FD\uFF1F"},{"level":3,"title":"\u6211\u4EEC\u5982\u4F55\u6765\u4F7F\u7528\u63D2\u69FD","slug":"\u6211\u4EEC\u5982\u4F55\u6765\u4F7F\u7528\u63D2\u69FD"},{"level":3,"title":"\u5177\u540D\u63D2\u69FD","slug":"\u5177\u540D\u63D2\u69FD"},{"level":3,"title":"\u4F5C\u7528\u57DF\u63D2\u69FD","slug":"\u4F5C\u7528\u57DF\u63D2\u69FD"}],"relativePath":"front-end/Vue\u57FA\u7840/05-\u63D2\u69FD.md"}',p={},e=t(`<h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662F\u63D2\u69FD\uFF1F" tabindex="-1">\u4EC0\u4E48\u662F\u63D2\u69FD\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u63D2\u69FD\uFF1F" aria-hidden="true">#</a></h3><p>\u5B83\u662Fvue\u4E3A\u7EC4\u4EF6\u7684\u5C01\u88C5\u8005\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u5C01\u88C5\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u628A\u4E0D\u7A33\u5B9A\u7684\uFF0C\u5E0C\u671B\u7531\u7528\u6237\u6307\u5B9A\u7684\u90E8\u5206\u6210\u4E3A\u63D2\u69FD</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u6211\u4EEC\u5982\u4F55\u6765\u4F7F\u7528\u63D2\u69FD" tabindex="-1">\u6211\u4EEC\u5982\u4F55\u6765\u4F7F\u7528\u63D2\u69FD <a class="header-anchor" href="#\u6211\u4EEC\u5982\u4F55\u6765\u4F7F\u7528\u63D2\u69FD" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u4F7F\u7528\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Left</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u63D2\u69FD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Left</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>\u5728\u4F7F\u7528\u7EC4\u4EF6\u7684\u5730\u65B9\u81EA\u5B9A\u4E49\u7684\u53EF\u4EE5\u5728\u8FD9\u4E2A\u5730\u65B9\u6E32\u67D3\u51FA\u6765<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5177\u540D\u63D2\u69FD" tabindex="-1">\u5177\u540D\u63D2\u69FD <a class="header-anchor" href="#\u5177\u540D\u63D2\u69FD" aria-hidden="true">#</a></h3><p>\u5F53\u6211\u4EEC\u6709\u591A\u4E2A\u63D2\u69FD\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4F7F\u7528\u5230\u5177\u540D\u63D2\u69FD\uFF0C\u6211\u4EEC\u4F7F\u7528v-slot\u6765\u7ED1\u5B9A\u6307\u5B9A\u63D2\u69FD\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>search</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
        \u4E00\u9996\u63D2\u69FD
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1">\u4F5C\u7528\u57DF\u63D2\u69FD <a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a></h3><p>\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u7528\u6CD5\u76F8\u5F53\u4E8E\u5B50\u4F20\u7236\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u63D2\u69FD\u5C5E\u6027\u4F20\u9012\u6570\u636E\uFF0C\u5728\u7236\u7EC4\u4EF6\u4E2D\u7684\u63D2\u69FD\u8FD4\u56DE\u5230\u7684\u4E00\u4E2A\u5BF9\u8C61\u62FF\u5230\u4F20\u9012\u6765\u7684\u6570\u636E</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello Vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
        \u4E00\u9996\u63D2\u69FD
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
        {{obj}}                     <span class="token comment">&lt;!--{msg:&#39;hello Vue&#39;}--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),o=[e];function c(l,u,k,i,g,r){return s(),n("div",null,o)}var m=a(p,[["render",c]]);export{h as __pageData,m as default};
