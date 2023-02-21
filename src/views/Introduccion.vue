<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8.col-md-8
        p(data-aos="fade-down").mt-3 Estimado aprendiz, bienvenido a este componente formativo, el que conocerá que, para cualquier modelo empresarial, las ventas son una de las acciones de mayor relevancia, dado que de estas se desprenden los ingresos que hacen posible su gestión. Un organizador de eventos no es la excepción, y por ello durante esta experiencia de formación, encontrará las bases y los conocimientos necesarios para crear y desarrollar un modelo propio comercial y de negociación, en torno a los productos y servicios que ofrecerá al mercado. 

        .bloque-texto-f.color-secundario.p-4.mt-3 
          .bloque-texto-f__texto
            p El siguiente video le permitirá tener una visión global de los temas que se desarrollan, y en consecuencia le posibilitará de forma sencilla alcanzar los resultados propuestos. 

      .col-lg-3.col-md-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen') 

    .row.justify-content-center.align-items-center.mb-5.mt-4         
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
