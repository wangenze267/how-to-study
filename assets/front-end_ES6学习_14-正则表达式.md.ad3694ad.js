import{_ as a,c as e,o as t,a as s,b as n}from"./app.821c74b9.js";const y='{"title":"\u6B63\u5219\u8868\u8FBE\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6B63\u5219\u8868\u8FBE\u5F0F","slug":"\u6B63\u5219\u8868\u8FBE\u5F0F"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u521B\u5EFA\u6B63\u5219","slug":"\u521B\u5EFA\u6B63\u5219"},{"level":3,"title":"\u68C0\u6D4B","slug":"\u68C0\u6D4B"},{"level":3,"title":"\u7EC4\u6210","slug":"\u7EC4\u6210"},{"level":2,"title":"\u5339\u914D\u8865\u5145","slug":"\u5339\u914D\u8865\u5145"},{"level":3,"title":"\u5B57\u7B26\u7C7B\u578B\u5339\u914D","slug":"\u5B57\u7B26\u7C7B\u578B\u5339\u914D"},{"level":3,"title":"\u91CF\u8BCD\u5339\u914D","slug":"\u91CF\u8BCD\u5339\u914D"},{"level":2,"title":"\u6B63\u5219\u5E94\u7528","slug":"\u6B63\u5219\u5E94\u7528"}],"relativePath":"front-end/ES6\u5B66\u4E60/14-\u6B63\u5219\u8868\u8FBE\u5F0F.md"}',p={},l=s(`<h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1">\u6B63\u5219\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><blockquote><p>\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u4E8E\u5339\u914D\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u7EC4\u5408\u6A21\u5F0F\uFF0C\u4E14\u5728JS\u4E2D\u6B63\u5219\u8868\u8FBE\u5F0F\u4E3A\u5BF9\u8C61</p></blockquote><ol><li>\u5B83\u53EF\u4EE5\u9A8C\u8BC1\u8868\u5355</li><li>\u53EF\u4EE5\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u590D\u6742\u63A7\u5236\uFF0C\u6BD4\u5982\u66FF\u6362\uFF0C\u5220\u9664\uFF0C</li></ol><p>\u6B63\u5219\u5728\u6211\u4EEC\u751F\u6D3B\u4E2D\u975E\u5E38\u5E38\u89C1\uFF0C\u8868\u5355\u9A8C\u8BC1\uFF0C\u5F39\u5E55\u5C4F\u853D\uFF0C\u6C49\u5B57\u5339\u914D\u7B49\u7B49\uFF0C\u5B83\u53EF\u4EE5\u5339\u914D\u6211\u4EEC\u7A0B\u5E8F\u4E2D\u4EFB\u4F55\u4E00\u6BB5\u5B57\u7B26\u4E32</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u6B63\u5219" tabindex="-1">\u521B\u5EFA\u6B63\u5219 <a class="header-anchor" href="#\u521B\u5EFA\u6B63\u5219" aria-hidden="true">#</a></h3><p>\u6709\u4E24\u79CD\u521B\u5EFA\u6B63\u5219\u7684\u65B9\u6CD5\uFF0C\u5176\u4E2D\u6B63\u5219\u8868\u8FBE\u5F0F\u7531<code>//</code>+<code>\u89C4\u5219</code>\u6784\u6210</p><ol><li><p>\u901A\u8FC7RegExp\u5BF9\u8C61\u8FDB\u884C\u521B\u5EFA</p><div class="language-js"><pre><code><span class="token keyword">var</span> rules <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\u8868\u8FBE\u5F0F</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u901A\u8FC7\u5B57\u9762\u91CF\u521B\u5EFA</p><div class="language-js"><pre><code><span class="token keyword">var</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span></span>
</code></pre></div></li></ol><h3 id="\u68C0\u6D4B" tabindex="-1">\u68C0\u6D4B <a class="header-anchor" href="#\u68C0\u6D4B" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u4F7F\u7528<code>test</code>\u65B9\u6CD5\u6765\u68C0\u6D4B\u6211\u4EEC\u7684\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B63\u5219\u89C4\u5219</p><div class="language-js"><pre><code>rulse<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre></div><p>\u6211\u4EEC\u5C31\u662F\u901A\u8FC7\u8FD9\u79CD\u65B9\u6CD5\u6765\u9A8C\u8BC1\u4F60\u7684\u5B66\u53F7\u548C\u90AE\u7BB1\u662F\u5426\u7B26\u5408\u89C4\u8303\u7684\uFF0C\u6211\u4EEC\u901A\u8FC7\u8FD4\u56DE\u7684\u5E03\u5C14\u503C\u5373<code>0/1</code>\u6765\u5224\u65AD\u4F60\u8F93\u5165\u7684\u5185\u5BB9\u662F\u5426\u5408\u6CD5\u5408\u89C4\uFF0C\u7136\u540E\u4F1A\u8FDB\u884C\u4E00\u4E9B\u63D0\u793A\u6765\u544A\u8BC9\u4F60\u3002</p><h3 id="\u7EC4\u6210" tabindex="-1">\u7EC4\u6210 <a class="header-anchor" href="#\u7EC4\u6210" aria-hidden="true">#</a></h3><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u6709\u7B80\u5355\u7684\u5B57\u7B26\u6765\u7EC4\u6210\uFF0C\u4E5F\u53EF\u4EE5\u7531\u590D\u6742\u7684\u7B26\u53F7\u548C\u5B57\u7B26\u7EC4\u6210\uFF0C\u7279\u6B8A\u5B57\u7B26\u88AB\u79F0\u4E3A<strong>\u5143\u5B57\u7B26</strong>\u5982<code>^</code>,<code>$</code>\u7B49</p><table><thead><tr><th style="text-align:center;">\u8FB9\u754C\u7B26</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">^</td><td style="text-align:center;">\u8868\u793A\u5339\u914D\u884C\u9996\u7684\u6587\u672C\uFF08\u4EE5\u8C01\u5F00\u59CB\uFF09</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">\u8868\u793A\u5339\u914D\u884C\u5C3E\u7684\u6587\u672C\uFF08\u4EE5\u8C01\u7ED3\u675F\uFF09</td></tr></tbody></table><div class="language-js"><pre><code><span class="token keyword">var</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true \u90E8\u5206\u5339\u914D</span>
<span class="token keyword">var</span> rules_1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^abc</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules_1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;aabc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false \u5F00\u5934\u5339\u914D</span>
<span class="token keyword">var</span> rules_2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^abc$</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules_2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;aabcabc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false \u7CBE\u51C6\u5339\u914D</span>
</code></pre></div><h2 id="\u5339\u914D\u8865\u5145" tabindex="-1">\u5339\u914D\u8865\u5145 <a class="header-anchor" href="#\u5339\u914D\u8865\u5145" aria-hidden="true">#</a></h2><h3 id="\u5B57\u7B26\u7C7B\u578B\u5339\u914D" tabindex="-1">\u5B57\u7B26\u7C7B\u578B\u5339\u914D <a class="header-anchor" href="#\u5B57\u7B26\u7C7B\u578B\u5339\u914D" aria-hidden="true">#</a></h3><blockquote><p>\u5B57\u7B26\u7C7B\u578B\u5339\u914D\u53EF\u4EE5\u6709\u4E00\u7CFB\u5217\u7684\u5B57\u7B26\u53EF\u4EE5\u5339\u914D</p></blockquote><div class="language-js"><pre><code><span class="token keyword">var</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[abc]</span><span class="token regex-delimiter">/</span></span>
</code></pre></div><p>\u4E0A\u8FF0\u53EF\u4EE5\u5339\u914D\u7684\u662F\u5B57\u7B26\u4E32\u91CC\u53EA\u8981\u542B\u6709a\u6216\u8005b\u6216\u8005c\u5219\u7B26\u5408\u5339\u914D</p><table><thead><tr><th style="text-align:center;">\u7B26\u53F7</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">[ ]</td><td style="text-align:center;">\u9650\u5B9A\u7B26\uFF0C\u7528\u4E8E\u4E00\u7CFB\u5217\u7684\u5B57\u7B26\u6765\u4F9B\u5339\u914D</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;">\u8303\u56F4\u7B26\uFF0C\u53EF\u4EE5\u901A\u8FC7-\u6765\u9650\u5B9A\u4E00\u7CFB\u5217\u8303\u56F4\u5E7F\u7684\u5B57\u7B26\u96C6\u5982<code>[a-z]</code>\u8868\u793A\u5339\u914D26\u4E2A\u5C0F\u5199\u5B57\u6BCD\u7684\u5728\u5B57\u7B26\u96C6</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">\u53D6\u53CD\u7B26\uFF0C\u8868\u793A\u67D0\u4E2A\u9650\u5B9A\u5B57\u7B26\u96C6\u4E4B\u5916\u7684\u5B57\u7B26\u96C6\u5982<code>/[^a-z]/</code>\u5339\u914D\u5C0F\u5199\u5B57\u6BCD\u4E4B\u5916\u7684\u5B57\u7B26\u96C6</td></tr></tbody></table><h3 id="\u91CF\u8BCD\u5339\u914D" tabindex="-1">\u91CF\u8BCD\u5339\u914D <a class="header-anchor" href="#\u91CF\u8BCD\u5339\u914D" aria-hidden="true">#</a></h3><blockquote><p>\u91CF\u8BCD\u7B26\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5339\u914D\u7684\u7B26\u53F7\u91CD\u590Dn\u6B21\uFF0Cn\u662F\u7531\u6211\u4EEC\u6765\u5B9A\u4E49\u7684</p></blockquote><h4 id="\u7B26\u53F7\u91CF\u8BCD" tabindex="-1">\u7B26\u53F7\u91CF\u8BCD <a class="header-anchor" href="#\u7B26\u53F7\u91CF\u8BCD" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">\u91CF\u8BCD</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">*</td><td style="text-align:center;">\u91CD\u590D\u96F6\u6B21\u6216\u66F4\u591A\u6B21</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">\u91CD\u590D\u4E00\u6B21\u6216\u66F4\u591A\u6B21</td></tr><tr><td style="text-align:center;">\uFF1F</td><td style="text-align:center;">\u91CD\u590D\u96F6\u6B21\u6216\u4E00\u6B21</td></tr></tbody></table><div class="language-js"><pre><code><span class="token keyword">var</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a*$</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre></div><h4 id="\u81EA\u5B9A\u4E49\u91CF\u8BCD" tabindex="-1">\u81EA\u5B9A\u4E49\u91CF\u8BCD <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u91CF\u8BCD" aria-hidden="true">#</a></h4><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u91CF\u8BCD\u6765\u5177\u4F53\u89C4\u8303\u5B57\u7B26\u91CD\u590D\u51E0\u6B21</p>`,29),o=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u7B26\u53F7"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"},n:""}),n("td",{style:{"text-align":"center"}},"\u5FC5\u987B\u91CD\u590Dn\u6B21")]),n("tr",null,[n("td",{style:{"text-align":"center"},"n\uFF0C":""}),n("td",{style:{"text-align":"center"}},"\u5FC5\u987B\u91CD\u590D\u5927\u4E8E\u7B49\u4E8En\u6B21")]),n("tr",null,[n("td",{style:{"text-align":"center"},"n,i":""}),n("td",{style:{"text-align":"center"}},"\u5FC5\u987B\u91CD\u590D\u5927\u4E8E\u7B49\u4E8En\u6B21\u5C0F\u4E8E\u7B49\u4E8Ei\u6B21")])])],-1),c=s(`<div class="language-js"><pre><code><span class="token keyword">var</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a{3}$</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="\u6B63\u5219\u5E94\u7528" tabindex="-1">\u6B63\u5219\u5E94\u7528 <a class="header-anchor" href="#\u6B63\u5219\u5E94\u7528" aria-hidden="true">#</a></h2><ol><li><p>\u624B\u673A\u53F7\u6B63\u5219</p><div class="language-js"><pre><code><span class="token keyword">let</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$</span><span class="token regex-delimiter">/</span></span>
</code></pre></div><p>\u53EF\u4EE5\u89E3\u8BFB\u4E3A\u4EE5130-139\u6216\u8005145/147\u6216\u8005150-159\u6216\u8005180-189\u5F00\u5934\u7684\u5E76\u4EE5\u91CD\u590D\u76848\u4F4D\u963F\u62C9\u4F2F\u6570\u5B57\u7ED3\u5C3E</p></li><li><p>\u5BC6\u7801(\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF)</p><div class="language-js"><pre><code><span class="token keyword">let</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z]\\w{5,17}$</span><span class="token regex-delimiter">/</span></span>
</code></pre></div></li><li><p>\u6C49\u5B57</p><div class="language-js"><pre><code><span class="token keyword">let</span> rules <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\u4e00-\\u9fa5]{0,}$</span><span class="token regex-delimiter">/</span></span>
</code></pre></div></li></ol>`,3),r=[l,o,c];function i(u,d,k,g,x,h){return t(),e("div",null,r)}var m=a(p,[["render",i]]);export{y as __pageData,m as default};
