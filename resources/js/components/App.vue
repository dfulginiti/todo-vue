<template>
    <div class="container flex-center">
        <create-task-button></create-task-button>

        <tasks></tasks>
    </div>
</template>

<script>
    import CreateTaskButton from './CreateTaskButton';
    import Tasks from './Tasks';

    export default {
        components: { Tasks, CreateTaskButton },
    }
</script>
