import files from '../store/modules/files';

export const fileMixin = {
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
