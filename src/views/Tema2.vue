<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Contrato de eventos

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8
        .bloque-texto-z.color-secundario.p-4.ps-0.mt-3
          .bloque-texto-z__texto
            p Como en cualquier otro proceso de negociación entre partes, los organizadores de eventos también deben establecer un contrato que tienen que firmar con sus clientes al momento de realizar cualquier servicio. En este documento el organizador debe incluir todas aquellas actividades que se compromete a realizar, de acuerdo con lo conversado previamente con el cliente o usuario, ya que es este último quien define qué es lo que se quiere en el evento a realizar.Los contratos son documentos prediseñados por el organizador que deben adaptarse a cada cliente y negocio en particular, sin importar el evento.
            br
            br
            p Para poder llegar a la firma de un contrato, el organizador de eventos o su fuerza de ventas requiere contar con herramientas que faciliten este proceso, así como tener claras algunas pautas y pasos que se verán a continuación:


      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen') 



    #t_2_1.mt-5.mb-3(data-aos="zoom-in-left")
      h3 Herramientas de ventas

    .row.justify-content-around.align-items-center
      .col-10
        .row.justify-content-around.align-items-center.mt-4.background1-tema-1
          .col-lg-2.col-xs-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen').img-55-porciento
          .col-10.p-4
            p.margen-text Para facilitar el trabajo del área comercial, la empresa debe ayudar a las fuerzas de ventas poniendo a disposición algunas herramientas para su labor; estas sirven para facilitar y establecer seguimiento y control de las ventas de la organización. Dentro de estas ayudas se tienen: manejo de agenda, acceso a bases de datos o prospectos de clientes nuevos, comunicación con otras áreas internas de la compañía, como producción, facturación, contratos o pagos, atención al cliente, entre muchas otras, dependiendo de cada caso y empresa. 

    .row.mt-5
      p #[b Datos importantes sobre las herramientas de ventas:]

    .tarjeta.tarjeta--azul.p-4.background-slide-tema1
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Actualmente, la relación de procesos con tecnologías son ganadoras para potenciar el trabajo de los vendedores, pues permite hacer un seguimiento de los procesos de los vendedores, así como un seguimiento interno de los estados de cada cliente. 

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En cuanto a las bases de datos, las compañías deben estar siempre buscando nuevos clientes, de acuerdo con la estrategia y su público objetivo; por tanto, la consecución y posterior alimentación de esta es fundamental para el crecimiento del negocio. Aquí se hace necesario tener un sistema CRM para administrar toda esta información y tener trazabilidad en tiempo real. 

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p También se deben analizar e incluir herramientas que sirvan para la comunicación entre la fuerza de ventas y los clientes, y entre los clientes y la empresa, así como los vendedores y los procesos internos y viceversa. La comunicación directa y asertiva es importante para evitar reprocesos y poder dar soluciones inmediatas, siempre pensando en los clientes. 

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Algunas de estas herramientas son el teléfono con un número único empresarial, el e-mail personalizado, las páginas web corporativas, la intranet o red interna de la empresa, las redes sociales corporativas, los chats internos (los ofrece el CRM) o las nuevas plataformas externas digitales gratuitas, como el WhatsApp, entre muchos otros que se deben considerar y poner a disposición para que sirvan de soporte permanente para clientes y vendedores.

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p.mb-0(data-aos="fade-down") En el siguiente documento Anexo 1_ Herramientas de ventas, encontrará algunas de las herramientas más importantes para una empresa organizadora de eventos.

    .row.justify-content-around.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 1
                  p.mb-0 Herramientas de ventas
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



    #t_2_2.mt-5(data-aos="zoom-in-left")
      h3 Contrato con el cliente

    .row.justify-content-around.align-items-center
      .col-lg-4
        p Cuando el organizador de eventos elabora un contrato con su cliente, debe estipular claramente todas las actividades que se requieren para el desarrollo del evento, así como el alcance del mismo, es decir, qué se va a realizar. En algunos casos se recomienda que se incluya incluso lo que no se va a realizar, con el fin de que quede muy clara la información.

      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen') 

      .col-lg-5
        p(data-aos="fade-down").mt-3 Es importante establecer las condiciones, incluyendo fechas límite, seguros necesarios y los requerimientos de adelantos de dinero para que el organizador pueda prever pagos con proveedores, y así pueda ir desarrollando la planeación y organización del evento. Por ejemplo, para reservar una sede o salón es importante hacer un pago anticipado o abono, igual sucede con tiquetes aéreos, hoteles, servicios de #[i catering], diseñadores, proveedores de sonido, artistas, etc.

    .row.justify-content-around.align-items-center
      .col-lg-12
        .bloque-texto-b.color-primario.pe-4.py-4     
          .bloque-texto-b__texto
            p No se debe olvidar la firma de las partes y definir claramente la fecha de desarrollo del evento, los entregables finales, incluyen servicios como fotografías, memorias, videos, entre otros, que requieren un tiempo de producción posterior a la realización del evento y la fecha de finalización del contrato. Se recomienda asesorarse legalmente de acuerdo con las reglas legales y tributarias de cada país o región, con el fin de no tener inconvenientes con los contratos. Entre más transparente y específico sea el contrato es mejor para ambas partes.

    .row.mt-5
      p #[b Las siguientes son las condiciones mínimas que debe tener un contrato de organización de eventos:]

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-9.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Número del contrato y fecha")
            h4 Número del contrato y fecha
            p Firmar con fecha y dar consecutivo interno el número de contrato.

          .tarjeta.clr-paleYellow.p-4(titulo="Objeto del contrato")
            h4 Objeto del contrato
            p Con mucha precisión y definición, se debe dejar claro el contenido y las características del evento, es decir, qué se está contratando.

          .tarjeta.clr-paleYellow.p-4(titulo="Información de cada una de las partes")
            h4 Información de cada una de las partes
            p Organizador (empresa o nombre) - Cliente (empresa o persona natural) con sus respectivos documentos de identidad y/o números de NIT empresarial.

          .tarjeta.clr-paleYellow.p-4(titulo="Precio")
            h4 Precio
            p El valor nominal del costo de la organización del evento y las formas de pago.

          .tarjeta.clr-paleYellow.p-4(titulo="Descripción de las actividades del evento")
            h4 Descripción de las actividades del evento
            p Se describen la mayor cantidad de actividades a desarrollar, se debe hacer de forma específica. Importante establecer cantidades, por ejemplo: cena para 200 personas.

          .tarjeta.clr-paleYellow.p-4(titulo="Plazos o tiempos máximos")
            h4 Plazos o tiempos máximos
            p Tiempos de ambas partes para el desarrollo del evento, máximo y mínimo en tiempo.

          .tarjeta.clr-paleYellow.p-4(titulo="Fecha de realización del evento")
            h4 Fecha de realización del evento
            p Aquí es importante definir la(s) fecha(s) exactas del desarrollo del evento.

          .tarjeta.clr-paleYellow.p-4(titulo="Condiciones especiales")
            h4 Condiciones especiales
            p Se debe registrar si existe alguna condición de las partes para cancelar el evento o terminar el contrato; por ejemplo, definir que, en caso de cancelación anticipada del evento, el cliente deberá cubrir los costos a los que se haya incurrido hasta el momento, como anticipo de los proveedores que se activaron y que ya iniciaron con la preparación, así como una compensación económica al organizador por el tiempo que se trabajó en el desarrollo del evento.

            p Aquí también se pueden incluir cláusulas de confidencialidad, de no competencia y de responsabilidad civil si se requieren.

          .tarjeta.clr-paleYellow.p-4(titulo="Firmas")
            h4 Firmas 
            p Se deben dejar registradas las firmas de los responsables de ambas partes para cerrar el contrato y poder iniciar las actividades de manera formal y responsable.

      .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt", style="width:450px;").m-auto


    
    #t_2_3.mt-5(data-aos="zoom-in-left")
      h3 El servicio posventa

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4.bloque-texto-g__texto
        p.mb-0 #[b El servicio posventa es muy importante dentro de la estrategia de una compañía:] si se piensa que una venta finaliza en el cierre y el pago de esta, se está muy equivocado. Una venta casi nunca se cierra pues es probable que el cliente vuelva a comprar, gracias a estrategias planteadas en el servicio posventa realizado. Es aquí donde se mezclan y consideran todas las estrategias necesarias para mejorar la experiencia de los clientes después de realizar la compra, y donde se establecen relaciones duraderas entre empresa y cliente.  
        br
        br
        p.mb-0 De esta forma, es importante establecer los canales necesarios para que el cliente no esté desamparado después de realizar la compra: todo el soporte, asesoría, quejas y demás actividades que el cliente requiera deben ser analizados, tenidos en cuenta y solucionados a la mayor brevedad posible. Por lo tanto, se debe escuchar a los clientes y mantenerse en contacto por medio de cualquier canal, sin llegar a ser invasivo. Asesorar en el manejo o uso de sus productos es una estupenda idea para mantenerlos conectados con la marca.

    .row.mt-5
      p Algunas estrategias de servicio posventa:

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Garantías:")
              .col-12
                p.mb-0 #[b Hablar con seriedad], ya que además de ser un requisito legal, se deben crear canales de servicio que les ayude a los clientes a solucionar inconvenientes asociados a defectos de los productos que adquirió.

            .row(titulo="Soporte técnico:")
              .col-12
                p.mb-0 Estar pendiente y atentos a lo que requiera el cliente y asesorar de manera eficaz.

            .row(titulo="Devoluciones: ")
              .col-12
                p.mb-0 Muy importante cuando se trata de productos, ya que hay muchos clientes que pierden todo el interés por la marca. Por este hecho, se deben crear políticas claras de devoluciones y socializarlas con los clientes.

            .row(titulo="Seguimiento posventa: ")
              .col-12
                p.mb-0 Llamar al cliente y preguntarle acerca de su experiencia, hacerle sentir cómodo es fundamental para fidelizarlo con la marca y generar recompra.

            .row(titulo="Retroalimentación: ")
              .col-12
                p.mb-0 Permitir al cliente expresarse con cualquier aspecto: los productos, los procesos o los colaboradores, entre otros. Es fundamental para establecer canales de confianza con el cliente.

        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img11.png", alt="alt").img400.m-auto


    #t_2_4.mt-5(data-aos="zoom-in-left")
      h3 Objeciones 

    .row.justify-content-around.align-items-center
      .col-10
        .row.justify-content-around.align-items-center.mt-5.background1-tema-1
          .col-lg-2.col-xs-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Texto que describa la imagen').img-83-porciento
          .col-10.p-4
            p Las objeciones no deben considerarse como algo negativo en una empresa, ya que ayudan a que el proceso de ventas, el servicio, la producción y en general toda la empresa, crezca en función de las necesidades del cliente. Si son bien canalizadas y se tratan como un indicador, se generarán muchas respuestas valiosas para cualquier organización, pues sencillamente permiten darse cuenta de aquellos aspectos o procesos que no están bien, que deben ajustarse o explicarse mejor a los clientes. 

            p En muchos casos el no entender el manejo de objeciones hace perder clientes y se confunde con procesos de negociación, esencialmente porque el vendedor o la persona de servicio al cliente, en el momento de verdad, no conoce ni aplica el proceso esencial de tan solo 4 pasos. 

    .row.mt-5
      p Estos pasos son:

    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure(data-aos="zoom-in-left")
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3.text-white(x="30%" y="32%" numero="1")
        .h5.mb-2 Escuchar 
        p Dejar hablar, guardar silencio, concentrarse en la otra persona y el mensaje.

      .tarjeta.color-acento-botones.p-3.text-white(x="40%" y="16%" numero="2")
        .h5.mb-2 Reconocer
        p Entender de qué se trata la objeción. No contradecir inmediatamente.

      .tarjeta.color-acento-botones.p-3.text-white(x="60%" y="32%" numero="3")
        .h5.mb-2 Analizar
        p Analizar muy bien el mensaje y la objeción.

      .tarjeta.color-acento-botones.p-3.text-white(x="75%" y="16%" numero="4")
        .h5.mb-2 Responder
        p Responder con grandeza, con respeto y en un tono conciliador y agradable, generando confianza.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4.bloque-texto-g__texto
        p.mb-0 Para un organizador de eventos es fundamental aprender a manejar las objeciones, pues estas se llevan a cabo, la mayor parte de las veces, en momentos de verdad. 
        br
        br
        p.mb-0 Por esto hay que saber hablar, tener paciencia y tomarse el tiempo de explicar al cliente cualquier eventualidad que se presente. Recordemos que este servicio es único y no se puede repetir, por ello el manejo de objeciones debe anticiparse con el equipo de trabajo y con el cliente. La transparencia del organizador con los clientes desde un principio será fundamental para la disminución de objeciones durante el evento.

    

    #t_2_5.mt-5(data-aos="zoom-in-left")
      h3 Etiqueta y protocolo en eventos

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='Texto que describa la imagen') 

      .col-lg-8
        .bloque-texto-z.color-secundario.p-4.mt-3 
          .bloque-texto-z__texto
            p Al momento de realizar la venta, existen algunas reglas de protocolo y etiqueta que se deben tener en cuenta, más aún cuando se trata de un organizador de eventos, quien debe manejar el tema y utilizarlo como una herramienta de ventas. Invitar a un desayuno, almuerzo o cena a un cliente en un ambiente armónico, bien puesto, con toda la gala y las buenas maneras, podrá demostrar al cliente que es el indicado para el desarrollo de su evento. Para el cliente la compra debe ser una experiencia única, al igual que el evento.
      
    .row.mt-5
      p #[b Piense entonces que cada evento es un momento definitivo y único, por ejemplo:]

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-3.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
        p.text-center Una pareja que se va a casar.

      .tarjeta.tarjeta-3.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
        p.text-center Una empresa que quiere agasajar a sus colaboradores por el trabajo realizado.

      .tarjeta.tarjeta-3.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img18.svg' alt='AvatarTop')
        p.text-center Una convención esperada durante un año.

      .tarjeta.tarjeta-3.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img19.svg' alt='AvatarTop')

        p.text-center La celebración para un presidente de una compañía que se retira.

      .tarjeta.tarjeta-3.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img20.svg' alt='AvatarTop')

        p.text-center La inauguración de una nueva empresa o compañía.

    .row.mt-5
      p Son muchos ejemplos que verifican la importancia y la responsabilidad de un organizador de eventos. Este debe manejar muy bien el protocolo y la etiqueta, y utilizarlos en todo momento en su apariencia física, su manera de hablar, comer y expresarse. Esta se convierte en la herramienta más importante a la hora de interactuar con un cliente. 

    .row.justify-content-around.align-items-center
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p.mb-0(data-aos="fade-down") Los negocios duraderos nacen de una buena relación comercial y personal, por esto, a continuación,  se presentarán algunas normas de etiqueta que debe tener en cuenta y aplicar en pro de las relaciones comerciales. Por favor descargar el Anexo 2, Tips  de etiqueta y protocolo.

    .row.justify-content-around.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 2
                  p.mb-0 Tips de etiqueta y protocolo
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    

    #t_2_6.mt-5(data-aos="zoom-in-left")
      h3 Acuerdos comerciales

    .row.justify-content-around.align-items-center
      .col-10
        .row.justify-content-around.align-items-center.mt-5.background1-tema-1
          .col-lg-2.col-xs-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img21.svg', alt='Texto que describa la imagen').img-187-porciento
          .col-10
            p.mt-3 Un acuerdo es un pacto o convenio que se hace entre dos partes, en donde ambas obtienen beneficios de acuerdo con su modalidad de trabajo. En el caso de un organizador de eventos, estos acuerdos se realizan no solo con clientes sino con los proveedores que maneja y que son determinantes para la gestión del evento. 

    .row.mt-5
      p #[b Los acuerdos para un organizador pueden ser:]

    .row.justify-content-around.align-items-center
      .col-lg-9.position-relative.mt-5
        .avatar
          figure(data-aos="zoom-in-left")
            img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt").avatar-tema2
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt").img100
            .col
              h5 De ventas
              p Se realizan cuando las dos partes unen sus esfuerzos y experiencia para convertirse en una opción más grande para el mercado. Esta unión los hace llegar a otros mercados que quizá solos no podrían alcanzar. En este acuerdo hay negociación interna por el derecho del negocio y cada uno cobrará sus ganancias de acuerdo con lo pactado, y compartirá las pérdidas si llegaran a existir.

        
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img24.svg", alt="alt").img100
            .col
              h5 De producción
              p En las grandes industrias se consideran para compartir la producción de productos y poder llegar a tener mejores y mayores producciones. En la organización de eventos se desarrollan para acordar tiempos, precios, personalización y mejores garantías frente a otras empresas competidoras. 
              
    .row.justify-content-around.align-items-center
      .col-10
        .row.justify-content-around.align-items-center.mt-5
          .col-lg-2.col-xs-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img25.svg', alt='Texto que describa la imagen').img-25-porciento
          .col-10
            p.mt-3 Es importante que en los anteriores acuerdos se incluyan a los hoteles, agencias de viajes, empresas de transporte y demás proveedores que sean necesarios para poder cumplir con el desarrollo del evento. Muchos de estos acuerdos se pueden firmar legalmente para definir las condiciones; sin embargo, también hay acuerdos implícitos que se dan por la confianza y las labores ya realizadas, en este aspecto cada organizador de eventos ya decidirá qué camino tomar.


    .row.justify-content-around.align-items-center
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p.mb-0(data-aos="fade-down") Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 
          
</template>

<script>
export default {
  name: 'Tema2',
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
