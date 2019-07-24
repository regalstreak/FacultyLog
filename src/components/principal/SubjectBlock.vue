<template>
<v-card flat class="subject-card">
    <v-card-text v-if="subject">
        {{ subject.subject }}
        <br>
        <br>
        {{ subject.faculty }}
        <br>
        <br>
        {{ subject.class }}
    </v-card-text>
    <v-card-text v-else>
        none
    </v-card-text>
</v-card>
</template>

<script>
export default {
    props:["subject"]
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
