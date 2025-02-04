
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const images = [
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/c.jpg',
    '/images/d.jpg',
    '/images/f.jpg',
    '/images/g.jpg',
    '/images/j.jpg',
    '/images/k.jpg',
    '/images/l.jpg',
    '/images/m.jpg',
    '/images/n.jpg',
    '/images/o.jpg',
    '/images/p.jpg',
    '/images/q.jpg',
    '/images/r.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  const navigate = useNavigate();
  return (
    <Container 
      maxWidth={false}
      sx={{
        height: '100vh',
        position: 'relative',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box 
        className="background"
        sx={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          filter: 'brightness(0.7)',
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute',
          top: '30%',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(63, 81, 181, 0.8)',
          paddingY: 4,
          textAlign: 'center',
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#FFB74D', 
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' 
          }}
        >
          Welcome to the Ultimate Recipe Hub
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#ffffff', 
            maxWidth: '600px', 
            marginX: 'auto',
            marginTop: 2,
            fontWeight: 300 
          }}
        >
          Discover, create, and share delicious recipes that turn your kitchen into a magical space.
        </Typography>
        <Box mt={4} display="flex" justifyContent="center" gap={4}>
          <Button 
            variant="contained" 
            sx={{ 
              px: 5, 
              py: 1.5, 
              borderRadius: "12px", 
              fontSize: '1.1rem', 
              backgroundColor: '#FFB74D',
              color: '#3f51b5',
              '&:hover': {
                backgroundColor: '#FFA726',
              },
            }}
            onClick={()=>navigate('/recipes')}
          >
            Explore Recipes
          </Button>
          <Button 
            variant="outlined" 
            sx={{ 
              px: 5, 
              py: 1.5, 
              borderRadius: "12px", 
              fontSize: '1.1rem',
              borderColor: '#FFB74D',
              color: '#FFB74D',
              '&:hover': {
                backgroundColor: '#FFF3E0',
              },
            }}
          >
            About Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
