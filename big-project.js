const firstly = ["Today is your day because", "Don't forget:", "Every step matters –"];
const secondly = ["inspiration is already within you.", "even a mistake is part of success.", "small progress is still progress."];
const thirdly = ["Take action now.", "Smile and move forward.", "Do something useful."];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function Message() {
    const message = `${getRandom(firstly)} ${getRandom(secondly)} ${getRandom(thirdly)}`;
    console.log("\n🌟 Your message for today 🌟\n");
    console.log(message);
}

Message();
