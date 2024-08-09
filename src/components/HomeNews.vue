<script setup>

</script>


<template>

    <section>

        <div class="max-w-8xl">

            <!-- Section Divider -->
            <div class="flex items-center mb-12">
                <h1 class="mr-5 text-4xl font-Arvo">News</h1>
                <div class="bg-[#EE6C4D] w-full h-0.5"></div>
            </div>

            <!-- Buttons -->
            <div class="flex justify-between my-4 font-Slabo">
                
                <div>
                    <button class="border-2 border-white rounded-full px-11 py-1 mx-1">
                        Sort
                    </button>

                    <button class="border-2 border-white rounded-full px-11 py-1 mx-1">
                        Filter
                    </button>
                </div>

                <div>
                    <button class="border-2 border-white rounded-full px-5 py-1 mx-1">
                        1
                    </button>

                    <button class="border-2 border-white rounded-full px-5 py-1 mx-1">
                        2
                    </button>

                    <button class="border-2 border-white rounded-full px-5 py-1 mx-1">
                        3
                    </button>
                </div>

            </div>

            <!-- News -->
            <div class="grid gap-y-24 py-20">

                <!-- Example News -->
                <div class="flex justify-center items-center my-">
                    <div class="w-auto max-w-3xl mr-5">
                        <div class="my-2 text-4xl font-bold font-Arvo drop-shadow-lg">
                            <i><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1></i>
                        </div>

                        <div class="text-slate-400 mt-8 text-xl font-RobotoSerif">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Nunc bibendum venenatis placerat. Donec posuere tincidunt laoreet.  Suspendisse sit amet urna ac orci egestas condimentum at vel elit</p>
                        </div>
                    </div>

                    <div class="">
                        <img class="rounded-lg w-52 aspect-[5/6] drop-shadow-lg" draggable=false src="https://images.pexels.com/photos/27358817/pexels-photo-27358817/free-photo-of-table-and-chairs-near-cafe-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                    </div>
                </div>

                <div class="flex justify-center items-center my-3xl">
                    <div class="w-auto max-w-3xl mr-5">
                        <div class="my-2 text-4xl font-bold font-Arvo drop-shadow-lg">
                            <i><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1></i>
                        </div>

                        <div class="text-slate-400 mt-8 text-xl font-RobotoSerif">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Nunc bibendum venenatis placerat. Donec posuere tincidunt laoreet.  Suspendisse sit amet urna ac orci egestas condimentum at vel elit</p>
                        </div>
                    </div>

                    <div class="">
                        <img class="rounded-lg w-52 aspect-[5/6] drop-shadow-lg" draggable=false src="https://images.pexels.com/photos/27358817/pexels-photo-27358817/free-photo-of-table-and-chairs-near-cafe-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                    </div>
                </div>

            </div>
        </div>

    </section>
    

</template>