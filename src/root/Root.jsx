import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=''>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;