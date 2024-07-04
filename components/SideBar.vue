<template>
    <nuxt-ui-sidebar class="w-64 h-full bg-blue-700 text-white p-4">
      <div class="sidebar-section">Components</div>
      <nuxt-link to="/congress" class="sidebar-item">Congresses</nuxt-link>
      <nuxt-link to="/member" class="sidebar-item">Members</nuxt-link>
      <nuxt-link to="/party" class="sidebar-item">Parties</nuxt-link>
      <nuxt-link to="/poll" class="sidebar-item">Polls</nuxt-link>
      <nuxt-link to="/session" class="sidebar-item">Sessions</nuxt-link>
      <nuxt-link to="/vote" class="sidebar-item">Votes</nuxt-link>
  
      <div class="sidebar-divider"></div>
  
      <div class="sidebar-section">Documentation</div>
      <nuxt-link to="/installation" class="sidebar-item">Installation</nuxt-link>
      <nuxt-link to="/getting-started" class="sidebar-item">Getting Started</nuxt-link>
  
      <div class="sidebar-divider"></div>
  
      <div class="sidebar-section">Account</div>
      <nuxt-link to="/user" class="sidebar-item">User</nuxt-link>
      <nuxt-link to="/settings" class="sidebar-item">Settings</nuxt-link>
    </nuxt-ui-sidebar>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .sidebar-item {
    display: block;
    padding: 0.75rem 1rem;
    color: white;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  .sidebar-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .sidebar-divider {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 1rem 0;
  }
  .sidebar-section {
    font-size: 1rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
  }
  .nuxt-ui-sidebar {
    height: calc(100vh - 64px); /* Adjust the value based on the height of your header */
  }
  </style>
  