import { AppRegistry } from 'react-native';
import App from './App';
import ListViewTest from './pages/ListViewTest';
import {StackNavigator} from 'react-navigation';

const AppRoot  = StackNavigator({
    App: {
        screen: App,
    },
    ListViewTest: {
        screen: ListViewTest,
        navigationOptions: {
            title: 'ListViewTest'
        }
    }
})
AppRegistry.registerComponent('listViewExample', () => AppRoot);
