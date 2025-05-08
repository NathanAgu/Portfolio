<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "MusicAtout",
          description: "Application Windows Forms permettant la gestion et la consultation de salles de concert, incluant les informations sur les villes, bâtiments, types de musique et compositeurs. L'application dispose d'un système d'authentification avec gestion des rôles (utilisateur/administrateur).",
          technologies: [
            "C#",
            "Windows Forms",
            "SQL Server",
            "Visual Studio 2022",
            ".NET Framework"
          ],
          imageUrl: "WindowsForms.png",
          githubUrl: "https://github.com/NathanAgu/MusicAtout_PFR",
          features: [
            "Système de connexion avec gestion des rôles",
            "Consultation des salles de concert et bâtiments",
            "Gestion des compositeurs et styles de musique",
            "Interface utilisateur intuitive",
            "Base de données SQL Server",
            "Architecture en couches"
          ]
        },
        {
          id: 2,
          title: "API REST - Système de Gestion des Accès",
          description: "API REST sécurisée permettant la gestion complète des utilisateurs, rôles et permissions. Développée avec Node.js et Express, elle implémente un système d'authentification JWT et un middleware de contrôle d'accès pour sécuriser les routes.",
          technologies: [
            "Node.js",
            "Express",
            "Sequelize",
            "JWT",
            "Docker",
            "Postman"
          ],
          imageUrl: "API.jpg",
          githubUrl: "https://github.com/NathanAgu/auth-api",
          features: [
            "Authentification sécurisée avec JWT",
            "Gestion des utilisateurs et des rôles",
            "Système de permissions granulaire",
            "Middleware de contrôle d'accès",
            "Tests API via Postman",
            "Conteneurisation Docker",
            "Architecture REST"
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="projects-container">
    <h1>Mes Projets</h1>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" class="project-image">
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <p class="description">{{ project.description }}</p>
          <div class="technologies">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <ul class="features">
            <li v-for="(feature, index) in project.features" :key="index">
              {{ feature }}
            </li>
          </ul>
          <div class="project-links">
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener">GitHub</a>
            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener">Démo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

h2 {
  margin-bottom: 1rem;
  color: #333;
}

.description {
  color: #666;
  margin-bottom: 1rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #f0f0f0;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9em;
  color: #444;
}

.features {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1rem;
}

.features li {
  margin-bottom: 0.5rem;
  color: #555;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.project-links a:hover {
  background-color: #444;
}
</style>