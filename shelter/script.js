//menu burger

const burger = document.querySelector('.burger');

if (burger) {
    const navigation = document.querySelector('.header__navigation');
    const navigationUl = document.querySelector ('.navigation');
    const burger = document.querySelector('.burger');
    const body = document.querySelector('body');

    burger.addEventListener ('click', function (e) {
        navigation.classList.toggle('open');
        navigationUl.classList.toggle('open');
        burger.classList.toggle('active');
        body.classList.toggle('lock');

        const help = document.querySelector('.li_help');
        const footer = document.querySelector('.li_footer');

        help.addEventListener ('click', function (e) {
            navigation.classList.remove('open');
            navigationUl.classList.remove('open');
            burger.classList.remove('active');
            body.classList.remove('lock');
        })

        footer.addEventListener ('click', function (e) {
            navigation.classList.remove('open');
            navigationUl.classList.remove('open');
            burger.classList.remove('active');
            body.classList.remove('lock');
        })

    })
}


///PART 2. Slider for section OUR FRIENDS

const itemCurrent = document.querySelector ('.item_current');
const itemLeft = document.querySelector ('.item_left');
const itemRight = document.querySelector ('.item_right');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector ('.arrow__left');
const btnRight = document.querySelector ('.arrow__right');



function createCard (id, itemCurr) {
    let  card = document.createElement ('div');
    card.classList.add('card');
    let num = document.createElement('p');
    num.classList.add('friends_p');
    num.textContent = `${arrAllFriends[id].name}`;
     let image = document.createElement ('img');
     image.src  = `${arrAllFriends[id].img}`;
    image.classList.add('image');
    let button = document.createElement('BUTTON');
    button.classList.add('button_item');
    button.textContent = 'Learn more';
    card.append(image);
    card.append(num);
    card.append(button);
    itemCurr.append(card);
}


let count;
if (window.innerWidth > 1279) {
    count = 3;
} else if ((window.innerWidth <= 1279) || (window.innerWidth > 767)) {
    count = 2;
} else if (window.innerWidth <= 767) {
    count = 1;
}
let arr = [];

 let arrAllFriends = [
    {
      name: "Jennifer",
       img: "./assets/images/ourFriends/pets-jennifer.png",
       type: "Dog",
       breed: "Labrador",
       description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
       age: "2 months",
       inoculations: ["none"],
       diseases: ["none"],
       parasites: ["none"]
     },
     {
       name: "Sophia",
       img: "./assets/images/imagesPets/pets-sofia.png",
       type: "Dog",
       breed: "Shih tzu",
       description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
       age: "1 month",
       inoculations: ["parvovirus"],
       diseases: ["none"],
       parasites: ["none"]
     },
     {
       name: "Woody",
       img: "./assets/images/imagesPets/pets-woody.png",
       type: "Dog",
       breed: "Golden Retriever",
       description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
       age: "3 years 6 months",
       inoculations: ["adenovirus", "distemper"],
       diseases: ["right back leg mobility reduced"],
       parasites: ["none"]
     },
     {
       name: "Scarlett",
       img: "./assets/images/imagesPets/pets-scarlet.png",
       type: "Dog",
       breed: "Jack Russell Terrier",
       description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
       age: "3 months",
       inoculations: ["parainfluenza"],
       diseases: ["none"],
       parasites: ["none"]
     },
     {
       name: "Katrine",
       img: "./assets/images/imagesPets/pets-katrine.png",
       type: "Cat",
       breed: "British Shorthair",
       description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
       age: "6 months",
       inoculations: ["panleukopenia"],
       diseases: ["none"],
       parasites: ["none"]
     },
     {
       name: "Timmy",
       img: "./assets/images/imagesPets/pets-timmy.png",
       type: "Cat",
       breed: "British Shorthair",
       description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
       age: "2 years 3 months",
       inoculations: ["calicivirus", "viral rhinotracheitis"],
       diseases: ["kidney stones"],
       parasites: ["none"]
     },
     {
       name: "Freddie",
       img: "./assets/images/imagesPets/pets-freddie.png",
       type: "Cat",
       breed: "British Shorthair",
       description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
       age: "2 months",
       inoculations: ["rabies"],
       diseases: ["none"],
       parasites: ["none"]
     },
     {
       name: "Charly",
       img: "./assets/images/imagesPets/pets-charly.png",
       type: "Dog",
       breed: "Jack Russell Terrier",
       description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
       age: "8 years",
       inoculations: ["bordetella bronchiseptica", "leptospirosis"],
       diseases: ["deafness", "blindness"],
       parasites: ["lice", "fleas"]
     }
   ]

function createCaurusel () {
    for (let i=0; i<count; i++) {
        arr.push(i);
    }
     arr.forEach(el => {
        createCard (el, itemCurrent)
     })
}
createCaurusel()


let newArr;
const sliderItem = () => {
    newArr = arr;
    while (newArr.length < count*2) {
        let number = Math.floor (Math.random()*8);
        if (!newArr.includes(number)) {
            newArr.push (number);
        }
    }
    newArr.splice(0, count);
}

let createSideItem = () => {
    sliderItem ();
    newArr.forEach (el => {
        createCard(el, itemLeft);
        createCard(el, itemRight);
    })
}

createSideItem();

const moveLeft = () => {
    slider.classList.add ('transition_to-left');
   btnLeft.removeEventListener ('click', moveLeft);
  btnRight.removeEventListener ('click', moveRight);
}
const moveRight = () => {
    slider.classList.add ('transition_to-right');
   btnLeft.removeEventListener ('click', moveLeft);
   btnRight.removeEventListener ('click', moveRight);
}


btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

slider.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-to-right') {
        slider.classList.remove('transition_to-right');
        itemCurrent.innerHTML = itemRight.innerHTML;
        itemLeft.innerHTML = '';
        itemRight.innerHTML = '';
        arr = newArr;
        createSideItem();
    } else if (animationEvent.animationName === 'move-to-left') {
        slider.classList.remove('transition_to-left');
        itemCurrent.innerHTML = itemLeft.innerHTML;
        itemLeft.innerHTML = '';
        itemRight.innerHTML = '';
        arr = newArr;
        createSideItem();
    }
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
})


////PART 4. Popup




