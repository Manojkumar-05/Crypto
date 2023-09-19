import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Log from "./Log";

const Header = () => {
  const titleStyle = {
    flex: 1,
    fontWeight: "bold",
    cursor: "pointer",
  };
  const navigate = useNavigate();
 

  return (
 
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h5"
              sx={titleStyle}
              onClick={() => navigate("/")}
            >
              CryptoBits
            </Typography>
             <Log  />
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;
