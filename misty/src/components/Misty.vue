<template>
  <h3>WELCOME TO MISTY</h3>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
        return {
            user: '',
            message: '',
            messages: [],
            socket : io('http://localhost:3000/')
        }
    },
  mounted() {
    console.log('MOUNTED IN HERE')
    this.socket.on('MESSAGE', (data) => {
      console.log('got a message back!!!', data)
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });
  }
}
</script>

<style scoped>

</style>