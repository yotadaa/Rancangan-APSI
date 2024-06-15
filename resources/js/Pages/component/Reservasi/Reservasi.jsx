
import { useEffect, useState } from 'react';
import { Inertia } from "@inertiajs/inertia";

import bibimbap from "../../assets/bibimbap.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckIcon from '@mui/icons-material/Check';

import burger from "../../assets/burger.png";
import diet from "../../assets/diet.png";
import salad from "../../assets/salad.png";
import drink from "../../assets/drink.png";
import fastfood from "../../assets/fast-food.png";
import biryani from "../../assets/biryani.png";
import menu1 from "../../assets/louis-hansel-mVZ_gjm_TOk-unsplash.jpg"
import menu2 from "../../assets/farhad-ibrahimzade-TvMWBS6TIsg-unsplash.jpg"
import menu3 from "../../assets/sam-moghadam-khamseh-i3A-se17VAg-unsplash.jpg"

function Spoiler({ children, title, List }) {

    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="w-full shadow-md bg-gray-100 border border-gray-400 my-2 rounded-md px-3 py-2 flex justify-between cursor-pointer hover:contrast-125"
                onClick={() => {
                    setShow(p => (!p))
                }}
            >
                {title}
                <div className='flex justify-around items-center gap-10'>
                    <div className='text-sm font-[400]'>{List.List.filter(o => o.choosen).length} menu dipilih</div>
                    {/* <div>{Object.keys(List).toString()}</div> */}
                    <div className='relative flex items-center justify-center  '>
                        <div
                            className='absolute bg-gray-300 w-[40px] h-[40px] rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 cursor-pointer'></div>
                        {show ? <KeyboardArrowUpIcon className='' /> : <KeyboardArrowDownIcon className='' />}
                    </div>
                </div>
            </div>
            <div
                className='w-full overflow-hidden'
                style={{
                    display: show ? "flex" : "none",
                }}
            >
                {children}
            </div>
        </div >
    )
}

function Input({ label, type }) {
    return (
        <section>
            <label className="pl-1 scale-50 text-sm text-gray-600">{label}</label>
            <input
                type={type}
                placeholder={label}
                className="placeholder:text-amber-600 p-2 bg-amber-100 w-full rounded-md outline-none focus:border-2 border-sky-400"
            />
        </section>
    )
}


export default function Reservasi({ props }) {

    const [modalShow, setModalShow] = useState(false);
    const [modalConfirmationShow, setModalConfirmationShow] = useState(false);
    const [modalConfirmationProperties, setModalConfirmationProperties] = useState({
        danger: false,
        title: "Pesanan kamu telah dicatat!",
        text: "Konfirmasi akan dilakukan oleh perwakilan pemesan"
    });
    const [ListMenu, setListMenu] = useState(
        [{
            name: "Menu 1",
            List: [
                {
                    src: burger,
                    name: "Burger Pop",
                    choosen: false,
                },
                {
                    src: diet,
                    name: "Burger Pop",
                    choosen: false,
                },
                {
                    src: salad,
                    name: "Burger Pop",
                    choosen: false,
                },
                {
                    src: drink,
                    name: "Burger Pop",
                    choosen: false,
                },
                {
                    src: fastfood,
                    name: "Burger Pop",
                    choosen: false,
                },
                {
                    src: biryani,
                    name: "Burger Pop",
                    choosen: false,
                }
            ]
        },
        {
            name: "Menu 2",
            List: [
                {
                    src: menu1,
                    name: "Nasi Kari Udang",
                    choosen: false,
                },
                {
                    src: menu2,
                    name: "Tumis Daging",
                    choosen: false,
                },
                {
                    src: menu3,
                    name: "Tumis Udang",
                    choosen: false,
                },
            ]
        }]
    );

    const [total, setTotal] = useState(0);
    useEffect(() => {
        const count = ListMenu.reduce((acc, menu) => {
            return acc + menu.List.filter(item => item.choosen).length;
        }, 0);
        setTotal(count);
    }, [ListMenu]);

    return (
        <section className="w-screen flex flex-col justify-start items-center p-10">
            <Modal
                ListMenu={ListMenu}
                modalShow={modalShow}
                setModalShow={setModalShow}
                setModalConfirmationShow={setModalConfirmationShow}
                total={total}
                setModalConfirmationProperties={setModalConfirmationProperties}
            />
            <ModalConfirmation
                modalConfirmationProperties={modalConfirmationProperties}
                setModalConfirmationProperties={setModalConfirmationProperties}
                modalConfirmationShow={modalConfirmationShow}
                setModalConfirmationShow={setModalConfirmationShow}
            />

            <div className="py-10 top-10 flex items-center text-xl gap-3">
                <img src={bibimbap} width={40} alt="Bibimbap" /> Siramu
            </div>
            <div className="w-full max-w-[700px] w-full">
                <div className="w-full flex justify-between font-thin px-3">
                    <i>Kode: {props.kode}</i>
                    <i>Kopi Cuan Presents</i>
                </div>
                <Input label="Nama pemesan" type="text" />
                {ListMenu.map((list, index) => (
                    <Spoiler title={list.name} key={list.name + index} List={list}>
                        <div className='relative flex items-start w-full justify-center flex-wrap gap-10 py-2'>
                            {list.List.map((o, i) => (
                                <div
                                    key={o.name + i}
                                    className='flex flex-col items-center px-3 py-4 rounded-md '>
                                    <img
                                        className=" object-cover w-[150px] h-[100px] rounded-md shadow-xl"
                                        src={o.src}
                                        style={{
                                            left: i * 35 + 20
                                        }}
                                    />
                                    <div>{o.name}</div>
                                    <button
                                        className={`w-full py-1 font-semibold rounded-md ${o.choosen ? "bg-emerald-500" : "bg-amber-400 hover:bg-amber-500"}`}
                                        onClick={() => {
                                            setListMenu(prevListMenu =>
                                                prevListMenu.map((menuList, menuIndex) => {
                                                    if (menuIndex === index) {
                                                        return {
                                                            ...menuList,
                                                            List: menuList.List.map((obj, pos) => {
                                                                if (pos === i) {
                                                                    return { ...obj, choosen: !obj.choosen };
                                                                }
                                                                return obj;
                                                            })
                                                        };
                                                    }
                                                    return menuList;
                                                })
                                            );
                                        }}
                                    >
                                        {o.choosen ? (
                                            <span className='flex items-center gap-1 justify-center'>
                                                Dipilih <CheckIcon />
                                            </span>
                                        ) : (
                                            <span>Pilih</span>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Spoiler>
                ))}
            </div>
            <section className='fixed rounded-md bg-sky-700 py-1 px-3 items-center font-semibold text-gray-100 flex justify-between w-full bottom-0'>
                <div>Total: {total}</div>
                <button className='bg-gray-100 text-sky-700 px-2 py-1 rounded-xl hover:bg-gray-200'
                    onClick={() => setModalShow(true)}
                >
                    Submit
                </button>
            </section >
        </section>
    )
}

function Modal({ ListMenu, modalShow, setModalShow, setModalConfirmationShow, total, setModalConfirmationProperties }) {
    return (
        <div className='fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-[0.1] z-[9999] flex items-center justify-center'
            style={{
                display: modalShow ? "flex" : "none",
            }}
        >
            <div className='bg-gray-50 max-w-[300px] w-full rounded-md p-3'>
                <header className='text-center font-semibold'>Konfirmasi Order</header>
                <div className='flex w-full items-center justify-between mt-5 '><span className='text-gray-500'>Nama</span><span className='text-gray-800 font-[450]'>Mukhtada Nasution</span></div>
                <div className='text-gray-500'>Menu yang dipilih</div>
                <ul className='max-w-[400px] overflow-y-auto list-outside list-disc ml-4'>
                    {ListMenu.map((list, index) => (
                        <ul key={index} className='list-outside list-disc'>
                            {list.List.map((o, i) => {
                                if (o.choosen) return (
                                    <li className='list-inside' key={i}><span className='font-thin'><span className='font-[400]'>{list.name}</span> - {o.name}</span></li>
                                )
                            }
                            )}
                        </ul>
                    ))}
                </ul>
                <div className='flex justify-around mt-10 border-t border-gray-400 pt-3'>

                    <button className='px-2 text-gray-50 font-semibold py-1 bg-sky-600 rounded-sm min-w-[100px] shadow-md' onClick={() => setModalShow(false)}>Ubah</button>
                    <button className='px-2 text-gray-50 font-semibold py-1 bg-sky-600 rounded-sm min-w-[100px] shadow-md'
                        onClick={() => {
                            setModalShow(false);
                            if (total > 0) {
                                setModalShow(false);
                                setModalConfirmationShow(true);
                                setModalConfirmationProperties({
                                    danger: false,
                                    title: "Pesanan kamu telah dicatat!",
                                    text: "Konfirmasi akan dilakukan oleh perwakilan pemesan"
                                })
                            } else {

                                setModalShow(false);
                                setModalConfirmationShow(true);
                                setModalConfirmationProperties({
                                    danger: true,
                                    title: "Error!!",
                                    text: "Mohon pilih setidaknya 1 menu"
                                })
                            }
                        }}
                    >Konfirmasi</button>

                </div>
            </div>
        </div>
    )
}

function ModalConfirmation({ modalShow, modalConfirmationProperties, modalConfirmationShow, setModalConfirmationShow }) {
    return (
        <div className='fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-[0.1] z-[9999] flex items-center justify-center'
            style={{
                display: modalConfirmationShow ? "flex" : "none",
            }}
        >
            <div className='bg-gray-50 max-w-[300px] w-full rounded-md p-3 text-center'>
                <header className='text-center font-semibold'>{modalConfirmationProperties.title}</header>
                <div className='font-thin text-sm'>{modalConfirmationProperties.text}</div>
                <button className={`${modalConfirmationProperties.danger ? "bg-rose-500 hover:bg-rose-400 " : "bg-emerald-500 hover:bg-emerald-400 "}  px-5 rounded-md mt-3 py-1`}
                    onClick={() => {
                        if (!modalConfirmationProperties.danger) Inertia.get(route("index"));
                        else {
                            setModalConfirmationShow(false);
                        };
                    }}
                >Okay!</button>
            </div>
        </div>
    )
}
