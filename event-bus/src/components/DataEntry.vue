<template>
  <div>
    <label for="zipCode">Zip</label>
    <input v-model="zipCode" type="number">
  </div>
</template>

<script>
import {EventBus} from '../event';
export default {
  name: 'DataEntry',
  data() {
    return {zipCode: 0};
  },
  mounted() {
    // When the value of zipCode is requested, emit it.
    EventBus.$on('getZipCode', () => EventBus.$emit('zipCode', this.zipCode));
  },
  watch: {
    // When the value of zipCode changes, notify listeners.
    zipCode() {
      EventBus.$emit('zipCode', this.zipCode);
    }
  }
};
</script>
