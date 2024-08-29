import React from "react";

const TodoCard = ({
  title,
  date,
  desc,
  isDoneCallback,
  checked,
  handleDelete,
  handleEdit,
}) => {
  const dateFormatter = (date) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da} ${mo} ${ye}`;
  };
  return (
    <div>
      <div className="card">
        <input
          className={"checkbox"}
          type="checkbox"
          checked={checked}
          onChange={isDoneCallback}
        />
        <div className="card-header">
          <h2>{title}</h2>
          <p>{dateFormatter(date)}</p>
        </div>
        <div className="card-body">
          <p>{desc}</p>
        </div>
        <div className="card-footer">
          <button onClick={handleDelete} className="btn-delete">
            Hapus
          </button>
          <button onClick={handleEdit} className="btn-edit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
