import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData(local) {
    const filePath = path.join(process.cwd(), local);
    const jsonData : any = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return objectData
}