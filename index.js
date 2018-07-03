import { AppRegistry } from 'react-native';
import App from './App';
import ListViewTest from './pages/ListViewTest';
import FetchTest from './pages/FetchTest';
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
    },
    FetchTest: {
        screen: FetchTest,
        navigationOptions: {
            title: 'FetchTest'
        }
    }
})
AppRegistry.registerComponent('listViewExample', () => AppRoot);
