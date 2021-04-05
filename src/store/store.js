import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    collapseCounter: 0,
    //later use this to ake data persistance
    // aandeelhouder:[window.localStorage.aandeelhouder]
    aandeelhouder: [
      {
        id: '1',
        title: 'aandeelhouder 1',
        algemeen_gegevens: {
          aandeelhouderType: 'vennootschap',
          taalMachtigheid: 'ja',
          woonachtig_nederland: 'ja',
          BV_bestuuder: 'ja'
        },
        persoonlijk_gegevens: {
          aanhef: 'heer',
          voornaam: 'amir',
          achternaam: 'shakiba',
          geboortedatum: '27-04-1991',
          geboorteland: 'iran'
        },
        contact_gegevens: {
          telefoonnummer: '0646764532',
          email: 'amir@firm24.com',
          postcode: '1093BN',
          huisnummer: '21',
          toevoeging: 'f',
          straatnaam: 'straat',
          olaatsnaam: 'amsterdam'
        }
      }
      ,
      {
        id: '2',
        title: 'aandeelhouder 2',
        algemeen_gegevens: {
          aandeelhouderType: 'natuurlijke persoon',
          taalMachtigheid: 'nee',
          woonachtig_nederland: 'ja',
          BV_bestuuder: 'ja'
        },
        persoonlijk_gegevens: {
          aanhef: 'mevrouw',
          voornaam: 'donia',
          achternaam: 'family',
          geboortedatum: '27-04-2001',
          geboorteland: 'iran'
        },
        contactgegevens: {
          telefoonnummer: '0644564532',
          email: 'donia@firm24.com',
          postcode: '1033dN',
          huisnummer: '761',
          toevoeging: 'e',
          straatnaam: 'straat donia',
          olaatsnaam: 'amsterdam zuid-oost'
        }


      }
    ]



  },

  mutations: {
    addCollapses: (state) => {
      state.collapseCounter += 1

    },
    delete: (state, id) => {
      const newState = state.aandeelhouder.filter(item => item.id !== id)
      state.aandeelhouder = newState
      window.localStorage.setItem('aandeelhouder', JSON.stringify(newState))

      console.log(window.localStorage);
    }
  },

  actions: {
    addCollapses: (context) => {
      context.commit("addCollapses")
    },
    delete: (context, id) => {
      context.commit("delete", id)
    },
  }

})