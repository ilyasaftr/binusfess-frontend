<template>
    <div>
        <header class="shadow-sm bg-black">
            <nav class="container mx-auto p-4 flex justify-between text-white">
                <NuxtLink to="" class="font-bold">BINUS FESS</NuxtLink>
            </nav>
        </header>
        <div class="container mt-5 max-w-4xl m-auto">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>