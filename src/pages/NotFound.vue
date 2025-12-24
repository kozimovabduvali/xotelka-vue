<template>
  <!-- Hero -->
  <section class="pt-20 lg:pt-13.5 pb-30.25">
    <div class="container-base relative">

      <div class="w-max mx-auto relative mb-6.25">
        <h1
          class="relative z-0 font-black text-[182px] md:text-[250px] lg:text-[373px] text-center  text-transparent bg-clip-text gradient-text">
          404
        </h1>

        <div>
          <img
            class="h-32.5 md:h-50 lg:h-62.5 object-contain absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2 lg:-translate-y-5.5 z-10"
            src="../assets/images/removal.png" alt="img">
        </div>
      </div>

      <div class="w-full max-w-125 mx-auto text-center mb-14 lg:mb-22">
        <h2 class="font-black md:text-xl lg:text-2xl leading-[140%] mb-2">
          Здесь пустота. Но каждая пустота — место для новой мечты
        </h2>

        <p class="max-w-90 mx-auto max-md:text-sm leading-[150%]">
          К сожалению, такой страницы нет.Но путь к желаниям всегда открыт!
        </p>
      </div>

      <a href="/"
        class="max-md:text-sm !leading-none flex border bg-transparent border-secondary text-secondary rounded-lg transition duration-200 hover:bg-secondary hover:text-white text-center w-max mx-auto px-5 py-2.5 lg:py-4">
        На главную
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>


<style scoped>
.gradient-text {
  background: linear-gradient(158.95deg,
      rgba(116, 215, 251, 0.32) 13.9%,
      rgba(94, 196, 233, 0.32) 102.18%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>