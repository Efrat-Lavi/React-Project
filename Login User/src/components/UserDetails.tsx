import { Avatar, Tooltip, Typography } from "@mui/material"
import { useContext } from "react";
import { userContext } from "./appBar";

const UserDetails = () => {
const context = useContext(userContext);

    return (<>

        {context.user&&<Tooltip title="User Avatar">
            <Avatar
                alt={context.user.firstName}
                src="/static/images/avatar/2.jpg"
                sx={{ mx: 2 }}
            />
        </Tooltip>}
        <Typography sx={{ mx: 2, fontWeight: 'bold', color: 'white' }}>
        {context.user.firstName?  <>{context.user.firstName}</>:<>user</>}
        </Typography>
        
    </>)
}
export default UserDetails