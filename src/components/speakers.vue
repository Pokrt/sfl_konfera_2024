<template>
  <section id="speakers" class="w-full max-w-6xl mx-auto py-12 md:py-24 px-4 md:px-6">
    <div class="my-16 flex place-content-center lg:mx-auto mx-5 text-justify">
      <div class="prose lg:prose-xl text-white prose-headings:text-neutral">
        <h1 id="team">Řečníci</h1></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <div v-for="speaker in speakers" class="card  w-86 shadow-xl bg-secondary text-center">
        <figure>
          <img class="mask mask-circle grayscale max-w-44 max-h-44 mt-5 "
               :src="speaker.photo"
               :alt="speaker.name"/>
        </figure>
        <div class="card-body">
          <h2 class="text-center card-title w-full block ">
            {{ speaker.name }}
          </h2>
          <p class="" v-html="speaker.description"></p>
        </div>
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
          name: "Viktor Mravčík",
          photo: "/speakers/mravcik.png",
          description: "Viktor Mravčík je lékař se specializací v oboru epidemiologie, má doktorát (Ph.D.) z preventivního lékařství a v r. 2018 byl jmenován docentem v oboru hygiena a epidemiologie 1. LF UK. Působí jako ředitel výzkumu ve Společnosti Podané ruce. V současné době je členem úzkého týmu připravujícího návrhy na dekriminalizaci a legální regulaci návykových látek v ČR."
        },        {
          name: "Tomáš Vymazal",
          photo: "/speakers/vymazal.png",
          description: "Bývalý poslanec PSP ČR, který stojí za zvýšením hranice pro obsah THC v technickém konopí na 1 %. Předseda Asociace bezpečného konopí, z.s. a spoluzakladatel RARE - Racionální regulace, spolku který připravuje celoplošnou kampaň s cílem vytvořit tlak na politickou reprezentaci a přispět tak zásadně k přijetí zákona o regulaci konopí."
        },        {
          name: "Martin Duřt",
          photo: "/speakers/durt.png",
          description: "Martin Duřt je výzkumník fenomenologie psychoaktivních látek, spoluzakladatel harm reduction platformy Czeched Substance, člen České psychedelické společnosti a autor blogu <a class='link'  target='_blank' href=\" http://utheraptor.art\">utheraptor.art</a>. Ve své práci se zaměřuje na odhalování vlivu drog na lidské vědomí a snižování jejich rizik. Když se nevěnuje vědě, tvoří umění pomocí umělé inteligence a píše."
        },
      ]


    }
  }
}
</script>