import React, { createContext, useState, useContext, useEffect } from 'react';
import { DataValve, Value } from '../responses/DataValve';
import { AxiosServer } from '../server/axios';

interface ValvesContextType {
  valves: DataValve[];
}

const IrrigationContext = createContext<ValvesContextType | undefined>(undefined);

export const IrrigationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [valves, setValves] = useState<DataValve[]>([]);

  useEffect(() => {
    const loadValves = async () => {
         const fetchedGroups = await AxiosServer.fetchValves(); //se cargan los grupos y valvulas y se meten en el valves
      setValves(fetchedGroups);
    };
    loadValves();//se llama la función que carga las valvulas mediante un fetch al servidor con axios
  }, []);

  return (
    <IrrigationContext.Provider value={{ valves }}>
      {children}
    </IrrigationContext.Provider>
  );
};
export const useIrrigation = () => {
  const context = useContext(IrrigationContext);
  if (!context) {
    throw new Error('El contexto de riego no está disponible');
  }
  return context;
};
