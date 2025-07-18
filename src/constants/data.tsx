export const portfolioData = {
    header: {
      name: "krishnachandran-u",
      subtitle: "portfolio",
      links: [
        { text: "Email", href: "mailto:krishnachandran.u@outlook.com" },
        { text: "LinkedIn", href: "https://www.linkedin.com/in/krishnachandran-u" },
        { text: "GitHub", href: "https://github.com/krishnachandran-u" }
      ]
    },
    sections: {
      summary: {
        title: "Hey there! Let me introduce myself",
        content:
          "I turn ideas into fast, intelligent software. Whether it’s agentic backends, LLM pipelines, or web apps that just feel right. I love building things that work, scale, and delight. Currently a CS undergrad at CET, blending code, design, and AI to craft meaningful experiences. Always shipping, always learning."
      },
      recommendations: {
        title: "Here’s what others have to say",
        items: [
          {
            text: "It was a pleasure teaming up with Krishnachandran. His ability to enhance Products using NextJS is truly impressive. He excels in both frontend and backend development, and his knack for quickly grasping new concepts is remarkable. I wholeheartedly recommend him for roles that require strong communication skills and proficiency in frontend and backend development.",
            highlight: "I wholeheartedly recommend him for roles that require strong communication skills and proficiency in frontend and backend development.",
            author: "Don Jose Mathew, Founder @ Oronium"
          },
          {
            text: "It was an absolute pleasure working with Krishnachandran. I want to express my sincere gratitude for the wonderful collaboration we had. Krishnachandran's professionalism, dedication, and expertise greatly contributed to the success of our project. I truly appreciate the effort and commitment demonstrated throughout our time working together. Looking forward to more opportunities to collaborate in the future. Thank you once again for your outstanding contribution and teamwork!",
            highlight: "It was an absolute pleasure working with Krishnachandran.",
            author: "Indrajith Rajesh, Co-Founder @ Oronium"
          }
        ]
      },
      education: {
        title: "My Academic Background",
        items: [
          {
            institution: "College of Engineering Trivandrum (CET)",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            duration: "22 - 26",
            cgpa: "CGPA: 9.69/10",
            coursework:
              "Coursework: C, C++, SQL, Databases, Data Structures, Algorithms, Automata Theory, Formal Languages, Software Development, Computer Graphics"
          }
        ]
      },
      experience: {
        title: "Things I’ve built with awesome teams",
        items: [
          {
            title: "LLM Backend Engineer",
            company: "Stoqs.ai",
            duration: "Jul 24 - Aug 24 | 2 mos",
            location: "United States | Remote",
            responsibilities: [
              "Architected and deployed RAG-based solutions using LangChain pipelines, improving query response accuracy.",
              "Implemented dynamic data visualizations and chart generation features, reducing manual reporting time.",
              "Containerized applications using Docker and deployed on Azure with MongoDB and vector DBs.",
              "Optimized LLM workflows for concurrent users with <2s response times."
            ],
            href: "https://stoqs.ai/"
          },
          {
            title: "Frontend Developer Intern",
            company: "Oronium",
            duration: "Dec 23 - Mar 24 | 4 mos",
            location: "Trivandrum, India | Hybrid",
            responsibilities: [
              "Built 4+ web frontends from Figma using Next.js and Firebase, improving user engagement metrics.",
              "Implemented smooth animations via Framer Motion and GSAP in 3 client projects.",
              "Developed a scalable e-commerce platform with real-time updates and authentication.",
              "Optimized UI/UX collaboratively, leading to improved load times and accessibility scores."
            ],
            href: "https://www.oronium.com/"
          }
        ]
      },
     skills: {
        title: "My go-to tech toolkit",
        items: [
          "LangChain",
          "Large Language Models",
          "RAG",
          "React",
          "Next.js",
          "Python",
          "TypeScript",
          "JavaScript",
          "C++",
          "C",
          "Go",
          "Flask",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "Vector Databases",
          "Firebase",
          "Supabase",
          "Azure",
          "Docker",
          "Prisma ORM",
          "SQL",
          "Tailwind CSS",
          "Framer Motion",
          "Web Scraping",
          "Progressive Web Apps",
          "Competitive Programming",
          "Git",
          "REST APIs",
          "Figma",
          "Postman",
          "Chrome DevTools",
          "HTML/CSS",
          "LaTeX"
        ]
      },
      featuredWorks: {
        title: "Let me walk you through what I’ve built",
        items: [
          {
            title: "Empirical Analysis of Heuristic Algorithms on Graph Isomorphism",
            duration: "Mar 25 - May 25",
            description:
            "Conducted comprehensive performance analysis of Weisfeiler-Lehman, VF2, and brute-force algorithms for Graph Isomorphism Problem, significantly improving accuracy over baseline methods. Developed Python-based programs to analyze algorithmic complexity and symmetry effects across diverse graph structures. Delivered research findings under mentorship of Dr Ajeesh Ramanujan (HOD, CSE).",
            href: "https://www.linkedin.com/in/krishnachandran-u/details/projects/"
          },
          {
            title: "Pykleene – Automata & Formal Language Simulation Library",
            duration: "Nov 24 - Nov 24",
            description:
              "A comprehensive Python library supporting FSMs, PDA, LBA and Turing Machine simulations with extensive core operations. Implemented  API with interactive visualization capabilities, substantially reducing theoretical computer science learning curve. An open-source library with complete documentation and Regex-NFA transformation engine.",
            href: "https://pykleene.vercel.app/"
          },
          {
            title: "Autorecord – One-Click Lab Report Generator (PWA)",
            duration: "May 24 - Jun 24",
            description:
              "A full-stack Progressive Web Application automating LaTeX report generation, dramatically reducing report creation time from days to minutes. Built this scalable solution using NextJS, Flask, and TailwindCSS with LaTeX integration. Implemented responsive design with Framer Motion animations, achieving better user experience.",
            href: "https://github.com/krishnachandran-u/autorecord"
          },
          {
            title: "SafeSurf – Chrome Extension for Web Safety",
            duration: "Apr 24 - May 24",
            description:
              "A Chrome extension with intelligent content filtering for child safety and parental controls, effectively blocking inappropriate content using regex matching and visualizations. Implemented client-side with Manifest V3 compliance, providing safe browsing environment for families.",
            href: "https://github.com/krishnachandran-u/safesurf"
          },
          {
            title: "ByteLearn Bot – Personalized Telegram Learning Assistant",
            duration: "Mar 24 - Apr 24",
            description:
              "A Telegram bot that delivers AI-generated, bite-sized lessons based on custom topics. Utilizes Firebase, Gemini API, and Firestore. Handles async delivery, session storage, and progress tracking. Focused on microlearning and user retention.",
            href: "https://github.com/krishnachandran-u/byte-learn-bot"
          },
          {
            title: "Real-time Chat App with Websockets",
            duration: "Mar 24 - Mar 24",
            description:
              // "A  real-time chat application using Websockets with a NextJS frontend and Go backend. No database used—emphasized live communication and memory-safe concurrency.",
              "A small chat app using WebSockets. Nothing interesting; I was just playing around with Go.",
            href: "https://github.com/krishnachandran-u/chatapp-nextjs-go"
          },
          {
            title: "Textrade – College Essentials Marketplace (PWA)",
            duration: "Nov 23 - Nov 23",
            description:
              "A peer-to-peer marketplace PWA facilitating student trades, significantly reducing academic material costs for registered users. A full-stack solution using NextJS, Supabase, and Prisma ORM with secure transaction processing and user verification.",
            href: "https://github.com/krishnachandran-u/textrade"
          },
          {
            title: "Codeforces Scraper – Submission Organizer",
            duration: "Oct 23 - Oct 23",
            description:
              "A Python-based scraper to download and organize Codeforces submissions locally. Useful for offline learning, analytics, and code review. Utilizes BeautifulSoup",
            href: "https://github.com/krishnachandran-u/cf-scraper"
          },
        ]
      },
      achievements: {
        title: "Milestones, leadership, and fun stuff along the way",
        items: [
          "Winner - Allianz Tech Championship 2025 - Designed women’s safety product “Alert Her”",
          "Codeforces Pupil (1200+ rating) — Solved 700+ problems — Authored 25+ contest problems",
          "GATE CS 2025 AIR 1655",
          "Led workshops on Git, C Programming, and Go for 100+ students at Tinkerhub CET, IET CET, and Drishti CET",
          "Active tech blogger on Medium",
          "25+ stars earned on GitHub — Over 1700 commits on GitHub"
        ]
      },
      connect: {
        title: "Let's Get in Touch!",
        items: [
          {
            text: "Email",
            href: "mailto:krishnachandran.u@outlook.com"
          },
          {
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/krishnachandran-u"
          },
          {
            text: "GitHub",
            href: "https://github.com/krishnachandran-u"
          },
        ]
      }
    }
  };
  