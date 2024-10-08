import { useState } from "react";


const useMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    }, [])
    return [menu]
};

export default useMenu;