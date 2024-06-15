import { useEffect, useState } from "react"
import background1 from "../../assets/background1.jpg";
import { Inertia } from "@inertiajs/inertia";
import bibimbap from "../../assets/bibimbap.png";

function Input({ label, type }) {
    return (
        <section>
            <label className="pl-1 text-gray-600">{label}</label>
            <input
                type={type}
                placeholder={label}
                className="placeholder:text-amber-600 p-2 bg-amber-300 w-full rounded-md outline-none focus:border-2 border-sky-400"
            />
        </section>
    )
}

export default function RegisterPage() {

    const [screen, setScreen] = useState({
        w: window.innerWidth,
        h: window.innerHeight
    })

    useEffect(() => {
        window.addEventListener("resize", function () {
            setScreen(p => ({
                ...p, w: window.innerWidth,
                h: window.innerHeight
            }))
        })
    }, [])

    return (
        <section className="w-full min-w-[400px] h-full flex bg-gray-100 flex-col justify-start items-center">
            <div className="py-10 top-10 flex items-center text-xl gap-3">
                <img src={bibimbap} width={40} alt="Bibimbap" /> Siramu
            </div>
            <div className="flex-row min-w-[300px] shadow-xl bg-gray-50 pr-5 flex gap-5 rounded-md overflow-x-hidden"
                style={{
                    flexDirection: screen?.w > 500 ? "row" : "column-reverse",
                    width: screen?.w > 500 ? "" : "100%",
                }}
            >
                <img
                    src={background1}
                    className="min-w-[400px] w-full max-w-[500px] h-full object-cover"
                    style={{
                        width: screen?.w > 500 ? 400 : "100%",
                    }}
                />
                <div className="min-w-[300px] flex flex-col py-[30px] px-10 bg-transparent gap-3">
                    <h1 className="text-xl font-semibold">Buat Akun</h1>
                    <Input label="Nama " type="text" />
                    <Input label="Email" type="email" />
                    <Input label="Password" type="password" />
                    <Input label="Konfirmasi Password" type="password" />
                    <button className=" p-2 text-sm bg-sky-600 w-full rounded-md outline-none focus:border-2  text-center font-[600] mt-9 uppercase hover:bg-sky-400 text-gray-50"
                        onClick={() => Inertia.get(route("login-page"))}>
                        Buat Akun!
                    </button>
                    <div>Atau  <i className="not-italic text-sky-700 cursor-pointer font-[500] hover:underline"
                        onClick={() => Inertia.get(route("login-page"))}> Login dengan akunmu</i></div>
                </div>
            </div>
        </section >
    )
}
