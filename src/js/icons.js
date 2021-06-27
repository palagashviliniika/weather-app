const icons = {
  thunderstorm: `<svg class="icon" viewbox="0 0 100 100">
                  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)"/>
                  <use xlink:href="#thunderBolt" x="30" y="61" class="lighting animated infinite flash"/>
                  <use xlink:href="#whiteCloud" x="7" />
                  <use xlink:href="#thunderBolt" x="45" y="56" class="lighting animated infinite flash delay-1s"/>
                </svg>`,
  lightRain: `<svg class="icon" viewbox="0 0 100 100">
                <use xlink:href="#sun" x="-12" y="-18"/>
                <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                <use xlink:href="#rainDrizzle" x="25" y="65"/>
                <use xlink:href="#rainDrizzle" x="40" y="65"/>
                <use xlink:href="#whiteCloud" x="7" />
              </svg>`,
  middleRain: `<svg class="icon" viewbox="0 0 100 100">
                <use xlink:href="#sun" x="-12" y="-18"/>
                <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                <use id="drop1" xlink:href="#rainDrop" x="25" y="65"/>
                <use id="drop3" xlink:href="#rainDrop" x="45" y="65"/>
                <use xlink:href="#whiteCloud" x="7" />
              </svg>`,
  rain: `<svg class="icon" viewbox="0 0 100 100">
            <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)"/>
            <use id="drop4" xlink:href="#rainDrop" x="15" y="65"/>
            <use id="drop1" xlink:href="#rainDrop" x="25" y="65"/>
            <use id="drop2" xlink:href="#rainDrop" x="37" y="65"/>
            <use id="drop3" xlink:href="#rainDrop" x="50" y="65"/>
            <use xlink:href="#whiteCloud" x="5" y="-7"/>
          </svg>`,
  lightSnow: `<svg class="icon" viewbox="0 0 100 100">
                <use xlink:href="#sun" x="-12" y="-18"/>
                <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                <use id="snowFlake2" xlink:href="#snowFlake" x="30" y="65"/>
                <use id="snowFlake4" xlink:href="#snowFlake" x="45" y="65"/>
                <use id="snowFlake5" xlink:href="#snowFlake" x="58" y="65"/>
                <use xlink:href="#whiteCloud" x="7" />
              </svg>`,
  snow: `<svg class="icon" viewbox="0 0 100 100">
          <use id="snowFlake1" xlink:href="#snowFlake" x="20" y="55"/>
          <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65"/>
          <use id="snowFlake3" xlink:href="#snowFlake" x="45" y="60"/>
          <use id="snowFlake4" xlink:href="#snowFlake" x="50" y="65"/>
          <use id="snowFlake5" xlink:href="#snowFlake" x="63" y="65"/>
          <use xlink:href="#whiteCloud" x="10" y="-15"/>
        </svg>`,
  rainSnow: `<svg class="icon" viewbox="0 0 100 100">
              <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)"/>
              <use id="snowFlake1" xlink:href="#snowFlake" x="20" y="55"/>
              <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65"/>
              <use id="snowFlake3" xlink:href="#snowFlake" x="45" y="60"/>
              <use id="snowFlake4" xlink:href="#snowFlake" x="50" y="65"/>
              <use id="snowFlake5" xlink:href="#snowFlake" x="63" y="65"/>
              <use xlink:href="#rainDrizzle" x="15" y="65"/>
              <use xlink:href="#rainDrizzle" x="25" y="65"/>
              <use xlink:href="#rainDrizzle" x="35" y="65"/>
              <use xlink:href="#rainDrizzle" x="45" y="65"/>
              <use xlink:href="#whiteCloud" x="5" y="-7"/>
            </svg>`,
  wind: `<svg class="icon wind" viewBox="0 0 100 100" id="wind">
          <path id="wind1" d="M 8,37 L 35,37"/>
          <path id="wind2" d="M 2,45 L 45,45 C65,45 64,25 52,25 C47,24 42,30 44,35"/>
          <path id="wind3" d="M 20,55 L 75,55 C90,53 90,35 80,32 C70,28 60,42 70,48 C80,50 80,40 78,41"/>
          <path id="wind4" d="M 12,65 L 65,65 C85,68 75,87 65,83 C60,81 60,78 61,76"/>
          <path id="wind5" d="M 5,75 L 48,75"/>
        </svg>`,
  fog: `<svg class="icon" viewbox="0 0 100 100">
          <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradDarkGray)" x="0" y="20"/>
          <use xlink:href="#grayCloud" x="30" y="30" class="reverse-small-cloud" fill="url(#gradGray)"/>
          <use id="mist" xlink:href="#mist" x="0" y="30"/>
        </svg>`,
  clear: `<svg class="icon" viewbox="0 0 100 100">
            <use xlink:href="#sun"/>
          </svg>`,
  fewClouds: `<svg class="icon" viewbox="0 0 100 100">
                <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                <use xlink:href="#whiteCloud" x="7" />
              </svg>`,
  darkCloud: `<svg class="icon" viewbox="0 0 100 100">
                <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)"/>
                <use xlink:href="#whiteCloud" x="7" />
              </svg>`,
  unknown: `<svg class="icon" viewbox="0 0 100 100">
              <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)"/>
              <use id="ice4" xlink:href="#icePellet" x="25" y="65"/>
              <use id="ice1" xlink:href="#icePellet" x="35" y="65"/>
              <use id="ice2" xlink:href="#icePellet" x="47" y="65"/>
              <use id="ice3" xlink:href="#icePellet" x="60" y="65"/>
              <use xlink:href="#whiteCloud" x="5" y="-7"/>
            </svg>`,
};

export default {
  200: icons.thunderstorm,
  201: icons.thunderstorm,
  202: icons.thunderstorm,
  230: icons.thunderstorm,
  231: icons.thunderstorm,
  232: icons.thunderstorm,
  233: icons.thunderstorm,
  300: icons.lightRain,
  301: icons.lightRain,
  302: icons.middleRain,
  500: icons.middleRain,
  501: icons.middleRain,
  502: icons.rain,
  511: icons.rain,
  520: icons.rain,
  521: icons.rain,
  522: icons.rain,
  600: icons.lightSnow,
  601: icons.snow,
  602: icons.snow,
  610: icons.rainSnow,
  611: icons.snow,
  612: icons.snow,
  621: icons.snow,
  622: icons.snow,
  623: icons.wind,
  700: icons.fog,
  711: icons.fog,
  721: icons.fog,
  731: icons.fog,
  741: icons.fog,
  751: icons.fog,
  800: icons.clear,
  801: icons.fewClouds,
  802: icons.fewClouds,
  803: icons.darkCloud,
  804: icons.darkCloud,
  900: icons.unknown,
};
