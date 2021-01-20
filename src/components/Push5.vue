<template>
    <div>
        <h1>{{ msg }}</h1>
        <button class="btn btn-dark" v-on:click="goToPush1">Push 5</button>
    </div>
</template>

<script>
export default {
    name: 'Push5',
    data(){
        return{
            msg: 'Push5'
        }
    },
    methods:{
        goToPush1(){
            this.$router.push({name:'Push1'})
        }
    },
    destroyed(){
        //alert('component destroyed')
    }
}
</script>