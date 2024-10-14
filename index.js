const translations = {
  pt: {
    "box-a": "Acadêmico",
    "title-academic": "Acadêmico",
    "box-b": "Sobre mim",
    "title-about": "Sobre mim",
    "box-c": "Projetos",
    "title-projects": "Projetos",
    "box-d": "Experiência",
    "title-experience": "Experiência",
    "made": "Feito com",
    "by": "por"
  },
  en: {
    "box-a": "Academic",
    "title-academic": "Academic",
    "box-b": "About me",
    "title-about": "About me",
    "box-c": "Projects",
    "title-projects": "Projects",
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
