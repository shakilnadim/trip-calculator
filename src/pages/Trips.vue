<template>
  <base-layout title="Trips">
    <template v-slot:headerBtn>
      <ion-fab-button
        slot="end"
        color="primary"
        size="small"
        @click="openTripAddModal"
      >
        <svg class="ionicon" viewBox="0 0 512 512">
          <title>Add</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 112v288M400 256H112"
          />
        </svg>
      </ion-fab-button>
    </template>

    <ion-card
      v-for="(trip, i) in trips"
      :key="trip.id"
      :router-link="'/trips/' + trip.id"
    >
      <ion-img
        :src="'https://source.unsplash.com/random/40' + i + 'x150?' + trip.type"
      ></ion-img>
      <ion-card-header>
        <ion-card-title class="title">{{ trip.name }}</ion-card-title>
      </ion-card-header>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonFabButton,
  modalController,
} from "@ionic/vue";
import AddTrip from "../components/AddTrip";

export default {
  components: {
    IonCard,
    IonCardHeader,
    // IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonFabButton,
  },
  data: () => ({
    trips: [],
  }),
  methods: {
    getTrips() {
      let trips = Object.values(localStorage);
      let data = [];
      trips.forEach((trip) => {
        if (trip != "SILENT") data.push(JSON.parse(trip));
      });

      return data;
    },

    async openTripAddModal() {
      const modal = await modalController.create({
        component: AddTrip,
        cssClass: "my-custom-class",
        componentProps: {
          title: "Add Trip",
        },
      });
      modal.present();
      let dismissed = await modal.onDidDismiss();
      if (dismissed.data) {
        this.trips.push(dismissed.data);
      }
    },
  },
  created() {
    this.trips = this.getTrips();
  },
};
</script>

<style scoped>
.title {
  text-transform: capitalize;
}
</style>
