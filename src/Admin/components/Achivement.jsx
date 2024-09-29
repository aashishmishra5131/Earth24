import { Card, CardContent, styled, Typography, Button } from "@mui/material";
import React from "react";

// const TriangleImg = styled("img")({
//   right: 0,
//   bottom: 0,
//   height: 1,
//   position: "absolute",
// });

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card sx={{ position: "relative", bgcolor: "black", color: "white" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop With <span style={{ color: "blue" }}>Earth24</span>
        </Typography>
        <Typography variant="body2" color={"green"}>
          Congratulations 😊
        </Typography>
        <Typography variant="h5" mt={0.5} color={"#1976d2"}>
          430.8k{" "}
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ my: 3, bgcolor: "#53E0BC", color: "#2B2B52" }}
        >
          View Sales
        </Button>
        {/* <TriangleImg src=""></TriangleImg> */}
        <TrophyImg
          src="https://thumbs.dreamstime.com/b/champion-golden-trophy-black-background-concept-success-achievement-88335429.jpg"
          sx={{ mb: 6 }}
        />
      </CardContent>
    </Card>
  );
};

export default Achivement;
