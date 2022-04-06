<script setup lang='ts'>
import { isDark, toggleDark } from '@/composables'
</script>

<template>
    <div text-xl inline-flex gap-2>
        <button class="icon-btn" @click="toggleDark()">
            <i v-if="isDark" i-carbon-moon block></i>
            <i v-else i-carbon-sun block></i>
        </button>
        <a
            class="icon-btn"
            i-carbon-logo-github
            rel="noreferrer"
            target="_blank"
            title="github"
            href="https://github.com/xlws-js/muster"
        ></a>
    </div>
</template>