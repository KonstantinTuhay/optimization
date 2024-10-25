const SearchInput = ({ strState, callbackFuncStr }) => {
  return (
    <>
      <input
        value={strState}
        onChange={(e) => callbackFuncStr(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
