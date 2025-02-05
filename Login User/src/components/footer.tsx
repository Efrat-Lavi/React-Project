// // import React from "react";
// // import GitHubIcon from "@mui/icons-material/GitHub";

// // const Footer: React.FC = () => {
// //   return (
// //     <footer className="bg-black text-white p-4 flex justify-between items-center">
// //       <div className="flex items-center gap-2">
// //         <a 
// //           href="https://github.com/Efrat-Lavi/React-Project" 
// //           target="_blank" 
// //           rel="noopener noreferrer"
// //           className="flex items-center gap-1 hover:underline"
// //         >
// //             <GitHubIcon />
// //           {/* <Github size={20} /> */}
// //           View on GitHub
// //         </a>
// //       </div>

// //       <div>Developed in 2025 by Efrat Lavi</div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import { Box, Typography, Link, Button } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";

// const Footer = () => {
//     return (
//         <Box
//             component="footer"
//             sx={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//                 backgroundColor: "#333",
//                 color: "white",
//                 padding: "10px 20px",
//                 position: "fixed",
//                 bottom: 0,
//                 width: "100%",
//             }}
//         >

//             <Link
//                 href="https://github.com/Efrat-Lavi/React-Project"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none" }}
//             >
//                 <GitHubIcon sx={{ mr: 1 }} />
//                 <Typography> GitHub </Typography>
                
//             </Link>
//             <Typography sx={{fontSize:12}}> Developed in 2025 by Efrat Lavi </Typography>
//         </Box>)
// };
// export default Footer;
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        color: "white",
        padding: "10px 20px",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Link
        href="https://github.com/Efrat-Lavi/React-Project"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          textDecoration: "none",
        }}
      >
        <GitHubIcon sx={{ mr: 1 }} />
        <Typography>GitHub</Typography>
      </Link>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CopyrightIcon sx={{ fontSize: 12, mr: 0.5 }} />
        <Typography sx={{ fontSize: 12 }}>
          Developed in 2025 by Efrat Lavi
        </Typography>
      </Box>

      <Link
        href="mailto:efrat.lavi@example.com"
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          textDecoration: "none",
          paddingRight:"5px"
        }}
      ><Typography>Contact with us </Typography>
        <EmailIcon sx={{ mr: 5 }} />
        
      </Link>
    </Box>
  );
};

export default Footer;
