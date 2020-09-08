<template>
    <button
        v-on:click="buttonClick"
        class="bg-transparent hover:bg-green-500 text-green-700font-semibold hover:text-white py-2 px-2borderborder-green-500 hover:border-transparent rounded"
    >
        <beat-loader :loading="isLoading" :color="'#68d391'" :size="8" />
        <p v-show="!isLoading">
            <slot></slot>
        </p>
    </button>
</template>

<script>
export default {
    name: "PxButton",
    methods: {
        buttonClick() {
            this.$emit("customClick");
        }
    },
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style></style>
