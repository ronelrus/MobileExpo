import AnimalGame from "../View/AnimalGame";
import ChooseLanguage from "../View/ChooseLanguage";
import FirstStart from "../View/FirstStart";
import Login from "../View/Login";
import MainMenu from "../View/MainMenu";

// export const views = [
//     (<FirstStart />),
//     (<ChooseLanguage />),
//     (<Login />),
//     (<MainMenu />),
//     (<AnimalGame />),
// ];

export const views = [
    (<FirstStart />),
    (<ChooseLanguage />),
    (<Login />),
    (<MainMenu />),
    (<AnimalGame />),
];

const names = views.map((item) => {
    var type = String(item.type).toLowerCase();
    return type.substring(type.indexOf(' ') + 1, type.indexOf('('))
})

export const viewIndex = (name: string) => {
    return names.indexOf(name.toLowerCase());
}