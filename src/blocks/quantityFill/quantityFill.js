import React, {useEffect, useId, useState} from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";
import {BiReset} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import {IoCheckmarkCircleSharp} from "react-icons/io5";
import {GrFormCheckmark} from "react-icons/gr";
import {IoIosCheckmark, IoMdCheckmarkCircleOutline} from "react-icons/io";
import {HiPencil} from "react-icons/hi";

const QuantityFill = ({obj, index, setRenderChang, renderChang}) => {
    const [minus, setMinus] = useState(false)
    const [plus, setPlus] = useState(false)

    function ChangeList(pm,t) {
            if (t === 'q'){
                let listObg = {
                    id: obj.id,
                    done: pm === '+' ? `${obj.number < +obj.done + +valuePlus ? obj.number : +obj.done + +valuePlus}` : `${+obj.done - +valueMinus < 0 ? 0 : +obj.done - +valueMinus}`,
                    type: obj.type,
                    name: obj.name,
                    number: obj.number,
                }
                let lists = JSON.parse(localStorage.getItem('checkLifeList')) || []
                let list = []
                let newList = lists.map(el => el.id === obj.id ? list.push(listObg) : list.push(el))
                localStorage.setItem('checkLifeList', JSON.stringify(list))
                setRenderChang(!renderChang)
            }else {
                function timeAdd() {
                    let n = obj.number.split(':').map(el => el[0] === '0' ? +el[1] : +el).reduce((acc, vel) => (acc * 60) + vel)
                    let d = obj.done.split(':').map(el => el[0] === '0' ? +el[1] : +el).reduce((acc, vel) => (acc * 60) + vel)
                    let pt = (+(time1Plus[0] === '0' ?time1Plus.length ===1? time1Plus[0]+'0':time1Plus[1] : time1Plus) * 60) + +(time2Plus[0] === '0' ?time2Plus.length === 1? time2Plus[0]+'0': time2Plus[1] : time2Plus)
                    let ps = (+(time1Minus[0] === '0' ?time1Minus.length ===1? time1Minus[0]+'0':time1Minus[1] : time1Minus) * 60) + +(time2Minus[0] === '0' ?time2Minus.length === 1? time2Minus[0]+'0': time2Minus[1] : time2Minus)
                    console.log(pt)
                    let res = +(pm === '+' ? (d + pt) > n ? n : d + pt : (d - ps) < 0 ? 0 : d - ps)
                    let h = Math.floor(res / 60).toString().length === 1 ? '0' + Math.floor(res / 60).toString() : Math.floor(res / 60).toString()
                    let m = (res % 60).toString().length === 1 ? '0' + (res % 60).toString() : (res % 60).toString()
                    return h + ':' + m
                }
                let listObg = {
                    id: obj.id,
                    done: timeAdd(),
                    type: obj.type,
                    name: obj.name,
                    number: obj.number,
                }
                let lists = JSON.parse(localStorage.getItem('checkLifeList')) || []
                let list = []
                let newList = lists.map(el => el.id === obj.id ? list.push(listObg) : list.push(el))
                localStorage.setItem('checkLifeList', JSON.stringify(list))
                setRenderChang(!renderChang)
            }
    }
    function DeleteList(id){
        let lists = JSON.parse(localStorage.getItem('checkLifeList')) || []
        let list = lists.filter(el => el.id !== id)
        localStorage.setItem('checkLifeList', JSON.stringify(list))
        setRenderChang(!renderChang)
    }
    function RestartList(id,t){
        let listObg = {
            id: obj.id,
            done: t === 'q' ? '0':'00:00',
            type: obj.type,
            name: obj.name,
            number: obj.number,
        }
        let lists = JSON.parse(localStorage.getItem('checkLifeList')) || []
        let list = []
        let newList = lists.map(el => el.id === obj.id ? list.push(listObg) : list.push(el))
        localStorage.setItem('checkLifeList', JSON.stringify(list))
        setRenderChang(!renderChang)
    }

//minus-plus-quantity
 const [valueMinus, setValueMinus] = useState('');
    const handleChangeMinus = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 5) {
            setValueMinus(inputValue);
        }
    };
    const [valuePlus, setValuePlus] = useState('');
    const handleChangePlus = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 5) {
            setValuePlus(inputValue);
        }
    };                 ////
//minus-plus-quantity

//minus-plus-time
    const [time1Minus, setTime1Minus] = useState('');
    const handleChangeTime1Minus = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setTime1Minus(inputValue);
        }
    };
    const [time2Minus, setTime2Minus] = useState('');
    const handleChangeTime2Minus = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setTime2Minus(inputValue);
        }
    };
    const [time1Plus, setTime1Plus] = useState('');
    const handleChangeTime1Plus = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setTime1Plus(inputValue);
        }
    };
    const [time2Plus, setTime2Plus] = useState('');
    const handleChangeTime2Plus = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setTime2Plus(inputValue);
        }
    };              ////
//minus-plus-time


// change update fill
    const [change,setChange] = useState(false)
    const [changeName,setChangeName] = useState('')
    const [changeNumber,setChangeNumber] = useState('')
    const [changeTime1,setChangeTime1] = useState('')
    const [changeTime2,setChangeTime2] = useState('')

    const handleChangeNumber = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 5) {
            setChangeNumber(inputValue);
        }
    };
    const handleChangeTime1 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setChangeTime1(inputValue);
        }
    };
    const handleChangeTime2 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2) {
            setChangeTime2(inputValue);
        }
    };
    useEffect(()=> {
        setChangeNumber((changeTime1 === ''?'00':changeTime1.length === 1? '0'+changeTime1: changeTime1)+':' + (changeTime2 === ''?'00':changeTime2.length === 1? '0'+changeTime2: changeTime2))
    },[changeTime1,changeTime2])

    function changeFill(){
        let listObg = {
            id: obj.id,
            done: obj.done,
            type: obj.type,
            name: changeName === ''?obj.name:changeName,
            number: changeNumber === '' || changeNumber === '00:00'?obj.number:changeNumber,
        }
        let lists = JSON.parse(localStorage.getItem('checkLifeList')) || []
        let list = []
        let newList = lists.map(el => el.id === obj.id ? list.push(listObg) : list.push(el))
        localStorage.setItem('checkLifeList', JSON.stringify(list))
        setRenderChang(!renderChang)
        setChangeName('')
        setChangeNumber('')
        setChange(false)
    }
// change update fill


    function objNumC(a) {
        return +(a.split(':')[0] * 60) + +a.split(':')[1]
    }
    return (
        <div key={index} className='QuantityFill'>
            <div className="QuantityFill--name">
                <h1>{index + 1}. {obj.name}</h1>
                <div className="QuantityFill--name__change">
                    <div style={{width: change? '': '0px'}} className="QuantityFill--name__change--block">
                        <input onChange={(e)=> setChangeName(e.target.value)} placeholder={obj.name} type="text"/>
                        {
                            obj.type === 'q'?
                                <input onChange={(e)=> handleChangeNumber(e)} value={changeNumber} placeholder={obj.number} type="number" style={{marginLeft: '5px'}}/>:
                                <div className="QuantityFill--name__change--block__inputs">
                                    <input onChange={(e)=> handleChangeTime1(e)} value={changeTime1} placeholder={obj.number.split(':')[0]} type="number"/>
                                    <input onChange={(e)=> handleChangeTime2(e)} value={changeTime2} placeholder={obj.number.split(':')[1]} type="number"/>
                                </div>
                        }
                    </div>
                    <HiPencil onClick={()=> change? changeName === '' && (changeNumber === '' || changeNumber === '00:00')? setChange(false): changeFill() : setChange(true)} className="QuantityFill--name__change--icon"/>
                </div>
            </div>
            {
                obj.done === obj.number?
                    <div className='QuantityFill--mark'>
                        <IoIosCheckmark/>
                    </div>:''
            }
            <div className="QuantityFill--group">
                <div className="QuantityFill--group__name">
                    <div className="QuantityFill--group__name--counts">
                        <p style={{color: 'orange'}}>{obj.done}</p>
                        <p style={{color: 'green'}}>{obj.number}</p>
                    </div>
                    <div className="QuantityFill--group__name--line">
                        <div
                            style={{width: obj.type === 'q' ? `${(obj.done / obj.number) * 100}%` : `${(objNumC(obj.done) / objNumC(obj.number)) * 100}%`}}></div>
                    </div>
                </div>
                <div className="QuantityFill--group__set">
                    <div className="QuantityFill--group__set--change">
                        {
                            obj.type === 't' ?
                                <div style={{width: minus ? '' : '0px', border: minus ? '' : 'none'}}>
                                    <input placeholder='00' value={time1Minus}
                                           onChange={(e) => handleChangeTime1Minus(e)} type="number"/>
                                    <input placeholder='00' value={time2Minus}
                                           onChange={(e) => handleChangeTime2Minus(e)} type="number"/>
                                </div> :
                                <input placeholder='123' value={valueMinus} onChange={(e) => handleChangeMinus(e)}
                                       style={{width: minus ? '' : '0px', border: minus ? '' : 'none'}}
                                       className="QuantityFill--group__set--change__input" type="number"/>
                        }
                        <FaMinus onClick={() => {
                            minus ? ChangeList('-',obj.type) : setMinus(true);setPlus(false)
                        }} className="QuantityFill--group__set--change__icon"/>
                    </div>
                    <div className="QuantityFill--group__set--change">
                        {
                            obj.type === 't' ?
                                <div style={{width: plus ? '' : '0px', border: plus ? '' : 'none'}}>
                                    <input placeholder='00' value={time1Plus} onChange={(e) => handleChangeTime1Plus(e)}
                                           type="number"/>
                                    <input placeholder='00' value={time2Plus} onChange={(e) => handleChangeTime2Plus(e)}
                                           type="number"/>
                                </div> :
                                <input placeholder='123' value={valuePlus} onChange={(e) => handleChangePlus(e)}
                                       style={{width: plus ? '' : '0px', border: plus ? '' : 'none'}}
                                       className="QuantityFill--group__set--change__input" type="number"/>
                        }
                        <FaPlus onClick={() => {
                            plus ? ChangeList('+',obj.type) : setMinus(false);setPlus(true)
                        }} className="QuantityFill--group__set--change__icon"/>
                    </div>
                    <div className="QuantityFill--group__set--icons">
                        <BiReset style={{color: 'cyan'}} onClick={()=> RestartList(obj.id,obj.type)}/>
                        <MdDelete style={{color: 'orange'}} onClick={()=> DeleteList(obj.id)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantityFill;