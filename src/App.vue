<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    
    const navigation = computed(() => router.options.routes.map(route => ({
      text: route.meta?.displayName,
      to: route.path,
    })));
      // router.options.routes[0].component?.name
    // })

    return {
      navigation,
      router,
      log: console.log,
    };
  }
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br>
  <router-link
    v-for="nav in navigation"
    :key="nav.to"
    :to="nav.to"
    class="appLink"
  >
  {{log(nav)}}
    {{nav.text}}
  </router-link>
  <hr>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.appLink {
  display: block;
}
</style>
