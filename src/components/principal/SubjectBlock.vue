<template>
<v-card flat class="subject-card">
    <v-card-text>
        Sybject
        <br>
        TEacher
        <br>
        Room
    </v-card-text>
</v-card>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.subject-card {
    margin: 1rem;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0)

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
}
</style>
