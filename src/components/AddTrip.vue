<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="close()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <form @submit.prevent="addTrip">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Trip Name</ion-label>
          <ion-input type="text" v-model="name" required></ion-input>
        </ion-item>
        <ion-radio-group v-model="type">
          <ion-list-header>
            <ion-label>Destination Type</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Mountain</ion-label>
            <ion-radio slot="start" value="mountain"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Beach</ion-label>
            <ion-radio slot="start" value="beach"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Waterfall</ion-label>
            <ion-radio slot="start" value="waterfall"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Others</ion-label>
            <ion-radio slot="start" value="trip"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-button type="submit" expand="block">Add</ion-button>
    </form>
  </ion-content>
</template>

<script>
import {
  IonItem,
  IonInput,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  modalController,
  IonButton,
  IonButtons,
} from "@ionic/vue";
import { v4 as uuid } from "uuid";
export default {
  components: {
    IonItem,
    IonInput,
    IonLabel,
    IonList,
    IonListHeader,
    IonRadio,
    IonRadioGroup,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
  },
  props: ["title"],

  data: () => ({
    name: "",
    type: "trip",
  }),

  methods: {
    async close(trip = null) {
      await modalController.dismiss(trip);
    },

    addTrip() {
      let trip = {
        id: uuid(),
        name: this.name,
        type: this.type,
        createdAt: new Date().getTime(),
      };

      localStorage[trip.id] = JSON.stringify(trip);
      this.close(trip);
    },
  },
};
</script>

<style></style>
