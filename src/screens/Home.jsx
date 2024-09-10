import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home() {
const [ count, setCount]=useState(0)

const Increment = ()=>{
    setCount(count+1)
}
const Decrement = ()=>{
    setCount(count-1)
}
const Reset =()=>{
    setCount (0)

}
  return (
   <View style={styles.container}>
<Text style={styles.countertext}> Counter App</Text>
<Text style={styles.text}>count: {count}</Text>
<View style={styles.buttonContainer}>
    <Button title='Increment' onPress={Increment} />
    <Button title='Decrement' onPress={Decrement}/>
    <Button title='Reset' onPress={Reset}/>

</View>
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countertext:{
        fontSize: 30,
        marginBottom:80

    },
    text:{
        fontSize: 20,
        marginBottom:10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,

    },
})
