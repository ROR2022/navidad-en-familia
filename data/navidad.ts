export type CastMember = {
  name: string
  role: string
  description: string
  photo: string
}

export type Episode = {
  season: number
  number: number
  title: string
  duration: string
  description: string
  details: string
  date?: string
  image: string
}

export type MemoryEpisode = Episode

export type FamilyMessage = {
  recipient: string
  message: string
  photo: string
}

export type Recommendation = {
  title: string
  description: string
  image: string
}

export const navidad = {
  title: 'NAVIDAD EN FAMILIA',
  title1: 'NAVIDAD EN',
  title2: 'FAMILIA',
  tagline: 'La historia más bonita se celebra juntos.',
  synopsis:
    'Una colección de tradiciones, risas y recuerdos para volver a encontrarnos en la escena más esperada del año.',
  introText:
    'Una colección de tradiciones, risas y recuerdos para volver a encontrarnos en la escena más esperada del año.',
  countdownDate: '2026-12-25T00:00:00-06:00',
  badges: ['Original', '100% para nuestra familia', '1 temporada', 'HD'],
  heroImage: '/family11.jpg',
  familyMembers: [
    {
      name: 'Nuestra familia',
      role: 'Elenco principal',
      description: 'Las personas que convierten cualquier reunión en hogar.',
      photo: '/family02.jpg',
    },
    {
      name: 'Las risas',
      role: 'Invitadas especiales',
      description: 'Siempre aparecen, incluso cuando nadie las esperaba.',
      photo: '/family03.jpg',
    },
    {
      name: 'Las tradiciones',
      role: 'Protagonistas de cada año',
      description: 'El hilo que une nuestras Navidades pasadas y futuras.',
      photo: '/family04.jpg',
    },
    {
      name: 'Los recuerdos',
      role: 'Narradores oficiales',
      description: 'Guardan las escenas que nos gusta volver a contar.',
      photo: '/family05.jpg',
    },
  ] satisfies CastMember[],
  episodes: [
    {
      season: 1,
      number: 1,
      title: 'Las tradiciones que nos unen',
      duration: '00:05:12',
      description: 'Hay cosas que cambian con los años y otras que esperamos repetir siempre.',
      details:
        'Desde preparar la casa hasta elegir el lugar en la mesa, cada pequeño ritual tiene una historia y una persona que lo mantiene vivo.',
      date: 'Cada diciembre',
      image: '/family13.jpg',
    },
    {
      season: 1,
      number: 2,
      title: 'Cenas, risas y sobremesas',
      duration: '00:06:08',
      description: 'La mejor parte de la noche comienza cuando todos se quedan un rato más.',
      details:
        'Entre platos, brindis y conversaciones que se alargan, descubrimos que una mesa compartida también puede ser una forma de decir te quiero.',
      date: 'Una noche para recordar',
      image: '/family07.jpg',
    },
    {
      season: 1,
      number: 3,
      title: 'Las anécdotas que nunca olvidamos',
      duration: '00:05:36',
      description: 'Algunas historias se cuentan tantas veces que ya son parte del menú.',
      details:
        'Nuestros momentos más divertidos no necesitan un guion perfecto: basta con que alguien diga “¿se acuerdan cuando...?” para que todos vuelvan a reír.',
      date: 'Historias de todos los años',
      image: '/family08.jpg',
    },
    {
      season: 1,
      number: 4,
      title: 'Los recuerdos que llevamos',
      duration: '00:04:49',
      description: 'Cada fotografía guarda una versión de nosotros que sigue presente.',
      details:
        'Mirar atrás no es quedarse en el pasado; es reconocer todo lo que hemos construido y agradecer que seguimos escribiendo capítulos juntos.',
      date: 'Una colección de momentos',
      image: '/family09.jpg',
    },
    {
      season: 1,
      number: 5,
      title: 'Una nueva Navidad juntos',
      duration: '00:03:57',
      description: 'El próximo capítulo todavía no está escrito, pero ya sabemos con quién queremos vivirlo.',
      details:
        'Que esta Navidad sea una pausa para celebrar lo que somos y una promesa sencilla: volver a encontrarnos, reírnos y cuidarnos.',
      date: 'Próximamente',
      image: '/family10.jpg',
    },
  ] satisfies Episode[],
  recommendations: [
    {
      title: 'Una mesa para todos',
      description: 'Donde cada lugar guarda una historia.',
      image: '/family06.jpg',
    },
    {
      title: 'Risas de temporada',
      description: 'La tradición que nunca pasa de moda.',
      image: '/family12.jpg',
    },
    {
      title: 'El próximo reencuentro',
      description: 'Próximamente, en todos nuestros días.',
      image: '/family04.jpg',
    },
  ] satisfies Recommendation[],
  messages: [
    {
      recipient: 'Para quienes siempre están',
      message: 'Gracias por hacer que volver a casa se sienta como la mejor tradición de todas.',
      photo: '/family11.jpg',
    },
    {
      recipient: 'Para quienes nos hacen reír',
      message: 'Que nunca falten las ocurrencias, las historias y esa alegría que contagia a todos.',
      photo: '/family12.jpg',
    },
    {
      recipient: 'Para toda la familia',
      message: 'Que el próximo año nos encuentre con salud, abrazos pendientes y muchos motivos para celebrar.',
      photo: '/family13.jpg',
    },
  ] satisfies FamilyMessage[],
  finalLetter:
    'No importa cuántas Navidades pasen: mientras sigamos encontrándonos, riendo y compartiendo, esta siempre será nuestra historia favorita. Gracias por ser el lugar al que todos queremos volver.',
  signature: 'Con todo nuestro cariño',
  contact: {
    whatsappNumber: '5217777937484',
  },
  music: {
    src: '/music/navidad.mp3',
    enabled: true,
    volume: 0.3,
  },
} as const

export type EpisodeItem = (typeof navidad.episodes)[number]
