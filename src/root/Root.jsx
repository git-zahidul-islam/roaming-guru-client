import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav';


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=''>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;