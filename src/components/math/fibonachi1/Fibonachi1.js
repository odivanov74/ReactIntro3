function Fibonachi1(props)
{
    let arr = [];
    let i_2Elem = 0;
    let i_1Elem = 0;
    let temp = 0;
    let sum = 0;

    for (let i = 0; i <= props.a; i++) 
    {          
        if(i===0)
        {
            i_2Elem = 0;            
            i_1Elem = 0;            
        }
        else if(i===1)
        {   
            i_2Elem = 0;         
            i_1Elem = 1;            
        }
        else
        {
            temp = i_1Elem;
            i_1Elem = i_1Elem + i_2Elem;
            i_2Elem = temp;
        }
        sum = i_2Elem + i_1Elem;
        arr.push(<div key = {i}>{sum}</div>);
    }
    
    

    return(
        <h3>Fibonachi:{arr}</h3>
    )
}

export default Fibonachi1;