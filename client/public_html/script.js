const submitHobbies = () => {
    const checkboxes = document.getElementsByClassName("hobbie-checkbox");
    const selected = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    alert(`You want to know about ${selected.map(item => hobbiesHeading(item))} right ?`);
    const tag = document.getElementById("hobbies-card-container");
    tag.innerHTML = ''
    for (var i = 0; i < selected.length; i++) {
        const parent = document.createElement("div");
        parent.style.backgroundImage = `url(${getImage(selected[i])})`;
        parent.classList.add("hobby-card");

        const heading = document.createElement("h4");
        heading.classList.add("hobby-heading");
        const headingText = document.createTextNode(hobbiesHeading(selected[i]));
        heading.appendChild(headingText);

        const para = document.createElement("p");
        para.classList.add("hobby-desc");
        const paraText = document.createTextNode(hobbiesText(selected[i]));
        para.appendChild(paraText);

        parent.appendChild(heading);
        parent.appendChild(para);
        tag.appendChild(parent);
    }
}

const hobbiesText = (hobby) => {
    switch (hobby) {
        case "pcgaming":
            return "I love playing FPS games like Valorant, but I am open to all PC Games, wheater it is a Heist with my buddies in GTA 5 or grounded combat and fast-paced action in Call of Duty: Modern Warfare.";
        case "music":
            return "I also like to listen to the music of various genres. Music can raise someone's mood, get them excited, or make them calm and relaxed. Music also - and this is important - allows us to feel nearly or possibly all emotions that we experience in our lives. Sometimes music is the only thing that takes your mind off everything else."
        case "webseries":
            return "I watch all sorts of TV Series/Drama either it be Anime, KDrama or English webseries. Some of my favourite shows are Big Bang Theory, FRIENDS, HIMYM, Two and a Half Men etc."
        case "foodie":
            return "I love to try new cuisine at different places. Exploring various foods is just awesome. Btw I love Biryani and Butter Chicken."
    }
}

const hobbiesHeading = (hobby) => {
    switch (hobby) {
        case "pcgaming":
            return "PC Gaming";
        case "music":
            return "Music"
        case "webseries":
            return "TV/Web Series"
        case "foodie":
            return "Foodie"
    }
}

const getImage = (hobby) => {
    switch (hobby) {
        case "pcgaming":
            return "https://web-assets.bcg.com/96/f0/262053dd450abd19775f7ab5ac0e/gaming-esports.jpg";
        case "music":
            return "https://w0.peakpx.com/wallpaper/503/830/HD-wallpaper-dj-marshmello-minimal-music-stars-black-background-christopher-comstock-creative-marshmello-mask-fan-art-marshmello.jpg"
        case "webseries":
            return "https://c4.wallpaperflare.com/wallpaper/381/878/430/ironman-in-dark-film-wallpaper-preview.jpg"
        case "foodie":
            return "https://foodphotographer.com.au/wp-content/uploads/2020/08/dark-art-food-photography.jpg"
    }
}