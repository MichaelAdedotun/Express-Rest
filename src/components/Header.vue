<template>

     <header class=" bg-nav sticky top-0 px-10 py-5
                    md:px-8
                    lg:px-14
                    xl:px-20
                  "
     >
       <nav class="flex justify-between items-center relative">
         <div class="">
           <router-link to="/">
             <h1 class="text-2xl text-white font-['Futura']">
              Express Rest
             </h1>
           </router-link>
         </div>

         <ul class=" hidden text-book-now font-['Lato']
                    md:flex md:justify-between md:items-center
                  "
         >
           <li class="md:mr-10">
             <router-link to="/" class="hover:text-white hover:border-b hover:pb-0.5">
               Home
             </router-link>
           </li>
           <li class="md:mr-10">
             <router-link to="/" class="hover:text-white hover:border-b hover:pb-0.5">
               About Us
             </router-link>
           </li>
           <li class="md:mr-10">
             <router-link to="" class="hover:text-white hover:border-b hover:pb-0.5">
               Rooms
             </router-link>
           </li>
           <li class="md:mr-10">
             <router-link to="" class="hover:text-white hover:border-b hover:pb-0.5">
                Facilities
             </router-link>
           </li>
           <li class="md:mr-10">
             <router-link to="" class="hover:text-white hover:border-b hover:pb-0.5">
               Contact Us
             </router-link>
           </li>
           <li class="hidden bg-book-now py-1 px-3 md:block">
               <router-link to="" class="text-white rounded-sm">
                 Book Now
               </router-link>
           </li>
         </ul>

         <div class="text-3xl md:hidden" @click="open">
           <button><i class="fa-solid fa-bars"></i></button>
         </div>
       </nav>
     </header>

     <div class="fixed bg-nav text-book-now w-screen z-10" v-if="option">
       <ul class="p-8
                  md:hidden
                "
       >
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="/" class="hover:text-white">
             Home
           </router-link>
         </li>
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="/about" class="hover:text-white">
             About
           </router-link>
         </li>
         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="" class="hover:text-white">
             Services
           </router-link>
         </li>

         <li class="pl-5 pb-3 border-b border-b-gray-700 mb-3">
           <router-link to="/contact" class="hover:text-white">
             Contact
           </router-link>
         </li>
       </ul>
     </div>


</template>

<script>
export default {
  name: "Header",

  data(){
    return{
      option: false
    }
  },

  methods: {
      open(){
        this.option = ! this.option
      }
  }
}
</script>

<style scoped>

</style>