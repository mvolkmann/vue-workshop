<template>
  <div>
    <table v-if="dogs.length">
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
      <tr v-for="dog in dogs" :key="dog.name">
        <td>{{ dog.name }}</td>
        <!-- This td is for the "REST" exercise. -->
        <td><button @click="() => deleteDog(dog.id)">&#x1f5d1;</button></td>
      </tr>
    </table>

    <div>
      <label>Name</label>
      <input type="text" @keypress.enter="addDog" v-model="name" />
      <button @click="addDog">Add</button>
    </div>
  </div>
</template>

<script>
/* For "REST" exercise ...
const REST_URL = 'http://localhost:1919/dog';
*/

function sortDogs(dogs) {
  dogs.sort((dogA, dogB) => dogA.name.localeCompare(dogB.name));
  return dogs;
}

export default {
  name: 'Dogs',
  data() {
    return {
      dogs: [],
      name: ''
    };
  },

  /* For "Lifecycle Methods" exercise ...
  mounted() {
    this.dogs = [{id: 1, name: 'Maisey'}, {id: 2, name: 'Oscar'}];
  },
  */

  /* For "REST" exercise ...
  async mounted() {
    try {
      const res = await fetch(REST_URL);
      this.dogs = sortDogs(await res.json());
    } catch (e) {
      console.error('error getting dogs:', e.message);
    }
  },
  */

  methods: {
    async addDog() {
      // If a dog with that name is already present, do nothing.
      const exists = this.dogs.some(dog => dog.name === this.name);
      if (!exists) {
        /* An id is being added to each dog to support the deleteDog method. */
        const dog = {id: Date.now(), name: this.name};
        this.dogs = sortDogs(this.dogs.concat(dog));

        /* For "REST" exercise ...
        try {
          const res = await fetch(REST_URL, {method: 'POST', body: this.name});
          const dog = await res.json();
          this.dogs = sortDogs(this.dogs.concat(dog));
        } catch (e) {
          console.error('error adding dog:', e.message);
        }
        */
      }

      this.name = '';
    },

    /* This method is for the "REST" exercise. */
    async deleteDog(id) {
      this.dogs = this.dogs.filter(dog => dog.id !== id);

      /* For "REST" exercise ...
      const url = REST_URL + '/' + id;
      try {
        await fetch(url, {method: 'DELETE'});
        this.dogs = this.dogs.filter(dog => dog.id !== id);
      } catch (e) {
        console.error('error deleting dog:', e.message);
      }
      */
    }
  }
};
</script>

<style scoped>
button,
input {
  border: solid gray 1px;
  border-radius: 4px;
  padding: 4px;
}

input {
  margin: 0 10px;
}

label {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  margin-bottom: 10px;
}

table button {
  border: none;
}

td,
th {
  border: solid gray 1px;
  padding: 5px;
}
</style>
