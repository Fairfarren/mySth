export default {
  data () {
    return {
      say: 'hello'
    }
  },
  methods: {
    saySth(sth = this.say) {
      console.log(`say${sth}`)
    }
  },
  mounted () {
    this.saySth()
  }
}
