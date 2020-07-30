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
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "email-collection",
  data: () => {
    return {
      input: '',
      loading: false
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
        const response = await axios.post(url, formData)
        console.log('SUCCESS')
      } catch(e) {
        console.log('ERROR:', e.toString())
      }
    }
  }
}
</script>
