import React, {Component} from 'react';
import {View, Text, FlatList, TextInput, Button,ScrollView} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: '',
      data2:'',
      data3:'',
      data4:'',
    };
  }

  Kirimdata = () => {
    const {data1} = this.state;
    const {data2} = this.state;
    const {data3} = this.state;
    const {data4} = this.state;

    return fetch('http://homekomputer.000webhostapp.com/api/TambahData.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        student_name: data1,
        student_class: data2,
        student_phone_number: data3,
        student_email: data4,
      }),
    })
      .then(respose => respose.json())
      .catch(error => console.log(error));
  };

  // componentDidMount(){
  //   this.Kirimdata()
  // }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  renderItems = ({item, index}) => {
    const {nama, asal} = item;
    return (
      <View>
        <Text style={{fontSize: 20}}>{nama}</Text>
        <Text>{asal}</Text>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
      <View style={{flex: 1}}>
        <TextInput
          placeholder="Masukan nama"
          style={{padding: 10, borderWidth: 1, margin: 30}}
          onChangeText={text => this.setState({data1: text})}
        />

        <TextInput
          placeholder="class"
          style={{padding: 10, borderWidth: 1, margin: 30}}
          onChangeText={text => this.setState({data2: text})}
        />
        <TextInput
          placeholder="phone number"
          style={{padding: 10, borderWidth: 1, margin: 30}}
          onChangeText={text => this.setState({data3: text})}
        />
        <TextInput
          placeholder="email"
          style={{padding: 10, borderWidth: 1, margin: 30}}
          onChangeText={text => this.setState({data4: text})}
        />

        <View style={{marginLeft:230,marginRight:30}}>
          <Button title="Kirim" onPress={this.Kirimdata} />
        </View>
      </View>
      </ScrollView>
    );
  }
}

export default App;
