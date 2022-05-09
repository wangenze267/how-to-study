import{_ as a,c as n,o as s,a as t}from"./app.821c74b9.js";const _='{"title":"\u914D\u7F6E\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"data\u9009\u9879","slug":"data\u9009\u9879"},{"level":3,"title":"data\u9009\u9879\u7684\u672C\u8D28","slug":"data\u9009\u9879\u7684\u672C\u8D28"},{"level":3,"title":"\u8C03\u7528\u65F6\u673A","slug":"\u8C03\u7528\u65F6\u673A"},{"level":3,"title":"\u8C03\u7528\u53D1\u751F\u7684\u4E8B\u60C5","slug":"\u8C03\u7528\u53D1\u751F\u7684\u4E8B\u60C5"},{"level":2,"title":"methods\u9009\u9879","slug":"methods\u9009\u9879"}],"relativePath":"front-end/Vue\u7CFB\u7EDF\u5B66\u4E60/05-\u914D\u7F6E\u9009\u9879.md"}',e={},o=t(`<h1 id="\u914D\u7F6E\u9009\u9879" tabindex="-1">\u914D\u7F6E\u9009\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a></h1><h2 id="data\u9009\u9879" tabindex="-1">data\u9009\u9879 <a class="header-anchor" href="#data\u9009\u9879" aria-hidden="true">#</a></h2><h3 id="data\u9009\u9879\u7684\u672C\u8D28" tabindex="-1">data\u9009\u9879\u7684\u672C\u8D28 <a class="header-anchor" href="#data\u9009\u9879\u7684\u672C\u8D28" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5E38\u89C1\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684data\u914D\u7F6E\u9009\u9879\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6B63\u5982\u6211\u4EEC\u5728\u770B\u5230\u7684\u90A3\u6837</p><div class="language-js"><pre><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>data\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u5305\u542B\u4E86\u4E00\u4E2A<code>return</code>\u8FD4\u56DE\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E2D\u5305\u542B\u4E86\u6211\u4EEC\u7EC4\u4EF6\u6240\u9700\u8981\u7528\u5230\u7684\u6570\u636E\uFF0C\u4E5F\u662F\u56E0\u4E3A\u5BF9\u8C61\u5F62\u5F0F\u7684\u8FD4\u56DE\u503C\uFF0C\u6A21\u677F\u4E2D\u7684\u6570\u636E\u53EF\u4EE5\u6839\u636E\u5BF9\u8C61\u7684\u5F15\u7528\u6765\u968F\u65F6\u66F4\u65B0\u6570\u636E\u3002</p><h3 id="\u8C03\u7528\u65F6\u673A" tabindex="-1">\u8C03\u7528\u65F6\u673A <a class="header-anchor" href="#\u8C03\u7528\u65F6\u673A" aria-hidden="true">#</a></h3><p><code>data</code>\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48\u5B83\u7684\u8C03\u7528\u65F6\u673A\u662F\u4EC0\u4E48\uFF1F\u5B83\u4F1A\u5728Vue\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u65F6\u5019\u8C03\u7528</p><h3 id="\u8C03\u7528\u53D1\u751F\u7684\u4E8B\u60C5" tabindex="-1">\u8C03\u7528\u53D1\u751F\u7684\u4E8B\u60C5 <a class="header-anchor" href="#\u8C03\u7528\u53D1\u751F\u7684\u4E8B\u60C5" aria-hidden="true">#</a></h3><div class="language-flow"><pre><code>flowchat
st<span class="token operator">=&gt;</span>start<span class="token operator">:</span> initData
op<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> \u5904\u7406\u6846
cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> <span class="token function">\u5224\u65AD\u6846</span><span class="token punctuation">(</span>\u662F\u6216\u5426<span class="token operator">?</span><span class="token punctuation">)</span>
sub1<span class="token operator">=&gt;</span>subroutine<span class="token operator">:</span> \u5B50\u6D41\u7A0B
io<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> \u8F93\u5165\u8F93\u51FA\u6846
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> \u7ED3\u675F\u6846
st<span class="token operator">-</span><span class="token operator">&gt;</span>op<span class="token operator">-</span><span class="token operator">&gt;</span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>io<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">sub1</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>op

</code></pre></div><h2 id="methods\u9009\u9879" tabindex="-1">methods\u9009\u9879 <a class="header-anchor" href="#methods\u9009\u9879" aria-hidden="true">#</a></h2>`,11),p=[o];function r(c,l,d,i,u,h){return s(),n("div",null,p)}var g=a(e,[["render",r]]);export{_ as __pageData,g as default};
