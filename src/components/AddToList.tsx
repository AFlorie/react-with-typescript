import { useState } from "react";
import { Istate as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      { name: input.name, age: +input.age, img: input.img, note: input.note },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  const text =
    "ad Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt corrupti dicta libero facilis beatae accusamus saepe, iusto id quia accusantium quod magni eaque eius, quis et sed praesentium fugit? Ipsum!";

  return (
    <div className="AddToList">
      <div>
        <p>{text}</p>
      </div>
      <input
        type="text"
        value={input.name}
        onChange={handleChange}
        name="name"
        placeholder="Name"
        className="AddToList-input"
      />
      <input
        type="text"
        value={input.age}
        onChange={handleChange}
        name="age"
        placeholder="Age"
        className="AddToList-input"
      />
      <input
        type="text"
        value={input.img}
        onChange={handleChange}
        name="img"
        placeholder="Image url"
        className="AddToList-input"
      />
      <textarea
        value={input.note}
        onChange={handleChange}
        name="notes"
        placeholder="Note"
        className="AddToList-input"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
