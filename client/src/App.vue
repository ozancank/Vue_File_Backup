<script type="text/javascript">
import Header from './components/Header.vue';

export default {
    components: { Header },
};
</script>

<template>
    <div>
        <notifications group="when-added" position="bottom right" />
        <notifications group="when-deleted" position="bottom right" />
        <Header />
        <router-view />
    </div>
</template>

<style src="../static/style.css"></style>