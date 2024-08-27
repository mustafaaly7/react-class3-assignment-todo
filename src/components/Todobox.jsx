import { useState } from "react"
import Button from "./button";




function TodoBox() {
    const [todo, setTodo] = useState([])
const [input , setInput] = useState("")

    const addTodo = () => {
       if(input == ""){
        alert("Enter Valid Todo")
        return
       }
            setTodo([...todo, input]);
            setInput(""); // Clear input Field after appending
               console.log(input);
               console.log(todo);
               
               
    }

    return (

        <>
            <div className=" min-w-3.5 font-mono	border shadow w-1/2 mx-auto bg-indigo-700		 rounded-lg		 ">
                <div className="text-center text-4xl ">

                    <h1>TODO APPLICATION </h1>
                </div>
                <div className="py-6 text-4xl ">
                    <input type="text"
                        value={input}
                        onChange={(e) => {setInput([e.target.value])
                            
                        }
                        }
                        className="border rounded-lg  min-w-[100px] max-w-[400px] w-full	"
                        placeholder="Enter Your Todo" />


                    <Button text={"Add"} onclick={addTodo}/>
                    

                   <Button text={"Clear"} onclick={()=>setTodo([])}/>
                    <br /><br />

                    <h1 className="underline ">YOUR TODO'S</h1>
                    <div className="my-3">

                        <ol className="my-8 myList px-16">
                            {todo.map((data, index) => (
                                <h1 key={index}> {data}</h1>

                            ))}
                            {/* <li><h1>Hello</h1></li>
                            <li><h1>Hello</h1></li>
                            <li><h1>Hello</h1></li>
                            <li><h1>Hello</h1></li>
                            <li><h1>Hello</h1></li>
                            <li><h1>Hello</h1></li> */}
                        </ol>
                    </div>

                </div>


            </div>








        </>




    )

}
export {

    TodoBox
}