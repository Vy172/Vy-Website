let nextBtn = document.getElementById('next');
let outfit = document.getElementById('outfitBtn');
let drama = document.getElementById('dramaBtn');
let backD = document.getElementById('backD');
let nextD = document.getElementById('nextD');
let explore = document.getElementById('exploreBtn');
let toHob = document.getElementById('toHob');
let toHome = document.getElementById('backHome');
let toAbout= document.getElementById('backAbout');
let toDiscord = document.getElementById('discord');
let toInsta = document.getElementById('insta');
let toSnapchat = document.getElementById('snapChat');

let itemOne = document.getElementById('item1');
let itemTwo = document.getElementById('item2');
let itemThree = document.getElementById('item3');
let itemFour = document.getElementById('item4');
let listNum = ['item1', 'item2', 'item3', 'item4'];
let num = 0;

if (nextBtn) {
    nextBtn.addEventListener('click', function () {
        window.location.href = "aboutMe.html";
    });
}


if (outfit) {
    outfit.addEventListener('click', function () {
        window.location.href = "outfit.html";
    });
}

if (drama) {
    drama.addEventListener('click', function () {
        window.location.href = 'drama.html';
    })
}

if (explore) {
    explore.addEventListener('click', function () {
        window.location.href = 'explore.html';
    })
}

if (toHob) {
    toHob.addEventListener('click', function () {
        window.location.href = 'hobbies.html';
    })
}

if (toHome) {
    toHome.addEventListener('click', function () {
        window.location.href = 'index.html';
    })
}

if(toAbout){
    toAbout.addEventListener('click', function(){
        window.location.href='aboutMe.html'
    })
}

if(toDiscord){
    toDiscord.addEventListener('click', function(){
        window.open('https://discord.gg/c45Qp39c');
    })
}

if(toInsta){
    toInsta.addEventListener('click', function(){
        window.open('https://www.instagram.com/vydo910?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr');
    })
}

if(toSnapchat){
    toSnapchat.addEventListener('click', function(){
        window.open('https://snapchat.com/t/KsgMghjg.html')
    })
}

backD.addEventListener('click', function () {
    num--;
    if (num < 0) {
        num = 3;
    }
    nextDrama();
})
nextD.addEventListener('click', function () {
    num++
    if (num >= listNum.length) {
        num = 0;
        itemFour.classList.add('hidden');
    }
    nextDrama();
})

function nextDrama() {
    itemOne.classList.add('hidden');
    itemTwo.classList.add('hidden');
    itemThree.classList.add('hidden');
    itemFour.classList.add('hidden');

    if (num == 0) {
        itemOne.classList.remove('hidden');
    } else if (num == 1) {
        itemTwo.classList.remove('hidden');
        itemOne.classList.add('hidden');
    } else if (num == 2) {
        itemTwo.classList.add('hidden');
        itemThree.classList.remove('hidden');
    } else if (num == 3) {
        itemThree.classList.add('hidden');
        itemFour.classList.remove('hidden');
    }
}