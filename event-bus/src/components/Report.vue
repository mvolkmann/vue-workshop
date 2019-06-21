<template>
  <div>The zip code is now {{zipCode}}.</div>
</template>

<script>
import {EventBus} from '../event';
export default {
  name: 'Report',
  data() {
    return {
      listener: null,
      zipCode: 0
    };
  },
  mounted() {
    // Subscribe to the "zipCode" event.
    this.listener = zipCode => (this.zipCode = zipCode);
    EventBus.$on('zipCode', this.listener);

    // Request the current value.
    EventBus.$emit('getZipCode');
  },
  destroyed() {
    // Unsubscribe this listener from the "zipCode" event.
    EventBus.$off('zipCode', this.listener);
  }
};
</script>
