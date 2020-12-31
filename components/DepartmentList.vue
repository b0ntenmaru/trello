<template>
  <div>
    <!-- draggableとhandleは不要かも -->
    <Draggable
      group="departments"
      :animation="300"
      class="draggable-wrapper"
      :value="value"
      @input="emitter"
    >
      <div
        v-for="(department, index) in value"
        :key="index"
        class="department-list"
      >
        <div class="handle department-list-lane">
          {{ department.name }}
        </div>
        <div class="department-children">
          <DepartmentList v-model="department.children" />
        </div>
      </div>
    </Draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Draggable from 'vuedraggable';

export default Vue.extend({
  name: 'DepartmentList',

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

div.department-list {
  width: 100%;
  display: inline-block;
  text-align: center;
}

div.department-list-lane {
  background: #ccc;
}
</style>
