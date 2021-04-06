import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {

    aandeelhouder: [
      {
        id: '1',
        title: 'aandeelhouder 1',
        aandeelhouderType: 'Vennootschap',
        taalMachtigheid: 'ja',
        woonachtig_nederland: 'ja',
        BV_bestuuder: 'ja',
        aanhef: 'heer',
        voornaam: 'amir',
        achternaam: 'shakiba',
        geboortedatum: '27-04-1991',
        geboorteland: 'Iran',
        telefoonnummer: '0646764532',
        email: 'amir@firm24.com',
        postcode: '1093BN',
        huisnummer: '21',
        toevoeging: 'f',
        straatnaam: 'straat',
        plaatsnaam: 'amsterdam'

      }
      ,
      {
        id: '2',
        title: 'aandeelhouder 2',
        aandeelhouderType: 'Natuurlijk persoon',
        taalMachtigheid: 'nee',
        woonachtig_nederland: 'ja',
        BV_bestuuder: 'ja',
        aanhef: 'mevrouw',
        voornaam: 'donia',
        achternaam: 'family',
        geboortedatum: '27-04-2001',
        geboorteland: 'iran',
        telefoonnummer: '0644564532',
        email: 'donia@firm24.com',
        postcode: '1033dN',
        huisnummer: '761',
        toevoeging: 'e',
        straatnaam: 'straat donia',
        olaatsnaam: 'amsterdam zuid-oost'

      }
    ]
  },

  mutations: {

    delete: (state, id) => {
      const newState = state.aandeelhouder.filter(item => item.id !== id)
      state.aandeelhouder = newState
      window.localStorage.setItem('aandeelhouder', JSON.stringify(newState))

      console.log(window.localStorage);
    },

    fillState: (state, payload) => {

      state.aandeelhouder.push(payload)
      // state.aandeelhouder.push(payload)
      // state.aandeelhouder=payload
      // const newState = state.aandeelhouder.filter(item => item.id !== id)
      // state.aandeelhouder = newState
      // window.localStorage.setItem('aandeelhouder', JSON.stringify(newState))

      // console.log(window.localStorage);
    },

    addNewItem: (state) => {
      console.log(state);
      state.aandeelhouder.push({})
    },

  },

  actions: {

    delete: (context, id) => {
      context.commit("delete", id)
    },
    fillState: (context, payload) => {
      context.commit("fillState", payload)
    },
    addNewItem: (context, payload) => {
      context.commit("addNewItem", payload)
    },
  }

})