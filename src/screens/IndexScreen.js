import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import {Context} from "../context/BlogContext";

const IndexScreen = (props) => {

    const {state, deleteBlogPost} = useContext(Context);

    return <View>
        <FlatList 
            data={state}
            keyExtractor={(blogPosts) => {return blogPosts.title}}
            renderItem={({item}) => {
                return  <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id : item.id})}}>
                    <View style = {styles.row}>
                        <Text>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

            }}
        />
        <Text> Index Screen! </Text>
    </View>
}

IndexScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={styles.debug} onPress={() => {props.navigation.navigate("Create")}}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        borderColor: "black",
        borderWidth: 1,
        padding: 1,
        flex: 1

    },
    icon: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    debug: {
        borderColor: "red",
        borderWidth: 5
    }
});

export default IndexScreen;