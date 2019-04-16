<template>
    <create-task-button></create-task-button>

    <tasks></tasks>
</template>

<script>
    import Tasks from './Tasks';
    import CreateTaskButton from './CreateTaskButton';

    export default {
        components: { Tasks, CreateTaskButton },

        mounted() {

        }
    }
</script>
