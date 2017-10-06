<style>
#world {
    height: 100%;
}
</style>

<template>
    <div id="world">
        <talking></talking>
    </div>
</template>

<script>
import Talking from '@/components/talking'

export default {
    name: 'world',
    components: {
        Talking
    }
}
</script>
