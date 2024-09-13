import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../../../data";

export default function Classroom() {

    const params = useParams();
    const [lesson, setLesson] = useState<any>(null);

    useEffect(() => {
        const foundModule = data.find((mod) => mod.lessons.some((lesson) => lesson.id === Number(params.idAula)));

        if (foundModule) {
            const foundLesson = foundModule.lessons.find((lesson) => lesson.id === Number(params.idAula));
            setLesson(foundLesson);
        }
    }, [params.idAula]);

    return (
        <div className="p-5 w-full">
            {lesson ? (
                <>
                    <h1 className="text-white text-2xl font-bold mb-4">{lesson.name}</h1>
                    {/* <img src={lesson.img} alt={lesson.name} className="w-full max-w-lg mb-4" /> */}
                    <div className="flex justify-center w-full">
                        <video key={lesson.id} poster={lesson.img} controls className="max-w-[1000px] w-full sm:h-[500px] sm:object-cover">
                            <source src={lesson.video} type="video/mp4" />
                            {/* Seu navegador não suporta vídeo. */}
                        </video>
                    </div>
                </>
            ) : (
                <p className="text-white">Selecione uma aula.</p>
            )}
        </div>
    );
}
