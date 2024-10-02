<!-- Schedule.vue -->
<template>
  <section id="schedule" class="schedule-section">
    <div class="schedule-container">
    <div class="my-16 flex place-content-center lg:mx-auto mx-5 text-justify">

      <div class="prose lg:prose-xl text-white prose-headings:text-neutral">
      <h1 class="schedule-title">Program</h1>
      </div></div>
      <div class="schedule-grid">
        <div
          v-for="(session, index) in schedule"
          :key="index"
          class="session-card"
          @click="openSession(session)"
        >
          <div class="session-card-body">
            <h2 class="session-card-time">{{ session.time }}</h2>
            <p class="session-card-title">{{ session.title }}</p>

              <div v-if="session.speakers" class="session-speakers">
                <span class="label">Řečníci: </span>
                <span v-for="(speaker, speakerIndex) in session.speakers" :key="speakerIndex">
                  {{ speaker.name }}<span v-if="speakerIndex < session.speakers.length - 1">, </span>
                </span>
              </div>
            <div v-if="session.moderator" class="session-moderator">
              <span class="label">Moderátor: </span>
              <span>{{ session.moderator.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div :class="['modal', { 'modal-open': selectedSession }]" >
        <div class="modal-overlay" @click="closeModal"></div>
        <div class="modal-content">
          <!-- Session Details -->
          <div v-if="!selectedSpeaker">
            <h2 class="modal-title">{{ selectedSession?.title }}</h2>
            <p class="modal-description">{{ selectedSession?.description }}</p>

            <div v-if="selectedSession?.speakers" class="modal-section">
              <h3 class="modal-subtitle">Řečníci</h3>
              <div class="modal-speakers">
                <div
                  v-for="(speaker, index) in selectedSession.speakers"
                  :key="index"
                  class="modal-person"
                  @click.stop="openSpeaker(speaker)"
                >
                  <img :src="speaker.picture" alt="" class="modal-image">
                  <p class="modal-name">{{ speaker.name }}</p>
                </div>
              </div>
            </div>

            <div v-if="selectedSession?.moderator" class="modal-section">
              <h3 class="modal-subtitle">Moderátor</h3>
              <div class="modal-person" @click.stop="openSpeaker(selectedSession.moderator)">
                <img :src="selectedSession.moderator.picture" alt="" class="modal-image">
                <p class="modal-name-moderator">{{ selectedSession.moderator.name }}</p>
              </div>
            </div>
          </div>

          <!-- Speaker Details -->
          <div v-else>
            <button class="modal-back-button" @click="closeSpeaker">Zpět</button>
            <h2 class="modal-title">{{ selectedSpeaker.name }}</h2>
            <img :src="selectedSpeaker.picture" alt="" class="modal-image-large">
            <p class="modal-description">{{ selectedSpeaker.bio }}</p>
          </div>

          <button class="modal-close-button" @click="closeModal">Zavřít</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Schedule',
  data() {
    return {
      schedule: [
        { 
          time: '12:15 - 13:00', 
          title: 'Registrace',
          description: 'Registrace jsou otevřeny od 12:15 do 13:00.'
        },
        { 
          time: '13:00 - 14:00', 
          title: 'Legalizace konopí',
          description: 'Panel "Legalizace konopí" se zaměří na diskuzi o možnostech a důsledcích legalizace konopí v Česku.',
          speakers: [
            { 
              name: 'Tom Vymazal', 
              picture: '/speakers/vymazal.png',
              bio: 'Tom Vymazal je český politik a aktivista, zabývající se legalizací konopí.'
            },
            { 
              name: 'Jindřich Vobořil', 
              picture: '/speakers/voboril.jpg',
              bio: 'Jindřich Vobořil je český expert na drogovou problematiku, který působil jako národní protidrogový koordinátor v letech 2010-2018 a 2022-2024. Má dlouholeté zkušenosti v oblasti protidrogové politiky, mimo jiné jako předseda Sdružení Podané ruce. Ve funkci národního koordinátora často kritizoval vládní politiku, včetně neshod s premiérem Andrejem Babišem. Vobořil je členem ODS a aktivně se věnoval i komunální politice.'
            }
          ],
          moderator: { 
            name: 'Filip Blaha', 
            picture: '/speakers/blaha.jpg',
            bio: 'Filip Blaha je moderátor a odborník na drogovou problematiku.'
          }
        },
        { 
          time: '14:00 - 14:15', 
          title: 'Pauza',
          description: 'Krátká přestávka na občerstvení.'
        },
        {
          time: '14:15 - 15:00',
          title: 'Harm reduction',
          description: 'Panel "Harm reduction" bude zkoumat, jak minimalizovat rizika spojená s užíváním návykových látek.',
          speakers: [
            { 
              name: 'Viktor Mravčík', 
              picture: '/speakers/mravcik.png',
              bio: 'Viktor Mravčík je lékař se specializací v oboru epidemiologie, má doktorát (Ph.D.) z preventivního lékařství a v r. 2018 byl jmenován docentem v oboru hygiena a epidemiologie 1. LF UK. Působí jako ředitel výzkumu ve Společnosti Podané ruce. V současné době je členem úzkého týmu připravujícího návrhy na dekriminalizaci a legální regulaci návykových látek v ČR.'
            },
            { 
              name: 'Martin Duřt', 
              picture: '/speakers/durt.png',
              bio: 'Martin Duřt je výzkumník fenomenologie psychoaktivních látek, spoluzakladatel harm reduction platformy Czeched Substance, člen České psychedelické společnosti a autor blogu utheraptor.art. Ve své práci se zaměřuje na odhalování vlivu drog na lidské vědomí a snižování jejich rizik. Když se nevěnuje vědě, tvoří umění pomocí umělé inteligence a píše.'
            }
          ],
          moderator: { 
            name: 'Tereza Urzová', 
            picture: '/speakers/urzova.jpg',
            bio: 'Tereza Urzová je lékařka a anarchokapitalistka.'
          }
        },
        { 
          time: '15:00 - 15:30', 
          title: 'Velká pauza',
          description: 'Delší přestávka'
        },
        {
          time: '15:30 - 16:30',
          title: 'Oběti represe',
          description: 'Příběhy lidí postižených represivní politikou.',
          speakers: [
            { 
              name: 'Matěj Hollan', 
              picture: '/speakers/hollan.jpg',
              bio: 'Matěj Hollan je český hudebník, muzikolog, občanský aktivista a politik, známý zejména svým působením v oblasti snižování rizik závislostí a regulace hazardu. V letech 2014–2018 působil jako 3. náměstek primátora Brna za politické hnutí Žít Brno. Od roku 2022 je opět zastupitelem města Brna. V současnosti působí jako ředitel Asociace nestátních organizací zaměřených na prevenci závislostí.'
            },
            { 
              name: 'TBA', 
              picture: '/speakers/tba.webp',
              bio: 'Bude upřesněno.'
            }
          ],
          moderator: { 
            name: 'Marianna Sádecká', 
            picture: '/speakers/sadecka.webp',
            bio: 'Marianna vyštudovala rakúsku ekonomickú školu, spoluzaložila Slovak Students for Liberty, pôsobila v Paralelnej Polis a má podcast o IT bezpečnosti s názvom lokál hosť.'
          }
        },
        { 
          time: '16:30 - 16:45', 
          title: 'Pauza',
          description: 'Krátká přestávka.'
        },
        { 
          time: '16:45 - 17:45', 
          title: 'TBA',
          description: 'Program bude upřesněn.'
        }
      ],
      selectedSession: null,
      selectedSpeaker: null
    }
  },
  methods: {
    openSession(session) {
      this.selectedSession = session;
      this.selectedSpeaker = null; // Reset selected speaker
      // Optional: Prevent background scrolling when modal is open
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.selectedSession = null;
      this.selectedSpeaker = null;
      // Remove class from body to allow scrolling again
      document.body.classList.remove('modal-open');
    },
    openSpeaker(speaker) {
      this.selectedSpeaker = speaker;
    },
    closeSpeaker() {
      this.selectedSpeaker = null;
    }
  }
}
</script>

<style>
@import './Schedule.css';
</style>
