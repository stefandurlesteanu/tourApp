class HomeCardModel {
    constructor(id, title, image, type) {
        this.id = id,
        this.title = title,
        this.image = image,
        this.type = type
    }
}

export const HomeCards = [
    new HomeCardModel('123', 'Best Deals', "https://i1.wp.com/epthinktank.eu/wp-content/uploads/2015/09/fotolia_72092403_subscription_xxl.jpg?resize=300%2C225&ssl=1", "BEST_DEAL"),
    new HomeCardModel('456', 'Last Minute', "https://lh3.googleusercontent.com/proxy/xgFOidvrUWMv4EeTxbFM2q6rnRHw0u-gvtHQk26IhFvNrBCT-agJ-AE4gb0nax6clGOtKiFVqQGKiTbsH8sDr0u8F2Lv_4HxYJ6-Y2HA2YXBIMn8zwQZZqMgWzPCECeEZR_CMWNF8DcHS9yzSz--kDs3dSOVqCiOfViJR05o2BuABMWP9iXhFo89Hajvwu2mUh6YJhDExqGZxDzcWNWN", "LAST_MINUTE"),
    new HomeCardModel('789', 'Special Offer', "https://pbs.twimg.com/profile_images/762240194804326400/ooA8mCiO.jpg", "SPECIAL_OFFER"),
    new HomeCardModel('012', 'Exclusive', "https://static.dw.com/image/55000481_101.jpg", "EXCLUSIVE")
] 