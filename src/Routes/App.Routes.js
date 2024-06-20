import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../Pages/Home";
import Acao from "../Pages/Acao";
import Comedia from "../Pages/Comedia";
import Romance from "../Pages/Romance";
import Terror from "../Pages/Terror";
import CartasFilme from "../Components/CartasFilme";

import CustomDrawer from "../Components/CustomDrawer";

function Routes(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,

            drawerStyle:{
                backgroundColor: '#303030',
                paddingTop: 20,
            },

            drawerActiveBackgroundColor: 'rgba(171, 10,10,0.5)',
            drawerActiveTintColor: '#fff',

            drawerInactiveBackgroundColor: '#383838',
            drawerInactiveTintColor: '#808080'
        }}
        >
            <Drawer.Screen
            name="Inicio"
            component={Home}
            />
            <Drawer.Screen
            name="Ação"
            component={Acao}
            />
            <Drawer.Screen
            name="Comédia"
            component={Comedia}
            />
            <Drawer.Screen
            name="Romance"
            component={Romance}
            />
            <Drawer.Screen
            name="Terror"
            component={Terror}
            />
        </Drawer.Navigator>
    )
}

export default Routes;