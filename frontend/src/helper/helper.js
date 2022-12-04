export function earnPoints_Number(result,answers,point){
    return result.map((element,i) => answers[i]===element).filter(i => i).map(i => 10).reduce((prev,curr)=>prev +curr,0);

}
export function flagResult(totalPoints,earnPoints){
return (totalPoints*50/100) <earnPoints;
}