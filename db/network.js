const network = [
    {
        seller_level: 0,
        seller_id: 344,
        seller: "João",
        percentage: 6,
        children: {
            seller_level: 1,
            seller_id: 345,
            seller: "Maria",
            percentage: 5,
            children: {
                seller_level: 2,
                seller_id: 346,
                seller: "José",
                percentage: 4,
                children:
                {
                    seller_level: 3,
                    seller_id: 347,
                    seller: "Ana",
                    percentage: 3,
                    children:
                    {
                        seller_level: 4,
                        seller_id: 348,
                        seller: "Carlos",
                        percentage: 2,
                        children:
                        {
                            seller_level: 5,
                            seller_id: 349,
                            seller: "Elis",
                            percentage: 1,
                        }

                    }

                }

            }
        }

    }
]

export default network;