<template>
  <div>
    <DataEntry/>
    <Report v-if="showReport"/>
    <button @click="showReport = !showReport">Toggle Report</button>
  </div>
</template>

<script>
import DataEntry from './components/DataEntry';
import Report from './components/Report';
export default {
  name: 'App',
  components: {DataEntry, Report},
  data() {
    return {showReport: true};
  }
};
</script>
