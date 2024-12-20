let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
/* Slides */

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

(function() {
    emailjs.init("9mLB3Ejug6ZzYkyT4"); // Substitua com seu User ID

    document.getElementById('contact-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
        const response = await fetch('https://seuservidor.com/api/send-diet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Mensagem enviada com sucesso! Verifique seu e-mail.');
        } else {
            console.error('Erro:', result.message);
            alert('Ocorreu um erro ao enviar sua mensagem.');
        }
        } catch (error) {
        console.error('Erro na solicitação:', error);
        alert('Não foi possível enviar sua mensagem.');
        }
      event.preventDefault(); // Impede o envio padrão do formulário

      emailjs.sendForm('service_a259688', 'template_71hcqph', this)
        .then(function(response) {
          console.log('SUCCESS!', response);
          alert('Mensagem enviada com sucesso!');
        }, function(error) {
          console.log('FAILED...', error);
          alert('Falha ao enviar mensagem.');
        });
    });
  })();

 