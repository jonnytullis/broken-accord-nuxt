<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-row justify="center" class="my-4">
        <h3>Get notified when new <br v-if="$vuetify.breakpoint.xsOnly" /> songs are released</h3>
      </v-row>
      <v-row>
        <v-text-field
          ref="textField"
          v-model="input"
          label="Email"
          type="email"
          dense
          outlined
          :error-messages="inputError"
          color="light"
        >
          <template #append>
            <v-progress-circular v-if="loading" indeterminate size="24" width="3" />
          </template>
        </v-text-field>
        <v-btn type="submit" class="ms-4 mt-1">Submit</v-btn>
      </v-row>
    </v-form>

    <!-- Error Snackbar -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="snackbarTimeout || -1"
    >
      <div style="font-size: 22px; font-weight: bold; margin-bottom: 5px;">{{ snackbarTitle}}</div>
      <div style="font-size: 16px;">{{ snackbarText }}</div>
    </v-snackbar>
  </v-container>
</template>

<script>
import API from '../mixins/API'

export default {
  mixins: [ API ],
  name: "email-collection",
  data: () => {
    return {
      input: '',
      loading: false,
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
      this.loading = true
      this.inputError = ''
      try {
        await this._saveEmail(this.input)
        this.showSuccess()
        this.input = ''
      } catch(e) {
        if (e.message.toLowerCase().includes('invalid email')) {
          this.showInvalidEmailError()
        } else {
          this.showUnknownError()
        }
      } finally {
        this.loading = false
      }
    },
    showInvalidEmailError() {
      this.inputError = 'Invalid Email'
      setTimeout(() => {
        this.inputError = ''
      }, 3000)
    },
    showUnknownError() {
      this.snackbarColor = 'error'
      this.snackbarTitle = 'Error'
      this.snackbarText = 'We encountered an error while saving your email address. Please try again later.'
      this.snackbarTimeout = 7000
      this.snackbar = true
    },
    showSuccess() {
      this.snackbarColor = 'success'
      this.snackbarTitle = 'Thank You! You\'ll hear from us soon!'
      this.snackbarText = `Submitted '${this.input}'`
      this.snackbarTimeout = 5000
      this.snackbar = true
    }
  }
}
</script>
