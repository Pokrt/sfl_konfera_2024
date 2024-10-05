<template>
  <section id="speakers" class="w-full max-w-6xl mx-auto py-12 md:py-24 px-4 md:px-6">
    <div class="my-16 flex place-content-center lg:mx-auto mx-5 text-justify">
      <div class="prose lg:prose-xl text-white prose-headings:text-neutral">
        <h1 id="team">Řečníci</h1>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(speaker, index) in speakers"
        :key="index"
        class="card w-86 shadow-xl bg-secondary text-center cursor-pointer transition transform hover:scale-105 hover:shadow-2xl"
        @click="openModal(speaker)"
      >
        <figure>
          <img
            class="mask mask-circle grayscale w-44 h-44 mt-5 object-cover"
            :src="speaker.photo"
            :alt="speaker.name"
          />
        </figure>
        <div class="card-body">
          <h2 class="text-center card-title w-full block">
            {{ speaker.name }}
          </h2>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedSpeaker" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div class="bg-white rounded-lg max-w-lg w-full p-6">
        <div class="flex justify-end">
          <button @click="closeModal" class="text-gray-500 hover:text-black">&times;</button>
        </div>
        <figure class="flex justify-center mb-4">
          <img
            class="mask mask-circle w-44 h-44 object-cover"
            :src="selectedSpeaker.photo"
            :alt="selectedSpeaker.name"
          />
        </figure>
        <h2 class="text-2xl font-bold text-center mb-4">
          {{ selectedSpeaker.name }}
        </h2>
        <p v-html="selectedSpeaker.description"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        { 
          name: 'Jindřich Vobořil', 
          photo: '/speakers/voboril.jpg',
          description: 'Jindřich Vobořil působí jako ředitel Společnosti Podané Ruce a také jako expertní poradce současného premiéra. Patří k předním českým expertům v oblasti závislostí a v minulosti dlouhodobě zastával i pozici Národního protidrogového koordinátora, na které se zabýval například přípravou zákona o regulaci konopí, který by vytvořil jasná pravidla pro zavedení regulovaného trhu s konopím v České republice.'

        },
        {
          name: "Tomáš Vymazal",
          photo: "/speakers/vymazal.png",
          description:
            "Bývalý poslanec PSP ČR, který stojí za zvýšením hranice pro obsah THC v technickém konopí na 1 %. Předseda Asociace bezpečného konopí, z.s. a spoluzakladatel RARE - Racionální regulace, spolku který připravuje celoplošnou kampaň s cílem vytvořit tlak na politickou reprezentaci a přispět tak zásadně k přijetí zákona o regulaci konopí."
        },
        {
          name: "Martin Duřt",
          photo: "/speakers/durt.png",
          description:
            "Martin Duřt je výzkumník fenomenologie psychoaktivních látek, spoluzakladatel harm reduction platformy Czeched Substance, člen České psychedelické společnosti a autor blogu <a class='link'  target='_blank' href=\" http://utheraptor.art\">utheraptor.art</a>. Ve své práci se zaměřuje na odhalování vlivu drog na lidské vědomí a snižování jejich rizik. Když se nevěnuje vědě, tvoří umění pomocí umělé inteligence a píše."
        },
        { 
            name: 'Tereza Urzová', 
            photo: '/speakers/urzova.jpg',
            description: 'Tereza Urzová je lékařka a analytička Institutu liberálních studií. Dříve působila i ve spolku Svobodný přístav, který spoluzaložila. Dlouhodobě se věnuje ekonomickým a zdravotně-sociálním dopadům prohibice psychoaktivních látek.'
        },

        { 
          name: 'Lukáš Hurt', 
          photo: '/speakers/hurt.jpg',
          description: 'Lukáš Hurt je český překladatel a editor. Již přes deset let se věnuje problematice konopí se zaměřením na lidská práva.'
        },

        { 
          name: 'Dana Syslová', 
          photo: '/speakers/syslova.png',
          description: 'Mgr. Dana Syslová je adiktoložka a psychoterapeutka.'
        },
        { 
         name: 'Marianna Sádecká', 
         photo: '/speakers/sadecka.webp',
         description: 'Marianna vystudovala rakouskou ekonomickou školu, spoluzaložila Slovak Students for Liberty, působila v Paralelní Polis a má podcast o IT bezpečnosti s názvem lokál hosť.'
        },
        { 
         name: 'Eva Césarová', 
         photo: '/speakers/cesarova.jpg',
         description: 'Eva Césarová je doktorskou studentkou adiktologie, spoluzakladatelkou České psychedelické společnosti, a také ředitelkou sekretariátu Nadačního fondu pro výzkum psychedelik. Výzkumu role psychedelik v léčbě závislostí se dlouhodobě věnuje, a stejnému tématu se bude věnovat i na konferenci jako moderátorka panelu “Psychadelika v medicíně: (Staro)nové horizonty léčby”.'
        },

        { 
           name: 'Filip Blaha', 
           photo: '/speakers/blaha.jpg',
           description: 'Filip Blaha je člen Students For Liberty CZ a odborník na drogovou problematiku.'
         }


      ],
      selectedSpeaker: null
    };
  },
  methods: {
    openModal(speaker) {
      this.selectedSpeaker = speaker;
    },
    closeModal() {
      this.selectedSpeaker = null;
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
