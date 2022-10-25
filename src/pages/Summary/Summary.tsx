import Layout from './components/Layout'
import SummaryFooter from './components/SummaryFooter'
import SummaryHeader from './components/SummaryHeader'
import SummaryMain from './components/SummaryMain'

const Summary = () => {
  return (
    <Layout>
      <SummaryHeader />
      <SummaryMain />
      <SummaryFooter />
    </Layout>
  )
}
export default Summary
