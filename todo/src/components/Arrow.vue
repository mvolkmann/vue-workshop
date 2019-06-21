<template>
  <svg class="arrow" :height="height" :width="width">
    <polyline
      :points="path"
      :fill="fill"
      :stroke="stroke"
      stroke-linecap="square"
      stroke-linejoin="miter"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    fill: {
      type: String,
      default: 'white'
    },
    height: {
      type: Number,
      required: true
    },
    stroke: {
      type: String,
      default: 'black'
    },
    strokeWidth: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      required: true
    }
  },
  computed: {
    path() {
      const {height, strokeWidth, width} = this;
      const delta = strokeWidth / 2;
      const dx = width * 0.7;
      const dy = height * 0.25;
      const y = height - dy;

      let path = delta + ',' + dy;

      const addPoint = (x, y) => (path += ` ${x},${y}`);
      addPoint(delta, y);
      addPoint(dx, y);
      addPoint(dx, height - strokeWidth);
      addPoint(width - strokeWidth, height / 2);
      addPoint(dx, strokeWidth);
      addPoint(dx, dy);
      addPoint(delta, dy);

      return path;
    }
  }
};
</script>
