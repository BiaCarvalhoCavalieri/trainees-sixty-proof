import orders from './ordersMock.js'
import network  from './network.js'

let currentSeller = network
let orderSeller

const findSellerInNetwork = (sellerId, seller) => {
  if (seller.seller_id === sellerId) {
    orderSeller = seller
    return orderSeller
  } else if (seller.children) {
    findSellerInNetwork(sellerId, seller.children)
  }
  return null
}

const calculateCommission = (order) => {
  const commissionPercentage = orderSeller.percentage
  const totalOrderValue = Number(order.totalValue)
  const commissionValue = totalOrderValue * (commissionPercentage / 100)
  const commissionValueFormatted = commissionValue.toFixed(2)

  console.log(`A comissão total para a venda do id - ${order.id} foi: R$ ${commissionValueFormatted}`)
  console.log(`O seu afiliado que efetuou a venda é ${orderSeller.seller}, afiliado nível ${orderSeller.seller_level}, com percentual de comissão de ${orderSeller.percentage}% por venda`)
}

orders.forEach((order) => {
  currentSeller.forEach((seller) => {
    findSellerInNetwork(order.seller_id, seller)
    if (orderSeller) {
      calculateCommission(order)
    }
  })
})
