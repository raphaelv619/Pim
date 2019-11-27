import React from 'react'
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const StripedBackground = (props) => {
    state = {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] /* 12 linhas duplas (clara/escura)*/
    }

    return (
        <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex:-1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {this.state.data.map(() => {
                    return (
                        <View style={{ flex: 0.25 }}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                locations={[0, 0.5, 0.5, 1]}
                                colors={['#fec9b7', '#fec9b7', '#ffb7a1', '#ffb7a1']}
                                style={{
                                    flex: 1
                                }}  />
                        </View>
                    )
                })}
            </View>
        </View>
    );
}