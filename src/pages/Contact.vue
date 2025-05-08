<script>
export default {
  data() {
    return {
      contactLinks: [
        {
          id: 1,
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/NathanAgu/',
          icon: 'fab fa-linkedin'
        },
        {
          id: 2,
          name: 'GitHub',
          url: 'https://github.com/NathanAgu',
          icon: 'fab fa-github'
        },
        {
          id: 3,
          name: 'Email',
          url: 'mailto:nathan.agu.2103@gmail.com',
          icon: 'fas fa-envelope'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="contact-container">
    <h1>Me Contacter</h1>
    <div class="contact-links">
      <a v-for="link in contactLinks" 
         :key="link.id" 
         :href="link.url" 
         target="_blank" 
         rel="noopener noreferrer"
         class="contact-link">
        <i :class="link.icon"></i>
        <span>{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s;
}

.contact-link:hover {
  transform: translateY(-5px);
  color: #666;
}

.contact-link i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-link span {
  font-size: 1.1rem;
}
</style>