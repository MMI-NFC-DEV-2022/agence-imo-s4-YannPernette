<script setup lang="ts">
import afficheMaison from '@/components/afficheMaison.vue';
// import { type SchemaOffreMaison } from '@/types';

import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Maison, error } = await supabase
  .from('Maison')
  .select('*')
</script>


<template>

    <h1 class="text-center text-3xl my-20 font-bold">Maisons appelées avec SupaBase</h1>

    <div class="mt-10">
        <afficheMaison v-for="maison in Maison" v-bind="maison" />
    </div>

</template>