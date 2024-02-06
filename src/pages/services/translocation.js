import Newsletter from "../slices/newsletter"
import ServicePage from "../slices/servicePage"

const Translocation = () => {
  const page = {
    title: 'Translocation',
    desc: 'Get proven immigration and visa guidance.',
  }
  const content = (
    <main>
      <ServicePage page={page} />

      <section><Newsletter /></section>
    </main>
  )
  return content
}

export default Translocation