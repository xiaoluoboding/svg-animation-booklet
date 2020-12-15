module.exports = {
  title: 'SVG 动画开发实战',
  description: '专注于有关 SVG 的动画开发，探究 SVG 开发常见动画的原理，站在巨人的肩膀上，借助 GSAP 进行丰富的动画开发。',
  // base: '/svg-animation-booklet/',
  themeConfig: {
    nav: [
      {
        text: '小册', link: 'overview'
      },
      {
        text: 'Notion 版本', link: 'https://bit.ly/3hLiu4D'
      },
      {
        text: '前端技术栈月刊', link: 'https://github.com/xiaoluoboding/monthly'
      },
      {
        text: 'GitHub', link: 'https://github.com/xiaoluoboding/svg-animation-booklet'
      }
    ],
    sidebar: [
      { text: '📖 小册介绍', link: '/overview' },
      { text: '📋 SVG 基本介绍', link: '/chapter1' },
      { text: '📃 SVG 文件输出', link: '/chapter2' },
      { text: '🚀 SVG 文件优化', link: '/chapter3' },
      { text: '🪀 使用 GreenSock 制作动画', link: '/chapter4' },
      { text: '✏️ SVG 描边动画（Stroke)', link: '/chapter5' },
      { text: '〰️ SVG 路径动画（Path）', link: '/chapter6' },
      { text: '⭐ SVG 变形动画（Morphing）', link: '/chapter7' },
      { text: '✨ SVG 闪烁动画 (Blink)', link: '/chapter8' },
      { text: '🖼️ SVG 图案动画（Pattern）', link: '/chapter9' },
      { text: '🤟 Vue + GSAP 实战', link: '/chapter10' },
    ]
  }
}
