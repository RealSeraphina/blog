import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = (props) => {

    const [title, setTitle] = useState(props.initialValues.title);
    const [content, setContent] = useState(props.initialValues.content);

    return <View>
        <Text> Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text> Enter Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>

        <Button title="Save Blog Post" onPress={() => {
            props.onSubmit(title, content);
            } }/>
</View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
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

export default BlogPostForm;