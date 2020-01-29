import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import { CreationForm } from './index'

describe("Testes do formulário", () => {
    
    test("Snapshot", () => {

        const tree = renderer
            .create(<CreationForm/>)
            .toJSON()

        expect(tree).toMatchSnapshot()

    })

    test("Deve chamar a funcao handleInputChange ao clicar no botão", () => {
		
		const setState = jest.fn()
        const component = shallow(<CreationForm/>)
		const TextField = component.find(TextField)

		TextField.simulate('change')

		expect(setState).toHaveBeenCalledTimes(1)
	})

})