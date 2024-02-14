<script setup lang="ts">
import { supabase } from "../../supabase";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
import groupBy from "lodash/groupBy";

console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data, error } = await supabase
    .from('Commune')
    .select('*, Quartier(*)')
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);
</script>

<template>
    <section class="flex flex-col mx-80 mt-20">
        <h3 class="text-2xl mb-5">Liste des quartiers</h3>

        <ul class="border-solid border-black border-4 text-center">
            <li v-for="communeObject in data" class="bg-black text-white font-medium text-lg">
                Les quartiers de {{ communeObject.nomCommune }}
                <ul class="bg-white text-black font-normal text-base py-3">
                    <li v-for="quartierObject in communeObject.Quartier">
                        <RouterLink :to="{ name: '/quartiers/edit/[[id]]', params: { id: quartierObject.id } }">{{ quartierObject.nomQuartier }}</RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </section>

    <section class="flex flex-col ml-10 mt-20 mb-40">
        <h3 class="text-2xl mb-5">Liste des quartiers par commune</h3>

        <Disclosure v-for="communeObject in data">
            <DisclosureButton class="py-2">
                {{ communeObject.nomCommune }}
            </DisclosureButton>
            <DisclosurePanel class="text-gray-500 border-solid border-black">
                <ul>
                    <li v-for="quartierObject in communeObject.Quartier">
                        {{ quartierObject.nomQuartier }}
                    </li>
                </ul>
            </DisclosurePanel>
        </Disclosure>
    </section>
</template>