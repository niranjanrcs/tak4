// JavaScript to fetch and display resume data
document.addEventListener('DOMContentLoaded', () => {
    fetch('resume.json')
      .then(response => response.json())
      .then(data => {
        // Display experience
        const experienceSection = document.getElementById('experience');
        data.experience.forEach(job => {
          const jobElement = document.createElement('div');
          jobElement.innerHTML = `
            <h3>${job.title} at ${job.company}</h3>
            <p>${job.dates}</p>
            <p>${job.description}</p>
          `;
          experienceSection.appendChild(jobElement);
        });
  
        // Display skills
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
          const skillElement = document.createElement('li');
          skillElement.textContent = skill;
          skillsList.appendChild(skillElement);
        });
      })
      .catch(error => console.error('Error fetching resume data:', error));
  });
  