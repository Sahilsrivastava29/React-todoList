import { useState } from "react";
import { genTicket,sum} from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({n=3,winningCondition}){

    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winningCondition(ticket);

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1 className="LotteryColor">LOTTERY GAME !</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket} className="button">Buy New Ticket</button>
            <h3>{isWinning && "Congratulation, you won!"}</h3>
        </div>
    );
}