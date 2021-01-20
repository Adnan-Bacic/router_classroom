<template>
    <div>
        <h1>{{ msg }}</h1>
        <button class="btn btn-success" v-on:click="goToPush3">Push 2</button>
    </div>
</template>

<script>
export default {
    name: 'Push1',
    data(){
        return{
            msg: 'Push2'
        }
    },
    methods:{
        goToPush3(){
            this.$router.push({name:'Push3'})
        }
}
}
</script>