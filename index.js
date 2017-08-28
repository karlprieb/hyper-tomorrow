const foregroundColor = '#4d4d4c';
const backgroundColor = '#ffffff';
const borderColor = '#f1f1f1';
const cursorColor = '#d6d6d6';

const colors = {
  black: foregroundColor,
  red: '#c82829',
  green: '#718c00',
  yellow: '#eab700',
  blue: '#4271ae',
  magenta: '#8959a8',
  cyan: '#3e999f',
  white: backgroundColor,
  lightBlack: 'foregroundColor',
  lightRed: '#c82829',
  lightGreen: '#718c00',
  lightYellow: '#eab700',
  lightBlue: '#4271ae',
  lightMagenta: '#8959a8',
  lightCyan: '#3e999f',
  lightWhite: backgroundColor,
  lightGray: 'rgba(0, 0, 0, 0.075)',
};

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor,
	cursorColor,
	colors,
	css: `
    ${config.css || ''}

    .term_fit {
      padding: 0 14px;
    }

    .active_fqd {
      color: ${foregroundColor};
    }

    .active_fqd:hover {
      color: ${foregroundColor};
    }

    .tab_icon.icon_1idj {
      color: ${foregroundColor};
    }
	`
});
