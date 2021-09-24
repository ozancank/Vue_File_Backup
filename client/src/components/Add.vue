<script type="text/javascript">
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import { FILE_API } from '../store/http-config';

export default {
    data() {
        return {
            dropzoneOptions: {
                url: FILE_API + '/upload',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { 'title': 'header value' }
            }
        };
    },
    components: {
        vueDropzone: vue2Dropzone
    }
};
</script>

<template>
    <div>
        <form>
            <input type="text" placeholder="Enter Title" />
            <vueDropzone
                id="dropzone"
                ref="dropzone"
                :options="dropzoneOptions"
            />
            <button>Add File</button>
        </form>
    </div>
</template>

<style src="../../static/add.css"></style>