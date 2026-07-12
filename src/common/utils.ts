// @ts-check
import { themes } from '../../themes';

/**
 * @param {string} message
 * @param {string} secondaryMessage
 * @returns {string}
 */
export const renderError = (message, secondaryMessage = '') => {
  const errorMessages: Record<string, string> = {
    'Request failed with status code 502': 'GitHub API is temporarily unavailable',
    'Request failed with status code 503': 'GitHub API is temporarily unavailable',
    'Request failed with status code 429': 'Rate limit reached. Please try again later',
    timeout: 'Request timed out. Please try again',
    'Network Error': 'Unable to connect to GitHub',
  };

  const friendlyMessage =
    Object.entries(errorMessages).find(([key]) => message.includes(key))?.[1] || message;

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
<tspan x="25" dy="0" fill="#6C757D">${secondaryMessage || 'Please try again in a few moments'}</tspan>
</text>

<a href="https://github.com/FrancoStino/github-contribution-card/issues" target="_blank">
<text x="25" y="115" class="small" fill="#0366D6" style="text-decoration: underline;">
Report an issue →
</text>
</a>
</svg>
`;
};

/**
 * @see https://stackoverflow.com/a/48073476/10629172
 * @param {string} str
 * @returns {string}
 */
export const encodeHTML = (str) => {
  return str
    .replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
      return '&#' + i.charCodeAt(0) + ';';
    })
    .replace(/\u0008/gim, '');
};

/**
 * @param {number} num
 */
export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * parseFloat((Math.abs(num) / 1000).toFixed(1)) + 'k'
    : Math.sign(num) * Math.abs(num);
};

/**
 * @param {string} hexColor
 * @returns {boolean}
 */
function isValidHexColor(hexColor) {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/,
  ).test(hexColor);
}

/**
 * @param {string} value
 * @returns {boolean | string}
 */
export const parseBoolean = (value) => {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else {
    return value;
  }
};

/**
 * @param {string} str
 */
export const parseArray = (str) => {
  if (!str) return [];
  return str.split(',');
};

/**
 * @param {number} number
 * @param {number} min
 * @param {number} max
 */
export const clampValue = (number, min, max) => {
  // @ts-ignore
  if (Number.isNaN(parseInt(number))) return min;
  return Math.max(min, Math.min(number, max));
};

/**
 * @param {string[]} colors
 */
function isValidGradient(colors) {
  return isValidHexColor(colors[1]) && isValidHexColor(colors[2]);
}

/**
 * @param {string} color
 * @param {string} fallbackColor
 * @returns {string | string[]}
 */
function fallbackColor(color, fallbackColor) {
  let colors = color.split(',');
  let gradient = null;

  if (colors.length > 1 && isValidGradient(colors)) {
    gradient = colors;
  }

  return (gradient ? gradient : isValidHexColor(color) && `#${color}`) || fallbackColor;
}

/**
 * @param {object} props
 * @param {string[]} props.items
 * @param {number} props.gap
 * @param {number[]?=} props.sizes
 * @param {"column" | "row"?=} props.direction
 *
 * @returns {string[]}
 *
 * @description
 * Auto layout utility, allows us to layout things
 * vertically or horizontally with proper gaping
 */
export const flexLayout = ({ items, gap, direction, sizes = [] }) => {
  let lastSize = 0;
  // filter() for filtering out empty strings
  return items.filter(Boolean).map((item, i) => {
    const size = sizes[i] || 0;
    let transform = `translate(${lastSize}, 0)`;
    if (direction === 'column') {
      transform = `translate(0, ${lastSize})`;
    }
    lastSize += ((size as number) + gap) as number;
    return `<g transform="${transform}">${item}</g>`;
  });
};

/**
 * @typedef {object} CardColors
 * @prop {string?=} title_color
 * @prop {string?=} text_color
 * @prop {string?=} icon_color
 * @prop {string?=} bg_color
 * @prop {string?=} border_color
 * @prop {keyof typeof import('../../themes')?=} fallbackTheme
 * @prop {keyof typeof import('../../themes')?=} theme
 */
/**
 * returns theme based colors with proper overrides and defaults
 * @param {CardColors} options
 */
export const getCardColors = ({
  title_color,
  text_color,
  icon_color,
  bg_color,
  border_color,
  theme,
  fallbackTheme = 'default',
}) => {
  const defaultTheme = themes[fallbackTheme];
  const selectedTheme = themes[theme] || defaultTheme;
  const defaultBorderColor = selectedTheme.border_color || defaultTheme.border_color;

  // get the color provided by the user else the theme color
  // finally if both colors are invalid fallback to default theme
  const titleColor = fallbackColor(
    title_color || selectedTheme.title_color,
    '#' + defaultTheme.title_color,
  );
  const iconColor = fallbackColor(
    icon_color || selectedTheme.icon_color,
    '#' + defaultTheme.icon_color,
  );
  const textColor = fallbackColor(
    text_color || selectedTheme.text_color,
    '#' + defaultTheme.text_color,
  );
  const bgColor = fallbackColor(
    bg_color || selectedTheme.bg_color,
    '#' + defaultTheme.bg_color,
  );

  const borderColor = fallbackColor(
    border_color || defaultBorderColor,
    '#' + defaultBorderColor,
  );

  return { titleColor, iconColor, textColor, bgColor, borderColor };
};
// return console instance based on the environment
export const CONSTANTS = {
  THIRTY_MINUTES: '1800',
  TWO_HOURS: '7200',
  FOUR_HOURS: '14400',
  ONE_DAY: '86400',
};

export const SECONDARY_ERROR_MESSAGES = {
  MAX_RETRY: 'Please add an env variable called PAT_1 with your github token in vercel',
  USER_NOT_FOUND: 'Make sure the provided username is not an organization',
};

export class CustomError extends Error {
  static MAX_RETRY = 'MAX_RETRY';
  static USER_NOT_FOUND = 'USER_NOT_FOUND';
  type: any;
  secondaryMessage: any;

  /**
   * @param {string} message
   * @param {string} type
   */
  constructor(message, type) {
    super(message);
    this.type = type;
    this.secondaryMessage = SECONDARY_ERROR_MESSAGES[type] || type;
  }
}
/**
 * @see https://stackoverflow.com/a/48172630/10629172
 * @param {string} str
 * @param {number} fontSize
 * @returns
 */
export const measureText = (str, fontSize = 10) => {
  // prettier-ignore
  const widths = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0.2796875, 0.2765625,
    0.3546875, 0.5546875, 0.5546875, 0.8890625, 0.665625, 0.190625,
    0.3328125, 0.3328125, 0.3890625, 0.5828125, 0.2765625, 0.3328125,
    0.2765625, 0.3015625, 0.5546875, 0.5546875, 0.5546875, 0.5546875,
    0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875,
    0.2765625, 0.2765625, 0.584375, 0.5828125, 0.584375, 0.5546875,
    1.0140625, 0.665625, 0.665625, 0.721875, 0.721875, 0.665625,
    0.609375, 0.7765625, 0.721875, 0.2765625, 0.5, 0.665625,
    0.5546875, 0.8328125, 0.721875, 0.7765625, 0.665625, 0.7765625,
    0.721875, 0.665625, 0.609375, 0.721875, 0.665625, 0.94375,
    0.665625, 0.665625, 0.609375, 0.2765625, 0.3546875, 0.2765625,
    0.4765625, 0.5546875, 0.3328125, 0.5546875, 0.5546875, 0.5,
    0.5546875, 0.5546875, 0.2765625, 0.5546875, 0.5546875, 0.221875,
    0.240625, 0.5, 0.221875, 0.8328125, 0.5546875, 0.5546875,
    0.5546875, 0.5546875, 0.3328125, 0.5, 0.2765625, 0.5546875,
    0.5, 0.721875, 0.5, 0.5, 0.5, 0.3546875, 0.259375, 0.353125, 0.5890625,
  ];

  const avg = 0.5279276315789471;
  return (
    str
      .split('')
      .map((c) => (c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg))
      .reduce((cur, acc) => acc + cur) * fontSize
  );
};
export const getImageBase64FromURL = async (url: string) => {
  const imageURLData = await fetch(url);
  const buffer = await imageURLData.arrayBuffer();
  const stringifiedBuffer = Buffer.from(buffer).toString('base64');
  const contentType = imageURLData.headers.get('content-type');
  const imageBase64 = `data:image/${contentType};base64,${stringifiedBuffer}`;
  return new Promise((resolve) => {
    resolve(imageBase64);
  });
};
