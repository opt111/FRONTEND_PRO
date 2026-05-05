let age = prompt('В якому році ви народились?');
let city = prompt('В якому місті ви живете?');
let sport = prompt('Який ваший улюблений вид спорту?');

if (age === null) {
  age = 'Шкода, що Ви не захотіли ввести свій рік народження';
} else {
  age = `Тобі ${2026 - age} років`;
}

switch (city) {
  case 'Київ':
    city = 'Ти живеш у столиці Київ';
    break
  case 'Лондон':
    city = 'Ти живеш у столиці Лондон';
    break
  case 'Вашингтон':
    city = 'Ти живеш у столиці Вашингтон';
    break
  case null:
    city = 'Шкода, що Ви не захотіли ввести своє місто.';
    break
  default:
    city = `Ти живеш в ${city}`;
}

switch (sport) {
  case 'Бокс':
    sport = 'Круто! Хочеш стати Усиком?))';
    break
  case 'Футбол':
    sport = 'Круто! Хочеш стати Мессі?))';
    break
  case 'Біг':
    sport = 'Круто! Хочеш стати Усейном Болтом?))';
    break
  case null:
    sport = 'Шкода, що Ви не захотіли ввести свій(ю) вид спорту';
    break
  default:
    sport = `Твій улюблений вид спорту ${sport}`;

}

alert(`${age} ${city} ${sport}`);