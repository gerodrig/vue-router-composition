<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokémon <small class="text-emerald-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
      width="200"
      height="200"
    />

    <RouterLink
      class="p-2 mt-5 text-center text-white rounded bg-emerald-500 hover:bg-emerald-700"
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      @click="setNextPokemon"
    >
      Siguiente
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: number;
}

const props = defineProps<Props>();

//save pokemon id in local storage
localStorage.setItem('pokemonId', `${props.id}`);

//save pokemon id in local storage
const setNextPokemon = () => {
  localStorage.setItem('pokemonId', `${props.id + 1}`);
  localStorage.setItem('lastPath', `/pokemon/${props.id + 1}`);
};
</script>
