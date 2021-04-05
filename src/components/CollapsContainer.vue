<template>
  <section>
    <!-- <div class="buttons">
      <b-button type="is-success" outlined @click="addCollapses"
        >Outlined</b-button
      >
    </div> -->
    <section v-for="aandeelhouder in aandeelhouders" :key="aandeelhouder.title">
      <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
        <template #trigger="props">
          <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title">
              {{ aandeelhouder.title }}
            </p>
            <a class="card-header-icon">
              <div class="delete-btn" @click="handleDelete(aandeelhouder.id)">
                <p>Verwijder</p>
                <b-icon icon="delete"></b-icon>
              </div>

              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>
        <StepperVue :aandeelhouder="aandeelhouder" />
      </b-collapse>
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import StepperVue from "./Stepper.vue";
// console.log(this.collapseCounter);
export default {
  data() {
    return {
      isOpen: 0,
      // collapses: [],
    };
  },
  components: {
    StepperVue,
  },
  computed: {
    ...mapState({
      // collapseCounter: (state) => state.collapseCounter,
      aandeelhouders: (state) => state.aandeelhouder,
    }),
  },
  methods: {
    ...mapActions(["addCollapses",'delete']),
    handleDelete(id) {
      this.delete(id)
    },
  },
};
</script>

<style scoped lang="scss">
.delete-btn {
  margin-right: 20px;
  color: red;
  display: flex;
  padding: 10px;
  p {
    margin-right: 20px;
  }
}
</style>