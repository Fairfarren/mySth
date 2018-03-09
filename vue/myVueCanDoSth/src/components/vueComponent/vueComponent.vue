<template>
  <div id="vueComponent">
    <div>
      this is vue component used in main.js
    </div>
    <div>
      <p>
        this is props
      </p>
      <p>
        hello = {{ hello }} <br />
        world = {{ world }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vueComponent',
  props: ['hello', 'world']
}
</script>
