import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Model from '../pages/Model';
import Register from '../pages/Register';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/model' element={<Model />} />
            <Route path='*' element={<Navigate to='/model' />} />
        </Routes>
    )
}

export default RoutesMain;