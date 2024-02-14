<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase, user } from '@/supabase';
</script>

<template>
  <header>
    <nav class="flex gap-10 justify-center uppercase bg-gray-600 text-white py-10 text-xl">
      <RouterLink to="/" class="hover:underline underline-offset-8">Home</RouterLink>

      <ul class="flex flex-col items-center">
        <h5 class="text-red-600">Maisons</h5>
        <li><RouterLink to="/maisons" class="hover:underline underline-offset-8">Tests</RouterLink></li>
        <li><RouterLink to="/maisons/liste-supa" class="hover:underline underline-offset-8">Liste Supa</RouterLink></li>
        <li><RouterLink to="/maisons/edit/[id]" class="hover:underline underline-offset-8">Formulaire</RouterLink></li>
      </ul>
      
      <ul class="flex flex-col items-center">
        <h5 class="text-red-600">Quartiers</h5>
        <li><RouterLink to="/quartiers" class="hover:underline underline-offset-8">Liste Supa</RouterLink></li>
        <li><RouterLink to="/quartiers/edit/[[id]]" class="hover:underline underline-offset-8">Formulaire</RouterLink></li>
      </ul>

      <RouterLink v-if="user" to="/login" class="hover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4 h-12">Se Déconnecter</RouterLink>
      <RouterLink v-else to="/login" class="hover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4 h-12">Se Connecter</RouterLink>
    </nav>
  </header>


<Suspense>
  <RouterView />

</Suspense>


</template>
