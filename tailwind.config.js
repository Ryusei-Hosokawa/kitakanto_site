module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                baseColor: "var(--baseColor)",
                mainColor: "var(--mainColor)",
                navBaseColor: "var(--navBaseColor)",
                navButtonColor1: "var(--navButtonColor1)",
                navButtonColor2: "var(--navButtonColor2)",
                navButtonColor3: "var(--navButtonColor3)",
                textColor1: "var(--textColor1)",
                textColor2: "var(--textColor2)",
                textColor3: "var(--textColor3)",
                accentColor: "var(--accentColor)",
                titleColor1: "var(--titleColor1)",
                titleColor2: "var(--titleColor2)",
                titleColor3: "var(--titleColor3)",
                titleColor4: "var(--titleColor4)",
                isDark: {
                    baseColor: "var(--baseColor)",
                    navBaseColor: "var(--navBaseColor)",
                    navButtonColor1: "var(--navButtonColor1)",
                    navButtonColor2: "var(--navButtonColor2)",
                    textColor1: "var(--textColor1)",
                    textColor2: "var(--textColor2)",
                    textColor3: "var(--textColor3)",
                    accentColor: "var(--accentColor)",
                    titleColor1: "var(--titleColor1)",
                    titleColor2: "var(--titleColor2)",
                    titleColor3: "var(--titleColor3)",
                    titleColor4: "var(--titleColor4)",
                },
            },
            fontFamily: {
                body: ["Nunito"],
            },
            keyframes: {
                'scaleAnimation': {
                    "0%": { scale: 1 },
                    "100%": { scale: 5 },
                  },
            },
            animation: {
                scaleAnimation: 'scaleAnimation linear',
            },
        },
    },
    plugins: [],
};
