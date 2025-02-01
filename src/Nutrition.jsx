import TotalNutrients from "./TotalNutrients";

function Nutrition( {myNutrition} ) {


    return (
        <div>
            <p>{myNutrition.calories} kcal</p>

            <TotalNutrients totalNutrients={myNutrition.totalNutrients} />

            
        </div>
    )
}

export default Nutrition