$(function(){
  $(window).scroll(function(){
    v = $(this).scrollTop();
    if(v > 560){
      $("#header").slideDown("fast",function(){
        $(this).addClass("cabecalho-fixo")
      })
    }else{
      $("#header").slideDown("fast",function(){
        $(this).removeClass("cabecalho-fixo");
      })
    }
  })
})