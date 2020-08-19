<template>
    <div class="container">
        <ul class="list-group">
            <li 
            v-for="(task, index) in tasks" 
            :key="index" class="list-group-item">
                <a href="#">{{ task.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tasks: {}
            }
        },
        created() {
            axios.get('http://localhost:8000/tasks')
            .then(res => this.tasks = res.data)
        }
    }
</script>
