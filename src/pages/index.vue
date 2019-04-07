<template>
  <a-row type="flex" justify="center">
      <div v-if="isLogin" class="info-block">Аутенфикация прошла успешно</div> 
      <div v-else class="info-block">Аутенфицируйтесь</div>
  </a-row>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.auth.isLogin
    }
  }
}
</script>


<style scoped>
.info-block {
  font-size: 18px;
}
</style>
