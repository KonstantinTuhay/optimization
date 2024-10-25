import { useEffect, useMemo } from "react";

const ItemList = ({ names, strState }) => {
  const filterItems = useMemo(() => {
    return names.filter((item) => item.toLowerCase().includes(strState));
  }, [names]);

  return (
    <>
      {filterItems.map((item) => {
        return <p key={crypto.randomUUID()}>{item}</p>;
      })}
    </>
  );
};

export default ItemList;
