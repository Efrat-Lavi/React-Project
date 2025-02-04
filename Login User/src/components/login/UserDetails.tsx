import { Avatar, Tooltip, Typography } from "@mui/material"
import { useContext } from "react";
import { UserContext } from '../start'
const UserDetails = () => {
    const context = useContext(UserContext);

    return (<>

        <Typography sx={{ mx: 2, fontWeight: 'bold', color: 'white' }}>
            Hello {context.user.firstName != '' ? <>{context.user.firstName}</> : <>user</>}
        </Typography>
        {context.user && <Tooltip title="User Avatar">
            <Avatar
                alt={context.user.firstName}
                src="/static/images/avatar/2.jpg"
                sx={{ mx: 1, bgcolor: "#FFB74D" }}
            />
        </Tooltip>}


    </>)
}
export default UserDetails