import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro';
import ProductsScreen from '../pages/produtos';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="cadastro"
                component={Cadastro}
                options={{ headerShown: false }}>
            </Stack.Screen>
            
            <Stack.Screen
                name="produtos"
                component={ProductsScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}