<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router/auto";
const router = useRouter();

const quartier = ref();

async function upsertQuartier(dataForm, node) {
    const { data, error } = await supabase.from("Quartier").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :", data);
        node.setErrors([]);
        router.push({ name: "/quartiers/edit/[[id]]", params: { id: data[0].id }, query: { success: true } });
    }
}

const route = useRoute("/quartiers/edit/[[id]]");
if (route.params.id) {
    const { data, error } = await supabase.from("Quartier").select("*").eq("id", route.params.id).single();
    if (error) console.error("error :", error);
    else quartier.value = data;
}


const { data: listeCommune, error } = await supabase
    .from("Commune")
    .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
    value: commune.id,
    label: commune.nomCommune,
}));
</script>


<template>
    <div class="p-2">
        <!-- On passe la "ref" à FormKit -->
        <FormKit type="form" @submit="upsertQuartier" v-model="quartier" :config="{
            classes: {
                form: 'border-2 border-gray-300 py-8 px-20 rounded-lg w-fit mx-auto',
                input: 'p-1 rounded border-gray-300 shadow-sm border mb-6 w-full',
                label: 'text-gray-600',
            },
        }" :submit-attrs="{ classes: { input: 'bg-red-300 p-4 mt-4 rounded w-full mb-0' } }">
            <FormKit name="nomQuartier" label="Nom du quartier" />
            <!-- <FormKit name="id_Commune" label="Commune de référence" type="number" /> -->
            <FormKit type="select" name="id_Commune" label="Commune" :options="optionsCommune" />
        </FormKit>
    </div>
</template>