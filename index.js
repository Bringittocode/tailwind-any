
const mainFunction = ({matchUtilities})=>{
    matchUtilities(
        {
            any: (value) => {
                var propertyValue = value.split("||");
                var value = propertyValue[1].replaceAll("~"," ");
                var property = propertyValue[0];
                return{
                    [property]: value
                }
            },
        },
    )
}


module.exports = require("tailwindcss/plugin")(mainFunction);
  