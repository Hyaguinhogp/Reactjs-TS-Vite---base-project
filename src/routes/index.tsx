import {Navigate, Route, Routes} from 'react-router-dom';
import Model from '../pages/Model';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/model' element={<Model />} />
            <Route path='*' element={<Navigate to='/model' />} />
        </Routes>
    )
}

export default RoutesMain;