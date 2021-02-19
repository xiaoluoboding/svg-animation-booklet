import{r as n,o as a,c as t,a as e,b as s}from"./app.2e8f5389.js";const l='{"title":"〰️ SVG 路径动画（Path）","description":"","frontmatter":{},"headers":[{"level":2,"title":"演示","slug":"演示"},{"level":2,"title":"原理","slug":"原理"},{"level":3,"title":"CSS 属性","slug":"css-属性"},{"level":3,"title":"SVG SMIL animation","slug":"svg-smil-animation"},{"level":2,"title":"实战","slug":"实战"},{"level":3,"title":"准备矢量文件","slug":"准备矢量文件"},{"level":3,"title":"注册插件","slug":"注册插件"},{"level":3,"title":"动起来","slug":"动起来"},{"level":2,"title":"参考","slug":"参考"}],"relativePath":"chapter6.md","lastUpdated":1608051975320}',o={},r=e("h1",{id:"〰️-svg-路径动画（path）"},[e("a",{class:"header-anchor",href:"#〰️-svg-路径动画（path）","aria-hidden":"true"},"#"),s(" 〰️ SVG 路径动画（Path）")],-1),c=e("h2",{id:"演示"},[e("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),s(" 演示")],-1),p=e("p",null,[e("img",{src:"/assets/chapter6-1.6d2b5685.gif",alt:"chapter6-1"})],-1),i=e("p",null,[s("我更喜欢把这种动画叫做"),e("strong",null,"路径跟随动画"),s("或者"),e("strong",null,"轨迹动画"),s("，正如你所看到的，一个元素（物体）沿着特定的路径（轨迹）进行运动。")],-1),u=e("h2",{id:"原理"},[e("a",{class:"header-anchor",href:"#原理","aria-hidden":"true"},"#"),s(" 原理")],-1),h=e("h3",{id:"css-属性"},[e("a",{class:"header-anchor",href:"#css-属性","aria-hidden":"true"},"#"),s(" CSS 属性")],-1),d=e("p",null,[s("如果想在 CSS 中让一个元素沿着路径运动，核心要用的的属性有两个，分别是 "),e("code",null,"offset-path"),s(" 、"),e("code",null,"offset-distance"),s(" 。")],-1),k=e("p",null,[e("code",null,"offset-path"),s(" 这个属性接受一个 "),e("code",null,"path"),s(" 用于指定元素的运动轨迹。")],-1),g=e("p",null,[e("code",null,"offset-distance"),s(" 这个属性声明了元素沿着路径运动的距离。常用 "),e("code",null,"100%"),s(" 表示路径总长度。")],-1),f=e("p",null,[s("这和上一章节介绍的 "),e("strong",null,"SVG 描边动画"),s(" 原理很类似，甚至核心用到的属性都用了相同的关键字 "),e("code",null,"offset")],-1),m=e("p",null,[s("其实 "),e("code",null,"offset-path"),s(" 这个属性都前身叫做 "),e("code",null,"motion-path"),s(" ，并且所有 "),e("code",null,"motion-*"),s(" 相关都属性都改为了 "),e("code",null,"offset-*")],-1),S=e("h3",{id:"svg-smil-animation"},[e("a",{class:"header-anchor",href:"#svg-smil-animation","aria-hidden":"true"},"#"),s(" SVG SMIL animation")],-1),v=e("p",null,[s("SVG SMIL animation 中定义了更简单的方式实现路径动画，使用 "),e("code",null,"animateMotion"),s(" 元素。同样可以定义一个 "),e("code",null,"path"),s(" 指定了元素运动的轨迹。")],-1),b=e("h2",{id:"实战"},[e("a",{class:"header-anchor",href:"#实战","aria-hidden":"true"},"#"),s(" 实战")],-1),P=e("p",null,[s("下面我们使用 GreenSock 来实现火箭🚀沿着路径运动的路径动画，GreenSock 中使用 "),e("code",null,"MotionPathPlugin"),s(" 实现路径动画，他支持让任何 Dom、SVG、Canvas 等元素动起来")],-1),G=e("h3",{id:"准备矢量文件"},[e("a",{class:"header-anchor",href:"#准备矢量文件","aria-hidden":"true"},"#"),s(" 准备矢量文件")],-1),M=e("p",null,"我们需要准备两个矢量文件：",-1),C=e("ul",null,[e("li",null,"火箭🚀： 需要运动的元素"),e("li",null,"路径：火箭的运动轨迹")],-1),V=e("p",null,[s("火箭我们可以在 "),e("a",{href:"https://openmoji.org/library/#search=rocket",target:"_blank",rel:"noopener noreferrer"},"OpenMoji"),s(" 或者 "),e("a",{href:"https://icons8.com/icons/set/rocket",target:"_blank",rel:"noopener noreferrer"},"icons8"),s(" 查询获取：")],-1),A=e("p",null,[e("img",{src:"/assets/chapter6-2.aabf81c1.png",alt:"chapter6-2"})],-1),j=e("p",null,"路径比较简单，在 Sketch 中画一条路径，拷贝出路径代码",-1),L=e("p",null,[e("img",{src:"/assets/chapter6-3.9416cb4e.png",alt:"chapter6-3"})],-1),_=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("path")]),s(),e("span",{class:"token attr-name"},"d"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("M254.176965,724.703501 C344.518264,740.446962 426.933366,723.447117 501.422273,673.703966 C613.155634,599.08924 556.372552,480.989479 673.298424,465.529966 C790.224296,450.070453 833.25236,631.21486 973.972003,584.009185 C1067.7851,552.538735 1124.45691,434.26844 1143.98743,229.1983"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("rocket-path"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("path")]),e("span",{class:"token punctuation"},">")]),s("\n")])])],-1),D=e("h3",{id:"注册插件"},[e("a",{class:"header-anchor",href:"#注册插件","aria-hidden":"true"},"#"),s(" 注册插件")],-1),Q=e("p",null,[s("在使用 "),e("code",null,"MotionPathPlugin"),s(" 时需要先注册插件")],-1),x=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// register the plugin (just once)"),s("\ngsap"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"registerPlugin"),e("span",{class:"token punctuation"},"("),s("MotionPathPlugin"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s("\n")])])],-1),I=e("h3",{id:"动起来"},[e("a",{class:"header-anchor",href:"#动起来","aria-hidden":"true"},"#"),s(" 动起来")],-1),K=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// 指定要运动都元素"),s("\ngsap"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"to"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"#rocket"'),e("span",{class:"token punctuation"},","),s(),e("span",{class:"token punctuation"},"{"),s("\n  duration"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token number"},"3.3"),e("span",{class:"token punctuation"},","),s(" \n  repeat"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),s("\n  ease"),e("span",{class:"token operator"},":"),s(" Linear"),e("span",{class:"token punctuation"},"."),s("easeNone"),e("span",{class:"token punctuation"},","),s("\n  motionPath"),e("span",{class:"token operator"},":"),e("span",{class:"token punctuation"},"{"),s("\n    path"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"#rocket-path"'),e("span",{class:"token punctuation"},","),s(),e("span",{class:"token comment"},"// 沿着轨迹运动"),s("\n    align"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"#rocket-path"'),e("span",{class:"token punctuation"},","),s("\n    autoRotate"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),s("\n    alignOrigin"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"0.5"),e("span",{class:"token punctuation"},","),s(),e("span",{class:"token number"},"0.5"),e("span",{class:"token punctuation"},"]"),s("\n  "),e("span",{class:"token punctuation"},"}"),s("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s("\n")])])],-1),U=e("h2",{id:"参考"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),Y=e("ul",null,[e("li",null,[e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path",target:"_blank",rel:"noopener noreferrer"},"MDN offset-path")]),e("li",null,[e("a",{href:"https://css-tricks.com/almanac/properties/o/offset-path/",target:"_blank",rel:"noopener noreferrer"},"css-tricks offset-path")]),e("li",null,[e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion",target:"_blank",rel:"noopener noreferrer"},"animateMotion")]),e("li",null,[e("a",{href:"https://greensock.com/motionpath/",target:"_blank",rel:"noopener noreferrer"},"GreenSock MotionPathPlugin")])],-1);o.render=function(s,l,o,q,y,z){const E=n("EmbedCodepen");return a(),t("div",null,[r,c,p,i,u,h,d,k,g,f,m,e(E,{title:"CSS Animating Along a Path Demo",pen:"LYpQXxL"}),S,v,e(E,{title:"SVG Animating Along a Path Demo",pen:"dyYdQYR"}),b,P,G,M,C,V,A,j,L,_,D,Q,x,I,K,e(E,{title:"GSAP Animating Along a Path Demo",pen:"KKdQrQK",height:480}),U,Y])};export default o;export{l as __pageData};