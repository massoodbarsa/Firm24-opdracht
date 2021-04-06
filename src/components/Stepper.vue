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
        <!-- <div class="title has-text-centered">Algemeen gegevens</div> -->
        <AlgemeenGegevens
          :alegemeenGegevens="aandeelhouder"
          :id="id"
          @addData="collectData"
        />
      </b-step-item>

      <b-step-item step="2" label="PersoonlijkGegevens">
        <!-- <div class="title has-text-centered">Persoonlijk gegevens</div> -->
        <PersoonlijkGegevens
          :persoonlijkGegevens="aandeelhouder"
          :id="id"
          @addData="collectData"
        />
      </b-step-item>

      <b-step-item step="3" label="ContactGegevens">
        <!-- <div class="title has-text-centered">Contact gegevens</div> -->
        <ContactGegevens
          :contsctGegevens="aandeelhouder"
          :id="id"
          @addData="collectData"
          @addToLocalStorage="addToLocalStorage"
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
    collectData(value) {
      Object.assign(this.dataSet, value);
    },

    addToLocalStorage() {
    
      const local = window.localStorage.getItem("aandeelhouder");
      const newData = Object.assign(this.dataSet, { id: this.id });
      if (local) {
        console.log(local);
      }
      window.localStorage.setItem("aandeelhouder", JSON.stringify(newData));
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
  // margin: 6px 0 0 117px;
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