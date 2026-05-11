import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

function About() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">About Me</h1>
      <p className="lead">
        I'm a 1st Year IT student at the University of Baguio, eager to learn more 
        about Front-end and Back-end development to further my knowledge and 
        apply it in technical fields.
      </p>
      
      <hr />
      
      <h3>Skills</h3>
      <Stack gap={2}>
        <div className="bg-light border p-3 rounded">
          <strong>DATABASE:</strong><br />
          <Badge bg="secondary" className="me-1">MySQL</Badge>
          <Badge bg="secondary">MongoDB</Badge>
        </div>
        <div className="bg-light border p-3 rounded">
          <strong>FRONTEND:</strong><br />
          <Badge bg="secondary" className="me-1">React</Badge>
          <Badge bg="secondary">TypeScript</Badge>
        </div>
        <div className="bg-light border p-3 rounded">
          <strong>BACKEND:</strong><br />
          <Badge bg="secondary">Java</Badge>
        </div>
      </Stack>
    </Container>
  );
}

export default About;
