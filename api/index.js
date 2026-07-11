"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// api/main.ts
var import_config = require("dotenv/config");

// src/cards/stats-card.ts
var import_lodash = __toESM(require("lodash"));

// src/calculateContributionRank.ts
var calculateContributionRank = (name, contributors, numOfMyContributions) => {
  contributors = contributors.filter((contributor) => contributor.type === "User");
  const numOfOverRankContributors = contributors.filter(
    (contributor) => contributor.contributions > numOfMyContributions
  );
  const rankOfContribution = (contributors.length - numOfOverRankContributors.length) / contributors.length * 100;
  const RANK_S_PLUS_VALUE = 90;
  const RANK_S_VALUE = 80;
  const RANK_A_PLUS_VALUE = 70;
  const RANK_A_VALUE = 60;
  const RANK_B_PLUS_VALUE = 50;
  const RANK_B_VALUE = 1;
  if (rankOfContribution >= RANK_S_PLUS_VALUE) return "S+";
  if (rankOfContribution >= RANK_S_VALUE) return "S";
  if (rankOfContribution >= RANK_A_PLUS_VALUE) return "A+";
  if (rankOfContribution >= RANK_A_VALUE) return "A";
  if (rankOfContribution >= RANK_B_PLUS_VALUE) return "B+";
  return "B";
};

// src/calculateRank.ts
var calculateRank = (stargazers) => {
  const RANK_S_PLUS_VALUE = 1e4;
  const RANK_S_VALUE = 1e3;
  const RANK_A_PLUS_VALUE = 500;
  const RANK_A_VALUE = 100;
  const RANK_B_PLUS_VALUE = 50;
  const RANK_B_VALUE = 1;
  if (stargazers >= RANK_S_PLUS_VALUE) return "S+";
  if (stargazers >= RANK_S_VALUE) return "S";
  if (stargazers >= RANK_A_PLUS_VALUE) return "A+";
  if (stargazers >= RANK_A_VALUE) return "A";
  if (stargazers >= RANK_B_PLUS_VALUE) return "B+";
  return "B";
};

// themes/index.ts
var themes = {
  default: {
    title_color: "2f80ed",
    icon_color: "4c71f2",
    text_color: "434d58",
    bg_color: "fffefe",
    border_color: "e4e2e2"
  },
  default_repocard: {
    title_color: "2f80ed",
    icon_color: "586069",
    // icon color is different
    text_color: "434d58",
    bg_color: "fffefe"
  },
  transparent: {
    title_color: "006AFF",
    icon_color: "0579C3",
    text_color: "417E87",
    bg_color: "ffffff00"
  },
  shadow_red: {
    title_color: "9A0000",
    text_color: "444",
    icon_color: "4F0000",
    border_color: "4F0000",
    bg_color: "ffffff00"
  },
  shadow_green: {
    title_color: "007A00",
    text_color: "444",
    icon_color: "003D00",
    border_color: "003D00",
    bg_color: "ffffff00"
  },
  shadow_blue: {
    title_color: "00779A",
    text_color: "444",
    icon_color: "004450",
    border_color: "004490",
    bg_color: "ffffff00"
  },
  dark: {
    title_color: "fff",
    icon_color: "79ff97",
    text_color: "9f9f9f",
    bg_color: "151515"
  },
  radical: {
    title_color: "fe428e",
    icon_color: "f8d847",
    text_color: "a9fef7",
    bg_color: "141321"
  },
  merko: {
    title_color: "abd200",
    icon_color: "b7d364",
    text_color: "68b587",
    bg_color: "0a0f0b"
  },
  gruvbox: {
    title_color: "fabd2f",
    icon_color: "fe8019",
    text_color: "8ec07c",
    bg_color: "282828"
  },
  gruvbox_light: {
    title_color: "b57614",
    icon_color: "af3a03",
    text_color: "427b58",
    bg_color: "fbf1c7"
  },
  tokyonight: {
    title_color: "70a5fd",
    icon_color: "bf91f3",
    text_color: "38bdae",
    bg_color: "1a1b27"
  },
  onedark: {
    title_color: "e4bf7a",
    icon_color: "8eb573",
    text_color: "df6d74",
    bg_color: "282c34"
  },
  cobalt: {
    title_color: "e683d9",
    icon_color: "0480ef",
    text_color: "75eeb2",
    bg_color: "193549"
  },
  synthwave: {
    title_color: "e2e9ec",
    icon_color: "ef8539",
    text_color: "e5289e",
    bg_color: "2b213a"
  },
  highcontrast: {
    title_color: "e7f216",
    icon_color: "00ffff",
    text_color: "fff",
    bg_color: "000"
  },
  dracula: {
    title_color: "ff6e96",
    icon_color: "79dafa",
    text_color: "f8f8f2",
    bg_color: "282a36"
  },
  prussian: {
    title_color: "bddfff",
    icon_color: "38a0ff",
    text_color: "6e93b5",
    bg_color: "172f45"
  },
  monokai: {
    title_color: "eb1f6a",
    icon_color: "e28905",
    text_color: "f1f1eb",
    bg_color: "272822"
  },
  vue: {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "273849",
    bg_color: "fffefe"
  },
  "vue-dark": {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "fffefe",
    bg_color: "273849"
  },
  "shades-of-purple": {
    title_color: "fad000",
    icon_color: "b362ff",
    text_color: "a599e9",
    bg_color: "2d2b55"
  },
  nightowl: {
    title_color: "c792ea",
    icon_color: "ffeb95",
    text_color: "7fdbca",
    bg_color: "011627"
  },
  buefy: {
    title_color: "7957d5",
    icon_color: "ff3860",
    text_color: "363636",
    bg_color: "ffffff"
  },
  "blue-green": {
    title_color: "2f97c1",
    icon_color: "f5b700",
    text_color: "0cf574",
    bg_color: "040f0f"
  },
  algolia: {
    title_color: "00AEFF",
    icon_color: "2DDE98",
    text_color: "FFFFFF",
    bg_color: "050F2C"
  },
  "great-gatsby": {
    title_color: "ffa726",
    icon_color: "ffb74d",
    text_color: "ffd95b",
    bg_color: "000000"
  },
  darcula: {
    title_color: "BA5F17",
    icon_color: "84628F",
    text_color: "BEBEBE",
    bg_color: "242424"
  },
  bear: {
    title_color: "e03c8a",
    icon_color: "00AEFF",
    text_color: "bcb28d",
    bg_color: "1f2023"
  },
  "solarized-dark": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "002b36"
  },
  "solarized-light": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "fdf6e3"
  },
  "chartreuse-dark": {
    title_color: "7fff00",
    icon_color: "00AEFF",
    text_color: "fff",
    bg_color: "000"
  },
  nord: {
    title_color: "81a1c1",
    text_color: "d8dee9",
    icon_color: "88c0d0",
    bg_color: "2e3440"
  },
  gotham: {
    title_color: "2aa889",
    icon_color: "599cab",
    text_color: "99d1ce",
    bg_color: "0c1014"
  },
  "material-palenight": {
    title_color: "c792ea",
    icon_color: "89ddff",
    text_color: "a6accd",
    bg_color: "292d3e"
  },
  graywhite: {
    title_color: "24292e",
    icon_color: "24292e",
    text_color: "24292e",
    bg_color: "ffffff"
  },
  "vision-friendly-dark": {
    title_color: "ffb000",
    icon_color: "785ef0",
    text_color: "ffffff",
    bg_color: "000000"
  },
  "ayu-mirage": {
    title_color: "f4cd7c",
    icon_color: "73d0ff",
    text_color: "c7c8c2",
    bg_color: "1f2430"
  },
  "midnight-purple": {
    title_color: "9745f5",
    icon_color: "9f4bff",
    text_color: "ffffff",
    bg_color: "000000"
  },
  calm: {
    title_color: "e07a5f",
    icon_color: "edae49",
    text_color: "ebcfb2",
    bg_color: "373f51"
  },
  "flag-india": {
    title_color: "ff8f1c",
    icon_color: "250E62",
    text_color: "509E2F",
    bg_color: "ffffff"
  },
  omni: {
    title_color: "FF79C6",
    icon_color: "e7de79",
    text_color: "E1E1E6",
    bg_color: "191622"
  },
  react: {
    title_color: "61dafb",
    icon_color: "61dafb",
    text_color: "ffffff",
    bg_color: "20232a"
  },
  jolly: {
    title_color: "ff64da",
    icon_color: "a960ff",
    text_color: "ffffff",
    bg_color: "291B3E"
  },
  maroongold: {
    title_color: "F7EF8A",
    icon_color: "F7EF8A",
    text_color: "E0AA3E",
    bg_color: "260000"
  },
  yeblu: {
    title_color: "ffff00",
    icon_color: "ffff00",
    text_color: "ffffff",
    bg_color: "002046"
  },
  blueberry: {
    title_color: "82aaff",
    icon_color: "89ddff",
    text_color: "27e8a7",
    bg_color: "242938"
  },
  slateorange: {
    title_color: "faa627",
    icon_color: "faa627",
    text_color: "ffffff",
    bg_color: "36393f"
  },
  kacho_ga: {
    title_color: "bf4a3f",
    icon_color: "a64833",
    text_color: "d9c8a9",
    bg_color: "402b23"
  },
  outrun: {
    title_color: "ffcc00",
    icon_color: "ff1aff",
    text_color: "8080ff",
    bg_color: "141439"
  },
  ocean_dark: {
    title_color: "8957B2",
    icon_color: "FFFFFF",
    text_color: "92D534",
    bg_color: "151A28"
  },
  city_lights: {
    title_color: "5D8CB3",
    icon_color: "4798FF",
    text_color: "718CA1",
    bg_color: "1D252C"
  },
  github_dark: {
    title_color: "58A6FF",
    icon_color: "1F6FEB",
    text_color: "C3D1D9",
    bg_color: "0D1117"
  },
  github_dark_dimmed: {
    title_color: "539bf5",
    icon_color: "539bf5",
    text_color: "ADBAC7",
    bg_color: "24292F",
    border_color: "373E47"
  },
  discord_old_blurple: {
    title_color: "7289DA",
    icon_color: "7289DA",
    text_color: "FFFFFF",
    bg_color: "2C2F33"
  },
  aura_dark: {
    title_color: "ff7372",
    icon_color: "6cffd0",
    text_color: "dbdbdb",
    bg_color: "252334"
  },
  panda: {
    title_color: "19f9d899",
    icon_color: "19f9d899",
    text_color: "FF75B5",
    bg_color: "31353a"
  },
  noctis_minimus: {
    title_color: "d3b692",
    icon_color: "72b7c0",
    text_color: "c5cdd3",
    bg_color: "1b2932"
  },
  cobalt2: {
    title_color: "ffc600",
    icon_color: "ffffff",
    text_color: "0088ff",
    bg_color: "193549"
  },
  swift: {
    title_color: "000000",
    icon_color: "f05237",
    text_color: "000000",
    bg_color: "f7f7f7"
  },
  aura: {
    title_color: "a277ff",
    icon_color: "ffca85",
    text_color: "61ffca",
    bg_color: "15141b"
  },
  apprentice: {
    title_color: "ffffff",
    icon_color: "ffffaf",
    text_color: "bcbcbc",
    bg_color: "262626"
  },
  moltack: {
    title_color: "86092C",
    icon_color: "86092C",
    text_color: "574038",
    bg_color: "F5E1C0"
  },
  codeSTACKr: {
    title_color: "ff652f",
    icon_color: "FFE400",
    text_color: "ffffff",
    bg_color: "09131B",
    border_color: "0c1a25"
  },
  rose_pine: {
    title_color: "9ccfd8",
    icon_color: "ebbcba",
    text_color: "e0def4",
    bg_color: "191724"
  },
  catppuccin_latte: {
    title_color: "137980",
    icon_color: "8839ef",
    text_color: "4c4f69",
    bg_color: "eff1f5"
  },
  catppuccin_mocha: {
    title_color: "94e2d5",
    icon_color: "cba6f7",
    text_color: "cdd6f4",
    bg_color: "1e1e2e"
  },
  date_night: {
    title_color: "DA7885",
    text_color: "E1B2A2",
    icon_color: "BB8470",
    border_color: "170F0C",
    bg_color: "170F0C"
  },
  one_dark_pro: {
    title_color: "61AFEF",
    text_color: "E5C06E",
    icon_color: "C678DD",
    border_color: "3B4048",
    bg_color: "23272E"
  },
  rose: {
    title_color: "8d192b",
    text_color: "862931",
    icon_color: "B71F36",
    border_color: "e9d8d4",
    bg_color: "e9d8d4"
  },
  holi: {
    title_color: "5FABEE",
    text_color: "D6E7FF",
    icon_color: "5FABEE",
    border_color: "85A4C0",
    bg_color: "030314"
  },
  neon: {
    title_color: "00EAD3",
    text_color: "FF449F",
    icon_color: "00EAD3",
    border_color: "ffffff",
    bg_color: "000000"
  },
  blue_navy: {
    title_color: "82AAFF",
    text_color: "82AAFF",
    icon_color: "82AAFF",
    border_color: "ffffff",
    bg_color: "000000"
  },
  calm_pink: {
    title_color: "e07a5f",
    text_color: "edae49",
    icon_color: "ebcfb2",
    border_color: "e1bc29",
    bg_color: "2b2d40"
  },
  ambient_gradient: {
    title_color: "ffffff",
    text_color: "ffffff",
    icon_color: "ffffff",
    bg_color: "35,4158d0,c850c0,ffcc70"
  }
};

// src/common/utils.ts
var renderError = (message, secondaryMessage = "") => {
  const errorMessages = {
    "Request failed with status code 502": "GitHub API is temporarily unavailable",
    "Request failed with status code 503": "GitHub API is temporarily unavailable",
    "Request failed with status code 429": "Rate limit reached. Please try again later",
    timeout: "Request timed out. Please try again",
    "Network Error": "Unable to connect to GitHub"
  };
  const friendlyMessage = Object.entries(errorMessages).find(([key]) => message.includes(key))?.[1] || message;
  return `
<svg width="495" height="130" viewBox="0 0 495 130" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED }
    .small { font: 500 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
    .gray { fill: #858585 }
    .icon { font: 24px 'Segoe UI', Ubuntu, Sans-Serif; }
  </style>
<rect x="0.5" y="0.5" width="494" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>

<circle cx="40" cy="40" r="18" fill="#FFF3CD" stroke="#FFCA28" stroke-width="2"/>
<text x="40" y="47" text-anchor="middle" class="icon" fill="#856404">!</text>

<text x="70" y="35" class="text">Oops! Something went wrong</text>
<text x="70" y="55" class="small" fill="#858585">${encodeHTML(friendlyMessage)}</text>

<text data-testid="message" x="25" y="85" class="small">
<tspan x="25" dy="0" fill="#6C757D">${secondaryMessage || "Please try again in a few moments"}</tspan>
</text>

<a href="https://github.com/FrancoStino/github-contribution-card/issues" target="_blank">
<text x="25" y="115" class="small" fill="#0366D6" style="text-decoration: underline;">
Report an issue \u2192
</text>
</a>
</svg>
`;
};
var encodeHTML = (str) => {
  return str.replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
    return "&#" + i.charCodeAt(0) + ";";
  }).replace(/\u0008/gim, "");
};
function isValidHexColor(hexColor) {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
  ).test(hexColor);
}
var parseBoolean = (value) => {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else {
    return value;
  }
};
var parseArray = (str) => {
  if (!str) return [];
  return str.split(",");
};
var clampValue = (number, min, max) => {
  if (Number.isNaN(parseInt(number))) return min;
  return Math.max(min, Math.min(number, max));
};
function isValidGradient(colors) {
  return isValidHexColor(colors[1]) && isValidHexColor(colors[2]);
}
function fallbackColor(color, fallbackColor2) {
  let colors = color.split(",");
  let gradient = null;
  if (colors.length > 1 && isValidGradient(colors)) {
    gradient = colors;
  }
  return (gradient ? gradient : isValidHexColor(color) && `#${color}`) || fallbackColor2;
}
var flexLayout = ({ items, gap, direction, sizes = [] }) => {
  let lastSize = 0;
  return items.filter(Boolean).map((item, i) => {
    const size = sizes[i] || 0;
    let transform = `translate(${lastSize}, 0)`;
    if (direction === "column") {
      transform = `translate(0, ${lastSize})`;
    }
    lastSize += size + gap;
    return `<g transform="${transform}">${item}</g>`;
  });
};
var getCardColors = ({
  title_color,
  text_color,
  icon_color,
  bg_color,
  border_color,
  theme,
  fallbackTheme = "default"
}) => {
  const defaultTheme = themes[fallbackTheme];
  const selectedTheme = themes[theme] || defaultTheme;
  const defaultBorderColor = selectedTheme.border_color || defaultTheme.border_color;
  const titleColor = fallbackColor(
    title_color || selectedTheme.title_color,
    "#" + defaultTheme.title_color
  );
  const iconColor = fallbackColor(
    icon_color || selectedTheme.icon_color,
    "#" + defaultTheme.icon_color
  );
  const textColor = fallbackColor(
    text_color || selectedTheme.text_color,
    "#" + defaultTheme.text_color
  );
  const bgColor = fallbackColor(
    bg_color || selectedTheme.bg_color,
    "#" + defaultTheme.bg_color
  );
  const borderColor = fallbackColor(
    border_color || defaultBorderColor,
    "#" + defaultBorderColor
  );
  return { titleColor, iconColor, textColor, bgColor, borderColor };
};
var CONSTANTS = {
  THIRTY_MINUTES: "1800",
  TWO_HOURS: "7200",
  FOUR_HOURS: "14400",
  ONE_DAY: "86400"
};
var measureText = (str, fontSize = 10) => {
  const widths = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0.2796875,
    0.2765625,
    0.3546875,
    0.5546875,
    0.5546875,
    0.8890625,
    0.665625,
    0.190625,
    0.3328125,
    0.3328125,
    0.3890625,
    0.5828125,
    0.2765625,
    0.3328125,
    0.2765625,
    0.3015625,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.2765625,
    0.2765625,
    0.584375,
    0.5828125,
    0.584375,
    0.5546875,
    1.0140625,
    0.665625,
    0.665625,
    0.721875,
    0.721875,
    0.665625,
    0.609375,
    0.7765625,
    0.721875,
    0.2765625,
    0.5,
    0.665625,
    0.5546875,
    0.8328125,
    0.721875,
    0.7765625,
    0.665625,
    0.7765625,
    0.721875,
    0.665625,
    0.609375,
    0.721875,
    0.665625,
    0.94375,
    0.665625,
    0.665625,
    0.609375,
    0.2765625,
    0.3546875,
    0.2765625,
    0.4765625,
    0.5546875,
    0.3328125,
    0.5546875,
    0.5546875,
    0.5,
    0.5546875,
    0.5546875,
    0.2765625,
    0.5546875,
    0.5546875,
    0.221875,
    0.240625,
    0.5,
    0.221875,
    0.8328125,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.3328125,
    0.5,
    0.2765625,
    0.5546875,
    0.5,
    0.721875,
    0.5,
    0.5,
    0.5,
    0.3546875,
    0.259375,
    0.353125,
    0.5890625
  ];
  const avg = 0.5279276315789471;
  return str.split("").map((c) => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg).reduce((cur, acc) => acc + cur) * fontSize;
};
var getImageBase64FromURL = async (url) => {
  const imageURLData = await fetch(url);
  const buffer = await imageURLData.arrayBuffer();
  const stringifiedBuffer = Buffer.from(buffer).toString("base64");
  const contentType = imageURLData.headers.get("content-type");
  const imageBase64 = `data:image/${contentType};base64,${stringifiedBuffer}`;
  return new Promise((resolve) => {
    resolve(imageBase64);
  });
};

// src/getStyles.ts
var calculateCircleProgress = (value) => {
  const radius = 40;
  const c = Math.PI * (radius * 2);
  if (value < 0) value = 0;
  if (value > 100) value = 100;
  return (100 - value) / 100 * c;
};
var getProgressAnimation = ({ progress }) => {
  return `
    @keyframes rankAnimation {
      from {
        stroke-dashoffset: ${calculateCircleProgress(0)};
      }
      to {
        stroke-dashoffset: ${calculateCircleProgress(progress)};
      }
    }
  `;
};
var getAnimations = () => {
  return `
    /* Animations */
    @keyframes scaleInAnimation {
      from {
        transform: translate(0px, 0px) scale(0);
      }
      to {
        transform: translate(0px, 0px) scale(1);
      }
    }
    @keyframes fadeInAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
};
var getStyles = ({ titleColor, textColor, iconColor, show_icons, progress }) => {
  return `
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${textColor};
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .rank-text {
      font: 800 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor}; 
      animation: scaleInAnimation 0.3s ease-in-out forwards;
    }
    .contribution-rank-text {
      font: 800 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: rgb(0, 128, 255); 
      animation: scaleInAnimation 0.3s ease-in-out forwards;
    }
    
    .bold { font-weight: 700 }
    .icon {
      fill: ${iconColor};
      display: ${!!show_icons ? "block" : "none"};
    }
    
    .rank-circle-rim {
      stroke: ${titleColor};
      fill: none;
      stroke-width: 3;
      opacity: 0.2;
    }
    ${process.env.NODE_ENV === "test" ? "" : getProgressAnimation({ progress })}
  `;
};

// src/common/Card.ts
var Card = class {
  width;
  height;
  hideBorder;
  hideTitle;
  hideContributorRank;
  border_radius;
  colors;
  title;
  repositoryNameTitle;
  css;
  paddingX;
  paddingY;
  titlePrefixIcon;
  animations;
  a11yTitle;
  a11yDesc;
  /**
   * @param {object} args
   * @param {number?=} args.width
   * @param {number?=} args.height
   * @param {number?=} args.border_radius
   * @param {string?=} args.customTitle
   * @param {string?=} args.defaultTitle
   * @param {string?=} args.titlePrefixIcon
   * @param {ReturnType<import('../common/utils').getCardColors>?=} args.colors
   */
  constructor({
    width = 100,
    height = 100,
    border_radius = 4.5,
    colors = {},
    customTitle,
    defaultTitle = "",
    titlePrefixIcon = ""
  }) {
    this.width = width;
    this.height = height;
    this.hideBorder = false;
    this.hideTitle = false;
    this.hideContributorRank = false;
    this.border_radius = border_radius;
    this.colors = colors;
    this.title = customTitle !== void 0 ? encodeHTML(customTitle) : encodeHTML(defaultTitle);
    this.repositoryNameTitle = "Repository";
    this.css = "";
    this.paddingX = 25;
    this.paddingY = 35;
    this.titlePrefixIcon = titlePrefixIcon;
    this.animations = true;
    this.a11yTitle = "";
    this.a11yDesc = "";
  }
  disableAnimations() {
    this.animations = false;
  }
  /**
   * @param {{title: string, desc: string}} prop
   */
  setAccessibilityLabel({ title, desc }) {
    this.a11yTitle = title;
    this.a11yDesc = desc;
  }
  /**
   * @param {string} value
   */
  setCSS(value) {
    this.css = value;
  }
  /**
   * @param {boolean} value
   */
  setHideBorder(value) {
    this.hideBorder = value;
  }
  /**
   * @param {boolean} value
   */
  setHideTitle(value) {
    this.hideTitle = value;
    if (value) {
      this.height -= 30;
    }
  }
  /**
   * @param {boolean} value
   */
  setHideContributorRank(value) {
    this.hideContributorRank = value;
  }
  /**
   * @param {string} text
   */
  setTitle(text) {
    this.title = text;
  }
  renderTitle() {
    const titleText = `
      <text
        x="0"
        y="0"
        class="header"
        data-testid="header"
      >${this.title}</text>
    `;
    const prefixIcon = `
      <svg
        class="icon"
        x="0"
        y="-13"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
      >
        ${this.titlePrefixIcon}
      </svg>
    `;
    return `
      <g
        data-testid="card-title"
        transform="translate(${this.paddingX}, ${this.paddingY})"
      >
        ${flexLayout({
      items: [this.titlePrefixIcon && prefixIcon, titleText],
      gap: 25,
      direction: "row"
    }).join("")}
      </g>
    `;
  }
  renderSubTitle() {
    const repoTitleText = `
    <text
      x="0"
      y="5"
      class="sub-title-header"
      data-testid="header"
    >${this.repositoryNameTitle}</text>
  `;
    const gitPRIcon = `
    <svg
      class="icon"
      x="0"
      y="-13"
      viewBox="0 0 24 24 "
      version="1.1"
      width="24"
      height="24"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 2.70711L13.4142 4H14C17.3137 4 20 6.68629 20 10V16.1707C21.1652 16.5825 22 17.6938 22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.6938 16.8348 16.5825 18 16.1707V10C18 7.79086 16.2091 6 14 6H13.4142L14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711C14.3166 9.09763 13.6834 9.09763 13.2929 8.70711L10.2929 5.70711C9.90237 5.31658 9.90237 4.68342 10.2929 4.29289L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711ZM18 19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20C18.4477 20 18 19.5523 18 19ZM6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4ZM7 7.82929C8.16519 7.41746 9 6.30622 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.30622 3.83481 7.41746 5 7.82929V16.1707C3.83481 16.5825 3 17.6938 3 19C3 20.6569 4.34315 22 6 22C7.65685 22 9 20.6569 9 19C9 17.6938 8.16519 16.5825 7 16.1707V7.82929ZM6 18C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19C7 18.4477 6.55228 18 6 18Z"/>
    </svg>
  `;
    const starIcon = `
    <svg
      class="icon"
      x="0"
      y="-13"
      viewBox="0 0 24 24 "
      version="1.1"
      width="24"
      height="24"
    >
      <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
    const githubIcon = `
    <svg
      class="icon"
      x="0"
      y="-13"
      viewBox="0 0 24 24"
      version="1.1"
      width="24"
      height="24"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill-rule="evenodd" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z">
        </path>
      </g>
    </svg>`;
    return `
      <g
        data-testid="card-title"
        transform="translate(${this.paddingX}, ${this.paddingY + 30})"
      >
        ${flexLayout({
      items: [githubIcon, repoTitleText],
      gap: 30,
      direction: "row"
    }).join("")}
      </g>
      <g
        data-testid="card-title"
        transform="translate(${this.paddingX + 235}, ${this.paddingY + 30})"
      >
        ${flexLayout({
      items: [!this.hideContributorRank && gitPRIcon, starIcon],
      gap: 50,
      direction: "row"
    }).join("")}
      </g>
    `;
  }
  renderGradient() {
    if (typeof this.colors.bgColor !== "object") return "";
    const gradients = this.colors.bgColor.slice(1);
    return typeof this.colors.bgColor === "object" ? `
        <defs>
          <linearGradient
            id="gradient"
            gradientTransform="rotate(${this.colors.bgColor[0]})"
            gradientUnits="userSpaceOnUse"
          >
            ${gradients.map((grad, index) => {
      let offset = index * 100 / (gradients.length - 1);
      return `<stop offset="${offset}%" stop-color="#${grad}" />`;
    })}
          </linearGradient>
        </defs>
        ` : "";
  }
  /**
   * @param {string} body
   */
  render(body) {
    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-labelledby="descId"
      >
<a xlink:href="https://github.com/FrancoStino/github-contribution-card"
        xlink:title="github-contribution-card(new tab)"
        target="_blank">
          <title id="titleId">${this.a11yTitle}</title>
          <desc id="descId">${this.a11yDesc}</desc>
          <style>
            .header {
              font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
              fill: ${this.colors?.titleColor};
              animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            .sub-title-header {
              font: 800 14px 'Segoe UI', Ubuntu, Sans-Serif;
              fill: ${this.colors?.titleColor};
              animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            @supports(-moz-appearance: auto) {
              /* Selector detects Firefox */
              .header { font-size: 15.5px; }
            }
            ${this.css}

            ${process.env.NODE_ENV === "test" ? "" : getAnimations()}
            ${this.animations === false ? `* { animation-duration: 0s !important; animation-delay: 0s !important; }` : ""}
          </style>

          ${this.renderGradient()}

          <rect
            data-testid="card-bg"
            x="0.5"
            y="0.5"
            rx="${this.border_radius}"
            height="99%"
            stroke="${this.colors.borderColor}"
            width="${this.width - 1}"
            fill="${typeof this.colors.bgColor === "object" ? "url(#gradient)" : this.colors.bgColor}"
            stroke-opacity="${this.hideBorder ? 0 : 1}"
          />
          ${this.hideTitle ? "" : this.renderTitle()}
          ${this.hideTitle ? "" : this.renderSubTitle()}
          <g
            data-testid="main-card-body"
            transform="translate(0, ${this.hideTitle ? this.paddingX : this.paddingY + 20 + 30})"
          >
            ${body}
          </g>
        </a>
      </svg>
    `;
  }
};

// src/common/I18n.ts
var I18n = class {
  locale;
  translations;
  fallbackLocale;
  constructor({
    locale,
    translations
  }) {
    this.locale = locale;
    this.translations = translations;
    this.fallbackLocale = "en";
  }
  t(str) {
    if (!this.translations[str]) {
      throw new Error(`${str} Translation string not found`);
    }
    if (!this.translations[str][this.locale || this.fallbackLocale]) {
      throw new Error(`${str} Translation locale not found`);
    }
    return this.translations[str][this.locale || this.fallbackLocale];
  }
};

// src/translations.ts
var statCardLocales = ({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.title": {
      ar: `${encodedName} \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u063A\u064A\u062A \u0647\u0627\u0628`,
      cn: `${encodedName} \u7684 GitHub \u7EDF\u8BA1\u6570\u636E`,
      "zh-tw": `${encodedName} \u7684 GitHub \u7D71\u8A08\u6578\u64DA`,
      cs: `GitHub statistiky u\u017Eivatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      en: `${encodedName}'${apostrophe} GitHub Contributor Stats`,
      bn: `${encodedName} \u098F\u09B0 GitHub \u09AA\u09B0\u09BF\u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09A8`,
      es: `Estad\xEDsticas de GitHub de ${encodedName}`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hu: `${encodedName} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName}\u306E GitHub \u7D71\u8A08`,
      kr: `${encodedName}\uC758 GitHub \uAE30\uC5EC \uD1B5\uACC4`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      "pt-pt": `Estat\xEDsticas do GitHub de ${encodedName}`,
      "pt-br": `Estat\xEDsticas do GitHub de ${encodedName}`,
      np: `${encodedName}'${apostrophe} \u0917\u093F\u091F\u0939\u092C \u0924\u0925\u094D\u092F\u093E\u0919\u094D\u0915`,
      el: `\u03A3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC GitHub \u03C4\u03BF\u03C5 ${encodedName}`,
      ru: `\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 GitHub \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ${encodedName}`,
      "uk-ua": `\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 GitHub \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ${encodedName}`,
      id: `Statistik GitHub ${encodedName}`,
      ml: `${encodedName}'${apostrophe} \u0D17\u0D3F\u0D31\u0D4D\u0D31\u0D4D\u0D39\u0D2C\u0D4D \u0D38\u0D4D\u0D25\u0D3F\u0D24\u0D3F\u0D35\u0D3F\u0D35\u0D30\u0D15\u0D4D\u0D15\u0D23\u0D15\u0D4D\u0D15\u0D41\u0D15\u0D7E`,
      my: `Statistik GitHub ${encodedName}`,
      sk: `GitHub \u0161tatistiky pou\u017E\xEDvate\u013Ea ${encodedName}`,
      tr: `${encodedName} Hesab\u0131n\u0131n GitHub Y\u0131ld\u0131zlar\u0131`,
      pl: `Statystyki GitHub u\u017Cytkownika ${encodedName}`,
      uz: `${encodedName}ning Github'dagi statistikasi`,
      vi: `Th\u1ED1ng K\xEA GitHub ${encodedName}`,
      se: `GitHubstatistik f\xF6r ${encodedName}`
    },
    "statcard.totalstars": {
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0646\u062C\u0648\u0645",
      cn: "\u83B7\u6807\u661F\u6570\uFF08star\uFF09",
      "zh-tw": "\u7372\u6A19\u661F\u6578\uFF08star\uFF09",
      cs: "Celkem hv\u011Bzd",
      de: "Insgesamt erhaltene Sterne",
      en: "Total Stars Earned",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F Star",
      es: "Estrellas totales",
      fr: "Total d'\xE9toiles",
      hu: "Csillagok",
      it: "Stelle totali",
      ja: "\u30B9\u30BF\u30FC\u3055\u308C\u305F\u6570",
      kr: "\uBC1B\uC740 \uC2A4\uD0C0 \uC218",
      nl: "Totaal Sterren Ontvangen",
      "pt-pt": "Total de estrelas",
      "pt-br": "Total de estrelas",
      np: "\u0915\u0941\u0932 \u0924\u093E\u0930\u093E\u0939\u0930\u0942",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u0391\u03C3\u03C4\u03B5\u03C1\u03B9\u03CE\u03BD",
      ru: "\u0412\u0441\u0435\u0433\u043E \u0437\u0432\u0435\u0437\u0434",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0456\u0440\u043E\u043A",
      id: "Total Bintang",
      ml: "\u0D06\u0D15\u0D46 \u0D28\u0D15\u0D4D\u0D37\u0D24\u0D4D\u0D30\u0D19\u0D4D\u0D19\u0D7E",
      my: "Jumlah Bintang",
      sk: "Hviezdy",
      tr: "Toplam Y\u0131ld\u0131z",
      pl: "Liczba Gwiazdek dostanych",
      uz: "Yulduzchalar",
      vi: "T\u1ED5ng S\u1ED1 Sao",
      se: "Antal intj\xE4nade stj\xE4rnor"
    },
    "statcard.commits": {
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u062D\u0641\u0638",
      cn: "\u7D2F\u8BA1\u63D0\u4EA4\u6570\uFF08commit\uFF09",
      "zh-tw": "\u7D2F\u8A08\u63D0\u4EA4\u6578\uFF08commit\uFF09",
      cs: "Celkem commit\u016F",
      de: "Anzahl Commits",
      en: "Total Commits",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F Commit",
      es: "Commits totales",
      fr: "Total des Commits",
      hu: "\xD6sszes commit",
      it: "Commit totali",
      ja: "\u5408\u8A08\u30B3\u30DF\u30C3\u30C8\u6570",
      kr: "\uC804\uCCB4 \uCEE4\uBC0B \uC218",
      nl: "Aantal commits",
      "pt-pt": "Total de Commits",
      "pt-br": "Total de Commits",
      np: "\u0915\u0941\u0932 Commits",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF Commits",
      ru: "\u0412\u0441\u0435\u0433\u043E \u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u043A\u043E\u043C\u043C\u0456\u0442\u043E\u0432",
      id: "Total Komitmen",
      ml: "\u0D06\u0D15\u0D46 \u0D15\u0D2E\u0D4D\u0D2E\u0D3F\u0D31\u0D4D\u0D31\u0D41\u0D15\u0D7E",
      my: "Jumlah Komitmen",
      sk: "V\u0161etky commity",
      tr: "Toplam Commit",
      pl: "Wszystkie commity",
      uz: "'Commit'lar",
      vi: "T\u1ED5ng S\u1ED1 Cam K\u1EBFt",
      se: "Totalt antal commits"
    },
    "statcard.prs": {
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628",
      cn: "\u62C9\u53D6\u8BF7\u6C42\u6570\uFF08PR\uFF09",
      "zh-tw": "\u62C9\u53D6\u8ACB\u6C42\u6578\uFF08PR\uFF09",
      cs: "Celkem PRs",
      de: "PRs Insgesamt",
      en: "Total PRs",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F PR",
      es: "PRs totales",
      fr: "Total des PRs",
      hu: "\xD6sszes PR",
      it: "PR totali",
      ja: "\u5408\u8A08 PR",
      kr: "PR \uD69F\uC218",
      nl: "Aantal PR's",
      "pt-pt": "Total de PRs",
      "pt-br": "Total de PRs",
      np: "\u0915\u0941\u0932 PRs",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF PRs",
      ru: "\u0412\u0441\u0435\u0433\u043E pull request`\u043E\u0432",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E pull request`i\u0432",
      id: "Total Permintaan Tarik",
      ml: "\u0D06\u0D15\u0D46 \u0D2A\u0D41\u0D7E \u0D05\u0D2D\u0D4D\u0D2F\u0D7C\u0D24\u0D4D\u0D25\u0D28\u0D15\u0D7E",
      my: "Jumlah PR",
      sk: "V\u0161etky PR",
      tr: "Toplam PR",
      pl: "Wszystkie PR-y",
      uz: "'Pull Request'lar",
      vi: "T\u1ED5ng S\u1ED1 PR",
      se: "Totalt antal PR"
    },
    "statcard.issues": {
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u062A\u062D\u0633\u064A\u0646\u0627\u062A",
      cn: "\u6307\u51FA\u95EE\u9898\u6570\uFF08issue\uFF09",
      "zh-tw": "\u6307\u51FA\u554F\u984C\u6578\uFF08issue\uFF09",
      cs: "Celkem probl\xE9m\u016F",
      de: "Anzahl Issues",
      en: "Total Issues",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F Issue",
      es: "Issues totales",
      fr: "Nombre total d'incidents",
      hu: "\xD6sszes hibajegy",
      it: "Segnalazioni totali",
      ja: "\u5408\u8A08 issue",
      kr: "\uC774\uC288 \uAC1C\uC218",
      nl: "Aantal kwesties",
      "pt-pt": "Total de Issues",
      "pt-br": "Total de Issues",
      np: "\u0915\u0941\u0932 \u092E\u0941\u0926\u094D\u0926\u093E\u0939\u0930\u0942",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u0396\u03B7\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD",
      ru: "\u0412\u0441\u0435\u0433\u043E issue",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E issue",
      id: "Total Masalah Dilaporkan",
      ml: "\u0D06\u0D15\u0D46 \u0D32\u0D15\u0D4D\u0D15\u0D19\u0D4D\u0D19\u0D7E",
      my: "Jumlah Isu Dilaporkan",
      sk: "V\u0161etky probl\xE9my",
      tr: "Toplam Hata",
      pl: "Wszystkie Issues",
      uz: "'Issue'lar",
      vi: "T\u1ED5ng S\u1ED1 V\u1EA5n \u0110\u1EC1",
      se: "Total antal issues"
    },
    "statcard.contribs": {
      ar: "\u0633\u0627\u0647\u0645 \u0641\u064A",
      cn: "\u53C2\u4E0E\u9879\u76EE\u6570",
      "zh-tw": "\u53C3\u8207\u9805\u76EE\u6578",
      cs: "P\u0159isp\u011Bl k",
      de: "Beigetragen zu",
      en: "Contributed to",
      bn: "\u0985\u09AC\u09A6\u09BE\u09A8 \u09B0\u09C7\u0996\u09C7\u099B\u09C7\u09A8",
      es: "Contribuciones en",
      fr: "Contribu\xE9 \xE0",
      hu: "Hozz\xE1j\xE1rul\xE1sok",
      it: "Ha contribuito a",
      ja: "\u8CA2\u732E\u3057\u305F\u30EA\u30DD\u30B8\u30C8\u30EA",
      kr: "\uC804\uCCB4 \uAE30\uC5EC\uB3C4",
      nl: "Bijgedragen aan",
      "pt-pt": "Contribuiu em",
      "pt-br": "Contribuiu para",
      np: "\u0915\u0941\u0932 \u092F\u094B\u0917\u0926\u093E\u0928\u0939\u0930\u0942",
      el: "\u03A3\u03C5\u03BD\u03B5\u03B9\u03C3\u03C6\u03AD\u03C1\u03B8\u03B7\u03BA\u03B5 \u03C3\u03B5",
      ru: "\u0412\u043D\u0451\u0441 \u0432\u043A\u043B\u0430\u0434 \u0432",
      "uk-ua": "\u0412\u043D\u0456\u0441 \u0432\u043D\u0435\u0441\u043E\u043A \u0443",
      id: "Berkontribusi ke",
      ml: "\u0D38\u0D2E\u0D7C\u0D2A\u0D4D\u0D2A\u0D3F\u0D1A\u0D4D\u0D1A\u0D3F\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D4D",
      my: "Menyumbang kepada",
      sk: "\xDA\u010Dasti",
      tr: "Katk\u0131 Verildi",
      pl: "Kontrybucje",
      uz: "Hissa qo\u02BBshgan",
      vi: "\u0110\xE3 \u0110\xF3ng G\xF3p",
      se: "Bidragit till"
    }
  };
};
var repoCardLocales = {
  "repocard.template": {
    ar: "\u0642\u0627\u0644\u0628",
    bn: "\u099F\u09C7\u09AE\u09AA\u09CD\u09B2\u09C7\u099F",
    cn: "\u6A21\u677F",
    "zh-tw": "\u6A21\u677F",
    cs: "\u0160ablona",
    de: "Vorlage",
    en: "Template",
    es: "Plantilla",
    fr: "Mod\xE8le",
    hu: "Sablon",
    it: "Template",
    ja: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
    kr: "\uD15C\uD50C\uB9BF",
    nl: "Sjabloon",
    "pt-pt": "Modelo",
    "pt-br": "Modelo",
    np: "\u091F\u0947\u092E\u094D\u092A\u0932\u0947\u091F",
    el: "\u03A0\u03C1\u03CC\u03C4\u03C5\u03C0\u03BF",
    ru: "\u0428\u0430\u0431\u043B\u043E\u043D",
    "uk-ua": "\u0428\u0430\u0431\u043B\u043E\u043D",
    id: "Pola",
    ml: "\u0D1F\u0D46\u0D02\u0D2A\u0D4D\u0D32\u0D47\u0D31\u0D4D\u0D31\u0D4D",
    my: "Templat",
    sk: "\u0160abl\xF3na",
    tr: "\u015Eablon",
    pl: "Szablony",
    vi: "M\u1EABu",
    se: "Mall"
  },
  "repocard.archived": {
    ar: "\u0645\u062D\u0641\u0648\u0638",
    bn: "\u0986\u09B0\u09CD\u0995\u09BE\u0987\u09AD\u09A1",
    cn: "\u5DF2\u5F52\u6863",
    "zh-tw": "\u5DF2\u6B78\u6A94",
    cs: "Archivov\xE1no",
    de: "Archiviert",
    en: "Archived",
    es: "Archivados",
    fr: "Archiv\xE9",
    hu: "Archiv\xE1lt",
    it: "Archiviata",
    ja: "\u30A2\u30FC\u30AB\u30A4\u30D6\u6E08\u307F",
    kr: "\uBCF4\uAD00\uB428",
    nl: "Gearchiveerd",
    "pt-pt": "Arquivados",
    "pt-br": "Arquivados",
    np: "\u0905\u092D\u093F\u0932\u0947\u0916 \u0930\u093E\u0916\u093F\u092F\u094B",
    el: "\u0391\u03C1\u03C7\u03B5\u03B9\u03BF\u03B8\u03B5\u03C4\u03B7\u03BC\u03AD\u03BD\u03B1",
    ru: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D",
    "uk-ua": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D",
    id: "Arsip",
    ml: "\u0D36\u0D47\u0D16\u0D30\u0D3F\u0D1A\u0D4D\u0D1A\u0D24\u0D4D",
    my: "Arkib",
    sk: "Archivovan\xE9",
    tr: "Ar\u015Fiv",
    pl: "Zarchiwizowano",
    vi: "\u0110\xE3 L\u01B0u Tr\u1EEF",
    se: "Arkiverade"
  }
};
var availableLocales = Object.keys(repoCardLocales["repocard.archived"]);
function isLocaleAvailable(locale) {
  return availableLocales.includes(locale.toLowerCase());
}

// getContributors.ts
async function getContributors(username, nameWithOwner, token2) {
  const page = 1;
  const url = `https://api.github.com/repos/${nameWithOwner}/contributors?page=${page}&per_page=100`;
  const response = await fetch(url, {
    headers: { Authorization: `token ${token2}` }
  });
  console.log(response);
  if (!response.ok) return [];
  const contributors = await response.json();
  return contributors;
}

// src/cards/stats-card.ts
var token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
var createTextNode = ({ imageBase64, name, rank, contributionRank, index }) => {
  const staggerDelay = (index + 3) * 150;
  const calculateTextWidth = (text) => {
    return measureText(text, 18);
  };
  let offset = clampValue(calculateTextWidth(name), 230, 400);
  offset += offset === 230 ? 5 : 15;
  let offset2 = offset + 50;
  const contributionRankText = contributionRank?.includes("+") ? `<text x="4" y="18.5">
        ${contributionRank}
       </text>` : `<text x="7.2" y="18.5">
        ${contributionRank}
       </text>`;
  const rankText = rank.includes("+") ? `<text x="4" y="18.5">
        ${rank}
       </text>` : `<text x="7.2" y="18.5">
        ${rank}
       </text>`;
  let rankItems = import_lodash.default.isEmpty(contributionRank) ? `
    <g data-testid="rank-circle" transform="translate(${offset}, 0)">
      <circle class="rank-circle-rim" cx="12.5" cy="12.5" r="14" />
      <g class="rank-text">
        ${rankText}
      </g>
    </g>
    ` : `
    <g data-testid="rank-circle" transform="translate(${offset}, 0)">
      <circle class="rank-circle-rim" cx="12.5" cy="12.5" r="14" />
      <g class="rank-text">${contributionRankText}</g>
    </g>
    <g data-testid="rank-circle" transform="translate(${offset2}, 0)">
      <circle class="rank-circle-rim" cx="12.5" cy="12.5" r="14" />
      <g class="rank-text">
        ${rankText}
      </g>
    </g>
    `;
  return `
    <g class="stagger" style="animation-delay: ${staggerDelay}ms" transform="translate(25, 0)">
      <defs>
        <clipPath id="myCircle">
          <circle cx="12.5" cy="12.5" r="12.5" fill="#FFFFFF" />
        </clipPath>
      </defs>
      <image xlink:href="${imageBase64}" width="25" height="25" clip-path="url(#myCircle)"/>
      <g transform="translate(30,16)">
        <text class="stat bold">${name}</text>
      </g>
      ${rankItems}
    </g>
  `;
};
var renderContributorStatsCard = async (username, name, contributorStats = [], options = {}) => {
  const {
    hide = [],
    line_height = 25,
    hide_title = false,
    hide_border = false,
    hide_contributor_rank = true,
    order_by = "stars",
    title_color,
    icon_color,
    text_color,
    bg_color,
    border_radius,
    border_color,
    custom_title,
    theme = "default",
    locale,
    limit = -1,
    contributor_fetcher
  } = options;
  const orderBy = order_by;
  const lheight = parseInt(String(line_height), 10);
  const { titleColor, textColor, iconColor, bgColor, borderColor } = getCardColors({
    title_color,
    icon_color,
    text_color,
    bg_color,
    border_color,
    theme
  });
  const apostrophe = name && ["x", "s"].includes(name.slice(-1).toLocaleLowerCase()) ? "" : "s";
  const i18n = new I18n({
    locale,
    translations: statCardLocales({ name, apostrophe })
  });
  const imageBase64s = await Promise.all(
    Object.keys(contributorStats).map((key) => {
      const url = new URL(contributorStats[key].owner.avatarUrl);
      url.searchParams.append("s", "50");
      return getImageBase64FromURL(url.toString());
    })
  );
  let allContributorsByRepo;
  if (!hide_contributor_rank) {
    const fetchContributors = contributor_fetcher || getContributors;
    allContributorsByRepo = [];
    for (const key of Object.keys(contributorStats)) {
      const nameWithOwner = contributorStats[key].nameWithOwner;
      const contributors = await fetchContributors(username, nameWithOwner, token);
      allContributorsByRepo.push(contributors);
    }
  }
  const rankValues = {
    "S+": 5,
    S: 4,
    "A+": 3,
    A: 2,
    "B+": 1,
    B: 0
  };
  const sortFunction = orderBy == "stars" ? (a, b) => b.stars - a.stars : (a, b) => rankValues[b.contributionRank] - rankValues[a.contributionRank];
  const transformedContributorStats = contributorStats.map((contributorStat, index) => {
    const { url, name: name2, stargazerCount, numOfMyContributions } = contributorStat;
    if (hide_contributor_rank) {
      return {
        name: name2,
        imageBase64: imageBase64s[index],
        url,
        stars: stargazerCount,
        rank: calculateRank(stargazerCount)
      };
    } else {
      return {
        name: name2,
        imageBase64: imageBase64s[index],
        url,
        stars: stargazerCount,
        contributionRank: calculateContributionRank(
          name2,
          allContributorsByRepo[index],
          numOfMyContributions
        ),
        rank: calculateRank(stargazerCount)
      };
    }
  }).filter((repository) => !hide.includes(repository.rank)).sort(sortFunction);
  let statItems = Object.keys(transformedContributorStats).map(
    (key, index) => (
      // create the text nodes, and pass index so that we can calculate the line spacing
      createTextNode({
        ...transformedContributorStats[key],
        index,
        lheight
      })
    )
  );
  statItems = limit > 0 ? statItems.slice(0, limit) : statItems.slice();
  const distanceY = 8;
  let height = Math.max(30 + 45 + (statItems.length + 1) * (lheight + distanceY), 150);
  const cssStyles = getStyles({
    titleColor,
    textColor,
    iconColor,
    show_icons: true,
    progress: true
  });
  const width = 495;
  const card = new Card({
    customTitle: custom_title,
    defaultTitle: i18n.t("statcard.title"),
    titlePrefixIcon: "",
    width,
    height,
    border_radius,
    colors: {
      titleColor,
      textColor,
      iconColor,
      bgColor,
      borderColor
    }
  });
  card.setHideContributorRank(hide_contributor_rank);
  card.setHideBorder(hide_border);
  card.setHideTitle(hide_title);
  card.setCSS(cssStyles);
  return card.render(`
    <svg overflow="visible">
      ${flexLayout({
    items: statItems,
    gap: lheight + distanceY,
    direction: "column"
  }).join("")}
    </svg>
  `);
};

// src/fetchContributorStats.ts
var import_axios = __toESM(require("axios"));
var fetchContributorStats = async (username) => {
  const token2 = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  if (!token2) {
    throw new Error("GITHUB_PERSONAL_ACCESS_TOKEN is not set");
  }
  const response = await (0, import_axios.default)({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      Authorization: `token ${token2}`
    },
    validateStatus: (status) => status >= 200 && status < 500,
    data: {
      query: `query {
        user(login: ${JSON.stringify(username)}) {
          id
          name
          repositoriesContributedTo(first: 100, contributionTypes: [COMMIT]) {
            totalCount
            nodes {
              owner {
                id
                avatarUrl
              }
              isInOrganization
              url
              homepageUrl
              name
              nameWithOwner
              stargazerCount
              openGraphImageUrl
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }`
    }
  });
  if (response.status !== 200) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  if (response.data.errors) {
    throw new Error(response.data.errors[0]?.message || "GitHub API error");
  }
  const user = response.data.data?.user;
  if (!user) {
    throw new Error(`User "${username}" not found`);
  }
  return user;
};

// src/fetchAllContributorStats.ts
var import_axios2 = __toESM(require("axios"));
var import_lodash2 = __toESM(require("lodash"));
var MAX_REPOS_PER_QUERY = 100;
async function fetchContributionsForRange(username, range) {
  const token2 = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  if (!token2) {
    throw new Error("GITHUB_PERSONAL_ACCESS_TOKEN is not set");
  }
  const response = await (0, import_axios2.default)({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      Authorization: `token ${token2}`
    },
    validateStatus: (status) => status >= 200 && status < 500,
    data: {
      query: `query {
        user(login: ${JSON.stringify(username)}) {
          contributionsCollection(from: "${range.from}", to: "${range.to}") {
            commitContributionsByRepository(maxRepositories: ${MAX_REPOS_PER_QUERY}) {
              contributions {
                totalCount
              }
              repository {
                owner {
                  id
                  avatarUrl
                }
                isInOrganization
                url
                homepageUrl
                name
                nameWithOwner
                stargazerCount
                openGraphImageUrl
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`
    }
  });
  if (response.status !== 200) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  if (response.data.errors) {
    throw new Error(response.data.errors[0]?.message || "GitHub API error");
  }
  const user = response.data.data?.user;
  if (!user) {
    throw new Error(`User "${username}" not found`);
  }
  const commitContributionsByRepository = user.contributionsCollection.commitContributionsByRepository || [];
  return commitContributionsByRepository.map(({ contributions, repository }) => ({
    nameWithOwner: repository.nameWithOwner,
    repository,
    contributions: contributions.totalCount
  }));
}
function splitTimeRange(range) {
  const from = new Date(range.from);
  const to = new Date(range.to);
  const diffMonths = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (diffMonths >= 6) {
    const mid = new Date(from);
    mid.setMonth(mid.getMonth() + Math.floor(diffMonths / 2));
    mid.setDate(1);
    const midEnd = new Date(mid);
    midEnd.setDate(midEnd.getDate() - 1);
    midEnd.setHours(23, 59, 59, 999);
    return [
      { from: range.from, to: midEnd.toISOString() },
      { from: mid.toISOString(), to: range.to }
    ];
  } else if (diffMonths >= 2) {
    const ranges = [];
    let current = new Date(from);
    while (current < to) {
      const monthStart = new Date(current);
      const monthEnd = new Date(current);
      monthEnd.setMonth(monthEnd.getMonth() + 1);
      monthEnd.setDate(0);
      monthEnd.setHours(23, 59, 59, 999);
      if (monthEnd > to) {
        ranges.push({ from: monthStart.toISOString(), to: range.to });
      } else {
        ranges.push({ from: monthStart.toISOString(), to: monthEnd.toISOString() });
      }
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
    }
    return ranges;
  }
  return [range];
}
async function fetchContributionsWithSplitting(username, range, depth = 0) {
  const results = await fetchContributionsForRange(username, range);
  if (results.length >= MAX_REPOS_PER_QUERY && depth < 4) {
    const subRanges = splitTimeRange(range);
    if (subRanges.length === 1) {
      return results;
    }
    const subResults = await Promise.all(
      subRanges.map(
        (subRange) => fetchContributionsWithSplitting(username, subRange, depth + 1)
      )
    );
    return subResults.flat();
  }
  return results;
}
async function fetchAllContributorStats(username) {
  const token2 = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  if (!token2) {
    throw new Error("GITHUB_PERSONAL_ACCESS_TOKEN is not set");
  }
  const response = await (0, import_axios2.default)({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      Authorization: `token ${token2}`
    },
    validateStatus: (status) => status >= 200 && status < 500,
    data: {
      query: `query {
  user(login: "${username}") {
    id
    name
    contributionsCollection {
      contributionYears
    }
  }
}`
    }
  });
  if (response.status !== 200) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  if (response.data.errors) {
    throw new Error(response.data.errors[0]?.message || "GitHub API error");
  }
  const user = response.data.data?.user;
  if (!user) {
    throw new Error(`User "${username}" not found`);
  }
  const {
    id,
    name,
    contributionsCollection: { contributionYears }
  } = user;
  const yearlyContributions = await Promise.all(
    contributionYears.map(
      (year) => fetchContributionsWithSplitting(username, {
        from: `${year}-01-01T00:00:00Z`,
        to: `${year}-12-31T23:59:59Z`
      })
    )
  );
  const allContributions = yearlyContributions.flat();
  const nodes = import_lodash2.default.chain(allContributions).groupBy("nameWithOwner").map((contributions) => {
    const totalCount = import_lodash2.default.sumBy(contributions, "contributions");
    return {
      ...contributions[0].repository,
      numOfMyContributions: totalCount
    };
  }).value();
  return {
    id,
    name,
    repositoriesContributedTo: {
      nodes
    }
  };
}

// api/main.ts
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_lru_cache = require("lru-cache");
var import_helmet = __toESM(require("helmet"));
var import_express_rate_limit = __toESM(require("express-rate-limit"));

// src/demo-content.ts
var demoTemplate = '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta content="width=device-width,initial-scale=1" name="viewport" />\n  <title>GitHub Contribution Card</title>\n  <style>\n      /*PLACEHOLDER_CSS*/\n  </style>\n</head>\n<body>\n<div class="header">\n  <h1>GitHub Contribution Card</h1>\n  <p>Configure and preview your contribution stats card</p>\n</div>\n<div class="container">\n  <div class="panel">\n    <h2>Parameters</h2>\n    <div class="form-row">\n      <label for="username">Username *</label>\n      <input id="username" placeholder="anuraghazra" required type="text" />\n    </div>\n    <div class="section-title">Display</div>\n    <div class="form-row">\n      <label for="theme">Theme</label>\n      <select id="theme">\n        <option value="">default</option>\n        <!--PLACEHOLDER_THEME_OPTIONS-->\n      </select>\n    </div>\n    <div class="form-row">\n      <label for="locale">Locale</label>\n      <select id="locale">\n        <option value="">en</option>\n        <!--PLACEHOLDER_LOCALE_OPTIONS-->\n      </select>\n    </div>\n    <div class="form-row">\n      <label for="order_by">Order by</label>\n      <select id="order_by">\n        <option value="stars">stars</option>\n        <option value="contributions">contributions</option>\n      </select>\n    </div>\n    <div class="form-row">\n      <label for="limit">Limit</label>\n      <input id="limit" placeholder="-1 (all)" type="number" value="" />\n    </div>\n    <div class="form-row">\n      <label for="custom_title">Custom title</label>\n      <input id="custom_title" placeholder="My Stats" type="text" />\n    </div>\n    <div class="form-row">\n      <label for="hide">Hide ranks</label>\n      <input id="hide" placeholder="B,B%2B" type="text" />\n    </div>\n    <div class="form-row">\n      <label><input id="hide_title" type="checkbox" /> Hide title</label>\n    </div>\n    <div class="form-row">\n      <label><input id="hide_border" type="checkbox" /> Hide border</label>\n    </div>\n    <div class="form-row">\n      <label\n      ><input checked id="hide_contributor_rank" type="checkbox" /> Hide contributor\n        rank</label\n      >\n    </div>\n    <div class="form-row">\n      <label\n      ><input id="combine_all" type="checkbox" /> All years contributions</label\n      >\n    </div>\n    <div class="section-title">Custom Colors</div>\n    <div class="form-row">\n      <label for="title_color">Title</label>\n      <input id="title_color" placeholder="ff6b6b" type="text" /><input\n      id="title_color_pick"\n      type="color"\n      value="#2f80ed"\n    />\n    </div>\n    <div class="form-row">\n      <label for="text_color">Text</label>\n      <input id="text_color" placeholder="434d58" type="text" /><input\n      id="text_color_pick"\n      type="color"\n      value="#434d58"\n    />\n    </div>\n    <div class="form-row">\n      <label for="icon_color">Icon</label>\n      <input id="icon_color" placeholder="4c71f2" type="text" /><input\n      id="icon_color_pick"\n      type="color"\n      value="#4c71f2"\n    />\n    </div>\n    <div class="form-row">\n      <label for="bg_color">Background</label>\n      <input id="bg_color" placeholder="fffefe" type="text" /><input\n      id="bg_color_pick"\n      type="color"\n      value="#fffefe"\n    />\n    </div>\n    <div class="form-row">\n      <label for="border_color">Border</label>\n      <input id="border_color" placeholder="e4e2e2" type="text" /><input\n      id="border_color_pick"\n      type="color"\n      value="#e4e2e2"\n    />\n    </div>\n    <div class="section-title">Layout</div>\n    <div class="form-row">\n      <label for="border_radius">Border radius</label>\n      <input id="border_radius" placeholder="4.5" type="number" value="" />\n    </div>\n    <div class="form-row">\n      <label for="line_height">Line height</label>\n      <input id="line_height" placeholder="auto" type="number" value="" />\n    </div>\n    <div class="form-row">\n      <label for="cache_seconds">Cache (s)</label>\n      <input id="cache_seconds" placeholder="14400" type="number" value="" />\n    </div>\n    <div style="margin-top: 1rem; text-align: center">\n      <button class="btn" id="generate">Generate Card</button>\n    </div>\n  </div>\n  <div class="panel">\n    <h2>Preview</h2>\n    <div class="preview-area" id="preview">\n      <div class="empty-state">Enter a username and click Generate</div>\n    </div>\n    <h2 style="margin-top: 1.5rem">URL</h2>\n    <div class="url-row">\n      <textarea class="url-box" id="url_output" readonly rows="2"></textarea>\n      <button class="copy-btn" id="copy_url">Copy</button>\n    </div>\n    <h2 style="margin-top: 1rem">Markdown</h2>\n    <div class="url-row">\n      <textarea class="url-box" id="md_output" readonly rows="2"></textarea>\n      <button class="copy-btn" id="copy_md">Copy</button>\n    </div>\n  </div>\n</div>\n<script>\n  <!--PLACEHOLDER_JS-->\n</script>\n</body>\n</html>\n';
var demoStyles = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  background: #0d1117;\n  color: #c9d1d9;\n  min-height: 100vh;\n}\n\n.header {\n  text-align: center;\n  padding: 2rem 1rem 1rem;\n}\n\n.header h1 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #58a6ff;\n}\n\n.header p {\n  color: #8b949e;\n  margin-top: 0.25rem;\n  font-size: 0.9rem;\n}\n\n.container {\n  display: flex;\n  gap: 1.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem;\n  flex-wrap: wrap;\n}\n\n.panel {\n  flex: 1;\n  min-width: 320px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  padding: 1.25rem;\n}\n\n.panel h2 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #58a6ff;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #21262d;\n}\n\n.form-row {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-row label {\n  font-size: 0.8rem;\n  color: #8b949e;\n  min-width: 110px;\n}\n\n.form-row input,\n.form-row select {\n  flex: 1;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  padding: 0.45rem 0.65rem;\n  color: #c9d1d9;\n  font-size: 0.85rem;\n  min-width: 0;\n}\n\n.form-row input:focus,\n.form-row select:focus {\n  outline: none;\n  border-color: #58a6ff;\n}\n\n.form-row input[type='color'] {\n  padding: 2px 4px;\n  height: 32px;\n  width: 60px;\n  flex: none;\n}\n\n.form-row input[type='checkbox'] {\n  width: auto;\n  flex: none;\n}\n\n.section-title {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #8b949e;\n  margin: 1rem 0 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #21262d;\n}\n\n.btn {\n  display: inline-block;\n  background: #238636;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 0.55rem 1.2rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: center;\n}\n\n.btn:hover {\n  background: #2ea043;\n}\n\n.preview-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.preview-area img {\n  max-width: 100%;\n  border-radius: 6px;\n  background: #fff;\n}\n\n.url-box {\n  width: 100%;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  padding: 0.65rem;\n  color: #c9d1d9;\n  font-size: 0.75rem;\n  font-family: monospace;\n  word-break: break-all;\n  resize: vertical;\n  min-height: 48px;\n}\n\n.copy-btn {\n  background: #30363d;\n  color: #c9d1d9;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  padding: 0.35rem 0.75rem;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n\n.copy-btn:hover {\n  background: #484f58;\n}\n\n.url-row {\n  display: flex;\n  gap: 0.5rem;\n  width: 100%;\n  align-items: flex-start;\n}\n\n.url-row .url-box {\n  flex: 1;\n}\n\n.empty-state {\n  text-align: center;\n  color: #484f58;\n  padding: 3rem 1rem;\n  font-size: 0.95rem;\n}\n\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}\n";
var demoScript = `const $ = (id) => document.getElementById(id);

function buildQuery() {
  const p = new URLSearchParams();
  const u = $('username').value.trim();
  if (!u) return null;
  p.set('username', u);

  const pairs = [
    ['theme', $('theme').value],
    ['locale', $('locale').value],
    ['order_by', $('order_by').value],
    ['limit', $('limit').value],
    ['custom_title', $('custom_title').value],
    ['hide', $('hide').value],
    ['title_color', $('title_color').value],
    ['text_color', $('text_color').value],
    ['icon_color', $('icon_color').value],
    ['bg_color', $('bg_color').value],
    ['border_color', $('border_color').value],
    ['border_radius', $('border_radius').value],
    ['line_height', $('line_height').value],
    ['cache_seconds', $('cache_seconds').value],
  ];
  pairs.forEach(([k, v]) => {
    if (v) p.set(k, v);
  });

  if ($('hide_title').checked) p.set('hide_title', 'true');
  if ($('hide_border').checked) p.set('hide_border', 'true');
  if (!$('hide_contributor_rank').checked) p.set('hide_contributor_rank', 'false');
  if ($('combine_all').checked) p.set('combine_all_yearly_contributions', 'true');

  return p;
}

function generate() {
  const p = buildQuery();
  if (!p) return;

  p.set('_t', Date.now().toString());
  const url = location.origin + '/api?' + p.toString();

  $('preview').innerHTML =
    '<img src="' +
    url +
    '" alt="Contribution Card" onerror="this.parentElement.innerHTML=\\'<div class=empty-state>Error generating card</div>\\'"/>';

  p.delete('_t');
  const cleanUrl = location.origin + '/api?' + p.toString();

  $('url_output').value = cleanUrl;
  $('md_output').value = '![GitHub Contribution Card](' + cleanUrl + ')';
}

$('generate').addEventListener('click', generate);
$('username').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') generate();
});

document.querySelectorAll('[id$="_pick"]').forEach((pick) => {
  const textId = pick.id.replace('_pick', '');
  pick.addEventListener('input', () => {
    $(textId).value = pick.value.replace('#', '');
  });
  $(textId).addEventListener('input', () => {
    let v = $(textId).value;
    if (v && !v.startsWith('#')) v = '#' + v;
    if (/^#[0-9a-f]{6}$/i.test(v)) pick.value = v;
  });
});

['copy_url', 'copy_md'].forEach((id) => {
  $(id).addEventListener('click', () => {
    const src = id === 'copy_url' ? 'url_output' : 'md_output';
    navigator.clipboard.writeText($(src).value).then(() => {
      $(id).textContent = 'Copied!';
      setTimeout(() => ($(id).textContent = 'Copy'), 1500);
    }).catch(() => {
      $(id).textContent = 'Failed';
      setTimeout(() => ($(id).textContent = 'Copy'), 1500);
    });
  });
});
`;

// api/main.ts
var THEME_NAMES = Object.keys(themes);
var LOCALE_CODES = availableLocales;
function renderDemoPage() {
  const themeOptions = THEME_NAMES.map((t) => `<option value="${t}">${t}</option>`).join(
    ""
  );
  const localeOptions = LOCALE_CODES.map(
    (l) => `<option value="${l}">${l}</option>`
  ).join("");
  return demoTemplate.replace("/*PLACEHOLDER_CSS*/", demoStyles).replace("<!--PLACEHOLDER_JS-->", demoScript).replace("<!--PLACEHOLDER_THEME_OPTIONS-->", themeOptions).replace("<!--PLACEHOLDER_LOCALE_OPTIONS-->", localeOptions);
}
var CACHE_TTL_MS = 36e5;
var cache = new import_lru_cache.LRUCache({
  max: 100,
  ttl: CACHE_TTL_MS
});
var app = (0, import_express.default)();
app.set("trust proxy", 1);
app.use((0, import_compression.default)());
app.use(
  (0, import_helmet.default)({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"]
      }
    }
  })
);
var limiter = (0, import_express_rate_limit.default)({
  windowMs: 15 * 60 * 1e3,
  max: 100,
  message: "Too many requests from this IP, please try again later."
});
app.use("/api", limiter);
function getCached(key) {
  return cache.get(key) ?? null;
}
function setCache(key, data) {
  cache.set(key, data);
}
app.get("/api", (req, res, next) => {
  if (!req.query.username) {
    res.set("Content-Type", "text/html");
    return res.send(renderDemoPage());
  }
  next();
});
app.get("/api", async (req, res) => {
  const {
    username,
    hide,
    hide_title,
    hide_border,
    hide_contributor_rank,
    order_by,
    line_height,
    title_color,
    icon_color,
    text_color,
    bg_color,
    custom_title,
    border_radius,
    border_color,
    theme,
    cache_seconds,
    locale,
    combine_all_yearly_contributions,
    limit
  } = req.query;
  res.set("Content-Type", "image/svg+xml");
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(renderError("Something went wrong", "Language not found"));
  }
  const queryForCache = { ...req.query };
  delete queryForCache._t;
  const sortedEntries = Object.entries(queryForCache).sort(
    ([a], [b]) => a.localeCompare(b)
  );
  const cacheKey = JSON.stringify(sortedEntries);
  const cached = getCached(cacheKey);
  if (cached) {
    res.setHeader("X-Cache", "HIT");
    res.send(cached);
    return;
  }
  try {
    const result = await (combine_all_yearly_contributions ? fetchAllContributorStats(username) : fetchContributorStats(username));
    const name = result.name || username;
    const contributorStats = result.repositoriesContributedTo?.nodes || [];
    const cacheSeconds = clampValue(
      parseInt(cache_seconds || CONSTANTS.FOUR_HOURS, 10),
      CONSTANTS.FOUR_HOURS,
      CONSTANTS.ONE_DAY
    );
    res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
    const svg = await renderContributorStatsCard(username, name, contributorStats, {
      hide: parseArray(hide),
      hide_title: parseBoolean(hide_title),
      hide_border: parseBoolean(hide_border),
      hide_contributor_rank: parseBoolean(hide_contributor_rank),
      order_by,
      line_height,
      title_color,
      icon_color,
      text_color,
      bg_color,
      custom_title,
      border_radius,
      border_color,
      theme,
      locale: locale ? locale.toLowerCase() : null,
      limit
    });
    setCache(cacheKey, svg);
    res.setHeader("X-Cache", "MISS");
    res.send(svg);
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    const secondaryMessage = err instanceof Error && "secondaryMessage" in err ? err.secondaryMessage : void 0;
    return res.send(renderError(error.message, secondaryMessage));
  }
});
app.get("/", (_req, res) => {
  res.redirect("/api");
});
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const port = 9999;
  app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
  });
}
module.exports = app;
