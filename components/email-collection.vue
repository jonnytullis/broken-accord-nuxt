<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="input"
        label="Email"
        type="email"
        dense
        outlined
        color="light"
      />
    </v-form>
    <v-btn @click="submit">Submit</v-btn>

    <!-- Error Snackbar -->
    <v-snackbar
      v-model="showError"
      color="red darken-2"
      timeout="7000"
    >
      <div style="font-size: 16px;">
        We encountered an error while saving your email address. Please try again later.
      </div>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "email-collection",
  data: () => {
    return {
      input: '',
      loading: false,
      numSubmissionAttempts: 0,
      showError: false
    }
  },
  methods: {
    // Spreadsheet ID: 1ECCwpiU7qizNdKC1bV_4vY0XvE1i7f_qCN9XBcQ3104
    // API Key:        AIzaSyD4-j16_BtCVqs_fMjRRQC7erNbFPRRJSA
    // Client ID:      627118985973-kb7kpkc5r94k2r9j0kif0ngks0fotnhq.apps.googleusercontent.com

    async submit() {
      let inputString = this.input.replace('@', '%40')
      let formData = `emailAddress=${inputString}&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22644132868472797057%22%5D%0D%0A&pageHistory=0&fbzx=6449132868472797057`

      const url = 'https://docs.google.com/forms/d/e/1FAIpQLScsS8pIj--rAM9LqHSOUFkBsXX7evV69-P90cfn-YB4iK2fMw/formResponse'
      try {
        this.numSubmissionAttempts++
        const response = await axios.post(url, formData)
      } catch(e) {
        if (e.response) {
          // It's an actual error, not just CORS
          if (this.numSubmissionAttempts < 2) {
            await this.submit()
          } else {
            this.showError = true
          }
        }
      }
    }
  }
}
</script>
