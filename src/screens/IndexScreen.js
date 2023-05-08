import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return <View>
        <Button title="Add Post" onPress={() => {addBlogPost()}} />
        <FlatList 
            data={data}
            keyExtractor={(blogPosts) => {return blogPosts.title}}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
        <Text> Index Screen! </Text>
    </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;