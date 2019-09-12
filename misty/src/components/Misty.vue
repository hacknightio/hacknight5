<template>
  <div>
    <h3>WELCOME TO MISTY</h3>
    <p v-if="state === null">Waiting for state...</p>
    <div v-else>
      Left: {{state.arms.left.position}}
      Right: {{state.arms.right.position}}
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data () {
    return {
      state: null,
      user: '',
      message: '',
      messages: [],
      socket: io('http://localhost:3000/')
    }
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      if (typeof data === 'object') {
        // console.log('Data received \n' + JSON.stringify(data, null, 4), data)

        if (data.event === 'change') {
          this.state = data.state
        }
      } else {
        console.log('Non-object Data received', data)
      }

      // this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    });
  }
}
</script>

<style scoped>
</style>