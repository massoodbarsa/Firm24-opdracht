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
      {{ geboortedatum }}
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

    {{ geboorteland }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: ["heer", "mevrouw"],
      lands: [],
      aanhef: "heer",
      voornaam: "aghhamid",
      achternaam: "shakiba",
      geboortedatum: "",
      geboorteland: "",
    };
  },
  props: ["persoonlijkGegevens"],
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => (this.lands = response.data));
  },
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
  &__header {
    text-align: left;
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