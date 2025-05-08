<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          period: "Janv. 2025 - Févr. 2025",
          title: "Développeur web",
          company: "Find'Your'Dev",
          location: "Nantes, France - À distance",
          description: "Marketplace de mise en relation entre développeurs et client.",
          technologies: ["ExpressJS", "WordPress", "HivePress"],
          achievements: [
            "Sécurisation d'une API",
            "Fonctionnalités sur un site web"
          ]
        },
        {
          id: 2,
          period: "Mai 2024 - Juil. 2024",
          title: "Développeur web",
          company: "Orange",
          location: "Nantes, France - Hybride",
          description: "Développement d'applications web dédiées aux employés d'Orange.",
          technologies: ["Symfony"],
          achievements: [
            "Portail web"
          ]
        },
        {
          id: 3,
          period: "Janv. 2023 - Mars 2023",
          title: "Développeur web",
          company: "Impro Solutions",
          location: "Saint-Herblain, France - Sur site",
          description: "Développement d'applications web pour des entreprises externes.",
          technologies: ["Bootstrap", "Html/CSS", "Git", "GitHub"],
          achievements: [
            "Site de documentation",
          ]
        },
        {
          id: 4,
          period: "Mai 2021 - Janv. 2022",
          title: "Technicien Fibre Optique",
          company: "LCF RESEAUX",
          location: "Saint-Herblain, France - Sur site",
          description: "Installation, maintenance et réparation des réseaux de fibre optique pour particuliers.",
          technologies: ["FTTE", "FTTH", "FTTP"],
          achievements: [
            "Contact client",
          ]
        },
        {
          id: 5,
          period: "Mai 2021 - Juin 2021",
          title: "Technicien",
          company: "TIBCO",
          location: "Saint-Aignan-Grandlieu, France - Sur site",
          description: "Installation, paramétrage et dépannage de systèmes informatiques.",
          technologies: ["Maintenance", "Dépannage"],
          achievements: [
            "Raid (Informatique)",
            "Raspberry Pi",
            "Serveur NAS",
            "Déploiement de masters"
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="experience-container">
    <h1>Mes Expériences Professionnelles</h1>
    <div class="timeline">
      <div v-for="experience in experiences" :key="experience.id" class="timeline-item">
        <div class="timeline-content">
          <span class="period">{{ experience.period }}</span>
          <h3>{{ experience.title }}</h3>
          <h4>{{ experience.company }}</h4>
          <p class="location">{{ experience.location }}</p>
          <p class="description">{{ experience.description }}</p>
          <div class="technologies">
            <span v-for="tech in experience.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <ul class="achievements">
            <li v-for="(achievement, index) in experience.achievements" :key="index">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #333;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 2rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #333;
}

.timeline-content {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

.period {
  font-weight: bold;
  color: #666;
}

h3 {
  margin: 0.5rem 0;
  color: #333;
}

h4 {
  margin: 0.5rem 0;
  color: #666;
}

.location {
  font-style: italic;
  color: #777;
}

.description {
  margin-top: 1rem;
}

.technologies {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: #e0e0e0;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9em;
  color: #444;
}

.achievements {
  margin-top: 1rem;
  padding-left: 1.2rem;
}

.achievements li {
  margin-bottom: 0.5rem;
  color: #555;
}
</style>