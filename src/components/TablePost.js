import React, { useEffect, useState } from 'react';
import userService from '../services/PostService';

const TableUser = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await userService.fetchAllUser();
                if (res && res.data) {
                    setPosts(res.data);
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        getPosts();
    }, []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableUser;
