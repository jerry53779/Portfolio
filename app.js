// ==========================================
// Jerry's Creative Portfolio - app.js Engine
// ==========================================

// 24. Console Branding Deployment Broadcast
console.log(
`%c[ JERRY | CODING & KICKS ]
%cStatus: Operational. Systems Compiled.
%cBuild Version: 1.0.4 // Zero-Dependency Stack`,
"color: #FFCC00; font-family: monospace; font-size: 16px; font-weight: bold; background-color: #111111; padding: 4px 8px; border: 2px solid #FFCC00;",
"color: #111111; font-family: monospace; font-size: 12px; font-weight: bold;",
"color: #777777; font-family: monospace; font-size: 10px;"
);

// ==========================================
// 1. Projects and Experience Data Structures
// ==========================================

const PROJECTS = [
{
    id: "PRIME",
    title: "PRIME Academic Platform",
    category: "cs",
    desc: "A high-performance college management ecosystem engineered using a responsive 3-tier architecture to deliver zero-latency student and faculty data interactions.",
    tags: ["Streamlit", "Supabase", "3-Tier Architecture"],
    img: "./assets/PRIME.png",
    fallbackImg: "./assets/PRIME.png",
    github: "https://github.com/jerry53779/prime"
  },
  {
    id: "FaceDetectionOpenCV",
    title: "Face Detection & Recognition",
    category: "ai-ml",
    desc: "An advanced computer vision implementation leveraging OpenCV to perform real-time image processing, multi-face tracking, and biometric verification algorithms.",
    tags: ["OpenCV", "Python", "AI/ML"],
    img: "./assets/FaceDetection.png",
    fallbackImg: "./assets/FaceDetection.png",
    github: "https://github.com/jerry53779/Face-Detection-and-Recognition-OpenCV-"
  },
  {
    id: "StudentManagement",
    title: "Student Management System",
    category: "cs",
    desc: "A secure institutional platform optimized for concurrent database operations, managing academic records, credentials, and streamlined workflow automation.",
    tags: ["Node.js", "Supabase", "Database"],
    img: "assets/StudentManagement.svg",
    fallbackImg: "assets/StudentManagement.svg",
    github: "https://github.com/jerry53779/Student-Management"
  },
  {
    id: "HRManagementSystemApp",
    title: "HR Management System App",
    category: "cs",
    desc: "A production-ready human resource application built with modular backend controllers to coordinate tracking protocols and enterprise workforce logistics.",
    tags: ["Node.js", "Express", "Backend"],
    img: "assets/HRManagement.svg",
    fallbackImg: "assets/HRManagement.svg",
    github: "https://github.com/jerry53779/HR-Management-System-App"
  },
  {
    id: "MMAChoreographyAssistant",
    title: "MMA Choreography Assistant",
    category: "mma",
    desc: "A unique logic engine designed to map complex striking combinations, analyze sequence patterns, and optimize technical martial arts movement flow parameters.",
    tags: ["MMA Engineering", "Python", "Logic"],
    img: "assets/MMAChoreo.svg",
    fallbackImg: "assets/MMAChoreo.svg",
    github: "https://github.com/jerry53779/MMA-Choreography-Assistant"
  },
  {
    id: "PersonalInformationManagementSystem",
    title: "Personal Information Manager",
    category: "cs",
    desc: "A highly customized micro-framework engineered to index local data sets, run rapid query search logic, and serve as an organized private terminal dashboard.",
    tags: ["Python", "Flask", "PIM System"],
    img: "assets/PIMS.svg",
    fallbackImg: "assets/PIMS.svg",
    github: "https://github.com/jerry53779/Personal-Information-Management-System"
  },
  {
    id: "NRPFWhatsAppAutomation",
    title: "NRPF WhatsApp Automation Engine",
    category: "cs",
    desc: "A sleek operational script implementing headless browser automation protocols to orchestrate bulk notification routing and community dispatch scheduling.",
    tags: ["Python", "Automation", "Scripts"],
    img: "assets/NRPFAutomation.svg",
    fallbackImg: "assets/NRPFAutomation.svg",
    github: "https://github.com/jerry53779/NRPF_WhatsApp_Automation"
  },
  {
    id: "HelloWorldBootcamp",
    title: "Hello World Bootcamp",
    category: "cs",
    desc: "A foundational repository showcasing lower-level logic implementations, system compilation baselines, and lightweight interactive gaming constructs in pure C.",
    tags: ["C Language", "Game"],
    img: "assets//helloworld.svg",
    fallbackImg: "assets/helloworld.svg",
    github: "https://github.com/jerry53779/HelloWorldBootcamp"
    
  }
];

const EXPERIENCE = [
    {
    date: "2023 - 2024",
    role: "TinkerHub Co-Lead",
    company: "AISAT TinkerHub Cell",
    desc: "Promoted a culture of innovation and collaboration among students. Organized workshops, hackathons, and learning sessions focused on cutting-edge technologies and creative problem-solving."
  },
  {
    date: "2024 - 2025",
    role: "Secretary",
    company: "IEEE Student Branch AISAT",
    desc: "Managed structural community operations, organized technical workflows, and coordinated events across the student branch network, fostering a strong engineering community."
  },
  {
    date: "2025 - 2026",
    role: "NSS NRPF Coordinator",
    company: "National Service Scheme (NSS) - AISAT Unit",
    desc: "Led the Natural Resources Protection Force (NRPF) cell under NSS. Orchestrated large-scale environmental awareness drives, sustainable development projects, and community outreach programs."
  },
  {
    date: "2025 - 2026",
    role: "Tech Lead",
    company: "Builder Clan",
    desc: "Directed the technical vision and software development operations. Supervised development cycles for internal institute projects, establishing robust codebase standards and mentoring junior developers."
  },
  {
    date: "2026 - 2027",
    role: "IEDC Technological Coordinator",
    company: "Innovation and Entrepreneurship Development Centre (IEDC)",
    desc: " Spearheading technological initiatives to nurture student entrepreneurship. Designing hardware/software prototyping support systems and managing IEDC's innovation lab infrastructure."
  },
  {
    date: "2026 - Present",
    role: "Mixed Martial Arts (MMA) & Combat Coach",
    company: "Ronin Corporation / Independent",
    desc: "Directing high-performance training regimens across Mixed Martial Arts. Implementing tactical striking frameworks and physical conditioning models for athletes."
  }
];

// ==========================================
// 2. Core Initialisation & Data Rendering
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  renderExperience();
  initMatrixCanvas();
  initEasterEggs();
});

// Render Projects dynamically
function renderProjects(filterCategory) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  const filtered = filterCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filterCategory);

  filtered.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-id", proj.id);
    card.setAttribute("data-tags", proj.tags.join(","));

    // Render tags
    const tagsHTML = proj.tags.map(tag => `<span class="tech-tag" data-tag="${tag}">[${tag}]</span>`).join("");

    card.innerHTML = `
      <div class="project-img-wrapper">
        <span class="project-category-badge">${proj.category}</span>
        <img src="${proj.img}" alt="${proj.title}" class="project-img" onerror="this.src='${proj.fallbackImg}'">
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link github-cta" data-project="${proj.title}">[GitHub]</a>
          <a href="#" class="project-link demo-cta">[Live Demo]</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Re-bind click event on tech tags for highlights
  bindTechTagClicks();
  bindGithubCTAClicks();
  bindInspectorShield();
}

// Render Experience timeline dynamically
function renderExperience() {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;

  timeline.innerHTML = "";

  EXPERIENCE.forEach((exp, idx) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    item.innerHTML = `
      <div class="timeline-node" data-index="${idx}"></div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-date" data-original="${exp.date}">${exp.date}</span>
          <span class="timeline-company">${exp.company}</span>
        </div>
        <h3 class="timeline-role">${exp.role}</h3>
        <p class="timeline-desc">${exp.desc}</p>
      </div>
    `;

    timeline.appendChild(item);
  });

  bindTimelineNodeClicks();
  bindTimelineDateWarp();
}


// ==========================================
// 3. E1: Vadakkan Kalari Matrix Canvas Engine
// ==========================================

function initMatrixCanvas() {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  
  // Set resolution
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Characters and custom training words
  const alphabet = "010101010101010101011100";
  const trainingWords = ["ALGORITHM", "STRATEGY", "KALARI", "STRIKE", "KICK", "FLASK", "NODEJS"];
  
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize) + 1;
  
  // Array of drops - y coordinates
  let rainDrops = Array(columns).fill(1);
  
  // Active custom word queues per column
  // Format: { word: string, charIdx: number, active: boolean }
  let activeWords = Array(columns).fill(null).map(() => ({
    word: "",
    charIdx: 0,
    active: false
  }));

  function drawMatrix() {
    // Get colors dynamically based on CSS custom properties
    const accentYellow = getComputedStyle(document.documentElement).getPropertyValue("--accent-yellow").trim();
    
    // Clear canvas with very low opacity to build trail
    ctx.fillStyle = "rgba(244, 244, 244, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = accentYellow;
    ctx.font = `bold ${fontSize}px monospace`;

    for (let i = 0; i < rainDrops.length; i++) {
      let char = "";
      
      // Randomly inject a training word into a column
      if (!activeWords[i].active && Math.random() > 0.995) {
        activeWords[i].word = trainingWords[Math.floor(Math.random() * trainingWords.length)];
        activeWords[i].charIdx = 0;
        activeWords[i].active = true;
      }

      if (activeWords[i].active) {
        // Output character from active training word
        char = activeWords[i].word[activeWords[i].charIdx];
        activeWords[i].charIdx++;
        if (activeWords[i].charIdx >= activeWords[i].word.length) {
          activeWords[i].active = false;
        }
      } else {
        // Output standard binary character
        char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }

      const x = i * fontSize;
      const y = rainDrops[i] * fontSize;

      // Draw character
      ctx.fillText(char, x, y);

      // Reset drop when hitting bottom or randomly
      if (y > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  }

  setInterval(drawMatrix, 35);
}


// ==========================================
// 4. Easter Egg Interactivity Engine (25 Eggs)
// ==========================================

function initEasterEggs() {
  
  // ------------------------------------------
  // E2: "Punch-to-Compile" Mechanic
  // ------------------------------------------
  const punchTrigger = document.getElementById("punch-trigger");
  const heroHeaders = document.getElementById("hero-headers");
  
  if (punchTrigger && heroHeaders) {
    punchTrigger.addEventListener("click", (e) => {
      // Impact shake
      heroHeaders.classList.remove("impact-shake");
      void heroHeaders.offsetWidth; // Trigger reflow
      heroHeaders.classList.add("impact-shake");
      
      // Audio click impact (synthesis code for punch sound!)
      playPunchSound();

      // Spawn floating XP text fragment
      const phrases = ["+25 XP", "CRITICAL COMPILE!", "SWEEP THE LEG!", "STACK PUSHED!", "COMPILED VADAKKAN", "KICK!"];
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      
      const bubble = document.createElement("div");
      bubble.className = "xp-bubble";
      bubble.innerText = phrase;
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY + window.scrollY}px`;
      
      document.body.appendChild(bubble);
      
      // Clean up bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 1200);
    });
  }

  // Synthesis engine for punch sound
  function playPunchSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch(err) {
      // Audio context blocked or not supported - ignore silently
    }
  }

  // ------------------------------------------
  // E3 & E4: Konami Code Sequence Flips & Swaps
  // ------------------------------------------
  const konamiSeq = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let konamiIdx = 0;
  let konamiCount = 0;

  window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    const expectedKey = konamiSeq[konamiIdx].toLowerCase();

    if (key === expectedKey) {
      konamiIdx++;
      if (konamiIdx === konamiSeq.length) {
        // Reset index
        konamiIdx = 0;
        konamiCount++;
        
        if (konamiCount === 1) {
          // E3: Smooth flip 180 degrees
          document.body.classList.add("konami-flipped");
          showToast("🤸 SYSTEM FLIPPED!", "Entering Konami sequence 180-degree rotation.");
        } else if (konamiCount === 2) {
          // E4: Execute second palette swap to terminal green
          document.documentElement.style.setProperty("--accent-yellow", "#00FF00");
          document.documentElement.style.setProperty("--toast-bg", "#00FF00");
          showToast("💚 GREEN PALETTE UNLOCKED!", "Swapping accent variables to terminal green.");
        } else {
          // Reset konami settings
          document.body.classList.remove("konami-flipped");
          document.documentElement.style.setProperty("--accent-yellow", "#FFCC00");
          document.documentElement.style.setProperty("--toast-bg", "#FFCC00");
          konamiCount = 0;
          showToast("⚙️ CONFIG RESET", "Standard workspace variables loaded.");
        }
      }
    } else {
      // Check if current key starts sequence anew
      if (key === konamiSeq[0].toLowerCase()) {
        konamiIdx = 1;
      } else {
        konamiIdx = 0;
      }
    }
  });

  // ------------------------------------------
  // E5: Title Tracker Event
  // ------------------------------------------
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "⚠️ break; Training Interrupted!";
    } else {
      document.title = "Jerry | Coding & Kicks";
    }
  });

  // ------------------------------------------
  // E6: Profile Image Frame Swap
  // ------------------------------------------
  const dotTech = document.getElementById("dot-tech");
  const dotAthletic = document.getElementById("dot-athletic");
  const imgTech = document.getElementById("profile-img-tech");
  const imgAthletic = document.getElementById("profile-img-athletic");

  if (dotTech && dotAthletic && imgTech && imgAthletic) {
    dotTech.addEventListener("click", () => {
      dotTech.classList.add("active");
      dotAthletic.classList.remove("active");
      
      // Cross-fade
      imgTech.style.opacity = "1";
      imgTech.style.zIndex = "2";
      imgAthletic.style.opacity = "0";
      imgAthletic.style.zIndex = "1";
    });

    dotAthletic.addEventListener("click", () => {
      dotAthletic.classList.add("active");
      dotTech.classList.remove("active");
      
      // Cross-fade
      imgAthletic.style.opacity = "1";
      imgAthletic.style.zIndex = "2";
      imgTech.style.opacity = "0";
      imgTech.style.zIndex = "1";
    });
  }

  // ------------------------------------------
  // E7: Double-Tap Counter Block ("PARRY!")
  // ------------------------------------------
  const portraitBox = document.getElementById("portrait-box");
  if (portraitBox) {
    portraitBox.addEventListener("dblclick", (e) => {
      portraitBox.classList.remove("parry-pop");
      void portraitBox.offsetWidth;
      portraitBox.classList.add("parry-pop");

      // Spawn PARRY bubble
      const bubble = document.createElement("div");
      bubble.className = "parry-bubble";
      bubble.innerText = "PARRY!";
      bubble.style.left = `${e.clientX - 50}px`;
      bubble.style.top = `${e.clientY + window.scrollY - 30}px`;
      
      document.body.appendChild(bubble);

      // Play block synth sound
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.setValueAtTime(300, audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } catch(err) {}

      setTimeout(() => {
        portraitBox.classList.remove("parry-pop");
        bubble.remove();
      }, 800);
    });
  }

  // ------------------------------------------
  // E8: Logo Hover Glitch
  // ------------------------------------------
  const logo = document.getElementById("logo-jerry");
  const originalName = "JERRY";
  const glitchChars = "@#$%&?*<>!=+";
  let glitchInterval = null;

  if (logo) {
    logo.addEventListener("mouseenter", () => {
      let duration = 0;
      clearInterval(glitchInterval);
      
      glitchInterval = setInterval(() => {
        let textArray = originalName.split("");
        for (let i = 0; i < textArray.length; i++) {
          if (Math.random() > 0.4) {
            textArray[i] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
        }
        logo.innerText = textArray.join("");
        duration += 30;

        if (duration >= 150) {
          clearInterval(glitchInterval);
          logo.innerText = originalName;
        }
      }, 30);
    });
  }

  // ------------------------------------------
  // E10: Hidden Env Terminal Readout
  // ------------------------------------------
  const envBracket = document.getElementById("env-bracket");
  const envText = document.getElementById("env-text");
  if (envBracket && envText) {
    envText.innerText = "HOST: GITHUB_PAGES // OS: " + (navigator.platform || "LINUX_X64") + " // DB: NONE";

    envBracket.addEventListener("mouseenter", () => {
      envBracket.classList.add("expanded");
    });
    envBracket.addEventListener("mouseleave", () => {
      envBracket.classList.remove("expanded");
    });
  }

  // ------------------------------------------
  // E11: Stack Overflow Trap
  // ------------------------------------------
  const filterPanel = document.getElementById("filter-panel");
  const filterTrapAnchor = document.getElementById("filter-trap-anchor");
  let filterClicks = 0;
  let filterTimer = null;

  if (filterPanel && filterTrapAnchor) {
    filterPanel.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        // Update category selection
        const btns = filterPanel.querySelectorAll(".filter-btn");
        btns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        
        renderProjects(e.target.getAttribute("data-category"));

        // Click timing calculation
        filterClicks++;
        if (filterClicks === 1) {
          filterTimer = setTimeout(() => {
            filterClicks = 0;
          }, 2000);
        }

        if (filterClicks >= 5) {
          clearTimeout(filterTimer);
          filterClicks = 0;
          
          // Inject faux Stack Overflow warning
          injectStackOverflowAlert();
        }
      }
    });
  }

  function injectStackOverflowAlert() {
    if (document.getElementById("so-trap-alert")) return;

    const alertBox = document.createElement("div");
    alertBox.id = "so-trap-alert";
    alertBox.className = "stack-overflow-alert";
    alertBox.innerHTML = `
      <span>RangeError: Maximum Call Stack Size Exceeded (5 clicks/2s) ... Nice combo! Sweep the recursion.</span>
      <span class="stack-overflow-close" id="so-alert-close">&times;</span>
    `;

    filterTrapAnchor.appendChild(alertBox);

    document.getElementById("so-alert-close").addEventListener("click", () => {
      alertBox.remove();
    });

    // Auto-remove after 5s
    setTimeout(() => {
      alertBox.remove();
    }, 5000);
  }

  // ------------------------------------------
  // E18: GitHub CTA Continuous Text Loop
  // ------------------------------------------
  const repoLoopBtn = document.getElementById("btn-repos-loop");
  const loopTexts = ["VIEW ALL REPOS", "FORK THE CODE", "STAR THE REPO"];
  let repoLoopInterval = null;
  let loopIdx = 0;

  if (repoLoopBtn) {
    repoLoopBtn.addEventListener("mouseenter", () => {
      repoLoopInterval = setInterval(() => {
        loopIdx = (loopIdx + 1) % loopTexts.length;
        repoLoopBtn.innerText = loopTexts[loopIdx];
      }, 600);
    });

    repoLoopBtn.addEventListener("mouseleave", () => {
      clearInterval(repoLoopInterval);
      repoLoopBtn.innerText = "View All Repos";
    });
  }

  // ------------------------------------------
  // E19 & E20: Timeline Scroll Events (Toast & Stamina)
  // ------------------------------------------
  const timelineSec = document.getElementById("experience");
  const staminaBar = document.getElementById("stamina-bar");
  const staminaText = document.getElementById("stamina-text");
  
  let toastTriggered = false;

  window.addEventListener("scroll", () => {
    if (!timelineSec) return;

    const rect = timelineSec.getBoundingClientRect();
    const secHeight = rect.height;
    const secTop = rect.top;
    
    // ------------------------------------------
    // E20: Scroll-Driven Stamina Meter
    // ------------------------------------------
    const viewHeight = window.innerHeight;

    // Calculate percentage scroll inside timeline section
    // Starts when top enters viewport, finishes when bottom leaves viewport
    if (secTop <= viewHeight && secTop + secHeight >= 0) {
      const scrollRange = secHeight + viewHeight;
      const scrolled = viewHeight - secTop;
      const pct = Math.min(Math.max((scrolled / scrollRange), 0), 1);
      
      // Stamina drains from 100% down to 0%
      const stamina = Math.round(100 - (pct * 100));
      
      if (staminaBar && staminaText) {
        staminaBar.style.width = `${stamina}%`;
        staminaText.innerText = `STAMINA: ${stamina}%`;
        
        // Colors shifts based on stamina level
        if (stamina < 30) {
          staminaBar.style.backgroundColor = "#FF0055"; // Red danger
        } else if (stamina < 60) {
          staminaBar.style.backgroundColor = "#FFA500"; // Orange exhaustion
        } else {
          staminaBar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--accent-yellow").trim();
        }
      }

      // ------------------------------------------
      // E19: Scroll Landmark Warning (Midpoint)
      // ------------------------------------------
      // Check if timeline midpoint is in the middle of viewport
      const midpoint = secTop + (secHeight / 2);
      const viewportMid = viewHeight / 2;
      
      if (Math.abs(midpoint - viewportMid) < 50 && !toastTriggered) {
        toastTriggered = true;
        showToast("⚠️ MILESTONE DETECTED", "Mid-point reached. Keep pushing! Finish the training.");
      }
    }
  });

  // ------------------------------------------
  // E21: SQL Injection Form Handler
  // ------------------------------------------
  const contactName = document.getElementById("contact-name");
  if (contactName) {
    contactName.addEventListener("input", () => {
      const query = contactName.value.toUpperCase();
      const sqlPatterns = ["' OR '1'='1", "UNION SELECT", "DROP TABLE", "SELECT *", "' OR 1=1", "OR 1=1 --"];
      
      let matched = false;
      for (let pattern of sqlPatterns) {
        if (query.includes(pattern)) {
          matched = true;
          break;
        }
      }

      if (matched) {
        contactName.classList.add("warning-sql");
      } else {
        contactName.classList.remove("warning-sql");
      }
    });
  }

  // ------------------------------------------
  // E22: Cyclical Empty Input Placeholders
  // ------------------------------------------
  const contactEmail = document.getElementById("contact-email");
  const emailPlaceholders = ["enter_token...", "guard_up@mail.com", "fetch_handshake..."];
  let emailInterval = null;
  let emailPlaceholderIdx = 0;

  if (contactEmail) {
    contactEmail.addEventListener("focus", () => {
      if (contactEmail.value === "") {
        emailInterval = setInterval(() => {
          emailPlaceholderIdx = (emailPlaceholderIdx + 1) % emailPlaceholders.length;
          contactEmail.placeholder = emailPlaceholders[emailPlaceholderIdx];
        }, 800);
      }
    });

    contactEmail.addEventListener("blur", () => {
      clearInterval(emailInterval);
      contactEmail.placeholder = "enter_token...";
    });
  }

  // ------------------------------------------
  // E25: Triple-Click Dashboard Global Reset
  // ------------------------------------------
  const resetTrigger = document.getElementById("reset-trigger");
  if (resetTrigger) {
    resetTrigger.addEventListener("click", (e) => {
      // 3 clicks
      if (e.detail === 3) {
        resetAllVariables();
      }
    });
  }

  // Add click listener to contact container too
  const contactSec = document.getElementById("contact");
  if (contactSec) {
    contactSec.addEventListener("click", (e) => {
      // Make sure they clicked the background, not children
      if (e.target === contactSec && e.detail === 3) {
        resetAllVariables();
      }
    });
  }

  function resetAllVariables() {
    // Reset Konami states
    document.body.classList.remove("konami-flipped");
    document.documentElement.style.setProperty("--accent-yellow", "#FFCC00");
    document.documentElement.style.setProperty("--toast-bg", "#FFCC00");
    konamiIdx = 0;
    konamiCount = 0;

    // Reset local commits count
    localStorage.removeItem("pushedCommits");
    
    // Reset form inputs & warning states
    const form = document.getElementById("contact-form");
    if (form) form.reset();
    if (contactName) contactName.classList.remove("warning-sql");

    // Clear stack overflow alerts
    const alerts = document.querySelectorAll(".stack-overflow-alert");
    alerts.forEach(a => a.remove());

    // Highlight removal
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(c => c.classList.remove("tag-highlighted"));
    const tags = document.querySelectorAll(".tech-tag");
    tags.forEach(t => t.classList.remove("active"));

    // Reset timeline dates to original values
    const dateElements = document.querySelectorAll(".timeline-date");
    dateElements.forEach(el => {
      el.innerText = el.getAttribute("data-original");
    });

    showToast("🧹 SYSTEM CLEANSED", "All modified layout variables, storage integers, and warning flags returned to 0.");
  }
}

// Helper to show sticky midpoint / status toasts
function showToast(title, body) {
  const toast = document.getElementById("midpoint-toast");
  const tHeader = toast.querySelector(".toast-header span");
  const tBody = document.getElementById("toast-text");
  const tClose = document.getElementById("toast-close");

  if (!toast || !tHeader || !tBody) return;

  tHeader.innerText = title;
  tBody.innerText = body;
  toast.classList.add("show");

  const closeToast = () => {
    toast.classList.remove("show");
    tClose.removeEventListener("click", closeToast);
  };
  tClose.addEventListener("click", closeToast);

  // Auto hide after 4 seconds
  setTimeout(closeToast, 4000);
}

// ------------------------------------------
// E12: Commit Metric Storage Tracker
// ------------------------------------------
function bindGithubCTAClicks() {
  const links = document.querySelectorAll(".github-cta");
  links.forEach(link => {
    link.addEventListener("click", () => {
      let count = parseInt(localStorage.getItem("pushedCommits") || "0", 10);
      count++;
      localStorage.setItem("pushedCommits", count.toString());
      console.log(`%cPushed Commits Logged: ${count}`, "color: #00FF00; font-weight: bold; font-family: monospace;");
    });
  });
}

// ------------------------------------------
// E14: Inspector Shield Shielding
// ------------------------------------------
function bindInspectorShield() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      console.log('%cSweep the leg! No inspecting here.', 'color: #FF0055; font-size: 14px; font-weight: bold; font-family: monospace;');
    });
  });
}

// ------------------------------------------
// E15: Tech Tag Highlight Multiplier
// ------------------------------------------
function bindTechTagClicks() {
  const allTags = document.querySelectorAll(".tech-tag");
  const cards = document.querySelectorAll(".project-card");

  allTags.forEach(tag => {
    tag.addEventListener("click", (e) => {
      e.stopPropagation(); // Avoid triggering card links
      
      const tagLabel = tag.getAttribute("data-tag");
      const isAlreadyActive = tag.classList.contains("active");

      // Reset all tags and cards first
      allTags.forEach(t => t.classList.remove("active"));
      cards.forEach(c => c.classList.remove("tag-highlighted"));

      if (!isAlreadyActive) {
        // Activate clicked tag
        tag.classList.add("active");
        
        // Find other tags with same label in other cards
        document.querySelectorAll(`.tech-tag[data-tag="${tagLabel}"]`).forEach(t => t.classList.add("active"));

        // Highlight matching project cards
        cards.forEach(card => {
          const tagsStr = card.getAttribute("data-tags") || "";
          const cardTags = tagsStr.split(",");
          if (cardTags.includes(tagLabel)) {
            card.classList.add("tag-highlighted");
          }
        });
      }
    });
  });
}

// ------------------------------------------
// E16: Timeline Node Exploding Tokens
// ------------------------------------------
function bindTimelineNodeClicks() {
  const nodes = document.querySelectorAll(".timeline-node");
  const tokens = ["const", "let", "import", "await", "async", "return", "yield", "export"];

  nodes.forEach(node => {
    node.addEventListener("click", (e) => {
      const rect = node.getBoundingClientRect();
      const nodeX = rect.left + rect.width / 2;
      const nodeY = rect.top + rect.height / 2 + window.scrollY;

      // Click impact audio
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } catch(err) {}

      // Spawn 6 explosion particles
      for (let i = 0; i < 6; i++) {
        const token = tokens[Math.floor(Math.random() * tokens.length)];
        const particle = document.createElement("div");
        particle.className = "exploding-token";
        particle.innerText = token;
        
        // Set positions
        particle.style.left = `${nodeX}px`;
        particle.style.top = `${nodeY}px`;

        // Generate flying vector values (CSS animation keyframes mapping)
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 80;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rot = Math.round(Math.random() * 360 - 180);

        particle.style.setProperty("--tx", `${tx}px`);
        particle.style.setProperty("--ty", `${ty}px`);
        particle.style.setProperty("--rot", `${rot}deg`);

        document.body.appendChild(particle);

        // Cleanup
        setTimeout(() => {
          particle.remove();
        }, 1500);
      }
    });
  });
}

// ------------------------------------------
// E17: Time-Warp Hover Coordinates
// ------------------------------------------
function bindTimelineDateWarp() {
  const dates = document.querySelectorAll(".timeline-date");
  
  dates.forEach(dateEl => {
    let warpInterval = null;
    const originalText = dateEl.getAttribute("data-original");
    
    // Parse years out of text
    let originalYear = parseInt(originalText.match(/\d{4}/) || "2025", 10);
    
    dateEl.addEventListener("mouseenter", () => {
      let currentYear = originalYear;
      
      clearInterval(warpInterval);
      warpInterval = setInterval(() => {
        // Count down to 1970 (UNIX Epoch)
        currentYear -= 15;
        if (currentYear <= 1970) {
          currentYear = 1970;
          clearInterval(warpInterval);
        }
        
        // Format display
        if (originalText.includes("- Present")) {
          dateEl.innerText = `${currentYear} - 1970`;
        } else {
          const match = originalText.match(/(\d{4})\s*-\s*(\d{4})/);
          if (match) {
            const range = parseInt(match[2], 10) - parseInt(match[1], 10);
            dateEl.innerText = `${currentYear} - ${currentYear + range}`;
          } else {
            dateEl.innerText = `${currentYear}`;
          }
        }
      }, 15);
    });

    dateEl.addEventListener("mouseleave", () => {
      clearInterval(warpInterval);
      dateEl.innerText = originalText;
    });
  });
}
