<script setup lang="ts">
import donnees from '../assets/data.json';
import afficheMaison from '@/components/afficheMaison.vue';
import { type SchemaOffreMaison } from '@/types';

const res = await fetch('../assets/data.json');

const tableaumaisons:SchemaOffreMaison[] = donnees;

const maMaison: SchemaOffreMaison = {
    nomMaison: 'Maison2',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
}
</script>


<template>
    <div class="my-10">
        <h1>Etape 1 : </h1>
        <afficheMaison nomMaison="Maison" :prix="200" :nbrChambres="32" :nbrSDB="67" adresse="oui" favori
            image="src/assets/img/pexels-binyamin-mellish-106399.jpg" surface="400" />
    </div>

    <div class="my-10">
        <afficheMaison v-bind="maMaison" />
    </div>

    <div class="my-10">
        <afficheMaison v-bind="tableaumaisons[1]" />
    </div>

    <!-- <div class="mt-10">
        <afficheMaison v-bind:nomMaison="maMaison.nomMaison" />
    </div> -->

    <div class="my-10">
        <afficheMaison v-for="maison in tableaumaisons" :key="maison.nomMaison" />
    </div>
</template>