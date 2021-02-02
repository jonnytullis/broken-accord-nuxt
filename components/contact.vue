<template>
  <v-container>
    <h1 class="mb-2">Booking</h1>
    <h3>Interested in learning more? &nbsp;<br v-if="$vuetify.breakpoint.xsOnly">Reach out to our team</h3>
    <v-row justify="center" class="mt-3">
      <v-list rounded :width="$vuetify.breakpoint.smAndDown ? '100%' : '50%'">
        <v-list-item href="tel:1-801-717-9043">
          <v-list-item-icon>
            <v-icon large>mdi-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <u>(801) 717-9043</u>
          </v-list-item-title>
        </v-list-item>
        <v-list-item :href="`sms:+18664504185&body=${defaultMessage}`">
          <v-list-item-icon>
            <v-icon large>mdi-message</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <u>(801) 717-9043</u>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list rounded :width="$vuetify.breakpoint.smAndDown ? '100%' : '50%'">
        <v-list-item :href="`mailto: brokenaccordband@gmail.com?subject=${defaultSubject}&body=${defaultMessage}`">
          <v-list-item-icon>
            <v-icon large>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <u>brokenaccordband@gmail.com</u>
          </v-list-item-title>
        </v-list-item>
        <v-list-item href="https://www.google.com/maps/place/Provo,+UT/@40.2574448,-111.7089491,12z/data=!3m1!4b1!4m5!3m4!1s0x874d9271930bf1bf:0x1d90f12600b556ef!8m2!3d40.2338438!4d-111.6585337">
          <v-list-item-icon>
            <v-icon large>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <u>Provo, UT</u>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "contact",
  data: () => {
    return {
      defaultMessage: "Hi, I'd like to learn more about booking your band for a show.",
      defaultSubject: "Send me information"
    }
  }
}
</script>
