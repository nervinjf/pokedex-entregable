import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNumber } from '../store/slice/number.slice';
import { useNavigate } from 'react-router-dom';
import { changeTheme } from '../store/slice/theme.slice';


const Settings = () => {

    const dispatch = useDispatch();
    const number = useSelector(state => state.number);
    const theme = useSelector(state => state.change)


    const navigate = useNavigate();

    return (
        < >
            <div className='pokeball-back1'></div>
            <div className='container-pag-setting' >
                <button className='button-back1' onClick={() => navigate(-1)}><i class="fa-solid fa-caret-left"></i></button>
                <h1>Settings</h1>
                <div className='move-settings-theme-page'>
                    <div className='Container-Theme'>
                        <h2>Theme</h2>
                        <div className='move-toggle-theme'>
                            <p>Light</p>
                            <div className='toogle'>
                                <input type="checkbox" name="" id="" checked={theme} onClick={e =>  dispatch(changeTheme(e.target.checked))}/>
                            </div>
                            <p>Dark</p>
                        </div>
                    </div>
                    <div className='Container-page'>
                        <h2>Items per page</h2>
                        <div className='container-page-select' >
                            <select onChange={e => dispatch(getNumber(e.target.value))} value={number}>
                            <option value="4">4 items</option>
                            <option value="8">8 items</option>
                            <option value="12">12 items</option>
                            <option value="16">16 items</option>
                            <option value="20">20 items</option>
                            </select>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Settings;