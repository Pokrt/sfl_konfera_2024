<template>
  <div class="mt-28 flex place-content-center lg:mx-auto mx-5 text-justify">
    <div class="prose lg:prose-xl text-white prose-headings:text-neutral">
      <h1 id="partners">Partners</h1></div>
  </div>
  <div class=" px-4 mx-auto max-w-screen-xl lg:px-6">

    <div class="grid grid-cols-1 lg:flex gap-4 lg:gap-8 flex-auto justify-center">
      <a v-for="partner in partners" :href="partner.url"
         class="card  grid justify-items-center    ">
        <figure><img class="object-contain" :class="partner.class" :src="partner.logo" :alt="partner.name"/>
        </figure>
      </a>

    </div>
  </div>

</template>
<script setup>
import {ref} from 'vue'


const partners = ref([{
  name: 'Magazín konopí',
  url: 'https://magazin-konopi.cz/',
  logo: '/konopi.svg',
  class: ' w-60'
},
  {
    name: 'Czeched Substance',
    url: 'https://czsub.cz/',
    logo: '/czsub.svg',
    class: 'h-24 w-60'

  }, {
    name: 'Česká psychedelická společnost',
    url: 'https://czeps.org/',
    logo: '/czeps.svg',
    class: ' w-60'

  },

])


</script>