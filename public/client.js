const container = document.getElementById('main');
console.log(container);
if(container.childElementCount===0){
    let message = document.createElement('div');
    message.innerHTML = 'Your random user will appear here...';
    message.style.color = 'white';
    message.style.margin = 10;
    container.appendChild(message);
}else{
    container.removeChild(container.childElementCount[0]);
}

function getUser(){
    const xhr = new XMLHttpRequest();
    const requestURL = 'https://jsonplaceholder.typicode.com/users';
    xhr.open('GET', requestURL);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status >= 400){
            console.warn(xhr.status);
        }else{
            const range = 10;
            const user_card = document.createElement('div');
            user_card.classList.add('user_card');
            const user = Math.floor(Math.random() * range);
            const main = document.getElementById('main');
            const name_field = document.createElement('div');
            const username_field = document.createElement('div');
            const email_field = document.createElement('div');
            name_field.innerHTML = "Name: " + xhr.response[user].name;
            username_field.innerHTML = "Username: " + xhr.response[user].username;
            email_field.innerHTML = "Email: " + xhr.response[user].email;

            set_user_style(name_field, username_field, email_field);

            populate_user_card(name_field, username_field, email_field, user_card);

            main.appendChild(user_card);

            if(main.childElementCount>1){
                main.removeChild(main.childNodes[0]);
            }
        }
    }
    xhr.send();
}

function set_user_style(name, username, email){
    name.style.margin = 10;
    name.style.width = 100 + "%";
    name.style.background = "#5500ff";
    username.style.margin = 10;
    username.style.width = 100 + "%";
    username.style.background = "#5500ff";
    email.style.margin = 10;
    email.style.width = 100 + "%";
    email.style.background = "#5500ff";
}

function populate_user_card(name, username, email, usercard){
    usercard.appendChild(name);
    usercard.appendChild(username);
    usercard.appendChild(email);
}

