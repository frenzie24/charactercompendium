import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css'

Modal.setAppElement('#root') // replace '#root' with the id of your app element

const CalculatorModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error")
        }
    }

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Open Calculator</button>
            <Modal className="w-[300px] h-fit" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>



                <div className="grid grid-cols-4 gap-1 w-[300px]  bg-gray-800">


                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="+" onClick={handleClick}>+</button>

                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="-" onClick={handleClick}>-</button>

                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="*" onClick={handleClick}>*</button>
                    <button onClick={calculate} id="result">=</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>

                    <button name="/" onClick={handleClick}>/</button>
                    <div className='min-w-[300px] flex flex-row flex-wrap justify-space-evenly'>
                        <form className="flex flex-row flex-wrap justify-center items-center w-full [&_*]:w-full [&_*]:h-12">
                            <input className="w-full" type="text" value={result} />

                        </form>
                        <button onClick={clear} id="clear">Clear</button>
                        <button className="m-4" onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>

                </div>

            </Modal>
        </div>
    );
}

export default CalculatorModal;