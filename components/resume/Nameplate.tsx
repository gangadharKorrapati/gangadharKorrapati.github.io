import { UserType } from "../../interface/userType"

const Nameplate = ({userinfo}:{userinfo:UserType}) => {
    return (
        <>
            <div className="pt-2 pb-4 text-center text-gray-900">
                <p className="font-serif text-2xl tracking-wider"><span className="font-bold">{userinfo.name},</span><span className="text-xl font-semibold"> {userinfo.profession}</span></p>
                <p><em>{userinfo.phno}, {userinfo.mail}</em></p>
            </div>
        </>
    )
}

export default Nameplate
