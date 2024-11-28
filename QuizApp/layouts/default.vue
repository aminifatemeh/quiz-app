<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<template>
  <div>
    <Navbar />
    <Breadcrumb />
    <slot />
    <TheFooter />
  </div>
</template>
