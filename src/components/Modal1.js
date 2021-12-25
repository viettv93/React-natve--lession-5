import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
const Modal1 = (props, ref) => {
    useImperativeHandle(ref, () => ({
        openModal2: () => {
            setVisible(true);
        },
        closeModal2: () => {
            setVisible(false)
        }
    }))
    const [visible, setVisible] = useState(false)
    return (
        <Modal visible={visible}
            transparent={true}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: 'gray', borderRadius: 20, height: '30%' }}>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: 50, fontWeight: '600' }}>Thông Báo</Text>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '400', margin: 30 }}>Bạn có muốn chắc chắn xóa không ? </Text>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setVisible(false)
                            }}
                            style={{ width: '50%', marginTop: 20, height: '60%', borderTopWidth: 0.5, borderRightWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#007AFF', fontSize: 17 }}>Đóng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { props.onDelete() }}
                            style={{ width: '50%', marginTop: 20, height: '60%', borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#007AFF', fontSize: 17 }}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default forwardRef(Modal1)
