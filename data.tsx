import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Mail,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/marinaoreskovic",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/marinaoreskovic/",
  },
  // {
  //     id: 2,
  //     logo: <Calendly size={30} strokeWidth={1} />,
  //     src: "#!",
  // },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  // {
  //     id: 4,
  //     title: "Target",
  //     icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
  //     link: "/portfolio",
  // },
  {
    id: 5,
    title: "Contáctame",
    icon: <Mail size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Full Stack Developer",
    subtitle: "Addalitica",
    description:
      "Trabajo en un equipo multidisciplinario para clientes del sector financiero como NBCH, Finning y Credicomer. Mi rol es el desarrollo de nuevas funcionalidades, migraciones y la resolución de problemas técnicos en sus plataformas de Solicitude de créditos. Me involucro tanto en la parte Front-end como en el Back-end.",
    date: "2024",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    subtitle: "Galileo Financial Technologies",
    description:
      "Trabajé en equipos multidisciplinarios para clientes del sector financiero como Bibank Ecuador, HSBC Uruguay y Diners. Mi rol fue el desarrollo de nuevas funcionalidades y la resolución de problemas técnicos en sus plataformas de Home Banking. Me involucré tanto en la parte Front-end, utilizando tecnologías como React y Java - Spring Boot",
    date: "2021",
  },
  {
    id: 3,
    title: "Desarrollo Web",
    subtitle: "Coderhouse",
    description:
      "HTML | CSS | Bootstrap | Javascript | Git | React.js | Redux | React Native | Base de Datos | Firebase | Product Manager | Metodologías ágiles",
    date: "2021",
  },
  {
    id: 4,
    title: "Desarrollo Full Stack con Java",
    subtitle: "Codo a Codo 4.0 - Ministerio de Educación, CABA",
    description:
      "HTML | CSS | Bootstrap | Javascript | Git | Scrum | Arquitectura | Base de Datos | Vue.js | Java | Ajax | Spring",
    date: "2021",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 4,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  // {
  //     id: 1,
  //     endCounter: 20,
  //     text: "Certificaciones",
  //     lineRight: false,
  //     lineRightMobile: false,
  // },
  // {
  //     id: 1,
  //     endCounter: 2,
  //     text: "Proyectos finalizados",
  //     lineRight: true,
  //     lineRightMobile: false,
  // },
  // {
  //     id: 1,
  //     endCounter: 80,
  //     text: "Clientes satisfechos",
  //     lineRight: true,
  //     lineRightMobile: false,
  // },
];

export const serviceData = [
  /*{
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },*/
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  /*{
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },*/
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
