<script type="text/javascript">
export default {
    computed: {
        fileCounts() {
            return this.$store.getters['Files/filesCounts'];
        }
    }
};
</script>

<template>
    <div>
        <div class="cards">
            {{fileCounts}}
            <div class="card">
                Dosya Türü
                <b>10</b>
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
    border: 2px solid var(--border-color);
    width: 20%;
    min-height: 10vh;
    padding: 0.5rem;
    font-size: 1.2rem;
}
</style>