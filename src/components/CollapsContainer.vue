<template>
  <section>
    <div></div>
    <div class="buttons">
      <b-button type="is-success" outlined @click="addCollapses"
        >Outlined</b-button
      >
    </div>
    <b-collapse
      class="card"
      animation="slide"
      v-for="(collapse, index) of aandeelhouder"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <template #trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content">
          {{ collapse.text }}
        </div>
      </div>
    </b-collapse>
    {{ aandeelhouder }}
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
// console.log(this.collapseCounter);
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [],
    };
  },
  computed: {
    ...mapState({
      collapseCounter: (state) => state.collapseCounter,
      aandeelhouder: (state) => state.aandeelhouder,
    }),
  },
  methods: {
    ...mapActions(["addCollapses"]),
  },
};
</script>