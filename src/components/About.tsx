import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
function About() {

  return (
    <>
      <Container>
        <h1>About Me</h1>

        <p>
            I'm Student of University of Baguio currently as a IT student(1st Year), I'm eager to learn more about on the Front end and 
            Back end to further my knowledge and apply it on technical fields. My skills as of now: 
        </p>
        <Stack gap={3}>
        <div className="p-1"><strong>DATBASE:</strong><br /> - MySql <br /> - MongoDB</div>
        <div className="p-1"><strong>FRONTEND:</strong><br /> - React <br /> - TypeScript</div>
        <div className="p-1"><strong>BACKEND:</strong><br /> - Java</div>
    </Stack>
      </Container>
    </>
  )
}

export default About;