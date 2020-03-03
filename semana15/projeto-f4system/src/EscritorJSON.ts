import { writeFileSync } from 'fs'
import {file} from './LeitorJSON'

export default function save (data: any): void {

    const fileText = JSON.stringify(data, null, 3)

    try {

        writeFileSync(file.path, fileText)

    } catch (err) {

        console.log("OCORREU UM ERRO: ", err)

    }

}

