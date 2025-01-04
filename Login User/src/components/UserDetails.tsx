import { Avatar, Tooltip, Typography } from "@mui/material"
import { useContext } from "react";
import { userContext } from "./Home";

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
        {context.user&&<Typography sx={{ mx: 2, fontWeight: 'bold', color: 'white' }}>
            {context.user.firstName}
        </Typography>}
        
    </>)
}
export default UserDetails