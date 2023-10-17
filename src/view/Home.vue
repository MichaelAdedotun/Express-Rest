<script setup>

</script>

<template>
      <section class="bg-[url('/src/assets/express.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
          <div class="px-20 py-56 animate-pulse">
            <h2 class="text-white text-4xl md:text-5xl font-['Playfair'] font-extralight">
                Welcome To <br>
                <span class="font-semibold font-['Display'] text-5xl md:text-6xl">Express Rest</span>
            </h2>
          </div>
      </section>

<!--About us section-->
      <section class="flex flex-col-reverse gap-20 md:gap-16 text-nav p-10 md:p-16 md:flex-row lg:p-20">
        <div class="w-full md:w-1/2">
          <img src="/src/assets/about.jpg" class="h-full" alt="about image">
        </div>
        <div class="md:w-1/2">
          <h2 class="mb-10 text-5xl font-['Lexend Deca'] font-semibold md:mb-5 md:text-4xl xl:text-5xl xl:mb-10">
            About Us
          </h2>
          <p class="text-sm mb-7 md:text-xs xl:text-sm xl:mb-12">
            Express Rest is the most preferred hotel in West Africa and
            it's all about the right mix! Located in the heart of
            Victoria Island and shielded from the hustle and bustle of the Lagos metropolis,
            we offer our corporate clients and walk in guests a perfect blend of relaxation,
            activities, and African tradition delicately infused to meet the
            highest international standard.
            <span class="block mt-5 md:mt-3">
              Overlooking the Eko Atlantic City and Ocean,
              it is just a 10-minute drive to the City Centre and only
              45minutes away from the Airport. Our hotels are designed for your
              comfort and convenience. Your security is our primary concern
              and you'll find our customer care second to none.
            </span>
          </p>
          <button class="bg-button py-2 px-6">
            <router-link to="" class="text-white rounded-sm text-sm">
              Learn More
            </router-link>
          </button>
        </div>
      </section>
  
<!--Our room section-->
    <section class="flex flex-col items-center p-10 text-nav md:px-16 md:py-10 lg:px-20">
        <h2 class="text-3xl">
          OUR ROOMS
        </h2>
        <p class="font-['Lato'] text-book-now mt-2 mb-4">
          Our rooms are fitted to suit the taste of our
          customers based on their pocket and preference
        </p>
        <div class="flex flex-col gap-5 md:flex-row my-4">
          <div class="md:w-1/3">
            <img src="/src/assets/single-room.jpg" class="h-64 w-full" alt="single room image">
            <p class="text-center">
              Single Room
            </p>
          </div>
          <div class="md:w-1/3">
            <img src="/src/assets/double-room.jpg" class="h-64 w-full" alt="double room image">
            <p class="text-center">
              Double Room
            </p>
          </div>
          <div class="md:w-1/3">
            <img src="/src/assets/suite.jpg" class="h-64 w-full" alt="suite room image">
            <p class="text-center">
              Suite
            </p>
          </div>
        </div>
        <button class="bg-button py-2 px-6 mt-5">
          <router-link to="" class="text-white rounded-sm text-sm">
            View All
          </router-link>
        </button>
    </section>

<!--Our Facilities section-->
    <section class="flex flex-col items-center p-10 text-nav  md:p-16 lg:py-10 lg:px-20">
    <h2 class="text-3xl">
      FACILITIES
    </h2>
    <p class="font-['Lato'] text-book-now mt-2 mb-4">
      We have the best facilities around to make
      your stay welcoming and worth-while
    </p>
    <div class="flex flex-col gap-5 md:flex-row my-5">
      <div class="md:w-1/3">
        <img src="/src/assets/spa.jpg" class="h-64 w-full md:w-80" alt="">
        <p class="text-center">
          Spa
        </p>
      </div>
      <div class="md:w-1/3">
        <img src="/src/assets/suite.jpg" class="h-64 w-full md:w-80" alt="">
        <p class="text-center">
          Swimming Pool
        </p>
      </div>
      <div class="md:w-1/3">
        <img src="/src/assets/golf.jpg" class="h-64 w-full md:w-80" alt="">
        <p class="text-center">
          Golf Course
        </p>
      </div>
    </div>
    <button class="bg-button py-2 px-6 mt-5">
      <router-link to="" class="text-white rounded-sm text-sm">
        View All
      </router-link>
    </button>
  </section>

</template>

<style scoped>

</style>