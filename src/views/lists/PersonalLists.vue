<template>

  <div v-if="loaded" class="all ">
    <div v-if="lists.length === 0" class="d-flex align-items-center flex-column">
      <div class="container px-lg-5 mb-4">
        <div class="section-heading mt-5 align-items-center align-items-lg-start flex-column">
          <span class="text-center">Mis listas</span>
        </div>
      </div>
      <div class="w-75 div-no-list">
        <a v-bind:href="baseUrl + '/lists/new'" class="text-decoration-none text-white new-list" style="cursor: pointer"><span>Empieza a crear tus listas!</span></a>
      </div>

    </div>
    <div v-else>
      <div class="container px-lg-5">
        <div class="section-heading mt-5 align-items-center align-items-lg-start flex-column">
          <span class="text-center">Mis listas</span>
        </div>
      </div>

      <div class="container px-lg-5">
        <div class="my-5 row ">
          <div class="col-12 col-lg-10 align-items-center">
            <MoviesListsCards v-for="list in lists" :key="list" :list="list" :user="user" :width="80" :height="140"/>
          </div>
          <aside class="aside-card d-flex flex-column align-items-start col-12 col-lg-2 rounded-3 p-0">

            <router-link :to="{ name: 'lists-new' }"  class="text-decoration-none" style="cursor: pointer">
              <div class="m-auto p-3">
                <span class="text-center text-white">Nueva lista</span>
              </div>
            </router-link>

          </aside>
        </div>
      </div>
    </div>

  </div>

  <div v-else class="all ">
    <div class="container px-lg-5 mb-4">
      <div class="section-heading mt-5 align-items-center align-items-lg-start flex-column">
        <span class="text-center">Mis listas</span>
      </div>
    </div>
    <div id="contenedor" class="mb-5 ">
      <div class="loader" id="loader"></div>
    </div>
  </div>

</template>

<script>
import {getCookie, getUser} from "@/main";
import MoviesListsCards from "@/components/lists/MoviesListsCards";

export default {
  name: "PersonalLists",
  components: {MoviesListsCards},


  data() {
    return {
      user: [],
      lists: [],
      baseUrl: window.origin,
      loaded: false,
    }
  },

  async beforeMount() {

    this.token = getCookie("auth")
    if (this.token) {
      this.user = await getUser(this.token)
      if (this.user !== "User expired") {
        this.log = true
        await this.fetchUserLists()
      }
    }

  },

  methods: {
    async fetchUserLists() {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/user-lists/${this.user.id}`)
      this.lists = await promise.json()
      this.loaded = true
    }
  }
}
</script>

<style scoped>

.div-no-list {
  padding: 75px 50px 75px 50px;
  border: 1px solid #9ab;
  margin-top: 40px;
  border-radius: 10px;
}

.new-list:hover {
  text-decoration: underline;
}

.all {
  padding: 1px;
  background-color: black;
  min-height: 70vh;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .075em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.section-heading a {
  color: #9ab;
}

.aside-card {
  background-color: #2C3440;
  width: fit-content;
  height: fit-content;
}


aside > div {
  width: -webkit-fill-available;
  border-bottom: 1px solid #445566;
}

aside > div:last-child {
  border-bottom: none;
}


</style>