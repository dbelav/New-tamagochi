let interval;
let time = 0;
let live;
let cheking;
let rand;
let font = 22;
let imageChildren = Array.from(document.querySelector('.image').children)

let robert = {
    food: 0,
    clean: 0,
    happy: 0,
    health: 0,
    socialization: 0,
    money: 0,
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

function mood() {
    imageChildren.forEach(e => {
        e.style.display = 'none';
    })
    for (let s in robert) {
        if (robert[s] === robert.food && robert.food <= 30) {
            imageChildren[0].style.display = 'block';
        }
        if (robert[s] === robert.clean && robert.clean <= 30) {
            imageChildren[1].style.display = 'block';
        }
        if (robert[s] === robert.happy && robert.happy <= 30) {
            imageChildren[2].style.display = 'block';
        }
        if (robert[s] === robert.health && robert.health <= 30) {
            imageChildren[3].style.display = 'block';
        }
        if (robert[s] === robert.socialization && robert.socialization <= 30) {
            console.log('asdds')
            imageChildren[4].style.display = 'block';
        }
        if (robert[s] === robert.money && robert.money <= 30) {
            imageChildren[5].style.display = 'block';
        }
    }
};

function mode(stats) {
    for (let key in robert) {
        robert[key] -= stats;
    }
}

function check(arg) {
    for (let key in robert) {
        if (robert[key] <= 0) {
            clearTimeout(interval);
            robert[key] = 0;
            robert = {
                food: 0,
                clean: 0,
                happy: 0,
                health: 0,
                socialization: 0,
                money: 0,
            };
            lose()
        }
        if (robert[key] > 100) {
            robert[key] = 100;
        }else if(arg){

        }
    }
    mood();
    output();
}

function asdd(arg){
    if(arg){
        console.log(arg)
    }
}
asdd(123)

function lose() {
    let loseMenu = document.querySelector('.lose')
    clearTimeout(live);
    clearTimeout(cheking);
    imageChildren.forEach(e => {
        e.style.visibility = 'hidden';
    })
    loseMenu.style.display = 'flex';
    restart.style.display = 'block'

    setInterval(() => {
        font += 0.5
        loseMenu.style.fontSize = `${font}px`
    }, 25);
}

function timeLived() {
    time++;
    document.getElementById('time').innerHTML = `Time: ${time}s`;
}

function random(min, max) {
    for (let key in robert) {
        robert[key] += Math.floor(Math.random() * (+max - +min)) + min;
    }
}

function output() {
    document.getElementById('food').innerHTML = `food: ${robert.food} `;
    document.getElementById('clean').innerHTML = `clean: ${robert.clean}`;
    document.getElementById('happy').innerHTML = `happy: ${robert.happy}`;
    document.getElementById('health').innerHTML = `health: ${robert.health}`;
    document.getElementById('socialization').innerHTML = `socialization: ${robert.socialization}`;
    document.getElementById('money').innerHTML = `money: ${robert.money}`;
}

function displayStartMenu() {
    let startMenu = document.querySelector('.mode');
    startMenu.style.display = 'none';
}

let clickFluffy = document.getElementById('easy');
clickFluffy.addEventListener('click', function() {
    displayStartMenu()
    random(50, 100);
    check();
    interval = setInterval(function() {
        mode(1);
        check();
    }, 5000);
    live = setInterval(timeLived, 1000);
});

let clickLazy = document.getElementById('hard');
clickLazy.addEventListener('click', function() {
    displayStartMenu()
    random(50, 70);
    check();
    interval = setInterval(function() {
        mode(5);
        check();
    }, 5000);
    live = setInterval(timeLived, 1000);
});


let clickNinja = document.getElementById('ninja');
clickNinja.addEventListener('click', function() {
    displayStartMenu()
    random(50, 150);
    startBusiness.style.display = 'block';
    check();
    interval = setInterval(function() {
        mode(10);
        check(5);
    }, 5000);
    live = setInterval(timeLived, 1000);
});


let clickEat = document.getElementById('eat');
clickEat.addEventListener('click', function() {
    robert.food += 40;
    robert.clean -= 30;
    check();
});

let clickWash = document.getElementById('wash');
clickWash.addEventListener('click', function() {
    robert.clean += 40;
    robert.happy -= 20;
    check();
});

let clickHappy = document.getElementById('run');
clickHappy.addEventListener('click', function() {
    robert.happy += 15;
    robert.food -= 10;
    check();
});

let visitDoctor = document.getElementById('doctor');
visitDoctor.addEventListener('click', function() {
    robert.health += 30;
    robert.money -= 20;
    check();
});

let goBar = document.getElementById('bar');
goBar.addEventListener('click', function() {
    robert.socialization += 40;
    robert.money -= 20;
    robert.food += 10;
    robert.health -= 10;
    check();
});

let goWork = document.getElementById('work');
goWork.addEventListener('click', function() {
    robert.socialization -= 20;
    robert.money += 50;
    robert.food -= 10;
    robert.health -= 10;
    check();
});

let startBusiness = document.getElementById('buisness');
startBusiness.style.display = 'none'
startBusiness.addEventListener('click', function() {
    robert.socialization += 20;
    robert.money += 100;
    robert.health -= 100;
    robert.happy += 100;
    check();
});

let kill = document.getElementById('kill');
kill.addEventListener('click', function() {
    let gretta = document.querySelector('.gretta');
    let cont = document.querySelector('.container');
    let grettaText = document.querySelector('.gretta>span');
    cont.style.visibility = 'hidden';
    gretta.style.visibility = 'visible';
    gretta.style.left = '50%';
    gretta.addEventListener('transitionend', () => {
        gretta.style.backgroundColor = 'rgba(255, 0, 0, 0.76)';
        grettaText.style.display = 'inline';
    })
});

let restart = document.getElementById('restart');
restart.addEventListener('click', function() {
    location.reload();
});