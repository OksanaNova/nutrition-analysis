function TotalNutrients ( { totalNutrients } ) {

    console.log('tot', totalNutrients)
    console.log('Object.keys', Object.keys(totalNutrients))
    console.log('Object.values', Object.values(totalNutrients))
    console.log('Object.entries', Object.entries(totalNutrients))

    return (
        <div>

            {Object.values(totalNutrients).map((element, index) => {
                const label = element.label;
                const quantity = element.quantity;
                const unit = element.unit;
                return (
                    <div key={index}>
                        <p>{label}</p>
                        <p>{quantity.toFixed(2)}</p>
                        <p>{unit}</p>

                    </div>
                )

            }) }

        </div>
    )
}

export default TotalNutrients