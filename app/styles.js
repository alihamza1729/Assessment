import {StyleSheet} from 'react-native'
import { scale } from "../ScalingUtils";


const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        profile: {
            height: scale(40),
            width: scale(60),
            resizeMode: 'contain',
            backgroundColor: '#f7f7f7',
            borderRadius: 10
        },
        space_between: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        },
        rowAlign: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        row: {
            flexDirection: 'row',
        },
        columnAlign: {
            flexDirection: 'column',
            // alignItems: 'center',
        },
        spliter: {
            height: 0.7,
            backgroundColor: '#efefef'
        },
        shadow: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            backgroundColor: '#fff',
            margin: 3,
            borderRadius: 8
        }
    }
)

export default styles
