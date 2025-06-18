import prompt from "../Prompt/prompt.js";
export function getUserName(){
    let user = prompt("Please enter your name: ");
    return user ;
}