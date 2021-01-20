<template>
    <div>
        <h1>{{ msg }}</h1>
        <button class="btn btn-primary" v-on:click="goToPush2">Push 1</button>
    </div>
</template>

<script>
export default {
    name: 'Push1',
    data(){
        return{
            msg: 'Push1'
        }
    },
    methods:{
        goToPush2(){
            this.$router.push({name:'Push2'})
        }
    },
    destroyed(){
        //alert('component destroyed')
    }
}
</script>