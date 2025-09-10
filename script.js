document.addEventListener("DOMContentLoaded", () => {
  // Typed.js animation
  new Typed('#typed-text', {
    strings: [
      "Quick Learner",
      "Problem Solver",
      "Web Developer",
      "Full Stack Developer",
      "Team Player",
      "Tech Enthusiast",
      "Frontend Developer",
      "Backend Developer",
      "Open Source Contributor",
      "Creative Thinker"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 2000
  });
  // Skills data
  const skillsData = {
    frontend: [
      { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    backend: [
      { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    tools: [
      { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  };

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Back-End',
    tools: 'Tools',
  };

  function renderSkills(category = 'all') {
    const container = document.getElementById('skills-grid');
    container.innerHTML = '';

    const displaySkills = category === 'all' ? skillsData : { [category]: skillsData[category] };

    Object.entries(displaySkills).forEach(([cat, skills]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'skill-category';

      const title = document.createElement('h3');
      title.textContent = categoryTitles[cat];
      categoryDiv.appendChild(title);

      const skillsWrapper = document.createElement('div');
      skillsWrapper.className = 'skill-items';

      skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.innerHTML = `<img src="${skill.url}" alt="${skill.name} icon" /><span>${skill.name}</span>`;
        skillsWrapper.appendChild(skillDiv);
      });

      categoryDiv.appendChild(skillsWrapper);
      container.appendChild(categoryDiv);
    });
  }

  // Skills button click
  document.querySelectorAll('.skills-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.skills-buttons button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderSkills(button.getAttribute('data-category'));
    });
  });

  // Initial render
  renderSkills();

  // Fetch GitHub profile photo
  async function fetchGitHubProfile() {
    try {
      const response = await fetch("https://api.github.com/users/JignabahenKalani");
      const data = await response.json();
      document.getElementById("profile-photo").src = data.avatar_url;
    } catch (error) {
      console.error("Error fetching GitHub profile:", error);
    }
  }

  // Fetch GitHub repositories including collaboration repo
  async function fetchGitHubProjects() {
    const projectsContainer = document.getElementById("github-projects");
    projectsContainer.innerHTML = "<p>Loading projects...</p>";

    try {
      // Fetch your repos
      const response = await fetch("https://api.github.com/users/JignabahenKalani/repos?sort=updated&per_page=100");
      const repos = await response.json();

      // Fetch collaboration repo(s)
      const collabResponse = await fetch("https://api.github.com/repos/JamesBampton/gurus-travel-blog");
      const collabRepo = await collabResponse.json();

      // Merge repos
      const allRepos = Array.isArray(repos) ? [...repos] : [];
      allRepos.push(collabRepo);

      // Clear loading text
      projectsContainer.innerHTML = "";

      // Render projects
      allRepos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description provided."}</p>
          <div class="project-links">
            <a href="${repo.html_url}" target="_blank" class="code">🔗 Code</a>
            ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="demo">🌐 Demo</a>` : ""}
          </div>
        `;
        projectsContainer.appendChild(card);
      });

    } catch (error) {
      console.error("Error fetching repos:", error);
      projectsContainer.innerHTML = "<p>⚠️ Failed to fetch repos.</p>";
    }
  }

  // Hamburger menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show'); // Toggle menu
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Fetch profile + projects
  fetchGitHubProfile();
  fetchGitHubProjects();
});
