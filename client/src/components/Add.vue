<script type="text/javascript">
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import { FILE_API } from '../store/http-config';

export default {
    data() {
        return {
            title: '',
            dropzoneOptions: {
                url: FILE_API + '/upload',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                autoProcessQueue: false,
                addRemoveLinks: true
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.dropzone.dropzone.options.headers = {
                title: this.title
            };
            this.$refs.dropzone.processQueue();
        },
        whenAddedFile() {
            this.$notify({
                group: 'when-added',
                title: 'Your file added'
            });
        },
        whenRemovedFile() {
            this.$notify({
                group: 'when-added',
                title: 'Your file removed'
            });
        },
        success() {
            this.$notify({
                group: 'when-added',
                title: 'Your files uploaded successfully'
            });
        }
    },
    components: {
        vueDropzone: vue2Dropzone
    }
};
</script>

<template>
    <div>
        <form @submit="onSubmit()">
            <input type="text" placeholder="Enter Title" v-model="title" />
            <vueDropzone
                @vdropzone-file-added="whenAddedFile()"
                @vdropzone-success="success()"
                @vdropzone-removed-file="whenRemovedFile()"
                id="dropzone"
                ref="dropzone"
                :options="dropzoneOptions"
            />
            <button>Add File</button>
        </form>

        <router-link :to="{ name: 'files' }" custom v-slot="{ navigate }">
            <div class="floating-action-button" @click="navigate">
                <i class="fa fa-arrow-left fa-2x"></i>
            </div>
        </router-link>
    </div>
</template>

<style src="../../static/add.css"></style>