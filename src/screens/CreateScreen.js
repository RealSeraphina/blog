import React, {useContext, useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../componets/BlogPostForm";

const CreateScreen = (props) => {
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    const {addBlogPost} = useContext(Context);
    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => {props.navigation.navigate("Index")})
    }}/>
}

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;