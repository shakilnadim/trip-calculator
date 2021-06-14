<template>
  <base-layout :title="trip.name" defaultBackLink="/">
    <ion-list v-if="trip.members?.length">
      <ion-title>Members</ion-title>
      <ion-item v-for="member in trip.members" :key="member.id">{{
        member.name
      }}</ion-item>
    </ion-list>
    <ion-button expand="block" @click="openMemberModal">Add Member</ion-button>
  </base-layout>
</template>

<script>
import {
  IonButton,
  modalController,
  IonItem,
  IonList,
  IonTitle,
} from "@ionic/vue";
import AddMember from "../components/AddMember.vue";

export default {
  components: {
    IonButton,
    IonItem,
    IonList,
    IonTitle,
  },

  data: () => ({
    trip: {},
  }),

  methods: {
    async openMemberModal() {
      const modal = await modalController.create({
        component: AddMember,
        cssClass: "my-custom-class",
        componentProps: {
          title: "Add Member",
          trip: this.trip,
        },
      });
      modal.present();
    },
  },

  created() {
    this.trip = JSON.parse(localStorage[this.$route.params.id]);
  },
};
</script>

<style></style>
