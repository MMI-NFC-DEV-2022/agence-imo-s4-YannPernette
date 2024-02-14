<script setup lang="ts">
import { ref } from "@vue/reactivity";
import afficheMaison from "./afficheMaison.vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router/auto";
const router = useRouter();

const maison = ref();

async function upsertMaison(dataForm, node) {
    const { data, error } = await supabase.from("Maison").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :", data);
        node.setErrors([]);
        router.push("/maisons/liste-supa");
    }
}

const route = useRoute("/maisons/edit/[id]");
if (route.params.id) {
    const { data, error } = await supabase.from("Maison").select("*").eq("id", route.params.id).single();
    if (error) console.error("error :", error);
    else maison.value = data;
}

const { data: dataQuartierCommune, error } = await supabase
    .from("quartier_commune")
    .select("*");
if (error) console.log("n'a pas pu charger la vue quartier_commune :", error);

const { data: dataAgent, error: agentError } = await supabase
    .from("Agent")
    .select("*");
if (agentError) console.log("n'a pas pu charger la vue Agent :", agentError);
</script>


<template>
    <div>
        <div class="p-2 mx-auto w-fit mb-20">
            <h2 class="text-2xl mb-10 text-center"><span class="font-bold">Résultat</span> (Prévisualisation)</h2>
            <!-- Optionnel on affiche les données -->
            <afficheMaison v-bind="maison" />
        </div>

        <div class="p-2">
            <!-- On passe la "ref" à FormKit -->
            <FormKit type="form" @submit="upsertMaison" v-model="maison" :config="{
                classes: {
                    form: 'border-2 border-gray-300 py-8 px-20 rounded-lg w-fit mx-auto',
                    input: 'p-1 rounded border-gray-300 shadow-sm border mb-6 w-full',
                    label: 'text-gray-600',
                },
            }" :submit-attrs="{ classes: { input: 'bg-red-300 p-4 mt-4 rounded w-full mb-0' } }">
                <FormKit name="nomMaison" label="Nom de la maison" />
                <FormKit name="prix" label="Prix de la maison" type="number" />
                <FormKit name="favori" label="Mettre en valeur la maison" type="checkbox" wrapper-class="flex gap-2" />
                <FormKit name="image" label="Image de la maison" />
                <FormKit name="nbrChambres" label="Nombre de chambres de la maison" type="number" />
                <FormKit name="nbrSDB" label="Nombre de salles de bain de la maison" type="number" />
                <FormKit name="adresse" label="Adresse de la maison" />
                <FormKit name="surface" label="Surface de la maison" />
                <FormKit name="id_Quartier" label="Quartier" type="select">
                    <option value="id_Quartier" :disabled="true">Choisir un quartier...</option>
                    <option v-for="quartierCommune in dataQuartierCommune" :key="quartierCommune.id"
                        :value="quartierCommune.id">
                        {{ quartierCommune.nomQuartier }} - {{ quartierCommune.nomCommune }}</option>
                </FormKit>
                <FormKit name="id_Agent" label="Agent" type="select">
                    <option value="id_Agent" :disabled="true">Choisir un agent...</option>
                    <option v-for="agent in dataAgent" :key="agent.id"
                        :value="agent.id">
                        {{ agent.nomAgent }}</option>
                </FormKit>
            </FormKit>
        </div>
    </div>
</template>
