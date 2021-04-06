<template>
  <div class="container">
    <section class="questions">
      <p class="questions__title">
        Is deze aandeelhouder een persoon of een (bestaande) vennootschap?
        <b-tooltip
          label="Natuurlijk persoon of Vennootschap?
           Een aandeelhouder kan een mens of een BV zijn. Is het een mens kies dan voor 'Natuurlijk persoon'. Is de aandeelhouder een BV dan kies je voor 'Vennootschap' "
          position="is-right"
          type="is-light"
          multilined
          size="is-medium"
        >
          <b-icon class="questions__icons" icon="help-circle"> </b-icon>
        </b-tooltip>
      </p>
      <div class="radio-container">
        <b-field>
          <b-radio
            v-model="aandeelhouderType"
            native-value="Natuurlijk persoon"
          >
            Natuurlijk persoon
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="aandeelhouderType" native-value="Vennootschap">
            Vennootschap
          </b-radio>
        </b-field>
      </div>
    </section>
    <section class="questions">
      <p class="questions__title">
        Is deze aandeelhouder de Nederlandse taal machtig?
        <b-tooltip
          label="Het is wettelijk gezien niet mogelijk om te vertalen voor iemand. Dit mag enkel door een beëdigde tolk worden gedaan."
          position="is-right"
          type="is-light"
          multilined
          size="is-medium"
        >
          <b-icon class="questions__icons" icon="help-circle"> </b-icon>
        </b-tooltip>
      </p>
      <div class="radio-container">
        <b-field>
          <b-radio v-model="taalMachtigheid" native-value="ja"> Ja </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="taalMachtigheid" native-value="nee"> Nee </b-radio>
        </b-field>
      </div>
    </section>

    <section class="questions">
      <p class="questions__title">
        Woont deze aandeelhouder officieel in Nederland?
        <b-tooltip
          label="heeft deze aandeelhouder een verblijfsvergunning"
          position="is-right"
          type="is-light"
          multilined
          size="is-medium"
        >
          <b-icon class="questions__icons" icon="help-circle"> </b-icon>
        </b-tooltip>
      </p>
      <div class="radio-container">
        <b-field>
          <b-radio v-model="woonachtig_nederland" native-value="ja">
            Ja
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="woonachtig_nederland" native-value="nee">
            Nee
          </b-radio>
        </b-field>
      </div>
    </section>

    <section class="questions">
      <p class="questions__title">
        Is deze aandeelhouder bestuurder?
        <b-tooltip
          label="Minimaal één aandeelhouder moet ook bestuurder worden in de BV"
          position="is-right"
          type="is-light"
          multilined
          size="is-medium"
        >
          <b-icon class="questions__icons" icon="help-circle"> </b-icon>
        </b-tooltip>
      </p>
      <div class="radio-container">
        <b-field>
          <b-radio v-model="BV_bestuuder" native-value="ja"> Ja </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="BV_bestuuder" native-value="nee"> Nee </b-radio>
        </b-field>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["alegemeenGegevens", "id"],

  data() {
    return {
      aandeelhouderType: this.alegemeenGegevens.aandeelhouderType,
      taalMachtigheid: this.alegemeenGegevens.taalMachtigheid,
      woonachtig_nederland: this.alegemeenGegevens.woonachtig_nederland,
      BV_bestuuder: this.alegemeenGegevens.BV_bestuuder,
    };
  },

  watch: {
    aandeelhouderType: function () {
      this.$emit("addData", { aandeelhouderType: this.aandeelhouderType });
    },
    taalMachtigheid: function () {
      this.$emit("addData", { taalMachtigheid: this.taalMachtigheid });
    },
    woonachtig_nederland: function () {
      this.$emit("addData", {
        woonachtig_nederland: this.woonachtig_nederland,
      });
    },
    BV_bestuuder: function () {
      this.$emit("addData", { BV_bestuuder: this.BV_bestuuder });
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 50px;
}
.questions {
  padding: 10px;

  &__title {
    font-family: FiraSans;
    font-size: 20px;
    font-weight: 800;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
  }

  &__icons {
    color: #128cf4;
  }
}

.radio-container {
  display: flex;
  // justify-content: center;
  margin-top: 30px;
}
</style>