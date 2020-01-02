<template>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <h3 class ="title is-3">MyApp</h3>

    </router-link >

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link class="button is-primary" to="/register">
            <strong>Register</strong>
          </router-link>
          <router-link class="button is-light" to="/login">
            Log in
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>


</template>

<script>
export default {
    
}
</script>