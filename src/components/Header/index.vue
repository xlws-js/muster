<script setup lang='ts'>
</script>

<template>
    <header
        flex
        h-14
        justify-between
        items-center
        px-6
        border-b="~ gray-200 dark:gray-700"
        fixed
        inset-0
        shadow-md
        bg-white-400
        dark:bg-dark-300
    >
        <div text-2xl hover:text-cyan-400 cursor-pointer transition duration-500>Muster Tempalte</div>
        <nav flex-1 flex justify-end px-5>
            <RouterLink class="btn" shadow-md to="/search">Search</RouterLink>
        </nav>
        <Theme></Theme>
    </header>
</template>