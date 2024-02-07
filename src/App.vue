<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Test</h1>

    <nav class="*:text-red-500 flex flex-col">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/simple">Simple</RouterLink>
      <RouterLink to="/maisons/liste-supa">Liste Supa</RouterLink>
    </nav>
  </header>


<Suspense>
  <RouterView />

</Suspense>


</template>
