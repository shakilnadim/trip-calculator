<template>
  <ion-grid class="btn-group">
    <ion-row>
      <ion-col>
        <ion-button expand="block" @click="openMoneyEntryModal('deposit')"
          >Add Deposit</ion-button
        >
      </ion-col>
      <ion-col>
        <ion-button expand="block" @click="openMoneyEntryModal('spending')"
          >Add Spending</ion-button
        >
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  modalController,
} from "@ionic/vue";
import MoneyEntryModal from "../components/MoneyEntryModal.vue";

export default {
  components: {
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },

  props: ["trip"],

  methods: {
    async openMoneyEntryModal(type) {
      const modal = await modalController.create({
        component: MoneyEntryModal,
        componentProps: {
          type,
        },
      });
      modal.present();
    },
  },
};
</script>

<style scoped></style>
