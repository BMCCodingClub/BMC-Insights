<script setup>

</script>

<template>

    <section>

        <!-- Section Divider -->
        <div class="flex items-center my-24">
            <div class="bg-[#EE6C4D] w-full h-0.5"></div>
            <h1 class="ml-5 text-4xl font-Arvo">Blog</h1>
        </div>

        <!-- Grid Blogs Layout -->

        <div class="my-14 font-Arvo">

            <!-- Top Blog -->

            <div class=" p-5">

                <div class="bg-center bg-[url('https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-80 rounded-2xl"></div>

                <div class="my-5 mx-2">
                    <span class="text-[#E0FBFC] font-medium">Name</span>
                    <i><h3 class="text-4xl font-bold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></i>
                </div>

            </div>

            <!-- Other Blogs -->
            <div class="mt-48 grid grid-cols-3 gap-36 item-center">

                <!-- Blog Card -->
                <div class="">

                    <div class="bg-center bg-[url('https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-turkish-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-2xl h-64 mb-4"></div>

                    <h3 class="my-2 font-bold text-2xl px-2">BLOG TITLE</h3>
                    <p class="px-2 text-slate-400">Blog Information, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>                

            </div>

        </div>

    </section>

</template>