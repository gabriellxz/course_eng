import { BookOpenIcon, UserIcon } from "@heroicons/react/16/solid";
import Header from "../../components/Header/header";
import Main from "../../components/Main/main";
import { data } from "../../data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [modules, setModules] = useState<any[]>([]);

    useEffect(() => {
        setModules(data);
    }, []);

    return (
        <>
            <Header className="flex justify-between bg-zinc-900 items-center p-3 text-white">
                <span className="text-xl font-bold">Bagre Speak</span>
                <div className="flex items-center gap-1">
                    <UserIcon className="w-[30px]" />
                    <span>Aluno</span>
                </div>
            </Header>
            <Main className="w-full p-5">
                <div className={`
                    grid grid-cols-2 gap-5 sm:grid-cols-5
                `}>
                    {modules.map((mod) => (
                        <Link to={`/home/modules/${mod.id}`} key={mod.id} className="max-w-[500px] w-full p-5 bg-zinc-900 rounded-md">
                            <div className="flex justify-center">
                                <BookOpenIcon className="w-[50px] text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-white text-center">{mod.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Main>
        </>
    );
}