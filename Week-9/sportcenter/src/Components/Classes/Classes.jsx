import Container from '../Container/Container'
import General from './General' 
import Content from './Content'


function Classes() {
  return (
    <>
        <section id="classes" className="relative w-full h-auto pb-10">
            <div className="clip-path"></div>
            <Container>
                <General />
                <Content />
            </Container>
        </section>
    </>
  )
}

export default Classes