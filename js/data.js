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
  },

  nav: {
    resume: {
      label: "Resume",
      href: "./resume.html",
    },
    links: [
      { id: "home", label: "Home" },
      { id: "journey", label: "Journey", href: "./journey.html" },
      { id: "in-depth", label: "Research" },
      { id: "activity", label: "Activity" },
      { id: "skills", label: "Skills" },
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
      "I want to build robots people can trust in the messy places where they live and work. One question has followed me from lab to lab: <strong>how can a robot act reliably when the information it needs is incomplete?</strong>",
    preludeLabel: "Before the labs",
    origin: {
      title: "Where vision met robotics",
      text:
        "In high school, I played with CNNs and built competition robots. What hooked me was the moment perception changed what a robot could do, and I have followed that thread ever since.",
      note: "tiny beginning,<br />big questions!",
    },
    pause: {
      title: "Making room to explore",
      text:
        "Before graduating, I stepped beyond coursework to see how industry and academic labs approach robotics. That turned a broad interest in visual intelligence into a concrete research direction.",
    },
    arc: ["Visual data", "Active perception", "Prediction", "Embodiment", "Multimodal VLA"],
    stages: [
      {
        number: "01",
        organization: "LG AI Research · Vision Lab",
        title: "Learning what makes visual intelligence reliable",
        question:
          "How does the quality of visual data shape what a multimodal model can understand?",
        narrative:
          "Building data for a production vision-language model showed me that performance is not only about architecture. It depends on whether what the model sees is clean, complete, and diverse.",
        takeaway:
          "Real-world observations are rarely as clean as benchmarks, and that gap pulled me toward embodied perception.",
        nextQuestion:
          "What happens when a robot must act on incomplete visual information?",
      },
      {
        number: "02",
        organization: "KAIST · Robust Intelligence and Robotics Lab",
        title: "Letting the robot seek the information it needs",
        question:
          "How should a robot manipulate when what it needs to see is occluded?",
        narrative:
          "Instead of treating the robot as a passive observer, I explored active perception: letting it move its viewpoint to gather the information that makes manipulation reliable.",
        takeaway:
          "Robots often fail not because the policy is weak, but because they lack the right observation.",
        nextQuestion:
          "Does a robot always need another look, or can it infer what it cannot see?",
      },
      {
        number: "03",
        organization: "UW–Madison · Prediction and Action Lab",
        title: "Representing what the robot cannot see",
        question:
          "When observation falls short, can a robot predict hidden state from temporal context?",
        narrative:
          "I moved from active sensing to prediction, using world models to anticipate what comes next. I now explore future latent prediction for the K1 humanoid, experiment with NuRec 3D scenes in Isaac Sim, and deploy InternVLA on the K1.",
        takeaway:
          "Partial observability is also about how a robot represents the world. Seeing and predicting work best together.",
        nextQuestion:
          "How do these representations meet the physical body that produces every action?",
      },
      {
        number: "04",
        organization: "UW–Madison · Marine Robotics Lab",
        title: "Understanding the full embodied system",
        question:
          "How can learned policies stay grounded in the hardware that makes action possible?",
        narrative:
          "To grow into a full-stack roboticist, I joined a mechanical engineering lab. Building the hardware for a VLA project on soft manipulators, from CAD and 3D printing to soldering, is teaching me how the body shapes intelligence.",
        takeaway:
          "Embodied intelligence comes from the whole loop: policy, sensors, control, and mechanics together.",
        nextQuestion:
          "How can robot policies use richer senses while staying grounded in their bodies?",
      },
    ],
    direction: {
      eyebrow: "Where this leads",
      title: "Multimodal VLA for reliable action under uncertainty",
      text:
        "I want to build vision-language-action systems that bring together active sensing, prediction, and physical embodiment, so robots can act reliably even when they cannot see everything.",
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
    inDepth: { title: "Research" },
    activity: { title: "Built Along the Way" },
    skills: { title: "Tools on My Workbench" },
    contact: { title: "Contact" },
  },

  introduction: {
    lead: "I build robotic systems that learn <em>where to look</em> and <em>how to act</em>.",
    body: "I am a senior at the <strong>University of Wisconsin–Madison</strong> studying Computer Science and Data Science. I believe robots can make the world a little kinder: lending a hand where help is scarce, and working safely beside the people they serve. I study how robots can <strong>see what they need, adapt under uncertainty, and act reliably</strong>, with a focus on vision-language-action (VLA) models, and I plan to keep pursuing this in graduate school.",
    text: "I am a senior at the <strong>University of Wisconsin–Madison</strong>, pursuing bachelor's degrees in <strong>Computer Science and Data Science</strong>. I build robotic systems that learn <strong>where to look and how to act</strong>. My interests lie at the intersection of <strong>active perception, reinforcement learning, multimodal AI, and physical systems</strong>, with a particular interest in vision-language-action models. I want to understand how robots can gather useful observations, adapt under uncertainty, and act reliably in the real world. I hope to continue exploring these questions in graduate school.",
  },

  inDepth: [
    {
      order: 1,
      period: "September 2026 – Present · Madison, WI",
      title: "Prediction and Action Lab - Undergraduate Researcher",
      caseTitle: "Teaching a humanoid to anticipate",
      question: "Can a humanoid robot predict how its world will change, and act on that prediction?",
      stack: ["World Models", "Isaac Sim", "NuRec", "InternVLA", "K1 Humanoid"],
      paragraphs: [
        "People rarely wait to see what happens next; we anticipate it. In Professor Josiah Hanna's Prediction and Action Lab, I explore <strong>world models for the Booster K1 humanoid robot</strong>, including temporal smoothing for future latent prediction, so the robot can look ahead instead of reacting only to its latest observation.",
        "I am experimenting with <strong>3D scene representations using NVIDIA NuRec inside Isaac Sim</strong>, turning captured real-world spaces into simulation environments, and deploying <strong>InternVLA</strong>, a vision-language-action model, on the K1.",
      ],
      images: [
        "./images/research/pal/pal-3.jpg",
        {
          type: "video",
          src: "./images/research/pal/pal-demo.mp4",
          title: "Booster K1 humanoid walking demo",
        },
        {
          src: "./images/research/pal/pal-4.jpg",
          alt: "NuRec 3D reconstruction of a room rendered in Isaac Sim",
        },
      ],
    },
    {
      order: 2,
      period: "September 2026 – Present · Madison, WI",
      title: "Marine Robotics Lab - Undergraduate Researcher",
      caseTitle: "Building the body behind a VLA",
      question: "What does a vision-language-action policy need from the physical system to control a soft robotic manipulator?",
      stack: ["VLA", "Soft Manipulators", "CAD", "3D Printing", "Soldering"],
      paragraphs: [
        "Even the smartest policy means little until it has a body that can carry it into the world. In Professor Wei Wang's Marine Robotics Lab, I conduct robotics hardware onboarding for a <strong>vision-language-action (VLA) project on soft robotic manipulators</strong>: designing parts in CAD, 3D printing them, soldering the electronics, and integrating the full system.",
      ],
    },
    {
      order: 3,
      period: "July 2026 – Present · Madison, WI",
      title: "WISCURDS - Undergraduate Student Researcher",
      caseTitle: "Turning policy research into an agentic workflow",
      question: "How can an AI agent monitor multilingual education policy without removing human review?",
      stack: ["Python", "Data Science", "LLMs", "AI Agents"],
      paragraphs: [
        "Behind every education policy are students learning in a language that is not yet fully their own. Through <strong>Wisconsin Undergraduate Research in Data Science (<a href=\"https://dsi.wisc.edu/wiscurds/\" target=\"_blank\" rel=\"noopener noreferrer\">WISCURDS</a>)</strong>, I collaborate with the <a href=\"https://dsi.wisc.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">Wisconsin Data Science Institute</a> and the <a href=\"https://wec.wceruw.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Wisconsin Evaluation Collaborative</a> to develop an <strong>LLM-powered dual-agent system for <a href=\"https://wida.wisc.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">WIDA</a></strong>. The project automates the repetitive parts of multilingual education policy research so people can spend their time on the judgment that matters, with humans kept in the review loop.",
        "I translate <strong>WIDA's operational requirements</strong> into a workflow that recursively crawls sources, extracts multilingual policy updates, and generates structured state profiles. The system is designed to cut repetitive work across a <strong>50-state analysis</strong> while keeping each finding traceable to its source for researchers.",
      ],
    },
    {
      order: 4,
      period: "November 2025 – September 2026 · Daejeon, South Korea",
      title: "Robust Intelligence and Robotics Lab - Visiting Undergraduate Researcher",
      caseTitle: "Giving robots a better view",
      question: "Can a robot move its cameras to manipulate reliably when the task is partially occluded?",
      stack: ["Reinforcement Learning", "Isaac Sim", "PyTorch", "Hardware Design"],
      paragraphs: [
        "Sometimes a robot fails not because it is clumsy, but because it simply cannot see. At <a href=\"https://rirolab.kaist.ac.kr/\" target=\"_blank\" rel=\"noopener noreferrer\">KAIST RIRO Lab</a>, I investigated how <strong>cameras with controllable degrees of freedom</strong> can improve robotic manipulation under occlusion. I developed an active multi-view system around a <strong>UR5e</strong> workspace to identify when camera motion provides useful information beyond fixed-view observations.",
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
      order: 5,
      period: "May 2025 – October 2025 · Seoul, South Korea",
      title: "LG AI Research - AI Engineer",
      caseTitle: "Building the Data Behind VLM",
      question: "How do you turn noisy multimodal sources into training and evaluation data researchers can trust?",
      stack: ["Python", "EXAONE-VL 4.0", "Multimodal Data", "Model Evaluation", "CLIP"],
      paragraphs: [
        "A model can only be as trustworthy as the data it learns from. At <a href=\"https://www.lgresearch.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">LG AI Research</a>'s Vision Lab (now the Physical Intelligence Lab), I developed data and evaluation infrastructure for <strong>EXAONE-VL 4.0</strong>, an open-source vision-language model for reasoning over documents, charts, tables, OCR-heavy images, and visual question answering.",
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
      bullets: [],
      images: [],
      url: "https://drive.google.com/file/d/1hoMej4nCtFE6bGQ3D1KBw7tFiR9gDylE/view?usp=drive_link",
      linkLabel: "Read paper",
    },
    {
      type: "Experience",
      title: "CS 540: Introduction to Artificial Intelligence - Peer Mentor",
      stack: ["Python", "Machine Learning"],
      preview:
        "Mentored <strong>10+</strong> students through 1:1 and small-group sessions, helping them turn AI theory on neural networks, RL, and clustering into working Python code.",
      bullets: [],
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
