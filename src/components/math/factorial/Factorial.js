function Factorial(props)
{
    let a = props.a;    
    let result = 1;

    for(let i=2; i <= a; i++)
    {
        result = result*i;
    }

    return(
        <h3>Factorial: {a}! = {result};</h3>
    )
}

export default Factorial;