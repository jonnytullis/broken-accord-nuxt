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
