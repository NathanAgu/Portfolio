<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <div class="grid grid-cols-4 grid-rows-4 gap-4">
      <!-- Profil -->
      <div class="bg-purple-500 text-white h-32 row-span-3 rounded-lg flex flex-col items-center justify-center card">
        <div class="avatar-circle mb-4">NA</div>
        <h1 class="text-xl font-bold mb-2">Nathan AGU</h1>
        <p class="text-sm text-center px-4">
          Développeur Web Full Stack, 20 ans
          <br>BTS SIO SLAM
        </p>
      </div>

      <!-- CV -->
      <div class="bg-blue-500 text-white h-32 rounded-lg flex flex-col items-center justify-center card">
        <i class="fas fa-file-alt text-2xl mb-2"></i>
        <h2>Télécharger CV</h2>
      </div>
      

      <!-- Skills -->
      <div class="bg-green-500 text-white h-32 col-span-2 rounded-lg flex flex-col items-center justify-center card">
        <i class="fas fa-code-branch text-2xl mb-2"></i>
        <h2 class="mb-2">Compétences</h2>
        <div class="flex gap-4">
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">C#</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Docker</span>
        </div>
      </div>

      <div class="bg-pink-300 h-32 rounded-lg flex items-center justify-center card">
        <i class="fas fa-code text-3xl"></i>
      </div>

      <!-- Contact -->
      <div class="bg-violet-500 text-white h-32 rounded-lg flex flex-col items-center justify-center card">
        <i class="fas fa-envelope text-2xl mb-2"></i>
        <h2 class="mb-1">Contact</h2>
        <div class="flex gap-6">
          <a href="https://www.linkedin.com/in/NathanAgu/" target="_blank" class="contact-icon">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="mailto:nathan.agu.2103@gmail.com" class="contact-icon">
            <i class="fas fa-envelope text-2xl"></i>
          </a>
          <a href="https://github.com/NathanAgu" target="_blank" class="contact-icon">
            <i class="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>

      <!-- Projets -->
      <div class="bg-blue-500 text-white h-32 row-span-3 rounded-lg flex flex-col items-center justify-center card">
        <i class="fas fa-project-diagram text-2xl mb-4"></i>
        <h2 class="mb-4">Projets</h2>
        <ul class="text-sm text-center space-y-4">
          <li class="project-item">
            <i class="fas fa-music mr-3"></i>
            <span>MusicAtout</span>
          </li>
          <li class="project-item">
            <i class="fas fa-lock mr-3"></i>
            <span>API REST</span>
          </li>
          <li class="project-item">
            <i class="fas fa-code mr-3"></i>
            <span>Portfolio</span>
          </li>
        </ul>
      </div>

      <!-- Formations -->
      <div class="bg-indigo-500 text-white h-32 col-span-2 rounded-lg flex flex-col items-center justify-center card">
        <i class="fas fa-graduation-cap text-2xl mb-2"></i>
        <h2 class="mb-2">Formations</h2>
        <p class="text-sm">BTS SIO SLAM - Lycée Carcouet</p>
      </div>

      <!-- Objectifs -->
      <div class="bg-yellow-500 text-white h-32 col-span-2 rounded-lg flex flex-col items-center justify-center card">
        <i class="fas fa-flag text-2xl mb-2"></i>
        <h2 class="mb-2">Objectifs</h2>
        <p class="text-sm">Devenir Développeur Full Stack Senior</p>
      </div>

      <!-- Déco -->
      <div class="bg-pink-500 text-white h-32 rounded-lg flex items-center justify-center card">
        <i class="fas fa-code text-3xl"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 100px;
  min-height: 125px;
  background-color: rgba(158, 179, 255, 0.167);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  transition: all 0.3s;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.avatar-circle {
  width: 60px;
  height: 60px;
  background: rgba(228, 26, 26, 0.612);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

h2 {
  font-weight: 600;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

.fas {
  animation: float 3s ease-in-out infinite;
}

.contact-icon {
  color: rgb(0, 0, 0);
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
}

.contact-icon:hover {
  transform: translateY(-3px);
  background-color: rgba(255, 255, 255, 0.1);
}

.project-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-item:hover {
  color: #93c5fd;
  transform: translateX(5px);
}

.project-item i {
  margin: 0 10px;
  transition: transform 0.3s ease;
}

.project-item:hover i {
  transform: rotate(5deg);
}

.skill-tag {
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
</style>