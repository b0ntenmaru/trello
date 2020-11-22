<template>
  <div class="index">
    <BoardList v-model="boards" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from '@nuxtjs/axios';

export default Vue.extend({

  async fetch() {
    this.boards = await fetch('http://localhost:3000/api/boards').then(res => res.json());
  },

  data() {
    return {
      boards: null
    }
  },
});
</script>

<style lang="scss" scoped>

</style>