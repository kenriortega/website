import { Flex, Text } from "./elements";
import { IconGithub } from "./icons";
import { CustomLink } from "./CustomLink";

const github = {
    user: "kenriortega",
    repo: "website",
};

export const OpenPR = ({ slug }) => {
    return (
        <Flex fontSize={["xs", "sm"]} align="center" my={2} color="grayblue.500">
            <IconGithub />
            <Text ml={2}>
                ¿Ves algún error o quieres modificar algo?{" "}
                <CustomLink
                    href={`https://github.com/${github.user}/${github.repo}/edit/main/data/posts/${slug}.mdx`}
                >
                    Haz una Pull Request
                </CustomLink>
            </Text>
        </Flex>
    );
};