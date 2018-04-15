let str1 = 'Fact #1: Banging your head against a wall burns 150 calories an hour.';
let str2 = 'Fact #2: Human saliva has a boiling point three times that of regular water.';
let str3 = 'Fact #3: If you lift a kangaroo’s tail off the ground it can’t hop.';
let str4 = 'Fact #4: Bananas are curved because they grow towards the sun.';
let str5 = 'Fact #5: Billy goats urinate on their own heads to smell more attractive to females.';

let arrayNotification = [str1, str2, str3, str4, str5];

function displayNotification() {
    let elemNotification = document.body.querySelector('.notification');
    let notifMessegeArea = document.body.querySelector('.notification-messege');

    notifMessegeArea.innerHTML = arrayNotification[0];
    displayNotification.currentNotif = 0;

    document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif + 1})`).style.color = 'blue';
    displayNotification.notificationPrev = document.body.querySelector('.button-notification-prev');
    displayNotification.notificationNext = document.body.querySelector('.button-notification-next');
    
    displayNotification.notificationNext.onclick = function() {
        if (displayNotification.currentNotif == arrayNotification.length - 1) {
        document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif + 1})`).style.color = 'gray';
            notifMessegeArea.innerHTML = arrayNotification[0];
            displayNotification.currentNotif = 0;
            document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif + 1})`).style.color = 'blue';
        } else {
        displayNotification.currentNotif++;
        notifMessegeArea.innerHTML = arrayNotification[displayNotification.currentNotif];
        document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif})`).style.color = 'gray';
        document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif + 1})`).style.color = 'blue';    
    }
        
    };

    displayNotification.notificationPrev.onclick = function() {
        if (displayNotification.currentNotif == 0) {
            document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${arrayNotification.length})`).style.color = 'blue';
            document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(1)`).style.color = 'gray';
            notifMessegeArea.innerHTML = arrayNotification[arrayNotification.length - 1];
            displayNotification.currentNotif = arrayNotification.length - 1;
        } else {
            document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif})`).style.color = 'blue';
            document.body.querySelector('.notification-slider-points').querySelector(`:nth-child(${displayNotification.currentNotif + 1})`).style.color = 'gray';
            displayNotification.currentNotif--;
            notifMessegeArea.innerHTML = arrayNotification[displayNotification.currentNotif];
        }
    };

    displayNotification.notificationClose = document.body.querySelector('.notification-close')
    displayNotification.notificationClose.onclick = function () {
        if (document.body.querySelector('[name="disableNotification"]').checked) {
            localStorage.setItem('disableNotification','true')
        };
        elemNotification.style.display = 'none';
    };

    document.onkeydown = function (event) {
        if (event.keyCode == 37) {
            displayNotification.notificationPrev.onclick();
        };
        if (event.keyCode == 39) {
            displayNotification.notificationNext.onclick();
        };
        if (event.keyCode == 27) {
            displayNotification.notificationClose.onclick();
        };
    };

    if (!localStorage.getItem('disableNotification')) {
        elemNotification.style.display = 'block';
    };
};

setTimeout(displayNotification, 1000);
