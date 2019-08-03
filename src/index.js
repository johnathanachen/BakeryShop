import Navigator from 'native-navigation';
import { DIRECTIONS } from './routes';

<script src="http://192.168.254.9:8097"></script>

Navigator.registerScreen(DIRECTIONS, () => require('./screens/Directions'));