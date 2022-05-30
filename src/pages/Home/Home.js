import About from '../../components/About/About'
import Expertise from '../../components/Expertise/Expertise'
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
          <Expertise />
      </Layout>
    </>
  )
}

export default Home