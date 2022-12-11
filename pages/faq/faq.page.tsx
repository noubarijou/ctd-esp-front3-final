import { Accordion, AccordionSummary, Container, Typography } from "@mui/material"
import { faqsData } from "dh-marvel/components/faqs/faqsData"
import Head from "next/head"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from "@mui/material/AccordionDetails"

export const FaQ = () => {
    console.log(faqsData[0])
  return (
    <Container>
    <>
    <Head>
        <title>FaQ</title>
    </Head>
    <Typography
    gutterBottom
    noWrap
    variant="h2"
    component="div"
    align="center">
        Tire suas dúvidas
    </Typography>
    {faqsData.map((faq) =>(
        <Accordion key={faq.id}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='pane11a-content'
            id='pane11a-header'>
                <Typography
                gutterBottom
                variant="h4"
                component='div'>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
            >
                <Typography
                >
                    {faq.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    ))}
    </>
    </Container>
  )
}

export default FaQ