<template>
<!--  <Navbar/>-->
  <div class="hero min-h-screen " style="background-image: url(/img_2.png);">
    <div class="hero-overlay "></div>
    <div class="hero-content text-center text-neutral-content">

      <div class=" ">
        <!--        <h1 class="mb-5 text-5xl font-bold text-white">INSPIRED 2 CARE</h1>-->
        <div class="flex items-center w-full ">
          <h1 class="font-burra text-4xl xl:text-9xl w-full font-bold text-secondary">Legalizujme</h1>
        </div>
        <div class="mt-20 items-center self-center ">
          <Countdown/>
        </div>

        <div id="about" class="mt-32  flex place-content-center mx-5 lg:mx-auto text-justify">
          <div class="stats stats-vertical lg:stats-horizontal">

            <div class="stat">
              <div class="stat-title text-neutral">Lokace</div>
              <div class="stat-value text-neutral">Praha</div>
            </div>

            <div class="stat">
              <div class="stat-title text-primary">Datum</div>
              <div class="stat-value text-primary">26. října</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>


  <!--  <div id="tickets">-->
  <!--    <Tickets/>-->
  <!--  </div>-->
  <!--  <div id="tickets_gala">-->
  <!--    <TicketsGala/>-->
  <!--  </div>-->

  <!--  <div class="divider"></div>-->
<!--  <div class="prose-h1:font-burra">-->


<!--    <Organizers/>-->
<!--    <div class="divider"></div>-->
<!--    <Partners/>-->
<!--    <div class="divider"></div>-->
<!--    <div class="mt-16 mb-36 flex place-content-center lg:mx-auto mx-5 text-justify">-->
<!--      <div id="contact"-->
<!--           class="mt-10 mb-10 prose lg:prose-xl text-white prose-headings:text-neutral prose-headings:font-burra">-->
<!--        <h1>Contact</h1>-->
<!--        <p class="text-center text-neutral "><a class="link text-neutral"-->
<!--                                                href="mailto:epm24@jcicr.cz ">epm24@jcicr.cz</a>-->
<!--        </p>-->
<!--        <p class="text-center text-neutral ">-->
<!--          <button class="btn btn-square">-->
<!--            <a href="https://www.instagram.com/epmprague2024/">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26"-->
<!--                   style="fill:#EDBE38;">-->
<!--                <path-->
<!--                    d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"></path>-->
<!--              </svg>-->
<!--            </a>-->
<!--          </button>-->
<!--          <button class="btn btn-square ml-4">-->
<!--            <a href="https://www.facebook.com/epm2024/">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26"-->
<!--                   style="fill:#EDBE38;">-->
<!--                <path-->
<!--                    d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z"></path>-->
<!--              </svg>-->
<!--            </a>-->
<!--          </button>-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>

import Countdown from "./Countdown.vue";
import Navbar from "./Navbar.vue";
import Partners from "./Partners.vue";
import Organizers from "./Organizers.vue";
import Info from "./Info.vue";


export default {
  name: "Content",
  components: {Info, Organizers, Partners, Navbar, Countdown}
}
</script>