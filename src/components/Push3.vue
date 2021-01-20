<template>
    <div>
        <h1>{{ msg }}</h1>
        <button class="btn btn-danger" v-on:click="goToPush4">Push 3</button>
    </div>
</template>

<script>
export default {
    name: 'Push3',
    data(){
        return{
            msg: 'Push3'
        }
    },
    methods:{
        goToPush4(){
            this.$router.push({name:'Push4'})
        }
    },
    destroyed(){
        //alert('component destroyed')
    }
}
</script>