import moment from "moment";
import 'moment/locale/pt-br';


export function Post({post}: { post: Post}){
    moment.locale('pt-br');

    return (
        <div className=" border-gray-600 border-[1px] rounded p-4 space-y-4">
            <div className="flex items-center gap-4">
                <img className="size-8 rounded-full" src={post.user.avatar} alt="avatar user" />
                <h3 className="flex-grow font-bold">{post.user.name}</h3>
                <span className="text-xs">
                    {moment(post.createdAt, "YYYY-MM-DDTHH:mm:ss").fromNow()}
                </span>
            </div>
            <p>{[post.text]}</p>
        </div>
    )

}