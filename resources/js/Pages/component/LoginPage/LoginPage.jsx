import { useState } from "react"
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

export default function LoginPage() {

    return (
        <section className="w-full min-w-[400px] h-full flex bg-gray-100 flex-col justify-start items-center">
            <div className="py-10 top-10 flex items-center text-xl gap-3">
                <img src={bibimbap} width={40} alt="Bibimbap" /> Siramu
            </div>
            <div className="min-w-[300px] h-[400px] shadow-xl bg-gray-50 pr-5 flex gap-5 rounded-md overflow-x-hidden">
                <img
                    src={background1}
                    className="max-w-[300px] max-h-[400px] h-full object-cover"
                />
                <div className="min-w-[300px] flex flex-col pt-[30px] bg-transparent gap-3">
                    <h1 className="text-xl font-semibold">Login akun kamu</h1>
                    <Input label="Email" type="email" />
                    <Input label="Password" type="password" />
                    <button className=" p-2 text-sm bg-sky-600 w-full rounded-md outline-none focus:border-2  text-center font-[600] uppercase hover:bg-sky-400 text-gray-50"
                        onClick={() => Inertia.get(route("home-page"))}>
                        Login
                    </button>
                    <div>Belum punya akun? <i className="not-italic text-sky-700 cursor-pointer font-[500] hover:underline"
                        onClick={() => Inertia.get(route("register-page"))}
                    >buat sekarang</i></div>
                </div>
            </div>
        </section >
    )
}
