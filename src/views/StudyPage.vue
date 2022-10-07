<template>
    <div class="container">
        <input 
            type="text"
            v-model="msg"
        >
        <button @click="Create">Create</button>
        <TodoList
            :TodoLists="TodoLists"
            :Delete="Delete"
        />
    </div>
</template>

<script>
    import TodoList from '../components/TodoList';
    import { ref } from '@vue/runtime-core';
    export default {
        components: {
            TodoList: [
                
            ],
        },
        setup() {
            let exampleData =[
                { id:1 , name: 'Cooking'},
                { id:2 , name: 'Eating'},
                { id:3 , name: 'Sleeping'}
            ];

            const Create = () => {
                let id=4;
                id++;
                const next = { id, name: this.msg};
                this.TodoLists.push(next);
            }

            return {
                TodoLists: ref(exampleData),
                Create,
            };
        }
    }
</script>