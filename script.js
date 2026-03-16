
/* forms select */
let loginForm = document.querySelector('.login-form');
let searchForm = document.querySelector('.search-form');


/* user icon click */
document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
}


/* search icon click */
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
}


/* scroll hide */
window.onscroll = () =>{
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}


/* login validation */
document.querySelector('.login-form').onsubmit = function(e){

    let email = document.querySelector('.login-form input[type="email"]').value;
    let pass = document.querySelector('.login-form input[type="password"]').value;

    if(email === "" || pass === ""){
        alert("Please fill all the fields!");
        e.preventDefault();
    }
}


/* search section logic */
document.querySelector('.search-form').onsubmit = function(e){

    e.preventDefault();

    let value = document.getElementById('search-box').value.toLowerCase();

    if(value.includes("menu")){
        document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
    }

    else if(value.includes("about")){
        document.querySelector("#about").scrollIntoView({behavior:"smooth"});
    }

    else if(value.includes("review")){
        document.querySelector("#review").scrollIntoView({behavior:"smooth"});
    }

    else if(value.includes("contact")){
        document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
    }

    else if(value.includes("home")){
        document.querySelector("#main").scrollIntoView({behavior:"smooth"});
    }

    else{
        alert("You search wrong !Please enter a correct section name !");
    }

}