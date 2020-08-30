<template>
  <div>
    <ul class="nav nav-pills mb-3" id="pills-tab">
      <li class="nav-item">
        <router-link
            to="/"
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            aria-controls="pills-home"
            aria-selected="true"
        >Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="project"
                     class="nav-link"
                     id="pills-profile-tab"
                     data-toggle="pill"
                     aria-controls="pills-profile"
                     aria-selected="false"
        >My Project
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"
                     to="/contact"
                     id="pills-contact-tab"
                     data-toggle="pill"
                     aria-controls="pills-contact"
                     aria-selected="false"
        >Contact
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  name: 'Header',
}
</script>

<style>
router-link {
  cursor: pointer;
}
</style>