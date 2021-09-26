<script>
import { fileMixin } from '../mixins/fileMixin';
import ConfirmDelete from './dialogs/ConfirmDelete';

export default {
    mixins: [fileMixin],
    components: {
        ConfirmDelete,
    },
    created() {
        sessionStorage.folderName = this.$route.params.folderName;
        this.$store.dispatch(
            'Files/getFilesByFolderName',
            this.$route.params.folderName
        );
    },
    methods: {
        iconsForFileType(fileType) {
            if (fileType === 'jpg') return "<i class='fa fa-image' />";
            if (fileType === 'docx') return "<i class='fa fa-file-text' />";
            if (fileType === 'xlsx') return "<i class='fa fa-table' />";
            if (fileType === 'txt') return "<i class='fa fa-align-justify' />";
            if (fileType === 'bat') return "<i class='fa fa-desktop' />";
            if (fileType === 'src') return "<i class='fa fa-code' />";

            return "<i class='fa fa-question' />";
        },
        showPath(key, fileUrl) {
            let span = document.getElementById(`path${key}`);
            span.innerText = fileUrl;

            setTimeout(() => {
                span.innerText = '';
            }, 2000);
        },
    },
    filters: {
        capitalize: (value) => {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    },
};
</script>

<template>
    <div class="main">
        <h1>
            {{ $route.params.folderName | capitalize }} -
            <b>{{ $store.getters['Files/fileSize'] }}</b>
        </h1>
        <table border="1">
            <thead>
                <th>Dosya Adı</th>
                <th>Dosya Tipi</th>
                <th>Dosya Yolu</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(file, key) in files" v-bind:key="file._id">
                    <td>{{ file.title }}</td>
                    <td>
                        {{ file.fileType }}
                        <span v-html="iconsForFileType(file.fileType)"></span>
                    </td>
                    <td>
                        <span :id="'path' + key"></span><br />
                        <button
                            @mouseover="showPath(key, file.fileUrl)"
                            @click="redirect(file.fileUrl)"
                        >
                            Show
                        </button>
                    </td>
                    <td>
                        <ConfirmDelete
                            :id="file._id"
                            :title="file.title"
                            :path="file.fileUrl"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style src="../../static/folderDetail.css" scoped></style>
<style scoped>
.btn-delete {
    width: auto;
    min-height: 5vh;
    padding: 0 1rem;
}
.btn-delete i {
    font-size: 20px;
}
</style>