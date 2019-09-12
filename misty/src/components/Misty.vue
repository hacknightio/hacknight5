<template>
  <div>
    <h3>WELCOME TO MISTY</h3>
    <RightArm :position="mistyState.rightArm"/>
    <LeftArm :position="mistyState.leftArm"/>
  </div>
</template>

<script>
import io from 'socket.io-client'
import RightArm from '@/components/RightArm.vue'
import LeftArm from '@/components/LeftArm.vue'

export default {
  components: {
    RightArm,
    LeftArm
  },
  props: {
    mistyState: {
      type: Object,
      default: {
        leftArm: 0,
        rightArm: 0
      }
    }
  },
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