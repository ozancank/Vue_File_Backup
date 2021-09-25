<script type="text/javascript">
import Header from './components/Header.vue';

export default {
    components: { Header }
};
</script>

<template>
    <div>
        <notifications
            group="when-added"
            position="bottom right"
            closeOnClick
        />
        <Header />
        <router-view />
    </div>
</template>

<style src="../static/style.css"></style>