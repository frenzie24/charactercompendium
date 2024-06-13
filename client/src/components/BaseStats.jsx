import React, { useState } from "react";
import CalculatorModal from './CalculatorModal'

const bar = '▀'
const BaseSats = ({ name, val, progress }) => {
    const [stats, setStats] = useState([{ name, val, progress }]);
    const [exp, setExp] = useState('');
    const [level, setLevel] = useState(bar);
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-row flex-wrap justify-center items-center max-w-70">
            <h3 className="w-full text-center">Stats</h3>
            <ul className="max-w-70">
                <li className="bg-slate-600 mt-2 p-1 p-2 flex flex-row flex-wrap justify-between items-center rounded-lg">
                    < h2 className="text-3xl text-left pl-2">{stats[0].name}: {stats[0].val}</h2>
                {/*--   <h2 className="text-3xl text-left pl-2"> {stats[0].progress}</h2> */}
                    <div> <button className="min-w-4" onClick={() => {
                        let newStats = stats.map(stat => {
                            return ({
                                name: stat.name,
                                val: stat.val + 1,
                                progress: `${stats[0].progress}${bar}`,
                            });
                        });
                            //newStats[0].progress = `${stats[0].progress}${bar}`;
                        setStats(newStats);
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
        </div>
    )
}

export default BaseSats;