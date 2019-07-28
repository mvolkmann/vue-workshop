<template>
  <div class="temperature">
    <input
      :min="min"
      :max="max"
      :style="{backgroundColor: color}"
      :value="value"
      @input="handleInput"
      type="range"
    />
    <div class="labels">
      <div>{{ min }}</div>
      <div>temperature: {{ value }}F</div>
      <div>{{ max }}</div>
    </div>
    <div class="evaluation">{{ evaluation }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cold: {
      type: Number,
      required: true
    },
    hot: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    temperature: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: this.temperature
    };
  },
  computed: {
    color() {
      return this.evaluation === 'cold'
        ? 'blue'
        : this.evaluation === 'hot'
        ? 'red'
        : 'green';
    },
    evaluation() {
      return this.value <= this.cold
        ? 'cold'
        : this.value >= this.hot
        ? 'hot'
        : 'comfortable';
    }
  },
  methods: {
    handleInput(event) {
      this.value = Number(event.target.value);
      this.$emit('change', this.value);
    }
  }
};
</script>

<style scoped>
.evaluation {
  display: flex;
  font-weight: bold;
  justify-content: center;
}

input {
  appearance: none;
  background-color: gray;
  width: 100%;
}

.labels {
  display: flex;
  justify-content: space-between;
}

.temperature {
  width: 100%;
}
</style>

