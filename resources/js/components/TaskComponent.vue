<template>
    <div class="container">
        <add-task @task-added="refresh"></add-task>
        <ul class="list-group">
            <li 
            v-for="(task, index) in tasks.data" 
            :key="index" class="list-group-item">
                <a href="#">{{ task.name }}</a>
            </li>
        </ul>
        <pagination :data="tasks" @pagination-change-page="getResult" class="mt-5"></pagination>
    </div>
</template>

<script>
import AddTask from './AddTaskComponent';

export default {
    components: { AddTask },
    data() {
        return {
            tasks: {}
        }
    },
    created() {
        axios.get('http://localhost:8000/tasks')
        .then(res => this.tasks = res.data)
    },
    methods: {
        getResult(page = 1) {
            axios.get('http://localhost:8000/tasks?page=' + page)
            .then(res => this.tasks = res.data)
        },
        refresh(tasks) {
            this.tasks = tasks
        }
    }
}
</script>
