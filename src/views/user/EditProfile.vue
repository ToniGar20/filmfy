<template>
  <div id="EditProfile">
    <div class="container">
      <h1>Perfil de Usuario</h1>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" value="" />
        </div>
        <div class="col-md-6">
          <label for="username" class="form-label">Username</label>
          <div class="input-group">
            <span class="input-group-text" id="username">@</span>
            <input type="text" class="form-control" id="username" value="" />
          </div>
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" value="" />
        </div>
        <div class="col-md-6">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="Password" value="" />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit" @click="editProfile">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data () {
    return {
      form: {
        firstName: '',
        email: '',
        password: ''
      }
    }
  },
  beforeMount () {
    this.getUserProfile()
  },
  methods: {
    getUserProfile (id) {
      fetch(`http://filmfy-api.ddns.net/api/register/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.form.firstName.push(data)
          this.form.username.push(data)
          this.form.email.push(data)
          this.form.password.push(data)
        })
        .catch(function (error) {
          console.log('Error en el fetch', error)
        })
    },

    editProfile (id) {
      fetch(`http://filmfy-api.ddns.net/api/v1/register/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: this.name,
          password: this.password,
          username: this.username,
          email: this.email
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((token) => {
          this.setCookie('tokenName', token.access_token, 365)
          this.log = true
          this.$router.push('/')
        })
        .catch(function (error) {
          console.log('Error en el fetch', error)
        })
    }
  }
}
</script>

<style scoped>
#Perfil {
  background-color: #445566;
}
#tab-profile {
  background-color: #0f0505;
}
#EditProfile {
  width: 100%;
  height: 100%;
  background-color: #0f0505;
}
.container {
  background-color: #0f0505;
  padding: 5%;
  width: 70%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
}
#Checkbox {
  margin-top: 4vh;
}
h1 {
  font-size: 7vh;
  color: #00c740;
}
label,
p {
  color: #fffdfd;
  font-size: 3vh;
}
small {
  color: #fffdfd;
  font-size: 2vh;
}
@media only screen and (max-width: 993px) {
  .big-div {
    height: auto;
    padding-top: 30px;
  }
  .user-benefits {
    border: none;
  }
  label,
  p {
    color: #fffdfd;
    font-size: 2vh;
    width: 50%;
  }
  small {
    color: #fffdfd;
    font-size: 1vh;
    width: 50%;
  }
}
</style>
