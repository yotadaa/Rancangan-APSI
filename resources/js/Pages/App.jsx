import Root from "./component/Root/Root";
import bibimbap from "./assets/bibimbap.png";
import { useEffect, useState } from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import Reservasi from "./component/Reservasi/Reservasi";
import Home from "./component/Moderator/Home";

function App(props) {
    const menu = {
        "root-page": {
            element: Root,
        },
        "login-page": {
            element: LoginPage,
        },
        "register-page": {
            element: RegisterPage,
        },
        "reservasi-page": {
            element: Reservasi,
        },
        "home-page": {
            element: Home,
        },
    };

    const [Page, setPage] = useState(() => menu[props.menu]?.element || Root);

    useEffect(() => {
        if (props.menu && menu[props.menu]) {
            setPage(() => menu[props.menu].element);
        } else {
            setPage(Root);
        }
    }, [props.menu]);

    return (
        <div className='flex flex-col items-center justify-start h-screen w-screen'>
            {Page ? <Page props={props} /> : <div>Page not found</div>}
        </div>
    );
}

export default App;
