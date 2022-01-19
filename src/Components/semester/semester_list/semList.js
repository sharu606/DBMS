import "./semList.css";
import SemCard from "../semester_card/semCard";

function SemList(props) {
  const sem_list = [1, 2, 3, 4, 5, 6, 7, 8];

  function onClickHandler(sem_no) {
    props.onSelectSem(sem_no);
  }

  return (
    <div className="sem-list pl-3 pr-3">
      {sem_list.map((num) => {
        return <SemCard num={num} onClick={onClickHandler}></SemCard>;
      })}
    </div>
  );
}

export default SemList;
