import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, { 
                    id: Math.floor(Math.random()*9999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        case 'delete_blogpost':
            return state.filter((blogPost) => {
                return blogPost.id !== action.payload
            });
        case 'edit_blogpost':
            return state.map((blogPost) =>{
                if (blogPost.id === action.payload.id){
                    return action.payload;
                }
                else{
                    return blogPost;
                }
            })
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload:{title: title, content: content}})
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: { id: id, title: title, content: content}})
        callback();
    }
}

export const {Context, Provider} = createDataContext(blogReducer, 
                                    {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost: editBlogPost}, 
                                    [{title: "TEST TITLE", content: "TEST CONTENT", id: 1}]
                                    );

// export const BlogProvider = ( {children} ) => {

//     const [blogPosts, dispatch] = useReducer(blogReducer, [])

//     const addBlogPost = () => {
//         dispatch({type: 'add_blogpost'})
//     }

//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// };

// export default BlogContext;