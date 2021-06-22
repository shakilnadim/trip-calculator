<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ type }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="close()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <form @submit.prevent="addTrip">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Amount</ion-label>
          <ion-input
            type="number"
            min="1"
            v-model="amount"
            required
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Source</ion-label>
          <ion-select v-model="source" interface="action-sheet">
            <ion-select-option value="deposit" v-if="type === 'spending'"
              >Deposit</ion-select-option
            >
            <ion-select-option
              v-for="member in trip.members"
              :key="member.id"
              :value="member.id"
              >{{ member.name }}</ion-select-option
            >
          </ion-select>
        </ion-item>
      </ion-list>
    </form>
  </ion-content>
</template>

<script>
import {
  modalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
export default {
  props: ["type", "trip"],

  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
  },

  data: () => ({
    amount: null,
    source: null,
  }),

  methods: {
    async close(trip = null) {
      await modalController.dismiss(trip);
    },
  },

  mounted() {
    if (this.type === "spending") this.source = "deposit";
  },
};
</script>

<style></style>
