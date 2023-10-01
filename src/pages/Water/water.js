import React, {useEffect, useState} from 'react';
import {HiPencil} from "react-icons/hi";
import {FaMinus, FaPlus} from "react-icons/fa";
import {BiReset} from "react-icons/bi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";

const Water = () => {
    const [obj,setObj] = useState(JSON.parse(localStorage.getItem('checkLifeWater')) || {check:false})
    const [liter,setLiter] = useState(0)
    const [ml,setMl] = useState(0)
    const [weight,setWeight] = useState(20)
    const [train,setTrain] = useState(0)
    const [type,setType] = useState(true)
    const [page,setPage] = useState(obj.check)

    useEffect(()=> {
        let m = (weight * 25) + (train * 2 *300)
        setMl(Math.floor(m/1000 * 10)/10 * 1000)
        setLiter(Math.floor(m/1000 * 10)/10)
    },[weight,train])

    function addWater(){
        let waterObj ={
            check: true,
            liter: liter,
            ml: ml,
            doneL: 0,
            doneML:0,
        }

        localStorage.setItem('checkLifeWater', JSON.stringify(waterObj))
        setObj(JSON.parse(localStorage.getItem('checkLifeWater')))
        setPage(true)
    }

    // water balance
    const [donePlus,setDonePlus] = useState(false)
    const [doneMinus,setDoneMinus] = useState(false)
    const [donePlusValue,setDonePlusValue] = useState(0)
    const [doneMinusValue,setDoneMinusValue] = useState(0)

    // change obj
    function changeWater(mp){
        let waterObj ={
            check: obj.check,
            liter: obj.liter,
            ml: obj.ml,
            doneL: Math.floor( (mp?obj.doneML +  +donePlusValue:obj.doneML -  +doneMinusValue)/1000 *10)/10,
            doneML: mp? obj.doneML + +donePlusValue : obj.doneML - +doneMinusValue,
        }

        localStorage.setItem('checkLifeWater', JSON.stringify(waterObj))
        setObj(JSON.parse(localStorage.getItem('checkLifeWater')))
        setDonePlusValue(0)
        setDoneMinusValue(0)
    }

    // restart water
    function restartWater(){
        let waterObj ={
            check: obj.check,
            liter: obj.liter,
            ml: obj.ml,
            doneL: 0,
            doneML: 0,
        }

        localStorage.setItem('checkLifeWater', JSON.stringify(waterObj))
        setObj(JSON.parse(localStorage.getItem('checkLifeWater')))
        setDonePlusValue(0)
        setDoneMinusValue(0)
    }

    // bottle
    const [bottle1,setBottle1] = useState(false)
    const [bottle2,setBottle2] = useState(false)
    const [bottle3,setBottle3] = useState(false)
    const [bottle4,setBottle4] = useState(false)
    const [bottle5,setBottle5] = useState(false)
    const [bottle6,setBottle6] = useState(false)
    const bottleArr = [setBottle1,setBottle2, setBottle3, setBottle4, setBottle5, setBottle6]

    useEffect(()=> {
        let p = (obj.doneML / obj.ml)*100
        let n = 0
        if (p === 0){
            n = false
        }else if (p > 0 && p <= 17){
            n = 0
        }else  if (p >= 17 && p <= 34){
            n = 1
        }else if (p >= 34 && p <= 51){
            n = 2
        }else if (p >= 51 && p <= 68){
            n = 3
        }else if (p >= 68 && p <= 85){
            n = 4
        }else if (p >= 85 && p <= 100){
            n = 5
        }
        for (let i = 0;i < bottleArr.length; i++){
            i <= n && n !== false? bottleArr[i](true): bottleArr[i](false)
        }
    }, [obj])

    return (
        <section id='water'>
            <div className="container">
                {
                    page?
                        <div className="waterBalance">
                            <div className="waterBalance--header">
                                <div className="waterBalance--header__set">
                                    <p style={{color: type? '#586598':''}} onClick={()=> setType(true)}>L</p>
                                    <div></div>
                                    <p style={{color: type? '':'#586598'}} onClick={()=> setType(false)}>ML</p>
                                </div>
                                <div onClick={()=> setPage(false)} className="waterBalance--header__icon">
                                    <HiPencil/>
                                </div>
                            </div>
                            <div className="waterBalance--bottle">
                                <div className="bottle">
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle6? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle6? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle6? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle6? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle5? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle5? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle5? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle5? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle5? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle5? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle4? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle4? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle4? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle4? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle4? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle4? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle3? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle3? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle3? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle3? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle3? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle3? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle2? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle1? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle1? '': 'transparent'}}></div>
                                    <div className="pixel" style={{background: bottle1? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel" style={{background: bottle1? '': 'transparent'}}></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                    <div className="pixel"></div>
                                </div>
                            </div>
                            <div className="waterBalance--group">
                                <div className="waterBalance--group__check">
                                    <div className="waterBalance--group__check--text">
                                        <h3 style={{color: "orange"}}>{type? obj.doneL: obj.doneML}<span>{type? 'L':'ML'}</span></h3>
                                        <h3 style={{color: "green"}}>{type? obj.liter: obj.ml}<span>{type? 'L':'ML'}</span></h3>
                                    </div>
                                    <div className="waterBalance--group__check--line">
                                        <div style={{width: `${(obj.doneML / obj.ml)*100}%`}}></div>
                                    </div>
                                </div>
                                <div className="waterBalance--group__change">
                                    <div className="waterBalance--group__change--btn">
                                        <FaMinus onClick={()=> {setDonePlus(false); setDoneMinus(true)}}/>
                                        <BiReset onClick={()=> restartWater()}/>
                                        <FaPlus onClick={()=> {setDoneMinus(false); setDonePlus(true)}}/>
                                    </div>
                                    <div className="waterBalance--group__change--inputs">
                                        <div style={{height: donePlus? '': '0px',border: donePlus? '': 'none'}} className="waterBalance--group__change--inputs__block">
                                            <div  className="waterBalance--group__change--inputs__block--text">
                                                <h3>{donePlusValue}ml</h3>
                                                <div>
                                                    <IoMdArrowDropup onClick={()=> setDonePlusValue(+donePlusValue !== obj.ml - obj.doneML? +donePlusValue + 1: +donePlusValue)}/>
                                                    <IoMdArrowDropdown onClick={()=> setDonePlusValue(+donePlusValue !== 0? +donePlusValue - 1: +donePlusValue)}/>
                                                </div>
                                            </div>
                                            <div className="waterBalance--group__change--inputs__block--range">
                                                <input onChange={(e)=> setDonePlusValue(e.target.value)} value={donePlusValue} min={0} max={obj.ml - obj.doneML} type="range"/>
                                                <FaPlus onClick={()=> changeWater(true)}/>
                                            </div>
                                        </div>
                                        <div style={{height: doneMinus? '': '0px',border: doneMinus? '': 'none'}} className="waterBalance--group__change--inputs__block">
                                            <div  className="waterBalance--group__change--inputs__block--text">
                                                <h3>{doneMinusValue}ml</h3>
                                                <div>
                                                    <IoMdArrowDropup onClick={()=> setDoneMinusValue(+doneMinusValue !== obj.doneML? +doneMinusValue + 1: +doneMinusValue)}/>
                                                    <IoMdArrowDropdown onClick={()=> setDoneMinusValue(+doneMinusValue !== 0? +doneMinusValue - 1: +doneMinusValue)}/>
                                                </div>
                                            </div>
                                            <div className="waterBalance--group__change--inputs__block--range">
                                                <input onChange={(e)=> setDoneMinusValue(e.target.value)} value={doneMinusValue} min={0} max={obj.doneML} type="range"/>
                                                <FaMinus onClick={()=> changeWater(false)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>:
                        <div className="water">
                            <div className="water--block">
                                <div className="water--block__range">
                                    <h3>{weight}kg</h3>
                                    <div className="water--block__range--input">
                                        <input onChange={(e)=> setWeight(e.target.value)} value={weight} type="range" min={20} max={140}/>
                                        <div className="water--block__range--input__num">
                                            <p>20</p>
                                            <p>80</p>
                                            <p>140</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="water--block__range">
                                    <h3>{train}h of training</h3>
                                    <div className="water--block__range--input">
                                        <input onChange={(e)=> setTrain(e.target.value)} value={train} type="range" step={0.5} min={0} max={6}/>
                                        <div className="water--block__range--input__num">
                                            <p>0</p>
                                            <p>3</p>
                                            <p>6</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="water--liter">
                                {
                                    type? <h1>{liter}<span> L</span></h1>:<h1>{ml}<span> ML</span></h1>
                                }
                                <div><p style={{color: type? '#586598':''}} onClick={()=> setType(true)}>L</p> <div></div> <p style={{color: type? '':'#586598'}} onClick={()=> setType(false)}>ML</p></div>
                            </div>
                            <div className="water--btn">
                                <button onClick={()=> addWater()}>save</button>
                                {
                                    obj.check? <button onClick={()=> setPage(true)}>cansel</button>:''
                                }
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default Water;

