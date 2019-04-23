<template>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth" style="margin-top: 30px">
        <thead>
            <tr>
                <th>Description</th>
                <th>Due Date</th>
                <th>Completed</th>
                <th></th>
            </tr>
        </thead>

        <tfoot>
            <tr>
                <th>Description</th>
                <th>Due Date</th>
                <th>Completed</th>
                <th></th>
            </tr>
        </tfoot>

        <tbody>
            <tr v-for="task in filteredTasks">
                <td>{{ task.description }}</td>
                <td>{{ taskDueOn(task) }}</td>
                <td>{{ isTaskComplete(task) }}</td>
                <td>
                    <span class="icon has-text-primary">
                        <i class="far fa-eye"></i>
                    </span>

                    <span class="icon has-text-primary">
                        <i class="fas fa-edit"></i>
                    </span>

                    <span class="icon has-text-danger">
                        <i class="fas fa-trash-alt"></i>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['filters'],
        data() {
            return {
                mutableFilters: this.filters,
                tasks: [],
            }
        },
        computed: {
            filteredTasks() {
                this.$root.removeEmptyValues(this.mutableFilters);

                if (this.$root.isEmptyObject(this.mutableFilters)) {
                    return this.tasks;
                }

                let filteredTasks = this.tasks;

                if (_.has(this.mutableFilters, 'description')) {
                    filteredTasks =  _.filter(filteredTasks, task => {
                        return task.description.toLowerCase().includes(this.mutableFilters.description.toLowerCase());
                    });
                }

                if (_.has(this.mutableFilters, 'is_complete')) {
                    filteredTasks =  _.filter(filteredTasks, task => {
                        return task.is_complete === this.mutableFilters.is_complete;
                    });
                }

                if (_.has(this.mutableFilters, 'due_date')) {
                    filteredTasks = _.filter(filteredTasks, task => {
                        return this.$root.datesAreEqual(task.due_date, this.mutableFilters.due_date);
                    });
                }

                return filteredTasks;
            }
        },
        created() {
            this.fetchTasks();
        },
        methods: {
            async fetchTasks() {
                try {
                    const response = await axios.get('/api/task', this.add_task_form);
                    this.tasks = response.data;
                } catch (error) {
                    console.log(error);
                }
            },

            taskDueOn(task) {
                return moment(task.due_date).calendar();
            },

            isTaskComplete(task) {
                return (task.is_complete) ? 'Yes' : 'No';
            }
        }
    }
</script>

<style scoped>

</style>