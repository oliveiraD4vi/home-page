var purecookieTitle = "Aviso de uso de cookies",
    purecookieDesc = "Ao utilizar este website você está automaticamente concordando com o uso de cookies.",
    purecookieLink = '',
    purecookieButton = "Entendi";

function pureFadeIn(elementId, displayStyle) {
  var element = document.getElementById(elementId);
  element.style.opacity = 0;
  element.style.display = displayStyle || "flex";

  function fade() {
    var opacity = parseFloat(element.style.opacity);
    if ((opacity += 0.1) > 1) return;
    element.style.opacity = opacity;
    requestAnimationFrame(fade);
  }

  fade();
}

function pureFadeOut(elementId) {
  var element = document.getElementById(elementId);
  element.style.opacity = 1;

  function fade() {
    if ((element.style.opacity -= 0.1) < 0) {
      element.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  }

  fade();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

function cookieConsent() {
  if (!getCookie("purecookieDismiss")) {
    // Cria o contêiner principal
    var cookieConsentContainer = document.createElement('div');
    cookieConsentContainer.id = 'cookieConsentContainer';
    cookieConsentContainer.className = 'cookieConsentContainer';

    // Cria o título do aviso
    var cookieTitle = document.createElement('div');
    cookieTitle.className = 'cookieTitle';
    var title = document.createElement('h1');
    title.textContent = purecookieTitle;
    title.setAttribute("data-translate", "pureCookieTitle");
    cookieTitle.appendChild(title);

    // Cria a descrição do aviso
    var cookieDesc = document.createElement('div');
    cookieDesc.className = 'cookieDesc';
    var descParagraph = document.createElement('p');
    descParagraph.innerHTML = purecookieDesc + " " + purecookieLink;
    descParagraph.setAttribute("data-translate", "pureCookieDesc");
    cookieDesc.appendChild(descParagraph);

    // Cria o botão de aceite
    var cookieButton = document.createElement('div');
    cookieButton.className = 'cookieButton';
    var button = document.createElement('h6');
    button.textContent = purecookieButton;
    button.setAttribute("data-translate", "pureCookieButton");
    button.onclick = function() {
      purecookieDismiss();
    };
    cookieButton.appendChild(button);

    // Anexa todos os elementos ao contêiner principal
    cookieConsentContainer.appendChild(cookieTitle);
    cookieConsentContainer.appendChild(cookieDesc);
    cookieConsentContainer.appendChild(cookieButton);

    // Adiciona o contêiner ao final do body
    document.body.appendChild(cookieConsentContainer);

    // Exibe o contêiner
    pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie("purecookieDismiss", "1", 7);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function () {
  cookieConsent();
};
