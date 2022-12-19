export default {
  global: {
    componenteFormativo: 'Venta de servicios y productos para eventos',
    descripcionCurso:
      'La acción de vender productos y/o servicios por parte de las compañías al mercado requiere del conocimiento y aplicación de técnicas y modelos, de estudiar, entender y desarrollar los procesos y el desarrollo de habilidades, con el fin de generar una negociación efectiva y un servicio posventa que les permita generar a las empresas alianzas efectivas con sus clientes. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Negociación y fidelización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas y modelos de negociación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de fidelización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Solución de conflictos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Habilidades de comunicación, reacciones emocionales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Momentos de verdad',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Aplicar la escucha activa',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Proceso y técnicas de ventas',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo:
              'Aplicar herramientas de ventas y <em>Customer Relationship Management</em>',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contrato de eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas de ventas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contrato con el cliente',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El servicio posventa',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Objeciones ',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Etiqueta y protocolo en eventos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Acuerdos comerciales',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Contratos',
      referencia:
        'Garnica de la Espriella, L (2012). Cómo hacer contratos con tus clientes y proveedores cámara de comercio de Bogotá, <em>Bogotá Emprende</em>.',
      tipo: 'artículo, Manual',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14074/Herramienta.pdf?sequence=2&isAllowed=y',
    },
    {
      tema: 'Proceso de venta',
      referencia:
        'Aguilar, A. (2020). <em>Kotler capítulo 16</em> (16.7) <em>Cuál es el PROCESO DE VENTAS ideal para nuestra EMPRESA</em> [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KCqK-XAeEbY',
    },
    {
      tema: 'ventas y tipos de ventas',
      referencia:
        'HubSpot Español (2021). <em>¿Qué son las ventas? Conceptos clave y tipos de ventas</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UiQTJizk3LI',
    },
    {
      tema: 'VENTAS',
      referencia:
        'Enfoque en ventas. (2022). <em>Cómo diseñar una estrategia de ventas</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iHobPx1UgLY',
    },
    {
      tema: 'VENTAS',
      referencia:
        'Klaric, J. (2016). <em>Vender es fácil. Técnicas de ventas con Jürgen Klaric</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iQiQ5Sx2gKM',
    },
    {
      tema: 'VENTAS',
      referencia:
        'AppleFrancy. (2017). <em>Seminario de Ventas | 01 Introducción a las Ventas</em>.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=x3-OBU-TR1g&list=PLCR_kWW501Z0Zvjeq-cgBiMOFzA_m9Q6A',
    },
    {
      tema: 'RELACIONES',
      referencia:
        'Esco E-Universitas (s.f.) Comunicación Emocional: <em>4 claves para mejorar tu relación</em>. Escuela Internacional de Neurociencia Empresarial.',
      tipo: 'Página web',
      link: 'https://www.escoeuniversitas.com/comunicacion-emocional-4-claves/',
    },
  ],
  glosario: [
    {
      termino: '<em>Emailing</em>',
      significado:
        'estrategia por medio de la cual se envía un correo electrónico masivo a una base de datos de clientes potenciales.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'en el área de Mercadotecnia o <em>Marketing</em>, como <em>engagement</em> se denomina el nivel de fidelidad, compromiso y vínculo que un determinado usuario mantiene hacia una marca. Como tal, este puede medirse considerando el nivel de identificación y conexión emocional que los usuarios tienen con la marca, así como en el hecho de que estos la recomienden y defiendan ante otros usuarios. En este sentido, el objetivo de toda marca es lograr un buen <em>engagement</em>, pues esto le garantiza éxito en el mercado. Significados.com (2022). Definición de <em>engagement</em>. <a href="https://www.significados.com/engagement/" target="_blank">https://www.significados.com/engagement/</a>',
    },
    {
      termino: 'CRM',
      significado:
        'es una sigla de la lengua inglesa que alude a la expresión <em>customer relationship management</em> (la cual se puede traducir como “administración de las relaciones con los clientes”). Este concepto puede referirse a un modelo de gestión que se orienta a la satisfacción de los clientes, o a un software que se emplea para gestionar los vínculos con ellos (Pérez y Gardey, 2018).',
    },
    {
      termino: 'Intranet',
      significado:
        'la idea de intranet se emplea en el terreno de la informática para aludir a la red interna de una organización. Este tipo de infraestructura se utiliza para compartir datos y recursos en el seno de una empresa o una institución. (Pérez y Merino, 2020).',
    },
    {
      termino: '<em>Moment of truth</em>',
      significado:
        'conocidos también como momentos de la verdad, comprenden todas las ocasiones en las que el cliente entra en contacto con la organización y se forma una opinión sobre la calidad de esta. (Da Silva, 2021).  <a href="https://www.zendesk.com.mx/blog/momentos-de-verdad-servicio-al-cliente/" target="_blank">https://www.zendesk.com.mx/blog/momentos-de-verdad-servicio-al-cliente/</a>',
    },
    {
      termino: 'NIT',
      significado:
        'en Colombia la sigla se refiere al Número de Identificación Tributaria para las empresas.',
    },
    {
      termino: 'Posventa',
      significado:
        'acciones que se realizan por parte de una empresa después o posteriormente a la realización de una compra.',
    },
    {
      termino: 'Prospecto',
      significado:
        'en el ámbito del <em>marketing</em>, se conoce como prospecto al potencial cliente o consumidor. (Pérez y Gardey, 2018).',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'palabra que proviene del idioma inglés, pero que gracias a la masificación de uso, ha sido aceptada por la Real Academia Española. Según la RAE, el <em>software</em> es un conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar distintas tareas en una computadora. Definición de <em>software</em> (<a href="https://definicion.de/software/" target="_blank">https://definicion.de/software/</a>).',
    },
    {
      termino: 'WhatsApp',
      significado:
        'nombre de una aplicación que permite enviar y recibir mensajes instantáneos a través de un teléfono móvil (celular). El servicio no solo posibilita el intercambio de textos, sino también de audios, videos y fotografías, además de la realización de llamadas. (Pérez y Gardey, 2018).',
    },
  ],
  referencias: [
    {
      referencia:
        'Artal, M. (2017) <em>Dirección De Ventas</em>. Ed. España: España.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/direccion-de-ventas-15-ed?location=1',
    },
    {
      referencia:
        'Prieto Herrera, J. E. (2021) <em>Gerencia De Ventas: Sea Un Animador De Sus Vendedores</em>. (Tercera Edición). Ed. Bogotá: Ecoe Ediciones.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=AMJuEAAAQBAJ&oi=fnd&pg=PA3&dq=libros+de+ventas&ots=RViX-BfdiH&sig=gkAB1OeyEiW915EOQXY9AVIqQuI#v=onepage&q=libros%20de%20ventas&f=false',
    },
    {
      referencia:
        'Kotler, P., Armstrong, G., Araujo, L. A., & Ayala, L. E. P. (2017). <em>Fundamentos de Marketing</em>. Ed. México, DF: Pearson.',
      link: '',
    },
    {
      referencia:
        'Pineda Ayala, L., Armstrong, G., Kotler, P., & Amador Araujo, L traductor. (2017). Marketing (16a. ed.). Pearson Educación.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
