<template>
    <div>
        <h1>{{ msg }}</h1>
        <button class="btn btn-info" v-on:click="goToPush4">Push 4</button>
    </div>
</template>

<script>
export default {
    name: 'Push4',
    data(){
        return{
            msg: 'Push4'
        }
    },
    methods:{
        goToPush4(){
            this.$router.push({name:'Push5'})
        }
    },
    destroyed(){
        //alert('component destroyed')
    }
}
</script>