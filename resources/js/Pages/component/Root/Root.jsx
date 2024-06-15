
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import bibimbap from "../../assets/bibimbap.png";

import table from "../../assets/restaurant (1).png";
import burger from "../../assets/burger.png";
import diet from "../../assets/diet.png";
import salad from "../../assets/salad.png";
import drink from "../../assets/drink.png";
import fastfood from "../../assets/fast-food.png";
import biryani from "../../assets/biryani.png";
import background1 from "../../assets/background1.jpg";

import SearchIcon from '@mui/icons-material/Search';

export default function Root() {

    const [IMG, setImg] = useState([
        burger, diet, salad, drink, fastfood, biryani
    ])

    const [kode, setKode] = useState("");

    function onChangeKode(e) {
        setKode(e.target.value);
    }

    return (
        <section className="flex h-screen w-screen justify-center items-center flex-col relative">
            <div className="py-10 top-10 flex items-center text-xl gap-3">
                <img src={bibimbap} width={40} alt="Bibimbap" /> Siramu
            </div>
            <img
                className="w-full h-full object-cover z-[-1] absolute opacity-[0.1]"
                src={background1}
            />
            <h1 className="text-black text-md font-thin text-left hover:underline cursor-pointer"
                onClick={() => Inertia.get(route("login-page"))}
            >
                Login as Moderator
            </h1>
            <h1 className="text-black text-4xl font-thin text-left">
                Selamat datang di <i className="font-bold not-italic">SIRAMU</i >
                <br />
                Sistem Reservasi Menu
            </h1>
            <section className=" pt-[40px] flex flex-col items-center w-[250px] drop-shadow-xl">
                <div className="flex relative w-full justify-center">
                    {IMG.map((o, i) => (
                        <img
                            key={i}
                            className="absolute left-0 top-[-32px] z-[-1]"
                            src={o}
                            width={37}
                            style={{
                                left: i * 35 + 20
                            }}
                        />
                    ))}
                </div>
                <div className="rounded-md relative w-full h-[30px]">
                    <div className="transform rotate-180 rounded-md h-full w-full  shadow-gray-700 bg-amber-400 absolute top-0 left-0 z-[-1]">

                    </div>
                    <div className="w-full h-full flex items-center">
                        <input className="z-[2] bg-transparent h-full w-full  rounded-md p-2 text-xs font-semibold outline-none focus:border-2 border-sky-600 placeholder:text-amber-800" placeholder="Enter your code"
                            value={kode}
                            onChange={onChangeKode}
                        />
                        <div className="bg-amber-300 px-2 h-full rounded-md scale-[0.8] cursor-pointer hover:contrast-125"
                            onClick={() => {
                                if (kode) {
                                    Inertia.get(route("reservasi-page", { kode: kode }));
                                }
                            }}
                        ><SearchIcon /></div>
                    </div>
                </div>
                <div className="bg-slate-500 w-[25px] h-[150px]"></div>
                <div className="bg-slate-500 h-[15px] w-[100px] rounded-t-xl"></div>
            </section>
        </section>
    )
}
