import "./Fundo_foto.css";
import { React, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Fundo_foto = ({ foto }) => {
	const [likes, setLikes] = useState(0);
	const handleLikeClick = () => {
		setLikes(likes + 1);
	};

	return (
		<div className="fundo_foto">
			<img src={foto} alt="" />
			<div className="curtida">
				<IoIosHeartEmpty className="coracao_vazio" onClick={handleLikeClick} />
				<IoIosHeart className="coracao_cheio" />
				<p>
					{likes} {likes === 1 ? "Curtida" : "Curtidas"}
				</p>
			</div>
		</div>
	);
};

export default Fundo_foto;
