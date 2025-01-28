import { EventMeet } from "../event-meet";

export const EVENTS: Array<EventMeet[]> = [
  [
    {
      id: 1,
      name: "avatar-the-way-of-water",
      title: "Аватар: Шлях Води",
      categories: ["Фільми", "Блокбастери", "Для всіх"],
      poster: "assets/movie-posters/avatar-the-way-of-water.jpg",
      addressOfEvent: "Кінотеатр, Зал 5",
      dateTimeOfEvent: new Date("2025-02-10T19:00:00"),
      shortDescription: "Епічний фантастичний сиквел до фільму Джеймса Кемерона 'Аватар'.",
      description: "Пориньте у дивовижний світ Пандори в цьому довгоочікуваному продовженні."
    },
    {
      id: 101,
      name: "standup-show",
      title: "Ніч Стендап Комедії",
      categories: ["Вистави", "Комедійні шоу", "Для дорослих"],
      poster: "assets/performance-posters/performance-2.webp",
      addressOfEvent: "Гранд Театр, Зал 3",
      dateTimeOfEvent: new Date("2025-02-11T20:00:00"),
      shortDescription: "Вечір, наповнений сміхом та дотепністю.",
      description: "Насолоджуйтесь виступом найкращих коміків у розслабленій атмосфері."
    },
    {
      id: 201,
      name: "musical-orchestra",
      title: "Жива Оркестрова Музика",
      categories: ["Концерти", "Класичні", "Для всіх"],
      poster: "assets/concert-posters/concert-1.jpg",
      addressOfEvent: "Міський Концертний Зал",
      dateTimeOfEvent: new Date("2025-02-12T18:00:00"),
      shortDescription: "Класичний музичний вечір з живим оркестром.",
      description: "Пориньте у світ класичної музики, виконаної оркестром світового рівня."
    }
  ],
  [
    // Movies
    {
      id: 1,
      name: "avatar-the-way-of-water",
      title: "Аватар: Шлях Води",
      categories: ["Фільми", "Блокбастери", "Для всіх"],
      poster: "assets/movie-posters/avatar-the-way-of-water.jpg",
      addressOfEvent: "Кінотеатр, Зал 5",
      dateTimeOfEvent: new Date("2025-02-10T19:00:00"),
      shortDescription: "Епічний фантастичний сиквел до фільму Джеймса Кемерона 'Аватар'.",
      description: "Пориньте у дивовижний світ Пандори в цьому довгоочікуваному продовженні."
    },
    {
      id: 2,
      name: "elvis",
      title: "Елвіс",
      categories: ["Фільми", "Біографічні", "Для дорослих"],
      poster: "assets/movie-posters/elvis.jpg",
      addressOfEvent: "Кінотеатр, Зал 3",
      dateTimeOfEvent: new Date("2025-02-14T18:30:00"),
      shortDescription: "Біографічна драма про життя Елвіса Преслі.",
      description: "Пориньте у життя та музику Короля рок-н-ролу."
    },
    {
      id: 3,
      name: "encanto",
      title: "Енканто",
      categories: ["Фільми", "Мультфільми", "Сімейні", "Для дітей"],
      poster: "assets/movie-posters/encanto-all-ages.jpg",
      addressOfEvent: "Кінотеатр, Зал 2",
      dateTimeOfEvent: new Date("2025-02-15T16:00:00"),
      shortDescription: "Магічна історія про сім'ю з надзвичайними здібностями.",
      description: "Відкрийте для себе магію родини Мадригал у цьому чарівному мультфільмі."
    },
    {
      id: 4,
      name: "guillermo-del-toros-pinocchio",
      title: "Піноккіо Гільєрмо дель Торо",
      categories: ["Фільми", "Мультфільми", "Казкові", "Для всіх"],
      poster: "assets/movie-posters/guillermo-del-toro's-Pinocchio.jpg",
      addressOfEvent: "Кінотеатр, Зал 4",
      dateTimeOfEvent: new Date("2025-02-16T17:00:00"),
      shortDescription: "Темна переосмислення класичної казки про Піноккіо.",
      description: "Дослідіть унікальну розповідь Гільєрмо дель Торо у цьому шедеврі."
    },
    {
      id: 5,
      name: "top-gun-maverick",
      title: "Топ Ган: Меверік",
      categories: ["Фільми", "Екшн", "Для дорослих"],
      poster: "assets/movie-posters/top-gun-maverick.jpg",
      addressOfEvent: "Кінотеатр, Зал 1",
      dateTimeOfEvent: new Date("2025-02-17T20:00:00"),
      shortDescription: "Захопливе продовження культового фільму 'Топ Ган'.",
      description: "Приєднуйтесь до Меверіка у новій високошвидкісній пригоді."
    },
    {
      id: 6,
      name: "the-whale",
      title: "Кит",
      categories: ["Фільми", "Драми", "Для дорослих"],
      poster: "assets/movie-posters/the-whale-adult.jpg",
      addressOfEvent: "Кінотеатр, Зал 6",
      dateTimeOfEvent: new Date("2025-02-18T19:00:00"),
      shortDescription: "Глибока історія про особисті труднощі та спокути.",
      description: "Брендан Фрейзер грає в цій емоційній і трансформаційній драмі."
    },
    {
      id: 7,
      name: "minions-2022",
      title: "Посіпаки: Становлення Грю",
      categories: ["Фільми", "Мультфільми", "Комедії", "Для дітей"],
      poster: "assets/movie-posters/minions2022-all-ages.jpg",
      addressOfEvent: "Кінотеатр, Зал 7",
      dateTimeOfEvent: new Date("2025-02-19T14:30:00"),
      shortDescription: "Кумедна історія про походження Грю та його Посіпаків.",
      description: "Смійтеся разом із неслухняними Посіпаками у їхній новій пригоді."
    },
    {
      id: 8,
      name: "puss-in-boots-children",
      title: "Кіт у Чоботях: Останнє Бажання",
      categories: ["Фільми", "Мультфільми", "Пригоди", "Для дітей"],
      poster: "assets/movie-posters/puss-in-boots-children.jpg",
      addressOfEvent: "Кінотеатр, Зал 8",
      dateTimeOfEvent: new Date("2025-02-20T15:00:00"),
      shortDescription: "Сміливі та кумедні витівки Кота у Чоботях тривають.",
      description: "Приєднуйтесь до Кота у Чоботях у пошуках міфічного Останнього Бажання."
    },
    {
      id: 9,
      name: "the-fabelman",
      title: "Фабельмани",
      categories: ["Фільми", "Драми", "Для дорослих"],
      poster: "assets/movie-posters/the-fabelmans-adult.jpg",
      addressOfEvent: "Кінотеатр, Зал 9",
      dateTimeOfEvent: new Date("2025-02-21T18:30:00"),
      shortDescription: "Сімейна історія з автобіографічними елементами від Стівена Спілберга.",
      description: "Дивовижна подорож до світу кіно через призму юності режисера."
    },

    // Concerts
    {
      id: 201,
      name: "musical-orchestra",
      title: "Живий Музичний Оркестр",
      categories: ["Концерти", "Класичні"],
      poster: "assets/concert-posters/concert-1.jpg",
      addressOfEvent: "Міський Концертний Зал",
      dateTimeOfEvent: new Date("2025-02-12T18:00:00"),
      shortDescription: "Вечір класичної музики з живим оркестром.",
      description: "Пориньте у світ класичної музики у виконанні оркестру світового рівня."
    },
    {
      id: 202,
      name: "musical-night",
      title: "Великий Mузичний Вечір",
      categories: ["Концерти", "Мюзикли"],
      poster: "assets/concert-posters/concert-2.jpg",
      addressOfEvent: "Театр Бродвей",
      dateTimeOfEvent: new Date("2025-02-18T19:30:00"),
      shortDescription: "Феєричний вечір мюзиклів у стилі Бродвею.",
      description: "Відчуйте магію музичного театру на яскравих виставах."
    },

    // Performances
    {
      id: 101,
      name: "standup-show",
      title: "Ніч Стендап Комедії",
      categories: ["Вистави", "Комедійні шоу", "Для дорослих"],
      poster: "assets/performance-posters/performance-2.webp",
      addressOfEvent: "Гранд Театр, Зал 3",
      dateTimeOfEvent: new Date("2025-02-11T20:00:00"),
      shortDescription: "Вечір, наповнений сміхом та дотепністю.",
      description: "Насолоджуйтесь виступом найкращих коміків у розслабленій атмосфері."
    },
    {
      id: 102,
      name: "street-tricks",
      title: "Шоу Вуличних Трюків",
      categories: ["Вистави", "Сучасні"],
      poster: "assets/performance-posters/performance-1.avif",
      addressOfEvent: "Сцена Під Відкритим Небом",
      dateTimeOfEvent: new Date("2025-02-19T17:00:00"),
      shortDescription: "Запальний перфоманс із сучасних вуличних трюків і трюків.",
      description: "Відчуйте енергію та творчість вуличних артистів у цьому унікальному шоукейсі."
    }
  ]
];
