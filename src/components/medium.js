// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz

import React, { useEffect, useState } from 'react';
import Post from './post';
import Publication from './publication';

export default () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const data = sessionStorage.getItem('posts');
        

        if (data) {
            setPost(JSON.parse(data));
        }
        let myPosts;

        async function getMediumPost() {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz");
            myPosts = await response.json();
            sessionStorage.setItem('posts', JSON.stringify(myPosts.items));

            setPost(myPosts.items);
        }

        getMediumPost();

    }, []);

    return (
        <div className="max-w-4xl mx-auto overflow-x-auto">
            <Post
            data={posts}
            card={Publication}
            title="Mis Publicaciones en Medium" />
        </div>
    );
}