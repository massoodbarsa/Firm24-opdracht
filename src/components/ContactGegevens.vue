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
    <b-button type="is-success" class="save-btn btn__item" @click="handleSave"
      >Save</b-button
    >

    <section class="sections">
      <p class="title">Wil je nog een aandeelhouder toevoegen?</p>
      <div class="btn">
        <b-button type="is-success" class="btn__item" @>Ja</b-button>
        <b-button type="is-danger" class="btn__item">Nee</b-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["contsctGegevens", "id"],

  data() {
    return {
      tel: this.contsctGegevens.telefoonnummer,
      email: this.contsctGegevens.email,
      postcode: this.contsctGegevens.postcode,
      huisnummer: this.contsctGegevens.huisnummer,
      toevoeging: this.contsctGegevens.toevoeging,
      straatnaam: this.contsctGegevens.straatnaam,
      plaatsnaam: this.contsctGegevens.plaatsnaam,
    };
  },
  methods: {
    handleSave() {
      this.$emit("addToLocalStorage");
    },
  },

  watch: {
    tel: function () {
      this.$emit("addData", { tel: this.tel });
    },
    email: function () {
      this.$emit("addData", { email: this.email });
    },
    postcode: function () {
      this.$emit("addData", { postcode: this.postcode });
    },
    huisnummer: function () {
      this.$emit("addData", { huisnummer: this.huisnummer });
    },
    toevoeging: function () {
      this.$emit("addData", { toevoeging: this.toevoeging });
    },
    straatnaam: function () {
      this.$emit("addData", { straatnaam: this.straatnaam });
    },
    plaatsnaam: function () {
      this.$emit("addData", { plaatsnaam: this.plaatsnaam });
    },
  },
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
    margin-bottom: 20px;
  }
}
.sections {
  margin-top: 10px;
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
.btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  &__item {
    margin-left: 10px;
    width: 150px;
  }
}

.save-btn {
  margin-top: 20px;
}
</style>