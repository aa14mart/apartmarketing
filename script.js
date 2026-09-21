const translations = {
  ru: {
    hero_title: "Профессиональная интерьерная съемка",
    hero_subtitle: "Создаем визуал, который повысит привлекательность объекта",

    step1_title: "Покажите нам объект",
    step1_text: "Фото или ссылка на объявление.",

    step2_title: "Мы предложим решение",
    step2_text: "Подскажем, как лучше подать пространство и нужен ли staging.",

    step3_title: "Подготовим и снимем",
    step3_text: "Согласуем время и проведём съёмку.",

    step4_title: "Готово за 48 часов",
    step4_text: "Получите отобранные и обработанные фотографии.",

    before_label: "До",
    after_label: "После"
  },

  en: {
    hero_title: "Professional Interior Photography",
    hero_subtitle: "We create visuals that make your property more attractive",

    step1_title: "Show us the property",
    step1_text: "Send us photos or a link to the listing.",

    step2_title: "We suggest the best approach",
    step2_text: "We’ll advise how to present the space and whether styling is needed.",

    step3_title: "We prepare and shoot",
    step3_text: "We agree on a convenient time and carry out the shoot.",

    step4_title: "Ready within 48 hours",
    step4_text: "Receive selected and professionally edited photos.",

    before_label: "Before",
    after_label: "After"
  },

  ka: {
    hero_title: "პროფესიონალური ინტერიერის ფოტოგადაღება",
    hero_subtitle: "ვქმნით ვიზუალს, რომელიც გაზრდის ობიექტის მიმზიდველობას",

    step1_title: "გვაჩვენეთ ობიექტი",
    step1_text: "გამოგვიგზავნეთ ფოტოები ან განცხადების ბმული.",

    step2_title: "შემოგთავაზებთ საუკეთესო გადაწყვეტას",
    step2_text: "გირჩევთ, როგორ წარმოვაჩინოთ სივრცე უკეთ და საჭიროა თუ არა სტაილინგი.",

    step3_title: "მოვამზადებთ და გადავიღებთ",
    step3_text: "შევათანხმებთ დროს და ჩავატარებთ ფოტოგადაღებას.",

    step4_title: "მზად იქნება 48 საათში",
    step4_text: "მიიღებთ შერჩეულ და პროფესიონალურად დამუშავებულ ფოტოებს.",

    before_label: "მანამდე",
    after_label: "შემდეგ"
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".language-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  localStorage.setItem("apartmarketing-language", lang);
}

document.querySelectorAll(".language-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("apartmarketing-language") || "ru";
setLanguage(savedLanguage);
