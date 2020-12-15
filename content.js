let placed = false;
const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

browser.runtime.onMessage.addListener(async () => {
  if (!placed) {
    const image = document.createElement("img");
    const response = await fetch(CAT_API_URL);
    const data = await response.json();
    const imageUrl = data[0].url;

    image.setAttribute("id", "catify-image");
    image.setAttribute("src", imageUrl);
    Object.assign(image.style, {
      height: "400px",
      position: "absolute",
      top: 0,
      zIndex: 2147483647
    });
    document.body.appendChild(image);
    placed = true;
  } else {
    const catifyImage = document.getElementById("catify-image");
    catifyImage.remove();
    placed = false;
  }
});
