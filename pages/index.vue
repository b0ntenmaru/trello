<template>
  <div class="index">
    <BoardList v-model="boards" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async fetch() {
    // 環境によってパスの参照先を変えたい
    this.boards = await fetch(`${process.env.baseUrl}/api/boards`).then(res => res.json());
  },

  data() {
    return {
      boards: null,
    };
  },
});
</script>
