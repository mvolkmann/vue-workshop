<template>
  <div>
    <label>Ship To:</label>
    <slot>unknown</slot>
  </div>
</template>

<script>
export default {
  name: 'ShippingLabel1'
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
}
</style>
