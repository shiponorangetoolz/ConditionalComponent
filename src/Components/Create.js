import { Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleComponent } from "../Redux/reducers/toggleSlice";

function Create() {
    const dispatch = useDispatch();
    const handlToggle = () => {
        dispatch(toggleComponent());
    };
    return (
        <div>
        <Button onClick={handlToggle} variant="primary">Back</Button>{' '}
        <h1>Form for create user</h1>
        </div>
    );
}

export default Create;