<script type="text/javascript">
import FileCounts from './FileCount';
import ConfirmDelete from './dialogs/ConfirmDelete';

export default {
    components: {
        FileCounts,
        ConfirmDelete
    },
    created() {
        this.$store.dispatch('Files/getFiles');
        this.$store.dispatch('Files/getFileCounts');
    },
    computed: {
        files() {
            return this.$store.getters['Files/files'];
        }
    },
    methods: {
        redirect(url) {
            window.open('http://localhost:3000' + url, '_blank');
        }
    }
};
</script>

<template>
    <div>
        <div class="add-new">
            <router-link :to="{ name: 'add' }" custom v-slot="{ navigate }">
                <button @click="navigate">Add New File</button>
            </router-link>
        </div>
        <FileCounts />
        <section class="files">
            <div class="file">
                <p><b>File Name:</b>&nbsp;</p>
                <p><b>File Type:</b>&nbsp;</p>
                <Button>Detail</Button>
                <ConfirmDelete />
            </div>
        </section>
    </div>
</template>

<style src="../../static/files.css"></style>