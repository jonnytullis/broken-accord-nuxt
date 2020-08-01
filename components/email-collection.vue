<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field
        ref="textField"
        v-model="input"
        label="Email"
        type="email"
        autofocus
        dense
        outlined
        :error-messages="inputError"
        color="light"
      >
        <template #append>
          <v-progress-circular v-if="loading" indeterminate size="24" width="3" />
        </template>
      </v-text-field>
    </v-form>
    <v-btn @click="submit">Submit</v-btn>

    <!-- Error Snackbar -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="snackbarTimeout"
    >
      <div style="font-size: 22px; font-weight: bold; margin-bottom: 5px;">{{ snackbarTitle}}</div>
      <div style="font-size: 16px;">{{ snackbarText }}</div>
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
      snackbar: false,
      snackbarColor: '',
      snackbarText: '',
      snackbarTitle: '',
      snackbarTimeout: 0,
      inputError: ''
    }
  },
  methods: {
    async submit() {
      if (!this.isValidEmail(this.input)) {
        this.inputError = 'Invalid Email'
        return
      }
      this.loading = true
      this.inputError = ''
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
            this.showError()
            this.snackbar = true
          }
        } else {
          this.showSuccess()
          this.input = ''
          if (this.$refs.textField) {
            console.log(this.$refs.textField)
          }
        }
      } finally {
        this.loading = false
      }
    },
    isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    showError() {
      this.snackbarColor = 'error'
      this.snackbarTitle = 'Error'
      this.snackbarText = 'We encountered an error while saving your email address. Please try again later.'
      this.snackbarTimeout = 7000
      this.snackbar = true
    },
    showSuccess() {
      this.snackbarColor = 'success'
      this.snackbarTitle = 'Thank You'
      this.snackbarText = 'We love our fans!'
      this.snackbarTimeout = 3000
      this.snackbar = true
    }
  }
}
</script>
