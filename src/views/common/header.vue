<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/">{{ $t('i18n.common_name') | capitalize }}</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">{{ $t('i18n.common_home') | capitalize }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">{{ $t('i18n.common_about') | capitalize }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/list">{{ $t('i18n.common_list') | capitalize }}</router-link>
                </li>
            </ul>
            <b-button variant="outline-secondary" size="sm" @click="changeLanguage">{{ lang }}</b-button>
        </div>
    </nav>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            lang: this.$t('i18n.common_language'),
        }
    },
    methods: {
        changeLanguage() {
            let lang = localStorage.getItem('lang');

            if (lang && lang ==='zh') {
                localStorage.setItem('lang', 'en')
            } else {
                localStorage.setItem('lang', 'zh')
            }
            this.lang = this.$t('i18n.common_language');
            this.$router.go(0);
        }
    },
    filters: {
        capitalize: function (val) {
            return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        }
    }
}
</script>
<style lang="less" scoped>
    .bg-dark {
        // background: rgba(25, 58, 46, .3)!important;
    }
</style>
