import { readFileSync } from 'fs'

export const file: any = { path: 'data.json' }

try {
    file.buffer = readFileSync(file.path)
} catch (err) {
    console.log('OCORREU UM ERRO:', err)
}

file.text = String(file.buffer)

export default JSON.parse(file.text)

