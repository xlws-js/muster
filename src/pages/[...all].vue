<script setup lang='ts'>
const router = useRouter()
</script>

<template>
    <div>
        <div text-center text-5xl mt-20>Not Found</div>
        <button class="btn" mx-auto block mt-10 @click="router.back()">Back</button>
    </div>
</template>