<template>
	<div class="text-center">
		<b-table striped hover :items="items" :fields="fields" />
	</div>
</template>

<script>
import {site, commonServer} from '@/lib/commonServer';

export default {
    name: 'app',
    data () {
        return {
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
	    	let params = {};

		    let promise = commonServer.getImgList(params);
	    	promise.then(function (res) {
				console.log(res);
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
