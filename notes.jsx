/* 1.In React Native to add box shadow  we need to use elevation property 
for Android 
  elevation: 5,
 
  and for iOS we need to use shadowColor, shadowOffset, shadowOpacity, shadowRadius properties
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
 shadowRadius: 3.84, 




 2. Text input to limit the length use maxLength={number} property in TextInput component and
   for allowing only numeric input use keyboardType="numeric" property in TextInput component. 


 3.Andriod ripple effect can be added using android_ripple property in Pressable component as shown below
   
   <Pressable android_ripple={{ color: 'lightgray' }} >
      <Text>Press Me</Text>
   </Pressable>

   for iOS we can use style prop in Pressable component to change opacity on press as shown below

   <Pressable 
      style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
   >
      <Text>Press Me</Text>
   </Pressable>

4. To add navigation we need use createStaticNavigation function from @react-navigation/native package and create a stack navigator using createStackNavigator function from @react-navigation/stack package.
   const MyStack = createStackNavigator({
    screens: {
      Categories: Categories,
      Meals: OverviewScreen,
    },
   });
   const Navigation = createStaticNavigation(MyStack);
   return <Navigation />;
   

   */



   


