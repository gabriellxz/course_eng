import { Link, Outlet, useParams } from "react-router-dom";
import Header from "../../../components/Header/header";
import { data } from "../../../data";
import { useEffect, useState } from "react";
import Main from "../../../components/Main/main";
import { ArrowLeftCircleIcon, Bars3Icon, XCircleIcon } from "@heroicons/react/16/solid";

export default function Module() {

    const params = useParams();
    const [lessons, setLessons] = useState<any[]>(data);
    const [openAside, setOpenAside] = useState<boolean>(true);

    useEffect(() => {

        const selectModule = lessons.find((lesson) => lesson.id === Number(params.id));

        if (selectModule) {
            const filteredLessons = selectModule.lessons.filter((lesson: any) => lesson.module_id === Number(params.id));
            console.log(filteredLessons);
            setLessons(filteredLessons);
        }

    }, [params.id]);

    return (
        <>
            <Header className="flex gap-5 bg-zinc-900 items-center p-3 text-white">
                <Link to={"/"}>
                    <ArrowLeftCircleIcon className="w-[20px] cursor-pointer" />
                </Link>
                <p>Módulo {params.id}</p>
                {openAside == true ? <XCircleIcon className="w-[20px] cursor-pointer" onClick={() => setOpenAside(!openAside)}/> : <Bars3Icon className="w-[20px] cursor-pointer" onClick={() => setOpenAside(!openAside)} />}
            </Header>
            <Main className="flex">
                <>
                    {openAside && <ul className="bg-zinc-800 max-w-[300px] w-full h-screen p-5 flex flex-col justify-between gap-5 absolute z-10 select-none">
                        <div className="flex flex-col gap-5">
                            {lessons.map((item) => (
                                <Link to={`/home/modules/${params.id}/${item.id}`} key={item.id} className="text-white">{item.name}</Link>
                            ))}
                        </div>
                        <p className="text-white">Bagre Speak v1.0</p>
                    </ul>}
                </>
                <Outlet/>
            </Main>
        </>
    );
}