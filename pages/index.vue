<script setup lang="ts">
const news = await useAsyncData("news", queryContent("/news").find);
console.log("News! ", news.data.value);
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
  <main class="">
    <!-- {{ news.data.value }} -->
    <div class="news-grid overflow-y-hidden">
      <NewsCard
        v-for="(item, i) in news.data.value"
        :key="i"
        :item="item"
        class="flex-grow flex-shrink-0"
      />
    </div>
  </main>
</template>
