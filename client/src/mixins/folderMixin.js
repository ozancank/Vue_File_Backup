import folders from '../store/modules/folders';

export const folderMixin = {
    created() {
        this.$store.dispatch('Folders/getFolders');
    },
    computed: {
        folders() {
            return this.$store.getters['Folders/folders'];
        }
    }
};
