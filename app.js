// Задание - 1
var evangelion = {

    genre: 'Аниме, психология, драма.',

    name: 'Эвангелион',

    original_name: 'Neon Genesis Evangelion',

    age_rating: '16 +',

    releaseData: '1996',

    mainActor: 'Синдзи Икари, Аска Лэнгли, Аянами Рей.',

    narration: 'Человечество практически уничтожено некой неземной силой, известной как Ангелы.' +
        ' Остатки людской \nрасы из организации NERV отчаянно ищут способы защитить планету от угрозы,' +
        ' создавая гигантских \nбиороботов под кодовым названием «Евы». Управлять ими могут лишь подростки,' +
        ' да и то не все - только \nсамые совместимые. Глава проекта Гендо Икари вызывает в штаб своего сына Синдзи,' +
        ' чтобы тот стал \nпилотом новой модели. На плечи юноши возлагается огромная ответственность за судьбу мира,' +
        ' при этом \nсам мир как будто бы настроен против него.\n' +
        '«Евангелион» - не просто классика, а признанный шедевр японской анимации,' +
        ' который вывел аниме на \nновую ступень развития не только по качеству изображения,' +
        ' но и по обилию тонкостей, отсылок и \nпсихологизмов, по праву заняв свою нишу в списке лучших аниме-тайтлов всех времён.',

    episodes: {
        season_1: {
            number_of_episodes: '26 серий',
            series_1: {
                series1_name: 'Нападение Ангелов'
            },
            series_2: {
                series2_name: 'Зверь'
            },
            series_3: {
                series3_name: 'Перевод'
            },
            series_4: {
                series4_name: 'Дилемма дикобразов'
            },
            series_5: {
                series5_name: 'Рэй I'
            },
            series_6: {
                series6_name: 'Рэй II'
            },
            series_7: {
                series7_name: 'Созданный людьми'
            },
            series_8: {
                series8_name: 'Аска наносит удар!'
            },
            series_9: {
                series9_name: 'Вы, двое, танцуйте, если хотите победить!'
            },
            series_10: {
                series10_name: 'Погружение в магму'
            },
            series_11: {
              series11_name: 'День, когда Токио-3 замер',
            },
            series_12: {
                series12_name: 'Не заставляй других страдать из-за твоей ненависти - сказала она'
            },
            series_13: {
                series13_name: 'Мелкая неприятность'
            },
            series_14: {
                series14_name: 'Ткань повествования'
            },
            series_15: {
                series15_name: 'Я известная как Аянами Рей'
            },
            series_16: {
                series16_name: 'Раздвоение души'
            },
            series_17: {
                series17_name: 'Четвёртое дитя'
            },
            series_18: {
                series18_name: 'Противоположность'
            },
            series_19: {
                series19_name: 'Интроекция'
            },
            series_20: {
                series20_name: 'Ткань повествования - рассказ'
            },
            series_21: {
                series21_name: 'Он понимал, что он ещё ребёнок'
            },
            series_22: {
              series22_name: 'Не будь',
            },
            series_23: {
                series23_name: 'Рэй III'
            },
            series_24: {
              series24_name: 'Начало и конец, или «Достучаться до небес»',
            },
            series_25: {
                series25_name: 'Пустота'
            },
            series_26: {
              series26_name: 'Береги себя',
            },
        },
        evangelion_movie: 'Конец Евангелиона'
    }
}

console.log('Сериал - ' + evangelion.name + '\nОригинальное название: ' + evangelion.original_name
    + '\nЖанр произведения: ' + evangelion.genre + ' \nбыл выпущен: ' + evangelion.releaseData + ' года. '
    + '\nВозрастной рейтинг: ' + evangelion.age_rating + '\nВ главных ролях: ' + evangelion.mainActor + '\n'
    + evangelion.name + ' - ' + evangelion.episodes.season_1.number_of_episodes
    + '\n' + '\nПовествование о сериале: \n' + evangelion.narration)


// Задание - 2
var week = prompt('Введите название дня недели - ');

switch (week){
    case 'Monday':
    case 'monday':
        console.log('День недели - Понедельник')
        break;
    case 'Tuesday':
    case 'tuesday':
        console.log('День недели - Вторник')
        break;
    case 'Wednesday':
    case 'wednesday':
        console.log('День недели - Среда')
        break;
    case 'Thursday':
    case 'thursday':
        console.log('День недели - Четверг')
        break;
    case 'Friday':
    case 'friday':
        console.log('День недели - Пятница')
        break;
    case 'Saturday':
    case 'saturday':
        console.log('День недели - Суббота')
        break;
    case 'Sunday':
    case 'sunday':
        console.log('День недели - Воскресенье')
        break;
    default:
        console.log('Вы неправильно ввели день месяца!')
}