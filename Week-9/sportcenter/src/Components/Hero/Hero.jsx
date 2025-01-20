import Container from '../Container/Container';
import HeroContent from './HeroContent';

function Hero() {
    return (
        <section id='hero' className='relative'>
            <Container>
                <HeroContent />
            </Container>
        </section>
    )
}

export default Hero;