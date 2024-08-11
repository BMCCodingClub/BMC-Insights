<script setup>

</script>


<template>

    <section>

        <div class="max-w-8xl">

            <!-- Section Divider -->
            <div class="flex items-center mb-12">
                <h1 class="mr-5 text-5xl font-Arvo">News</h1>
                <div class="bg-[#FFD369] w-full h-1.5 rounded-full"></div>
            </div>

            <!-- Buttons
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

            </div> -->

            <!-- News -->
            <div class="grid gap-y-24 py-20">

                <!-- Example News -->
                <div class="flex justify-center items-center hover:cursor-pointer [&>*:first-child]:hover:border-y-4 [&>*:first-child]:hover:border-y-[#FFD369] [&>*>img]:hover:shadow-2xl transition-all ease-linear">

                    <div class="bg-[#393E46] py-4 px-8 rounded-l-lg bg-opacity-25 transition-all duration-75 ease-linear">
                        <div class="w-auto max-w-3xl mr-5">
                            <div class="my-2 text-4xl font-Arvo drop-shadow-lg">
                                <h1>Thousands of Corporate Secrets Were Left Exposed. This Guy Found Them All.</h1>
                            </div>

                            <div class="mt-8 text-lg font-RobotoSerif opacity-60">
                                <p>Security researcher Bill Demirkapi found more than 15,000 hardcoded secrets and 66,000 vulnerable websites—all by searching overlooked data sources.</p>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <img class="transition-all duration-75 ease-in-out rounded-lg w-52 aspect-[5/6] drop-shadow-lg object-cover" draggable=false src="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                    </div>

                </div>
                
             <div class="flex justify-center items-center hover:cursor-pointer [&>*:first-child]:hover:border-y-4 [&>*:first-child]:hover:border-y-[#FFD369] [&>*>img]:hover:shadow-2xl transition-all ease-linear">

                <div class="bg-[#393E46] py-4 px-8 rounded-l-lg bg-opacity-25 transition-all duration-75 ease-linear">
                    <div class="w-auto max-w-3xl mr-5">
                        <div class="my-2 text-4xl font-Arvo drop-shadow-lg">
                            <h1>How to Watch Billie Eilish and Snoop Dogg.</h1>
                        </div>

                        <div class="mt-8 text-lg font-RobotoSerif opacity-60">
                            <p>The closing ceremony of the 2024 Paris Olympic Games will see a symbolic handover from Paris to Los Angeles that also features a performance by the Red Hot Chili Peppers.</p>
                        </div>
                    </div>
                </div>

                <div class="">
                    <img class="transition-all duration-75 ease-in-out rounded-lg w-52 aspect-[5/6] drop-shadow-lg object-cover" draggable=false src="https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s">
                </div>

            </div>
                

            </div>

            <div class="grid place-items-center my-12">
                <a href="../../news.html"><button class="px-6 py-2 bg-[#FFD369] rounded-md text-[#131820] text-lg font-Arvo hover:px-12 transition-all ease-linear">
                    See More
                </button></a>
            </div>
        </div>

    </section>
    

</template>