export const siteData = {
  meta: {
    title: "Seohee Choy",
    description:
      "Seohee Choy is a robotics researcher at UW–Madison working on active perception, reinforcement learning, world models, and vision-language-action models.",
  },

  profile: {
    name: "Seohee Choy",
    aboutImage: "./images/profile/profile.jpg",
    journeyLabel: "Read my research journey",
    journeyUrl: "./journey.html",
    ctaLabel: "Connect on LinkedIn",
    ctaUrl: "https://www.linkedin.com/in/seohee-choy/",
  },

  nav: {
    resume: {
      label: "Resume",
      href: "./resume.html",
    },
    links: [
      { id: "home", label: "Home" },
      { id: "journey", label: "Journey", href: "./journey.html" },
      { id: "now", label: "Now" },
      { id: "in-depth", label: "Research" },
      { id: "activity", label: "Activity" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
  },

  journey: {
    meta: {
      title: "Research Journey | Seohee Choy",
      description:
        "How Seohee Choy's research evolved from visual intelligence to active perception, predictive representations, and full-stack robot learning.",
    },
    eyebrow: "Research journey",
    title: "From seeing to acting.",
    introduction:
      "My research has followed one recurring question: <strong>how can a robot act reliably when the information it needs is incomplete?</strong> Each lab gave me a different way to approach it: first the data behind visual models, then active sensing, then prediction, and finally the physical system itself.",
    pagePurpose:
      "A résumé can list what I worked on. This page tells the part between the bullet points: <strong>why each question led me to the next lab, and why each lab changed the question.</strong>",
    preludeLabel: "Before the labs",
    origin: {
      eyebrow: "the first spark",
      title: "Pixels met robots.",
      text:
        "In high school, I discovered computer vision by experimenting with CNNs and robotics by building and programming competition robots. I was drawn to both, and especially to the moment when perception changed what a robot could do. That connection became the thread I have followed ever since.",
      note: "tiny beginning,<br />big questions!",
    },
    pause: {
      eyebrow: "a deliberate pause",
      title: "Making room to explore",
      text:
        "Before graduating, I deliberately made room for experiences beyond coursework to learn how different research environments, from industry to academic labs, approach robotics problems. Working across them turned a broad interest in visual intelligence into a concrete research direction I want to keep building toward.",
    },
    arc: ["Visual data", "Active perception", "Prediction", "Embodiment", "Multimodal VLA"],
    stages: [
      {
        number: "01",
        label: "The starting point",
        organization: "LG AI Research · Vision / VLM",
        title: "Learning what makes visual intelligence reliable",
        question:
          "How do the quality and diversity of visual information shape what a multimodal model can understand?",
        narrative:
          "Building and evaluating data for a production vision-language model showed me that performance is not only an architecture problem. It depends deeply on what visual information a model receives, and whether that data is clean, complete, and diverse.",
        work: [
          "VLM dataset construction and evaluation",
          "Data filtering and quality control",
          "Large-scale multimodal data pipelines",
        ],
        takeaway:
          "Real-world observations are rarely as clean or complete as benchmark data. That gap drew me from visual understanding toward embodied perception.",
        nextQuestion:
          "What happens when a robot has to act even when the visual information it needs is incomplete?",
      },
      {
        number: "02",
        label: "Perception becomes action",
        organization: "KAIST · Robust Intelligence and Robotics Lab",
        title: "Letting the robot seek the information it needs",
        question:
          "How should a robot act when the visual information required for manipulation is incomplete or occluded?",
        narrative:
          "Instead of treating the robot as a passive observer, I began exploring active perception: allowing it to change its viewpoint and deliberately acquire information that makes manipulation more reliable.",
        work: [
          "Occlusion and partial observability",
          "Active multi-view perception",
          "UR5e manipulation",
          "HIL-SERL, PPO, and ACT",
          "Human demonstration and intervention",
        ],
        takeaway:
          "A manipulation failure can happen because the robot lacks the right observation, not simply because its policy is weak. What the robot can observe is itself a learning problem.",
        nextQuestion:
          "But does a robot always need another observation? Can it infer what it cannot currently see?",
      },
      {
        number: "03",
        label: "Beyond direct observation",
        organization: "UW–Madison · Prediction and Action Lab",
        title: "Representing what the robot cannot see",
        question:
          "When direct observation is insufficient, can a robot infer or predict hidden state from temporal context?",
        narrative:
          "I expanded from active sensing to predictive representations: using learned dynamics and world models to infer the present or anticipate the future, rather than always collecting a new observation. I now explore world models for K1 humanoid robots, including temporal smoothing for future latent prediction.",
        work: [
          "World models",
          "Future latent prediction",
          "Temporal smoothing",
          "K1 humanoid robots",
        ],
        takeaway:
          "Partial observability is not only a camera-viewpoint problem. It is also about how a robot internally represents and predicts world state. Active sensing and prediction are complementary tools.",
        nextQuestion:
          "How do these representations interact with the physical robot that generates every observation and action?",
      },
      {
        number: "04",
        label: "Grounding intelligence",
        organization: "UW–Madison · Marine Robotics Lab",
        title: "Understanding the full embodied system",
        question:
          "How can learned policies remain grounded in the sensors, mechanics, actuators, and control systems that make action possible?",
        narrative:
          "I joined a mechanical engineering robotics lab to grow beyond learning algorithms and become a full-stack roboticist. Onboarding the hardware for a VLA project on soft robotic manipulators, from CAD and 3D printing to soldering and system integration, is teaching me how intelligence is shaped by the physical system that carries it.",
        work: [
          "CAD and 3D printing",
          "Soldering and system integration",
          "Hardware onboarding",
          "VLA for soft manipulators",
        ],
        takeaway:
          "Embodied intelligence emerges from the whole loop. A policy, its sensors, control stack, actuators, and mechanical design cannot be treated as independent pieces.",
        nextQuestion:
          "How can we build learned robot policies that use richer sensory information while remaining grounded in physical embodiment?",
      },
    ],
    direction: {
      eyebrow: "Where this leads",
      title: "Multimodal VLA for reliable action under uncertainty",
      text:
        "I want to build vision-language-action systems that combine active sensing, predictive representations, and an understanding of physical embodiment. My goal is to develop robot policies that make reliable decisions under partial observability and physical uncertainty, from the model all the way to the sensor and machine.",
      pillars: [
        {
          title: "Observe",
          text: "Acquire the sensory evidence that matters for the task.",
        },
        {
          title: "Predict",
          text: "Infer hidden state and future outcomes from temporal context.",
        },
        {
          title: "Embody",
          text: "Ground learned decisions in sensing, control, and hardware.",
        },
      ],
    },
  },

  sections: {
    currentWork: { title: "What I’m Exploring Now" },
    inDepth: { title: "Research" },
    activity: { title: "Built Along the Way" },
    education: { title: "Education" },
    skills: { title: "Tools on My Workbench" },
    contact: { title: "Contact" },
  },

  introduction: {
    lead: "I build robotic systems that learn <em>where to look</em> and <em>how to act</em>.",
    body: "I am a senior at the <strong>University of Wisconsin–Madison</strong> studying Computer Science and Data Science. My research sits at the intersection of <strong>active perception, reinforcement learning, multimodal AI, and physical systems</strong>, with a focus on vision-language-action (VLA) models. I want to understand how robots can gather the observations they need, adapt under uncertainty, and act reliably in the real world. I plan to pursue these questions in graduate school.",
    text: "I am a senior at the <strong>University of Wisconsin–Madison</strong>, pursuing bachelor's degrees in <strong>Computer Science and Data Science</strong>. I build robotic systems that learn <strong>where to look and how to act</strong>. My interests lie at the intersection of <strong>active perception, reinforcement learning, multimodal AI, and physical systems</strong>, with a particular interest in vision-language-action models. I want to understand how robots can gather useful observations, adapt under uncertainty, and act reliably in the real world. I hope to continue exploring these questions in graduate school.",
  },

  currentWork: [
    {
      lab: "Prediction and Action Lab",
      location: "Madison, WI",
      role: "Undergraduate Researcher",
      advisor: "Professor Josiah Hanna",
      period: "September 2026 – Present",
      description:
        "I explore <strong>world models for K1 humanoid robots</strong>, including temporal smoothing for future latent prediction, so the robot can anticipate how its world will change.",
      focus: ["World models", "Humanoid robots", "Latent prediction"],
    },
    {
      lab: "Marine Robotics Lab",
      location: "Madison, WI",
      role: "Undergraduate Researcher",
      advisor: "Professor Wei Wang",
      period: "September 2026 – Present",
      description:
        "I conduct robotics hardware onboarding for a <strong>vision-language-action (VLA) project on soft robotic manipulators</strong>, covering CAD design, 3D printing, soldering, and system integration.",
      focus: ["VLA", "Soft manipulators", "CAD & 3D printing"],
    },
  ],

  inDepth: [
    {
      order: 1,
      period: "July 2026 – Present · Madison, WI",
      title: "WISCURDS - Undergraduate Student Researcher",
      caseTitle: "Turning policy research into an agentic workflow",
      question: "How can an AI agent monitor multilingual education policy without removing human review?",
      built: "A dual-agent workflow that recursively crawls sources and turns policy updates into structured state profiles.",
      stack: ["Python", "Data Science", "LLMs", "AI Agents"],
      paragraphs: [
        "Through <strong>Wisconsin Undergraduate Research in Data Science (<a href=\"https://dsi.wisc.edu/wiscurds/\" target=\"_blank\" rel=\"noopener noreferrer\">WISCURDS</a>)</strong>, I collaborate with the <a href=\"https://dsi.wisc.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">Wisconsin Data Science Institute</a> and the <a href=\"https://wec.wceruw.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Wisconsin Evaluation Collaborative</a> to develop an <strong>LLM-powered dual-agent system for <a href=\"https://wida.wisc.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">WIDA</a></strong>. The project automates the repetitive parts of multilingual education policy research while keeping humans in the review loop.",
        "I translate <strong>WIDA's operational requirements</strong> into a workflow that recursively crawls sources, extracts multilingual policy updates, and generates structured state profiles. The system is designed to cut repetitive work across a <strong>50-state analysis</strong> while keeping each finding traceable to its source for researchers.",
      ],
    },
    {
      order: 2,
      period: "November 2025 – September 2026 · Daejeon, South Korea",
      title: "Robust Intelligence and Robotics Lab - Visiting Undergraduate Researcher",
      caseTitle: "Giving robots a better view",
      marginDoodle: "spacemouse",
      question: "Can a robot move its cameras to manipulate reliably when the task is partially occluded?",
      built: "Remote gimbal camera modules, a multi-view Isaac Sim environment, and a SpaceMouse intervention pipeline.",
      stack: ["Reinforcement Learning", "Isaac Sim", "PyTorch", "Hardware Design"],
      paragraphs: [
        "At <a href=\"https://rirolab.kaist.ac.kr/\" target=\"_blank\" rel=\"noopener noreferrer\">KAIST RIRO Lab</a>, I investigated how <strong>cameras with controllable degrees of freedom</strong> can improve robotic manipulation under occlusion. I developed an active multi-view system around a <strong>UR5e</strong> workspace to identify when camera motion provides useful information beyond fixed-view observations.",
        "On the hardware side, I designed and built <strong>gimbal-mounted camera modules</strong> using Fusion 360, Raspberry Pi, BLDC motors, and FOC drivers, giving the system remote control over the robot's viewpoints.",
        "In Isaac Sim and Isaac Lab, I implemented a <strong>human-in-the-loop SERL training pipeline</strong> by integrating RLPD and enabling real-time interventions through a SpaceMouse. I also incorporated <strong>CLIPSeg-based object segmentation</strong> into the perception pipeline, and studied how viewpoint control and human-guided reinforcement learning affect sequential manipulation tasks such as pick-and-place.",
      ],
      images: [
        "./images/research/riro/riro-1.jpg",
        {
          type: "video",
          src: "./images/research/riro/riro-camera-demo.mp4",
          title: "RIRO Lab camera hardware demo",
        },
        "./images/research/riro/riro-2.jpg",
        {
          src: "./images/research/riro/riro-3.jpg",
        },
        {
          src: "./images/research/riro/riro-5.png",
        },
        {
          src: "./images/research/riro/riro-6.png",
        },
        {
          src: "./images/research/riro/riro-7.png",
        },
      ],
    },
    {
      order: 3,
      period: "May 2025 – October 2025 · Seoul, South Korea",
      title: "LG AI Research - AI Engineer",
      caseTitle: "Building the Data Behind VLM",
      question: "How do you turn noisy multimodal sources into training and evaluation data researchers can trust?",
      built: "Pipelines that processed 300K+ samples and an internal inspection platform for a 20+ person team.",
      stack: ["Python", "EXAONE-VL 4.0", "Multimodal Data", "Model Evaluation", "CLIP"],
      paragraphs: [
        "At <a href=\"https://www.lgresearch.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">LG AI Research</a>'s Vision Lab (now the Physical Intelligence Lab), I developed data and evaluation infrastructure for <strong>EXAONE-VL 4.0</strong>, an open-source vision-language model for reasoning over documents, charts, tables, OCR-heavy images, and visual question answering.",
        "I built automated pipelines that curated and transformed <strong>300K+ multimodal samples</strong> from public and confidential data sources into VLM-compatible formats. The pipelines validated image availability and modality completeness, enforced size constraints, and standardized OCR, chart, table, caption, and QA data for training and evaluation.",
        "I also developed a <strong>Flask-based inspection tool</strong> adopted by a 20+ person team of researchers and annotators to filter noisy samples, inspect image-text alignment, and correct multimodal QA data. To analyze model failures, I evaluated EXAONE-VL across <strong>five benchmarks</strong>: DocVQA, ChartQA, MMMU, AI2D, and K-DTCBench. I then used <strong>CLIP embeddings</strong> to retrieve visually similar cases and surface recurring error patterns.",
      ],
      images: [
        "./images/research/lg/lg-1.jpg",
        {
          src: "./images/research/lg/lg-2.jpg",
        },
        {
          src: "./images/research/lg/lg-3.jpg",
        },
        {
          src: "./images/research/lg/lg-4.jpg",
        },
      ],
    },
  ],

  activity: [
    {
      type: "Organization",
      title: "Wisconsin Humanoids - Software Team, Manipulation",
      period: "September 2026 – Present",
      stack: ["VLA", "π0.5", "Manipulation"],
      preview:
        "Working on <strong>vision-language-action (VLA) models</strong>, including <strong>π0.5 fine-tuning</strong>, for humanoid manipulation.",
      bullets: [],
      images: [],
    },
    {
      type: "Research",
      title: "Pioneer Academics - Student Researcher in Computer Vision",
      stack: ["Python", "Keras", "CNN", "OpenCV"],
      preview:
        "Researched <strong>CNN-based facial expression analysis</strong> under Professor Susan Fox at Macalester College.",
      bullets: [
        "Selected for the Pioneer Research Program.",
        "Wrote a research paper on the approach and findings.",
      ],
      images: [],
      url: "https://drive.google.com/file/d/1hoMej4nCtFE6bGQ3D1KBw7tFiR9gDylE/view?usp=drive_link",
      linkLabel: "Read paper",
    },
    {
      type: "Research",
      title: "CNN Layers & Hyperparameter Tuning for Image Recognition",
      stack: ["CNN", "Hyperparameter Tuning"],
      preview:
        "Studied how CNN depth and hyperparameter choices affect image recognition accuracy.",
      bullets: [
        "Compared model variants across layer configurations and training settings.",
      ],
      images: [],
    },
    {
      type: "Experience",
      title: "CS 540: Introduction to Artificial Intelligence - Peer Mentor",
      stack: ["Python", "Machine Learning"],
      preview:
        "Mentored <strong>10+</strong> students in Python-based AI projects covering neural networks, RL, and clustering.",
      bullets: [
        "Ran 1:1 and small-group sessions on debugging and project logic.",
        "Helped students connect AI theory to working code.",
      ],
      images: [],
    },
    {
      type: "Organization",
      title: "LIKELION US, UW–Madison - Software Developer",
      period: "2024 – Present",
      stack: ["React", "TypeScript", "Web Development"],
      preview:
        "Software developer for the UW–Madison chapter of LIKELION US, a student tech organization. Built the chapter's recruitment and events website.",
      bullets: [
        "Designed pages presenting the club's mission, curriculum, activities, and membership.",
        "Helped raise the club's online visibility during recruitment season.",
      ],
      images: ["./images/activity/likelion.png"],
    },
    {
      type: "Volunteering",
      title: "The SALT",
      stack: ["Student NGO", "Founder"],
      preview:
        "Founded a student-led NGO expanding access to computer education, teaching children in Rwanda through live online lessons.",
      bullets: [],
      images: [
        "./images/activity/salt-1.png",
        "./images/activity/salt-2.png",
      ],
    },
    {
      type: "Project",
      title: "Study Room Reservation System",
      stack: ["TypeScript", "React", "Firebase"],
      preview: "Full-stack booking platform serving <strong>400+</strong> students across <strong>4</strong> residence halls.",
      bullets: [
        "Real-time validation, duplicate-booking prevention, and conflict handling to cut reservation errors.",
        "Firebase data model for reservations, availability checks, and booking updates.",
      ],
      images: ["./images/activity/study-room.png"],
      url: "https://github.com/zseohee/Studyroom-Reservation",
      linkLabel: "View on GitHub",
    },
    {
      type: "Leadership · Project",
      title: "Robotics Academy",
      stack: ["Java", "Computer Vision"],
      preview: "Led a <strong>25-member, 3-team</strong> academy for FIRST Tech Challenge Korea and programmed Java-based vision navigation.",
      bullets: [
        "Programmed autonomous navigation for competition robots.",
        "Used webcam-based visual recognition for localization and decision-making during autonomous runs.",
      ],
      images: [
        "./images/activity/robotics-1.jpg",
        "./images/activity/robotics-2.jpg",
      ],
      url: "#",
    },
    {
      type: "Project",
      title: "FarmBot Smart Farming System",
      stack: ["Open Source CNC Farming"],
      preview: "Sensor-driven automation for a farming robot that plants, waters, and weeds.",
      bullets: [
        "Linked sensor feedback to motor control for real-time task execution.",
        "Built and tested workflows combining hardware control, sensing, and the physical environment.",
      ],
      images: [
        "./images/activity/farmbot-1.png",
        "./images/activity/farmbot-2.png",
        "./images/activity/farmbot-3.png",
      ],
      url: "#",
    },
    {
      type: "Project",
      title: "Immersive VR Environment - CS 579: Virtual Reality",
      stack: ["Unity", "SketchUp", "3D Interaction"],
      preview: "Immersive Unity worlds with animated scenes, visual effects, spatial audio, and objects that respond to user movement.",
      bullets: [
        "Built across a series of VR projects in CS 579 at UW–Madison.",
        "Gained hands-on experience modeling in SketchUp and building interactions in Unity.",
      ],
      images: [
        { type: "video", src: "./images/activity/demo1.mp4", title: "VR demo 1" },
        { type: "video", src: "./images/activity/demo2.mp4", title: "VR demo 2" },
        { type: "video", src: "./images/activity/demo3.mp4", title: "VR demo 3" },
        { type: "video", src: "./images/activity/demo4.mp4", title: "VR demo 4" },
      ],
      url: "#",
    },
    {
      type: "Project",
      title: "University Community Mobile Platform",
      stack: ["React Native", "Mobile UI"],
      preview: "Mobile frontend for a university community platform: discussion forum, sublease marketplace, and messaging.",
      bullets: [],
      images: [],
      url: "#",
    },
  ],

  education: [
    {
      title: "Branksome Hall Asia",
      description: "International Baccalaureate Bilingual Diploma",
      imageUrl: "./images/education/branksome.jpg",
      url: "https://www.branksome.asia/",
    },
    {
      title: "University of Wisconsin–Madison",
      description:
        "B.S. Computer Science · In Progress<br />B.S. Data Science · In Progress<br />Expected May 2027",
      imageUrl: "./images/education/uw-madison.jpg",
      url: "https://www.wisc.edu/",
    },
  ],

  skills: [
    {
      title: "Languages",
      description: "Python, C++, Java, TypeScript, SQL, HTML/CSS",
    },
    {
      title: "AI / ML",
      description: "PyTorch, TensorFlow, OpenCV",
    },
    {
      title: "Robotics & Hardware",
      description: "Isaac Sim, UR5e, CAD, 3D Printing, Soldering",
    },
    {
      title: "Software & Platforms",
      description: "React, React Native, FastAPI, Node.js, Linux, Git, Docker, Google Cloud Platform, Firebase",
    },
  ],

  contact: {
    subheading: "Open to research collaborations and internship opportunities. I would love to hear from you.",
    email: "schoy3@wisc.edu",
    social: [
      { label: "GitHub", url: "https://github.com/zseohee" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/seohee-choy/",
      },
    ],
  },

  resume: {
    title: "Seohee Choy — Resume",
    heading: "Resume",
    subtitle: "Preview below or download the PDF.",
    downloadLabel: "Download Resume",
    downloadFilename: "Seohee-Choy-Resume.pdf",
    pdfUrl: "./resume.pdf",
  },
}
