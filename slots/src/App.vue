<template>
  <div id="app">
    <ShippingLabel1>
      Mark Volkmann<br />
      123 Some Street<br />
      Somewhere, Some State  12345
    </ShippingLabel1>
    <hr />

    <!-- With no content -->
    <ShippingLabel1 />
    <hr />

    <ShippingLabel2>
      <div slot="address">
        123 Some Street<br />
        Somewhere, Some State 12345
      </div>
      <div slot="name">Mark Volkmann</div>
    </ShippingLabel2>
    <hr />

    <!-- With no content -->
    <ShippingLabel2 />
    <hr />

    <Menu>
      <template v-slot:soupOfTheDay="slotProps">
        {{ slotProps.defaultSoup }}
      </template>
    </Menu>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import ShippingLabel1 from './components/ShippingLabel1.vue'
import ShippingLabel2 from './components/ShippingLabel2.vue'

export default {
  name: 'app',
  components: {Menu, ShippingLabel1, ShippingLabel2}
}
</script>
