<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase, user } from '@/supabase';
</script>

<template>
  <header>
    <nav class="flex gap-10 justify-center items-center uppercase bg-gray-600 text-white py-10 text-xl">
      <RouterLink to="/" class="hover:underline underline-offset-8">Home</RouterLink>
      <RouterLink to="/maisons" class="hover:underline underline-offset-8">Tests</RouterLink>
      <RouterLink to="/maisons/liste-supa" class="hover:underline underline-offset-8">Liste Supa</RouterLink>
      <RouterLink to="/maisons/edit/[id]" class="hover:underline underline-offset-8">Formulaire</RouterLink>
      <RouterLink v-if="user" to="/login" class="hover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4">Se Déconnecter</RouterLink>
      <RouterLink v-else to="/login" class="hover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4">Se Connecter</RouterLink>
    </nav>
  </header>


<Suspense>
  <RouterView />

</Suspense>


</template>
