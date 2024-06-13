import React, { useState } from "react";
import CalculatorModal from './CalculatorModal'
const bar = '▀'
const BaseSats = () => {
    const [stats, setStats] = useState();
    const [exp, setExp] = useState('');
    const [level, setLevel] = useState(bar);

    return (
        <>
            <ul className="w-70">
                <li className="bg-slate-600 mt-2 p-1 p-2 flex flex-row flex-wrap [&_*]:w-full justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">Charm: {charm}</h2>
                    <div> <button className="min-w-4" onClick={() => {

                        setStats(`${charm}${bar}`)
                    }}>+</button ></div>
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