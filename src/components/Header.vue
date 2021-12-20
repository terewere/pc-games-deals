<template>
  <!-- Header here -->
  <div class="header">
      <a class="skip-link" href='#main'>Skip to content</a>
    <router-link to="/">
      <div class="header-wrapper">
        <img class="logo" src="../assets/logo.png" alt="logo" />
        <span class="brand">CheapShark</span>
      </div>
    </router-link>
    <ul class="nav">
      <li><router-link to="/deals">Deals</router-link></li>
      <li><router-link to="/games">Game</router-link></li>
      <li><router-link to="/stores">Store</router-link></li>
    </ul>
  </div>
</template>


