import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Alert,FlatList,ScrollView} from 'react-native'
import {createAppContainer} from 'react-navigation'
import Tombol from 'react-native-action-button'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pro:[],
      refreshing:false
    }
  }

  mengambil=()=>{
    return fetch('http://homekomputer.000webhostapp.com/api/TampilkanData.php')
    .then((respons)=>respons.json())
    .then((responsJson)=>{
      console.log(responsJson)
      this.setState({
          pro:responsJson,
          loading:false,
          refreshing:false
      })
    })
      .catch((error) => console.log({error,loading:false,refreshing:false}))
  }
  

  handleRefresh=()=>{
    this.setState({
      page:1,
      refreshing:true,
      seed:this.state.seed+1,
    },()=>{
      this.mengambil()
    })
  }

  componentDidMount(){
    this.mengambil()
  }
  update=(updateItem)=>{
    this.props.navigation.navigate('Datadetail',{detail:updateItem})
  }

renderItems=({item}) =>{
  const { student_id, student_name, student_class, student_phone_number, student_email} = item 

  return(
    <ScrollView>
      <TouchableOpacity onPress={()=>this.update([`${item.student_id}`,`${item.student_name}`,`${item.student_class}`,`${item.student_phone_number}`,`${item.student_email}`])}>
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <View style={{ borderWidth: 2,borderRadius:20,height:'100%',width:'100%',borderColor:'yellow' }}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20,color:'red' }}>id : {student_id}</Text>
          <Text style={{ fontSize: 20,color:'red' }}>name : {student_name}</Text>
          <Text style={{ fontSize: 20,color:'red' }}>class  : {student_class}</Text>
          <Text style={{ fontSize: 20,color:'red' }}>phone number : {student_phone_number}</Text>
          <Text style={{ fontSize: 20,color:'red' }}>email  : {student_email}</Text>
         </View>
      </View>
      </View>
      </TouchableOpacity>
    </ScrollView>
  )

}


    render (){
        return (
          <View style={{flex:1}}>
            <FlatList
              data={this.state.pro}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              keyExtractor={(item) => item.toString()}
              renderItem={this.renderItems}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
              
            />
             <Tombol buttonColor="blue" >
              <Tombol.Item onPress={() => this.props.navigation.navigate('Data')} title='klik' buttonColor='green'>
                <Text style={{color:'white'}}>masuk</Text>
               </Tombol.Item>
             
             </Tombol> 
          </View>
         
        );
    }
}
export default App


