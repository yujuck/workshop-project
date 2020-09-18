import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { 
  createStyles, 
  makeStyles, 
  Theme, 
  withStyles 
} from '@material-ui/core/styles';
import { ArrowForward, ArrowBack, ArrowRight, ArrowLeft } from '@material-ui/icons';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#f8bbd0',
    borderColor: '#f8bbd0',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export const ImageGame: FunctionComponent = () => {

  const classes = useStyles();

  interface imageType {
    id: number,
    src: string;
  }

  let images: Array<imageType> = [
    { id: 0, src: '/ImageGame/image_game0.png' },
    { id: 1, src: '/ImageGame/image_game1.jpeg' },
    { id: 2, src: '/ImageGame/image_game2.jpeg' },
    { id: 3, src: '/ImageGame/image_game3.jpg' }
  ]

  const [image, setImage] = useState(images[0]);
  const [count, setCount] = useState(0);
  const [imageDisplay, setImageDisplay] = useState(true);

  useEffect(() => {
    if(image.id !== 0) {
      setTimeout(() => {
        console.log('꽝!');
        setImageDisplay(false);
      }, 2000);
    }
  }, [image])

  const upCount = () => {
    setCount(count+1);
    setImage(images[count+1]);
    setImageDisplay(true);
  }

  const downCount = () => {
    setCount(count-1);
    setImage(images[count-1]);
    setImageDisplay(true);
  }


  return (
    <div className="ImageGame">
      <BootstrapButton
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ArrowBack>PREV</ArrowBack>}
          onClick={downCount}
        >
          PREV
      </BootstrapButton>
      <BootstrapButton
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<ArrowForward>NEXT</ArrowForward>}
          onClick={upCount}
        >
          NEXT
        </BootstrapButton>
      <div>
        <img src={image.src} alt="" width="200px" style={imageDisplay ? {display: 'block'}: {display: 'none'}}/>
      </div>
    </div>
  )
}

export default ImageGame;

// height={document.documentElement.scrollHeight - 100}