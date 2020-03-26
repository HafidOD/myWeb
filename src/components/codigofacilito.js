import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Post from "./post";
import Certificate from "./certificate";
import Course from "./course";

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              courses {
                title
                progress
                url
              }
              certificates {
                title
                score
                code
              }
              finished_courses {
                title
              }
            }
          }
    }`);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    {/* Certificados */}
                    <div className="overflow-x-auto">
                    <Post
                        data={data.codigofacilitoJson.data.certificates}
                        card={Certificate}
                        title="Mis Certificados Online en Codigo Facilito" />
                        </div>

                    {/* Cursos */}
                    <div className="overflow-x-scroll">
                    <Post
                        data={data.codigofacilitoJson.data.courses}
                        card={Course}
                        title="Mis Cursos" />
                    </div>

                </div>
            </div>
        </section>
    );
};