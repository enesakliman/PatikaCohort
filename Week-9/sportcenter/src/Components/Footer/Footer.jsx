import Container from '../Container/Container'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer id='footer' className='bg-darkBlue'>
        <Container>
        <div>
            <img src={logo} alt=""/>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque quod laborum reiciendis quas iusto optio beatae eos velit? Veniam ipsum earum voluptas, officia nihil adipisci in quo possimus quae!</p>
          </div>
          <div className="grid grid-cols-2 gap-10 justify-items-center text-white">
            <ul className="py-5">
              <li className="text-2xl font-semibold">Information</li>
              <li>About Us</li>
              <li>Classes</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <ul className="py-5">
              <li className="text-2xl font-semibold">Helpful Links</li>
              <li>Services</li>
              <li>Supports</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </Container>
    </footer>
  )
}

export default Footer