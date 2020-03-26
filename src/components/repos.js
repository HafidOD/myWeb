import React, { useEffect, useState } from "react";
// import repos from "../data/repos"; // datos locales de git
import Repositorio from "./repo";


export default () => {

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(() =>{
        const data = sessionStorage.getItem("repos");
        let myRepos;

        if(data){
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1,13); // para limitar el numero de repos que queremos pintar
            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response =  await fetch("https://api.github.com/users/HafidOD/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);


            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            myRepos = myRepos.slice(1,13); // para limitar el numero de repos que queremos pintar
            setRepos(myRepos);
        }

        fetchRepos();
        
    },[]);
    return (
        <div className="max-w-4xl mx-auto m-12">
        <header className="text-center"> {/*  m-2 mb-6 */} 
            <h2 className="text-3xl font-bold text-purple-700">Mis trabajos Open Source</h2>
            <p className="text-gray-700">Colaboracion y contribucion de codigos</p>
        </header>

        <ul className="repos-list">
            {
                repos.map((repo) =>{
                    return <Repositorio repo={repo} key={repo.id} />
                })
            }
        </ul>

        <div className="mt-8 text-center">
            <a href="https://github.com/HafidOD" className="btn" target="_blank" rel="noopener noreferrer">Ver mas en GitHub({reposCount})</a>
        </div>
    </div>
    );
};