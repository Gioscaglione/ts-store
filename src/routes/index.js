import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro';
import ProductsScreen from '../pages/produtos';
import Filtros from '../pages/filtros'
import Camiseta from '../pages/camiseta';
import Moletom from '../pages/moletom';
import Disco from '../pages/disco'
import Palhetas from '../pages/palhetas';
import Carrinho from '../pages/carrinho';
import Final from '../pages/finalizacao';

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
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="filtros"
                component={Filtros}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="moletom"
                component={Moletom}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="disco"
                component={Disco}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="camiseta"
                component={Camiseta}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="palhetas"
                component={Palhetas}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="carrinho"
                component={Carrinho}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
            <Stack.Screen
                name="finalizacao"
                component={Final}
                options={{ headerShown: false, 
                            contentStyle:{
                            backgroundColor:'#ECE5E5'
                        }}}
            />
        </Stack.Navigator>
    )
}