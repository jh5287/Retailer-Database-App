import { getPromotions} from "@/models/promotions";
import PromotionalItemDisplay from '@/components/PromotionalItemDisplay'
import BackToHome from "@/components/BackToHome";
const Page =  async () => {

  const promotions = await getPromotions();
  console.log("Available promos", promotions[0].promo_id);

  return (
    <div>
      <h1>Promotions!</h1>
      <ol>
        {promotions.map((promo) => (
          <li key={promo.promo_id}> 
          Event: {promo.promo_name}
            <br/>
            <PromotionalItemDisplay promo={promo.promo_id}/>
          </li>
        ))}
      </ol>
      <BackToHome/>
    </div>
  );
};

export default Page;