<script type="text/javascript">
export default {
    computed: {
        fileCounts() {
            return this.$store.getters['Files/fileCounts'];
        },
    },
};
</script>

<template>
    <div>
        <div class="cards" v-if="fileCounts.length > 0">
            <div
                class="card"
                v-for="count in fileCounts"
                v-bind:key="count._id"
            >
                <span>{{ count._id }}</span>
                <span
                    ><b>{{ count.total }}</b></span
                >
            </div>
        </div>
    </div>
</template>

<style type="text/css" scoped>
.cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid var(--border-color);
    width: 20%;
    min-height: 10vh;
    padding: 0.5rem;
    font-size: 1.2rem;
}
</style>
<style src="../../static/mobile.css"></style>
