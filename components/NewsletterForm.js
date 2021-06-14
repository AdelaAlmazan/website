import { FaEnvelope, FaUser } from "react-icons/fa";
import {
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";

export const NewsletterForm = () => {
  return (
    <Box bg="brand.900" borderRadius="lg" p={8}>
      <Heading as="h4" py={2}>
        Únete y ponte al día en desarrollo web
      </Heading>
      <Text py={2}>
        Recibe puntualmente información sobre las últimas novedades en
        tecnologías web y desarrollo web moderno para que estés siempre estés a
        la última
      </Text>
      <form
        action="https://www.getrevue.co/profile/carlosazaustre/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <Stack spacing="24px" py={2}>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<FaUser />}
            />
            <Input
              bg="white"
              placeholder="Tu nombre)"
              type="text"
              name="member[first_name]"
              id="member_first_name"
            />
          </InputGroup>

          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<FaEnvelope />}
            />
            <Input
              bg="white"
              placeholder="Tu email"
              type="email"
              name="member[email]"
              id="member_email"
            />
          </InputGroup>

          <Button
            colorScheme="secondary"
            fontFamily="heading"
            w="100%"
            type="submit"
            name="member[subscribe]"
            id="member_submit"
            size="lg"
          >
            Suscríbirme
          </Button>

          <Text px={2}>
            Subscribiéndote, estás de acuerdo con los{" "}
            <Link href="https://www.getrevue.co/terms">Términos de uso</Link> de
            Revue y su{" "}
            <Link href="https://www.getrevue.co/privacy">
              Política de Privacidad
            </Link>
            .
          </Text>

          <Text px={2}>🔒 Libre de Spam. Sólo contenido que te interesa.</Text>
        </Stack>
      </form>
    </Box>
  );
};
