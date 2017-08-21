import router from '../router.js'
export default {
  methods: {
    submitWithLoading(timeout, callback) {
      $('#btn-loader').click()
      setTimeout(() => {
        $('#btn-loader').click()
        callback()
      }, timeout)
    }
  }
}