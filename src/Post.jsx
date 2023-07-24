export function Post(props){
  return (
    <div>
   <strong>{props.author}</strong>
   <p>{props.content}</p>
   </div>
  )
}

// named export, exporta antes do function  
