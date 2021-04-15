import { configure, shallow } from 'enzyme';
import adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Calculadora } from '../components/calculadora';

configure({
    adapter: new adapter()
});

describe('Prueba de componente Calculadora', () => {
    const wrapper = shallow(<Calculadora num1={2} num2={10} name="Cristian Medina" />);
    const result = (numb) => wrapper.find('p').at(numb).text().trim();
    const click = (numb) => wrapper.find('button').at(numb).simulate('click');

    test('Simular click botón sumar', () => {
        click(0);
        expect(result(1)).toMatch('12');
    })
    test('Simular click botón restar', () => {
        click(1);
        expect(result(1)).toMatch('-8');
    })
    test('Simular nombre', () => {
        click(1);
        expect(result(0)).toMatch('Señor Cristian Medina el resultado de la resta es:');
    })
})
