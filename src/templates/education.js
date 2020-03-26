import React from 'react';
import { graphql, Link } from 'gatsby';
import EducationNav from '../components/education-nav';

export default (props) =>{

    const pageData = props.data.educationJson;
    
    return(
        <div>
            <header className="py-12 border-purple-700 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                <Link to="/" className="uppercase underline text-purple-600">Regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold text-gray-800">{pageData.title}</h2>
                    <p className="text-xl text-purple-700 font-bold">{pageData.description}</p>
                </div>
            </header>

            <ul>
                {
                    pageData.items.map((item, index)=>(
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text capitalize text-center rounded">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3 className="text-gray-800">{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block p-1 bg-purple-200 rounded text-purple-700">{item.degree}</span>
                                    }
                                    {
                                        item.community && <span className="inline-block p-1 bg-purple-200 rounded text-purple-700">{item.community}</span>
                                    }
                                    {
                                        item.plataform && <span className="inline-block p-1 bg-purple-200 rounded text-purple-700">{item.plataform}</span>
                                    }
                                    
                                </div>
                                <div className="inline-block">
                                {
                                        item.url && <a className="inline-block btn" href={item.url} target="_blank" rel="noopener noreferrer">Ver Curso</a>
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EducationNav />
        </div>
    )
}

export const query = graphql`
    query($slug: String){
        educationJson(slug: { eq: $slug }){
            title
            description
            slug
            items{
                name
                degree
                url
                community
                plataform
            }
          }
    }
`;