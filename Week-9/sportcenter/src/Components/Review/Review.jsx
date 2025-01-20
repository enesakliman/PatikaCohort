import Container from "../Container/Container"
import ReviewInfo from "./ReviewInfo"
import Content from "./Content"
function Review() {
  return (
    <section id="review" className="py-8"> 
        <Container>
            <ReviewInfo />
            <Content />
        </Container>
    </section>
  )
}

export default Review