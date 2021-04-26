<template>
  <div class="card card-w70">
    <div v-for="block in result" :key="block.text">
      <Title v-if="block.type==='title'" :text="block.text" />
      <Subtitle v-if="block.type==='subtitle'" :text="block.text" />
      <Avatar v-if="block.type==='avatar'" :src="block.text" />
      <Text v-if="block.type==='text'" :text="block.text" />
    </div>

    <h3 v-if="result.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import Text from '@/blocks/Text'
import Title from '@/blocks/Title'
import Subtitle from '@/blocks/Subtitle'
import Avatar from '@/blocks/Avatar'

export default {
  props: {
    result: Array
  },
  components: {
    Text, Title, Subtitle, Avatar
  }
}
</script>

<style scoped>

</style>
