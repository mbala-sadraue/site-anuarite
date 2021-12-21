$(document).ready(function(){
  let containerA = document.querySelector("#circuloA");
  let circuloA = new ProgressBar.Circle(containerA,{
      color: "#f00",
      strokeWidth: 8,
      duration:1400,
      from:{color:"#AAA"},
      to:{color:"#f00"},

      step : function(state, circle){
          circle.path.setAttribute("stroke",state.color);
          let value = Math.round(circle.value() * 100 );
          circle.setText(value);
      }

  });
  let containerB = document.querySelector("#circuloB");
  let circuloB = new ProgressBar.Circle(containerB, {
    color: "#f00",
    strokeWidth: 8,
    duration: 1900,
    from: { color: "#AAA" },
    to: { color: "#f00" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 130);
      circle.setText(value);
    }

  });
  let containerC = document.querySelector("#circuloC");
  let circuloC = new ProgressBar.Circle(containerC, {
    color: "#f00",
    strokeWidth: 8,
    duration: 2300,
    from: { color: "#AAA" },
    to: { color: "#f00" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 150);
      circle.setText(value);
    }

  });
  let containerD = document.querySelector("#circuloD");
  let circuloD = new ProgressBar.Circle(containerD, {
    color: "#f00",
    strokeWidth: 8,
    duration: 2600,
    from: { color: "#AAA" },
    to: { color: "#f00" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 200);
      circle.setText(value);
    }

  });
 
 let areaOffset =  $("#container-progressbar").offset();

 let stop = 0;
 $(window).scroll(function(){
   let scroll = $(this).scrollTop();
   if (scroll >( areaOffset.top -500) && stop == 0){
     circuloA.animate(1.0)
     circuloB.animate(1.0)
     circuloC.animate(1.0)
     circuloD.animate(1.0)
     stop = 1;

   }

 })

// PARALAX PARA IMAGENS //
setTimeout(function(){
  $("#container-progressbar").parallax({
    imageSrc:"assets/images/banner.jpg"
  },250)
})
})
