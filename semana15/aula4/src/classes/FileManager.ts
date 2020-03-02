import { readFileSync, writeFileSync } from 'fs'

export class FileManager {
    static read = (path: string): any => JSON.parse(
        String(
            readFileSync(path)
        )
    )
    static write = (path: string, data: any) => {
        writeFileSync(
            path,
            JSON.stringify(data)
        )
    }
}