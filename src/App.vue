<template>
  <div id="app">
    <header></header>
    <div class="tab">
    I am tab
    </div>
    <div class="content">
    I am content
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  export default {
    components: {
      header: header
    }
  };
</script>

<style>
</style>
