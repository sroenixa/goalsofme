import Header from '../components/goals/Header'
import HomePageLayout from '../layouts/HomePageLayout'
import BottomMenu from '../components/shared/BottomMenu'
import Content from '../components/goals/Content'

const GoalsPage = () => {
  return (
    <HomePageLayout>
        <div className="goals-page">
          <Header/>
          <Content/>
          <BottomMenu addactive={true}/>
        </div>
    </HomePageLayout>
  )
}

export default GoalsPage