const firstly = ["Сегодня твой день, потому что", "Не забывай:", "Каждый шаг важен —"];
const secondly = ["вдохновение уже внутри тебя.","даже ошибка — это путь к успеху.", "маленький прогресс — тоже прогресс."];
const  thirdly = ["Действуй сейчас.","Улыбнись и иди вперёд.","Сделай хоть что-нибудь полезное."];


function getRandom(arr) {
   // return arr[Math.floor(Math.random() * arr.length)];
    return arr[Math.floor(Math.random() * arr.length)]
};

function Message() {
    const message = `${getRandom(firstly)} ${getRandom(secondly)} ${getRandom(thirdly)}`;
    console.log("\n🌟 Твоё послание на сегодня 🌟\n");
    console.log(message);
};



Message();


