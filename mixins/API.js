import axios from "axios";

export default {
  data () {
    return {
      numEmailSaveAttempts: 0
    }
  },
  methods: {
    async _saveEmail(email) {
      if (!this._isValidEmail(email)) {
        throw new Error('Invalid Email')
      }
      const inputString = email.replace('@', '%40')
      const formData = `emailAddress=${inputString}&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22644132868472797057%22%5D%0D%0A&pageHistory=0&fbzx=6449132868472797057`

      const url = 'https://docs.google.com/forms/d/e/1FAIpQLScsS8pIj--rAM9LqHSOUFkBsXX7evV69-P90cfn-YB4iK2fMw/formResponse'
      try {
        this.numEmailSaveAttempts++
        await axios.post(url, formData)
      } catch(e) {
        if (e.response) {
          // It's an actual error, not just CORS
          if (this.numEmailSaveAttempts < 2) {
            await this._saveEmail(email)
          } else {
            throw e
          }
        } else {
          // SUCCESS
          this.numEmailSaveAttempts = 0
        }
      }
    },
    _isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
