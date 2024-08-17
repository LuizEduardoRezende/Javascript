const img = document.getElementById("gatinho");
const catBtn = document.getElementById("changeCat")

async function consomeAPI() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow"
    };

    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions);
        const result = await response.json(); 
        return result[0]; 
    } catch (error) {
        console.log('error', error);
    }
}

async function changeCat() {
    let result = await consomeAPI();

    if (result && result.url) {
        img.src = result.url;
    }
}

// catBtn.addEventListener("click", changeCat());

changeCat();