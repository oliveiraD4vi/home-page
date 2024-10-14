const translations = {
  pt: {
    "ptitle-academic": "Acadêmico | Davi Oliveira",
    "box-a": "Acadêmico",
    "title-academic": "Acadêmico",
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
    "by": "por"
  },
  en: {
    "ptitle-academic": "Academic | Davi Oliveira",
    "box-a": "Academic",
    "title-academic": "Academic",
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
    "by": "by"
  }
};

function switchLanguage(lang) {
  const elements = getAllElements();

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[lang][key];
  });

  sessionStorage.setItem("LANGUAGE", lang);
}

function getAllElements() {
  return document.querySelectorAll('[data-translate]');
}

function getFirstLoadLanguage() {
  const lang = sessionStorage.getItem("LANGUAGE");

  if (lang) {
    switchLanguage(lang);
  }
}

getFirstLoadLanguage();
