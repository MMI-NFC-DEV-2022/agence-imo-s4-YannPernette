<script setup lang="ts">
import afficheMaison from '@/components/afficheMaison.vue';
import { type  SchemaOffreMaison } from '@/types';

const maMaison: SchemaOffreMaison = {
    nomMaison: 'Maison',
    prix: 1000,
    nbrChambres: 3,
    nbrSDB: 2,
    adresse: '123 rue de la maison',
    favori: true,
    image: 'src\assets\img\pexels-binyamin-mellish-106399.jpg',
    surface: "100",
}
</script>


<template>
    <div class="mt-10">
        <h1>Etape 1 : </h1>
        <afficheMaison nomMaison="Maison" :prix="200" :nbrChambres="32" :nbrSDB="67" adresse="oui" favori image="src\assets\img\pexels-binyamin-mellish-106399.jpg" surface="400" />
    </div>

    <div class="mt-10">
        <afficheMaison v-bind="maMaison" />
    </div>

    <!-- <div class="mt-10">
        <afficheMaison v-bind:nomMaison="maMaison.nomMaison" />
    </div> -->
</template>