<template>
  <h3>WELCOME TO MISTY</h3>
</template>

<script>
import io from 'socket.io-client';

export default {
  data () {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('http://localhost:3000/')
    }
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      if (typeof data === 'object') {
        console.log('Data received \n' + JSON.stringify(data, null, 4), data)
      } else {
        console.log('Non-object Data received', data)
      }

      this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    });
  }
}
</script>

<style scoped>
</style>