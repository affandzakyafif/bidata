import React from 'react';
import {View,Text,TextInput,Button,Alert,ScrollView} from 'react-native';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pro:[],
            student_id:"",
            student_name:"",
            student_class:"",
            student_phone_number:"",
            student_email:""

        }
    }
    mengambil=()=>{
        return fetch('http://homekomputer.000webhostapp.com/api/TampilkanData.php')
        .then((response)=> response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            this.setState({
                pro:responseJson
            })
        })
        .catch((error) => console.log(error))
    }
    componentDidMount() {
        this.mengambil()
        this.setState({
            student_id:this.props.navigation.state.params.detail[0],
            student_name: this.props.navigation.state.params.detail[1],
            student_class: this.props.navigation.state.params.detail[2],
            student_phone_number: this.props.navigation.state.params.detail[3],
            student_email: this.props.navigation.state.params.detail[4]
        })
    }

    rubah=()=>{
        return fetch('http://homekomputer.000webhostapp.com/api/EditData.php',
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_id:this.state.student_id,
                student_name:this.state.student_name,
                student_class:this.state.student_class,
                student_phone_number:this.state.student_phone_number,
                student_email:this.state.student_email
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                Alert.alert(responseJson)
            }).catch((error)=>{
                console.error(error)
            })
    }
    hapus=()=>{
        return fetch('http://homekomputer.000webhostapp.com/api/HapusData.php',
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_id: this.state.student_id
               })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                Alert.alert(responseJson)
            }).catch((error)=>{
                console.error(error)
            })
    }


    render(){
        return(
           <View style={{flex:1}}>
           <ScrollView>
               <View style={{paddingHorizontal:30}}>
                <TextInput
                    placeholder='ketik'
                    onChangeText={text => this.setState({student_name:text})}
                    value={this.state.student_name}
                    style={{padding:10,borderWidth:1,margin:30}}/>
                <TextInput
                    placeholder='ketik'
                    onChangeText={text => this.setState({student_class:text})}
                    value={this.state.student_class}
                    style={{padding:10,borderWidth:1,margin:30}}/>
                <TextInput
                    placeholder='ketik'
                    onChangeText={text => this.setState({student_phone_number:text})}
                    value={this.state.student_phone_number}
                    style={{padding:10,borderWidth:1,margin:30}}/>
                <TextInput 
                    placeholder='ketik'
                    onChangeText={text => this.setState({student_email:text})}
                    value={this.state.student_email}
                    style={{padding:10,borderWidth:1,margin:30}}/>
                    <View style={{flexDirection:'row'}}>
                       <View style={{paddingHorizontal:60}}>
                            <Button style={{ width: 50 }} title='Hapus' onPress={this.hapus}/>
                           
                       </View>
                       <View style={{paddingHorizontal:50}}>
                            <Button style={{ width: 50 }} title='Rubah' onPress={this.rubah} />
                       </View>
                     </View>

                         
               </View>
                </ScrollView>
           </View>

        )
    }
}
export default App