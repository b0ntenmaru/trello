<template>
  <div class="index">
    <BoardList v-model="boards" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from '@nuxtjs/axios';

export default Vue.extend({

  // async fetch() {
  //   this.boards = await fetch(
  //     'http://localhost:8080/'
  //   ).then(res => res.json());
  // },

  data() {
    return {
      boards: [
        {
          id: '1',
          title: 'レーン１',
          items: [
            {id: '1', name: 'ほげほげ'},
            {id: '2', name: 'いいいい'},
          ]
        },
        {
          id: '2',
          title: 'レーン2',
          items: [
            {id: '3', name: 'うううう'},
            {id: '4', name: 'ええええ'},
          ]
        },
        {
          id: '3',
          title: 'レーン3',
          items: [
            {id: '5', name: 'おおおお'},
          ]
        },
      ]
    }
  },
});
</script>

<style lang="scss" scoped>

</style>