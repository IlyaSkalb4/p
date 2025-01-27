import { Category } from "../category";

const animated: Category = { name: 'Анімаційні' };
const comedies: Category = { name: 'Комедії' };
const adventures: Category = { name: 'Пригоди' };
const superhero: Category = { name: 'Супергерої' };
const fairyTale: Category = { name: 'Казкові' };
const educational: Category = { name: 'Освітні' };
const dramas: Category = { name: 'Драми' };
const blockbuster: Category = { name: 'Блокбастери' };
const actionThrillers: Category = { name: 'Бойовики' };
const romantic: Category = { name: 'Романтичні' };
const indie: Category = { name: 'Інді' };
const anime: Category = { name: 'Аніме' };

const familyConcerts: Category = { name: 'Сімейні' };
const holidayConcerts: Category = { name: 'Святкові' };
const kidFriendlyConcerts: Category = { name: 'Дружні для дітей' };
const characterShows: Category = { name: 'Шоу персонажів' };
const rockConcerts: Category = { name: 'Рок' };
const jazzNights: Category = { name: 'Джазові вечори' };

const musicals: Category = { name: 'Мюзикли' };
const interactivePlays: Category = { name: 'Інтерактивні вистави' };
const theatre: Category = { name: 'Театр' };
const dramatic: Category = { name: 'Драматичні' };
const comedyShows: Category = { name: 'Комедійні шоу' };

const cartoons: Category = {
  name: 'Мультфільми',
  parentCategory: undefined,
};

const films: Category = {
  name: 'Фільми',
  parentCategory: undefined,
};

const concerts: Category = {
  name: 'Концерти',
  parentCategory: undefined,
};

const plays: Category = {
  name: 'Вистави',
  parentCategory: undefined,
};

animated.parentCategory = cartoons;
comedies.parentCategory = cartoons;
adventures.parentCategory = cartoons;

superhero.parentCategory = films;
fairyTale.parentCategory = films;
educational.parentCategory = films;
dramas.parentCategory = films;
blockbuster.parentCategory = films;
actionThrillers.parentCategory = films;
romantic.parentCategory = films;
indie.parentCategory = films;
anime.parentCategory = cartoons;

familyConcerts.parentCategory = concerts;
holidayConcerts.parentCategory = concerts;
kidFriendlyConcerts.parentCategory = concerts;
characterShows.parentCategory = concerts;
rockConcerts.parentCategory = concerts;
jazzNights.parentCategory = concerts;

musicals.parentCategory = plays;
interactivePlays.parentCategory = plays;
theatre.parentCategory = plays;
dramatic.parentCategory = plays;
comedyShows.parentCategory = plays;

const forAllAges: Category = {
  name: 'Для всіх вікових груп',
  parentCategory: undefined,
};

const forChildren: Category = {
  name: 'Для дітей',
  parentCategory: undefined,
};

const forAdults: Category = {
  name: 'Для дорослих',
  parentCategory: undefined,
};

concerts.parentCategory = forAllAges;
films.parentCategory = forAllAges;
cartoons.parentCategory = forAllAges;
plays.parentCategory = forAllAges;

concerts.parentCategory = forChildren;
films.parentCategory = forChildren;
cartoons.parentCategory = forChildren;
plays.parentCategory = forChildren;

concerts.parentCategory = forAdults;
films.parentCategory = forAdults;
cartoons.parentCategory = forAdults;
plays.parentCategory = forAdults;

export const CATEGORIES: Category[] = [
  forAllAges,
  forChildren,
  forAdults,
  concerts,
  films,
  cartoons,
  plays,
  animated,
  comedies,
  adventures,
  superhero,
  fairyTale,
  educational,
  dramas,
  blockbuster,
  actionThrillers,
  romantic,
  indie,
  anime,
  familyConcerts,
  holidayConcerts,
  kidFriendlyConcerts,
  characterShows,
  rockConcerts,
  jazzNights,
  musicals,
  interactivePlays,
  theatre,
  dramatic,
  comedyShows,
];
