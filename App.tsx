import React, { useEffect, useState } from 'react';
import { BackHandler, SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ViewContext, ViewerType, changeBoard, changeView } from './src/Context/ViewContext';
import { views } from './src/Navigator/Navigator';
import { colors } from './src/Styles/Styles';

const debug = true;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [viewer, useViewer] = useState({ view: 2, board: 0 } as ViewerType);
  const [firstLaunch, useFirstLaunch] = useState(true);
  const [statusColor, useStatusColor] = useState(colors.mainColor);

  if (firstLaunch && !debug) {
    useFirstLaunch(false);
    useViewer({ view: 0, board: 0 });
  }

  const backAction = () => {
    const view = viewer.view;
    const board = viewer.board;
    if (view == 0) {
      if (board == 0) {
        BackHandler.exitApp();
      }
      useViewer(prev => changeBoard(prev, board - 1));
      return true;
    } else {
      if (board == 0) {
        if (view == 2) {
          useViewer(prev => changeView(prev, 0));
          return true;
        } else {
          useViewer(prev => changeView(prev, view - 1));
          return true;
        }
      } else if (board > 0) {
        useViewer(prev => changeBoard(prev, board - 1));
        return true;
      }
    }
    return null;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => { BackHandler.removeEventListener('hardwareBackPress', backAction); }
  }, [viewer]);

  useEffect(() => {
    console.log(new Date(), viewer);
  }, [viewer]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={statusColor}
      />
      <ViewContext.Provider value={{ viewer, useViewer, statusColor, useStatusColor }}>
        {
          views[viewer.view]
        }
      </ViewContext.Provider>
    </SafeAreaView>
  );
}

export default App;
