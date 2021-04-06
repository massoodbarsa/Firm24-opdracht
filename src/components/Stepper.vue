<template>
  <div class="stepper-container">
    <b-steps
      v-model="activeStep"
      :animated="isAnimated"
      :rounded="isRounded"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      :label-position="labelPosition"
      :mobile-mode="mobileMode"
    >
      <b-step-item step="1" label="Algemeen Gegevens">
        <AlgemeenGegevens
          :alegemeenGegevens="aandeelhouder"
          @addData="collectData"
        />
      </b-step-item>

      <b-step-item step="2" label="PersoonlijkGegevens">
        <PersoonlijkGegevens
          :persoonlijkGegevens="aandeelhouder"
          @addData="collectData"
        />
      </b-step-item>

      <b-step-item step="3" label="ContactGegevens">
        <ContactGegevens
          :contsctGegevens="aandeelhouder"
          :id="id"
          @addData="collectData"
          @addToLocalStorage="addToLocalStorage"
          @resetStepper="resetStepper"
          @addItemToState="addItemToState"
        />
      </b-step-item>

      <template v-if="customNavigation" #navigation="{ previous, next }">
        <b-button
          outlined
          type="is-danger"
          icon-pack="fas"
          icon-left="backward"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
        >
          Previous
        </b-button>
        <b-button
          outlined
          type="is-success"
          icon-pack="fas"
          icon-right="forward"
          :disabled="next.disabled"
          @click.prevent="next.action"
        >
          Next
        </b-button>
      </template>
    </b-steps>
  </div>
</template>

<script>
import PersoonlijkGegevens from "./PersoonlijkGegevens.vue";
import AlgemeenGegevens from "./AlgemeenGegevens.vue";
import ContactGegevens from "./ContactGegevens.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      activeStep: 0,
      id: null,
      showSocial: false,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: false,
      isProfileSuccess: false,

      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      labelPosition: "bottom",
      mobileMode: "minimalist",
      dataSet: {},
    };
  },
  props: ["aandeelhouder"],
  components: {
    PersoonlijkGegevens,
    AlgemeenGegevens,
    ContactGegevens,
  },
  mounted() {
    //Each component has a unique id which can be accessed as this._uid
    this.id = this._uid;
  },

  methods: {
    ...mapActions(["fillState"]),

    resetStepper() {
      this.activeStep = 0;
    },

    collectData(value) {
      Object.assign(this.dataSet, value);
    },

    addItemToState(id) {
      const newData = Object.assign(this.dataSet, { id: id });
      this.fillState(newData);
      console.log(this.aandeelhouder);
    },

    addToLocalStorage(id) {
      console.log(id);
      const local = window.localStorage.getItem(`aandeelhouder${id}`);
      console.log(!local);
      const newData = Object.assign(this.dataSet, { id: id });
      if (!local) {
        window.localStorage.setItem(
          `aandeelhouder${id}`,
          JSON.stringify(newData)
        );
      }
    },
  },
};
</script>


<style lang="scss">
.stepper-container {
  padding: 50px;
}

.title {
  margin-top: 30px;
  width: 591px;
  height: 28px;
  font-family: FiraSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #194379;
}
</style>