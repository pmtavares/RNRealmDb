import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Realm from 'realm';
let realm;


const ViewAllUser = () => {

    realm = new Realm({path: "UserDatabase.realm"});
    var user_details = realm.objects("user_details");
  
    const FlatListItems = user_details;     
    
    const ListViewItemSeparator = () => {
        return (
          <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
        );
    };

   
    return (
        <View>
            <FlatList 
                data={FlatListItems}
                ItemSeparatorComponent={ListViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text>Id: {item.user_id}</Text>
                        <Text>Name: {item.user_name}</Text>
                        <Text>Contact: {item.user_contact}</Text>
                        <Text>Address: {item.user_address}</Text>
                    </View>
                )}
            />
        </View>
    )
    

}

export default ViewAllUser; 