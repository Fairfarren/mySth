<style>
#hello {
  height: 100%;
}
</style>

<template>
    <div id="hello">
        <talking></talking>
    </div>
</template>

<script>
import Talking from '@/components/talking'

export default {
  name: 'hello',
  components: {
    Talking
  }
}
</script>
