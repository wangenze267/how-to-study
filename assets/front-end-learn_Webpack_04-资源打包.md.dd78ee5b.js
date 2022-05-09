import{_ as a,c as s,o as n,d as e}from"./app.460d1d0d.js";const g='{"title":"\u8D44\u6E90\u6253\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6837\u5F0F\u8D44\u6E90\u6253\u5305","slug":"\u6837\u5F0F\u8D44\u6E90\u6253\u5305"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u5B89\u88C5loader","slug":"\u5B89\u88C5loader"},{"level":3,"title":"\u914D\u7F6Eloader","slug":"\u914D\u7F6Eloader"},{"level":3,"title":"less\u5904\u7406","slug":"less\u5904\u7406"},{"level":2,"title":"HTML\u8D44\u6E90\u6253\u5305","slug":"html\u8D44\u6E90\u6253\u5305"},{"level":3,"title":"\u5B89\u88C5\u63D2\u4EF6","slug":"\u5B89\u88C5\u63D2\u4EF6"},{"level":3,"title":"\u5F15\u5165\u63D2\u4EF6","slug":"\u5F15\u5165\u63D2\u4EF6"},{"level":3,"title":"\u914D\u7F6E\u63D2\u4EF6","slug":"\u914D\u7F6E\u63D2\u4EF6"},{"level":2,"title":"\u56FE\u7247\u8D44\u6E90\u6253\u5305","slug":"\u56FE\u7247\u8D44\u6E90\u6253\u5305"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u5176\u4ED6\u8D44\u6E90\u6253\u5305","slug":"\u5176\u4ED6\u8D44\u6E90\u6253\u5305"}],"relativePath":"front-end-learn/Webpack/04-\u8D44\u6E90\u6253\u5305.md"}',p={},t=e(`<h1 id="\u8D44\u6E90\u6253\u5305" tabindex="-1">\u8D44\u6E90\u6253\u5305 <a class="header-anchor" href="#\u8D44\u6E90\u6253\u5305" aria-hidden="true">#</a></h1><blockquote><p>\u7531\u4E8Ewebpack\u65E0\u6CD5\u6253\u5305\u5904\u7406\u6837\u5F0F\u8D44\u6E90\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4F7F\u7528loader\u6765\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\u3002</p></blockquote><h2 id="\u6837\u5F0F\u8D44\u6E90\u6253\u5305" tabindex="-1">\u6837\u5F0F\u8D44\u6E90\u6253\u5305 <a class="header-anchor" href="#\u6837\u5F0F\u8D44\u6E90\u6253\u5305" aria-hidden="true">#</a></h2><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u9996\u5148\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A<code>webpack.config.js</code>\u4F5C\u4E3A\u914D\u7F6E\u6587\u4EF6\u6765\u6307\u793Awebpack\u5904\u7406\u5DE5\u4F5C\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5F15\u5165node\u7684\u8DEF\u5F84\u5904\u7406\u6A21\u5757</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528__dirname\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
  	<span class="token comment">// loader\u7684\u914D\u7F6E</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5B89\u88C5loader" tabindex="-1">\u5B89\u88C5loader <a class="header-anchor" href="#\u5B89\u88C5loader" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i css-loader style-loader -D
</code></pre></div><h3 id="\u914D\u7F6Eloader" tabindex="-1">\u914D\u7F6Eloader <a class="header-anchor" href="#\u914D\u7F6Eloader" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u6B63\u5219\u5339\u914D\u6587\u4EF6</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// loader\u5904\u7406\u6570\u7EC4\uFF0C\u5176\u4E2D\u6267\u884Cloader\u7684\u987A\u5E8F\u4E3A\u4ECE\u5C3E\u5230\u5934</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token comment">// \u521B\u5EFA\u4E00\u4E2Astyle\u6807\u7B7E\uFF0C\u5C06js\u4E2D\u7684\u6837\u5F0F\u8D44\u6E90\u63D2\u5165\u8FDB\u884C\uFF0C\u6DFB\u52A0\u5230head\u4E2D\u751F\u6548</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u5C06css\u6587\u4EF6\u8F6C\u4E3Acommonjs\u6A21\u5757\u52A0\u8F7D\u5165js\uFF0C\u5185\u5BB9\u4E3A\u6837\u5F0F\u5B57\u7B26\u4E32</span>
          <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre></div><h3 id="less\u5904\u7406" tabindex="-1">less\u5904\u7406 <a class="header-anchor" href="#less\u5904\u7406" aria-hidden="true">#</a></h3><p>\u5B89\u88C5</p><div class="language-js"><pre><code>npm i less less<span class="token operator">-</span>loader <span class="token operator">-</span><span class="token constant">D</span>
</code></pre></div><p>\u914D\u7F6E</p><div class="language-js"><pre><code> <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
</code></pre></div><h2 id="html\u8D44\u6E90\u6253\u5305" tabindex="-1">HTML\u8D44\u6E90\u6253\u5305 <a class="header-anchor" href="#html\u8D44\u6E90\u6253\u5305" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5B89\u88C5\u63D2\u4EF6\u6765\u5B8C\u6210html\u7684\u6253\u5305\uFF0C\u5176\u4E2D\u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u7A7Ahtml\u7136\u540E\u5F15\u5165\u8D44\u6E90</p><h3 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1">\u5B89\u88C5\u63D2\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i html-webpack-plugin -D
</code></pre></div><h3 id="\u5F15\u5165\u63D2\u4EF6" tabindex="-1">\u5F15\u5165\u63D2\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u63D2\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><pre><code>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
</code></pre></div><h3 id="\u914D\u7F6E\u63D2\u4EF6" tabindex="-1">\u914D\u7F6E\u63D2\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u63D2\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><pre><code> plugins:[
    new HtmlWebpackPlugin()
  ],
</code></pre></div><h2 id="\u56FE\u7247\u8D44\u6E90\u6253\u5305" tabindex="-1">\u56FE\u7247\u8D44\u6E90\u6253\u5305 <a class="header-anchor" href="#\u56FE\u7247\u8D44\u6E90\u6253\u5305" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i file-loader url-loader -D
npm i html-loader -D
</code></pre></div><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u56FE\u7247\u5927\u4E8E8kb\u4F1A\u89E3\u6790\u4E3Abase64\u5B57\u7B26\u4E32\uFF0C\u8FBE\u5230\u51CF\u5C11\u4F53\u79EF\u7684\u6548\u679C</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token comment">// \u8FD9\u91CC\u9700\u8981\u5173\u95EDes6module\uFF08\u6A21\u5757\u5316\uFF09\uFF0C\u4F7F\u7528common.js</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// \u4F7F\u7528\u54C8\u5E0C\u6765\u6539\u53D8\u56FE\u7247\u7684\u6587\u4EF6\u540D\uFF0C\u5176\u4E2Dext\u4E3A\u539F\u6587\u4EF6\u7684\u6269\u5C55\u540D</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;[hash:10].[ext]&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u5904\u7406html\u6587\u4EF6\u4E2D\u7684img\u56FE\u7247\uFF0C\u8D1F\u8D23\u5F15\u5165\uFF0C\u4ECE\u800C\u88AB\u89E3\u6790</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;html-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre></div><h2 id="\u5176\u4ED6\u8D44\u6E90\u6253\u5305" tabindex="-1">\u5176\u4ED6\u8D44\u6E90\u6253\u5305 <a class="header-anchor" href="#\u5176\u4ED6\u8D44\u6E90\u6253\u5305" aria-hidden="true">#</a></h2><p>\u5176\u4ED6\u8D44\u6E90\u5305\u62EC\u5B57\u4F53\uFF0C\u56FE\u6807\u7B49</p><div class="language-"><pre><code>{
        exclude:/\\.(css|js|html)$/,
        loader:&#39;file-loader&#39;
      }
</code></pre></div>`,31),o=[t];function l(r,c,i,d,u,k){return n(),s("div",null,o)}var m=a(p,[["render",l]]);export{g as __pageData,m as default};
