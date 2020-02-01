import React,{useState} from 'react';
import { Text, View } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import Realm from 'realm';
let realm;
 
const ViewUser = () =>   {
    const [userId, setUserId] = useState(0); 
    const [userData, setUserData] = useState('');
  
    realm = new Realm({ path: 'UserDatabase.realm' });
    
  const searchUser = () => {
    var user_details = realm.objects('user_details').filtered('user_id =' + userId);
    if (user_details.length > 0) {
      setUserData(user_details[0])      
    } else {
      alert('No user found');
      setUserData('');
    }
  };
 
    return (
      <View>
        <MyTextInput
          placeholder="Enter User Id"
          onChangeText={input_user_id => setUserId(input_user_id)}
          keyboardType="numeric"
          numeric
        />
        <MyButton
          title="Search User"
          customClick={()=> {searchUser()}}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>User Id: {userData.user_id}</Text>
          <Text>User Name: {userData.user_name}</Text>
          <Text>User Contact: {userData.user_contact}</Text>
          <Text>User Address: {userData.user_address}</Text>
        </View>
      </View>
    );
  
}

export default ViewUser;