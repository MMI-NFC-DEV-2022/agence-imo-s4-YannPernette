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

    <div class="mt-10 mb-40 grid grid-cols-2 mx-20 justify-items-center">

        <RouterLink v-for="maison in Maison" :key="maison.id"
            :to="{ name: '/maisons/edit/[id]', params: { id: maison.id } }">
                <afficheMaison v-bind="maison" class="mt-20" />
        </RouterLink>


    </div>
</template>