import ReloadIcon from "./Icons/ReloadIcon"
import Link from "next/link"

const Reload = () => {

    return (
        <Link href={"/#"} className="reload-block"><ReloadIcon style="reload-icon"/> More upload</Link>
    )

}

export default Reload