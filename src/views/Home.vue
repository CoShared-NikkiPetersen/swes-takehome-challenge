<template>
  <div class="home">
    <h3>Click on a link above, to see Companies or Buildings</h3>
  </div>
</template>

<script>
import firebase from '../firebaseConfig'
const db = firebase

export default {
  name: 'Home',
  data () {
    return {
      buildings: []
    }
  },
  components: {
  },
  created () {
    // todo ==> fetch to get data from back end
    db.collection('buildings').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const building = doc.data()
          building.id = doc.id
          this.buildings.push(building)
        })
      })
  }
}
</script>
