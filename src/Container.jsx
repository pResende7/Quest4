import "./Container.css";

function Container({ico, desc}){
	
	return( 
        <div className="um">

		<button className="botao">
        <img className="imagem" src={ico} alt="icone" />
		<p>{desc}</p>
		 </button>

         </div>
	)


}

export default Container;

