import React from "react";

const SearchInput = React.memo(({ strState, callbackFuncStr }) => {
  console.log("SearchInput");

  return (
    <>
      <input
        value={strState}
        onChange={(e) => callbackFuncStr(e.target.value)}
      />
    </>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
