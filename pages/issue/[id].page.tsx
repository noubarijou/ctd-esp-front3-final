import { Button, CardMedia, Container, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service"
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router"
import { Comic } from "shared/types/apiSchema"


export const getStaticPaths = async () => {
    return {
        paths: [{params: {id: "2013"}}],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const data = await getComic(Number(params.id))
    return {
        props: {
            data
        },
        revalidate: 60 * 60
    }
    
}

type IssueDetailsProps = {
    data: Comic
    children?: React.ReactNode 
}

export const IssueDetailsPage = (props: IssueDetailsProps) => {
    const data = props
    const issue = data?.data

    return (
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <>
        <Head>
            <title>Issue Details</title>
        </Head>
        
        <Typography
        gutterBottom
        noWrap
        variant="h4"
        component='div'>{issue?.title}</Typography>
        <CardMedia
        component='img'
        height='300'
        image={`${issue?.thumbnail.path}.${issue?.thumbnail.extension}`}
        alt={issue?.title} />
        <Typography
        gutterBottom
        noWrap
        variant="h6"
        component='div'>
            Preço: {issue?.price}
        </Typography>
        {issue?.stock > 0 ? (
        <Link href={`/checkout/${issue.id}`}>
            <Button variant='contained' color='secondary'>Comprar</Button>
        </Link>
        ):(
        <Typography
        gutterBottom
        noWrap
        variant="h6"
        component='div'>Indisponível</Typography>    
    )}
        <Typography
        sx={{ color: 'red'}}
        gutterBottom
        noWrap
        variant="h6"
        component='div'>Personagens</Typography>
        {issue?.characters.items.map((item) => (
            <Link key={item.name} href={`/characters/${item.resourceURI.split('characters/').pop()}`}>
                <Typography key={item.name}
                sx={{cursor: 'pointer'}}
                gutterBottom
                noWrap
                variant="h6"
                component='div'>{item.name}</Typography>
            </Link>
        ))}
        </>
        </Container>
    )
}

export default IssueDetailsPage