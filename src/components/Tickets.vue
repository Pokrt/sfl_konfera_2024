<template>
  <section id="ticket-page" class="w-full min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
    <div class="max-w-4xl w-full flex flex-col items-center">
      <div class="prose lg:prose-xl text-black prose-headings:text-neutral">
        <h1 id="tickets">Vstupenky</h1>
      </div>
      <iframe
        class="smsticket-iframe mt-8"
        src="https://www.smsticket.cz/api/widgets/event-sale/v2/cs/48423?eventInfo=false"
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
        style="height: 606px; width: 100%; max-width: 920px;">
      </iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "TicketPage",
  mounted() {
    // Dynamically load the script when the component is mounted
    const script = document.createElement("script");
    script.src = "https://www.smsticket.cz/static/scripts/dist/widgets/event-sale-iframe-v2/host.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
/* Add your specific styles here if needed */
</style>
