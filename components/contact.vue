<template>
  <v-container fluid class="pa-0">
    <h1 class="mb-2">Booking</h1>
    <h3>Want to schedule a show? &nbsp;Reach out to our team</h3>
    <v-layout justify-center>
      <div style="max-width: 300px;">
        <v-layout justify-start align-center class="mt-4">
          <v-btn
            x-large
            icon
            href="mailto: brokenaccordband@gmail.com"
            class="mr-3"
          >
            <v-icon large>mdi-email</v-icon>
          </v-btn>
          brokenaccordband@gmail.com
        </v-layout>
        <v-layout justify-start align-center class="mt-4">
          <v-btn
            x-large
            icon
            href="tel:1-801-717-9043"
            class="mr-3"
          >
            <v-icon large>mdi-phone</v-icon>
          </v-btn>
          (801) 717-9043
        </v-layout>
        <v-layout justify-start align-center class="mt-4">
          <v-btn
            x-large
            icon
            href="https://www.google.com/maps/place/Provo,+UT/@40.2574448,-111.7089491,12z/data=!3m1!4b1!4m5!3m4!1s0x874d9271930bf1bf:0x1d90f12600b556ef!8m2!3d40.2338438!4d-111.6585337"
            class="mr-3"
          >
            <v-icon large>mdi-map-marker</v-icon>
          </v-btn>
          Provo, UT
        </v-layout>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: "contact"
}
</script>
