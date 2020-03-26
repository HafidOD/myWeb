import React from "react";
import illustracion from '../images/undraw_static_website_0107.svg';
import Form from '../components/contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex items-center justify-center">
                <div className="flex-1">
                    <h1 className="text-6xl text-purple-700">¡Hola soy Hafid!</h1>
                    <p className="text-xl text-gray-800">Desarrollador Web FullStack</p>
                </div>
                <img src={illustracion} alt="Develop Web Icon" style={{height: "150px"}}></img>
            </div>  

            <div>
                <Form />
            </div>
        </div>

    </header>
);