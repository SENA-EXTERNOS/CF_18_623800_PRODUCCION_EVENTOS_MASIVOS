<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Negociación y fidelización 

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen') 

      .col-lg-8
        p(data-aos="fade-down").mt-3 Cuando se piensa en negociar en el contexto empresarial, inmediatamente se asocia a intercambio, a una relación, a un canje, a un trueque, etc. Por ello, la negociación es considerada la base del mercadeo, sin ella no existirían las ventas o las estrategias, la promoción y publicidad y todos estos conceptos. Se puede definir la negociación como el proceso en donde dos partes se interesan en llegar a un acuerdo sobre algo de interés para ambas.

        .bloque-texto-b.color-secundario.p-4.mt-3 
          .bloque-texto-b__texto
            p Para poder negociar, se deben considerar algunos aspectos básicos y fundamentales.
      
    .row.mt-5
      p #[b Estos aspectos son:]

    .row.justify-content-around.align-items-center.mt-3
      .col-10
        .row.justify-content-around.align-items-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-contenido.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure(data-aos="zoom-in-left")
                    img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')

              p.text-small.text-center Deben existir mínimo dos partes interesadas en realizar la negociación.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-contenido.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure(data-aos="zoom-in-left")
                    img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')

              p.text-small.text-center Cada parte debe tener algo que le interesa a la otra parte.

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure(data-aos="zoom-in-left")
                    img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')

              p.text-small.text-center Las dos partes deben estar dispuestos a llegar a acuerdos en un modelo de ‘gana - gana’.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.bloque-texto-g__img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4.bloque-texto-g__texto2
        p.mb-0 Desde el punto de vista de los negocios, el punto más alto de las relaciones entre empresa y cliente es la fidelización. Esta es a donde todos quieren llegar, pues, como su palabra lo indica, logra que aquellos clientes de la empresa sean fieles con las marcas que se les proponen y las prefieran por encima de la competencia. Sin embargo, no es tan fácil fidelizar, y hoy en día es aún más difícil debido a la cantidad de competidores y de propuestas que existen en el mercado.
          br
          br
          | La relación de estas dos palabras es consecuente y definitiva para una compañía y los productos o servicios que pone a disposición en el mercado, pues primero es necesario negociar desde todos los puntos de vista; pero allí no termina, ese es solo el punto de partida para lograr la fidelización deseada por las empresas.

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Técnicas y modelos de negociación

    .row.justify-content-around.align-items-center
      .col-lg-4
        .bloque-texto-z.color-primario.p-4     
            .bloque-texto-z__texto
              p Cuando las empresas nacen en los mercados, al comienzo no se percatan de que llegarán a este punto en el cual deben concentrarse en pensar cómo negociar. No se trata solo de ir a donde otra empresa o persona y establecer unos criterios, también se trata de los productos con presencia en los mercados, los cuales se están negociando y cuentan con una estrategia de #[em marketing-mix] dirigida a los posibles clientes y/o usuarios.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen') 

      .col-lg-4
        p(data-aos="fade-down").mt-3 La empresa debe encontrar un equilibrio entre los productos y los clientes para así comenzar a negociar de manera pasiva o activa; el resultado de este equilibrio serán las ventas y la participación en el mercado. Aplicando técnicas se logrará más efectividad en los tiempos, se enfocará mejor en los beneficios de la empresa, en mejorar las ventas y crear lazos más fuertes entre la empresa y los clientes, como una base fundamental para la fidelización. 

    .row.justify-content-around.align-items-center
      .col-10
        .row.justify-content-around.align-items-center.mt-5.background1-tema-1
          .col-lg-2.col-xs-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='Texto que describa la imagen').img-25-porciento
          .col-10
            p.mt-3 Las técnicas de negociación son herramientas con las que cuentan una empresa y sus colaboradores, por medio de las cuales pueden llegar a acuerdos con los clientes, proveedores u otros actores para desarrollar su ejercicio empresarial en un mercado. No se trata de imponer mis condiciones, se trata de tener una relación de ganancia para ambas partes.
            
    .row.mt-5
      p #[b Existen varias técnicas de negociación]  

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-9.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Acomodativa")
            h4 Acomodativa
            p Es una estrategia en donde una de las partes acepta los términos de la otra parte, con el propósito de establecer una relación comercial que será duradera. No se persiguen resultados en el corto plazo por la parte que cede, pero esto será de manera temporal, algo así como ‘perder para ganar’.

          .tarjeta.clr-paleYellow.p-4(titulo="Competitiva")
            h4 Competitiva
            p El objetivo de esta técnica es vender una sola vez, tratar de ganar ahora sin pensar en el mediano ni en el largo plazo. Es muy utilizada cuando se sabe que se va a vender una sola vez y el objetivo de una de las partes es ganar, así la otra parte pierda.  

          .tarjeta.clr-paleYellow.p-4(titulo="Evitativa")
            h4 Evitativa
            p Cuando una de las partes sabe que va a perder porque sabe con anticipación que no puede negociar, decide entonces evitar la negociación con el lema “es mejor perder que ganar”, por lo tanto, posterga la negociación. Es frecuente en negociaciones que se realizan en caliente. 

          .tarjeta.clr-paleYellow.p-4(titulo="Distributiva")
            h4 Distributiva
            p Aquí ambas partes saben qué ganan y qué pierden tanto ellos como la contraparte, entonces deciden ceder en algunos temas y ganar en otros. Esta interacción depende de los objetivos trazados por una parte, para ganar en algunos asuntos y perder en los que no sean de su interés. Aquí no hay una relación estable, es más una relación de trueque de acuerdo con el interés de ambas partes. 
            
          .tarjeta.clr-paleYellow.p-4(titulo="Colaborativa")
            h4 Colaborativa
            p Al contrario de la anterior, en esta negociación ambas partes ganan, ya que ceden en sus condiciones, pensando siempre en un acuerdo abierto entre las partes; es decir, se liberan las necesidades y se llega a un acuerdo en donde ambas partes queden satisfechas: es la relación ‘ganar - ganar’. Esta técnica está fundamentada en la confianza, la colaboración y el respeto por la otra parte.

          .tarjeta.clr-paleYellow.p-4(titulo="Por compromiso")
            h4 Por compromiso
            p Se basa en la confianza entre las partes, en donde se pacta un beneficio común y se comprometen a ganar o perder ambas partes. 

      .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt", style="width:450px;").m-auto

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 Técnicas de fidelización    

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen') 

      .col-lg-10
        .bloque-texto-y.color-secundario.p-4.mt-3 
          .bloque-texto-y__texto
            p Como se indicaba al comienzo del capítulo, fidelizar un cliente es el punto máximo de cualquier actividad comercial, pues significa que preferiría esa marca por encima de las otras de manera voluntaria. Sin embargo no es sensato confiarse, pues también es muy sencillo perder clientes cuando la competencia está haciendo su trabajo. Por ello, se hace indispensable aplicar técnicas para poder mantener a ese cliente cerca y lograr fidelizarlo.

    .row.mt-5
      p #[b Para ello se debe pensar en:]


    .row.justify-content-center.mb-5
      .col-lg-9.position-relative.mt-5
        .avatar
          figure(data-aos="zoom-in-left")
            img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100
            .col
              h5 La propuesta de valor 
              p Esto es apostarle a unos excelentes productos y servicios, que en verdad logren satisfacer las necesidades y deseos de los prospectos; es decir, estar alineado para poder ofrecer soluciones. 

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt").img100
            .col
              h5 Desarrollar el #[i engagement] de cada cliente 
              p Una vez se define al cliente, se debe procurar que se mantenga conectado a la marca, con el fin de que recuerde la necesidad que tiene frente al producto ofrecido. 

        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt").img100
            .col
              h5 Ponerse en los zapatos del cliente
              p Esto se hace para conocerlo bien, estudiarlo, estar en contacto permanente con sus requerimientos y dejarlo opinar sobre los productos o servicios, con el fin de ir desarrollando mejoras que le permitan ser fiel a la marca.

    .row.mt-5
      p Ahora se explicarán algunas técnicas para fidelizar clientes.

      p #[b Dentro de las técnicas de negociación tenemos:]

    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure(data-aos="zoom-in-left")
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3.text-white(x="23.6%" y="75%" numero="1")
        .h5.mb-2 Escuchar a los clientes
        p Esto tiene que ver con el servicio al cliente, en todo momento todo el personal debe estar dispuesto a dar el 100% en servicio ofreciendo, preguntando, asesorando y resolviendo cualquier inconveniente o duda que tenga de los productos o servicios ofrecidos.
    
      .tarjeta.color-acento-botones.p-3.text-white(x="36.6%" y="35%" numero="2")
        .h5.mb-2 Crear un programa de fidelización
        p Se trata de abrir este canal a los clientes y no solo para ventas sino para que el cliente encuentre soluciones y oportunidades. Es una buena manera de establecer un contacto permanente con su autorización.

      .tarjeta.color-acento-botones.p-3.text-white(x="49.6%" y="75%" numero="3")
        .h5.mb-2 Automatizar procesos
        p Analizar cada uno de los procesos que tengan que ver con el cliente y mejorarlos y dar opciones para que se le atienda o que el mismo se autogestione y se agilice, para ello es importante crear un modelo de CRM (#[i Customer Relationship Management]) en donde se pueda alimentar con información relevante e importante del cliente para así conocerlo mejor y poder interactuar con él de manera efectiva.

      .tarjeta.color-acento-botones.p-3.text-white(x="62.6%" y="35%" numero="4")
        .h5.mb-2 Servicio postventa
        p La venta no termina en la caja registradora, allí comienza. Establecer mecanismos de servicio después de realizada la compra es fundamental para ganarse la fidelización del cliente, es hacerlo sentir importante es preocuparse por su necesidad y por el mismo.

      .tarjeta.color-acento-botones.p-3.text-white(x="75.6%" y="75%" numero="5")
        .h5.mb-2 Personalizar el cliente
        p Crear mecanismos de contacto, pero de manera personalizada, para hacerlo sentir bien y único.

      .tarjeta.color-acento-botones.p-3.text-white(x="88.6%" y="35%" numero="6")
        .h5.mb-2 Recompensas
        p Sacrificar también es ganar, dejar que el cliente sienta que ganó es primordial. Establecer promociones o mecanismos en donde cada cliente se sienta recompensado por su fidelidad.

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.3 Solución de conflictos

    .row.justify-content-around.align-items-center
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p(data-aos="fade-down") Un conflicto por definición es un desacuerdo entre dos o más partes que llevan a una pugna entre las mismas, cada una de las partes intenta mejorar sus propios intereses, y en algunos casos, puede tornarse en conflictos personales. Recuerde que la negociación es una actividad que se da entre seres humanos, por ello intervienen sus emociones, actitudes y aptitudes. En el caso de las ventas, la negociación es clave porque obedece a estrategias permanentes que se están desarrollando por los cuerpos de ventas y sus actores de manera diaria.


    .row.mt-5
      p #[b Existen dos tipos de conflictos:]

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-6
        .row.justify-content-around.align-items-center
          .hr-5.linea-hr
          .col-2
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen') 
          .col-10
            p(data-aos="fade-down").mt-3 #[b Conflictos intelectuales: ]

            p(data-aos="fade-down").mt-3 Tienen que ver con las discrepancias que se pueden presentar por opiniones, argumentaciones o ponencias y puntos de vista sobre temas en particular. 

        .row.justify-content-around.align-items-center
          .hr-5.linea-hr
          .col-2
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen') 
          .col-10
            p(data-aos="fade-down").mt-3 #[b Conflictos emocionales:]

            p(data-aos="fade-down").mt-3 Suceden cuando los aspectos emocionales de alguna o de las dos partes son positivos o negativos.


      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img19.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p Es importante identificar qué tipos de conflictos se están presentando en los negocios, para así poder transformarlos y tomar decisiones a tiempo, puesto que un problema entre cliente y empresa puede ocasionar la pérdida de clientes.

      p #[b Veamos un poco más sobre los conflictos: ]

    .tarjeta.tarjeta--azul.p-4.background-slide-tema1
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Como los conflictos tienden a ser cíclicos, es decir que las dos partes se buscan para mantener el conflicto activo, se pueden tomar medidas, como cambiar al vendedor por otro y hablar con el cliente para que no sienta que ‘ganó’, sino por el contrario, que está siendo ayudado para mejorar los procesos entre empresa y cliente, y que no se trata de algo personal. Así se evita que se dinamice el conflicto, evitando que repercuta en circunstancias negativas para ambas partes.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Es importante para el vendedor entender que no se trata de algo personal, pues muchas veces se espera que el cliente acepte todas las condiciones que la empresa dispone, algo que no siempre sucede y que hace necesario empatizar con el cliente. Además, se debe entender que al tratarse de una interacción humana, el entrar en conflicto es normal y se debe aceptar, no como algo negativo que se castigue, sino por el contrario, como algo de lo que aprender, para enfrentar, aceptar y mejorar el trato a los clientes.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En el caso de las empresas familiares que están dirigidas directamente por el propietario, se tiende a caer mucho en esta problemática, debido a que la persona no tiene cómo ni con quién entender el conflicto, ni cómo superarlo, y esto le puede causar la pérdida de contactos y clientes, perjudicando el crecimiento del negocio.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen')
   

    separador

    #t_1_4

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.4 Habilidades de comunicación, reacciones emocionales 

    .row.justify-content-around.align-items-center
      .col-10
        .row.justify-content-around.align-items-center.background1-tema-1
          .col-lg-2.col-xs-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img23.svg', alt='Texto que describa la imagen').img-45-porciento
          .col-10
            p.margen-text La habilidad es la capacidad de un individuo de realizar una acción con facilidad y de manera correcta, por ello, cada persona debe enfocarse en el desarrollo de sus diferentes habilidades. En el ámbito de las ventas, la comunicación es una habilidad muy importante e indispensable, pues de esta, sumada a otras que el vendedor tiene que desarrollar, depende la eficacia de las ventas. 


    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              
      
    separador

    #t_1_5

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.5 Momentos de verdad 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.svg')})`}"
      )
      .bloque-texto-g__texto.p-4.bloque-texto-g__texto
        p.mb-0 También conocidos como #[i moment of truth], aluden a aquellos espacios en donde el cliente tiene contacto con la empresa de cualquier manera. Son muy importantes para la empresa y es primordial identificarlos previamente, pues de ellos dependen muchas veces las decisiones del cliente. 
          br
          br
          | Es importante entender que estos momentos de verdad son establecidos entre personas, de acuerdo con los procesos empresariales. Sin embargo, la marca, los productos y la compañía se pueden ver afectados positiva o negativamente. Cuando nos referimos a las ventas, existen puntos claves en donde tanto el cliente como la empresa se cruzan.

    .row.mt-5
      p #[b A continuación, se describen algunos:]

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img25.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Primer contacto con el cliente") La primera impresión, la cual es muy importante pues a partir de esta se define la continuidad de la relación. Puede ser presencial, virtual o telefónica.

          p(numero="2" titulo="Primera reunión de ventas") Una vez superado el primer contacto, usualmente se realiza una reunión de ventas. Esta reunión es fundamental porque el cliente confirmará lo que sintió en el primer contacto, o sencillamente anulará todo el avance previo.

          p(numero="3" titulo="Cierre de la venta") Aquí el vendedor deberá mostrar un alto nivel de profesionalismo, debido a que, de aquí en adelante, tendrá una relación duradera con el cliente o sencillamente le venderá una sola vez y no tendrá más oportunidades.

          p(numero="4" titulo="Cobros") Pagar no siempre es un sentimiento agradable, por ello, el vendedor tendrá que estar pendiente de que todo salga bien, que se facture lo acordado y estar presente para recalcar los beneficios y llenar de confianza al cliente.

          p(numero="5" titulo="Seguimiento posventa") Es un momento muy importante porque representa la ampliación del producto y la empresa para el cliente. Aquí se debe transmitir ese respaldo, ya sea por obra del vendedor o por el área encargada. El vendedor tendrá que preguntar al cliente si todo está bien, si necesita algo y si le puede ayudar con algo, o la empresa deberá hacer dicho seguimiento al cliente.

          p(numero="6" titulo="Comunicación constante") Aquel vendedor que solo llama para recibir el pedido está condenado a desaparecer de la mente del cliente. Hoy en día las relaciones y la comunicación deben ser constantes, con el fin de personalizar las ventas.

          p(numero="7" titulo="Solución de problemas") Cuando sucede algo con el cliente, este acudirá directamente a quien le vendió pues ese fue su primer contacto; el vendedor o el área de soporte deberán estar atentos a cualquier inconveniente, por pequeño que sea, y así extender la confianza.


    separador

    #t_1_6

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.6 Aplicar la escucha activa

    .row.justify-content-around.align-items-center
      .col-lg-4
        .bloque-texto-z.color-primario.p-4   
            .bloque-texto-z__texto
              p Una de las habilidades del ser humano es escuchar, y no solo escuchar, sino comprender. En el caso de las ventas, esta acción es fundamental para entender claramente lo que necesita el cliente. Saber leer las necesidades del cliente es fundamental para ofrecer los productos o servicios de una marca con asertividad. Un vendedor, gerente o cualquier otra persona que trabaje en servicio al cliente, que no sepa escuchar a los compradores, pierde tanto la oportunidad de vender como la de mejorar.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img26.svg', alt='Texto que describa la imagen') 

      .col-lg-4
        p(data-aos="fade-down").mt-3 Escuchar es poner todos los sentidos, no solo los oídos, en el servicio de quien se está atendiendo; estar en condición de ayuda y de escucha. Todo esto es muy importante para el cliente, quien valora que se le brinde una atención sincera y eficaz.

        p(data-aos="fade-down").mt-3 Muchas personas consideran que sí saben escuchar, pero al final no lo hacen porque tienen ansiedad, les cuesta prestar atención, consideran que siempre tienen la razón o sencillamente no quieren prestar atención al otro; por ello es importante desarrollar esta habilidad, y aún más cuando trabajamos con clientes. La interacción con clientes requiere de concentración, atención y enfoque en el proceso de comunicación.

    .row.mt-5
      p #[b Existen tres niveles de escucha activa:]

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-around.align-items-center
        .col-md-9.mb-4.mb-md-0
          h3 Nivel 1
          p La persona se encuentra pensativa, está en la capacidad de escucharse y entenderse al mismo tiempo a sí misma.

        .col-md-3
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img27.svg', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center
        .col-md-3.mb-4.mb-md-0
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img28.svg', alt='Texto que describa la imagen')

        .col-md-9
          h3.align-time-line Nivel 2
          p.align-time-line La persona detiene sus pensamientos internos y atiende únicamente lo que otra persona o situación le está comunicando.

      .row.justify-content-around.align-items-center
        .col-md-9.mb-4.mb-md-0
          h3 Nivel 3
          p La persona relaciona los entendimientos, es decir, entiende sus propios pensamientos y entiende lo que le está diciendo la otra persona o situación. Además, está pendiente del entorno de la comunicación, texto o información correspondiente.

        .col-md-3
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img29.svg', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p(data-aos="fade-down") Dentro de estos niveles hay factores que afectan o interrumpen la atención, tales como las reuniones y la conexión tecnológica, como teléfonos móviles, televisores, audífonos, entre otros. 


    separador

    #t_1_7

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.7 Proceso y técnicas de ventas

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen') 

      .col-lg-10
        .bloque-texto-y.color-secundario.p-4.mt-3 
          .bloque-texto-y__texto
            p Las empresas trabajan todo el tiempo en función de obtener cada vez más clientes y encargarse de retenerlos. Es por ello que el proceso de ventas cobra gran relevancia desde la perspectiva de la empresa, porque es el mecanismo que alimenta de combustible el desarrollo de la empresa, es decir, el que se encarga de conseguir recursos para que la empresa se mantenga.
            br
            br
            p Por ello, vender se sustenta en cumplir varios pasos que se deben seguir para anticiparse y poder prever los resultados esperados, y así poder atraer, convencer y mantener a un cliente.

    .row.mt-5
      p #[b Según Phillip Kotler, el proceso de ventas tiene 7 pasos:]

    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Búsqueda de prospectos:
                p Es la primera etapa, que corresponde a la consecución de aquellos prospectos, posibles clientes o compradores de los productos o servicios. Es clave tener claridad de quiénes serán los clientes.

              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img31.png', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Previo al acercamiento:
                p Investigación previa de cada posible cliente: es necesario tener toda la información detallada y clara. Si se trata de personas, se debe conocer cada uno de sus perfiles psicográficos, dónde vive, qué hace, qué le gusta, qué desea, etc. Si se trata de una empresa, debe conocer el tipo de empresa, sector económico, a qué se dedica, número de empleados, tamaño, entre otros. 

              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img32.png', alt='') 

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Acercamiento:
                p El vendedor debe saber cómo acercarse, en dónde se va a manejar la reunión de ventas, cómo debe vestir y cómo debe actuar. Gracias a la información obtenida con la etapa anterior, toda esa investigación servirá para establecer un acercamiento exitoso y eficaz.
      
              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img33.png', alt='')     

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Presentación:
                p Etapa en donde el vendedor tendrá la oportunidad de hacer la presentación al cliente de todas las cualidades del producto o servicio, y podrá mostrar la historia de valor del producto o servicio, lo que lo hace diferente y el respaldo de la empresa.

              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img34.png', alt='')   

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Manejo de objeciones:
                p El vendedor tendrá que conocer en detalle y entender la información total de la empresa y del portafolio de productos, con el fin de poder dar respuesta a todas las inquietudes del cliente.    
              
              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img35.png', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Cierre de venta: 
                p Punto crítico en el proceso, ya que el vendedor debe conocer y entender cuándo cerrar la venta, si no maneja esta distinción, muy posiblemente la perderá.

              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img36.png', alt='')

              
            .row.justify-content-center(titulo="").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Seguimiento: 
                p Una vez la venta ha sido cerrada es importante hacerle seguimiento constante, no solo para nuevas ventas, sino para lograr la satisfacción total del cliente.
                
              .col-lg-4.col-xs-6
                figure(data-aos="zoom-in-left")
                  img(src='@/assets/curso/temas/tema1/img37.png', alt='')


    separador

    #t_1_8

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.8 Aplicar herramientas de ventas y #[i Customer Relationship Management]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img38.png')})`}"
      )
      .bloque-texto-g__texto.p-4.bloque-texto-g__texto
        p.mb-0 Cada vez más, y gracias a la tecnología, se crean nuevas herramientas que apoyan la labor comercial, no solo para la toma del pedido sino también para que los clientes puedan autogestionarse y tomar sus propias decisiones. Con la llegada de la internet se abrieron todas las posibilidades para desarrollar procesos a medida entre empresa y cliente.

    .row.mt-5
      p #[b Veamos un poco más sobre estas herramientas. ]

    .tarjeta.tarjeta--azul.p-4.background-slide-tema1
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Hace unas décadas los empresarios debían crear sus propias maneras de gestionar a los clientes, para poder organizarlos y conocerlos mejor, y así poder proyectar las ventas de un periodo. Esta labor se desarrollaba de manera manual en planillas y en libros.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img39.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Últimamente, gracias a la ofimática, se digitalizaron estas plantillas en formatos tecnológicos, como Excel, que permiten llevar un mejor control y obtener información más rápido. Últimamente, para el manejo de clientes se han creado herramientas tecnológicas avanzadas y a la medida, instauradas por empresas tecnológicas, que permiten a las compañías tener información en tiempo real, no solo del control y manejo internos, sino también de su relación con los clientes.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img40.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Un concepto muy conocido es el CRM o #[i Customer Relationship Management], que es un #[i software] que reúne toda la estrategia y procesos internos de servicio y comerciales en relación con los clientes, es decir, la empresa en función de los clientes. Este #[i software] almacena toda la información de los clientes cautivos y potenciales, y desde allí se toman las decisiones de cómo relacionarse con cada uno de ellos.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img41.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Utilizar la tecnología permite a las empresas tomar decisiones acertadas y en mejores tiempos, en beneficio de los clientes.
            
          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img42.png', alt='Texto que describa la imagen')
   



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
