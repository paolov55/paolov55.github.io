$(document).ready(function () {
  // Adicionar rolagem suave aos links da navbar
  $("a.smooth-scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100, // 100 é o valor do offset (ajuste conforme necessário)
        },
        400
      ); // 400 é a velocidade da animação em milissegundos
    }
  });
});
