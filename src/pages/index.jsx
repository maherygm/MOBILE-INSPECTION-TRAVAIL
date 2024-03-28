import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import IndexStyle from './styles/index.style';
import axios from 'axios';

export default function () {
  const URLS = 'http://192.168.88.32:4000/api/dossier';

  const [dataState, setDataState] = useState([]);
  function getData(params) {
    axios
      .get(URLS)
      .then(res => {
        console.log(res.data);
        setDataState([...res.data]);
      })
      .catch(err => console.log('get error ', err));
  }
  useEffect(() => {
    getData();
  });

  const [titleTaskValue, setTitleTaskValue] = useState('');
  const [contentTaskValue, setContentTaskValue] = useState('');

  const handleChangeTask = value => {
    setTitleTaskValue(value);
  };

  const handleChangeContent = value => {
    setContentTaskValue(value);
  };

  const addTask = () => {
    const data = [...dataState];

    data.push({
      id: dataState.length - 1,
      title: titleTaskValue,
      content: contentTaskValue,
    });

    setDataState(data);

    console.log('title', titleTaskValue, 'content :', contentTaskValue);
    alert('ajouter');
  };
  return (
    <ScrollView>
      <View>
        <View style={IndexStyle.appBar}>
          <Text style={IndexStyle.title}> Task Management </Text>
        </View>
        <View style={IndexStyle.TextInputContainer}>
          <TextInput
            style={IndexStyle.textInput}
            textContentType="name"
            placeholder="Nom De la Tache"
            value={titleTaskValue}
            onChangeText={handleChangeTask}
          />
          <TextInput
            style={IndexStyle.textInput}
            textContentType="telephoneNumber"
            placeholder="Nombre d'executant"
            value={contentTaskValue}
            onChangeText={handleChangeContent}
          />
          <TouchableOpacity onPress={getData}>
            <View style={IndexStyle.button}>
              <Text>Ajouter la tache </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={IndexStyle.container}>
          {dataState.map((el, index) => (
            <TouchableHighlight key={index}>
              <View style={IndexStyle.card}>
                <Text>{el.dossier.usager.nom}</Text>
                <Text>{el.dossier.usager.prenom}</Text>
                <Text>{el.dossier.types}</Text>
                <Text>{el.dossier.description}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
