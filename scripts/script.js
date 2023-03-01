const menuItems = document.querySelectorAll('.menu-nav a');
const menuMobile = document.querySelector('#menu-mobile');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const nameArray = document.querySelectorAll('.intro-name');
const skillsDes = document.querySelector('#hover-des');
const skilicons = document.querySelectorAll('.item')
const newText = ['HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.',
  'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.',
  'JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.',
  'React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada.',
  'Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente ao mesmo codigo.'
];
const originalText = skillsDes.innerHTML;




menuItems.forEach(item => {
  item.addEventListener('click', scrollClick);
});

function scrollClick(event) {
  event.preventDefault();
  const elements = event.target;
  const id = elements.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 110,
    behavior: "smooth",
  });
}

function toggleMenu() {
  const menu = document.querySelector('.menu-nav');
  menu.classList.toggle('active');
  function openMenu() {
    const menuX = document.querySelector('#displa-x');
    const menuM = document.querySelector('#displa-m');
    menuX.classList.toggle('active');
    menuM.classList.toggle('active');
  }
  openMenu();
}

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}
animeScroll();


const initTypingAnimation = () => {
  const title = document.querySelector('.intro-name h2')
  const span = document.querySelector('.intro-name span')
  const paragraph = document.querySelector('.intro-name p')

  const typingAnimation = (element) => {

    if (element == title) {
      element.innerHTML = 'Olá, eu sou o '
      const textToArray = element.innerHTML.split('')
      element.innerHTML = ''

      textToArray.forEach((item, index) => {
        setTimeout(() => element.innerHTML += item, 120 * index)
      })

    } else if (element == span) {
      element.innerHTML = 'Lucas Alves'
      const textToArray = element.innerHTML.split('')
      element.innerHTML = ''

      textToArray.forEach((item, index) => {
        setTimeout(() => element.innerHTML += item, 150 * index)
      })

    } else {
      element.innerHTML = 'Desenvolvedor Front-End'
      const textToArray = element.innerHTML.split('')
      element.innerHTML = ''

      textToArray.forEach((item, index) => {
        setTimeout(() => element.innerHTML += item, 75 * index)
      })

    }

  }

  skilicons.forEach((skilicon, index) => {
    skilicon.addEventListener('mouseover', () => {
      skillsDes.innerHTML = newText[index];
    });

    skilicon.addEventListener('mouseout', () => {
      skillsDes.innerHTML = originalText;
    });
  });


  typingAnimation(title)
  setTimeout(() => typingAnimation(span), 1600)
  setTimeout(() => typingAnimation(paragraph), 3700)

}

initTypingAnimation()

menuMobile.addEventListener('click', toggleMenu);
if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 200));
}

