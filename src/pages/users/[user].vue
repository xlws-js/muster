<script setup lang='ts'>
const { user } = defineProps<{ user: string }>()

interface UserInfo {
    avatar_url: string
    html_url: string
    id: number
    login: string
    url: string
}

const { data, isFetching } = await useFetch(`https://api.github.com/search/users?q=${user}`)
    .json<{ items: UserInfo[] }>()
</script>

<template>
    <div grid grid-cols-6 gap-10 mt-30 justify-items-center>
        <div v-if="isFetching">Loading...</div>
        <section w="200px" h="100px" v-for="user of data?.items" :key="user.id">
            <img rounded-xl w-full h-full object-cover :src="user.avatar_url" :alt="user.login" />
            <div text-center>{{ user.login }}</div>
        </section>
    </div>
</template>

<style lang='scss' scoped>
</style>