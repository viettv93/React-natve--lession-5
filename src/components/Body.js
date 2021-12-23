import React from "react"
import{View,Image,Text,FlatList} from 'react-native'
const arr = [
    { image: require('../anhchen/anh1/img_girl.png'), name: 'Marvin' },
    { image: require('../anhchen/anh2/img_girl.png'), name: 'Kristin' },
    { image: require('../anhchen/anh3/img_girl.png'), name: 'Arthur' },
    { image: require('../anhchen/anh4/img_girl.png'), name: 'Nguyen' },
    { image: require('../anhchen/anh4/img_girl.png'), name: 'Nguyen' },
    { image: require('../anhchen/anh4/img_girl.png'), name: 'Nguyen' },
    { image: require('../anhchen/anh4/img_girl.png'), name: 'Nguyen' },
    { image: require('../anhchen/anh4/img_girl.png'), name: 'Nguyen' }
]

const Body = () => {
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, marginRight: 20 , marginLeft: 20}}>
                <Image
                    resizeMode="contain"
                    source={item.image} />
                <Text style={{ fontSize: 17, color: 'black' }}>{item.name}</Text>
            </View>
        )
    }
    return(
        <View style={{}}>
                <FlatList
                    horizontal={true}
                    data={arr}
                    renderItem={renderItem}>
                </FlatList>
            </View>
    )
    
}

export default Body