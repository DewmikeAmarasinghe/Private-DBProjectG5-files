export default {
    mode: "jit",
    content: [
      "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
    ],
    darkMode: "class",  // Enables dark mode with a class
    theme: {
      screens: {
        md: { max: "1050px" },
        sm: { max: "550px" }
      },
      extend: {
        colors: {
          black: {
            900: "var(--black_900)",
            "900_01": "var(--black_900_01)",
            "900_2d": "var(--black_900_2d)",
            "900_3f": "var(--black_900_3f)",
            "900_7f": "var(--black_900_7f)"
          },
          blue: {
            50: "var(--blue_50)",
            a200: "var(--blue_a200)",
            a200_01: "var(--blue_a200_01)"
          },
          blue_gray: {
            100: "var(--blue_gray_100)",
            200: "var(--blue_gray_200)",
            "100_01": "var(--blue_gray_100_01)",
            "200_01": "var(--blue_gray_200_01)",
            "200_3f": "var(--blue_gray_200_3f)"
          },
          cyan: {
            a700: "var(--cyan_a700)"
          },
          gray: {
            50: "var(--gray_50)",
            300: "var(--gray_300)",
            500: "var(--gray_500)",
            600: "var(--gray_600)",
            700: "var(--gray_700)",
            900: "var(--gray_900)",
            "300_01": "var(--gray_300_01)",
            "50_0a": "var(--gray_50_0a)"
          },
          green: {
            500: "var(--green_500)",
            a700: "var(--green_a700)"
          },
          red: {
            a700: "var(--red_a700)"
          },
          teal: {
            "50_3f": "var(--teal_50_3f)"
          },
          white: {
            a700: "var(--white_a700)"
          },
          yellow: {
            800: "var(--yellow_800)"
          }
        },
        boxShadow: {
            xs: "0 0 2px 0 #0000003f",
            bs: "inset 0 0 4px 0 #0000002d"
        },
        backgroundImage: {
          gradient: "linear-gradient(90deg, #3e79e5,#01b8e3)"
        },
        fontFamily: {
          sora: "Sora",
          poppins: "Poppins",
          manrope: "Manrope"
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms')
    ]
  };
  