<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    <div>
      {{ reverseMessage }}
    </div>
    <input v-model="message" />
    <!-- <button>反转字符串</button> -->

    <div>
      <span :title="hoverMessage"
        >鼠标悬停几秒钟查看此处动态绑定的提示信息！</span
      >
    </div>
    <p v-if="seen">现在你看到我了</p>
    <ol>
      <LearnViewItem v-for="item in todos" :todo="item" :key="item.id" />
    </ol>
    <LoadingDots />
  </div>
</template>

<script lang="ts">
import LearnViewItem from '@/views/LearnViewItem.vue'
import LoadingDots from '@/views/LoadingDots.vue'

export default {
  data: () => ({
    message: 'Hello World!',
    hoverMessage: 'hover',
    seen: true,
    todos: [
      { id: 0, text: '学习 JavaScript' },
      { id: 1, text: '学习 Vue' },
      { id: 2, text: '整个牛项目' },
    ],
  }),
  methods: {
    // reverseMessage() {
    //   console.log(this)
    //   this.message = this.message.split('').reverse().join('')
    // },
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('')
    },
  },
  components: {
    LearnViewItem,
    LoadingDots,
  },
  beforeCreate() {
    // console.log('beforeCreate', this.message)
  },
  created() {
    // `this` 指向 vm 实例
    console.log('created', this.message)
  },
  beforeMount() {
    console.log('beforeMount', this.message)
  },
  mounted() {
    console.log('mounted', this.message)
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.message)
  },
  updated() {
    console.log('updated', this.message)
  },
  beforeDestroy() {
    console.log('beforeDestroy', this.message)
  },
  destroyed() {
    console.log('destroyed', this.message)
  },
}
</script>

<style scoped>
.message {
  font-size: 20px;
}
</style>
