<template>
    <center>
        <h1>Bootstrap-Vue组件</h1>
        <div>
            <h2>Example heading <b-badge>New</b-badge></h2>
            <h3>Example heading <b-badge>New</b-badge></h3>
            <h4>Example heading <b-badge>New</b-badge></h4>
            <h5>Example heading <b-badge>New</b-badge></h5>
            <h6>Example heading <b-badge>New</b-badge></h6>
        </div>
        <div>
            <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

            <!-- Modal Component -->
            <b-modal id="modal1" title="Bootstrap-Vue">
                <p class="my-4">Hello from modal!</p>
            </b-modal>
        </div>
    </center>
</template>

<script>
export default {
    name: ''
}
</script>
