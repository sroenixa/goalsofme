import HomePageLayout from '../layouts/HomePageLayout'
import BottomMenu from '../components/shared/BottomMenu'
import EditGoal from '../components/edit-goal/EditGoal'

const EditGoalPage = (props) => {
  return (
    <HomePageLayout>
        <div className="edit-goal-page">
          <EditGoal id={props.match.params.id} {...props}/>
          <BottomMenu addactive={true}/>
        </div>
    </HomePageLayout>
  )
}

export default EditGoalPage