<template>
  <div class="container column">

    <constructor-controls
      @createNewBlock="addBlock"
    ></constructor-controls>

    <constructor-result
      :result="resultCV"
    ></constructor-result>

  </div>

  <div class="container">
    <p>
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
    </p>

    <app-comments
      :comments="comments"
      v-if="showComments"
      :loading="commentsLoading"
    ></app-comments>

  </div>
</template>

<script>
import ConstructorControls from '@/ConstructorControls'
import ConstructorResult from '@/ConstructorResult'
import AppComments from '@/AppComments'
import axios from 'axios'

export default {
  data() {
    return {
      comments: [],
      commentsLoading: false,
      showComments: false,
      resultCV: []
    }
  },
  components: {
    ConstructorControls,
    ConstructorResult,
    AppComments
  },
  methods: {
    async loadComments() {
      this.showComments = true
      this.commentsLoading = true
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')
        this.comments = data
      } catch (e) {
        console.log(e)
      } finally {
        this.commentsLoading = false
      }
    },
    addBlock(block) {
      this.resultCV.push(block)
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
