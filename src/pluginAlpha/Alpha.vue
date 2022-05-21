<template>
    <article>
        <h1>Alpha Plugin</h1>
        <button @click="add">+</button>
        Count: {{count}}
        <button @click="sub">-</button>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const count = ref(0);
        const add = () => count.value++;
        const sub = () => count.value--;
        return {
            count, add, sub
        }
    }
});
</script>