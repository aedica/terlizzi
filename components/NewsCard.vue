<script setup lang="ts">
defineProps<{
  item: any;
}>();
</script>
<template>
  <div class="overflow-hidden">
    <NuxtLink
      class="relative w-full h-screen overflow-hidden block news-card"
      :to="item._path"
    >
      <div class="w-screen relative">
        <NuxtImg :src="item.image" class="w-screen h-screen object-cover" />
        <div
          class="absolute z-10 bg-gradient-to-t from-neutral-800 bottom-0 left-0 w-full h-2/3 mix-blend-multiply"
        ></div>
      </div>
      <div class="absolute bottom-6 left-6 z-10">
        <p class="kicker">{{ item.kicker }}</p>
        <h2 class="big-title">{{ item.title }}</h2>
      </div>
    </NuxtLink>
    <div class="container py-12 w-screen">
      <cite>di {{ item.author }}</cite>
      <h5 class="">{{ item.subtitle }}</h5>

      <ContentDoc :value="item" class="prose" />
    </div>
  </div>
</template>
