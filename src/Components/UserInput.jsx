import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slice/userName.slice';
import hash from "../img/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png";

const UserInput = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const dispatchUserName = () => {
        dispatch(changeName(userName))
        navigate("/characters")
    }

    return (
    <>
        <div className='pokeball-back1'></div>
        <div className='move-input'>
        <div className='box'>
            <div className='hash'>
                <h2>Hello trainer!</h2>
                <img src={hash} alt="" />
            </div>
            <div className='otro'>
                <p>Give me your name to start</p>
                <div className='move-button'>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                <button onClick={dispatchUserName}><i class="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
        </div>
    </>
    );
};

export default UserInput;