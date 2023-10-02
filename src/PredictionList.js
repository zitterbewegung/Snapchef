import React, {useState} from 'react';
import { StyleSheet, Text, View, Linking, Pressable, Alert} from "react-native";
const apiKey = "a50acb0dda762d1e3857c896a51193bf";
const app_id = "cef19c88";
//const [data, setData] = useState([]);
//const [loading, setLoading] = useState(true);

const handlePress = (argument) => {
    console.log(argument);
    if(argument == 'pizza, pizza pie'){
	Linking.openURL('https://thefoodcharlatan.com/homemade-pizza-recipe/');
    }

    if (argument == 'hotdog, hot dog, red hot')
    {
	Linking.openURL('https://www.foodnetwork.com/recipes/michael-chiarello/best-hot-dogs-recipe-1947661');	

    }
    if (argument == 'salad'){
	Linking.openURL('https://www.seriouseats.com/the-best-caesar-salad-recipe');

    }
    //try {
    // const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=${argument}&app_id=cef19c88&app_key=a50acb0dda762d1e3857c896a51193bf');
    // 	const json = await response.json();
    // 	console.log(json['hits'][0]['shareAs']);
    // 	let url = json['hits'][0]['shareAs'];
    // 	Linking.openURL(url);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // } finally {
    //   //setLoading(false);
    //     }

};

export function PredictionList({ predictions = [] }) {
    const [modalVisible, setModalVisible] = useState(false);
    console.log(predictions);
    
  return (
    <View style={styles.container}>


	{predictions.map((p, i) => (
	
	    
	  
	    //<Pressable onPress={() => Linking.openURL(`pizza, pizza pie`)} key={`item-${i}`}> 
	    <Pressable onPress={() => {handlePress(p.className) }} key={`item-${i}`}>     
	    <Text style={styles.text} key={`item-${i}`}>
	
	
		     {p.className}
		     
		</Text>
     </Pressable>
      ))}
    </View>
  );
}

const margin = 24;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    bottom: margin,
    left: margin,
    right: margin,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    paddingVertical: 2,
    fontSize: 20,
  },
});
