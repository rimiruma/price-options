import PriceOption from "../../Components/PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 20,
            "currency": "USD",
            "billingCycle": "month",
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "One free training session",
                "Basic workout tracking",
                "Free Wi-Fi",
                "Mobile app access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 40,
            "currency": "USD",
            "billingCycle": "month",
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Group classes (yoga, pilates, etc.)",
                "Two free training sessions",
                "Discount on smoothies and supplements",
                "Access to cardio theater",
                "Advanced workout tracking",
                "Priority booking for classes",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 60,
            "currency": "USD",
            "billingCycle": "month",
            "features": [
                "Access to all gym facilities",
                "Private locker",
                "Unlimited group classes",
                "Four free personal training sessions",
                "Access to sauna and steam room",
                "Free smoothie per week",
                "Guest pass (one per month)",
                "Personalized workout plan",
                "Access to hydro massage beds",
                "Nutritional guidance",
                "Body composition analysis"
            ]
        }
        
    ]

    return (
        <div>
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 m-12">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;