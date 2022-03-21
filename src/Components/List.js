import { Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComponent } from "../Redux/reducers/toggleSlice";
import { useState } from "react";
import UserList from "./UserList";
import Forms from "./Forms"

function List({name, primary, danger, add, back,tableName,formTitle,type,children,table,form}) {

    const dispatch = useDispatch();
    const isToggle = useSelector((state) => state.toggle.isToggle);
    const btnInfo = useSelector((state) => state.toggle.btnInfo);
    const [active, setActive] = useState(true);
    
    const handlActives = (active) => {
        setActive(active);
    };

    console.log(children);

    return (
        <div>
            <Button onClick={()=> handlActives(!active)} variant={active ? primary : danger} size="md"> {active ? add : back} </Button>
            <div>
                { active ? table : form}
            </div>
        </div>
    );
}

export default List;