<template>
  <iframe
    :height="height"
    style="width: 100%;"
    scrolling="no"
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
    :src="src"
    :title="title"
  >
    See the Pen <a :href='href'>SVG shapes</a> by xiaoluoboding
    (<a href='https://codepen.io/xiaoluoboding'>@xiaoluoboding</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
</template>

<script>
import { ref, computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'EmbedCodepen',
  props: {
    pen: String,
    title: String,
    height: { type: Number, default: 336 }
  },
  setup (props) {
    const src = computed(() => {
      return `https://codepen.io/xiaoluoboding/embed/${props.pen}?height=${props.height}&theme-id=light&default-tab=result`
    })

    const href = computed(() => {
      return `https://codepen.io/xiaoluoboding/pen/${props.pen}`
    })

    return {
      src,
      href
    }
  }
})
</script>

<style scoped>

</style>