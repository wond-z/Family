<template>
    <div>
        <header-tab></header-tab>
        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTab from './views/common/header.vue';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components:{
        HeaderTab
    }
}
</script>

<style lang="less" scoped>
    
</style>
