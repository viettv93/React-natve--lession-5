
import React from "react"
import { View } from 'react-native'
import Header from "./components/Header"
import Body from "./components/Body"
import End from "./components/End"



const baiTap01 = () => {
    return (
        <View style={{ flex: 1 ,paddingLeft :10}}>
            <Header/>
            <Body/>
            <End/>
        </View>
    )
}
export default baiTap01