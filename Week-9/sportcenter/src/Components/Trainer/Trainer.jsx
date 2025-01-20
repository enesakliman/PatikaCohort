import Container from '../Container/Container';
import General from './General';
import Content from './Content';
function Trainer() {
  return (
    <section id='trainer' className='bg-lightBlue py-8'>
        <Container> 
            <General />
            <Content />
        </Container>
    </section>
  )
}

export default Trainer