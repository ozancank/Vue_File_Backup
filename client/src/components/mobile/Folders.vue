<script>
import { folderMixin } from '../../mixins/folderMixin';
export default {
    mixins: [folderMixin],
};
</script>

<template>
    <div>
        <div class="mobile-folder-list">
            <div class="folder-list">
                <ul>
                    <router-link
                        v-for="folder in folders"
                        :key="folder"
                        :to="{ name: 'folder', params: { folderName: folder } }"
                        custom
                        v-slot="{ navigate }"
                    >
                        <li @click="navigate">{{ folder }}</li>
                    </router-link>
                </ul>
            </div>
            <div class="create-folder">
                <input
                    type="text"
                    v-model="folderName"
                    @keypress.enter="createFolder()"
                    placeholder="Press enter for create folder"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.mobile-folder-list {
    position: relative;
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        to top,
        #fdcbf1 0%,
        #fdcbf1 1%,
        #e6dee9 100%
    );
}

.folder-list ul {
    margin-top: 5rem;
    list-style-type: none;
    font-size: 1.2rem;
    line-height: 40px;
}

.create-folder {
    width: 100%;
    position: absolute;
    bottom: 2rem;
    display: flex;
    justify-content: center;
}

.create-folder input {
    border: none;
    outline: none;
    height: 50px;
    width: 90%;
    border-radius: 20px 0px 20px 0px;
    font-size: 1.2rem;
    transition: all 0.3s;
    text-align: center;
}

.create-folder input:focus {
    background-color: #efefef;
}
</style>