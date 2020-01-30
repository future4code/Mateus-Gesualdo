import { create, handleError }  from "./index"
import axios from 'axios'

describe("Testa actions e action creators", () => {

    test("Testa o sucesso na criação de nova tarefa", async() => {

        axios.post = jest.fn( async() => "sucesso")

        const dispatch = jest.fn()

        await create({text: "texto", day: "dia"})(dispatch)

        expect(dispatch).toHaveBeenCalled()
    })

    test("Testa o fracasso na criação de nova tarefa", async() => {

        axios.post = jest.fn( async() => "sucesso")
        handleError = jest.fn()

        await create({})()

        expect(handleError).toHaveBeenCalled()
    })
})