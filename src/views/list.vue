<template>
	<div class="">
		<!-- <i class="fa fa-plus fa-spin"> -->
		<b-button class="m-2" variant="outline-dark" size="sm" v-b-modal.modalAdd><i class="fa fa-plus"></i> 新增</b-button>
		<b-table striped hover small :items="items" :fields="fields" />
		<b-pagination size="sm" variant="success" :total-rows="total" v-model="currentPage" :per-page="perPage" @input="getPersons()" />
		<div class="mt-3">Current Page: {{ currentPage }}</div>
		<div class="mt-3">total: {{ total }}</div>
		<b-modal id="modalAdd" ref="modal" title="添加人员" @ok="handleOk">
			<b-form class="" @reset="onReset" :validated="validated">
				<b-form-group label="姓名" label-for="name" description="">
					<b-form-input id="name" type="text" required placeholder="" />
      			</b-form-group>
				<b-form-group label="性别">
					<b-form-radio-group name="gender" required>
						<b-form-radio value="0">男</b-form-radio>
						<b-form-radio value="1">女</b-form-radio>
					</b-form-radio-group>
		        </b-form-group>
				<b-form-group label="生日" label-for="birthday" description="">
					<b-form-input id="birthday" type="date" required />
      			</b-form-group>
				<b-form-group label="电话" label-for="phone" description="">
					<b-form-input id="phone" type="text" required />
      			</b-form-group>
				<b-form-group label="身份证" label-for="idCard" description="">
					<b-form-input id="idCard" type="text" required />
      			</b-form-group>
			</b-form>
			<button type="button" name="button" @click="handleOk">sdfsd</button>
	    </b-modal>
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
			items: [],
			validated: false
        }
    },
    methods: {
    	getPersons: function () {
    		let _self = this;
	    	let params = {
				offset: (this.currentPage - 1) * this.perPage,
				size: this.perPage
			};

		    let promise = commonServer.getPersons(params);
	    	promise.then(function (res) {
				// console.log(res);
				_self.total = res.total;
				_self.items = res.data;
	    	}).catch(function (err) {
	    		console.log(err);
	    	});
    	},
		onReset() {

		},
		handleOk(evt) {
			this.validated = true;
		},
	},
	mounted () {
		this.getPersons();
	}
}
</script>

<style lang="less" scoped>

</style>
