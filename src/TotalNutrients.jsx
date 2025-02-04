function TotalNutrients ( { totalNutrients } ) {

    return (
        <div className="container">
            {Object.values(totalNutrients).map((element, index) => {
                const { label, quantity, unit } = element;
                return (
                        <div key={index} className="total-nutrients">
                            <p className="label"><b>{label}:</b></p>
                          <p><em>{quantity.toFixed(2)} {unit}</em></p>
                      </div>
                )
            }) }
        </div>
    )
}

export default TotalNutrients