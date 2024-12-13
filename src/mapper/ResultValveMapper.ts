import { Value, DataValve} from "../responses/DataValve";  

export const resultValveMapper = (result: DataValve) => { // Mapper de valvulas DataValve
    return {
        name: result.name,
        state: result.lastDate,
        values: result.values.map(mapValue)
        }
}
const mapValue = (item: Value) => { // mapper de valvulas Value porque me implosiona si lo pongo en DataValue
    return {
        name: item.name,
        state: item.state,
    };
};

