// Словарь переводов
const translations = {
    ru: {
        logo_text: "WORDPRESS ИНТЕНСИВ",
        title_1: "СОЗДАТЬ СВОЙ САЙТ НА WORDPRESS",
        title_2: "ЭТО ПРОСТО!",
        title_3: "КУДА СЛОЖНЕЕ СДЕЛАТЬ ЭТО ПРАВИЛЬНО!",
        desc: "Ежедневно в России появляется более 5 000 новых сайтов.<br>И только единицы из них становятся популярными и приносят ощутимую прибыль. В чем секрет? В чем формула успеха? Узнайте на предстоящем двухдневном <span class=\"orange-bold\">БЕСПЛАТНОМ</span> интенсиве!",
        btn_register: "ЗАПИСАТЬСЯ НА ИНТЕНСИВ!",
        more_link: "УЗНАТЬ БОЛЬШЕ ОБ ИНТЕНСИВЕ",
        waiting_title: "ЧТО ВАС ЖДЕТ В НАШЕМ ИНТЕНСИВЕ?",
        waiting_subtitle: "2 бесплатных полноценных обучающих вебинара, где:",
        waiting_item_1: "Всего за 2 дня вы узнаете всю базовую информацию о верстке, настройках и продвижении вашего собственного сайта на WordPress!",
        waiting_item_2: "Создадите свой сайт и сделаете его привлекательным для поисковых систем (SEO), настроив базовые параметры индексации.",
        waiting_item_3: "Получите пошаговый алгоритм, как обойти конкурентов и обеспечить стабильный прирост новых посетителей и клиентов!",
        opt_title: "ЧТО ТАКОЕ ОПТИМИЗАЦИЯ И ЗАЧЕМ ОНА НУЖНА?",
        opt_text_1: "На просторах интернета несчетное количество действующих и даже заброшенных сайтов. Большинство из них совпадает не только по категориям, но и по содержанию.",
        opt_text_2: "Представьте себе тысячи сайтов, на которых тем или иным образом предоставляется одна и та же информация или продается одна и та же услуга. И попасть на эти сайты можно лишь по тематическим запросам в поисковых системах.",
        opt_text_3: "Но как вам быть, если ваш сайт похож на сотню или тысячу таких же, а на одной странице гугла или яндекса всего 10 позиций? Как привести посетителей страницы своего ресурса?<br>Именно для этого и нужна оптимизация — для вывода вашего сайта на первую страницу поиска!",
        opt_text_4: "Мы научим вас, как сделать ваш сайт привлекательным для поисковых систем и посоветуем, как вывести его на первые страницы, обходя всех конкурентов.",
        finish_title: "ПО ОКОНЧАНИИ ОБУЧЕНИЯ ВЫ СМОЖЕТЕ!",
        finish_1: "Создать свой сайт или блог",
        finish_2: "Правильно оптимизировать свой сайт на WordPress",
        finish_3: "Обеспечить ему постоянный, но верный рост позиции в ТОП",
        finish_4: "Достигнуть стабильного прироста посетителей и целевых клиентов",
        finish_5: "Получать ощутимую постоянную прибыль от своего проекта",
        gift_text: "Для всех участников интенсива предусмотрены бонусы и подарки. Нажимайте на кнопку ниже, принимайте участие в вебинарах и забирайте свой приз по окончании обучения!",
        date_title: "ПЕРВЫЙ ВЕБИНАР СОСТОИТСЯ:",
        date_highlight: "10 СЕНТЯБРЯ В 20:00 ПО МОСКВЕ",
        date_subtitle: "Успейте записаться, количество мест ограничено!",
        footer_support: "Служба поддержки",
        footer_privacy: "Политика конфиденциальности",
        footer_call: "Позвоните нам: 8-800-000-00-00"
    },
    en: {
        logo_text: "WORDPRESS INTENSIVE",
        title_1: "CREATE YOUR WEBSITE ON WORDPRESS",
        title_2: "IT'S EASY!",
        title_3: "IT'S MUCH HARDER TO DO IT RIGHT!",
        desc: "Every day thousands of new websites appear.<br>Only a few become popular and profitable. Learn how to do it at our free 2-day intensive course!",
        btn_register: "REGISTER FOR INTENSIVE!",
        more_link: "LEARN MORE ABOUT INTENSIVE",
        waiting_title: "WHAT AWAITS YOU IN OUR INTENSIVE?",
        waiting_subtitle: "2 full free webinars, where:",
        waiting_item_1: "In just 2 days you will learn basic layout, settings, and SEO promotion for WordPress!",
        waiting_item_2: "Create your own site and make it attractive for search engines.",
        waiting_item_3: "Get a step-by-step algorithm to beat competitors and grow your traffic!",
        opt_title: "WHAT IS OPTIMIZATION AND WHY DO YOU NEED IT?",
        opt_text_1: "There are millions of active and abandoned websites online.",
        opt_text_2: "Imagine thousands of sites offering similar products or services. Search engines show only 10 positions per page.",
        opt_text_3: "How to bring visitors to your page? Optimization helps your site get to the first page of search results!",
        opt_text_4: "We will teach you how to make your website attractive to search engines and beat competitors.",
        finish_title: "AFTER COMPLETING THE COURSE YOU WILL BE ABLE TO!",
        finish_1: "Create your own website or blog",
        finish_2: "Optimize your WordPress site correctly",
        finish_3: "Ensure steady growth to top rankings",
        finish_4: "Achieve stable growth in visitors and clients",
        finish_5: "Get constant profit from your online project",
        gift_text: "Bonuses and gifts for all participants. Click below, join the webinars, and claim your prize!",
        date_title: "FIRST WEBINAR STARTS:",
        date_highlight: "SEPTEMBER 10 AT 20:00 MOSCOW TIME",
        date_subtitle: "Hurry up, limited seats available!",
        footer_support: "Support Service",
        footer_privacy: "Privacy Policy",
        footer_call: "Call us: 8-800-000-00-00"
    },
    kk: {
        logo_text: "WORDPRESS ИНТЕНСИВІ",
        title_1: "WORDPRESS-ТЕ ӨЗ САЙТЫҢЫЗДЫ ЖАСАУ",
        title_2: "БҰЛ ОҢАЙ!",
        title_3: "ОНЫ ДҰРЫС ЖАСАУ ӘЛДЕҚАЙДА ҚИЫНЫРАҚ!",
        desc: "Күн сайын мыңдаған жаңа сайттар пайда болады.<br>Тек саусақпен санарлығы ғана танымал болып, пайда әкеледі. 2 күндік <span class=\"orange-bold\">ТЕГІН</span> интенсивте мұның сырын біліңіз!",
        btn_register: "ИНТЕНСИВКЕ ЖАЗЫЛУ!",
        more_link: "ИНТЕНСИВ ТУРАЛЫ КӨБІРЕК БІЛУ",
        waiting_title: "БІЗДІҢ ИНТЕНСИВТЕ СІЗДІ НЕ КҮТЕДІ?",
        waiting_subtitle: "2 тегін толыққанды оқыту вебинары, онда:",
        waiting_item_1: "Бары-жоғы 2 күн ішінде сіз WordPress-те сайт жасау және жылжыту туралы ақпарат аласыз!",
        waiting_item_2: "Өз сайтыңызды жасап, оны іздеу жүйелері үшін (SEO) тартымды етесіз.",
        waiting_item_3: "Бәсекелестерді басып озып, клиенттер ағынын қамтамасыз ету алгоритмін аласыз!",
        opt_title: "ОПТИМИЗАЦИЯ ДЕГЕН НЕ ЖӘНЕ ОЛ НЕ ҮШІН ҚАЖЕТ?",
        opt_text_1: "Интернетте жұмыс істеп тұрған және тасталған сайттар өте көп.",
        opt_text_2: "Бірдей ақпарат ұсынатын мыңдаған сайттарды елестетіңіз. Ал іздеу жүйесінің бір бетінде тек 10 орын бар.",
        opt_text_3: "Өз сайтыңызға келушілерді қалай тартуға болады? Оптимизация дәл осы үшін — сайтты іздеудің бірінші бетіне шығару үшін қажет!",
        opt_text_4: "Біз сізге сайтыңызды іздеу жүйелері үшін тартымды етуді үйретеміз.",
        finish_title: "ОҚУДЫ АЯҚТАҒАН СОҢ СІЗ МҰНЫ ІСТЕЙ АЛАСЫЗ!",
        finish_1: "Өз сайтыңызды немесе блогыңызды жасау",
        finish_2: "WordPress-тегі сайтты дұрыс оптимизациялау",
        finish_3: "ТОП позицияларға тұрақты өсуді қамтамасыз ету",
        finish_4: "Тұрақты келушілер мен клиенттер ағынына жету",
        finish_5: "Жобаңыздан тұрақты пайда алу",
        gift_text: "Барлық қатысушыларға бонустар мен сыйлықтар қарастырылған. Төмендегі батырманы басып, жүлдеңізді алыңыз!",
        date_title: "БІРІНШІ ВЕБИНАР ӨТЕДІ:",
        date_highlight: "10 ҚЫРКУЙЕК САТ 20:00 МӘСКЕУ УАҚЫТЫМЕН",
        date_subtitle: "Үлгеріп жазылыңыз, орындар шектеулі!",
        footer_support: "Қолдау қызметі",
        footer_privacy: "Құпиялылық саясаты",
        footer_call: "Бізге қоңырау шалыңыз: 8-800-000-00-00"
    }
};

// Запуск кода после полной загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Логика переключения языков
    const langButtons = document.querySelectorAll('[data-lang-btn]');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-btn');

            // Подсвечиваем активную кнопку
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Подменяем текст элементов по data-key
            document.querySelectorAll('[data-key]').forEach(elem => {
                const key = elem.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    elem.innerHTML = translations[lang][key];
                }
            });
        });
    });

    // 2. Логика кнопки «Наверх»
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        window.onscroll = function () {
            // Показываем кнопку, только когда прокрутили дальше 300 пикселей
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Плавный скролл наверх
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});