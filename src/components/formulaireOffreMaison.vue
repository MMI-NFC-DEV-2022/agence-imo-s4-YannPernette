<script setup lang="ts">
import { ref } from "@vue/reactivity";
import afficheMaison from "./afficheMaison.vue";
import { supabase } from "@/supabase";


// On fait une variable reactive qui réference les données
// ATTENTION : faire une Ref pas une Reactive car :
// c'est l'objet qui doit être réactif, pas ses props

const maison = ref();

async function upsertMaison(dataForm, node) {
    const { data, error } = await supabase.from("Maison").upsert(dataForm);
    if (error) node.setErrors([error.message])
    else {
        node.setErrors([]);
        router.push({ name: "", params: { id: data[0].id } });
    }
}

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
            </FormKit>
        </div>
    </div>
</template>
