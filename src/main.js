document.addEventListener('DOMContentLoaded', function() {
    

    // Generar cards de los tutores
    const containerTutors = document.getElementById('teamTutors');

    if (containerTutors) {
    cardsTutorsGenerate();
    }

    const divCursos = document.getElementById('container-cursos');

    if (divCursos) {
    generarCards();
    }
});

// Funcion para la seccion de respuestas

const boxPreguntas = document.querySelectorAll('.box-question');


boxPreguntas.forEach(item => {
    item.addEventListener('click', function () {
        // Primero, verificamos si el div actual ya tiene la clase 'open'
        const isOpen = this.classList.contains('open');

        // Eliminamos la clase 'open' de todos los divs
        boxPreguntas.forEach(box => {
            box.classList.remove('open');
            // Aseguramos que todos los párrafos estén ocultos y el ícono se reinicie
            const icon = box.querySelector('span.material-icons-sharp');
            const answer = box.querySelector('p.answer');
            icon.textContent = 'add';
            answer.classList.replace('block', 'hidden');
        });

        // Si el div actual no estaba abierto, lo abrimos
        if (!isOpen) {
            this.classList.add('open');
            const iconSpan = this.querySelector('span.material-icons-sharp');
            const answerP = this.querySelector('p.answer');
            iconSpan.textContent = 'remove';
            answerP.classList.replace('hidden', 'block');
        }
    });
});

// Navegacion


const navFixed = document.querySelector('.navFixed');
const btnAbrir = document.getElementById('btnNav');
const headerFixed = document.getElementById('headerFixed');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50) {
        headerFixed.classList.add('fixed');
    } else {
        headerFixed.classList.remove('fixed');
    }
});

btnAbrir.addEventListener('click', ()=> {
    navFixed.classList.toggle('show');

    if (navFixed.classList.contains('show')) {
        btnAbrir.querySelector('span').innerText = 'close';
    } else {
        btnAbrir.querySelector('span').innerText = 'menu';
    }
});

// Swiper de la seccion de recomendaciones

var swiper = new Swiper(".carrusel-testimonios", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});


// Generar card de los cursos

const cursos = [
    { imagen: '../img/course1.jpg', nombre: 'Responsive Social Media Website UI Design' },
    { imagen: '../img/course2.jpg', nombre: 'Responsive SmartHome Website Design' },
    { imagen: '../img/course3.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course4.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course5.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course6.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course7.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course8.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course9.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course10.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course11.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course12.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course13.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course14.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course15.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course16.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course17.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
    { imagen: '../img/course18.jpg', nombre: 'Responsive Admin Dashboard UI Desing' },
];

const divCursos = document.getElementById('container-cursos');

function generarCards() {
    divCursos.innerHTML = '';

    cursos.forEach(curso => {
        const card = document.createElement('div');
        card.classList.add('curso-card');
        card.innerHTML = `
            <div class="img-content">
                <img src="${curso.imagen}" alt="${curso.nombre}">
            </div>
            <div class="content-card">
                <h2 class="font-bold text-2xl">${curso.nombre}</h2>
                <p class="my-4">
                    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.
                </p>
                <button class="btnDanger">
                    Learn More
                </button>
            </div>
        `;
    
        divCursos.append(card);
    });
}





//Generar cards de los tutores

const tutors = [
    { img: '../img/tm1.jpg', name: 'Shatta Wale' },
    { img: '../img/tm2.jpg', name: 'Mia Jones' },
    { img: '../img/tm3.jpg', name: 'Diana Ayi' },
    { img: '../img/tm4.jpg', name: 'John Dumelo' },
    { img: '../img/tm5.jpg', name: 'Ruth Shockings' },
    { img: '../img/tm6.jpg', name: 'Edem Quist' },
    { img: '../img/tm7.jpg', name: 'Lila James' },
    { img: '../img/tm8.jpg', name: 'Menz Gold' },
];

const contentCards = document.querySelector('#teamTutors');

function cardsTutorsGenerate() {
    contentCards.innerHTML = '';

    tutors.forEach(tutor => {
        const cardTutor = document.createElement('div');
        cardTutor.classList.add('card-teacher');
        cardTutor.innerHTML = `
            <div class="img-content">
                <img src="${tutor.img}" alt="${tutor.name} Tutor">
            </div>
            <div class="content-card mt-4">
                <b class="font-bold text-3xl md:text-2xl">${tutor.name}</b>           
                <p class="mt-2 text-xl">Expert Tutor</p>
            </div>
            <div class="redes">
                <i class='bx bxl-instagram'></i>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-linkedin'></i>
            </div>
        `;
    
        contentCards.append(cardTutor);
    });
}






