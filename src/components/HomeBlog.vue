<script setup>

</script>

<template>

    <section>

        <!-- Section Divider -->
        <div class="flex items-center my-24">
            <div class="bg-[#FFD369] w-full h-1.5 rounded-full"></div>
            <h1 class="ml-5 text-5xl font-Arvo">Blog</h1>
        </div>

        <!-- Grid Blogs Layout -->

        <div class="my-14 font-Arvo mx-36">

            <!-- Top Blog -->

            <div class="hover:cursor-pointer [&>*:first-child]:hover:scale-[1.015]  [&>*:first-child]:hover:drop-shadow-2xl [&>*:first-child]:hover:brightness-100 transition-all ease-linear">

                <div class="brightness-90 bg-center bg-[url('https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-80 rounded-2xl transition-all ease-in-out"></div>

                <div class="my-5 mx-2">
                    <span class="font-Arvo text-sm text-[#FFD369]"> Nisha Ashok </span>
                    <h3 class="text-4xl mt-2">Meta and Nvidia: The Future of Social Media and Personal Technology.</h3> 
                </div>

            </div>

            <!-- Other Blogs -->
            <div class="mt-48 grid grid-cols-4 gap-8 item-center">

                <!-- Blog Card -->
                <div class="bg-[#393E46] h-[32rem] bg-opacity-60 pb-10 rounded-2xl hover:cursor-pointer hover:scale-[1.05] [&>*:first-child]:hover:scale-105 [&>*:first-child]:hover:h-52 transition-all duration-100 ease-in-out">

                    <div class="bg-center bg-[url('https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-turkish-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-2xl h-48 mb-4 transition-all duration-100 ease-linear delay-[10ms]"></div>

                    <div class="px-5">
                        <span class="my-4 text-sm text-[#FFD369]"> Hira Pradip </span>
                        <h3 class="mt-5 text-3xl">Future of AI Electric Cars</h3>
                        <p class="mt-3 text-[#eeeeee] text-opacity-40 font-Slabo">Let's discuss the rapid advancements in autonomous driving, the current state of EVs, and the role of AI in the automotive industry.</p>
                    </div>

                </div>    
                
            </div>

        </div>

        <div class="grid place-items-center my-12">
            <a href="../../blog.html"><button class="px-6 py-2 bg-[#FFD369] rounded-md text-[#131820] text-lg font-Arvo hover:px-12 transition-all ease-linear">
                    See More
                </button></a>
        </div>

    </section>

</template>