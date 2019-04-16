<template>
    <div class="modal" :class="{'is-active': this.is_active}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
</template>

<script>
    export default {
        props: ['is_active'],
        methods: {
            close() {
                this.active = false;
                this.$emit('close');
            }
        }
    }
</script>