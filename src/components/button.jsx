function Button({onclick , text}) {
    return (
        <>
            <button
                onClick={onclick} className=" my-3 bg-indigo-50 hover:bg-indigo-200  rounded-lg min-w-[100px] max-w-[400px] w-full	">{text}</button>
        </>
    )





}
export default Button
