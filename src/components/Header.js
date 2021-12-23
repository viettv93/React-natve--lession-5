import React from 'react'
import { Image, Text,View } from 'react-native'


const Header = () => {
    return(
        <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                <Image style={{ height: 20, width: 20 }}
                    resizeMode='contain'
                    source={require('../anhchen/icon.png')} />
                <Text style={{ fontSize: 17, fontWeight: '500', color: 'black' }}>Message</Text>
                <Image
                    source={require('../anhchen/cong.jpg')}
                    resizeMode='contain'
                    style={{ height: 20, width: 20 , marginRight: 15}} />
            </View>
    )
}

export default Header