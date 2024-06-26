const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/nacho.jpg"){
        myImage.setAttribute("src", "images/bowser.jpg");
    }
    else{
        myImage.setAttribute("src", "images/nacho.jpg");
    }

    let myButton = document.querySelector("button");

    myButton.onclick = () => {
        setUserName();
    }

    let myHeading = document.querySelector("h1");

    function setUserName() {
        const myName = prompt("Please enter  your name.");
        localStorage.setItem("name", myName);
        myHeading.textContent = `Look at this cat, ${myName}`;
    }

    if(!localStorage.getItem("name")){
        setUserName();
    }else{
        const storedName = localStorage.getItem("name");
        myHeading.textContent = myHeading.textContent = `Look at this cat, ${storedName}`;
    }


};