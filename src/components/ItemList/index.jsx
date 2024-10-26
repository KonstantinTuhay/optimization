import React, { useMemo } from "react";

const ItemList = React.memo(({ names, strState }) => {
  console.log("ItemList");

  const filterItems = useMemo(() => {
    return names.filter((item) => item.toLowerCase().includes(strState));
  }, [names, strState]);

  return (
    <>
      {filterItems.map((item) => {
        return <p key={crypto.randomUUID()}>{item}</p>;
      })}
    </>
  );
});

ItemList.displayName = "ItemList";

export default ItemList;
