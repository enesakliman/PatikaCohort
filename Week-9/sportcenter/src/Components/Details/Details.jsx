import Container from "../Container/Container"
import DetailsInfo from "./DetailsInfo"

function Details() {
  return (
    <section id="details" className="bg-lightBlue">
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-lightBlue">
                <DetailsInfo />
            </div>
        </Container>
    </section>
  )
}

export default Details