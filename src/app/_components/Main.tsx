import { Left } from "./Left"
import { Right } from "./Right"
export const Main = ()=>{
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-9  ">
                <Right></Right>
            </div>
            <div className="col-span-3  border-[1px] border-[#E7E7E7] h-full">
                <Left></Left>
            </div>

        </div>
    )
}