import { getPromotionById } from "@/models/promotions";

const PromotionalItemDisplay = async ({ promo }) => {
    const foundPromos = await getPromotionById(promo)
  return (
    <ul>
        {foundPromos.map((item) => (
            <li key={item.promo_id}>
            Product: {item.product_name} <br/>
            Original Price: {item.original_price} <br/>
            Discount Rate: {item.discount_rate} <br/>
            Final Price: {item.final_price} <br/>
            </li>
        ))}
    </ul>
  );
}

export default PromotionalItemDisplay;