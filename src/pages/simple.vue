<script setup lang="ts">
import afficheMaison from '@/components/afficheMaison.vue';
import { SchemaOffreMaison } from '@/types';

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
        <afficheMaison nomMaison="Maison" favori image="src\assets\img\pexels-binyamin-mellish-106399.jpg" />
    </div>

    <div class="mt-10">
        <afficheMaison :nomMaison="maMaison.nomMaison" />
    </div>
</template>