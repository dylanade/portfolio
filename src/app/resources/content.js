import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Dylan",
  lastName: "Govender",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer / Data / Research Scientist",
  avatar: "/images/avatar.jpg",
  email: "govdyla@gmail.com",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about science, technology, and share thoughts on the
      intersection of data and innovation.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dylanade/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dyla/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between data and innovation</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project:{" "}
        <strong className="ml-4">
          Vision Transformers for Lung Cancer Detection
        </strong>
      </>
    ),
    href: "/work/lung_cancer_detection",
  },
  subline: (
    <>
      I'm Dylan, a computer science student at the University of KwaZulu-Natal,
      with a research focus on the intersection of Artificial Intelligence and
      Quantum Computing. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/abq7RmKjMgNFE7KX8",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dylan is a scientist with a passion for solving complex human-centred
        problems through simple, impactful solutions. He works at the
        intersection of intelligent systems, data-driven solutions, and emerging
        technologies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of KwaZulu-Natal",
        timeframe: "July 2024 - Nov. 2024",
        role: "Supplemental Instruction Leader",
        achievements: [
          <>
            Designed SI sessions using collaborative and active learning
            techniques to guide students through complex computer programming
            concepts, assisting over 30 students in improving their academic
            performance by 10%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of KwaZulu-Natal (BSc)",
        description: (
          <>
            Studied from 2021 to 2023. Graduated with a Bachelor of Science in
            Computer Science and Information Technology (Cum Laude). Double
            majored in Computer Science.
          </>
        ),
      },
      {
        name: "University of KwaZulu-Natal (BSc Hons)",
        description: (
          <>
            Studied throughout 2024. Graduated with a Bachelor of Science
            Honours in Computer Science (Cum Laude). Studies included Artificial
            Intelligence and Quantum Computing.
          </>
        ),
      },
      {
        name: "University of KwaZulu-Natal (MSc)",
        description: (
          <>
            Pursuing a Master of Science in Computer Science in 2025, with a
            research focus on the intersection of Artificial Intelligence and
            Quantum Computing.
          </>
        ),
      },
      {
        name: "ALX Africa (Data Scientist)",
        description: (
          <>
            Pursuing the Data Science programme offered by ALX Africa in 2025.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Building next gen intelligent systems with Python.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about science and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects and research by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
