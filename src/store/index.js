import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../firebaseConfig'
const db = firebase

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchedBuildings: [],
    fetchedCompanies: [],
    fetchedEmployees: [],
    fetchedOffices: []
  },
  mutations: {
    // mutations are synchronous, actions aren't
    setFetchedBuildings (state, payload) {
      state.fetchedBuildings = payload
    },
    setFetchedCompanies (state, payload) {
      state.fetchedCompanies = payload
    },
    setFetchedEmployees (state, payload) {
      state.fetchedEmployees = payload
    },
    setFetchedOffices (state, payload) {
      state.fetchedOffices = payload
    }
  },
  actions: {
    fetchBuildings (context) {
      return db.collection('buildings').get()
        .then(snapshot => {
          const snapArray = []
          snapshot.forEach(doc => {
            const building = doc.data()
            building.id = doc.id
            snapArray.push(building)
          })
          context.commit('setFetchedBuildings', snapArray)
        })
    },
    fetchCompanies (context) {
      return db.collection('companies').get()
        .then(snapshot => {
          const snapArray = []
          snapshot.forEach(doc => {
            const company = doc.data()
            company.id = doc.id
            snapArray.push(company)
          })
          context.commit('setFetchedCompanies', snapArray)
        })
    },
    fetchEmployees (context) {
      db.collection('employees').get()
        .then(snapshot => {
          const snapArray = []
          snapshot.forEach(doc => {
            const employee = doc.data()
            employee.id = doc.id
            snapArray.push(employee)
          })
          context.commit('setFetchedEmployees', snapArray)
        })
    },
    fetchOffices (context) {
      db.collection('offices').get()
        .then(snapshot => {
          const snapArray = []
          snapshot.forEach(doc => {
            const office = doc.data()
            office.id = doc.id
            snapArray.push(office)
          })
          context.commit('setFetchedOffices', snapArray)
        })
    }
  },
  modules: {
  },
  getters: {
    getSelectedBuilding: (state) => (name) => {
      return state.fetchedBuildings.find(building => building.name === name)
    },
    getOccupants: (state) => (name) => {
      return state.fetchedOffices(office => office.building === name)
    }
  }
})
