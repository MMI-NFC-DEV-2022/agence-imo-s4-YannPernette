<script setup lang="ts">
import { supabase, user } from '@/supabase';
</script>
<template>
    <div>
        <button v-if="user" @pointerdown="supabase.auth.signOut()" class="p-3 border-solid border-2">
            Se déconnecter ({{ user.email }})
        </button>
        <button v-else @pointerdown="supabase.auth.signInWithOAuth({ provider: 'github' })" class="p-3 border-solid border-2">
            Se connecter avec Github
        </button>
    </div>
</template>