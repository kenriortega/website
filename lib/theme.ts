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

    colors: {
        spotify: {
            700: "#282828"
        },

    },
    sizes: {
        container: {
            sectionLanding: "1250px",
            desktop: "1250px",
            desktopInput: "450px"
        }
    },
    textStyles: {

    },
})

export default theme