<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
      <img src="@/assets/pig.png" alt="Logo" class="footer-logo"/>
          <p>版权所有 © 2023</p>
        </div>
        <div class="footer-center">
          <h3>联系我们</h3>
          <p>电话: 123-456-7890</p>
          <p>邮箱: info@example.com</p>
        </div>
        <div class="footer-right">
          <h3>关注我们</h3>
          <div class="social-icons">
            <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // Footer component script
  </script>
  
  <style scoped>
  
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-left, .footer-center, .footer-right {
    flex: 1;
  }
  
  .footer-logo {
    width: 100px;
    height: auto;
  }
  
  .footer-center h3, .footer-right h3 {
    margin-bottom: 10px;
  }
  
  .social-icons a {
    margin: 0 10px;
    font-size: 20px;
    color: #fff;
  }
  </style>
