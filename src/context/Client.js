import React, { createContext, useMemo, useState } from "react";

export const ClientContext = createContext(null);

export function ClientProvider({ children }) {
  const [usersData, setUsersData] = useState([
    {
      name: "Blas",
      surname: "Santome",
      dni: "54229366G",
      age: 18,
      gender: "Hombre",
      height: 1.8,
      measurements: [
        {
          date: "25/04/2020",
          weight: 74,
          physicalActivity: "active",
        },
      ],
    },
    {
      name: "Antonio",
      surname: "Santome",
      dni: "54229266G",
      age: 18,
      gender: "Hombre",
      height: 1.8,
      measurements: [
        {
          date: "25/04/2020",
          weight: 74,
          physicalActivity: "active",
        },
      ],
    },
  ]);

  const memorizedContext = useMemo(
    () => ({
      usersData,
      setUsersData,
    }),
    [usersData, setUsersData]
  );

  return (
    <ClientContext.Provider value={memorizedContext}>
      {children}
    </ClientContext.Provider>
  );
}
