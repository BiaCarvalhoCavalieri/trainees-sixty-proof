export interface INetwork {
    seller_level: number,
    seller_id: number,
    seller: string,
    percentage: number,
    children: INetwork
}