<template>
    <header-component />
    <main>
        <slot />
    </main>
    <footer-component />
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default {
    name: "Layout",
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>

</style>
