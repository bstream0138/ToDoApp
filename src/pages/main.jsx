import { useEffect, useState } from "react";
import CreateToDo from "../components/CreateToDo";

const Main = () => {

    const [ ToDos, setToDos ] = useState([]);

    const getToDos = () => {
        const localToDos = localStorage.getItem("ToDos");
        if (!localToDos) return;

        setToDos(JSON.parse(localToDos));
    };

    useEffect( () => {
        getToDos();
        console.log(ToDos);
    }, []);


    return (
        <main className="bg-red-100 min-h-screen max-w-screen-md mx-auto">
        <h1 className="bg-blue-100 text-center text-4xl font-bold py-12">
            To do list
        </h1>
        <CreateToDo />
        <ul className="bg-green-200 w-96 mx-auto mt-12 h-[30rem] overflow-y-auto">
            <li className="h-12 flex items-center text-xl">
            <span className="w-1/12 text-right">1</span>
            <span className="w-8/12 pl-2">💻 코딩하기</span>
            <button className="w-3/12 hover:font-bold">Detail</button>
            </li>
        </ul>
        </main>
    );
};

export default Main;