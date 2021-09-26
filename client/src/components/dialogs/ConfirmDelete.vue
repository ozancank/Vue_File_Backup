<script>
export default {
    props: ['id', 'path', 'title'],
    data() {
        return { showModal: false };
    },
    methods: {
        onDelete() {
            this.$store.dispatch('Files/deleteFile', {
                id: this.id,
                path: this.path,
            });
            this.showModal = false;
        },
    },
};
</script>

<template>
    <div>
        <transition name="modal">
            <div class="confirm-delete-modal" v-if="showModal">
                <p>
                    Are you sure delete this file <b>{{ title }}</b
                    >?
                </p>
                <button @click="onDelete()" class="btn-delete">Delete</button>
                <button @click="showModal = false">No Don't</button>
            </div>
        </transition>
        <button class="btn-delete" @click="showModal = !showModal">
            <i class="fa fa-trash"></i>
        </button>
    </div>
</template>

<style scoped>
.btn-delete {
    background-color: red;
    width: auto;
    min-height: 5vh;
    padding: 0 1.5rem;
}
.btn-delete i {
    font-size: 20px;
}
.confirm-delete-modal {
    position: absolute;
    top: 20%;
    left: 30%;
    background-color: white;
    border: 5px solid var(--border-color);
    width: 40%;
    min-height: 20vh;
    padding: 1.5rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.modal-enter-active {
    animation: modal-opening 1s;
}
.modal-leave-to {
    animation: modal-closing 1s;
}

@keyframes modal-opening {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
}

@keyframes modal-closing {
    to {
        transform: translateY(-50px);
        opacity: 0;
    }
}
</style>