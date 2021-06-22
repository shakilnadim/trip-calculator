<template>
  <base-layout :title="trip.name" defaultBackLink="/">
    <ion-list v-if="trip.members?.length">
      <ion-title>Members</ion-title>
      <ion-item v-for="member in trip.members" :key="member.id">{{
        member.name
      }}</ion-item>
    </ion-list>
    <ion-button expand="block" @click="openMemberModal">Add Member</ion-button>
    <div class="fixed-buttons">
      <fixed-buttons
        :trip="trip"
        @openMoneyEntryModal="openMoneyEntryModal"
      ></fixed-buttons>
    </div>
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
import FixedButtons from "../components/FixedButtons.vue";
import MoneyEntryModal from "../components/MoneyEntryModal.vue";

export default {
  components: {
    IonButton,
    IonItem,
    IonList,
    IonTitle,
    FixedButtons,
  },

  data: () => ({
    trip: {},
  }),

  methods: {
    async openMemberModal() {
      const modal = await modalController.create({
        component: AddMember,
        componentProps: {
          title: "Add Member",
          trip: this.trip,
        },
      });
      modal.present();
    },

    async openMoneyEntryModal(type) {
      const modal = await modalController.create({
        component: MoneyEntryModal,
        componentProps: {
          type,
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

<style scoped>
.fixed-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1px;
}
</style>
