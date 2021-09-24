<template>
    <div>
        <div class="add-new">
            <router-link :to="{ name: 'add' }" custom v-slot="{ navigate }">
                <button @click="navigate">Add New File</button>
            </router-link>
        </div>
        <section class="files">
            <div class="file">
                <p>title</p>
                <p>Dosya Uzantısı</p>
                <Button>Detay</Button>
            </div>
        </section>
    </div>
</template>

<style src="../../static/files.css"></style>