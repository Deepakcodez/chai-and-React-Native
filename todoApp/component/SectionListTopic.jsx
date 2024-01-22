import React from 'react';
import { Text, SectionList, View, ScrollView } from 'react-native';

export const SectionListTopic = () => {
    
  const users = [
    {
      id: 1,
      name: "deepak",
      data: ["React", "node", "reactnative", "nextjs"]      //we have to give name "data" it is fixed
    },
    {
      id: 2,
      name: "Cash",
      data: ["flutter", "dart", "firebase", "mongo"]
    },
    {
      id: 3,
      name: "musu",
      data: ["html", 'css', "js", "tailwind"]
    },
  ];

  return (
  
    <View>
      <SectionList
        sections={users}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => <Text style={{fontSize:30, color:"red"}}>{name}</Text>}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
    
  );
};
