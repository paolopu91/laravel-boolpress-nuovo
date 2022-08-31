import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import PageNotFound from "./pages/PageNotFound.vue"

// deve comunicare a vue che vogliamo usare questa libreria
Vue.use(VueRouter)

// dobbiamo creare un array con le rotte
const routes = [
  /*
    path = URI da scrivere nella barra dell'indirizzo
    component = il componente da mostrare quando la pagina viene visualizzata
    name = nome da assegnare a questa rotta
  */
  { path: "/", component: Home, name: "home.index" },
  { path: "/chi-siamo/su-di-noi/nemmeno-una-nuvola", component: About, name: "about.index" },
  { path: "/contatti", component: Contact, name: "contact.index" },
  { path: "*", component: PageNotFound },
]

// dobbiamo esportare un istanza di VueRouter() con le eventuali configurazioni
export default new VueRouter({
  // deve contenere un array di rotte
  routes,
  mode: "history"
})
