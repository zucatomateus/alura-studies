import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{
    type?: "button" | "submit" | "reset" | undefined,
    onclick?: () => void;
}> {
  render () {
    const { type = "button", onclick } = this.props;
    return (
          <button onClick={onclick} type={type} className={style.botao}>
              {this.props.children}
          </button>
      )
  }
}

export default Botao;