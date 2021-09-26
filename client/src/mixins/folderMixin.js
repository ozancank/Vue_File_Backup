import folders from '../store/modules/folders';

export const folderMixin = {
    data() {
        return {
            folderName: '',
            validationError: false,
            showTooltip: false
        };
    },
    methods: {
        createFolder() {
            if (this.folderName.length > 0) {
                this.$store.dispatch('Folders/createFolder', this.folderName);
                this.folderName = '';
            } else {
                this.validationError = true;
                setTimeout(() => {
                    this.validationError = false;
                }, 3000);
            }
        }
    },
    watch: {
        showTooltip(val) {
            if (val === true) {
                setTimeout(() => {
                    this.showTooltip = false;
                }, 2000);
            }
        }
    },
    created() {
        this.$store.dispatch('Folders/getFolders');
    },
    computed: {
        folders() {
            return this.$store.getters['Folders/folders'];
        }
    }
};
