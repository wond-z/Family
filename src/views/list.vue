<template>
	<div class="">
		<b-button>新增</b-button>
		<b-table striped hover small :items="items" :fields="fields" />
		<b-pagination size="md" :total-rows="total" v-model="currentPage" :per-page="perPage" @input="getImageList()" />
		<div class="mt-3">Current Page: {{ currentPage }}</div>
		<div class="mt-3">total: {{ total }}</div>
	</div>
</template>

<script>
import {site, commonServer} from '@/lib/commonServer';

export default {
    name: 'app',
    data () {
        return {
			total: 0,
			currentPage: 1,
			perPage: 10,
			fields: {
				name: {
					label: '姓名'
				},
				gender: {
					label: '性别',
					formatter: function (item) {
						if (item === 0) {
							return '男';
						}
						return '女';
					}
				},
				birthday: {
					label: '出生日期'
				},
				phoneNumber: {
					label: '电话'
				},
				idCardNumber: {
					label: '身份证号',
					formatter: function (item) {
						if (item) {
							return item;
						}
						return '--';
					}
				},
			},
			items: []
        }
    },
    methods: {
    	getImageList: function () {
    		let _self = this;
	    	let params = {
				offset: (this.currentPage - 1) * this.perPage,
				size: this.perPage
			};

		    let promise = commonServer.getImgList(params);
	    	promise.then(function (res) {
				console.log(res);
				_self.total = res.total;
				_self.items = res.data;
	    	}).catch(function (err) {
	    		console.log(err);
	    	});
    	}
    },
	mounted () {
		this.getImageList();
	}
}
</script>

<style lang="less" scoped>

</style>
