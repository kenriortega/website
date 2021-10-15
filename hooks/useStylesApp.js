import { useColorModeValue, useMediaQuery } from "@chakra-ui/react"

export const useStylesApp = () => {
    const colorBase = useColorModeValue("#E53E3E", "#ED8936")
    const border = useColorModeValue("#282828", "#fff")
    const [isMobileDevice] = useMediaQuery("(max-width: 600px)")

    return {
        border,
        colorBase,
        isMobileDevice
    }
}