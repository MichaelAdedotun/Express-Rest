<script setup xmlns="http://www.w3.org/1999/html">

</script>

<template>
      <section class="bg-[url('/src/assets/express.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gray-600 text-white">
        <div class="px-12 md:px-20 py-56 animate-[pulse_5s_linear_infinite]">
          <h2 class="text-3xl md:text-4xl font-['Playfair'] font-light">
            Welcome To <br>
            <span class="text-4xl md:text-5xl font-semibold">
              Express Rest
            </span>
          </h2>
        </div>
      </section>

<!--About us section-->
      <section id="about" class="flex flex-col-reverse gap-20 h-full md:gap-16 text-nav px-8 py-10 md:p-16 md:flex-row lg:p-20">
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
    <section class="flex flex-col px-8 py-10 items-center text-nav md:px-16 lg:px-20">
        <h2 class="text-3xl">
          OUR ROOMS
        </h2>
        <p class="font-['Lato'] text-book-now mt-2 mb-4">
          Our rooms are fitted to suit the taste of our
          customers based on their pocket and preference
        </p>
        <div class="flex flex-col gap-5 items-start md:flex-row my-4">
          <div class="w-full md:w-1/3">
            <img src="/src/assets/single-room.jpg" class="h-64 w-full md:w-80" alt="single room image">
            <p class="text-center">
              Single Room
            </p>
          </div>
          <div class="w-full md:w-1/3">
            <img src="/src/assets/double-room.jpg" class="h-64 w-full md:w-80" alt="double room image">
            <p class="text-center">
              Double Room
            </p>
          </div>
          <div class="w-full md:w-1/3">
            <img src="/src/assets/suite.jpg" class="h-64 w-full md:w-80" alt="suite room image">
            <p class="text-center">
              Suite
            </p>
          </div>
        </div>
        <button class="bg-button py-2 px-6 mt-5">
          <router-link to="/rooms" class="text-white rounded-sm text-sm">
            View All
          </router-link>
        </button>
    </section>

<!--Our Facilities section-->
    <section class="flex flex-col items-center px-8 py-10 text-nav  md:p-16 lg:py-10 lg:px-20">
    <h2 class="text-3xl">
      FACILITIES
    </h2>
    <p class="font-['Lato'] text-book-now mt-2 mb-4">
      We have the best facilities around to make
      your stay welcoming and worth-while
    </p>
    <div class="flex flex-col gap-5 md:flex-row my-5">
      <div class="md:w-1/3">
        <img src="/src/assets/spa.jpg" class="h-64 w-96 md:w-80" alt="">
        <p class="text-center">
          Spa
        </p>
      </div>
      <div class="md:w-1/3">
        <img src="/src/assets/pool.jpg" class="h-64 w-full md:w-80" alt="">
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
      <router-link to="/facilities" class="text-white rounded-sm text-sm">
        View All
      </router-link>
    </button>
  </section>

<!--Testimonial section-->
    <section class="px-8 py-10 md:px-20 flex flex-col items-center text-nav">
      <div class="mb-20">
        <h2 class="text-3xl">
          TESTIMONIALS
        </h2>
      </div>
      <div class=" px-5 pt-5 pb-10 bg-test">
        <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
          <a href="#" class="relative block">
            <img alt="profil" src="/src/assets/about.jpg" class="mx-auto object-cover rounded-full h-20 w-20 "/>
          </a>
        </div>
        <div class="w-full mb-5">
          <p class="font-bold text-center text-indigo-500 text-md">
            Oladeni Ifeoluwanimi
          </p>
          <div class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.88889 8.66667L0 4.33333L4.33333 3.61111L6.5 0L8.66667 3.61111L13 5.05556L10.1111 7.94444L10.8333 13L6.5 10.8333L2.16667 13L2.88889 8.66667Z" fill="#F2994A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.88889 8.66667L0 4.33333L4.33333 3.61111L6.5 0L8.66667 3.61111L13 5.05556L10.1111 7.94444L10.8333 13L6.5 10.8333L2.16667 13L2.88889 8.66667Z" fill="#F2994A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.88889 8.66667L0 4.33333L4.33333 3.61111L6.5 0L8.66667 3.61111L13 5.05556L10.1111 7.94444L10.8333 13L6.5 10.8333L2.16667 13L2.88889 8.66667Z" fill="#F2994A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.88889 8.66667L0 4.33333L4.33333 3.61111L6.5 0L8.66667 3.61111L13 5.05556L10.1111 7.94444L10.8333 13L6.5 10.8333L2.16667 13L2.88889 8.66667Z" fill="#F2994A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.88889 8.66667L0 4.33333L4.33333 3.61111L6.5 0L8.66667 3.61111L13 5.05556L10.1111 7.94444L10.8333 13L6.5 10.8333L2.16667 13L2.88889 8.66667Z" fill="#F2994A"/>
            </svg>
          </div>
        </div>
        <div class="w-full mb-10">
          <p class="px-14 md:px-20 text-sm text-center">
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly yourself.
            Customer service was top notch and i will give it to details and work put in
            the discorstions of the room.
          </p>
        </div>

        <div class="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
            <path d="M21.5343 5.01613C21.5502 5.20718 21.5502 5.39713 21.5502 5.58709C21.5502 11.4004 16.6004 18.0991 7.55465 18.0991C4.76776 18.0991 2.17871 17.3775 0 16.1242C0.395685 16.1646 0.776715 16.1788 1.18828 16.1788C3.40239 16.1836 5.55381 15.5217 7.29575 14.3C6.26919 14.2834 5.27406 13.9806 4.4493 13.434C3.62455 12.8873 3.01134 12.1241 2.6953 11.2508C2.99939 11.2912 3.3047 11.3185 3.62467 11.3185C4.06554 11.3185 4.50885 11.2639 4.92041 11.169C3.80634 10.9679 2.80457 10.4281 2.08543 9.64132C1.36629 8.85458 0.974182 7.86945 0.975779 6.85346V6.79888C1.63159 7.1253 2.39243 7.32944 3.19845 7.35674C2.52321 6.95563 1.96953 6.41135 1.58682 5.77245C1.2041 5.13355 1.00425 4.4199 1.00509 3.69517C1.00509 2.87858 1.24812 2.12967 1.67433 1.47683C2.91041 2.83602 4.45207 3.94797 6.19947 4.74065C7.94688 5.53333 9.86106 5.98907 11.818 6.07836C11.7423 5.75084 11.6959 5.41133 11.6959 5.07071C11.6956 4.49316 11.8226 3.92122 12.0697 3.38757C12.3168 2.85393 12.6791 2.36905 13.136 1.96066C13.5928 1.55227 14.1353 1.22837 14.7322 1.00749C15.3292 0.786599 15.969 0.673053 16.6151 0.67334C18.0318 0.67334 19.3104 1.20391 20.2092 2.06198C21.3105 1.87161 22.3666 1.51223 23.3308 0.999759C22.9637 2.01593 22.1947 2.8776 21.1679 3.42334C22.1447 3.32375 23.0992 3.09414 24 2.74212C23.3272 3.61886 22.4936 4.38769 21.5343 5.01613Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
            <path d="M21.9137 4.18477C21.6244 3.53368 21.1822 2.94241 20.6154 2.4488C20.0487 1.95519 19.3699 1.57012 18.6225 1.31824C17.7479 1.03219 16.824 0.877522 15.89 0.860814C14.6862 0.815071 14.305 0.802002 11.2525 0.802002C8.2 0.802002 7.80875 0.802002 6.615 0.860814C5.68174 0.876668 4.75845 1.03137 3.885 1.31824C3.13742 1.56983 2.45846 1.95479 1.89167 2.44844C1.32488 2.94209 0.882786 3.53351 0.59375 4.18477C0.265381 4.94673 0.0882681 5.75182 0.07 6.56557C0.01625 7.61329 0 7.94547 0 10.6062C0 13.2658 -9.31323e-09 13.6045 0.07 14.6468C0.08875 15.4614 0.265 16.2652 0.59375 17.0286C0.883597 17.6797 1.32612 18.2709 1.89304 18.7644C2.45997 19.258 3.13883 19.6431 3.88625 19.8952C4.75804 20.1927 5.68171 20.3585 6.6175 20.3853C7.82125 20.431 8.2025 20.4452 11.255 20.4452C14.3075 20.4452 14.6987 20.4452 15.8925 20.3853C16.8264 20.3687 17.7503 20.2144 18.625 19.9289C19.3722 19.6765 20.0508 19.2911 20.6175 18.7973C21.1841 18.3036 21.6265 17.7123 21.9162 17.0613C22.245 16.2989 22.4212 15.4952 22.44 14.6805C22.4937 13.6328 22.51 13.3006 22.51 10.6399C22.51 7.97923 22.51 7.64161 22.44 6.59933C22.4254 5.77408 22.2474 4.95722 21.9137 4.18477ZM20.3913 14.5662C20.3832 15.1938 20.2517 15.8156 20.0025 16.4046C19.8148 16.8281 19.5274 17.2127 19.1588 17.5336C18.7903 17.8546 18.3487 18.1047 17.8625 18.268C17.194 18.4842 16.4879 18.5987 15.775 18.6068C14.5875 18.6547 14.2525 18.6667 11.2075 18.6667C8.16 18.6667 7.84875 18.6667 6.63875 18.6068C5.92616 18.5992 5.22041 18.4846 4.5525 18.268C4.06461 18.1057 3.62125 17.856 3.25111 17.535C2.88097 17.214 2.59229 16.8289 2.40375 16.4046C2.15806 15.822 2.02664 15.2075 2.015 14.5869C1.96125 13.5522 1.94875 13.2603 1.94875 10.6073C1.94875 7.95309 1.94875 7.6819 2.015 6.62656C2.02308 5.99925 2.15457 5.37781 2.40375 4.78923C2.785 3.92992 3.56625 3.25359 4.5525 2.92468C5.22074 2.70918 5.92628 2.59464 6.63875 2.58596C7.8275 2.53913 8.16125 2.52606 11.2075 2.52606C14.2538 2.52606 14.5662 2.52606 15.775 2.58596C16.488 2.59344 17.1942 2.70802 17.8625 2.92468C18.3487 3.08834 18.7902 3.33876 19.1587 3.65986C19.5272 3.98096 19.8147 4.36564 20.0025 4.78923C20.2482 5.37185 20.3796 5.98633 20.3913 6.60695C20.445 7.64269 20.4587 7.93349 20.4587 10.5876C20.4587 13.2407 20.4587 13.5261 20.405 14.5673H20.3913V14.5662Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path d="M12.2028 0.802002C13.1928 0.802002 16.5497 1.03916 18.1342 4.0701C18.6641 5.08999 18.5372 6.82347 18.4327 8.21558L18.4302 8.26556C18.4166 8.42083 18.4078 8.56121 18.4004 8.70159C18.5233 8.75758 18.6617 8.78404 18.8009 8.77817C19.1006 8.76434 19.4601 8.67607 19.8344 8.52186C19.9785 8.46086 20.1376 8.43023 20.2983 8.43253C20.4799 8.43253 20.6578 8.45699 20.807 8.5091C21.256 8.63672 21.5408 8.91855 21.5408 9.22589C21.557 9.60981 21.1516 9.94375 20.3282 10.2245C20.2399 10.249 20.118 10.2894 19.9849 10.3266C19.5334 10.4425 18.8444 10.634 18.6504 11.0189C18.5608 11.2114 18.5894 11.4667 18.7723 11.7602L18.7872 11.774C18.8469 11.8899 20.3145 14.7465 23.5806 15.208C23.7004 15.2245 23.809 15.2778 23.8862 15.3579C23.9633 15.4379 24.0037 15.5393 23.9997 15.643C23.9997 15.7068 23.9836 15.7695 23.955 15.8355C23.7149 16.3215 22.6826 16.6809 20.8083 16.9213C20.7498 16.9989 20.6889 17.2425 20.6441 17.4094C20.6167 17.5626 20.5695 17.7168 20.511 17.8816C20.4352 18.1135 20.2411 18.2273 19.9563 18.2273H19.9265C19.7451 18.2201 19.5649 18.1991 19.3879 18.1645C18.9694 18.0873 18.5424 18.0488 18.1143 18.0497C17.8158 18.0497 17.5173 18.0624 17.2039 18.1135C16.6032 18.2028 16.0795 18.5101 15.4801 18.8685C14.6256 19.3801 13.653 19.9703 12.1854 19.9703C12.1257 19.9703 12.066 19.9576 12.0038 19.9576H11.8558C10.3869 19.9576 9.42923 19.3801 8.57602 18.8558C7.97778 18.4963 7.46909 18.19 6.86836 18.0996C6.56154 18.0605 6.25196 18.0391 5.94176 18.0358C5.40073 18.0358 4.98284 18.1124 4.66941 18.1635C4.45797 18.2007 4.27887 18.2262 4.12838 18.2262C3.99722 18.2347 3.86675 18.2035 3.75985 18.1379C3.65296 18.0724 3.57647 17.9768 3.54382 17.8678C3.48412 17.704 3.45551 17.5349 3.41074 17.3829C3.36348 17.2276 3.30502 16.9617 3.24532 16.8958C1.32622 16.7054 0.293908 16.3459 0.0551081 15.8472C0.0221252 15.7867 0.00352304 15.7213 0.000383368 15.6547C-0.00439788 15.5508 0.0356798 15.4491 0.112978 15.3689C0.190277 15.2887 0.299391 15.2356 0.419526 15.2197C3.68436 14.7582 5.15199 11.9027 5.21293 11.7825L5.2291 11.7581C5.40944 11.4635 5.45297 11.205 5.3485 11.0147C5.15447 10.6435 4.46419 10.4521 4.01769 10.3234C3.89888 10.2978 3.7828 10.2636 3.67068 10.2213C2.56375 9.8491 2.41325 9.42583 2.4742 9.13231C2.56375 8.72393 3.14706 8.45486 3.64208 8.45486C3.78759 8.45486 3.91197 8.47932 4.02515 8.51867C4.44429 8.68351 4.81493 8.77497 5.1296 8.77497C5.29082 8.78003 5.45078 8.74887 5.59352 8.68458L5.54252 8.1975C5.44302 6.80752 5.31616 5.07616 5.84973 4.06159C7.387 1.04554 10.7364 0.8137 11.7252 0.8137L12.1418 0.802002H12.2028Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>

    <section class="flex justify-between items-center bg-need px-12 md:px-20 py-5">
        <div class="text-white text-sm md:text-xl">
          Need to make enquiries?
        </div>
      <button class="bg-button py-1 px-3 md:py-2 md:px-5">
        <router-link to="" class="text-white rounded-sm text-sm">
          Contact Us
        </router-link>
      </button>
    </section>
</template>

<style scoped>

</style>