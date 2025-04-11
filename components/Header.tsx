import { Image, ImageBackground, LogBox, StyleSheet, Text, View } from "react-native"

import Time from '@/components/Time'

const Header = () => {

    return (
        <ImageBackground source={require('@/assets/images/bgapp.png')} style={styles.header} >
            <View style={styles.logoBox}>
                <Image source={require('@/assets/images/logo.png')} style={styles.logoImg} resizeMode="contain"/>
                {/* <Text style={styles.brandapp}>{API_URL}</Text> */}
            </View>
                <Image source={require('@/assets/images/copasul_branco.png')}  style={styles.logo}  resizeMode="contain"/>
            <Time/>
        </ImageBackground>
    )
}

export default Header;

const styles = StyleSheet.create({
    logoImg: {
        width: 190
    },
    header: {
        width: '100vw',
        height: 'auto',
        backgroundSize: 'cover',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:  'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        gap: 20
    },
    brandapp: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        fontFamily: 'sans-serif',
    },
    logo: {
        width: 250,
        height: 60,
        objectFit: 'cover'
    }
});