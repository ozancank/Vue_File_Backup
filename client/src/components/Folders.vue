<script>
import { folderMixin } from '../mixins/folderMixin';
export default {
    mixins: [folderMixin],
    // props: {
    //     folders: {
    //         required: true,
    //     },
    // },
};
</script>

<template>
    <div class="folders">
        <h2>Your Folders</h2>
        <div class="folder-list">
            <ul v-for="folder in folders" v-bind:key="folder">
                <router-link
                    :to="{ name: 'folder', params: { folderName: folder } }"
                    custom
                    v-slot="{ navigate }"
                >
                    <li @click="navigate">{{ folder }}</li>
                </router-link>
            </ul>
        </div>
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
</template>

<style src="../../static/mobile.css"></style>