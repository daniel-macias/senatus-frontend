<template>
    <nuxt-ui-sidebar class="w-64 h-full bg-blue-700 text-white p-4">
      <div class="sidebar-section">Components</div>
      <nuxt-ui-nav-item to="/congress" class="sidebar-item">Congresses</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/member" class="sidebar-item">Members</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/party" class="sidebar-item">Parties</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/poll" class="sidebar-item">Polls</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/session" class="sidebar-item">Sessions</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/vote" class="sidebar-item">Votes</nuxt-ui-nav-item>
  
      <div class="sidebar-divider"></div>
  
      <div class="sidebar-section">Documentation</div>
      <nuxt-ui-nav-item to="/installation" class="sidebar-item">Installation</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/getting-started" class="sidebar-item">Getting Started</nuxt-ui-nav-item>
  
      <div class="sidebar-divider"></div>
  
      <div class="sidebar-section">Account</div>
      <nuxt-ui-nav-item to="/user" class="sidebar-item">User</nuxt-ui-nav-item>
      <nuxt-ui-nav-item to="/settings" class="sidebar-item">Settings</nuxt-ui-nav-item>
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
  