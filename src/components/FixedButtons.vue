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
} from "@ionic/vue";

export default {
  components: {
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },

  props: ["trip"],

  methods: {
    openMoneyEntryModal(type) {
      this.$emit('openMoneyEntryModal', type);
    },
  },
};
</script>

<style scoped></style>
