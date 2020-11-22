<template>
  <div>
    <Draggable 
      group="boards"
      draggable=".board-list"
      handle=".handle"
      :animation="300"
      class="draggable-wrapper"
    >
      <div v-for="(board, index) in value" class="board-list" :key="index">
        <div class="handle board-list-lane">
          {{ board.title }}
        </div>

        <Draggable group="items" :animation="300">
          <div v-for="(item, index) in board.items" :key="index">
            {{ item.name }}
          </div>
        </Draggable>
      </div>
    </Draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Draggable from 'vuedraggable'

export default Vue.extend({
  name: "BoardList",

  components: {
    Draggable,
  },

  props: {
    value: {}
  },

  methods: {
    emitter(value: any) {
      this.$emit("input", value);
    },
  }
});
</script>

<style lang="scss">
div.draggable-wrapper {
  display: flex;

  div.board-list {
    width: 100%;
    display: inline-block;
    text-align: center;
    width: 34%;
  }

  div.board-list-lane {
    background: #ccc;
  }  
}

</style>