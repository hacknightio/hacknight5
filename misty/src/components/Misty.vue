<template>
  <h3>WELCOME TO MISTY</h3>
</template>

<script>
export default {
  mounted() {
    console.log('MOUNTED IN HERE')
  },
  socket: {
            // Prefix for event names
            // prefix: "/counter/",

            // If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
            // namespace: "/counter",

            events: {

                // Similar as this.$socket.on("changed", (msg) => { ... });
                // If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
                //
                changed(msg) {
                  console.log('whatup', msg)
                }

                /* common socket.io events
                connect() {
                    console.log("Websocket connected to " + this.$socket.nsp);
                },

                disconnect() {
                    console.log("Websocket disconnected from " + this.$socket.nsp);
                },

                error(err) {
                    console.error("Websocket error!", err);
                }
                */

            }
        }
}
</script>

<style scoped>

</style>