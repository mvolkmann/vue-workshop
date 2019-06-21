<template>
  <div>
    <label>Ship To:</label>
    <slot name="name"><div>unknown</div></slot>
    <slot name="address" />
  </div>
</template>

<script>
export default {
  name: 'ShippingLabel2'
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
}
</style>
