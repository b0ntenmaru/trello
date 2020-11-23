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
    this.boards = await fetch('http://trello-dev.ap-northeast-1.elasticbeanstalk.com/api/boards').then(res => res.json());
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