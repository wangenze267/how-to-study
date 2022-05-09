import{_ as n,c as s,o as a,a as t}from"./app.821c74b9.js";const m='{"title":"JQ\u5B9E\u73B0\u5929\u6C14\u9884\u62A5\u6570\u636E\u7ED1\u5B9A\u573A\u666F","description":"","frontmatter":{},"headers":[{"level":2,"title":"JQ\u5B9E\u73B0\u5929\u6C14\u9884\u62A5\u6570\u636E\u7ED1\u5B9A\u573A\u666F","slug":"jq\u5B9E\u73B0\u5929\u6C14\u9884\u62A5\u6570\u636E\u7ED1\u5B9A\u573A\u666F"},{"level":3,"title":"\u573A\u666F\u8981\u6C42","slug":"\u573A\u666F\u8981\u6C42"},{"level":3,"title":"\u573A\u666F\u5B9E\u73B0","slug":"\u573A\u666F\u5B9E\u73B0"},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"front-end/\u524D\u7AEF\u57FA\u7840/21-jq\u904D\u5386.md"}',p={},o=t(`<h2 id="jq\u5B9E\u73B0\u5929\u6C14\u9884\u62A5\u6570\u636E\u7ED1\u5B9A\u573A\u666F" tabindex="-1">JQ\u5B9E\u73B0\u5929\u6C14\u9884\u62A5\u6570\u636E\u7ED1\u5B9A\u573A\u666F <a class="header-anchor" href="#jq\u5B9E\u73B0\u5929\u6C14\u9884\u62A5\u6570\u636E\u7ED1\u5B9A\u573A\u666F" aria-hidden="true">#</a></h2><h3 id="\u573A\u666F\u8981\u6C42" tabindex="-1">\u573A\u666F\u8981\u6C42 <a class="header-anchor" href="#\u573A\u666F\u8981\u6C42" aria-hidden="true">#</a></h3><p>\u573A\u666F\u8981\u6C42\u6211\u4EEC\u4F7F\u7528JQ\u5C06\u6570\u636E\u7ED1\u5B9A\u5230\u5BF9\u4E8E\u7684\u4F4D\u7F6E\u4E0A\u5982\u4E0B\u9762\u4E24\u4E2A\u56FE\u6240\u793A\uFF0C\u4ECE\u57FA\u7840\u4EE3\u7801\u6765\u770B\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528JQ\u7684\u904D\u5386\u6765\u7B80\u5355\u5730\u8FBE\u5230\u6211\u4EEC\u7684\u9884\u671F\u76EE\u6807\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528JQ\u904D\u5386\u7684\u8BDD\u5C31\u4F1A\u9020\u6210\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u76D2\u5B50\u4E00\u4E2A\u76D2\u5B50\u5730\u53BB\u8D4B\u503C\uFF0C\u9020\u6210\u4EE3\u7801\u5197\u4F59\uFF0C\u8FD9\u4E5F\u662F\u4F53\u73B0\u4E86JQ\u904D\u5386\u7684\u91CD\u8981\u6027\u3002</p><h3 id="\u573A\u666F\u5B9E\u73B0" tabindex="-1">\u573A\u666F\u5B9E\u73B0 <a class="header-anchor" href="#\u573A\u666F\u5B9E\u73B0" aria-hidden="true">#</a></h3><ol><li><p>\u8BF7\u6C42\u6570\u636E\uFF0C\u8FD9\u91CC\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2Ajson\u6587\u4EF6\u7684\u6570\u636E\u96C6\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4F7F\u7528jq\u7684get\u65B9\u6CD5\u6765\u83B7\u53D6</p><div class="language-js"><pre><code> $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot; /js/weather.json&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u5728\u83B7\u53D6\u5230\u6570\u636E\u540E\u5C31\u662F\u8003\u7814\u6211\u4EEC\u5BF9\u4E8EJQ\u904D\u5386\u7684\u719F\u7EC3\u7A0B\u5EA6\uFF0C\u56E0\u4E3A\u5176html\u7ED3\u6784\u5982\u4E0B\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u8003\u8651\u5230\u8FD9\u4E48\u53BB\u904D\u5386\u5982\u4F55\u9AD8\u6548\u5730\u53BB\u5C06\u6570\u636E\u904D\u5386\u5230dom\u4E2D</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Monday<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-mess<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u7ED1\u5B9A\u7279\u5B9A\u7684\u4E3Bdom\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684\u6BCF\u76F8\u540C\u7684\u76D2\u5B50\u90FD\u662F\u7531class=item\u7ED1\u5B9A\u7684\uFF0C\u6240\u4EE5\u5148\u5B9A\u4E49\u53D8\u91CF\u7ED1\u5B9A\u6BCF\u4E2A\u76D2\u5B50</p><div class="language-js"><pre><code>days <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.item&quot;</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u5728\u7ED1\u5B9A\u5B8C\u4E3Bdom\u540E\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5BF9\u83B7\u53D6\u6765\u7684\u6570\u636E\u8FDB\u884C\u5FAA\u73AF\u904D\u5386\uFF0C\u5176\u4E2D\u5728item\u4E0B\u7684\u8282\u70B9\u4E5F\u6709\u7279\u5B9A\u7684\u5C42\u6B21\u7ED3\u6784\uFF0C\u6240\u4EE5\u9700\u8981\u6211\u4EEC\u53BB\u8003\u8651\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5176\u4E2Deq\u65B9\u6CD5\u662FJQ\u904D\u5386\u4E2D\u9009\u62E9\u5B50\u9879\u7684\u51FD\u6570\uFF0C\u6BD4\u5982\u8BF4\u4E0B\u9762\u6211\u4EEC\u9009\u62E9\u4E86\u7B2Ci\u4E2A\u76D2\u5B50</p><div class="language-js"><pre><code>day <span class="token operator">=</span> days<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u4E0B\u9762\u662F\u7ED1\u5B9A\u56FE\u7247\u95EE\u9898\uFF0C\u901A\u8FC7children\uFF0C\u904D\u5386\u5230day\u8282\u70B9\u4E0B\u7684\u56FE\u7247img\uFF0C\u5E76\u901A\u8FC7attr\u65B9\u6CD5\u8FDB\u884C\u5C5E\u6027\u7ED1\u5B9A</p><div class="language-js"><pre><code>img <span class="token operator">=</span> day<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span>
img<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>weather_icon<span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u56E0\u4E3A\u5728item\u8282\u70B9\u4E0B\u7684\u5176\u4ED6\u6570\u636E\u8FD8\u6709\u4E00\u5C42item-mess\u5305\u88F9\uFF0C\u6240\u4EE5\u6211\u4EEC\u518D\u904D\u5386\u5230item-mess\u8FD9\u91CC</p><div class="language-js"><pre><code>item_mess <span class="token operator">=</span> day<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token string">&quot;.item-mess&quot;</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u56E0\u4E3A\u5728item-mess\u8282\u70B9\u4E0B\u53C8\u5305\u542B\u4E86\u51E0\u4E2A\u76D2\u5B50\uFF0C\u6240\u4EE5\u6211\u4EEC\u518D\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u6765\u8868\u793A\u8FD9\u4E9B\u76D2\u5B50\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7eq\u6765\u8BE5\u8282\u70B9\u4E0B\u7684\u4E3A\u8D4Bclass\u7684\u76D2\u5B50\u8FDB\u884C\u6570\u636E\u7ED1\u5B9A</p><div class="language-js"><pre><code>texts <span class="token operator">=</span> item_mess<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
texts<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>weather<span class="token punctuation">)</span>
texts<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>temperature<span class="token punctuation">)</span>
texts<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>winp<span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u540C\u6837\u539F\u7406\u56E0\u4E3A\u8D4Bclass\u503C\u7684\u76D2\u5B50\u8282\u70B9\u4E0B\u8FD8\u6709\u4E24\u4E2Aspan\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u4E0A\u9762\u8D4B\u503C\u7684texts \u518D\u5411\u4E0Bchildren\u5BFB\u627Espan\u5E76\u901A\u8FC7eq\u6765\u8D4B\u503C</p><div class="language-js"><pre><code>dates <span class="token operator">=</span> texts<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dates<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>days<span class="token punctuation">)</span>
dates<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>t
</code></pre></div></li></ol><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u6765\u770B\uFF0C\u5982\u679C\u6211\u4EEC\u4E0D\u4F7F\u7528jq\u904D\u5386\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u8FD9\u51E0\u4E2A\u76D2\u5B50\u7684\u6240\u6709\u7684\u8282\u70B9\u8D4B\u4E0Aclass\uFF0C\u518D\u901A\u8FC7jq\u83B7\u53D6\u6BCF\u4E2A\u8282\u70B9\u6765\u8FDB\u884C\u8D4B\u503C\uFF0C\u6240\u4EE5\u8BF4\u638C\u63E1\u904D\u5386\u53EF\u4EE5\u8282\u7701\u5F88\u591A\u4E8B\u60C5\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u7ED5\u6765\u7ED5\u53BB\u3002</p>`,7),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{m as __pageData,q as default};
