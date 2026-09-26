type  ButtonType = {
    title: string
    variant: "default" | "outline"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ title, variant, ...props}: ButtonType, ){
    function ButtonVariant(){
        if(variant === "default"){
            return "w-full border border-[#F2F2F2] cursor-pointer rounded-xl bg-[#F2F2F2] py-3 text-sm font-semibold text-[#121212]"
        }
        else{
            return "w-full border border-[#f2f2f2] cursor-pointer rounded-xl bg-[#121212] py-3 text-sm font-bold text-[#F2F2F2]"
        }

    }
    return(
        <button {...props} className={ButtonVariant()}>
            {title}    
         </button>
    )
}

export default Button