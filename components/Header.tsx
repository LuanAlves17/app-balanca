import { Image, ImageBackground, StyleSheet, Text } from "react-native"

import Time from '@/components/Time'

const Header = () => {

    return (
        <ImageBackground source={require('@/assets/images/bgapp.png')} style={styles.header} >
            <Image source={require('@/assets/images/copasul_branco.png')}  style={styles.logo}  resizeMode="contain"/>
            <Text style={{ textAlign: 'center', fontSize: '1.34rem', color: 'white'}}>Gerenciamento de Entradas e Saidas (Balança)</Text>
            <Time/>
        </ImageBackground>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 50,
        gap: 20
    },
    logo: {
        width: 150,
        height: 50,
        objectFit: 'cover'
    }
});