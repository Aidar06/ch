import React, {useEffect, useState} from 'react';
import {MdAdd, MdDelete} from "react-icons/md";
import {v4 as uuidv4} from "uuid";
import {HiPencil} from "react-icons/hi";
import {IoCheckmarkSharp} from "react-icons/io5";

const Todo = () => {
    const [todoList,setTodoList] = useState([])
    const [updateList,setUpdateList] = useState(false)
    useEffect(()=> {
        setTodoList(JSON.parse(localStorage.getItem('checkLifeTodo')) || [])
    },[updateList])

    const [add,setAdd] = useState(false)
    const [name,setName] = useState('')

    const [checkIn,setCheckIn] = useState(false)
    function checkInFun(){
        setCheckIn(true)
        setTimeout(()=> {
            setCheckIn(false)
        }, 2000)
    }

// add list
    let listObg = {
        id: uuidv4(),
        done: false,
        name: name,
    }
    function addList(){
        let lists = JSON.parse(localStorage.getItem('checkLifeTodo')) || []
        let list = [...lists, listObg]
        localStorage.setItem('checkLifeTodo', JSON.stringify(list))
        setAdd(false)
        setName('')
        setUpdateList(!updateList)
    }
// add list

// done list
    function doneList(e,id){
        let listObj = {
            id: e.id,
            done: !e.done,
            name: e.name,
        }
        let lists = JSON.parse(localStorage.getItem('checkLifeTodo')) || []
        let list = []
        let newList = lists.map(el=> el.id === id? list.push(listObj): list.push(el))
        localStorage.setItem('checkLifeTodo', JSON.stringify(list))
        setUpdateList(!updateList)
    }
// done list

// delete list
    function deleteList(id){
        let lists = JSON.parse(localStorage.getItem('checkLifeTodo')) || []
        let list = lists.filter(el => el.id !== id)
        localStorage.setItem('checkLifeTodo', JSON.stringify(list))
        setUpdateList(!updateList)
    }
// delete list

// change name list
    const [changeName,setChangeName] = useState(false)
    function changeNameList(e,id){
        if (name !== ''){
            let listObj = {
                id: e.id,
                done: e.done,
                name: name,
            }
            let lists = JSON.parse(localStorage.getItem('checkLifeTodo')) || []
            let list = []
            let newList = lists.map(el=> el.id === id? list.push(listObj): list.push(el))
            localStorage.setItem('checkLifeTodo', JSON.stringify(list))
            setUpdateList(!updateList)
            setChangeName(false)
            setName('')
        }else {
            setChangeName(false)
        }
    }
// change name list

    return (
        <section id='todo'>
            <div className="container">
                <div onClick={()=> setAdd(false)} className="todo">
                    {
                        todoList.length !== 0?todoList.map((el,index)=> (
                            <div className='todo--block'>
                                <div className="todo--block__name">
                                    <div onClick={()=> doneList(el,el.id)}>
                                        {
                                            el.done?<IoCheckmarkSharp/>:''
                                        }
                                    </div>
                                    <h1>
                                        {index+ 1}. {el.name}
                                    </h1>
                                </div>
                                <div className="todo--block__set">
                                    <input value={name} onChange={(e)=> setName(e.target.value)} style={{width: changeName?'':'0px', border: changeName? '': 'none'}} placeholder='new name' type="text"/>

                                    <HiPencil onClick={()=> changeName? changeNameList(el,el.id) : setChangeName(true)} style={{color: 'cyan'}}/>
                                    <MdDelete onClick={()=> deleteList(el.id)} style={{color: 'orange'}}/>
                                </div>
                            </div>
                        )):<h1 className='todo--text'>
                            there is nothing
                        </h1>
                    }
                </div>
            </div>
            <div className='todoAdd'>
                <div style={{height: add? '': '0px'}} className="todoAdd--group">
                    <div className="todoAdd--group__block">
                        <p>name</p>
                        <input style={{border: checkIn? '2px solid red': ''}} value={name} onChange={(e)=> setName(e.target.value)} type="text"/>
                    </div>
                </div>
                <div onClick={()=>add? name === ''? checkInFun() :addList(): setAdd(true)} className="todoAdd--add">
                    <MdAdd/>
                </div>
            </div>
        </section>
    );
};

export default Todo;