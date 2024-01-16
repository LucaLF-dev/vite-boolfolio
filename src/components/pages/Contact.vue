<template>
    <div class="wrapper">
      <div class="container">
         Contatti
      </div>
  
      <div class="container">
        <form action="" method="POST">
          <input type="text" placeholder="Name" name="name">
          <input type="email" placeholder="La tua mail" name="email">
          <textarea name="message" id="" cols="15" rows="10" placeholder="Messaggio"></textarea>
          <input type="submit" value="invia">
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  .wrapper {
    padding: 30px 60px;
  }
  </style>