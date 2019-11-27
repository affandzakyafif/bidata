import React from 'react'
import {View,Text,Alert,Button,TextInput,ScrollView} from 'react-native'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            student_name:"",
            student_class:""
        }
    }
    Login=()=>{
        const{student_name}=this.state;
        const{student_class}=this.state;

        fetch('http://homekomputer.000webhostapp.com/api/Login.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_name:student_name,
                student_class:student_class
            })
        }).then((respons)=>respons.json())
            .then((responsJson)=>{
                if (responsJson ==='Login Sukses')
                {
                    this.props.navigation.navigate('Home',{detail:student_name})
                }
                else{
                    Alert.alert(responsJson);
                }
            }).catch((error)=>{
                console.error(error);
            });
    }
    render(){
        return(
            
            <View style={{backgroundColor:'#1E90FF',flex:1}}>
                <ScrollView>
                <View style={{alignItems:'center',marginTop:100}}>
                    <Text style={{fontSize:34,color:'#FFFFFF'}}>LOGIN</Text>
                    <Text style={{color:'#ffffff'}}>masukan email dan password anda</Text>
                </View>
                <View style={{justifyContent:'center',marginTop:100,alignItems:'center'}}>
                    <View style={{borderWidth:2,height:350,width:400,alignItems:'center',backgroundColor:'#FFFFFF'}}>
                    <TextInput
                            placeholder="email"
                            onChangeText={student_name => this.setState({student_name})}
                            style={{borderBottomWidth:2,marginTop:60,width:300}}
                    />
                        <TextInput
                            placeholder="password"
                            onChangeText={student_class => this.setState({student_class})}
                            style={{ borderBottomWidth: 2, marginTop: 70, width: 300 }}
                            secureTextEntry={true}
                        />

                        <View style={{marginTop:40,width:150}}>
                            <Button title="login" color='#FFA500' onPress={this.Login} />
                        </View>
                    </View>
                </View>
                </ScrollView>
                </View>

            
        )
    }
}
export default App