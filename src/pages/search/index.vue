<script setup lang='ts'>
import { isDark } from "@/composables"

const userName = ref('')
const router = useRouter()

const getGithubUser = async () => {
    if (!userName.value.trim()) return
    router.push(`/users/${userName.value}`)
}

</script>

<template>
    <div flex justify-center>
        <div mt-20 flex="~ col" justify-center items-center>
            <div :class="isDark ? 'i-carbon-moon' : 'i-carbon-sun'" text-3xl inline-block mb-5 />
            <p>
                <a
                    rel="noreferrer"
                    href="https://github.com/antfu/vitesse-lite"
                    target="_blank"
                >Muster Template</a>
            </p>
            <p>
                <em text-sm op-75>Opinionated Vite Starter Template</em>
            </p>

            <div py-4 />
            <input
                type="text"
                v-model="userName"
                placeholder="github user name"
                autocomplete="fase"
                p="x-4 y-1"
                w="260px"
                text-center
                bg="transparent"
                border="~ rounded gray-200 dark:gray-700"
            />
            <button mt-10 p="x-10 y-2" bg-cyan-500 rounded @click="getGithubUser">
                <div i-carbon-search text-white></div>
            </button>
        </div>
    </div>
</template>

<style lang='scss' scoped>
</style>