<template>
  <div>
    <label>Soup of the day: </label>
    <slot
      name="soupOfTheDay"
      :defaultSoup="popularSoup">
      unknown
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {popularSoup: 'French Onion'};
  }
};
</script>
