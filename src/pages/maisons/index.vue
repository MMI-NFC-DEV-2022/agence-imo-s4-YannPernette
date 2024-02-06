<script setup lang="ts">
import donnees from '../../assets/data.json';
import afficheMaison from '../../components/afficheMaison.vue';
import { type SchemaOffreMaison } from '../../types';

import { supabase } from "../../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const maisonsSupa = []; // à remplacer par l'appel à Supabase

// const res = await fetch('../assets/data.json');

const tableaumaisons: SchemaOffreMaison[] = [{
    nomMaison: 'Maison1',
    prix: 1000,
    adresse: '14543 rue',
    nbrChambres: 2,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison2',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison3',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison4',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison5',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison6',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
];

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
    <!-- <div class="mt-10">
        <h1>Etape 1 : </h1>
        <afficheMaison nomMaison="Maison" :prix="200" :nbrChambres="32" :nbrSDB="67" adresse="oui" favori
            image="src/assets/img/pexels-binyamin-mellish-106399.jpg" surface="400" />
    </div>

    <div class="mt-10">
        <afficheMaison v-bind="maMaison" />
    </div>

    <div class="mt-10">
        <afficheMaison v-bind="tableaumaisons[1]" />
    </div> -->

    <!-- <div class="mt-10">
        <afficheMaison v-bind:nomMaison="maMaison.nomMaison" />
    </div> -->

    <div class="mt-10">
        <afficheMaison v-for="maison in tableaumaisons" v-bind="maison" />
    </div>
</template>