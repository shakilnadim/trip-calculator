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
    <form @submit.prevent="addMember">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Member Name</ion-label>
          <ion-input type="text" v-model="name" required></ion-input>
        </ion-item>
      </ion-list>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Deposit</ion-label>
          <ion-input type="number" v-model="deposit"></ion-input>
        </ion-item>
      </ion-list>
      <ion-button type="submit" expand="block">Add</ion-button>
    </form>
  </ion-content>
</template>

<script>
import {
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
  modalController,
} from "@ionic/vue";
import { v4 as uuid } from "uuid";

export default {
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
  },

  props: ["title", "trip"],

  data: () => ({
    name: "",
    deposit: 0,
  }),

  methods: {
    async close() {
      await modalController.dismiss();
    },

    addMember() {
      let trip = this.trip;
      let member = {
        id: uuid(),
        name: this.name,
        deposit: this.deposit,
      };

      if (trip.members) {
        trip.members.push(member);
      } else {
        trip.members = [member];
      }
      localStorage[trip.id] = JSON.stringify(trip);
      this.close();
    },
  },
};
</script>

<style></style>
