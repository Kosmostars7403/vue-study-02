<template>
  <div class="card card-w70">
    <div v-for="block in result" :key="block.text">
      <component :is="'app-' + block.type" :text="block.text"></component>
    </div>

    <h3 v-if="result.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import AppText from '@/blocks/AppText'
import AppTitle from '@/blocks/AppTitle'
import AppSubtitle from '@/blocks/AppSubtitle'
import AppAvatar from '@/blocks/AppAvatar'

export default {
  props: {
    result: Array
  },
  components: {
    AppText, AppTitle, AppSubtitle, AppAvatar
  }
}
</script>

<style scoped>

</style>
