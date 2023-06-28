<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                <button class="btn btn-success" @click="increment">+</button>
                
                </div>
                <div class="col">
                    <p class="lead">{{ counter }}</p>
                </div>
                <div class="col">
                <button class="btn btn-danger" @click="decrement">-</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        },
        methods: {
            increment() {
                this.$store.dispatch('increment')
            },
            decrement() {
                this.$store.dispatch('decrement')
            }
        }
    }
</script>

<style scoped>

</style>