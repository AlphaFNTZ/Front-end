import "./Select_img.css";

const Select_img = () => {
  return (
    <div className="select_img">
      <label htmlFor="fileInput">
        <div className="selec">Selecionar Imagem</div>
      </label>
      <input type="file" id="fileInput" style={{ display: "none" }} />
    </div>
  );
};

export default Select_img;
