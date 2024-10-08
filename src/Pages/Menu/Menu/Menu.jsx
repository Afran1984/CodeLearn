import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/popularMenu/popularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>CodeLearn | Menu</title>
            </Helmet>
            <Cover menuImage={menuImg}
            title="Our Menu"
            ></Cover>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;
