<script>
import FileCounts from './FileCount';
import ConfirmDelete from './dialogs/ConfirmDelete';

export default {
    components: {
        FileCounts,
        ConfirmDelete,
    },
    created() {
        this.$store.dispatch('Files/getFiles');
        this.$store.dispatch('Files/getFileCounts');
    },
    data() {
        return {
            folderName: '',
            validationError: false,
            showTooltip: false,
        };
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
        createFolder() {
            if (this.folderName.length > 0) {
                this.$store.dispatch('Folders/createFolder', this.folderName);
            } else {
                this.validationError = true;
                setTimeout(() => {
                    this.validationError = false;
                }, 3000);
            }
        },
    },
    watch: {
        showTooltip(val) {
            if (val === true) {
                setTimeout(() => {
                    this.showTooltip = false;
                }, 2000);
            }
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
            <div class="folders">
                <h2>Your Folders</h2>
                <hr />
                <ul>
                    <li>Folder Name</li>
                    <li>Folder Name</li>
                    <li>Folder Name</li>
                </ul>
                <div class="add-new-folder">
                    <div class="tooltip" v-if="showTooltip">
                        Press enter for create folder.
                    </div>
                    <div class="error" v-if="validationError">
                        Please fill the foldername area.
                    </div>
                    <input
                        v-model="folderName"
                        type="text"
                        placeholder="Create New Folder"
                        @mouseover="showTooltip = true"
                        @keypress.enter="createFolder()"
                    />
                </div>
            </div>
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