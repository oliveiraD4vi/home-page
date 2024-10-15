const translations = {
  pt: {
    "ptitle-academic": "Educação | Davi Oliveira",
    "box-a": "Educação",
    "title-academic": "Educação",
    "ptitle-about": "Sobre mim | Davi Oliveira",
    "box-b": "Sobre mim",
    "title-about": "Sobre mim",
    "ptitle-projects": "Projetos | Davi Oliveira",
    "box-c": "Projetos",
    "title-projects": "Projetos",
    "ptitle-experience": "Experiência | Davi Oliveira",
    "box-d": "Experiência",
    "title-experience": "Experiência",
    "made": "Feito com",
    "by": "por",
    "home-presentation": `Um desenvolvedor web com experiências em Angular, React, Node, Java, e muitas outras
                          tecnologias de desenvolvimento web.`,
  },
  en: {
    "ptitle-academic": "Education | Davi Oliveira",
    "box-a": "Education",
    "title-academic": "Education",
    "ptitle-about": "About me | Davi Oliveira",
    "box-b": "About me",
    "title-about": "About me",
    "ptitle-projects": "Projects | Davi Oliveira",
    "box-c": "Projects",
    "title-projects": "Projects",
    "ptitle-experience": "Experience | Davi Oliveira",
    "box-d": "Experience",
    "title-experience": "Experience",
    "made": "Made with",
    "by": "by",
    "home-presentation": `A web developer
                          with experience in Angular, React, Node, Java, among other web development technologies.`,
  }
};

function switchLanguage(lang) {
  const elements = getAllElements();

  if (elements && elements.length) {
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[lang][key];
    });

    sessionStorage.setItem("LANGUAGE", lang);
  
    setActiveButton(lang);
  }
}

function setActiveButton(lang) {
  const buttons = document.querySelectorAll('button');

  if (buttons && buttons.length) {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  }

  const button = document.getElementById("lang-" + lang);
  if (button) {
    button.classList.add("active");
  }
}

function getAllElements() {
  return document.querySelectorAll('[data-translate]');
}

function getFirstLoadLanguage() {
  const lang = sessionStorage.getItem("LANGUAGE");

  if (lang) {
    switchLanguage(lang);
    return;
  }

  switchLanguage("pt");
}

getFirstLoadLanguage();
