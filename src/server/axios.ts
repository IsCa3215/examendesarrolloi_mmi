
  import axios from 'axios';
  import { DataValve } from '../responses/DataValve';
  
  export class AxiosServer {
    private static BASE_URL = 'http://192.168.1.143:3000';// está en mi IP llevo 2 h y media con esta basura y gracias a jose lo he conseguido
  
    static async fetchValves(): Promise<DataValve[]> {
      try {
        const response = await axios.get<DataValve[]>(`${this.BASE_URL}/items`);//obtenemos el json del servidor de tipo interfaz DataValve.
        return response.data;
      } catch (error) {
        console.error('Error en valvus:', error);
        return [];
      }
    }
  
    static async updateGroups(groups: DataValve[]): Promise<DataValve[]> {
      try {
        const response = await axios.post<DataValve[]>(`${this.BASE_URL}/items`, groups);
        return response.data;
      } catch (error) {
        console.error('Errol en las valves', error);
        return groups;
      }
    }
  }