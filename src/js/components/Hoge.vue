<template>
  <div>
    <p>{{count}}</p>
    <router-link to="/">hello</router-link>
  </div>
</template>

<script>
export default {
  name: 'Hoge',
  computed: {
    count: function() {
        return this.$store.state.count;
    }
  }
}
</script>

<style lang="scss">
</style>