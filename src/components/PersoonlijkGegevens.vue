<template>
  <div class="container">
    <section class="container__header">
      <p class="title">Officiële gegevens</p>
      <p>
        Vul de gegevens in zoals officiëel staat vermeld op het
        legitimatiebewijs
      </p>
    </section>
    <div class="aanhef-voornaam">
      <b-field label="Aanhef" class="aanhef">
        <b-select placeholder="Select a name" v-model="aanhef">
          <option value="heer">Heer</option>
          <option value="mevrouw">Mevrouw</option>
        </b-select>
      </b-field>

      <b-field label="Voornaam" class="voornaam">
        <b-input v-model="voornaam"></b-input>
      </b-field>
    </div>
    <section class="sections">
      <b-field label="Achternaam">
        <b-input v-model="achternaam"></b-input>
      </b-field>
    </section>
    <section class="sections">
      <b-field label="Geboortedatum">
        <b-datepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          editable
          v-model="geboortedatum"
        >
        </b-datepicker>
      </b-field>
    </section>

    <section class="sections">
      <b-field label="Geboorteland" class="aanhef">
        <b-select placeholder="Geboorteland" v-model="geboorteland" expanded>
          <option v-for="land in lands" :value="land.name" :key="land.name">
            {{ land.name }}
          </option>
        </b-select>
      </b-field>
    </section>
  </div>
</template>

<script>
import axios from "axios";
// import { mapActions } from "vuex";

export default {
    props: ["persoonlijkGegevens", "id"],

  data() {
    return {
      // id: null,
      data: ["heer", "mevrouw"],
      lands: [],
      aanhef:this.persoonlijkGegevens.aanhef,
      voornaam: this.persoonlijkGegevens.voornaam,
      achternaam: this.persoonlijkGegevens.achternaam,
      geboortedatum: [],
      geboorteland: this.persoonlijkGegevens.geboorteland
    };
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => (this.lands = response.data));

    //Each component has a unique id which can be accessed as this._uid
    // this.id = this._uid;
  },
  created() {
    const test =window.localStorage.getItem("aandeelhouder")
    console.log(test);
  },
  watch: {
    aanhef: function () {
      this.$emit("addData", { aanhef: this.aanhef });
    },
    voornaam: function () {
      this.$emit("addData", { voornaam: this.voornaam });
    },
    achternaam: function () {
      this.$emit("addData", { achternaam: this.achternaam });
    },
    geboortedatum: function () {
      this.$emit("addData", { geboortedatum: this.geboortedatum });
    },
    geboorteland: function () {
      this.$emit("addData", { geboorteland: this.geboorteland });
    },
  },
  // computed: {
  //   addToLocalStroage: function () {
  //     var obj = {
  //       id: this.id,
  //       aanhef: this.aanhef,
  //       voornaam: this.voornaam,
  //       achternaam: this.achternaam,
  //       geboortedatum: this.geboortedatum,
  //       geboorteland: this.geboorteland,
  //     };
  //     window.localStorage.setItem("aandeelhouder", JSON.stringify(obj));
  //     console.log(window.localStorage);
  //     return obj;
  //   },
  // },

  // methods: {
  //   ...mapActions(["addAandeelhouder"]),
  //   handleAdd() {
  //     this.addAandeelhouder({
  //       persoonlijk_gegevens: {
  //         aanhef: this.aanhef,
  //         voornaam: this.voornaam,
  //         achternaam: this.achternaam,
  //         geboortedatum: this.geboortedatum,
  //         geboorteland: this.geboortedatum,
  //       },
  //     });
  //   },
  // },
};
</script>


<style scoped lang="scss">
.container {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  text-align: left;

  &__header {
    margin-bottom: 30px;
  }
}
.title {
  font-family: FiraSans;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
}

.sections {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  width: 50%;
  text-align: left;
}
.aanhef-voornaam {
  width: calc(50% - 5px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .aanhef {
    margin-top: 12px;
    margin-right: 20px;
  }
  .voornaam {
    width: 100%;
  }
}
</style>