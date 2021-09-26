<script>
export default {
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
    <div>
        <h1>{{ $route.params.folderName | capitalize }}</h1>
        <table border="1">
            <thead>
                <th>Dosya Adı</th>
                <th>Dosya Tipi</th>
                <th>Dosya Yolu</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td>file</td>
                    <td>file</td>
                    <td>file</td>
                    <td>
                        <button><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style src="../../static/folderDetail.css" scoped></style>