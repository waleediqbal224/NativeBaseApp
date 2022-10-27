import React, {useState} from 'react';

import {
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Images from '../../theme/Images';

const CatandInt = props => {


  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);

  const categories = [
    {
      id: 1,
      name: 'Internships',
    },
    {
      id: 2,
      name: 'Fresh Graduates',
    },
    {
      id: 3,
      name: 'Professionals',
    },
    {
      id: 4,
      name: 'Business',
    },
    {
      id: 5,
      name: 'General',
    },
    {
      id: 6,
      name: 'Students',
    },
  ];
  const interests = [
    {
      id: 1,
      interest: 'Architecture',
    },
    {
      id: 2,
      interest: 'Branding',
    },
    {
      id: 3,
      interest: 'Business Analysis',
    },
    {
      id: 4,
      interest: 'Building',
    },
    {
      id: 5,
      interest: 'Business Planning',
    },
    {
      id: 6,
      interest: 'Career Planning',
    },
    {
      id: 7,
      interest: 'Coding',
    },
    {
      id: 8,
      interest: 'Communication',
    },
    {
      id: 9,
      interest: 'Computing',
    },
    {
      id: 10,
      interest: 'Creativity',
    },
    {
      id: 11,
      interest: 'Culture',
    },
    {
      id: 12,
      interest: 'Cybersecurity',
    },
    {
      id: 13,
      interest: 'Ethics',
    },
    {
      id: 14,
      interest: 'Data Analytics',
    },
    {
      id: 15,
      interest: 'Design Thinking',
    },
    {
      id: 16,
      interest: 'Economics',
    },
    {
      id: 17,
      interest: 'Digital Marketing',
    },
    {
      id: 18,
      interest: 'Education',
    },
    {
      id: 19,
      interest: 'Human Resources',
    },
    {
      id: 20,
      interest: 'Farming',
    },
    {
      id: 21,
      interest: 'Environment',
    },
    {
      id: 22,
      interest: 'Politics',
    },
    {
      id: 23,
      interest: 'Governance',
    },
    {
      id: 24,
      interest: 'Industries',
    },
    {
      id: 25,
      interest: 'Information Technology',
    },
    {
      id: 26,
      interest: 'Finance',
    },
    {
      id: 27,
      interest: 'Education',
    },
    {
      id: 28,
      interest: 'Education',
    },
    {
      id: 29,
      interest: 'Education',
    },
    {
      id: 30,
      interest: 'Education',
    },
    {
      id: 31,
      interest: 'Education',
    },
    {
      id: 32,
      interest: 'Education',
    },
    {
      id: 33,
      interest: 'Education',
    },
    {
      id: 34,
      interest: 'Education',
    },
    {
      id: 35,
      interest: 'Education',
    },
    {
      id: 36,
      interest: 'Education',
    },
    {
      id: 37,
      interest: 'Education',
    },
    {
      id: 38,
      interest: 'Education',
    },
    {
      id: 39,
      interest: 'Education',
    },
    {
      id: 40,
      interest: 'Education',
    },
    {
      id: 41,
      interest: 'Education',
    },
    {
      id: 42,
      interest: 'Education',
    },
    {
      id: 43,
      interest: 'Education',
    },
    {
      id: 44,
      interest: 'Education',
    },
    {
      id: 45,
      interest: 'Education',
    },
    {
      id: 46,
      interest: 'Education',
    },
    {
      id: 47,
      interest: 'Education',
    },
  ];

  const selectCat = itemId => {
    selectedCategories.push(itemId);
    console.log(selectedCategories);
    console.log(selectedCategories.includes(1));
  };
  const categoryClick = item => {
    if (!selectedCategories.includes(item.id)) {
      setSelectedCategories([...selectedCategories, item.id]);
    } else {
      const filterData = selectedCategories.filter(value => value !== item.id);
      setSelectedCategories(filterData);
    }
  };
  const interestClick = item => {
    if (!selectedInterest.includes(item.interest)) {
      setSelectedInterest([...selectedInterest, item.interest]);
    } else {
      const filterData = selectedInterest.filter(value => value !== item.interest);
      setSelectedInterest(filterData);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image source={Images.logo} style={{height: 28, width: 28}} />
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 21,
          }}>
          GridHup
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          marginBottom: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            lineHeight: 32,
            fontSize: 27,
            fontWeight: '600',
            color: '#FFFFFF',
          }}>
          Select Categories
        </Text>
        <View style={styles.categoryContainer}>
          {categories.map(item => (
            <Pressable key={item.id} onPress={() => categoryClick(item)}>
              <View
                style={{
                  backgroundColor: selectedCategories.includes(item.id)
                    ? '#F61962'
                    : 'white',
                  //backgroundColor: '#F61962',
                  width: 90,
                  height: 44,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    color: selectedCategories.includes(item.id)
                      ? 'white'
                      : '#F61962',
                    fontSize: 10,
                    fontWeight: '600',
                  }}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
        <Text
          style={{
            lineHeight: 32,
            fontSize: 27,
            fontWeight: '600',
            color: '#FFFFFF',
          }}>
          Select Interests
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.interestsContainer}>
        {interests.map((item, i) => (
          <Pressable key={i} onPress={() => interestClick(item)}>
            <View
              style={{
                backgroundColor: 'white',
                //width: 90,
                padding: 10,
                //marginHorizontal:10,
                //height: 30,
                alignItems: 'center',
                //justifyContent: 'center',
                borderRadius: 20,
                //marginHorizontal: 10,
                marginBottom: 10,
                marginRight: 3,
                borderWidth: 1,
                borderColor: selectedInterest.includes(item.interest)
                  ? '#F61962'
                  : '#CFD3E4',
              }}>
              <Text
                style={{
                  color: selectedInterest.includes(item.interest)
                    ? '#F61962'
                    : 'black',
                  fontSize: 8,
                  fontWeight: '600',
                  marginHorizontal: 5,
                }}>
                {item.interest}
              </Text>
            </View>
          </Pressable>
        ))}
        <Pressable
          onPress={() => {
            props.navigation.navigate('ProfileInformation');
          }}
          style={styles.button}>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
            Enter Gridhup
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#5D5D61',
  },
  input: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    height: 55,
    width: '85%',
    paddingLeft: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  labels: {
    color: '#00000059',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 30,
  },
  button: {
    backgroundColor: '#F61962',
    borderRadius: 6,
    padding: 10,
    width: 280,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  errorMessage: {
    marginTop: -8,
    marginBottom: 10,
    color: 'red',
    marginLeft: 30,
  },
  categoryContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  categoryBtn: {
    backgroundColor: 'red',
    width: 90,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  interestsContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingBottom: 350,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
});

export default CatandInt;