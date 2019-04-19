<template>
    <div class="container" style="padding-top: 50px">
        <div class="is-flex justify-content-between">
            <button class="button is-primary" @click="modal_is_active = true">Create a Task</button>
            <button class="button is-primary" @click="modal_is_active = true">Create a Task</button>
            <button class="button is-primary" @click="modal_is_active = true">Create a Task</button>
        </div>

        <div class="is-clearfix"></div>

        <tasks></tasks>

        <modal :is_active="modal_is_active" @close="modal_is_active = false">
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea
                            rows="5"
                            class="textarea"
                            placeholder="Task Description"
                            v-model="add_task_form.description"
                    ></textarea>
                </div>
            </div>

            <div class="field">
                <label class="label">Due Date</label>
                <div class="control has-icons-left">
                    <datepicker input-class="input" placeholder="Task Due Date" v-model="add_task_form.due_date"></datepicker>
                    <span class="icon is-small is-left">
                      <i class="fas fa-clock"></i>
                    </span>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" @click="addTask">Add Task</button>
                </div>
                <div class="control">
                    <button class="button is-text" @click="modal_is_active = false">Cancel</button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import Modal from './utilities/Modal';
    import Tasks from './Tasks';

    export default {
        components: { Datepicker, Modal, Tasks },
        data() {
            return {
                modal_is_active: false,
                add_task_form: {
                    description: null,
                    due_date: null,
                }
            }
        },
        methods: {
            async addTask() {
                try {
                    const response = await axios.post('/api/task', this.add_task_form);
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>
