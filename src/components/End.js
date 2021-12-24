import React from "react"
import { View, Text, FlatList,Image} from "react-native"
const array1 = [{ image: require('../anhchen/anh5/img_ins.png'), name: 'Black Marvin', status: '😜 😜 😜 😜', lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh6/img_ins.png'), name: 'Nguyen Shane', status: "There 's somebody out there ...", lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh7/img_ins.png'), name: 'Cooper Kristin', status: "Life doesn't have to be perfect.", lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh8/img_ins.png'), name: 'Nguyen Shane', status: "Don’t let your dreams 🤗", lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh9/img_ins.png'), name: 'Flores Juanita', status: "Good relationship don't just ... ", lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh10/img_ins.png'), name: 'Williamson Darlene', status: " Cease to struggle and you ...", lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh11/img_ins.png'), name: 'Richards Aubrey', lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh11/img_ins.png'), name: 'Richards Aubrey', lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh11/img_ins.png'), name: 'Richards Aubrey', lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh11/img_ins.png'), name: 'Richards Aubrey', lastTimeOnline: "20:30" },
{ image: require('../anhchen/anh11/img_ins.png'), name: 'Richards Aubrey', lastTimeOnline: "20:30" }
]
const End = () => {
    const renderItem1 = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 20 }}>
                <Image
                    resizeMode='contain'
                    source={item.image} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', margin: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.55)' , marginLeft: 5}}>{item.status}</Text>
                </View>
                <Text>{item.lastTimeOnline}</Text>
            </View>
        )
    }
    return (
        <View>
            <FlatList data={array1}
                renderItem={renderItem1}>
            </FlatList>
        </View>
    )
}

export default End