function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("fadeInUp");
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  document.getElementById(cityName).className += " fadeInUp animated";
  evt.currentTarget.className += " active";
}

const goTop = document.querySelector(".go-top");

goTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

$(document).ready(function(){
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 300) {
        $('.go-top').addClass("anime-bottom-init");
    }else {
        $('.go-top').removeClass("anime-bottom-init");
    }

  });
});


$(document).ready(function(){
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 40) {
        $('.navbar').addClass("fixed-top");
    }else {
        $('.navbar').removeClass("fixed-top")
        $('.navbar').addClass("anime-bottom-init");

    }

  });
});



const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expended', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


$(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    $('.animate').each(function(){
        if(windowTop > $(this).offset().top - 900){
            $(this).addClass('anime-init');
        } 
    });
  });

  $(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    $('.anime-bottom').each(function(){
        if(windowTop > $(this).offset().top - 900){
            $(this).addClass('anime-bottom-init');
        } 
    });
  });

  $(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    $('.anime-left').each(function(){
        if(windowTop > $(this).offset().top - 900){
            $(this).addClass('anime-left-init');
        } 
    });
  });
  
  $(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    $('.anime-button').each(function(){
        if(windowTop > $(this).offset().top - 900){
            $(this).addClass('anime-button-init');
        } 
    });
  });

  $(function() {
    $(".acceptButton").on("click", function() {
      $(".cookies-accept").find(".active").toggleClass("hide");
    })
  });

  if (window.SimpleAnime) {
    new SimpleAnime();
  }






  



