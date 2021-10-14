import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    styles: {
        global: (props) => ({
            "html, body": {
                fontSize: "sm",
                color: props.colorMode === "dark" ? "white" : "spotify.700",
                lineHeight: "tall",
                bg: props.colorMode === "dark" ? "spotify.700" : "white",
            },

        }),
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        spotify: {
            700: "#282828"
        },
        brand: {
            900: "#1da1f2",
            500: "#92d5ff",
            100: "rgb(210, 237, 255)",
        },
        secondary: {
            900: "#202225",
            500: "#2A2D31",
            100: "#3B3F45",
        },
        grayblue: {
            900: "#E2E8F0",
            500: "#A1A6AB",
            100: "#797C81",
        },

    },
    sizes: {
        container: {
            "1sm": "700px",
            "1xl": "1250px",
            "2xl": "1440px",
        }
    },
    textStyles: {
        filterListItem: {
            fontSize: ['18px', '24px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
            paddingLeft: '23px'
        },
        brandName: {
            fontSize: ['18px', '24px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%'
        },
        linkName: {
            fontSize: ['12px', '14px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
            justifyContent: "center",
            padding: "4px 16px"
        },
        cardPostText: {
            fontSize: ['14px', '16px', '18px', '24px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%'
        },
        cardPostTextSmall: {
            fontSize: ['10px', '12px', '12px', '14px'],
            fontWeight: '500',
            lineHeight: '110%',
            letterSpacing: '-1%'
        },
        cardPostTextVerySmall: {
            fontSize: ['10px', '10px'],
            fontWeight: '500',
            letterSpacing: '-1%'
        }
    },

})

export default theme