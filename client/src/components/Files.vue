<script>
import FileCounts from './FileCount';
import ConfirmDelete from './dialogs/ConfirmDelete';
import Folders from './Folders';
import { folderMixin } from '../mixins/folderMixin';

export default {
    mixins: [folderMixin],
    components: {
        FileCounts,
        ConfirmDelete,
        Folders,
    },
    created() {
        this.$store.dispatch('Files/getFiles');
        this.$store.dispatch('Files/getFileCounts');
    },

    computed: {
        files() {
            return this.$store.getters['Files/files'];
        },
    },
    methods: {
        redirect(url) {
            window.open('http://localhost:3000' + url, '_blank');
        },
    },
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
        <section class="main">
            <Folders :folders="folders" />
            <div class="files" v-if="files.length > 0">
                <div class="file" v-for="file in files" v-bind:key="file._id">
                    <p><b>File Name:</b>&nbsp;{{ file.title }}</p>
                    <p><b>File Type:</b>&nbsp;{{ file.fileType }}</p>
                    <Button @click="redirect(file.fileUrl)">Detail</Button>
                    <ConfirmDelete
                        :id="file._id"
                        :title="file.title"
                        :path="file.fileUrl"
                    />
                </div>
            </div>
        </section>
        <div class="files" v-if="files.length <= 0">
            <router-link :to="{ name: 'add' }" custom v-slot="{ navigate }">
                <button class="not-added-yet" @click="navigate">
                    Your not added file yet.
                </button>
            </router-link>
        </div>
    </div>
</template>

<style src="../../static/files.css" ></style>
<style src="../../static/folders.css"></style>