<template>
    <div class="container">
        <add-task @task-added="refresh"></add-task>
        <ul class="list-group">
            <li 
            v-for="(task, index) in tasks.data" :key="index" 
            class="list-group-item d-flex justify-content-between align-items-center">
                <a href="#">{{ task.name }}</a>
                <button 
                type="button" @click="getTask(task.id)" 
                class="btn btn-secondary my-3" 
                data-toggle="modal" data-target="#editModal">
                    Editer
                </button>
            </li>
            <edit-task :taskToEdit="taskToEdit" @task-updated="refresh"></edit-task>
        </ul>
        <pagination :data="tasks" @pagination-change-page="getResult" class="mt-5"></pagination>
    </div>
</template>

<script>
import AddTask from './AddTaskComponent';
import EditTask from './EditTaskComponent';

export default {
    components: { AddTask, EditTask },
    data() {
        return {
            tasks: {},
            taskToEdit: {}
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
        getTask(id) {
            axios.get('http://localhost:8000/tasks/edit/' + id)
            .then(res => this.taskToEdit = res.data)
        },
        refresh(tasks) {
            this.tasks = tasks
        }
    }
}
</script>
