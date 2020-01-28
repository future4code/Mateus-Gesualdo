import React from 'react'
import renderer from 'react-test-renderer'
import { Headers, Button } from './index'
import { shallow } from 'enzyme'

describe('Testa o componente Headers', () => {
    test('snapshot', () => {
        const tree = renderer.create(<Headers/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Chama a funcao goBack ao clicar no botao', () => {
		
		const goBack = jest.fn()
		const component = shallow(<Button onClick={goBack}/>)

		component.find(Button).simulate('click')

		expect(goBack).toHaveBeenCalledTimes(1)
	})
})