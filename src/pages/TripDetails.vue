<template>
  <base-layout :title="trip.name" defaultBackLink="/"> </base-layout>
</template>

<script>
export default {
  data: () => ({
    trip: {},
  }),

  created() {
    this.trip = JSON.parse(localStorage[this.$route.params.id]);
  },
};
</script>

<style></style>
