import{_ as n,c as s,o as a,d as t}from"./app.460d1d0d.js";const m='{"title":"\u9762\u5411\u5BF9\u8C61","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u62BD\u8C61\u7C7B","slug":"\u62BD\u8C61\u7C7B"},{"level":2,"title":"\u63A5\u53E3","slug":"\u63A5\u53E3"},{"level":2,"title":"\u5C5E\u6027\u5C01\u88C5","slug":"\u5C5E\u6027\u5C01\u88C5"},{"level":2,"title":"\u6CDB\u578B","slug":"\u6CDB\u578B"}],"relativePath":"front-end-learn/Typescript/03-\u9762\u5411\u5BF9\u8C61.md"}',e={},p=t(`<h1 id="\u9762\u5411\u5BF9\u8C61" tabindex="-1">\u9762\u5411\u5BF9\u8C61 <a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a></h1><h2 id="\u62BD\u8C61\u7C7B" tabindex="-1">\u62BD\u8C61\u7C7B <a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u88AB\u7EE7\u627F\u7684\u7C7B\u88AB\u7406\u89E3\u4E3A\u62BD\u8C61\u7C7B\uFF0C\u5728\u58F0\u660E\u8BE5\u7C7B\u524D\u6DFB\u52A0\u4E00\u4E2A<code>abstract</code>\uFF0C\u8BE5\u7C7B\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316\uFF0C\u5373\u65E0\u6CD5\u88AB\u521B\u5EFA\u5BF9\u8C61\u3002</p><div class="language-"><pre><code>abstract class Animal {
	name:string,
	constructor(name:string) {
		this.name = name
	}
	abstract sayHello():void
}
class Dog extends Animal {
	age:number;
	constructor(name:string,age:number) {
		super(name)
		this.age = age
	}
}
</code></pre></div><p>\u5F53\u7136\u6211\u4EEC\u53EF\u4EE5\u5728\u5927\u7C7B\u4E2D\u53EF\u4EE5\u4F7F\u7528<code>abstract</code>\u6765\u62BD\u8C61\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5982\u679C\u7EE7\u627F\u7C7B\u6CA1\u6709\u58F0\u660E\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u4F1A\u62A5\u9519</p><h2 id="\u63A5\u53E3" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u6765\u5B9A\u4E49\u4E00\u4E2A\u7C7B\uFF0C\u4E14\u63A5\u53E3\u662F\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\u7684\uFF0C\u91CD\u590D\u58F0\u660E\u540E\u53EF\u4EE5\u5408\u5E76\u5728\u4E00\u8D77\u3002</p><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">myinter</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">myinter</span> <span class="token punctuation">{</span>
    gender<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span> myinter <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&quot;cxy&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span><span class="token string">&quot;111&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728\u58F0\u660E\u7C7B\u7684\u65F6\u5019\u6EE1\u8DB3\u6211\u4EEC\u5B9A\u4E49\u7684\u63A5\u53E3</p><div class="language-typescript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Obj</span> <span class="token keyword">implements</span> <span class="token class-name">muinter</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5C5E\u6027\u5C01\u88C5" tabindex="-1">\u5C5E\u6027\u5C01\u88C5 <a class="header-anchor" href="#\u5C5E\u6027\u5C01\u88C5" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u5BF9\u8C61\u7684\u5C5E\u6027\u53EF\u4EE5\u968F\u610F\u6539\u53D8\u8FD9\u4EF6\u4E8B\u60C5\u6211\u4EEC\u5DF2\u7ECF\u4E60\u4EE5\u4E3A\u5E38\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u6211\u4EEC\u7684\u5BF9\u8C61\u5C5E\u6027\u4F1A\u5341\u5206\u4E0D\u5B89\u5168\uFF0C\u4F46\u662F\u5C5E\u6027\u7684\u5C01\u88C5\u53EF\u4EE5\u5B8C\u7F8E\u5730\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E3A\u5C5E\u6027\u6DFB\u52A0\u4FEE\u9970\u7B26\uFF1A<code>public</code>\uFF0C<code>private</code></p><p><code>public</code>\u53EF\u4EE5\u5C06\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u516C\u6709\u5C5E\u6027\uFF0C\u4EFB\u610F\u8BBF\u95EE\u4FEE\u6539\uFF0C<code>private</code>\u53EF\u4EE5\u5C06\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u79C1\u6709\u5C5E\u6027\uFF0C\u53EA\u80FD\u5728\u5BF9\u8C61\u5185\u8BBF\u95EE\u4FEE\u6539\u3002</p><h2 id="\u6CDB\u578B" tabindex="-1">\u6CDB\u578B <a class="header-anchor" href="#\u6CDB\u578B" aria-hidden="true">#</a></h2><p>\u5982\u679C\u51FD\u6570\u7684\u8FD4\u56DE\u7C7B\u578B\u4E0D\u786E\u5B9A\u5C31\u53EF\u4EE5\u5E94\u7528\u5230\u6CDB\u578B</p><div class="language-typescript"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">K</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span>t <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4E3A\u6CDB\u578B\u6DFB\u52A0\u7EA6\u675F</p><div class="language-typescript"><pre><code><span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">112</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6216\u8005\u901A\u8FC7\u5B9A\u4E49\u63A5\u53E3\u6765\u7EA6\u675F</p><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Inter</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Inter<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728\u5BF9\u8C61\u4E2D\u4F7F\u7528\u6CDB\u578B</p><div class="language-typescript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Ny<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ny<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;hhh&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`,23),o=[p];function c(l,r,i,u,k,d){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
