import React, { useState } from "react";
import CalculatorModal from './CalculatorModal'
const bar = '▀'
const BaseSats = () => {
    const [charm, setCharm] = useState('');
    const [cool, setCool] = useState('');
    const [sharp, setSharp] = useState('');
    const [tough, setTough] = useState('');
    const [weird, setWeird] = useState('');
    const [exp, setExp] = useState('');
    const [level, setLevel] = useState(bar);
    const [weapon, setWeapon] = useState('');
    const [hiddenWeapon1, setHiddenWeapon1] = useState();
    const [hiddenWeapon2, setHiddenWeapon2] = useState();
    const [count, setCount] = useState(0);

    return (
        <>
            <ul className="min-w-[600px]">
                <li className="bg-slate-600 mt-2 p-1 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Charm: {charm}</h2>
                    <div> <button className="min-w-4" onClick={() => {

                        setCharm(`${charm}${bar}`)
                    }}>+</button ></div>
                </li>
                <li className="bg-slate-600 mt-2 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Cool: {cool}</h2>
                    <button onClick={() => {

                        setCool(`${cool}${bar}`)
                    }}>+</button>
                </li>
                <li className="bg-slate-600 mt-2 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Sharp: {sharp}</h2>
                    <button onClick={() => {

                        setSharp(`${sharp}${bar}`)
                    }}>+</button>
                </li>
                <li className="bg-slate-600 mt-2 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Tough: {tough}</h2>
                    <button onClick={() => {

                        setTough(`${tough}${bar}`)
                    }}>+</button>
                </li>
                <li className="bg-slate-600 mt-2 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Weird: {weird}</h2><button onClick={() => {

                        setWeird(`${weird}${bar}`)
                    }}>+</button>
                </li>
                <li className="bg-slate-600 mt-2 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">EXP: {exp}</h2><button onClick={() => {
                        let e = exp.replaceAll(' ');
                        debugger;
                        e = e.length;
                        if (count > 3) {
                            setCount(0);
                            setExp('');
                            setLevel(level + bar)
                        } else {
                            setExp(exp == '' ? bar : exp + bar)

                            setCount(count + 1);
                        }
                    }}>+</button>
                </li>
                <li className="bg-slate-600 mt-2 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Level: {level}</h2>
                </li>
            </ul>
            <CalculatorModal />
        </>
    )
}

export default BaseSats;