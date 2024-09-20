<template>
    <div class="grid xl:grid-cols-2 grid-cols-1 items-center">
        <div class="space-y-3 lg:order-1 order-2">
            <h3 class="xl:text-5xl text-3xl font-extrabold">Hi There 🚀</h3>
            <h1 class="xl:text-3xl text-2xl">I'm <b>Mohammad Ranjbar</b> 🖖</h1>
            <p>
                a Tehran-based frontend developer with <b>4+</b> years of experience in
                <NuxtLink
                    external
                    to="https://vuejs.org/"
                    class="underline text-green-500 font-bold hover:text-green-600 transition-all"
                >
                    Vue
                </NuxtLink>
                &nbsp;
                <NuxtLink
                    external
                    to="https://react.dev/"
                    class="underline text-blue-500 font-bold hover:text-blue-600 transition-all"
                >
                    React
                </NuxtLink>
                &nbsp;and
                <NuxtLink
                    external
                    to="https://www.typescriptlang.org/"
                    class="underline text-blue-500 font-bold hover:text-blue-600 transition-all"
                >
                    Typescript </NuxtLink
                >. I've made impactful contributions to open source projects and have developed multiple frontend
                courses. Let's collaborate and create exceptional user experiences together!
            </p>
        </div>

        <div class="h-full lg:order-2 order-1 justify-self-center">
            <NuxtImg fit="cover" placeholder width="400" height="400" src="/img/me.webp" class="rounded-lg" />
        </div>
    </div>
</template>
