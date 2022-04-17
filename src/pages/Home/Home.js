import About from '../../components/About/About'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import Layout from '../../components/Layout/Layout'

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
          <Intro />
          <About />
      </Layout>
    </>
  )
}

export default Home