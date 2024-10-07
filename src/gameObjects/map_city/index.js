import { campusHouse1OpenDoor } from './campusHouse1OpenDoor';
import { npcsInCityMap } from './npcsOnmap_city';
const gameObjects = [
    npcsInCityMap,
    // Add more game objects here
    campusHouse1OpenDoor,
];

export const addGameObjects = (k, map, spawnpoints) => {
    return gameObjects.reduce((gameObjAcc, cb) => {
        const temp = cb(k, map, spawnpoints);

        if (Array.isArray(temp)) {
            gameObjAcc.push(...temp);
            return gameObjAcc;
        }

        gameObjAcc.push(temp);

        return gameObjAcc;
    }, []);
};
