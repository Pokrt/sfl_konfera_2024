<!-- Schedule.vue -->
<template>
  <section id="schedule" class="w-full pt-12 md:pt-24 flex justify-center">
    <div class="container">
      <h1 class="text-4xl font-burra text-neutral text-center mb-8">Program</h1>
      <div class="grid gap-6">
        <div
          v-for="(session, index) in schedule"
          :key="index"
          class="card bg-base-100 shadow-xl cursor-pointer"
          @click="openSession(session)"
        >
          <div class="card-body">
            <h2 class="card-title text-primary">{{ session.time }}</h2>
            <p class="text-lg font-semibold">{{ session.title }}</p>
            <div v-if="session.speakers" class="mt-2">
              <span class="font-medium">Řečníci: </span>
              <span v-for="(speaker, speakerIndex) in session.speakers" :key="speakerIndex">
                {{ speaker.name }}{{ speakerIndex < session.speakers.length - 1 ? ', ' : '' }}
              </span>
            </div>
            <div v-if="session.moderator" class="mt-1">
              <span class="font-medium">Moderátor: </span>
              <span>{{ session.moderator.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal" :class="{ 'modal-open': selectedSession }">
        <div class="modal-box">
          <h2 class="text-2xl font-bold">{{ selectedSession?.title }}</h2>
          <p class="mt-4">{{ selectedSession?.description }}</p>
          <div v-if="selectedSession?.speakers" class="mt-4">
            <h3 class="text-xl font-semibold">Řečníci</h3>
            <div class="flex mt-2">
              <div v-for="(speaker, index) in selectedSession.speakers" :key="index" class="mr-4">
                <img :src="speaker.picture" alt="" class="w-20 h-20 rounded-full">
                <p class="text-center mt-2">{{ speaker.name }}</p>
              </div>
            </div>
          </div>
          <div v-if="selectedSession?.moderator" class="mt-4">
            <h3 class="text-xl font-semibold">Moderátor</h3>
            <div class="flex mt-2">
              <div>
                <img :src="selectedSession.moderator.picture" alt="" class="w-20 h-06 rounded-full">
                <p class="text-center mt-2">{{ selectedSession.moderator.name }}</p>
              </div>
            </div>
          </div>
          <div class="modal-action">
            <button class="btn" @click="closeModal">Zavřít</button>
          </div>
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
          description: 'Registrace účastníků konference.'
        },
        { 
          time: '13:00 - 14:00', 
          title: 'Legalizace konopí',
          description: 'Diskuze o možnostech a důsledcích legalizace konopí.',
          speakers: [
            { name: 'Tom Vymazal', picture: '/public/speakers/vymazal.png' },
            { name: 'Jindřich Vobořil', picture: '/public/speakers/voboril.jpg' }
          ],
          moderator: { name: 'Filip Blaha', picture: 'path/to/filip_blaha.jpg' }
        },
        { 
          time: '14:00 - 14:15', 
          title: 'Pauza',
          description: 'Krátká přestávka na občerstvení.'
        },
        {
          time: '14:15 - 15:00',
          title: 'Harm reduction',
          description: 'Strategie snižování škod spojených s užíváním drog.',
          speakers: [
            { name: 'Viktor Mravčík', picture: 'path/to/viktor_mravcik.jpg' },
            { name: 'Martin Duřt', picture: 'path/to/martin_durt.jpg' }
          ],
          moderator: { name: 'Tereza Urzová', picture: 'path/to/tereza_urzova.jpg' }
        },
        { 
          time: '15:00 - 15:30', 
          title: 'Velká pauza',
          description: 'Delší přestávka na oběd.'
        },
        {
          time: '15:30 - 16:30',
          title: 'Oběti represe',
          description: 'Příběhy lidí postižených represivní politikou.',
          speakers: [
            { name: 'Matěj Hollan', picture: 'path/to/matej_hollan.jpg' },
            { name: 'TBC', picture: 'path/to/tbc.jpg' }
          ],
          moderator: { name: 'Marianna Sádecká', picture: 'path/to/marianna_sadecka.jpg' }
        },
        { 
          time: '16:30 - 16:45', 
          title: 'Pauza',
          description: 'Krátká přestávka.'
        },
        { 
          time: '16:45 - 17:45', 
          title: 'TBC',
          description: 'Program bude upřesněn.'
        }
      ],
      selectedSession: null
    }
  },
  methods: {
    openSession(session) {
      this.selectedSession = session;
    },
    closeModal() {
      this.selectedSession = null;
    }
  }
}
</script>
