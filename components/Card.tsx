import { Button, StyleSheet, Text, View } from "react-native"

type Props = {
    unidade: string,
    peso: number,
    placa: string,
    udm: string
}

const Card = ({ unidade, peso, placa, udm }: Props) => {
    return (
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{unidade}</Text>
            
            <Text style={styles.peso}>{peso} {udm}</Text>

            <Text style={styles.placa}>Placa: {placa}</Text>

            <View style={styles.actions}>
                <Button style={styles.button}>Ola</Button>
            </View>
        </View>
    )
}

export default Card;


const styles = StyleSheet.create({
    cardContent: {
        maxWidth: '1500px',
        width: '90%',
        margin: '0 auto',
        boxShadow: '0px 0px 4px #bcbcbc',
        borderRadius: '6px',
    }, 
    cardTitle: {
        padding: 20,
        textAlign: 'center',
        fontSize: '30px',
        borderBottom: '4px solid gray',
    },
    peso: {
        padding: 10,
        textAlign: 'center',
        padding: '40px 0px',
        fontSize: '70px',
        fontWeight: '400',
    },
    placa: {
        fontSize: 20,
        fontWeight: 500,
        paddingTop: 0,
        paddingLeft: 30,
        paddingBottom: 30,
        paddingRight: 30
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
    },
    button: {
        cursor: 'pointer',
        transition: '0.3s',
        background: 'green',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 500,
        border: 0,
        borderRadius: '500px',
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
    }
})

/**
 * 
 * import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    height: 600px;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    .box {
        width: 1500px;
        margin: 0 auto;
        box-shadow: 0px 0px 4px #bcbcbc;
        border-radius: 6px;

        .title {
            border-bottom: 1px solid #d9d9d9;
        }

        .title h2 {
            font-weight: 500;
            text-align: center;
            padding: 20px;
        }


        .peso h1 {
            text-align: center;
            padding: 40px 0px;
            font-size: 70px;
            font-weight: 400;
        }

        .placa {
            padding: 0px 30px 30px 30px;
        }

        .actions {
            display: flex;
            justify-content: center;
            gap: 30px;
            padding: 20px 0px 20px 0px;

            button:hover {
                
            }
            
        }
    }
`

export const ButtonApprove = styled.button`
    cursor: pointer;
    transition: 0.3s;
    background: green;
    color: #fff;
    padding: 10px 50px;
    font-size: 20px;
    font-weight: 500;
    border: 0;
    border-radius: 500px;
    display: flex;
    gap: 5px;
    align-items: center;

`
 */