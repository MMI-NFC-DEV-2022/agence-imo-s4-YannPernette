<script setup lang="ts">
import { supabase, user } from '@/supabase';
</script>

<template>
<h1 v-if="user" class="text-center text-3xl font-bold mt-40 mb-10">Se Déconnecter</h1>
<h1 v-else class="text-center text-3xl font-bold mt-40 mb-10">Se Connecter</h1>

    <div class="flex justify-center items-center">
        <button v-if="user" @pointerdown="supabase.auth.signOut()" class="p-3 border-solid border-2">
            Actuellement connecté avec l'adresse {{ user.email }}
        </button>
        <button v-else @pointerdown="supabase.auth.signInWithOAuth({ provider: 'github' })" class="p-3 border-solid border-2">
            Se connecter avec Github
        </button>
    </div>
</template>