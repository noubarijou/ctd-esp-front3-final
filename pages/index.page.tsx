import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "shared/types/apiSchema";
import { Box, Button, CardMedia, Grid, Link, Pagination, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";


type Issue = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}


const Index = () => {

  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [issues, setIssues] = useState<Issue[]>()  
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  useEffect(() => {
    (async () => {
      const data = await getComics((page-1) *12, 12)
      .then(res => {
        setTotal(Number((res.data.total /12).toFixed()))
        return res.data.results.map(({title, id, thumbnail}: Issue) => {
          return {title, id, thumbnail}
        })
      })
      setIssues(data)
    })()
  }, [page])
  
  return (
    <>
      <Head>
        <title>CheckPoint Final</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Marvel HQ"}>
      <Stack spacing={2}>
        <Pagination sx={{alignSelf: 'center', paddingBottom: '15px'}} count={total} page={page} onChange={handleChange} variant="text" color="secondary" shape="rounded" showFirstButton showLastButton />
      </Stack>
          <Box sx={{margin: '0 20px', flexFGrow: 1}}>
      <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
            {issues && issues.map((issue: Issue) => (
              <Grid key={issue.id} width={350} item>
                <Typography
                align='center'
                gutterBottom
                noWrap
                variant="h6"
                component="div"
                >
                {issue.title}  
                </Typography>
                <CardMedia
                component='img'
                height='140'
                image={`${issue.thumbnail.path}.${issue.thumbnail.extension}`}
                alt={issue.title}/>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 10 }}>
                <Link href={`/checkout/${issue.id}`}>
                  <Button color='secondary' variant="contained">Comprar</Button>
                </Link>
                <Link href={`/issue/${issue.id}`}>
                  <Button>
                    Detalhes
                  </Button>
                </Link>
                
              </div>
              </Grid>
            ))}
          </Grid>
          </Box>
      </BodySingle>
    </>
  );
};

export default Index;
