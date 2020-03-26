import React from 'react';
export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow p-8 bg-white mr-4 mb-8">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-purple-300 text-purple-700 p-2 m-2 rounded">Calificacion: {certificate.score}</span>
            </div>
        </div>
    );
};