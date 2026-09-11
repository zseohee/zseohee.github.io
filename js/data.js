export const siteData = {
  meta: {
    title: "Seohee Choy",
    description:
      "Seohee Choy is a robotics researcher exploring active perception, reinforcement learning, and vision-language-action models.",
  },

  profile: {
    name: "Seohee Choy",
    aboutImage: "./images/profile/profile.jpg",
    ctaLabel: "CONNECT WITH ME!",
    ctaUrl: "https://www.linkedin.com/in/seohee-choy/",
  },

  nav: {
    resume: {
      label: "Resume",
      href: "./resume.html",
    },
    links: [
      { id: "home", label: "Home" },
      { id: "now", label: "Now" },
      { id: "in-depth", label: "Research" },
      { id: "activity", label: "Activity" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
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
    text: "I am a senior at the <strong>University of Wisconsin–Madison</strong>, pursuing bachelor's degrees in <strong>Computer Science and Data Science</strong>. I build robotic systems that learn <strong>where to look and how to act</strong>. My interests lie at the intersection of <strong>active perception, reinforcement learning, multimodal AI, and physical systems</strong>, with a particular interest in vision-language-action models. I want to understand how robots can gather useful observations, adapt under uncertainty, and act reliably in the real world. I hope to continue exploring these questions in graduate school.",
  },

  currentWork: [
    {
      index: "01",
      place: "Prediction & Action Lab · UW–Madison",
      title: "Reinforcement learning",
      status: "joining soon",
      note: "Joining the lab to explore how reinforcement learning agents improve through interaction and feedback.",
    },
    {
      index: "02",
      place: "Marine Robotics Lab · UW–Madison",
      title: "VLA for soft manipulators",
      note: "Exploring vision-language-action models for compliant, embodied manipulation.",
    },
  ],

  inDepth: [
    {
      order: 1,
      period: "July 2026 - Present · Madison, WI",
      title: "WISCURDS - Undergraduate Student Researcher",
      caseTitle: "Turning policy research into an agentic workflow",
      question: "How can an AI agent monitor multilingual education policy without removing human review?",
      built: "A dual-agent workflow that recursively crawls sources and turns policy updates into structured state profiles.",
      stack: ["Python", "Data Science", "LLMs", "AI Agents"],
      paragraphs: [
        "Through <strong>Wisconsin Undergraduate Research in Data Science (<a href=\"https://dsi.wisc.edu/wiscurds/\" target=\"_blank\" rel=\"noopener noreferrer\">WISCURDS</a>)</strong>, I collaborate with the <a href=\"https://dsi.wisc.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">Wisconsin Data Science Institute</a> and the <a href=\"https://wec.wceruw.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Wisconsin Evaluation Collaborative</a> to develop an <strong>LLM-powered dual-agent system for <a href=\"https://wida.wisc.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">WIDA</a></strong>. The project automates parts of multilingual education policy research while preserving human review.",
        "I translate <strong>WIDA's operational requirements</strong> into a workflow that recursively crawls sources, extracts multilingual policy updates, and generates structured state profiles. The system is designed to reduce repetitive work across a <strong>50-state analysis</strong> while keeping evidence traceable for researchers.",
      ],
    },
    {
      order: 2,
      period: "Nov 2025 - Sep 2026 · Daejeon, South Korea",
      title: "RIRO Lab - Undergraduate Student Researcher",
      caseTitle: "Giving robots a better view",
      question: "Can a robot move its cameras to manipulate reliably when the task is partially occluded?",
      built: "Remote gimbal camera modules, a multi-view Isaac Sim environment, and a SpaceMouse intervention pipeline.",
      stack: ["Reinforcement Learning", "Isaac Sim", "PyTorch", "Hardware Design"],
      paragraphs: [
        "At <a href=\"https://rirolab.kaist.ac.kr/\" target=\"_blank\" rel=\"noopener noreferrer\">KAIST RIRO Lab</a>, I investigate how <strong>cameras with controllable degrees of freedom</strong> can improve robotic manipulation under occlusion. I am developing an active multi-view system around a <strong>UR5e</strong> workspace to identify when camera motion provides useful information beyond fixed-view observations.",
        "I designed and built gimbal-mounted camera modules using Fusion 360, Raspberry Pi, BLDC motors, and FOC drivers, enabling remote control over the robot's viewpoints.",
        "In Isaac Sim and Isaac Lab, I implemented a <strong>human-in-the-loop SERL training pipeline</strong> by integrating RLPD and enabling real-time interventions through a SpaceMouse. I am also incorporating <strong>CLIPSeg-based object segmentation</strong> into the perception pipeline. My current work evaluates how viewpoint control and human-guided reinforcement learning affect sequential manipulation tasks such as pick-and-place.",
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
      period: "May 2025 - Oct 2025 · Seoul, South Korea",
      title: "LG AI Research - AI Engineer",
      caseTitle: "Building the Data Behind VLM",
      question: "How do you turn noisy multimodal sources into training and evaluation data researchers can trust?",
      built: "Pipelines that processed 300K+ samples and an internal inspection platform for a 20+ person team.",
      stack: ["Python", "EXAONE-VL 4.0", "Multimodal Data", "Model Evaluation", "CLIP"],
      paragraphs: [
        "At <a href=\"https://www.lgresearch.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">LG AI Research</a>'s Vision Lab (now the Physical Intelligence Lab), I developed data and evaluation infrastructure for <strong>EXAONE-VL 4.0</strong>, an open-source vision-language model for reasoning over documents, charts, tables, OCR-heavy images, and visual question answering.",
        "I built automated pipelines that curated and transformed <strong>300K+ multimodal samples</strong> from public and confidential data sources into VLM-compatible formats. The pipelines validated image availability and modality completeness, enforced size constraints, and standardized OCR, chart, table, caption, and QA data for training and evaluation.",
        "I also developed a Flask-based inspection tool that enabled researchers and annotators to filter noisy samples, inspect image-text alignment, and correct multimodal QA data. To analyze model failures, I evaluated EXAONE-VL across <strong>five benchmarks</strong>, including DocVQA, ChartQA, MMMU, AI2D, and K-DTCBench. I also used <strong>CLIP embeddings</strong> to retrieve visually similar cases and identify recurring error patterns.",
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
      type: "Research",
      title: "Pioneer Academics - Student Researcher in Computer Vision",
      stack: ["Python", "Keras", "CNN", "OpenCV"],
      preview:
        "Student Researcher under Professor Susan Fox at Macalester College. Research activity on facial expression analysis with CNNs.",
      bullets: [
        "Student Researcher in Computer Vision under Professor Susan Fox at Macalester College.",
        "Selected for the Pioneer Research Program.",
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
        "Studied how CNN depth and hyperparameter choices affect image recognition performance.",
      bullets: [
        "Investigated the impact of CNN layer configurations and hyperparameter tuning on image recognition accuracy.",
        "Compared model variants to analyze how architectural and training choices influence recognition performance.",
      ],
      images: [],
    },
    {
      type: "Experience",
      title: "CS 540 Introduction to Artificial Intelligence - Peer Mentor",
      stack: ["Python", "Machine Learning"],
      preview:
        "Mentored <strong>10+</strong> students in Python-based AI projects covering neural networks, RL, and clustering.",
      bullets: [
        "Mentored <strong>10+</strong> students in Python-based AI projects covering neural networks, reinforcement learning, clustering, and applied machine learning concepts.",
        "Supported students through 1:1 and small-group sessions to help students debug code, understand project logic, and connect theoretical AI concepts to working implementations.",
      ],
      images: [],
    },
    {
      type: "Volunteering",
      title: "The SALT",
      stack: ["Student NGO", "Founder"],
      preview:
        "Founded The SALT, a student NGO providing computer education to children in Rwanda.",
      bullets: [
        "Founded The SALT, a student-led NGO focused on computer education.",
        "Taught children in Rwanda about computers through live online lessons.",
      ],
      images: [
        "./images/activity/salt-1.png",
        "./images/activity/salt-2.png",
      ],
    },
    {
      type: "Project",
      title: "Study Room Reservation System",
      stack: ["TypeScript", "React", "Firebase"],
      preview: "Reservation platform for <strong>400+</strong> students across <strong>4</strong> residence halls.",
      bullets: [
        "Built a full-stack reservation platform for <strong>400+</strong> students to manage shared study room booking in <strong>4</strong> residence halls.",
        "Implemented real-time validation, duplicate booking prevention, and conflict handling to reduce reservation errors.",
        "Designed a Firebase-backed data structure to support user reservations, availability checks, and booking updates.",
      ],
      images: ["./images/activity/study-room.png"],
      url: "https://github.com/zseohee/Studyroom-Reservation",
      linkLabel: "View on GitHub",
    },
    {
      type: "Project",
      title: "Garbage Classification",
      stack: ["Python", "Image Classification"],
      preview: "Image classification model for sorting garbage into recyclable categories.",
      bullets: [
        "Built a Python-based garbage classification pipeline to categorize waste images for recycling.",
        "Implemented model training and inference workflows for image-based waste sorting.",
      ],
      images: [],
      url: "https://github.com/zseohee/Garbage-Classification",
      linkLabel: "View on GitHub",
    },
    {
      type: "Project",
      title: "LIKELION UW-Madison Promotional Website",
      stack: ["React", "TypeScript"],
      preview: "Promotional website for LIKELION UW-Madison recruitment and events.",
      bullets: [
        "Built a promotional website for LIKELION UW-Madison to support recruitment and event communication.",
        "Designed web pages to present the organization's mission, curriculum, activities, and membership information.",
        "Helped improve online visibility for student recruitment during the academic year.",
      ],
      images: ["./images/activity/likelion.png"],
      url: "#",
    },
    {
      type: "Leadership · Project",
      title: "Robotics Academy",
      stack: ["Java", "Computer Vision"],
      preview: "Led a <strong>25-member</strong> robotics academy and built Java-based vision navigation.",
      bullets: [
        "Led Robotics Academy (<strong>25</strong> members, <strong>three</strong> teams) for FIRST Tech Challenge Korea.",
        "Programmed Java-based robot vision and autonomous navigation features for competition robotics.",
        "Integrated webcam-based visual recognition to support localization and decision-making during autonomous operation.",
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
      preview: "Automation logic for planting, watering, and weeding with sensor feedback.",
      bullets: [
        "Implemented automation and control logic for a smart farming robot designed to handle planting, watering, and weeding tasks.",
        "Connected sensor feedback with motor control to support real-time agricultural task execution.",
        "Built and tested robotic workflows that combined hardware control, sensing, and environmental interaction.",
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
      title: "Immersive VR Environment",
      stack: ["Unity", "3D Interaction"],
      preview: "An interactive virtual world with animated environments, spatial sound, and responsive objects.",
      bullets: [
        "Built an immersive 3D environment in Unity with animated environmental elements and visual effects.",
        "Integrated spatial audio and interactive objects to make the environment respond to user movement and input.",
      ],
      images: [],
      url: "#",
    },
    {
      type: "Project",
      title: "Netflix Interactive Data Explorer",
      stack: ["R Shiny", "Data Visualization"],
      preview: "An interactive dashboard for exploring Netflix titles, genres, ratings, and release patterns.",
      bullets: [
        "Developed an R Shiny dashboard with dynamic filters, searchable titles, and selectable content cards.",
        "Built Plotly charts, hover interactions, and data tables for exploring patterns across the catalog.",
      ],
      images: [],
      url: "#",
    },
    {
      type: "Project",
      title: "University Community Mobile Platform",
      stack: ["React Native", "Mobile UI"],
      preview: "Mobile community features for student discussions, subleases, and direct messaging.",
      bullets: [
        "Developed mobile frontend features for a university community platform using React Native.",
        "Built interfaces for a discussion forum, sublease marketplace, and user messaging workflows.",
      ],
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
      title: "University of Wisconsin-Madison",
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
      title: "AI / ML & Frameworks",
      description: "PyTorch, TensorFlow, Isaac Sim, OpenCV, React, React Native, FastAPI, Node.js",
    },
    {
      title: "Tools & Platforms",
      description: "Linux, Git, Fusion 360, Docker, Google Cloud Platform, Firebase",
    },
    {
      title: "Robotics",
      description: "Isaac Sim, Isaac Lab, active vision, manipulation",
    },
  ],

  contact: {
    subheading: "Want to work together or say hello?",
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
