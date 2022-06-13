import React, { useState } from 'react';
import Stars from 'react-native-stars';

import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import SwiperComponent from '../../components/Swiper';

export default function Detail() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 2,
      };

    return (
        <View style={styles.container}>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: 'center'}}>
                        Digite seu contato:
                    </Typography>
                    <TextInput
                        style={styles.modalInput}
                        placeholder='Digite seu contato'
                    ></TextInput>

                    <TouchableOpacity 
                        style={styles.modalButton}
                        onPress={handleClose}
                        >
                        <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>Confirmar</Text>
                    </TouchableOpacity>
                </Box>
            </Modal>

            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View>

            <View style={styles.headerContent}>
                <View style={{ width: '65%' }}>
                    <Text style={styles.house}>Casa de Praia</Text>
                </View>

                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>
                        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <Stars
                                default={4} 
                                count={5}
                                half={true}
                                starSize={20}
                                fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle} /> }
                                emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} /> }
                                halfStar={  <Ionicons name="md-star-half" size={24} style={styles.myStarStyle} /> }
                            />
                        </View>
                </View>
            </View>

            <Text style={styles.price}>R$ 1.200,20</Text>

            <Text style={styles.description}>
                Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
            </Text>

            <TouchableOpacity style={{
                    backgroundColor: 'rgb(73, 181, 69)',
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    borderRadius: 25,
                    textAlign: 'center',
                    margin: 20,
                    float: 'right',
                    alignSelf: 'flex-end'}}
                    onPress={handleOpen}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 16,
                    fontWeight: 600}}>
                    FALE COM O VENDEDOR
                </Text>
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35 }}>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/house5.jpg')}
                        style={{width: 90, height: 90, borderRadius: 8}}
                    />
                </View>

                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/house6.jpg')}
                        style={{width: 90, height: 90, borderRadius: 8}}
                    />
                </View>

                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/house2.jpg')}
                        style={{width: 90, height: 90, borderRadius: 8}}
                    />
                </View>
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF'
    },

    swiperContent:{
        flexDirection: 'row',
        height: 340,
        width: '100%',
    },

    headerContent:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },

    house:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    },

    rating:{
        fontFamily: 'Montserrat_500Medium',
        fontSize: 9,
        color: '#4f4a4a'
    },

    myStarStyle:{
        color: '#E7A74e',
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },

    price:{
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: '#000'
    },

    description:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#b3aeae',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20,
    },

    slide:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 20,
    },
    modalInput: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 25,
        paddingInlineStart: 15,
        marginTop: 25,
        fontSize: 16
    },
    modalButton: {
        textAlign: 'center',
        backgroundColor: 'rgb(73, 181, 69)',
        padding: 10,
        borderRadius: 25,
        marginTop: 25
    }
});