<template>
    <Header></Header>
    <Suspense>
        <main h-full overflow-hidden>
            <RouterView #default="{ Component }">
                <Transition name="page" mode="out-in">
                    <component :is="Component"></component>
                </Transition>
            </RouterView>
        </main>
    </Suspense>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>