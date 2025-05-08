<template>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/education">Formations</router-link>
      <router-link to="/experience">Expériences</router-link>
      <router-link to="/projects">Projets</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
    gap: 2rem;
    padding: 1rem 3rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .router-link-active {
    font-weight: bold;
    color: var(--primary-color);
  }
  </style>
  