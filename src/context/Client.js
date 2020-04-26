import React, { createContext, useMemo, useState } from "react";

export const ClientContext = createContext(null);

export function ClientProvider ({ children })  {
  const [userData, setUserData] = useState(false);

  const memorizedContext = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData, setUserData]
  );

  return (
    <ClientContext.Provider value={memorizedContext}>
      {children}
    </ClientContext.Provider>
  );
};
