import React, { Fragment } from "react";
//import { useStaticQuery, graphql } from "gatsby";

export default (props) => (
    <Fragment>
        <h2 className="text-center text-xl font-bold text-purple-700">{props.title}</h2>
        <div className="flex mt-8">
            {
                props.data.map(el => (
                    <props.card element={el} />
                ))
            }
        </div>
    </Fragment>
);