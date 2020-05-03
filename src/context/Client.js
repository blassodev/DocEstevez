import React, { createContext, useMemo, useState } from "react";

export const ClientContext = createContext(null);

export function ClientProvider({ children }) {
  const [usersData, setUsersData] = useState([
    {
      name: "Blas",
      surname: "Santome",
      dni: "54229366G",
      age: 21,
      gender: "Hombre",
      height: 1.8,
      measurements: [
        {
          date: "25/04/2020",
          weight: 74,
          physicalActivity: "1",
        },
        {
          date: "26/04/2020",
          weight: 74.1,
          physicalActivity: "2",
        },
        {
          date: "27/04/2020",
          weight: 74.3,
          physicalActivity: "2",
        },
        {
          date: "28/04/2020",
          weight: 74,
          physicalActivity: "2",
        },
        {
          date: "29/04/2020",
          weight: 73.5,
          physicalActivity: "3",
        },
        {
          date: "30/04/2020",
          weight: 74.1,
          physicalActivity: "3",
        },
        {
          date: "1/05/2020",
          weight: 74.3,
          physicalActivity: "4",
        },
        {
          date: "2/04/2020",
          weight: 74,
          physicalActivity: "1",
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
          physicalActivity: "1",
        },
        {
          date: "26/04/2020",
          weight: 74.20,
          physicalActivity: "2",
        },
        {
          date: "27/04/2020",
          weight: 74.24,
          physicalActivity: "2",
        },
        {
          date: "28/04/2020",
          weight: 74.29,
          physicalActivity: "2",
        },
        {
          date: "29/04/2020",
          weight: 74.20,
          physicalActivity: "3",
        },
        {
          date: "30/04/2020",
          weight: 74.15,
          physicalActivity: "3",
        },
        {
          date: "1/05/2020",
          weight: 74.12,
          physicalActivity: "4",
        },
        {
          date: "2/04/2020",
          weight: 74.20,
          physicalActivity: "1",
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
