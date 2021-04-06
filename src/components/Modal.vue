<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> <h1>Let op!</h1></slot>
          <p>
            Weet je zeker dat je {{ title }}, {{ voornaam }} {{ achternaam }},
            wilt verwijderen als aandeelhouder?
          </p>
        </header>

        <section class="modal-body">
          <b-button type="is-link is-light" rounded @click="close"
            >Nee, niet verwijderen </b-button
          ><br />
          <b-button type="is-danger" class="btn" rounded @click="del"
            >Ja, verwijder</b-button
          >
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: ["title", "voornaam", "achternaam"],
  methods: {
    close() {
      this.$emit("close");
    },
    del() {
      this.$emit("del");
    },
  },
};
</script>
<style lang='scss' scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #666d76;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 100px auto;
  opacity: 1;
  z-index: 1000;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  h1 {
    width: 100px;
    height: 36px;
    margin: 0 118px 25px 120px;
    font-family: FiraSans;
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #f96555;
  }
  p {
    width: 338px;
    height: 72px;
    margin: 25px 0 32px;
    font-family: FiraSans;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.41;
    letter-spacing: normal;
    text-align: center;
    color: #363636;
  }
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  .btn {
    margin-bottom: 10px;
    width: 200px;
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0.2;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>