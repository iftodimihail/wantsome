function i18nModule() {
  let definitions = {};

  function registerLanguage(language, definition) {
    // definirea unei key dimamice  intr-un obiect (atunci cand cheia este un string trimis ca si argument intr-o functie de exemplu)
    // se face adaugand variabila intre paranteze patrate
    definitions = { ...definitions, [language]: { ...definition } };
  }

  function applyLanguage(language) {
    document.body.setAttribute("data-lang", language);
  }

  function registerSentences(language, sentences) {
    definitions = {
      ...definitions,
      [language]: {
        ...definitions[language], // destructurarea obiectului de propozitii care exista deja pentru limba selectata
        ...sentences, // destructurarea obiectului de propozitii noi
      },
    };
  }

  function refresh() {
    const currentLanguage = document.body.getAttribute("data-lang");
    const currentLanguageDefinition = definitions[currentLanguage];

    // document.body.querySelectorAll("*") -> selecteaza toate tag-urile din body
    [...document.body.querySelectorAll("*")].forEach((element) => {
      if (
        element.hasAttribute("data-text") &&
        currentLanguageDefinition[element.getAttribute("data-text")]
      ) {
        el.innerHTML = currentLanguageDefinition[el.getAttribute("data-text")];
      }
    });
  }

  return {
    registerLanguage,
    refresh,
    applyLanguage,
    registerSentences,
  };
}

const i18n = i18nModule();

i18n.registerLanguage("en", {
  hello_there: "Hello there!",
  intro_paragraph: "Welcome to this exercise!",
});

i18n.registerLanguage("es", {
  hello_there: "Ola!",
  intro_paragraph: "Bienvenida a este ejercicio!",
});

i18n.refresh();
i18n.applyLanguage("en");

setTimeout(() => i18n.refresh(), 3000);

i18n.registerSentences("en", {
  later_text: "See you later, alligator!",
});

setTimeout(() => i18n.refresh(), 2000);
