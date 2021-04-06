<template>
  <div class="container">
    <section class="sections">
      <b-field label="Telefoonnummer">
        <b-input v-model="tel"></b-input>
      </b-field>
    </section>
    <section class="sections">
      <b-field label="E-mailadres">
        <b-input v-model="email" type="email"></b-input>
      </b-field>
    </section>
    <section class="sections">
      <p class="title">Officieel woonadres</p>
      <p>
        Geef het officiële woonadres op zoals blijkt uit het BRP
        (Basisregistratie Personen).
      </p>
    </section>

    <div class="adres">
      <b-field label="Postcode" class="adres__item">
        <b-input v-model="postcode"></b-input>
      </b-field>

      <b-field label="Huisnummer" class="adres__item">
        <b-input v-model="huisnummer"></b-input>
      </b-field>
      <b-field label="Toevoeging" class="adres__item">
        <b-input v-model="toevoeging"></b-input>
      </b-field>
    </div>

    <div class="adres">
      <b-field label="Straatnaam" class="adres__item">
        <b-input v-model="straatnaam"></b-input>
      </b-field>

      <b-field label="Plaatsnaam" class="adres__item">
        <b-input v-model="plaatsnaam"></b-input>
      </b-field>
    </div>

    <section class="sections">
      <p class="title">Wil je nog een aandeelhouder toevoegen?</p>
      <div class="btn">
        <b-button type="is-success" class="btn__item">Ja</b-button>
        <b-button type="is-danger" class="btn__item">Nee</b-button>
      </div>
    </section>
    {{id}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      email: "",
      postcode: "",
      huisnummer: "",
      toevoeging: "",
      straatnaam: "",
      plaatsnaam: "",
    };
  },
  props: ["contsctGegevens","id"],
};
</script>


<style lang="scss" scoped>
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
.sections {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  width: 50%;
  text-align: left;
}
.adres {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  &__item {
    margin-left: 10px;
  }
}
.btn{
   display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  &__item {
    margin-left: 10px;
    width: 150px;
  }
}
</style>