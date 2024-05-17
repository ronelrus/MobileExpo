import { ReactNode } from "react";
import { Image, Pressable, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, styles } from "../Styles/Styles";
import testString from "../teststring";

interface SectionProps {
  title: string,
  children: ReactNode,
  backEnabled?: boolean | null,
  imageSrc?: string | null,
  description?: string | null,
  pressableHandler?: Function | null,
  backColor?: string | null,
};

function Section({ children, title, backEnabled, imageSrc, description, pressableHandler, backColor }: SectionProps): React.JSX.Element {
  children = children ? children : (<Text>{testString}</Text>);
  const style = styles();
  // const { useStatusColor } = useContext(ViewContext);
  const backHandler = () => {

  }

  // useEffect(() => {
  //   useStatusColor(backColor ? backColor : colors.mainColor);
  // }, []);

  return (
    <View style={style.sectionContainer}>
      <View style={{ ...style.titleContainer, ...(backColor ? { backgroundColor: backColor } : {}), paddingRight: backEnabled ? 36 : 0, height: imageSrc != null && description != null ? 137 : 58, paddingHorizontal: 24, }}>

        {
          imageSrc != null ? (
            <View>
              <Pressable onPress={() => { pressableHandler?.() }} style={{ height: 56, width: 56 }}>
                <Image source={require('../../assets/favicon.png')} style={{ height: 56, width: 56, resizeMode: 'center', marginBottom: 5, }} />
              </Pressable>
            </View>
          ) : ('')
        }
        <View style={{ flexDirection: 'row' }}>
          {
            backEnabled ? (
              <Pressable style={style.backContainer} onPress={backHandler}>
                <AntDesign name="left" size={20} color={colors.light} onPress={backHandler} ></AntDesign>
              </Pressable>) : ''
          }
          <View style={[style.sectionTitleContainer]}>
            <Text style={{ ...style.sectionTitle, alignSelf: description != null ? 'flex-start' : 'center', fontSize: description != null ? 22 : 17 }} onPress={() => { pressableHandler?.() }}>
              {title}
            </Text>
          </View>
        </View>
        {
          description != null ? (
            <View>
              <Text style={{ ...style.sectionDescription, }}>{description}</Text>
            </View>) : ('')
        }
      </View>
      <View style={style.sectionChildrenContainer}>
        {
          children
        }
      </View>
    </View >
  );
}

export default Section;