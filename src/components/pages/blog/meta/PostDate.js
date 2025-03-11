import './PostDate.css';


const PostDate = ({ date }) => {

    return (
        <span>
            {new Date(date).toLocaleString("hr-HR",{
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute:	"2-digit"
            })}
        </span>
    ); 
}
           

export default PostDate;