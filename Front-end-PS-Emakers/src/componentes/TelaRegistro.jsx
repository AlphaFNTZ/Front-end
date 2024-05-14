import React from 'react'

const TelaRegistro = () => {
  return (
    <div className='tela_registro'>
      <div className='bloco_registro'>
          <div className='titulo_registro'> Registrar </div>
          <div className='conjunto_inputs'>
            <div className='nome'>
              <span>Nome</span>
              <input type="text"/>
            </div>
            <div className='e-mail'>
              <span>E-mail</span>
              <input type="email" placeholder='exemplo@emali.com'/>
            </div>
            <div className='senha'>
              <span>Senha</span>
              <input type="password"/>
            </div>
            <div className='conf_senha'>
              <span>Confimar senha</span>
              <input type="password"/>
            </div>
            <div className='conjunto_perfil'>
              <div className='div_sexo'>
                <span>Sexo</span>
                <select type="text">
                  <option value="0">Selecione</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                  <option value="3">Outros</option>
                </select>
              </div>
              <div className='div_imagem'>
                <span>Imagem</span>
                <button>Selecionar imagem</button>
              </div>
            </div>
          </div>              
          <div className='completar_acao'>
            <button>Registrar-se</button>
            <a href = '#' className='link'>Já possui conta?</a>
          </div>
      </div>
      <div className='barra'></div>
      <div className='bloco_imagem'>
        <div className='componentes_info'>
            <div className='img_logo'></div>
            <span>Venha fazer parte da maior rede social também!</span>
        </div>
      </div>
    </div>
  )
}

export default TelaRegistro
