gsap.registerPlugin(ScrollTrigger);


// 2. Tech Grid
gsap.from(".tech-item", {
    scrollTrigger: { trigger: ".tech", start: "top 85%" },
    y: 50, opacity: 0, stagger: 0.1, duration: 3, ease: "power3.out"
});

// 3. Live IDE Animation
const lines = document.querySelectorAll(".type-line");
let tlCode = gsap.timeline({
    scrollTrigger: { trigger: ".code-window", start: "top 75%" }
});

lines.forEach((line) => {
    tlCode.to(line, {
        width: "100%", duration: 1.4, ease: "none",
        onStart: () => line.style.borderRightColor = "var(--accent)",
        onComplete: () => line.style.borderRightColor = "transparent"
    });
});

// 4. Certificados
gsap.from(".cert-card", {
    scrollTrigger: { trigger: ".certs-grid", start: "top 80%" },
    scale: 0.9, opacity: 0, stagger: 0.2, duration: 1, ease: "power2.out"
});




// =============================================
// ANIMAÇÃO: SEÇÃO SOBRE (GSAP)
// =============================================
gsap.from(".about-content > *", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".visual-box", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 60%",
    },
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out"
});

// Parallax sutil na imagem de perfil
gsap.to(".profile-img", {
    scrollTrigger: {
        trigger: ".about-section",
        scrub: true,
    },
    y: -50
});
// =============================================

// =============================================
// ANIMAÇÃO: SEÇÃO PROJETOS (GSAP)
// =============================================
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 350px",
    },
    y: 60,
    opacity: 0,
    stagger: 0.3,
    duration: 1.2,
    ease: "power4.out"
});

// Efeito de Parallax nas imagens dos cards ao scroll
document.querySelectorAll('.project-img').forEach(img => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            scrub: true
        },
        scale: 1.15,
        ease: "none"
    });
});
// =============================================

// =============================================
// ANIMAÇÃO: RODAPÉ (GSAP)
// =============================================
gsap.from(".footer-brand, .nav-col", {
    scrollTrigger: {
        trigger: ".main-footer",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

// Efeito sutil de movimento na marca d'água
gsap.to(".footer-watermark", {
    scrollTrigger: {
        trigger: ".main-footer",
        scrub: 1
    },
    x: -100,
    ease: "none"
});
// =============================================

const form = document.querySelector('.custom-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Impede a página de recarregar
  
  const data = new FormData(event.target);
  const button = form.querySelector('.btn-send');
  
  button.innerText = "ENVIANDO...";
  button.disabled = true;

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    form.reset(); // Limpa o formulário
  } else {
    alert('Ops! Algo deu errado. Tente novamente mais tarde.');
  }
  
  button.innerText = "ENVIAR MENSAGEM";
  button.disabled = false;
});


// =============================================
// ANIMAÇÃO: SEÇÃO SOBRE MIM DETALHADA (GSAP)
// =============================================
gsap.from(".about-detailed-content > *", {
    scrollTrigger: {
        trigger: ".about-detailed-section",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".visual-center", {
    scrollTrigger: {
        trigger: ".about-detailed-section",
        start: "top 60%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out"
});