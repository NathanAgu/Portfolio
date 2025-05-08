<script>
export default {
  data() {
    return {
      educations: [
        {
          id: 1,
          period: "2023 - 2025",
          title: "BTS Services Informatiques aux Organisations (SIO)",
          school: "Lycée Carcouet",
          location: "Nantes, France",
          description: "Option Solutions Logicielles et Applications Métiers (SLAM)",
        },
        {
          id: 2,
          period: "2020 - 2023",
          title: "Bac Professionel Systèmes Numériques (SN)",
          school: "Lycée Saint Félix La Salle",
          location: "Nantes, France",
          description: "Option Réseaux Informatiques et Systèmes Communicants (RISC)",
        },
      ]
    }
  }
}
</script>

<template>
  <div class="education-container">
    <h1>Mes Formations</h1>
    <div class="timeline">
      <div v-for="education in educations" :key="education.id" class="timeline-item">
        <div class="timeline-content">
          <span class="period">{{ education.period }}</span>
          <h3>{{ education.title }}</h3>
          <h4>{{ education.school }}</h4>
          <p class="location">{{ education.location }}</p>
          <p class="description">{{ education.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-container {
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
</style>