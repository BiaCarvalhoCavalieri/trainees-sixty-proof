import './styles.css';
import { useEffect, useState } from 'react';
import { INetwork } from '../../../typings/INetwork';

interface CardProps {
  item: INetwork;
  seller: string;
  mainSeller: string;
}

export const Card = ({ item, seller, mainSeller }: CardProps) => {
  const [childCards, setChildCards] = useState<JSX.Element | null>(null);

  function handleDeleteClick() {
    console.log(item, 'clicou')
  }

  useEffect(() => {
    if (item.children) {
      setChildCards(
        <Card item={item.children} seller={item.seller} mainSeller={mainSeller}/>
      )
    }
  }, [item])

  return (
    <div className={`infos-cards_level card__level-n${item.seller_level}`}>
      <div className="card-container">
        <div className="card-titles content-flex justify-between">
          <div>
            <h3 className="card-level">Nível {item.seller_level}</h3>
            <p className="card-text">
              {seller}&nbsp;<span className="card-text_highlight">Afiliado</span>
              &nbsp;indicou {item.seller}&nbsp;
              <span className="card-text_highlight">N{item.seller_level}</span>
            </p>
          </div>
          <button 
            className='card-delete_button content-flex align-center' 
            onClick={handleDeleteClick}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4M7.33333 7.75V11.9167M10.6667 7.75V11.9167" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            Deletar
          </button>
        </div>
        <div className="card-comission">
          <span className="card-comission_title">Comissão</span>
          <div className='content-flex align-center card-comission-body'>
            <div className="card-comission_value content-flex">
              <input className="card-input" value={item.percentage} readOnly />
              <svg width="37" height="48" viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="37" height="48" rx="4" fill="#EEEEED"/>
                <path d="M19.1364 27.8182V27.2045C19.1364 26.7803 19.2235 26.392 19.3977 26.0398C19.5758 25.6837 19.8333 25.3996 20.1705 25.1875C20.5114 24.9716 20.9242 24.8636 21.4091 24.8636C21.9015 24.8636 22.3144 24.9716 22.6477 25.1875C22.9811 25.3996 23.233 25.6837 23.4034 26.0398C23.5739 26.392 23.6591 26.7803 23.6591 27.2045V27.8182C23.6591 28.2424 23.572 28.6326 23.3977 28.9886C23.2273 29.3409 22.9735 29.625 22.6364 29.8409C22.303 30.053 21.8939 30.1591 21.4091 30.1591C20.9167 30.1591 20.5019 30.053 20.1648 29.8409C19.8277 29.625 19.572 29.3409 19.3977 28.9886C19.2235 28.6326 19.1364 28.2424 19.1364 27.8182ZM20.2955 27.2045V27.8182C20.2955 28.1705 20.3788 28.4867 20.5455 28.767C20.7121 29.0436 21 29.1818 21.4091 29.1818C21.8068 29.1818 22.0871 29.0436 22.25 28.767C22.4167 28.4867 22.5 28.1705 22.5 27.8182V27.2045C22.5 26.8523 22.4205 26.5379 22.2614 26.2614C22.1023 25.9811 21.8182 25.8409 21.4091 25.8409C21.0114 25.8409 20.7254 25.9811 20.5511 26.2614C20.3807 26.5379 20.2955 26.8523 20.2955 27.2045ZM13.3409 21.1591V20.5455C13.3409 20.1212 13.428 19.733 13.6023 19.3807C13.7803 19.0246 14.0379 18.7405 14.375 18.5284C14.7159 18.3125 15.1288 18.2045 15.6136 18.2045C16.1061 18.2045 16.5189 18.3125 16.8523 18.5284C17.1856 18.7405 17.4375 19.0246 17.608 19.3807C17.7784 19.733 17.8636 20.1212 17.8636 20.5455V21.1591C17.8636 21.5833 17.7765 21.9735 17.6023 22.3295C17.4318 22.6818 17.178 22.9659 16.8409 23.1818C16.5076 23.3939 16.0985 23.5 15.6136 23.5C15.1212 23.5 14.7064 23.3939 14.3693 23.1818C14.0322 22.9659 13.7765 22.6818 13.6023 22.3295C13.428 21.9735 13.3409 21.5833 13.3409 21.1591ZM14.5 20.5455V21.1591C14.5 21.5114 14.5833 21.8277 14.75 22.108C14.9167 22.3845 15.2045 22.5227 15.6136 22.5227C16.0114 22.5227 16.2917 22.3845 16.4545 22.108C16.6212 21.8277 16.7045 21.5114 16.7045 21.1591V20.5455C16.7045 20.1932 16.625 19.8788 16.4659 19.6023C16.3068 19.322 16.0227 19.1818 15.6136 19.1818C15.2159 19.1818 14.9299 19.322 14.7557 19.6023C14.5852 19.8788 14.5 20.1932 14.5 20.5455ZM13.7727 30L21.7727 18.3636H23.0682L15.0682 30H13.7727Z" fill="#1E1A34"/>
              </svg>
            </div>
            <p className="card-comission_text">
              {mainSeller} receberá&nbsp;
              <span className="card-comission_text--highlight">{item.percentage}%</span>
              &nbsp;de comissão nas vendas por&nbsp;
              <span className="card-comission_text--highlight">18 meses</span>
            </p>
          </div>
        </div>
      </div>
      {childCards}
      {item.seller_level === 5 ? (
        <div className='cards-limited_number'>
          Você atingiu o máximo de níveis de comissão
        </div>
      ) : null }
    </div>
  )
}
