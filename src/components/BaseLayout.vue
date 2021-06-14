<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <slot slot="end" name="headerBtn" />
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonBackButton,
  IonButtons,
  // IonIcon,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonBackButton,
    IonButtons,
    // IonIcon,
    // AddTrip,
  },
  props: ["title", "defaultBackLink"],

  data: () => ({
    show: false,
  }),
  methods: {},
};
</script>

<style></style>
