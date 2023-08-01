import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const image1 = require('../images/nike-shoes-1.webp');
const image2 = require('../images/nike-shoes-2.webp');
const image3 = require('../images/nike-shoes-3.webp');
const image4 = require('../images/nike-shoes-4.webp');
const image5 = require('../images/nike-shoes-5.webp');
const image6 = require('../images/nike-shoes-6.jpg');
const image7 = require('../images/nike-shoes-7.jpg');
const image8 = require('../images/nike-shoes-8.jpg');
const image9 = require('../images/nike-shoes-9.jpg');
const image10 = require('../images/nike-shoes-10.webp');
const image11 = require('../images/nike-shoes-11.webp');
const image12 = require('../images/nike-shoes-12.webp');
const image13 = require('../images/nike-shoes-13.jpg');
const image14 = require('../images/nike-shoes-14.webp');
const image15 = require('../images/nike-shoes-15.webp');
const {height, width} = Dimensions.get('window');


function Nike() {

    const [data, setData] = useState([
                    
        {
            id: 1,
            items: [image1, image2, image3, image4, image5],
          },
          {
            id: 2,
            items: [image6, image7, image8, image9, image10],
          },
          {
            id: 3,
            items: [image11, image12, image13, image14, image15],
          },
            ]
        );

        const [selectedIndex, setSelectedIndex] =useState(0);
        const [selectedShoes, setSelectedShoes] = useState(0);

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex:1}}>
            <View style={[styles.card, styles.elevation]}>
                <View style={styles.headingCon}>
                    <Text style={styles.heading}>
                        Nike Air Force 1 Shoes
                    </Text>
                </View>
                 
                 <View style={{height:height/2}}>
                 <FlatList
                 pagingEnabled
                 horizontal
                 onScroll={ e => {
                    setSelectedIndex(
                        (e.nativeEvent.contentOffset.x/width).toFixed(0),
                    );
                 }}
                 data={data[selectedShoes].items} 
                 showsHorizontalScrollIndicator={false}
                 keyExtractor={(item, index) => `big_${index}`}
                 renderItem={({item, index}) => {
                    return <Image source={item} style={{width:width, height: height/2 }} />;
                 }} />
                
                <View style={{
                    width: width, 
                    height:40, 
                    position: 'absolute', 
                    bottom: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    {
                        data[selectedShoes].items.map((item, index )=>{
                            return (
                                 <View style={{backgroundColor: 
                                    selectedIndex == index ? '#8e8e8e' : '#f2f2f2', 
                                    height: 5, 
                                    width: 50
                                }}></View>
                            )
                        })
                    }
                 </View>
               </View>
               <View>
                <FlatList 
                data={data}
                horizontal
                keyExtractor={(item) => `small_${item.id}`}
                renderItem={({item, index})=> {
                    return (
                        <TouchableOpacity
                        style={{
                            width: width / 3,
                            height: height / 5,
                            borderWidth: 2,
                            borderColor: '#fff',
                        }} onPress={() => {
                            setSelectedShoes(index);
                            setSelectedIndex(0);
                        }}
                        >
                            <Image
                            source={item.items[0]}
                            style={{width:'100%', height: '100%'}} />
                        </TouchableOpacity>
                    )
                }} />
               </View>
               <Text style={{marginLeft:10, marginTop:20, fontSize: 18}}> Men's Shoes</Text>
               <Text style={{margin:10, fontSize:25, fontWeight: '500'}}>Nike Air Force 1 07 LV8</Text>
               <Text style={{marginLeft:10, marginTop:20, fontSize:18}}>MRP : ₹ 9,650.00</Text>
               <Text style={{margin:10, textAlign:'justify', fontSize: 16}}>
                {
                   "The radiance lives on in the Air Force 1 '07 LV8. Crossing hardwood comfort with off-court flair, these kicks add a touch of crafty style to a hoops original. Mixed materials and era-echoing '80s construction add nothing-but-net style."
                }
                
                </Text>    
            </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Nike;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
      heading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
      },
      headingCon: {
        justifyContent: 'center',
        paddingLeft: 10,
        width: '100%',
        height: 60,
      },
      card: {
        flex:1,
        backgroundColor: 'white',
        width: '100%',
      },
      elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
})


