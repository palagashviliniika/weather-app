const WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const PIC_TOKEN = "GQjRk-D9Zie-eJHzZM2An22hwVzHUEnARNRFmy-cKXw";
const GEOLOCATION_TOKEN = "9fff6a0c2b4b4d3ea5e108f11cfd5c71";
const LOCATION_TOKEN = "2a19f789eef429";
const LOCATION_URL = `https://ipinfo.io/json?token=${LOCATION_TOKEN}`;
const WEATHER_TOKEN = "20a7f0470778661155aef273e4726d39";

function checkResponseStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  if (response.status === 403 || response.status === 401) {
    throw new Error("Status 401. Try another API key");
  }

  throw new Error(`Server error: ${response.status} ${response.statusText}`);
}

function checkPictureStatus(response) {
  const errorMessage = "Standard picture is shown";

  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  if (response.status === 403 || response.status === 401) {
    throw new Error("API key limit for picture exceeded. Standard picture is shown");
  }

  throw new Error(`Server error: ${response.status} ${response.statusText}. ${errorMessage}`);
}

export default class Loader {
  static getLocationFromIP() {
    return fetch(LOCATION_URL)
      .then((response) => checkResponseStatus(response));
  }

  static getPicture(season, dayPart, city) {
    return fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${season},${dayPart}${city ? `,${city}` : ""}&client_id=${PIC_TOKEN}`)
      .then((response) => {
        global.console.info(`Keywords for picture searching: ${season}, ${dayPart}${city ? `, ${city}` : ""}`);
        return checkPictureStatus(response);
      })
      .catch((err) => ({
        urls: {
          regular: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          error: err,
        },
      }));
  }

  static loadPicture(pictureURL) {
    return new Promise((resolve) => {
      const loadedImage = new Image();

      loadedImage.classList.add("loaded-image");
      loadedImage.addEventListener("load", () => {
        resolve(loadedImage);
      }, { once: true });
      loadedImage.src = pictureURL;
    });
  }

  static getWeather(location) {
    const { latitude, longitude } = location;
    const url = `${WEATHER_URL}lat=${latitude}&lon=${longitude}&%20exclude=daily&appid=${WEATHER_TOKEN}&units=metric`;

    return fetch(url)
      .then((response) => checkResponseStatus(response))
      .catch((err) => {
        if (err && String(err) !== "TypeError: Failed to fetch") {
          throw new Error(err);
        } else {
          throw new Error("Openweathermap not responding. Try again later");
        }
      });
  }

  static getLocationFromSearch(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${GEOLOCATION_TOKEN}&language=en&pretty=1`;

    return fetch(url)
      .then((response) => checkResponseStatus(response))
      .then((data) => {
        const results = data.results[0];

        if (data.total_results === 0) {
          throw new Error("Sorry, no results");
        }

        return results;
      });
  }
}
