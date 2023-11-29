import './styles.css'

import fileIcon from '../../assets/side-menu/file.svg'
import bagIcon from '../../assets/side-menu/shopping-bag.svg'
import dollarIcon from '../../assets/side-menu/currency-dollar-circle.svg'
import appIcon from '../../assets/side-menu/zap-circle.svg'
import settingIcon from '../../assets/side-menu/settings.svg'
import signatureIcon from '../../assets/side-menu/assinatura.svg'
import digitalIcon from '../../assets/side-menu/digital.svg'
import withdrawIcon from '../../assets/side-menu/saque-comissao.svg'
import cupomIcon from '../../assets/side-menu/cupom.svg'
import personImage from '../../assets/side-menu/person-image.jpg'


export const SideMenu = () => {
  return (
    <div className="side-menu">
        <div className="section">
            <h3 className='side-menu_title'>Minha Organização</h3>
            <div className="section-itens">
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={fileIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Resumo</span>
                    <span className="notification"></span>
                </div>
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={bagIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Pedidos</span>
                    <span className="notification">20+</span>
                </div>
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={dollarIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Financeiro</span>
                    <span className="notification"></span>
                </div>
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={appIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span>App Store</span>
                    <span className="notification"></span>
                </div>
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={settingIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Configurações</span>
                    <span className="notification"></span>
                </div>
            </div>
        </div>
        <div className="section">
            <h3 className='side-menu_title'>Meus Apps</h3>
            <div className="section-itens">
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={signatureIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Assinatura</span>
                    <span className="notification"></span>
                </div>
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={digitalIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Vitrine Digital</span>
                    <span className="notification"></span>
                </div>
                <div className="section-item content-flex">
                    <img 
                        className='section-icon'
                        src={withdrawIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Saque de Comissão</span>
                    <span className="notification"></span>
                </div>
                <div className="section-item content-flex selected">
                    <img 
                        className='section-icon'
                        src={cupomIcon}
                        alt='icone de ajuda do menu'
                    />
                    <span className="section-item__name">Multinível</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10.0001 8L6 4" stroke="#1E1A34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="section">
            <img 
                className='section-image'
                src={personImage}
                alt='icone de ajuda do menu'
            />
        </div>
    </div>
  )
}


