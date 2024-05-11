interface DropI{
    onClick: ()=> void;
    content: string;
    className: string;
}
const DropItems = (props: DropI) => {
    return ( 
            <li className={props.className} onClick={props.onClick}>{props.content}</li>
     );
}
 
export default DropItems;