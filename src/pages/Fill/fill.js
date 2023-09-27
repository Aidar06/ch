import React, {useEffect, useState} from 'react';
import {MdAdd} from "react-icons/md";
import QuantityFill from "../../blocks/quantityFill/quantityFill";
import {v4 as uuidv4} from 'uuid';


const Fill = () => {
    const [fillArr,setFillArr] = useState([])
    const [renderChang,setRenderChang] = useState(false)
    const [blank,setBlank] = useState(false)
    function checkBlank(){
        setBlank(true)
        setTimeout(()=> {
            setBlank(false)
        }, 2000)
    }
    useEffect(()=> {
        setFillArr(JSON.parse(localStorage.getItem('checkLifeList')) || [])
    },[renderChang])
    const [sel,setSel] = useState(false)
    const [time,setTime] = useState(false)
    const [quantity,setQuantity] = useState(false)
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 5) {
            setValue(inputValue);
        }
    };

    // listObj
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [type,setType] = useState('t')
    const [done,setDone] = useState('')
    console.log(number)
    let listObg = {
        id: uuidv4(),
        done: done,
        type: type,
        name: name,
        number: number,
    }

    function addList(){
        let lists = JSON.parse(localStorage.getItem('checkLifeList')) || []
        let list = [...lists, listObg]
        localStorage.setItem('checkLifeList', JSON.stringify(list))
        setTime(false)
        setQuantity(false)
        setRenderChang(!renderChang)
        setNumber('')
        setName('')
        setValue('')
        setTime1('')
        setTime2('')
    }

    //time inputs
    const [time1, setTime1] = useState('');
    const handleChangeTime1 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setTime1(inputValue);
        }
    };

    const [time2, setTime2] = useState('');
    const handleChangeTime2 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setTime2(inputValue);
        }
    };
    useEffect(()=> {
        setNumber((time1 === ''?'00':time1.length === 1? '0'+time1: time1)+':' + (time2 === ''?'00':time2.length === 1? '0'+time2: time2))
    },[time1,time2])

    return (
        <section id='fill'>
            <div className="container">
                <div onClick={()=> {setSel(false);setTime(false);setQuantity(false)}} style={{height: fillArr.length >= 4? '' : '100vh'}} className="fill">
                    {
                        fillArr.length !== 0?
                            fillArr.map((el) => (
                                <QuantityFill obj={el} index={fillArr.indexOf(el)} setRenderChang={setRenderChang} renderChang={renderChang}/>
                            )):
                            <div className='fill--text'>
                                <h1>there is nothing</h1>
                            </div>
                    }
                </div>
            </div>
            <div className='fillAdd'>
                <div className="fillAdd--group">
                    <div style={{height: time? '' : '0px'}} className="fillAdd--group__time">
                        <div className="fillAdd--group__time--input">
                            <p>name</p>
                            <input style={{border: blank? '2px solid red': ''}} value={name} onChange={(e)=> setName(e.target.value)} type="text"/>
                        </div>
                        <div className="fillAdd--group__time--input">
                            <p>time</p>
                            <div style={{border: blank? '2px solid red': ''}} className="fillAdd--group__time--input__t">
                                <input placeholder='00' value={time1} onChange={(e)=> {handleChangeTime1(e)}} type="number"/>
                                <input placeholder='00' value={time2} onChange={(e)=> {handleChangeTime2(e)}} type="number"/>
                            </div>
                        </div>
                    </div>
                    <div style={{height: quantity? '' : '0px'}} className="fillAdd--group__quantity">
                        <div className="fillAdd--group__quantity--input">
                            <p>name</p>
                            <input style={{border: blank? '2px solid red': ''}} value={name} onChange={(e)=> setName(e.target.value)} type="text"/>
                        </div>
                        <div className="fillAdd--group__quantity--input">
                            <p>quantity</p>
                            <input style={{border: blank? '2px solid red':''}} type="number"
                                   value={value}
                                   onChange={(e)=> {handleChange(e); setNumber(e.target.value)}} max="99999" min="0" />
                        </div>
                    </div>
                    <div style={{height: sel? '' : '0px'}} className='fillAdd--group__sel'>
                        <div onClick={()=> {setTime(true); setSel(false);setType('t');setDone('00:00')}} className='fillAdd--group__sel--block'>
                            <p>time</p>
                        </div>
                        <div onClick={()=> {setQuantity(true); setSel(false);setType('q');setDone('0')}} className='fillAdd--group__sel--block'>
                            <p>quantity</p>
                        </div>
                    </div>
                </div>
                <div onClick={()=> time || quantity ? name !== '' && (number !== '' && number !== '00:00')? addList(): checkBlank() : setSel(true)} className="fillAdd--add">
                    <MdAdd/>
                </div>
            </div>
        </section>
    );
};

export default Fill;