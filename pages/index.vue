<template>
  <div class="index">
    <div>
      <DepartmentList v-model="departments" />
    </div>
    <div class="tree-data">
      {{ departmentsTree }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async fetch() {
    this.departments = await fetch(
      `${process.env.baseUrl}/api/departments`
    ).then((res) => res.json());
  },

  data() {
    return {
      departments: null,
    };
  },

  computed: {
    departmentsTree() {
      return JSON.stringify(this.departments);
    },
  },

  watch: {
    departments: {
      handler(newVal, oldVal) {
        console.log('-------------------------')
        console.log(`new: ${JSON.stringify(newVal)}`);
        console.log(`old: ${JSON.stringify(oldVal)}}`);
      },
      deep: true,
    },
  },
});
</script>

<style scoped lang="scss">
div.tree-data {
  position: absolute;
  top: 50%;
}
</style>
