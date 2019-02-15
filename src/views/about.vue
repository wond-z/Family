<template>
    <h3>{{ msg }}</h3>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            msg: this.$t('i18n.common_welcome_msg'),
        }
    },
    methods: {
        methodName() {

        },
    }
}
</script>

<style lang="less" scoped>
@redColor: #666;

h3 {
    margin-top: 275px;
    text-align: center;
    color: @redColor;
    font-weight: lighter;
}

</style>
