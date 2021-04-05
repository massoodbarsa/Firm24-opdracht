import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    collapseCounter: 0,
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
          aanhef: 'mr',
          voornaam: 'amir',
          achternaam: 'shakiba',
          geboortedatum: '27-04-1991',
          geboorteland: 'iran'
        },
        contactgegevens: {
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
          aanhef: 'ms',
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


    // images: [{
    //     image: photo1,
    //     alt: "photo_1"
    //   },
    //   {
    //     image: photo2,
    //     alt: "photo_2"
    //   },
    //   {
    //     image: photo3,
    //     alt: "photo_3"
    //   },
    //   {
    //     image: photo4,
    //     alt: "photo_4"
    //   },
    //   {
    //     image: photo5,
    //     alt: "photo_5"
    //   },
    //   {
    //     image: photo6,
    //     alt: "photo_6"
    //   },
    //   {
    //     image: last,
    //     alt: "last"
    //   },
    // ],

  },

  mutations: {
    addCollapses: (state) => {
      state.collapseCounter += 1

    },
    delete: (state, id) => {
      const newState = state.aandeelhouder.filter(item => item.id !== id)
      state.aandeelhouder = newState
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