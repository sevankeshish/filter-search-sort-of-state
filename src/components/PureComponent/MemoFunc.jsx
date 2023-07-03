import React from "react";
const MemoComp = (props) => {
  console.log("Memoooooooooooooooo");
  return <div>Memo functional - {props.name}</div>;
};

// export default MemoComp;
export default React.memo(MemoComp);
