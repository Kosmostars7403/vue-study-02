<template>
  <form class="card card-w30" @submit.prevent="addBlock">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="blockType">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="blockInput"></textarea>
    </div>

    <button class="btn primary" :disabled="minLength">Добавить</button>
  </form>
</template>

<script>
export default {
  emits: ['createNewBlock'],
  data() {
    return {
      blockType: 'title',
      blockInput: ''
    }
  },
  methods: {
    addBlock() {
      console.log(this.blockType, this.blockInput)
      this.$emit(
        'createNewBlock',
        {
          type: this.blockType,
          text: this.blockInput
        }
      )
      this.blockType = 'title'
      this.blockInput = ''
    }
  },
  computed: {
    minLength() {
      return this.blockInput.length < 3
    }
  }
}
</script>

<style scoped>

</style>
