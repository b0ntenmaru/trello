<template>
  <div>
    <Draggable
      group="boards"
      draggable=".board-list"
      handle=".handle"
      :animation="300"
      class="draggable-wrapper"
    >
      <div v-for="(board, index) in value" :key="index" class="board-list">
        <div class="handle board-list-lane">
          {{ board.title }}
        </div>

        <Draggable group="items" :animation="300">
          <div v-for="(item, i) in board.items" :key="i">
            {{ item.name }}
          </div>
        </Draggable>
      </div>
    </Draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Draggable from 'vuedraggable';

export default Vue.extend({
  name: 'BoardList',

  components: {
    Draggable,
  },

  props: {
    value: {},
  },

  methods: {
    emitter(value: any) {
      this.$emit('input', value);
    },
  },
});
</script>

<style>
div.draggable-wrapper {
  display: flex;
}

div.board-list {
  width: 100%;
  display: inline-block;
  text-align: center;
  width: 34%;
}

div.board-list-lane {
  background: #ccc;
}

</style>
