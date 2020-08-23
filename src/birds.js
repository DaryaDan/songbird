import soundTajikistan from './media/tadzhikistan.mp3';
import soundSudan from './media/sudan.mp3';

const birdsData = [
  [
    {
      id: 1,
      name: 'Грузия',
      species: 'Тбилиси',
      description: 'Грузия — государство, расположенное в западной части Закавказья на восточном побережье Чёрного моря. Названия жителей: грузин, грузинка, грузины. Территория: 69 700 км². Население: 3 716 858 чел. Официальный язык: грузинский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Georgia_official.svg/1280px-Flag_of_Georgia_official.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/102/102-1.mp3'
    },
    {
      id: 2,
      name: 'Япония',
      species: 'Токио',
      description: 'Япония — островное государство в Восточной Азии. Названия жителей: японец, японка, японцы. Территория: 377 944 км². Население: 125 900 000 чел. Официальный язык:	японский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/77/77-1.mp3'
    },
    {
      id: 3,
      name: 'Китай',
      species: 'Пекин',
      description: 'Китай — государство в Восточной Азии. Названия жителей: китаец, китаянка, китайцы. Территория: 9 598 962 км². Население: 1 404 328 611 чел. Официальные языки: китайский, а также языки других народов Китая, в пределах автономий.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/36/36-1.mp3'
    },
    {
      id: 4,
      name: 'Индия',
      species: 'Нью-Дели',
      description: 'Индия — государство в Южной Азии. Названия жителей: индиец, индианка, индийцы. Территория: 3 287 263 км². Население: 1 372 242 000 чел. Официальные языки:	хинди, английский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/27/27-1.mp3'
    },
    {
      id: 5,
      name: 'Таджикистан',
      species: 'Душанбе',
      description: 'Таджикистан — государство в Центральной Азии, расположенное в предгорьях Памира и не имеющее выхода к морю. Названия жителей: таджик, таджичка, таджики. Территория: 141 400 км². Население: 9 126 600 чел. Официальный язык:	таджикский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1920px-Flag_of_Tajikistan.svg.png',
      audio: soundTajikistan
    },
    {
      id: 6,
      name: 'Республика Корея',
      species: 'Сеул',
      description: 'Республика Корея — государство в Восточной Азии, широко известное под неофициальным названием Южная Корея. Названия жителей: кореец, кореянка, корейцы. Территория: 100 210 км². Население: 51 732 586 чел. Официальный язык: корейский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/138/138-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Норвегия',
      species: 'Осло',
      description: 'Норвегия — государство в Северной Европе. Названия жителей: норвежец, норвежка, норвежцы. Территория: 385 207 км². Население: 5 367 580 чел. Официальные языки: норвежский (букмол и нюношк), на местном уровне — саамский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/48/48-1.mp3'
    },
    {
      id: 2,
      name: 'Ирландия',
      species: 'Дублин',
      description: 'Ирландия  — государство в Западной Европе, занимающее бо́льшую часть острова Ирландия. Названия жителей: ирландец, ирландка, ирландцы. Территория: 70 273 км². Население: 4 921 500 чел. Официальные языки: ирландский, английский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1920px-Flag_of_Ireland.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/87/87-1.mp3'
    },
    {
      id: 3,
      name: 'Нидерланды',
      species: 'Амстердам',
      description: 'Нидерланды — государство, состоящее из основной территории в Западной Европе. Названия жителей: нидерландец, нидерландка, нидерландцы. Территория: 41 543 км². Население: 17 333 790 чел. Официальный язык:	нидерландский, западнофризский (региональный).',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/118/118-1.mp3'
    },
    {
      id: 4,
      name: 'Литва',
      species: 'Вильнюс',
      description: 'Литва — государство, расположенное в северной части Европы. Названия жителей: литовец, литовка, литовцы. Территория: 65 301 км². Население: 2 794 472 чел. Официальный язык:	литовский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1920px-Flag_of_Lithuania.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/111/111-1.mp3'
    },
    {
      id: 5,
      name: 'Германия',
      species: 'Берлин',
      description: 'Германия — государство в Центральной Европе. Названия жителей: немец, немка, немцы. Территория: 357 385 км². Население: 83 019 200 чел. Официальный язык: немецкий.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/19/19-1.mp3'
    },
    {
      id: 6,
      name: 'Великобритания',
      species: 'Лондон',
      description: 'Великобритания  — островное государство на северо-западе от континентальной Европы. Названия жителей: британец, британка, британцы. Территория:	243 809 км². Население: 66 273 576 чел. Официальные языки: английский, валлийский, гэльский, скотс, корнский, ирландский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/13/13-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Украина',
      species: 'Киев',
      description: 'Украина — государство в Восточной и, частично, Центральной Европе. Названия жителей: украинец, украинка, украинцы. Территория: 603 549 км². Население: 41 806 221 чел. Официальный язык: украинский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/61/61-1.mp3'
    },
    {
      id: 2,
      name: 'Греция',
      species: 'Афины',
      description: 'Греция — государство в Южной Европе. Названия жителей: грек, гречанка, греки. Территория:	131 957 км². Население: 10 741 165 чел. Официальный язык: греческий.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/21/21-1.mp3'
    },
    {
      id: 3,
      name: 'Польша',
      species: 'Варшава',
      description: 'Польша — государство в Центральной Европе. Названия жителей: поляк, полька, поляки. Территория: 312 679 км². Население: 38 313 035 чел. Официальный язык: польский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/50/50-1.mp3'
    },
    {
      id: 4,
      name: 'Болгария',
      species: 'София',
      description: 'Болгария — государство в Юго-Восточной Европе, в восточной части Балканского полуострова, занимает 22 % его площади. Названия жителей: болгарин, болгарка, болгары. Территория: 110 993,6 км². Население: 6 951 482 чел. Официальный язык: болгарский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/10/10-1.mp3'
    },
    {
      id: 5,
      name: 'Беларусь',
      species: 'Минск',
      description: 'Беларусь — государство в Восточной Европе. Названия жителей: белорус, белоруска, белорусы. Территория: 207 600 км². Население: 9 475 174 чел. Официальные языки: белорусский, русский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg',
      audio: 'https://discoveric.ru/upload/anthem/7/7-1.mp3'
    },
    {
      id: 6,
      name: 'Италия',
      species: 'Рим',
      description: 'Италия — государство в Южной Европе, в центре Средиземноморья. Названия жителей: итальянец, итальянка, итальянцы. Территория: 301 340 км². Население: 60 588 366 чел. Официальный язык: итальянский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/31/31-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Соединённые Штаты Америки',
      species: 'Вашингтон',
      description: 'Соединённые Штаты Америки — государство в Северной Америке. Названия жителей: американец, американка, американцы. Территория: 9 519 431 км². Население: 328 915 700 чел. Официальный язык: американский английский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/78/78-1.mp3'
    },
    {
      id: 2,
      name: 'Мексика',
      species: 'Мехико',
      description: 'Мексика — государство в Северной Америке. Названия жителей: мексиканец, мексиканка, мексиканцы. Территория: 1 972 550 км². Население: 128 649 565 чел. Официальный язык: испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/85/85-1.mp3'
    },
    {
      id: 3,
      name: 'Ямайка',
      species: 'Кингстон',
      description: 'Ямайка — островное государство в составе Британского Содружества в Вест-Индии. Названия жителей: ямаец, ямайка, ямайцы. Территория: 10 991 км². Население: 2 930 050 чел. Официальные языки: английский (официальный), ямайский креольский, испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1920px-Flag_of_Jamaica.svg.png',
      audio: 'http://www.quizmasters.biz/DB/Audio/National%20Anthems/Mp3/Jamaica.mp3'
    },
    {
      id: 4,
      name: 'Панама',
      species: 'Панама',
      description: 'Панама, Республика Панама — является трансконтинентальным. Названия жителей: панамец, панамка, панамцы. Территория: 78 200 км². Население: 4 252 620 чел. Официальный язык: испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1280px-Flag_of_Panama.svg.png',
      audio: 'http://www.quizmasters.biz/DB/Audio/National%20Anthems/Mp3/Panama.mp3'
    },
    {
      id: 5,
      name: 'Куба',
      species: 'Гавана',
      description: 'Куба — островное государство в северной части Карибского моря. Названия жителей: кубинец, кубинка, кубинцы. Территория: 110 860 км². Население: 11 239 004 чел. Официальный язык: испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1920px-Flag_of_Cuba.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/38/38-1.mp3'
    },
    {
      id: 6,
      name: 'Канада',
      species: 'Оттава',
      description: 'Канада — государство в Северной Америке. Названия жителей: канадец, канадка, канадцы. Территория: 9 984 670 км². Население: 37 602 103 чел. Официальные языки: английский, французский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/82/82-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Перу',
      species: 'Лима',
      description: 'Перу — государство в Южной Америке. Названия жителей: перуанец, перуанка, перуанцы. Территория: 1 285 216 км². Население: 32 162 184 чел. Официальные языки: испанский, кечуа, аймара и другие местные языки.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1280px-Flag_of_Peru_%28state%29.svg.png',
      audio: 'http://www.quizmasters.biz/DB/Audio/National%20Anthems/Mp3/Peru.mp3'
    },
    {
      id: 2,
      name: 'Аргентина',
      species: 'Буэнос-Айрес',
      description: 'Аргентина — государство Южной Америки. Названия жителей: аргентинец, аргентинка, аргентинцы. Территория: 2 780 400 км². Население: 43 417 000 чел. Официальный язык: испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/6/6-1.mp3'
    },
    {
      id: 3,
      name: 'Бразилия',
      species: 'Бразилиа',
      description: 'Бразилия — суверенное государство в Южной Америке. Названия жителей: бразилец, бразильянка, бразильцы. Территория: 8 515 767 км². Население: 207 353 391 чел. Официальный язык: португальский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/12/12-1.mp3'
    },
    {
      id: 4,
      name: 'Венесуэла',
      species: 'Каракас',
      description: 'Венесуэла — государство на севере Южной Америки. Названия жителей: венесуэлец, венесуэлка, венесуэльцы. Территория: 916 445 км². Население: 32 606 000 чел. Официальный язык: испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/15/15-1.mp3'
    },
    {
      id: 5,
      name: 'Колумбия',
      species: 'Богота',
      description: 'Колумбия — государство на северо-западе Южной Америки, с территориями в Центральной Америке. Названия жителей: колумбиец, колумбийка, колумбийцы. Территория: 1 141 748 км². Население: 50 372 424 чел. Официальный язык: испанский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png',
      audio: 'http://www.quizmasters.biz/DB/Audio/National%20Anthems/Mp3/Colombia.mp3'
    },
    {
      id: 6,
      name: 'Боливия',
      species: 'Сукре',
      description: 'Боливия — государство в центральной части Южной Америки. Названия жителей: боливиец, боливийка, боливийцы. Территория: 1 098 581 км². Население: 11 217 865 чел. Официальные языки: испанский, кечуа, аймара, гуарани и ещё 33 языка.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1280px-Flag_of_Bolivia_%28state%29.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/11/11-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Марокко',
      species: 'Рабат',
      description: 'Марокко — государство в Северо-Западной Африке. Названия жителей: марокканец, марокканка, марокканцы. Территория: 710 850 км². Население: 33 848 242 чел. Официальные языки: арабский, французский, испанский, берберский, тамазигхт.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1280px-Flag_of_Morocco.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/46/46-1.mp3'
    },
    {
      id: 2,
      name: 'Египет',
      species: 'Каир',
      description: 'Египет — государство, расположенное в Северной Африке и на Синайском полуострове Азии. Названия жителей: египтянин, египтянка, египтяне. Территория: 1 001 450 км². Население: 100 704 000 чел. Официальный язык: арабский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/23/23-1.mp3'
    },
    {
      id: 3,
      name: 'Судан',
      species: 'Хартум',
      description: 'Судан — государство в Восточной Африке. Названия жителей: суданец, суданка, суданцы. Территория: 1 886 068 км². Население: 39 578 828 чел. Официальные языки: арабский, английский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1920px-Flag_of_Sudan.svg.png',
      audio: soundSudan
    },
    {
      id: 4,
      name: 'Алжир',
      species: 'Алжир',
      description: 'Алжир — государство в Северной Африке в западной части Средиземноморского бассейна. Названия жителей: алжирец, алжирка, алжирцы. Территория: 2 381 740 км². Население: 40 400 000 чел. Официальные языки: арабский, берберский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/4/4-1.mp3'
    },
    {
      id: 5,
      name: 'Эфиопия',
      species: 'Аддис-Абеба',
      description: 'Эфиопия — государство в Восточной Африке. Названия жителей: эфиоп, эфиопка, эфиопы. Территория: 1 104 300 км². Население: 102 403 196 чел. Официальный язык: амхарский язык.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1920px-Flag_of_Ethiopia.svg.png',
      audio: 'https://discoveric.ru/upload/anthem/71/71-1.mp3'
    },
    {
      id: 6,
      name: 'Ливия',
      species: 'Триполи',
      description: 'Ливия — государство в Северной Африке на побережье Средиземного моря. Названия жителей: ливийцы, ливиец, ливийка. Территория: 1 759 541 км². Население: 7 200 000 чел. Официальный язык: арабский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1920px-Flag_of_Libya.svg.png',
      audio: 'http://www.quizmasters.biz/DB/Audio/National%20Anthems/Mp3/Libya.mp3'
    }
  ]
];

export default birdsData;
