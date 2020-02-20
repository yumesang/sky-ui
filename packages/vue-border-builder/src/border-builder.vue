<template>
  <div id="border-builder">
    <slot name="title"></slot>
    <img class="top-img" :src="topImg" />
    <div class="content-img" :style="{'background-image': 'url(' + contentImg + ')'}">
      <slot name="content"></slot>
    </div>
    <img class="bottom-img" :src="bottomImg" />
  </div>
</template>

<script>
export default {
  name: 'border-builder',
  props: {
    'topImg': {
      type: String,
      required: true
    },
    'contentImg': {
      type: String,
      required: true
    },
    'bottomImg': {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .top-img, .bottom-img, .content-img {
    width: 100%;
    vertical-align: middle;
  }

  .content-img {
    background-size: 100% auto;
    box-sizing: border-box;
    padding: .5rem 2.5rem;
  }
</style>
