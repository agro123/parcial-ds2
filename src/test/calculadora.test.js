import Calculadora from '../components/calculadora';
import { configure, shallow } from 'enzyme';

describe('Prueba de botones',()=>{
    const wrapper = shallow(<Calculadora num1={2} num2={4} name="Cristian"/>);

})
