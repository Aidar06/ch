import React, {useEffect, useRef, useState} from 'react';
import {MdOutlineFastfood, MdOutlineIncompleteCircle} from "react-icons/md";
import {LuListTodo} from "react-icons/lu";
import {FaBottleWater} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const myElementRef = useRef(null);
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const w = myElementRef.current.offsetWidth;
        setWidth(w)
    }, []);

    const navigate = useNavigate()
    function navTo(nav){
        navigate(`/${nav}`)
    }
    return (
        <section id='home'>
            <div className="container">
                <div className="home">
                    <div onClick={()=> navTo('fill')} style={{height: `${width}px`, background: 'orange'}} ref={myElementRef} className='home--block'>
                        <MdOutlineIncompleteCircle className='home--block__icon'/>
                        <h1>fill</h1>
                    </div>
                    <div onClick={()=> navTo('todo')} style={{height: `${width}px`, background: 'red'}} ref={myElementRef} className='home--block'>
                        <LuListTodo className='home--block__icon'/>
                        <h1>to do list</h1>
                    </div>
                    <div onClick={()=> navTo('water')} style={{height: `${width}px`, background: 'dodgerblue'}} ref={myElementRef} className='home--block'>
                        <FaBottleWater className='home--block__icon'/>
                        <h1>water balance</h1>
                    </div>
                    <div style={{height: `${width}px`, background: 'coral'}} ref={myElementRef} className='home--block'>
                        <MdOutlineFastfood className='home--block__icon'/>
                        <h1>calorie</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;