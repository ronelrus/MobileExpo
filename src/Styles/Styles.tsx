import { StyleSheet, useColorScheme } from "react-native";

export const isDarkMode = () => { return useColorScheme() === 'dark' };

export const colors = {
  mainColor: '#410FA3',
  blue: '#5B7BFE',
  dark: '#080E1E',
  light: '#FFFFFF',
  orange: '#F76400',
  darkOpacity5: 'rgba(8, 14, 30, 0.05)',
  darkGray: '#656872',
  gray: 'rgba(182, 182, 182, 1)',
};

export const getTheme = () => {
  const isDark = isDarkMode();
  return {
    backgroundColor: isDark ? colors.dark : colors.light,
    color: isDark ? colors.light : colors.dark,
    border: isDark ? '#202634' : colors.darkOpacity5,
  }
};

const styles1 = {
  mainStyle: {},
  FirstStartStyles: {},
  lightTheme: {},
  darkTheme: {},
}

export const getStyle = (name: keyof object) => {
  return { ...(styles1[name] as object), ...styles1[isDarkMode() ? 'darkTheme' : 'lightTheme'] } as object  
}

export const styles = () => {
  var theme = getTheme();
  return StyleSheet.create({
    title: {
      fontFamily: 'Fredoka',
      fontSize: 36,
      fontWeight: '600',
      textAlign: "center",
      color: theme.color,
    },
    sectionContainer: {
      height: '100%',
      width: '100%',
    },
    backContainer: {
      justifyContent: 'center',
    },
    titleContainer: {
      width: "100%",
      backgroundColor: colors.mainColor,
      justifyContent: 'center',
    },
    sectionTitleContainer: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: 17,
      fontWeight: '500',
      color: colors.light,
    },
    sectionChildrenContainer: {
      display: 'flex',
      height: '100%',
      // justifyContent: 'center',
      backgroundColor: theme.backgroundColor,
    },
    sectionDescription: {
      color: colors.gray,
      fontWeight: '500',
      fontSize: 17,
      marginTop: 5,
    },
    button: {
      width: 327,
      backgroundColor: colors.blue,
      height: 56,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 12,
    },
    buttonText: {
      fontSize: 20,
      color: colors.light,
      fontWeight: '500',
    },
    highlightText: {
      color: colors.blue,
      fontWeight: '500',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
      height: '100%',
    },
    fieldInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.border,
      backgroundColor: theme.border,
      borderWidth: 2,
      borderRadius: 16,
    },
    fieldInput: {
      padding: 15,
      width: '100%',
      color: theme.color
    },
    fieldTitle: {
      marginBottom: 8,
      color: theme.color,
      fontWeight: '400',
      fontSize: 15,
    },
  })
};

export const FirstStartStyles = () => {
  var theme = getTheme();
  var style = styles();
  return StyleSheet.create({
    title: {
      ...style.title,
      height: 28,
      fontSize: 22,
      width: '95%',
    },
    image: {
      width: "75%",
      resizeMode: 'contain',
      height: 310,
      marginTop: 70,
      marginBottom: 70,
    },
    description: {
      height: 40,
      fontSize: 15,
      width: '70%',
      textAlign: 'center',
      marginBottom: 26,
      color: theme.color,
      opacity: 0.6,
    },
    skipOnboarding: {
      paddingTop: 15,
      width: '75%',
    },
    skipAllText: {
      textAlign: 'center',
      fontSize: 15,
    },
    skipOnboardingText: {
      color: theme.color,
      // opacity: isDarkMode() ? 0.6 : 1,
      // opacity: 0.6,
    },
    circleContainer: {
      height: 10,
      width: 50,
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 25,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: 7,
      backgroundColor: isDarkMode() ? colors.light : colors.dark,
    },
  })
};

export const LoginStyle = () => {
  var theme = getTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      height: '100%',
    },
    titleContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 115,
      resizeMode: 'contain',
      height: 90,
      marginTop: 24,
      marginBottom: 12,
    },
    title: {
      textAlign: 'center',
      fontWeight: "500",
      width: '95%',
      color: theme.color,
      marginBottom: 8,
    },
    fieldsContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    fieldContainer: {
      width: '90%',
      height: 'auto',
      justifyContent: 'center',
      marginTop: 24,
    },
    forgotButton: {
      marginTop: 12,
      marginLeft: 24,
      fontSize: 15,
      fontWeight: '400',
      color: '#D6185D',
      marginBottom: 32,
    },
    signup: {
      marginTop: 24,
      marginBottom: 12,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    signupText: {
      fontSize: 17,
      fontWeight: '400',

      color: colors.darkGray,
    },
    google: {
      marginBottom: 12,
      width: 'auto',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    googleText: {
      fontSize: 17,
      fontWeight: '400',
      color: colors.darkGray,
    }
  })
};

export const MainMenuStyle = () => {
  var theme = getTheme();
  return StyleSheet.create({
    topUsers: {
      marginHorizontal: 24,
    }
  })
};

export const AnimalGameStyle = () => {
  return StyleSheet.create({
    imageContainer: {
      marginTop: 17,
    },
    image: {
      width: '100%',
      resizeMode: 'stretch',
      maxHeight: 364,
      marginTop: 17,
    }
  })
}

export const EmptyStyle = () => {
  var theme = getTheme();
  return StyleSheet.create({
  })
};