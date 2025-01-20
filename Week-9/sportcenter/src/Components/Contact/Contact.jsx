import Container from '../Container/Container'
import General from './General'
import FormInput from './FormInput'
import Frame from './Frame'

function Contact() {
  return (
    <section id="contact">
        <Container>
            <General />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <FormInput />
                <Frame />
            </div>  
        </Container>
    </section>
  )
}

export default Contact