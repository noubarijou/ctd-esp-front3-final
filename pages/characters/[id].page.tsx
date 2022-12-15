import { CardMedia, Container, Link, Typography } from "@mui/material"
import { getCharacter } from "dh-marvel/services/marvel/marvel.service"
import Head from "next/head"
import { Character } from "shared/types/apiSchema"

type CharacterInfoProps = {
    data: Character
}
export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: '1009156' } }],
        fallback: true
    }
}
export async function getStaticProps({ params }: any) {
    const data = await getCharacter(Number(params.id))
    return { props: { data } }
}
const CharacterInfo = (props: CharacterInfoProps) => {
    const data = props
    
    return (
        <Container>
            <>
                <Head>
                    <title>Personagem</title>
                </Head>
                <Typography
                    sx={{ marginTop: '10px' }}
                    align="center"
                    gutterBottom
                    noWrap
                    variant="h4"
                    component='div'>{data?.data?.name}</Typography>
                <CardMedia
                    component='img'
                    height='380'
                    image={`${data?.data?.thumbnail.path}.${data?.data?.thumbnail.extension}`}
                    alt={data?.data?.name} />
                <Typography
                    gutterBottom
                    variant='h6'
                    component='span'>{data?.data?.description}</Typography>
                <Typography
                    sx={{ marginTop: '20px' }}
                    gutterBottom
                    variant="h3"
                    component='div'
                >Quadrinhos com esse personagem:</Typography>
                {data?.data?.comics?.items?.map((issue) => (
                    <div key={issue.resourceURI}>
                        <Typography
                        key={issue?.name}
                            sx={{ margin: '10px 0' }}
                            gutterBottom
                            variant="h6"
                            component='div'
                        >{issue?.name}</Typography>
                    </div>
                ))}
            </>
        </Container>
    )
}

export default CharacterInfo