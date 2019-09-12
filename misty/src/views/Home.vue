<template>
  <div class="home">
    <img class="picture" alt="Vue logo" src="../assets/main.png" />
    <Misty :mistyState="{}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Misty from "@/components/Misty.vue";

export default {
  name: "home",
  components: {
    Misty
  }
};
</script>

<style>
.picture {
  width: 600;
  height: 700px;
}
</style>
