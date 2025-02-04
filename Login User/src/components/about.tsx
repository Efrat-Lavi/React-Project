// // const About = () => {
// //     return(
// //     <div>About</div>)
// // }
// // export default About
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";

const About= () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          backgroundColor: "#FFB74D",
          padding: 4,
          borderRadius: "16px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
          About Our Recipe Website
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "#3f51b5" }}>
          Discover a world of culinary inspiration and delicious recipes!
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 4 }}>
          Welcome to our recipe site, your go-to platform for mouthwatering recipes, from traditional favorites to innovative creations. Whether you're a home cook or a culinary expert, we've got something special for everyone.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12} md={4}>
          <Avatar sx={{ bgcolor: "#3f51b5", width: 80, height: 80, mx: "auto" }}>
            <InfoIcon fontSize="large" />
          </Avatar>
          <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ mt: 2, color: "#3f51b5" }}>
            Easy to Follow Recipes
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ color: "#555", mt: 1 }}>
            Our recipes come with step-by-step instructions, making cooking enjoyable for everyone.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Avatar sx={{ bgcolor: "#FFB74D", width: 80, height: 80, mx: "auto" }}>
            <InfoIcon fontSize="large" />
          </Avatar>
          <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ mt: 2, color: "#3f51b5" }}>
            Curated for All Tastes
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ color: "#555", mt: 1 }}>
            Find recipes that match your personal taste, from vegetarian dishes to decadent desserts.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Avatar sx={{ bgcolor: "#3f51b5", width: 80, height: 80, mx: "auto" }}>
            <InfoIcon fontSize="large" />
          </Avatar>
          <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ mt: 2, color: "#3f51b5" }}>
            Join Our Community
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ color: "#555", mt: 1 }}>
            Share your own recipes, tips, and cooking stories with a community of food lovers.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
/*
import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();

  const Section = ({ children }:{children:any}) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <Box
        ref={ref}
        sx={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-100px)',
          transition: 'all 0.6s ease-out',
          mb: 4,
        }}
      >
        {children}
      </Box>
    );
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
      >
        אודות אתר המתכונים שלנו
      </Typography>
      <Section>
        <Typography variant="body1" paragraph>
          ברוכים הבאים לאתר המתכונים שלנו! כאן תוכלו למצוא מגוון רחב של מתכונים טעימים וקלים להכנה, המתאימים לכל אירוע וטעם.
        </Typography>
      </Section>
      <Section>
        <Typography variant="body1" paragraph>
          הצוות שלנו משקיע מאמצים רבים כדי להביא לכם את המתכונים המובחרים ביותר, עם הוראות ברורות ותמונות מרהיבות, כדי שתוכלו ליהנות מחוויית בישול מושלמת.
        </Typography>
      </Section>
      <Section>
        <Typography variant="body1" paragraph>
          אנו מאמינים שבישול הוא אמנות, וכל אחד יכול להיות שף במטבח שלו. הצטרפו אלינו למסע קולינרי מרתק וגלו טעמים חדשים ומרגשים.
        </Typography>
      </Section>
    </Container>
  );
};

export default About;
*/