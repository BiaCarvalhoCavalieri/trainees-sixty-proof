import './styles.css'

import {useState} from 'react';
import { INetwork } from '../../typings/INetwork.js';
import { Card } from "./Card"
import { Title } from "./Title"
import networkMock from '../../../db/network.js';



export const MultiLevel = () => {    

    const [network, setNetwork] = useState<INetwork[]>(networkMock)
    return (
        <section className="multiLevel-container container">
            <Title />
            <div className="multiLevel-infos">
                <div className="infos-first-row">
                    <p className="infos-paraghaph">Primeiro, defina a validade das comissões multinível</p>
                    <select name="months" className='select-months'>
                        <option value="18">18 meses</option>
                    </select>
                    
                </div>
                <p className="infos-paraghaph">Defina as comissões por nível de indicação</p>
                <div className="infos-card_container">
                    <Card item={network[0].children} seller={network[0].seller} mainSeller={network[0].seller}/>
                </div>            
                <div className="infos-third-row align-center content-flex justify-between">
                    <div className="content-flex align-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0003 13.3333V10M10.0003 6.66667H10.0087M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z" stroke="#1E1A34" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Saiba mais sobre níveis de comissão
                    </div>
                    <button className="infos-button content-flex">
                        Finalizar configuração
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    )
}
