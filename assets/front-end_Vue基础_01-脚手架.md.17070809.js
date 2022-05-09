import{_ as n,c as s,o as a,a as p}from"./app.821c74b9.js";const m='{"title":"SPA\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"SPA\u7B80\u4ECB","slug":"spa\u7B80\u4ECB"},{"level":2,"title":"vue-cli\u642D\u5EFA","slug":"vue-cli\u642D\u5EFA"},{"level":2,"title":"vue\u9879\u76EE\u8FD0\u884C\u6D41\u7A0B","slug":"vue\u9879\u76EE\u8FD0\u884C\u6D41\u7A0B"},{"level":2,"title":"VUE\u7EC4\u4EF6","slug":"vue\u7EC4\u4EF6"},{"level":3,"title":"\u4F7F\u7528\u7EC4\u4EF6\u7684\u4E09\u4E2A\u6B65\u9AA4","slug":"\u4F7F\u7528\u7EC4\u4EF6\u7684\u4E09\u4E2A\u6B65\u9AA4"},{"level":3,"title":"\u5168\u5C40\u548C\u79C1\u6709\u7EC4\u4EF6\u7684\u4F7F\u7528","slug":"\u5168\u5C40\u548C\u79C1\u6709\u7EC4\u4EF6\u7684\u4F7F\u7528"},{"level":3,"title":"\u7EC4\u4EF6\u7684props","slug":"\u7EC4\u4EF6\u7684props"},{"level":3,"title":"\u7EC4\u4EF6\u6837\u5F0F\u51B2\u7A81","slug":"\u7EC4\u4EF6\u6837\u5F0F\u51B2\u7A81"},{"level":3,"title":"\u5728\u7236\u7EC4\u4EF6\u5185\u6539\u53D8\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F","slug":"\u5728\u7236\u7EC4\u4EF6\u5185\u6539\u53D8\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F"},{"level":3,"title":"\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F&\u751F\u547D\u5468\u671F\u51FD\u6570","slug":"\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F-\u751F\u547D\u5468\u671F\u51FD\u6570"},{"level":3,"title":"\u7EC4\u4EF6\u95F4\u6570\u636E\u5171\u4EAB","slug":"\u7EC4\u4EF6\u95F4\u6570\u636E\u5171\u4EAB"},{"level":3,"title":"ref\u7684\u5F15\u7528","slug":"ref\u7684\u5F15\u7528"}],"relativePath":"front-end/Vue\u57FA\u7840/01-\u811A\u624B\u67B6.md"}',t={},e=p(`<h2 id="spa\u7B80\u4ECB" tabindex="-1">SPA\u7B80\u4ECB <a class="header-anchor" href="#spa\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F\u7B80\u79F0SPA</p><p>\u5728\u4E00\u4E2Aweb\u7F51\u7AD9\u4E2D\u53EA\u6709\u4E00\u4E2Ahtml\u6587\u4EF6</p><p>\u5B83\u4EEC\u57FA\u4E8E\u552F\u4E00\u7684\u9875\u9762\u6765\u5B8C\u6210</p><h2 id="vue-cli\u642D\u5EFA" tabindex="-1">vue-cli\u642D\u5EFA <a class="header-anchor" href="#vue-cli\u642D\u5EFA" aria-hidden="true">#</a></h2><ol><li><p>\u5168\u5C40\u5B89\u88C5</p><div class="language-"><pre><code>npm install -g @vue/cli
//\u5B89\u88C5vue-cli 4
</code></pre></div></li><li><p>\u642D\u5EFA\u811A\u624B\u67B6</p><div class="language-"><pre><code>vue create \u9879\u76EE\u540D
</code></pre></div></li><li><p>\u8FD0\u884C</p><div class="language-"><pre><code>npm run serve
</code></pre></div></li></ol><h2 id="vue\u9879\u76EE\u8FD0\u884C\u6D41\u7A0B" tabindex="-1">vue\u9879\u76EE\u8FD0\u884C\u6D41\u7A0B <a class="header-anchor" href="#vue\u9879\u76EE\u8FD0\u884C\u6D41\u7A0B" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u8FC7main.js\u628AAPP.vue\u6E32\u67D3\u5230index.html\u4E2D\u7684\u6307\u5B9A\u533A\u57DF\u5185</p></blockquote><p>main.js</p><div class="language-js"><pre><code><span class="token comment">//\u5BFC\u5165vue\u5305\uFF0C\u5F97\u5230Vue\u6784\u9020\u51FD\u6570</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//\u5BFC\u5165APP.vue\u6839\u7EC4\u4EF6\uFF0C\u628A\u5176\u4E2D\u7684\u6A21\u677F\u7ED3\u6784\u6E32\u67D3\u5230\u9875\u9762\u4E2D</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">//\u521B\u5EFAVue\u7684\u5B9E\u4F8B\u5BF9\u8C61</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//\u628Arender\u51FD\u6570\u6307\u5B9A\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span>
    <span class="token comment">//\u628Arender\u51FD\u6570\u6307\u5B9A\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A$mount\u4E0Eel\u7684\u6302\u8F7D\u6548\u679C\u662F\u4E00\u6837\u7684</p><h2 id="vue\u7EC4\u4EF6" tabindex="-1">VUE\u7EC4\u4EF6 <a class="header-anchor" href="#vue\u7EC4\u4EF6" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u7EC4\u4EF6\u7684\u4E09\u4E2A\u6B65\u9AA4" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6\u7684\u4E09\u4E2A\u6B65\u9AA4 <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6\u7684\u4E09\u4E2A\u6B65\u9AA4" aria-hidden="true">#</a></h3><ol><li><p>\u4F7F\u7528import\u5BFC\u5165\u6211\u4EEC\u9700\u8981\u7684\u7EC4\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">import</span> Left <span class="token keyword">from</span> <span class="token string">&#39;@/components/Left.vue&#39;</span>
</code></pre></div></li><li><p>\u4F7F\u7528components\u8282\u70B9\u6CE8\u518C\u7EC4\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        Left
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u4F7F\u7528\u7EC4\u4EF6</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Left</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Left</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ol><h3 id="\u5168\u5C40\u548C\u79C1\u6709\u7EC4\u4EF6\u7684\u4F7F\u7528" tabindex="-1">\u5168\u5C40\u548C\u79C1\u6709\u7EC4\u4EF6\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u5168\u5C40\u548C\u79C1\u6709\u7EC4\u4EF6\u7684\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li><p>\u79C1\u6709\u7EC4\u4EF6</p><p>\u53EA\u9700\u8981\u5C06\u7EC4\u4EF6\u5BFC\u5165\u6211\u4EEC\u9700\u8981\u7684\u9875\u9762\u5185\uFF0C\u5B83\u5C31\u662F\u8FD9\u4E2A\u9875\u9762\u7684\u79C1\u6709\u7EC4\u4EF6\uFF0C\u5176\u4ED6\u4E0D\u53EF\u7528</p></li><li><p>\u5168\u5C40\u7EC4\u4EF6</p><p>\u6211\u4EEC\u9700\u8981\u5728main.js\u4E2D\u6765\u914D\u7F6E\u5168\u5C40\u7EC4\u4EF6</p><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> Left <span class="token keyword">from</span> <span class="token string">&#39;@/components/Left.vue&#39;</span>

\u53C2\u6570<span class="token number">1</span>\uFF1A\u6CE8\u518C\u540D\u79F0
\u53C2\u6570<span class="token number">2</span>\uFF1A\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u540D
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyCount&#39;</span><span class="token punctuation">,</span>Left<span class="token punctuation">)</span>
</code></pre></div></li></ol><h3 id="\u7EC4\u4EF6\u7684props" tabindex="-1">\u7EC4\u4EF6\u7684props <a class="header-anchor" href="#\u7EC4\u4EF6\u7684props" aria-hidden="true">#</a></h3><blockquote><p>\u4F7F\u7528props\uFF08\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF09\u5408\u7406\u5229\u7528props\u53EF\u4EE5\u63D0\u9AD8\u7EC4\u4EF6\u7684\u590D\u7528\u6027</p></blockquote><ol><li><p>\u4F7F\u7528</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u81EA\u5B9A\u4E49\u5C5E\u6027&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A</p><div class="language-html"><pre><code><span class="token comment">&lt;!--\u6CE8\u610F\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u5C5E\u6027\u7684\u5F62\u5F0F\u90A3\u4E48\u4F20\u503C\u8FC7\u6765\u7684\u662F\u5B57\u7B26\u4E32--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyCount</span> <span class="token attr-name">init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyCount</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--\u4F7F\u7528bind\u5F62\u5F0F\u5219\u4F20\u6765\u7684\u4E3A\u6570\u5B57\u683C\u5F0F--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyCount</span> <span class="token attr-name">:init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyCount</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u9ED8\u8BA4props</p><p>\u5F53\u6211\u4EEC\u6CA1\u6709\u4F20\u503C\u65F6\u53EF\u4EE5\u8BBE\u5B9A\u9ED8\u8BA4\u503C,\u8FD9\u4E2A\u65F6\u5019props\u4E3A\u5BF9\u8C61\u683C\u5F0F</p><div class="language-js"><pre><code><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">init</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>props\u7684type\u503C\u7C7B\u578B</p><div class="language-json"><pre><code>props<span class="token operator">:</span><span class="token punctuation">{</span>
        init<span class="token operator">:</span><span class="token punctuation">{</span>
            default<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span>Number
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>props\u7684require\u5FC5\u586B\u9879</p><p>\u4F7F\u7528\u7EC4\u4EF6\u65F6\u5FC5\u987B\u4F7F\u7528\u8FD9\u4E2A\u53C2\u6570\u5426\u5219\u4F1A\u62A5\u9519</p><div class="language-js"><pre><code><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">init</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
            <span class="token literal-property property">require</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li></ol><h3 id="\u7EC4\u4EF6\u6837\u5F0F\u51B2\u7A81" tabindex="-1">\u7EC4\u4EF6\u6837\u5F0F\u51B2\u7A81 <a class="header-anchor" href="#\u7EC4\u4EF6\u6837\u5F0F\u51B2\u7A81" aria-hidden="true">#</a></h3><p>\u7531\u4E8E\u6211\u4EEC\u6700\u7EC8\u6E32\u67D3\u5230index.html\u4E2D\u6240\u4EE5\u6837\u5F0F\u975E\u5E38\u5BB9\u6613\u53D1\u751F\u51B2\u7A81</p><p>\u5728\u7EC4\u4EF6\u4E2D\u6211\u4EEC\u53EF\u4EE5\u66F4\u8FD9\u6837\u505A\u89E3\u51B3\u6837\u5F0F\u7684\u51B2\u7A81\u95EE\u9898</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">data-v-01</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css"><pre><code><span class="token selector">h1[data-v-01]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u7136\u4E0D\u53EF\u80FD\u5C06\u6240\u6709\u7684\u8282\u70B9\u90FD\u6DFB\u52A0\u5C5E\u6027</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6211\u4EEC\u5728\u4E3Astyle\u6DFB\u52A0scoped\u5C5E\u6027\u6765\u5B8C\u6210\u8FD9\u4E00\u6D41\u7A0B\uFF0C\u5373\u8BB2\u6837\u5F0F\u53D8\u6210\u79C1\u6709</p><h3 id="\u5728\u7236\u7EC4\u4EF6\u5185\u6539\u53D8\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F" tabindex="-1">\u5728\u7236\u7EC4\u4EF6\u5185\u6539\u53D8\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F <a class="header-anchor" href="#\u5728\u7236\u7EC4\u4EF6\u5185\u6539\u53D8\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">/deep/ h5</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*\u6211\u4EEC\u7ECF\u5E38\u53EF\u4EE5\u6765\u7528deep\u6765\u4FEE\u6539\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5E93\u7684\u989C\u8272*/</span>
</code></pre></div><h3 id="\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F-\u751F\u547D\u5468\u671F\u51FD\u6570" tabindex="-1">\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F&amp;\u751F\u547D\u5468\u671F\u51FD\u6570 <a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F-\u751F\u547D\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a></h3><ol><li><p>\u751F\u547D\u5468\u671F</p><p>\u751F\u547D\u5468\u671F\u662F\u6307\u7EC4\u4EF6\u4ECE\u521B\u5EFA-&gt;\u8FD0\u884C-&gt;\u9500\u6BC1\uFF0C\u6574\u4E2A\u9636\u6BB5\uFF0C\u5F3A\u8C03\u7684\u662F\u4E00\u4E2A\u65F6\u95F4\u6BB5</p></li><li><p>\u751F\u547D\u5468\u671F\u51FD\u6570</p><p>\u662F\u7531vue\u63D0\u4F9B\u7684\u5185\u7F6E\u51FD\u6570\uFF0C\u4F1A\u4F34\u968F\u7740\u751F\u547D\u5468\u671F\uFF0C\u81EA\u52A8\u6267\u884C</p><ol><li>\u521B\u5EFA\u9636\u6BB5\uFF1A <ul><li>beforeCreate\uFF1A\u5728\u7EC4\u4EF6\u521B\u5EFA\u4E4B\u524D\u2014\u2014\u7EC4\u4EF6\u7684props&amp;data&amp;methods\u8FD8\u6CA1\u6709\u88AB\u521B\u5EFA\uFF0C\u90FD\u5904\u4E8E\u4E0D\u53EF\u7528\u7684\u72B6\u6001\u3002</li><li><strong>created</strong>\uFF1A\u521B\u5EFA\u597D\u6267\u884C\uFF08\u4E3A\u6E32\u67D3\u53EA\u5B58\u5728\u5185\u5B58\u4E2D\uFF09\u2014\u2014\u7EC4\u4EF6\u7684props&amp;data&amp;methods\u90FD\u5DF2\u7ECF\u521B\u5EFA\u597D\uFF0C\u5904\u4E8E\u53EF\u7528\u72B6\u6001\uFF0C\u4F46\u662F\u7EC4\u4EF6\u7684\u6A21\u677F\u7ED3\u6784\u5C1A\u672A\u751F\u6210\uFF0C\u8FD9\u4E2A\u5730\u65B9\u6211\u4EEC\u7ECF\u5E38\u4F1A\u53D1\u8D77ajax\u8BF7\u6C42\u62FF\u5230\u9875\u9762\u6570\u636E</li><li>beforeMount\uFF1A\u7EC4\u4EF6\u5C06\u8981\u6E32\u67D3\u65F6\u6267\u884C\u2014\u2014\u5C06\u8981\u628A\u5185\u5B58\u4E2D\u7F16\u8BD1\u597D\u7684HTML\u7ED3\u6784\u6E32\u67D3\u5230\u6D4F\u89C8\u5668\u4E2D\uFF0C\u6B64\u65F6\u6D4F\u89C8\u5668\u4E2D\u8FD8\u6CA1\u6709\u5F53\u524D\u7EC4\u4EF6\u7684dom\u7ED3\u6784</li><li><strong>mounted</strong>\uFF1A\u5DF2\u7ECF\u6E32\u67D3\u2014\u2014dom\u7ED3\u6784\u5DF2\u7ECF\u6E32\u67D3\uFF0C\u5373\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u91CC\u64CD\u4F5CDOM</li></ul></li><li>\u8FD0\u884C\u9636\u6BB5\uFF1A <ul><li>beforeUpdate\u2014\u2014\u5F53\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\u8BE5\u51FD\u6570\uFF08\u9875\u9762\u8FD8\u6CA1\u6709\u6E32\u67D3\u6539\u53D8\u7684\u6570\u636E\uFF09</li><li>updated\u8FD0\u884C\u540E\u2014\u2014\u6839\u636E\u6700\u65B0\u7684\u6570\u636E\u5B8C\u6210\u4E86\u5BF9\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</li></ul></li><li>\u9500\u6BC1\u9636\u6BB5 <ul><li>beforeDestroy</li><li>destroyed\u9500\u6BC1\u540E</li></ul></li></ol></li></ol><h3 id="\u7EC4\u4EF6\u95F4\u6570\u636E\u5171\u4EAB" tabindex="-1">\u7EC4\u4EF6\u95F4\u6570\u636E\u5171\u4EAB <a class="header-anchor" href="#\u7EC4\u4EF6\u95F4\u6570\u636E\u5171\u4EAB" aria-hidden="true">#</a></h3><ol><li><p>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E</p><div class="language-html"><pre><code><span class="token comment">&lt;!--\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userinfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//\u7236\u7EC4\u4EF6</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    retrun <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">userinfo</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html"><pre><code><span class="token comment">&lt;!--\u5B50\u7EC4\u4EF6--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ user }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//\u4F7F\u7528props</span>
<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u6211\u4EEC\u4F20\u8FC7\u53BB\u7684\u7B80\u5355\u7C7B\u578B\u662F\u590D\u5236\u4E00\u4EFD\u8FC7\u53BB\uFF0C\u4E24\u8005\u76F8\u4E92\u72EC\u7ACB\uFF0C\u4F46\u662F\u590D\u6742\u7C7B\u578B\u6211\u4EEC\u4F20\u8FC7\u53BB\u7684\u5730\u5740\u5F15\u7528\u4E86\u8BE5\u5BF9\u8C61\u7684\u5730\u5740\u3002</p></li><li><p>\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u503C</p><div class="language-js"><pre><code><span class="token comment">//\u5B50\u7EC4\u4EF6\u5B9A\u4E49\u6570\u636E</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">//\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u901A\u8FC7 $emit()\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;numchange&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//\u7236\u7EC4\u4EF6\u5B9A\u4E49\u6570\u636E</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">countFromSon</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">getNewCount</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>countFronmSon <span class="token operator">=</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">@numchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getNewCount<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u6570\u636E\u5171\u4EAB</p><p>\u5728vue2.x\u4E2D\u5144\u5F1F\u4E4B\u95F4\u6570\u636E\u5171\u4EAB\u7684\u65B9\u6848\u662FEventBus</p><div class="language-js"><pre><code><span class="token comment">//\u5144\u5F1F\u7EC4\u4EF6A\uFF08\u6570\u636E\u53D1\u9001\u65B9\uFF09</span>
<span class="token keyword">import</span> bus <span class="token keyword">from</span> <span class="token string">&#39;./eventBus.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;share&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
            <span class="token comment">//\u53D1\u9001\u6570\u636E</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//eventBus.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">//\u5411\u5916\u5171\u4EABVue\u7684\u5B9E\u4F8B\u5BF9\u8C61</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//\u5144\u5F1F\u7EC4\u4EF6C\uFF08\u6570\u636E\u63A5\u6536\u65B9\uFF09</span>
<span class="token keyword">import</span> bus <span class="token keyword">from</span> <span class="token string">&#39;./eventBus.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msgFromLeft</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>\uFF0C
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;share&#39;</span><span class="token punctuation">,</span><span class="token parameter">val</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>msgFromLeft <span class="token operator">=</span> val
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">//\u6570\u636E\u63A5\u53D7\uFF0C\u5F53share\u88AB\u89E6\u53D1\u65F6\u6267\u884C\u8FD9\u4E2A\u51FD\u6570</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h3 id="ref\u7684\u5F15\u7528" tabindex="-1">ref\u7684\u5F15\u7528 <a class="header-anchor" href="#ref\u7684\u5F15\u7528" aria-hidden="true">#</a></h3><p>\u5728\u4E0D\u4F9D\u8D56jq\u7684\u65F6\u5019\u83B7\u53D6dom\u6216\u8005\u7EC4\u4EF6\u7684\u5F15\u7528</p><p>\u5728\u6BCF\u4E00\u4E2Avue\u5B9E\u4F8B\u4E0A\uFF0C\u90FD\u5305\u542B\u4E00\u4E2A$refs\u5BF9\u8C61\uFF0C\u91CC\u9762\u5B58\u50A8\u7740\u5BF9\u5E94\u7684DOM\u5143\u7D20\u6216\u8005\u7EC4\u4EF6\u7684\u5F15\u7528</p><p>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B$refs\u6307\u5411\u4E00\u4E2A\u7A7A\u5BF9\u8C61</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ref<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>myh<span class="token punctuation">)</span>
</code></pre></div><p>this.$nextTick(cb)</p><p>\u5C06\u8BE5\u56DE\u8C03\u51FD\u6570\u5185\u7684\u4EE3\u7801\u5EF6\u8FDF\u6267\u884C\u5373\u5B83\u4F1A\u628Acb\u56DE\u8C03\u63A8\u8FDF\u5230\u4E0B\u4E00\u4E2ADOM\u66F4\u65B0\u5468\u671F\u540E\u6267\u884C</p><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>iptRef<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,42),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var v=n(t,[["render",c]]);export{m as __pageData,v as default};
