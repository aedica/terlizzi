<script setup lang="ts">
useHead({
  title: "Ciao",
  meta: [
    {
      name: "description",
      content: "Mondo",
    },
  ],
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>

<template>
  <main class="bg-red-500">Hello</main>
</template>
