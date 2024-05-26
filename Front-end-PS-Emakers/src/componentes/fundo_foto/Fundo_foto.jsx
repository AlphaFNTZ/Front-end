import "./Fundo_foto.css";
import { CiHeart } from "react-icons/ci";

const Fundo_foto = ({ foto }) => {
	return (
		<div className="fundo_foto">
			<img src={foto} alt="" />
			<div className="curtida">
				<CiHeart />
			</div>
		</div>
	);
};

export default Fundo_foto;
