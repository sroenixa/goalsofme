import BottomMenu from '../components/shared/BottomMenu'
import Content from '../components/goal-detail/Content'
import ProductPageLayout from '../layouts/ProductPageLayout'
import AddAward from '../components/goal-detail/AddAward';
import { useState } from 'react';

const GoalDetailPage = (props) => {
  const [isAwardAddActive, setIsAwardAddActive] = useState(false);
  return (
    <ProductPageLayout>
        <div className="goal-detail-page">
          <Content id={props.match.params.id} setactive={setIsAwardAddActive}/>
          <BottomMenu addactive={true}/>
          <AddAward {...props} id={props.match.params.id} setactive={setIsAwardAddActive} active={isAwardAddActive}/>
        </div>
    </ProductPageLayout>
  )
}

export default GoalDetailPage