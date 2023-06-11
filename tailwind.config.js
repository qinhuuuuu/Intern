const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#DEF5D9",
    200: "#AEE4AD",
    300: "#73C686",
    400: "#28A745",
    500: "#008E39",
  },
  info: {
    100: "#E2F1FF",
    200: "#ADD9FF",
    300: "#72B7FB",
    400: "#2B88FB",
    500: "#006EEF",
  },
  warning: {
    100: "#FFF6D9",
    200: "#FFE1A8",
    300: "#FDC66E",
    400: "#F0A328",
    500: "#E99208",
  },
  error: {
    100: "#FDECEF",
    200: "#FFABB5",
    300: "#FA8091",
    400: "#EA3E53",
    500: "#DA072D",
  },
  primary: {
    1: '#02214C',
    2: '#0576C8',
    3: '#0684E0',
    4: '#E8F5FD',
  },
  secondary: {
    1: '#0B1D37',
    2: '#3E5575',
    3: '#0684E0',
    4: '#E8F5FD',
  },
  'neutral-1': {
    Black: '#000000',
    900: '#2C333A',
    800: '#424752',
    700: '#5A6271',
    600: '#6B7280',
    500: '#858F9B',
    400: '#929DAA',
    300: '#A1ACB8',
    200: '#CDD3DB',
    100: '#D2D8E0',
    50: '#DDE2E9',
  },
  'neutral-2': {
    300: '#DAE0E6',
    200: '#E2E7ED',
    100: '#E9EDF2',
    50: '#F2F4F7',
  },
  'neutral-3': {
    300: '#E3E6E9',
    200: '#EBEDEF',
    100: '#F0F1F3',
    50: '#F8F9FB',
    White: '#FFFFFF',
  },
  'red': {
    900: '#520111',
    800: '#780216',
    700: '#9E0B1F',
    600: '#C41829',
    500: '#EA2733',
    400: '#F75257',
    300: '#FF7D7D',
    200: '#FFA9A6',
    100: '#FFD2CF',
    50: '#FFF1F0',
  },
  'orange': {
    900: '#520111',
    800: '#780216',
    700: '#9E0B1F',
    600: '#C41829',
    500: '#EA2733',
    400: '#F75257',
    300: '#FF7D7D',
    200: '#FFA9A6',
    100: '#FFD2CF',
    50: '#FFF1F0',
  },
  'amber': {
    900: '#613400',
    800: '#874D00',
    700: '#AD6800',
    600: '#D48806',
    500: '#FAAD14',
    400: '#FFC53D',
    300: '#FFD666',
    200: '#FFE58F',
    100: '#FFF1B8',
    50: '#FFFBE6',
  }, 'yellow': {
    900: '#614700',
    800: '#876801',
    700: '#AD8B02',
    600: '#D4B108',
    500: '#FADB15',
    400: '#FFEC3C',
    300: '#FFF566',
    200: '#FFFB8F',
    100: '#FFFFB8',
    50: '#FEFFE0',
  }, 'lime': {
    900: '#183300',
    800: '#2D5900',
    700: '#448000',
    600: '#62A608',
    500: '#84CC15',
    400: '#9ED938',
    300: '#B9E660',
    200: '#D4F28D',
    100: '#EDFFBD',
    50: '#F9FFE6',
  }, 'green': {
    900: '#021706',
    800: '#073D0E',
    700: '#106318',
    600: '#1D8A24',
    500: '#2EB032',
    400: '#4FBD4F',
    300: '#78C975',
    200: '#A2D69F',
    100: '#CFE3CC',
    50: '#E3F0E1',
  }, 'teal': {
    900: '#001E1F',
    800: '#004544',
    700: '#016B66',
    600: '#15B8A6',
    500: '#35C4AF',
    400: '#001E1F',
    300: '#5AD1BB',
    200: '#83DECA',
    100: '#B0EBDC',
    50: '#E1F7F1',
  }, 'sky': {
    900: '#002466',
    800: '#01378C',
    700: '#0B51B3',
    600: '#186FD9',
    500: '#2A92FF',
    400: '#52ABFF',
    300: '#7AC3FF',
    200: '#A3D9FF',
    100: '#CCEBFF',
    50: '#F0FAFF',
  }, 'blue': {
    900: '#000C52',
    800: '#001678',
    700: '#08289E',
    600: '#1440C4',
    500: '#235CEA',
    400: '#4D83F7',
    300: '#78A7FF',
    200: '#A1C5FF',
    100: '#C9E0FF',
    50: '#F0F7FF',
  }, 'indigo': {
    900: '#040440',
    800: '#0B0866',
    700: '#1A128C',
    600: '#2F20B3',
    500: '#4932D9',
    400: '#715AE6',
    300: '#9B85F2',
    200: '#C6B5FF',
    100: '#E7DEFF',
    50: '#F4F0FF',
  }, 'purple': {
    900: '#170338',
    800: '#2A075E',
    700: '#421085',
    600: '#5F1DAB',
    500: '#7F2ED1',
    400: '#9E54DE',
    300: '#BC7FEB',
    200: '#DAADF7',
    100: '#F2DBFF',
    50: '#FAF0FF',
  }, 'pink': {
    900: '#520337',
    800: '#78064E',
    700: '#9E1065',
    600: '#C41D7C',
    500: '#EB2E94',
    400: '#F759A8',
    300: '#FF85BE',
    200: '#FFADD1',
    100: '#FFD6E7',
    50: '#FFF0F5',
  },

}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
        'heading': ['50px', '61px'],
        'body-1': ['14px', '22px'],
        'body-2': ['16px', '24px'],
        'body-4': ['16px', 'auto'],
        'body-5': ['18px', 'auto'],
        'button': ['16px', '24px'],
        'button-1': ['18px', '24px'],
        'caption': ['13px', '20px'],
        'title-1': ['20px', '28px'],
        'title-2': ['24px', '29px'],
        'title-3': ['28px', 'auto'],
        'title-4': ['30px', '44px'],
        'title-5': ['32px', '48px'],
        'title-6': ['24px', 'auto'],
        'title-7': ['24px', '50px'],
      },
      fontFamily: {
        mulish: ['Mulish', 'san-serif'],
        montserrat: ['Montserrat', 'san-serif'],
      },
      backgroundImage: {
        'hero': "url('/src/img/banner/banner-section-1-desktop.png')",
        'hero-transparent': "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.333333) 24.48%, #FFFFFF 100%)",
        'phone-num': "url('/src/img/header-footer/rectangle-4.png')",
        'banner-2': "url('/src/img/banner/banner-2.png')",
        'banner-2-transparent': "url('/src/img/banner/banner-2-transparent.png')",
        'review-transparent': "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, rgba(4, 18, 38, 0.76) 50.51%, rgba(4, 18, 38, 0.88) 100%)",
        'banner-3': "url('/src/img/banner-3/background.png')",
        'banner-3-transparent': "url('/src/img/banner-3/banner-3-transparent.png')",
      },
      boxShadow: {
        'form-shadow': "0px 4px 30px rgba(40, 53, 51, 0.15)",
      },
      animation: {
        'header': 'spin 300ms ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};