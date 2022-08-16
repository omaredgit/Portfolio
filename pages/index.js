import { Container, Box ,Heading} from "@chakra-ui/react"

const Page = () => {
    return(
        <Container >
            <Box borderRadius = "lg" bg= "red" p={3} mb={6} align="center">
                Hello, I am a Full-Stack Developer based in Colombia!
            </Box>
        <Box display={{md:'flex'}}>
            <Box flewGrow={1}>
                <Heading as = "h2" variant="page-title">
                    Omar Carvajal
                </Heading>
                <p> .Net Developer / React Developer </p>
            </Box>

        </Box>

        </Container>
    )
}

export default Page