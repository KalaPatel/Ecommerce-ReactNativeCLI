import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import CategorySection from './components/categorySection/categorySection';
import CardList from './components/cardList/cardList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Hero />
        <CategorySection />
        <CardList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
