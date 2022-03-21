import { Routes, Route, Link } from "react-router-dom";
import List from '../Components/List'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import UserList from "../Components/UserList";
import Forms from '../Components/Forms';

function Toggle() {
    const dispatch = useDispatch();
    const isToggle = useSelector((state) => state.toggle.isToggle);

    const [visible, setVisible] = useState(true);
    const [type, setType] = useState('');

    return (
        <div className="">
            <List 
                table={ <UserList title="User List One"/>}
                form={ <Forms title="Form One" /> }
                type="user" add="Add" back="Back" primary="primary" danger="danger">
            </List>

            <List 
                table={ <UserList title="User List Two"/>}
                form={ <Forms title="Form Two" /> }
                type="user" add="Add" back="Back" primary="primary" danger="danger">
            </List>
            
        </div>
    );
}

export default Toggle;
