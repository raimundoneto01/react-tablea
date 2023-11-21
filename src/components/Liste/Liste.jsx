import ListeItem from "./components/ListeItem";

export default function Liste({nome, items}){

    return(
        <div className=" px-10 w-200 h-300">
            
            <h1 style={{color: 'red'}}>{nome} :</h1>
            <ol style={{fontFamily:'monospace', fontSize:'1rem', margin:'5rem'}}>
                { items.map((value)=>( 
                    <ListeItem item={value}/>
                ))}
                
            </ol>
            
        </div>
    )
}