<template>
  <div class="container">
    <section class="sections">
      <b-field label="Telefoonnummer">
        <b-input v-model="tel" required></b-input>
      </b-field>
    </section>
    <section class="sections">
      <b-field label="E-mailadres">
        <b-input v-model="email" type="email" required></b-input>
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
        <b-input v-model="postcode" required></b-input>
      </b-field>

      <b-field label="Huisnummer" class="adres__item">
        <b-input v-model="huisnummer" required></b-input>
      </b-field>
      <b-field label="Toevoeging" class="adres__item" >
        <b-input v-model="toevoeging" required></b-input>
      </b-field>
    </div>

    <div class="adres">
      <b-field label="Straatnaam" class="adres__item">
        <b-input v-model="straatnaam" required></b-input>
      </b-field>

      <b-field label="Plaatsnaam" class="adres__item">
        <b-input v-model="plaatsnaam" required></b-input>
      </b-field>
    </div>
    <b-button
      type="is-success"
      class="save-btn btn__item"
      @click="handleSave"
      :disabled="!validation"
      >Save</b-button
    >

    <section class="sections">
      <p class="title">Wil je nog een aandeelhouder toevoegen?</p>
      <div class="btn">
        <b-button type="is-success" class="btn__item" @click="handleAddNewItem"
          >Ja</b-button
        >
        <b-button type="is-danger" class="btn__item" @click="handleCancel"
          >Nee</b-button
        >
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions(["addNewItem"]),

    handleSave() {
      this.$emit("addToLocalStorage", this.id);
      this.$emit("addItemToState", this.id);
    },
    handleAddNewItem() {
      this.addNewItem();
      this.$emit("resetStepper");
    },

    handleCancel() {
      this.$emit("resetStepper");
    },
  },
  computed: {
    validation() {
      const arr = [];
      arr.push(
        this.tel,
        this.email,
        this.postcode,
        this.huisnummer,
        this.toevoeging,
        this.straatnaam,
        this.plaatsnaam
      );
      const arrItems = arr.filter((i) => i.length !== 0);
      if (arrItems.length === arr.length) {
        return true;
      } else {
        // const notif = this.$buefy.notification.open({
        //   duration: 5000,
        //   message: `Something's not good `,
        //   position: "is-bottom-right",
        //   type: "is-danger",
        //   hasIcon: true,
        // });
        // notif.$on("close", () => {
        //   this.$buefy.notification.open("Custom notification closed!");
        // });
        return false;
      }
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