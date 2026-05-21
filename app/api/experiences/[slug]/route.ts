import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export type ExperienceState = {
  slug: string;
  title: string;
  company: string;
  company_url?: string;
  locations_url?: string;
  location: string;
  period: string;
  description: string;
  current_period?: string;
  type: string;
  responsibilities?: string[];
  technologies?: string[];
};
const experiences: ExperienceState[] = [
  {
    title: 'Fullstack Developer',
    slug: 'fullstack-developer-kacamatamoo',
    company: 'IDStar - Placement at Kacamatamoo',
    company_url: 'https://idstar.co.id',
    locations_url: '',
    location: 'Indonesia',
    period: 'Des 2025 - Juni 2026',
    description:
      'Developing an AI-powered Content Management System (CMS) for Kacamatamoo, integrated with the Odoo ERP system to synchronize eyewear inventory data including frames, lenses, and store information. The CMS includes a configurable AI recommendation engine with editable matrices for face shape, skin tone frame color, and measurement parameters, as well as a dedicated store account management module.',
    type: 'Contract',
    current_period: '6 Months',
    responsibilities: [
      "Integrating the CMS with Odoo (Kacamatamoo's ERP) to fetch and synchronize eyewear data, including frame and lens stock, available items, and store listings in real time.",
      'Building a read and update interface for the AI recommendation matrices, including face shape mapping, skin tone-to-frame color matching, and measurement parameters such as min/max rim size, hinge size, and offset ranges.',
      'Developing a priority management system within the face shape and skin tone frame color matrices, allowing admins to adjust recommendation priorities based on product or user profile attributes.',
      'Implementing measurement matrix configuration that enables admins to define and update numerical recommendation thresholds such as minimum and maximum values for rim size, hinge size, and offset.',
      'Building a store account management module that allows administrators to create, view, and update store accounts, including role and access configuration per store.',
      'Designing a clean and intuitive CMS interface that is responsive across devices, making it easy for non-technical admins to manage product data, recommendation settings, and store configurations.',
    ],
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Go (Gin)',
      'PostgreSQL',
      'REST API',
      'Odoo API',
      'AWS',
    ],
  },
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer-fakta',
    company: 'Fakta.com',
    company_url: 'https://fakta.com/footer/about-us',
    locations_url: 'https://maps.app.goo.gl/nzG3GDhcpov98Qex8',
    location: 'South Jakarta, Pancoran, DKI Jakarta, Indonesia',
    period: 'Jan 2025 - Aug 2025',
    description:
      'Developing a modern and user-friendly Content Management System (CMS) for the news platform Informasi, designed to be responsive and intuitive across devices. The system supports efficient management of news, media, advertisements, and user-generated content (UGC), incorporating Role-Based Access Control (RBAC), moderation and approval workflows, and interactive analytics and reporting tools. The entire development followed Agile methodology with iterative sprints to ensure alignment with user and stakeholder needs.',
    type: 'Freelance',
    current_period: '8 Months',
    responsibilities: [
      'Designing a modern, intuitive and responsive CMS interface to make it easy to manage news content, media, users and system settings. The interface is also customized to support various devices and screen resolutions.',
      'Building a news CMS  that presents the latest information with a clear navigation system, neat news category structure, and flexible and scalable backend integration.',
      'Building a news and user-generated content (UGC) management system, including moderation features, publication statuses, and approval flows that enable more structured and secure content management.',
      'Provides a media management dashboard to manage assets such as images, videos, music, and movies with upload features, organizing in folders, and fast search to support content needs.',
      'Building an ad management system that allows for the placement and management of ads across multiple sites, complete with time-of-view settings and performance reporting.',
      'Implement Role-Based Access Control (RBAC) so that each user has access according to their role, such  as user, admin, super admin, editor, or writer to ensure the security and regularity of system operations.',
      'Developing analytical features for media banks covering videos, images, music and movies, with presentation of data such as number of uploads etc. and user interactions in easy-to-understand  graphs and reports.',
      'The entire development process is carried out using Agile methods, with short iterations through sprints, regular evaluations, and rapid adaptation based on user and stakeholder input.',
    ],
    technologies: ['React', 'Next.js', 'Tailwind Css', 'Hero UI'],
  },
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer-sarimurni',
    company: 'PT. Sarimurni',
    company_url: 'https://sarimurni.co.id/id/tentang-kami',
    location: 'South Jakarta, DKI Jakarta, Indonesia',
    locations_url: 'https://maps.app.goo.gl/oSvgibycZ2hani136',
    period: 'Oct 2024 - Oct 2025',
    current_period: '1 Year',
    description:
      'Developed a Learning Management System (LMS) web application for Sarimurni Group to support internal employee training and development in a centralized and digital environment. The project focused on delivering an intuitive and responsive user interface, seamless frontend-backend integration, and secure access control through Role-Based Access Control (RBAC). In addition to developing the CMS interface and implementing authentication flows, I also collaborated closely with the backend team ',
    type: 'Internship',
    responsibilities: [
      'Developed the frontend of a Learning Management System (LMS) web application for internal use at Sarimurni Group, aimed at supporting employee training and development digitally and centrally.',
      'Designed and implemented a responsive, user-friendly UI/UX tailored to the internal users’ needs and aligned with Sarimurni Group’s visual identity.',
      'Integrated frontend components with backend APIs to ensure smooth and dynamic data communication between the client and server.',
      'Set up and implemented a secure authentication flow within the LMS frontend to manage user login and session handling effectively.',
      'Focused on building and optimizing the CMS interface for admins and specific users to manage content, users, and system configurations with ease.',
      'Applied Role-Based Access Control (RBAC) to restrict and manage feature access based on user roles, ensuring data security and structured access control.',
      'Collaborated closely with the backend development team to align technical implementations and resolve integration issues.',
    ],
    technologies: ['React', 'Next.js', 'Tailwind Css', 'Shadcn UI'],
  },
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer-gits',
    company: 'PT. GITS Indonesia',
    company_url: 'https://gits.id/about/',
    location: 'Summarecon, Bandung, West Java, Indonesia',
    locations_url: 'https://maps.app.goo.gl/dXMWwzE4kYPj4UG37',
    current_period: '5 months',
    period: 'Aug 2023 - Des 2023',
    description:
      'Completed an internship as a Frontend Software Engineer at GITS, contributing to the development of an e-Procurement web application. Participated in a full training program to build and enhance frontend development skills, learning technologies such as Vue.js and Nuxt.js. Worked closely with a cross-functional team within an Agile Scrum environment, focusing on creating responsive and easy-to-use user interfaces while collaborating effectively with designers and backend developers.',
    type: 'Internship',
    responsibilities: [
      'Developed the frontend of the e-Procurement web application using Vue.js and Nuxt.js according to design and functional requirements.',
      'Participated in an intensive training program to enhance frontend technical skills and understanding of the frameworks used.',
      'Integrated frontend components with backend APIs to ensure dynamic data display and management.',
      'Followed Agile Scrum development methodology, actively contributing in sprints, daily stand-ups, and retrospectives.',
      'Performed frontend debugging and testing to ensure good user experience and minimize bugs.',
      'Collaborated with team members, including backend developers and product managers, to resolve technical issues and align product needs.',
      'Assisted and shared knowledge with fellow interns or junior developers during the learning and development process.',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Morpheme UI', 'Tailwind CSS'],
  },
  {
    title: 'Frontend Web Developer',
    slug: 'frontend-web-developer-skilvul',
    company: 'Skilvul',
    company_url: 'https://skilvul.com/about/',
    location: 'Jakarta South, DKI Jakarta, Indonesia',
    locations_url: 'https://maps.app.goo.gl/k9ofi6CEibuH8ccG9',
    period: 'Feb 2023 - Juli 2023',
    current_period: '5 months',
    description:
      'Completed an internship where I was actively involved in the entire product development cycle—from initial design discussions to full implementation. During the internship, I helped develop a web-based book reading application that integrates a large and dynamic collection of books from a centralized database. This project allowed me to deepen my understanding of user interface design, API integration, and the importance of delivering a smooth and accessible reading experience.',

    type: 'Internship',
    responsibilities: [
      'Collaborated with the team in both frontend and backend development processes',
      'Participated in UI/UX design discussions and implementation',
      'Helped integrate book data into a web-based reading platform',
      'Learned and applied full-stack development best practices',
    ],
    technologies: ['React', 'Bootstrap', 'Redux'],
  },
];

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = experiences.find((item) => item.slug === slug);

  if (!exp) {
    return NextResponse.json({ message: 'Experience not found' }, { status: 404 });
  }

  return NextResponse.json(exp);
}
