import React from 'react'
import { Image, Text, View } from 'react-native'


const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginVertical: 20, alignItems: 'center' }}>
            <Image
                resizeMode='contain'
                source={require('../anhchen/icon.png')} />
            <Text style={{ fontSize: 17, fontWeight: '500', color: 'black' }}>Messages</Text>
            <Image
                source={require('../anhchen/cong.jpg')}
                resizeMode='contain' />
        </View>
    )
}

export default Header