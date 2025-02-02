function TotalNutrients ( { totalNutrients } ) {

    return (
        <div>
            {Object.values(totalNutrients).map((element, index) => {
                const label = element.label;
                const quantity = element.quantity;
                const unit = element.unit;
                return (
                    <div key={index}>
                        <p><b>{label}:</b> {quantity.toFixed(2)} {unit}</p>
                    </div>
                )
            }) }
        </div>
    )
}

export default TotalNutrients