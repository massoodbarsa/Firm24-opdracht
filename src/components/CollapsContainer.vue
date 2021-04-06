<template>
  <section>
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
              <div class="delete-btn" @click="showModal">
                <p>Verwijder</p>
                <b-icon icon="delete"></b-icon>
              </div>

              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>
        <StepperVue :aandeelhouder="aandeelhouder" />
      </b-collapse>

      <!-- <section v-if="isModalVisible"> -->
      <Modal
        v-show="isModalVisible"
        @close="closeModal"
        @del="handleDelete(aandeelhouder.id)"
        :title="aandeelhouder.title"
        :voornaam="aandeelhouder.persoonlijk_gegevens.voornaam"
        :achternaam="aandeelhouder.persoonlijk_gegevens.achternaam"
      />
      <!-- </section> -->
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Modal from "./Modal.vue";
import StepperVue from "./Stepper.vue";

export default {
  data() {
    return {
      isOpen: 0,
      isModalVisible: false,
      // collapses: [],
    };
  },
  components: {
    StepperVue,
    Modal,
  },
  computed: {
    ...mapState({
      // collapseCounter: (state) => state.collapseCounter,
      aandeelhouders: (state) => state.aandeelhouder,
    }),
  },
  methods: {
    ...mapActions(["addCollapses", "delete"]),

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    handleDelete(id) {
      this.delete(id);
      this.isModalVisible = false;
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

.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background-color: slategrey;
}
</style>