import { ComponentProps } from "react"
type Tvariant = "primary" | "secondary" | "danger" | "warning" | "success"
type Tbutton = ComponentProps<"button"> & {
    variant: Tvariant
}

function Button({ children,variant, ...rest }: Tbutton) {
    return (
        <button {...rest} style={{...checkvariant(variant)}}>
            {children}
        </button>
    )
}
function checkvariant(variant:Tvariant){
    if(variant==="primary"){
        return{backgroundColor:"blue",color:"white"}
    }
    else if(variant==="secondary"){
        return{backgroundColor:"gray",color:"black"}
    }
    }

export default Button
