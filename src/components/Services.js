import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import ResponsiveAppBar from "./menu";
import Footer from "../footer";



export default function Services() {
	
	return (
		<>
	<ResponsiveAppBar/>
    <Box sx={{ margin: "100px" }}>
      <Typography variant="h2" sx={{ textAlign: "center",fontSize:"36px",fontWeight:"600" }}>
        Services Offered
      </Typography>
      <ImageList
        sx={{ margin: "70px" }}
        cols={4} gap={25}
        style={{ overflow: "hidden" }}
      >
					<>
						
          <ImageListItem >
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=19g12d7cnoN8cwe3FCzImAzxkW7e7M-26"
              style={{ m: "auto",transitionDuration:'0',animation:'0'}}
            />
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Editing</Typography>
			<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1iSfLAbXy5Am04pQge6HmmwEHEG1777pF" style={{ m: "auto",transitionDuration:'0',animation:'0'}}/>
            <Typography variant="subtitle2" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Amazon Marketing Services</Typography>
							</ImageListItem>
							
          <ImageListItem>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0' }}
            />
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Cover Designing</Typography>
            <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0'}}/>
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Book Reviews</Typography>
          </ImageListItem>
          <ImageListItem>
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1UReQ66aY349xHnCACnDMGBGSEN_K2k5k"
              style={{ m: "auto",transitionDuration:'0',animation:'0'  }}
            />
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Translation</Typography>
            <Image  Duration={0} src="https://drive.google.com/uc?export=view&id=1eP94nn1zrWdQelGJkJ-IxVx6tqQ-UFZW" style={{ m: "auto",transitionDuration:'0',animation:'0'  }}/>
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Book Trailer</Typography>
          </ImageListItem>
          <ImageListItem>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1JlhoJV-AJhEpbGWJDVi4qqfAxQPMwFER"
              style={{ m: "auto",transitionDuration:'0',animation:'0' }}
            />
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>Ghost Writing</Typography>
            <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=14fyDCc6OZddGybRtVel8yfXV2dCYcZ4H" style={{ m: "auto",transitionDuration:'0',animation:'0'  }} />
            <Typography variant="h4" sx={{mt:"16px",mb:"32px",fontSize:"18px",fontWeight:'600',textAlign:'initial'}}>BookStore</Typography>
          </ImageListItem>
        </>
      </ImageList>
			</Box>
			<Footer/>
			</>
  );
}
