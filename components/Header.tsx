import { Image, ImageBackground, StyleSheet, Text } from "react-native"

import Time from '@/components/Time'

const Header = () => {

    return (
        <ImageBackground source={require('@/assets/images/bgapp.png')} style={styles.header} >
            <Image source={require('@/assets/images/copasul_branco.png')}  style={styles.logo} />
            <Time/>
        </ImageBackground>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        gap: 20
    },
    logo: {
        maxWidth: 250,
        maxHeight: 65,
        minWidth: 180, 
        minHeight: 55,
        objectFit: 'cover'
    }
});