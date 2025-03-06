interface props {
    id: number;
    image: string;
    name: string;
    types:string[];
}
export const Card:React.FC<props> = (props) => {
    return  <div className="w-2xs p-8">{props.name}
    <img src={props.image}/>
    </div>
}
