<template>
  <div class="index">
    <DepartmentList v-model="departments" />
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
});
</script>
