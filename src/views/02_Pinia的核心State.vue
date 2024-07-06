<template>
    <div class="home">
        <h2>Home View</h2>
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <h2>等级: {{ level }}</h2>
        <button @click="changeState">修改state</button>
        <button @click="resetState">重置state</button>
    </div>
</template>

<script setup>
    import useUser from '@/stores/user'; 
    import { storeToRefs } from 'pinia';

    const useStore = useUser()

    const { name, age, level } = storeToRefs(useStore)

    function changeState() {
        //1.一个个修改状态
        // useStore.name = "kobe"
        // useStore.age = 20
        // useStore.level = 90

        //2.一次性修改多个状态
        // useStore.$patch({
        //     name: "james",
        //     age: 35
        // })

        //3.替换state为新的对象
        useStore.$state = {
            name: "nie",
            age: 23
        }
    }

    

    function resetState() {
        useStore.$reset()
    }
</script>

<style scoped>

</style>