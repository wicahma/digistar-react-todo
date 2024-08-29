import React, { useEffect, useState } from "react";

const Creator = ({ baseTodo, creatorCallback }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const [formStatus, setFormStatus] = useState("add");
  const [index, setIndex] = useState(null);

  const [error, setError] = useState({});

  const handleAddTodo = () => {
    const newTodo = {
      title: title,
      description: desc,
      date: date,
    };
    const hasNoError = validateTodo(title, desc, date);
    if (!hasNoError) {
      return;
    }

    if (formStatus === "edit") {
      creatorCallback(newTodo, formStatus, index);
    } else {
      creatorCallback(newTodo, formStatus);
    }
  };

  useEffect(() => {
    if (
      baseTodo.title !== undefined &&
      baseTodo.desc !== undefined &&
      baseTodo.date !== undefined
    ) {
      setTitle(baseTodo.title);
      setDesc(baseTodo.desc);
      setDate(baseTodo.date);
    }
    if (baseTodo.formStatus === "edit") {
      setFormStatus("edit");
      setIndex(baseTodo.index);
    } else {
      setFormStatus("add");
      setIndex(null);
    }
  }, [baseTodo]);

  const validateTodo = (title, desc, date) => {
    if (!title) {
      setError((prev) => ({ ...prev, title: "Judul tidak boleh kosong" }));
    } else {
      setError((prev) => {
        delete prev.title;
        return prev;
      });
    }
    if (!desc) {
      setError((prev) => ({ ...prev, desc: "Deskripsi tidak boleh kosong" }));
    } else {
      setError((prev) => {
        delete prev.desc;
        return prev;
      });
    }
    if (!date) {
      setError((prev) => ({ ...prev, date: "Tanggal tidak boleh kosong" }));
    } else {
      setError((prev) => {
        delete prev.date;
        return prev;
      });
    }
    if (!title || !desc || !date) {
      return false;
    }
    setError({});
    return true;
  };

  const handleClearForm = () => {
    setTitle("");
    setDesc("");
    setDate("");
    setError({});
    setFormStatus("add");
    setIndex(null);
  };
  return (
    <>
      <div className="creator">
        <div className="form">
          <div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`input-judul ${error.title ? "input-error" : ""}`}
              type="text"
              placeholder="Masukkan judul"
            />
            {error.title && <p className="error">{error.title}</p>}
          </div>
          <div>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className={`input-desc ${error.desc ? "input-error" : ""}`}
              type="text"
              placeholder="Berikan Deskripsi"
            />
            {error.desc && <p className="error">{error.desc}</p>}
          </div>
          <div>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`input-date ${error.date ? "input-error" : ""}`}
              type="date"
              placeholder="Masukkan tanggal"
            />
            {error.date && <p className="error">{error.date}</p>}
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleAddTodo} className="btn-tambah">
            Tambahkan
          </button>
          <button onClick={handleClearForm} className="btn-clear">
            Bersihkan
          </button>
        </div>
      </div>
    </>
  );
};

export default Creator;
