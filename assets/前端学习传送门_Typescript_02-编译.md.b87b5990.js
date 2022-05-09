import{_ as t,c as e,o as a,a as o}from"./app.422228dc.js";const m='{"title":"\u7F16\u8BD1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u52A8\u7F16\u8BD1","slug":"\u81EA\u52A8\u7F16\u8BD1"},{"level":2,"title":"TS\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6","slug":"ts\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u914D\u7F6E\u9009\u9879","slug":"\u914D\u7F6E\u9009\u9879"},{"level":3,"title":"\u7F16\u8BD1\u5668\u9009\u9879","slug":"\u7F16\u8BD1\u5668\u9009\u9879"}],"relativePath":"\u524D\u7AEF\u5B66\u4E60\u4F20\u9001\u95E8/Typescript/02-\u7F16\u8BD1.md"}',i={},d=o(`<h1 id="\u7F16\u8BD1" tabindex="-1">\u7F16\u8BD1 <a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a></h1><div class="language-"><pre><code>tsc app.js
</code></pre></div><h2 id="\u81EA\u52A8\u7F16\u8BD1" tabindex="-1">\u81EA\u52A8\u7F16\u8BD1 <a class="header-anchor" href="#\u81EA\u52A8\u7F16\u8BD1" aria-hidden="true">#</a></h2><p>\u5728\u7F16\u8BD1\u547D\u4EE4\u540E\u6DFB\u52A0\u4E00\u4E2Aw\uFF0C\u76D1\u89C6\u6587\u4EF6\u53D8\u5316</p><div class="language-"><pre><code>tsc app.js -w
</code></pre></div><h2 id="ts\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6" tabindex="-1">TS\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#ts\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u5728\u76EE\u6807\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2A<code>tsconfig.json</code>\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u662Fts\u7F16\u8BD1\u5668\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u7F16\u8BD1\u5668\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u6587\u4EF6\u4FE1\u606F\u6765\u5BF9\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1</p><div class="language-"><pre><code>{}
</code></pre></div><div class="language-"><pre><code>tsc -w
</code></pre></div><p>\u8FD9\u6837\u7684\u8BDD\u6211\u4EEC\u5C31\u53EF\u4EE5\u76D1\u89C6\u76EE\u6807\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6</p><h3 id="\u914D\u7F6E\u9009\u9879" tabindex="-1">\u914D\u7F6E\u9009\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a></h3><h4 id="include" tabindex="-1">include <a class="header-anchor" href="#include" aria-hidden="true">#</a></h4><p>\u5305\u542B\uFF0C\u7528\u6765\u6307\u5B9A\u54EA\u4E9Bts\u6587\u4EF6\u9700\u8981\u88AB\u7F16\u8BD1\u6BD4\u5982<code>&quot;./ts/**/*&quot;</code>\u8868\u793A\u7684\u662Fts\u6587\u4EF6\u76EE\u5F55\u4E0B\u4EFB\u610F\u7684\u76EE\u5F55\u4E2D\u4EFB\u610F\u7684\u6587\u4EF6\u53EF\u4EE5\u88AB\u7F16\u8BD1</p><div class="language-"><pre><code>{
	&quot;include&quot;:[
		&quot;./01.ts&quot;
	]
}
</code></pre></div><h4 id="exclude" tabindex="-1">exclude <a class="header-anchor" href="#exclude" aria-hidden="true">#</a></h4><p>\u4E0D\u5305\u542B\uFF0C\u7528\u6765\u6307\u5B9A\u4E0D\u9700\u8981\u88AB\u7F16\u8BD1\u7684\u6587\u4EF6\u8B6C\u5982node\u6A21\u5757</p><h3 id="\u7F16\u8BD1\u5668\u9009\u9879" tabindex="-1">\u7F16\u8BD1\u5668\u9009\u9879 <a class="header-anchor" href="#\u7F16\u8BD1\u5668\u9009\u9879" aria-hidden="true">#</a></h3><p><code>compilerOptions</code>\u7F16\u8BD1\u5668\u9009\u9879\uFF0C\u51B3\u5B9A\u7F16\u8BD1\u5668\u5BF9ts\u7684\u7F16\u8BD1\u6548\u679C\uFF0C\u5176\u5305\u542B\u5B50\u9009\u9879\u6765\u9009\u62E9\u7F16\u8BD1\u6548\u679C</p><h4 id="target" tabindex="-1">target <a class="header-anchor" href="#target" aria-hidden="true">#</a></h4><p>\u76EE\u6807\uFF0C\u7528\u4E8E\u6307\u5B9A\u88AB\u7F16\u8BD1\u7684es\u7248\u672C</p><div class="language-"><pre><code>{
	&quot;compilerOptions&quot;:{
		&quot;target&quot;:&quot;ES6&quot;
	} 
}
</code></pre></div><h4 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-hidden="true">#</a></h4><p>\u6A21\u5757\u5316\u6807\u51C6</p><div class="language-"><pre><code>
</code></pre></div><h4 id="lib" tabindex="-1">lib <a class="header-anchor" href="#lib" aria-hidden="true">#</a></h4><p>\u6307\u5B9A\u9879\u76EE\u4E2D\u4F7F\u7528\u7684\u5E93</p><h4 id="outdir" tabindex="-1">outDir <a class="header-anchor" href="#outdir" aria-hidden="true">#</a></h4><p>\u7528\u6765\u6307\u5B9A\u7F16\u8BD1\u540E\u6587\u4EF6\u6240\u5728\u76EE\u5F55</p><div class="language-"><pre><code>{
	&quot;compilerOptions&quot;:{
		&quot;target&quot;:&quot;ES6&quot;,
		&quot;module&quot;:&quot;commonjs&quot;,
		&quot;outDir&quot;:&quot;./dist&quot;
	} 
}
</code></pre></div><h4 id="outfile" tabindex="-1">outFile <a class="header-anchor" href="#outfile" aria-hidden="true">#</a></h4><p>\u5C06\u4EE3\u7801\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u4EE3\u7801\u90FD\u4F1A\u5408\u5E76\u5230\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D\u3002</p><div class="language-"><pre><code>{
	&quot;compilerOptions&quot;:{
		&quot;target&quot;:&quot;ES6&quot;,
		&quot;module&quot;:&quot;amd&quot;,
		&quot;outDir&quot;:&quot;./dist&quot;,
		&quot;outFile&quot;:&quot;./dist/app.js&quot;
	} 
}
</code></pre></div><h4 id="allowjs" tabindex="-1">allowJs <a class="header-anchor" href="#allowjs" aria-hidden="true">#</a></h4><p>\u662F\u5426\u5BF9js\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\uFF0C\u9ED8\u8BA4\u4E3Afalse\u5373\u4E0D\u7F16\u8BD1</p><div class="language-"><pre><code>{
	&quot;compilerOptions&quot;:{
		&quot;target&quot;:&quot;ES6&quot;,
		&quot;module&quot;:&quot;amd&quot;,
		&quot;outDir&quot;:&quot;./dist&quot;,
		&quot;outFile&quot;:&quot;./dist/app.js&quot;,
		&quot;allowJs&quot;:false
	} 
}
</code></pre></div><h4 id="checkjs" tabindex="-1">checkJs <a class="header-anchor" href="#checkjs" aria-hidden="true">#</a></h4><p>\u662F\u5426\u68C0\u6D4Bjs\u6587\u4EF6\u8BED\u6CD5\uFF08\u4EE5ts\u89C4\u8303\u68C0\u6D4B\uFF09</p><div class="language-"><pre><code>{
	&quot;compilerOptions&quot;:{
		&quot;target&quot;:&quot;ES6&quot;,
		&quot;module&quot;:&quot;amd&quot;,
		&quot;outDir&quot;:&quot;./dist&quot;,
		&quot;outFile&quot;:&quot;./dist/app.js&quot;,
		&quot;allowJs&quot;:false,
		&quot;checkJs&quot;:false
	} 
}
</code></pre></div><h4 id="removecomments" tabindex="-1">removeComments <a class="header-anchor" href="#removecomments" aria-hidden="true">#</a></h4><p>\u662F\u5426\u79FB\u9664\u6CE8\u91CA</p><div class="language-"><pre><code>{
	&quot;compilerOptions&quot;:{
		&quot;target&quot;:&quot;ES6&quot;,
		&quot;module&quot;:&quot;amd&quot;,
		&quot;outDir&quot;:&quot;./dist&quot;,
		&quot;outFile&quot;:&quot;./dist/app.js&quot;,
		&quot;allowJs&quot;:false,
		&quot;checkJs&quot;:false,
		&quot;removeComments&quot;:true
	} 
}
</code></pre></div><h4 id="noemit" tabindex="-1">noEmit <a class="header-anchor" href="#noemit" aria-hidden="true">#</a></h4><p>\u4E0D\u751F\u6210\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\uFF0C\u6267\u884C\u7F16\u8BD1\u7684\u6B65\u9AA4\u4F46\u662F\u4E0D\u751F\u6210\u7F16\u8BD1\u540E\u4EA7\u751F\u7684js\u6587\u4EF6</p><h4 id="noemitonerror" tabindex="-1">noEmitOnError <a class="header-anchor" href="#noemitonerror" aria-hidden="true">#</a></h4><p>\u5F53\u4EE3\u7801\u6709\u9519\u8BEF\u7684\u65F6\u5019\u4E0D\u751F\u6210\u7F16\u8BD1\u540E\u7684\u6587\u4EF6</p><h4 id="alwaysstrict" tabindex="-1">alwaysStrict <a class="header-anchor" href="#alwaysstrict" aria-hidden="true">#</a></h4><p>\u8BBE\u7F6E\u7F16\u8BD1\u540E\u6587\u4EF6\u662F\u5426\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F</p><h4 id="noimplicitany" tabindex="-1">noImplicitAny <a class="header-anchor" href="#noimplicitany" aria-hidden="true">#</a></h4><p>\u662F\u5426\u5F00\u542F\u68C0\u67E5\u9690\u5F0Fany\u53D8\u91CF</p><h4 id="noimplicitthis" tabindex="-1">noImplicitThis <a class="header-anchor" href="#noimplicitthis" aria-hidden="true">#</a></h4><p>\u4E0D\u5141\u8BB8\u4E0D\u660E\u786E\u7C7B\u578B\u7684this</p><h4 id="strictnullchecks" tabindex="-1">strictNullChecks <a class="header-anchor" href="#strictnullchecks" aria-hidden="true">#</a></h4><p>\u4E25\u683C\u68C0\u67E5\u7A7A\u503C</p><h4 id="strict" tabindex="-1">strict <a class="header-anchor" href="#strict" aria-hidden="true">#</a></h4><p>\u53EF\u4EE5\u5F00\u542F\u6240\u4EE5\u4E25\u683C\u9009\u9879\u6A21\u5F0F</p>`,55),r=[d];function n(u,s,c,h,l,p){return a(),e("div",null,r)}var g=t(i,[["render",n]]);export{m as __pageData,g as default};
