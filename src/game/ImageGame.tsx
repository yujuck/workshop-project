import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { 
  createStyles, 
  makeStyles, 
  Theme, 
  withStyles 
} from '@material-ui/core/styles';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import './ImageGame.css'

const BootstrapButton = withStyles({
  root: {
    left: 'calc(50% - 120px)',
    top: '20px',
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

  // ********** 주의 **********
  // 펼치면 안됨 (이미지 들어있음)
  let images: Array<imageType> = [
    { id: 0, src: '/ImageGame/image_game0.png' },
    { id: 1000, src: '/ImageGame/간디.png'},
    { id: 1, src: '/ImageGame/강다니엘.jpg'},
    { id: 2, src: '/ImageGame/강동원.jpg'},
    { id: 1001, src: '/ImageGame/강학용 과장님.jpg'},
    { id: 1002, src: '/ImageGame/강형욱.png'},
    { id: 3, src: '/ImageGame/공유.jpg'},
    { id: 4, src: '/ImageGame/공효진.jpg'},
    { id: 5, src: '/ImageGame/구혜선.jpg'},
    { id: 6, src: '/ImageGame/규현.jpg'},
    { id: 1003, src: '/ImageGame/김구.png'},
    { id: 7, src: '/ImageGame/김구라.jpg'},
    { id: 1004, src: '/ImageGame/김대중.png'},
    { id: 8, src: '/ImageGame/김연경.jpeg'},
    { id: 9, src: '/ImageGame/김연아.jpg'},
    { id: 10, src: '/ImageGame/김유정.jpg'},
    { id: 11, src: '/ImageGame/김종민.jpg'},
    { id: 12, src: '/ImageGame/김태희.jpg'},
    { id: 2000, src: '/ImageGame/꼬부기.jpg'},
    { id: 13, src: '/ImageGame/나문희.jpeg'},
    { id: 14, src: '/ImageGame/나영석.jpg'},
    { id: 1005, src: '/ImageGame/나이팅게일.png'},
    { id: 1006, src: '/ImageGame/나폴레옹.png'},
    { id: 2001, src: '/ImageGame/도라에몽.jpg'},
    { id: 2002, src: '/ImageGame/도리.jpg'},
    { id: 2002, src: '/ImageGame/라이언.png'},
    { id: 15, src: '/ImageGame/로버트 다우니 주니어.jpg'},
    { id: 1007, src: '/ImageGame/루이암스트롱.png'},
    { id: 1008, src: '/ImageGame/링컨.png'},
    { id: 16, src: '/ImageGame/마동석.jpg'},
    { id: 17, src: '/ImageGame/마동석.jpg'},
    { id: 18, src: '/ImageGame/마릴린 먼로.jpg'},
    { id: 2003, src: '/ImageGame/마이크.png'},
    { id: 2004, src: '/ImageGame/맥크리.jpeg'},
    { id: 1009, src: '/ImageGame/모나리자.png'},
    { id: 1010, src: '/ImageGame/모짜르트.png'},
    { id: 2005, src: '/ImageGame/무민.jpeg'},
    { id: 19, src: '/ImageGame/민경훈.jpg'},
    { id: 1011, src: '/ImageGame/박나래.png'},
    { id: 1012, src: '/ImageGame/박성광.png'},
    { id: 1013, src: '/ImageGame/박세리.png'},
    { id: 1014, src: '/ImageGame/박준형.png'},
    { id: 1015, src: '/ImageGame/박지선.png'},
    { id: 20, src: '/ImageGame/박태환.jpeg'},
    { id: 1016, src: '/ImageGame/반기문.png'},
    { id: 21, src: '/ImageGame/백현.jpg'},
    { id: 1017, src: '/ImageGame/베토벤.png'},
    { id: 1018, src: '/ImageGame/봉준호.png'},
    { id: 1019, src: '/ImageGame/빈센트반고흐.png'},
    { id: 1020, src: '/ImageGame/빌게이츠.png'},
    { id: 2006, src: '/ImageGame/뽀로로.jpeg'},
    { id: 22, src: '/ImageGame/샘 해밍턴.jpg'},
    { id: 23, src: '/ImageGame/서현진.jpg'},
    { id: 2007, src: '/ImageGame/설리반.png'},
    { id: 1021, src: '/ImageGame/설민석.png'},
    { id: 1022, src: '/ImageGame/세종대왕.png'},
    { id: 24, src: '/ImageGame/소지섭.jpg'},
    { id: 25, src: '/ImageGame/소희.jpeg'},
    { id: 26, src: '/ImageGame/손예진.jpg'},
    { id: 27, src: '/ImageGame/손호준.jpg'},
    { id: 28, src: '/ImageGame/손흥민.jpeg'},
    { id: 2008, src: '/ImageGame/솔저.jpeg'},
    { id: 29, src: '/ImageGame/송가인.jpg'},
    { id: 30, src: '/ImageGame/송지효.jpg'},
    { id: 31, src: '/ImageGame/수지.jpg'},
    { id: 1023, src: '/ImageGame/스티븐잡스.png'},
    { id: 2009, src: '/ImageGame/스폰지밥.jpg'},
    { id: 32, src: '/ImageGame/아이유.jpg'},
    { id: 1024, src: '/ImageGame/아인슈타인.png'},
    { id: 2010, src: '/ImageGame/안나.png'},
    { id: 1025, src: '/ImageGame/안철수.png'},
    { id: 33, src: '/ImageGame/앤 헤서웨이.jpeg'},
    { id: 1026, src: '/ImageGame/양세찬.png'},
    { id: 2011, src: '/ImageGame/엘사.jpg'},
    { id: 34, src: '/ImageGame/여진구.jpg'},
    { id: 1027, src: '/ImageGame/오나미.png'},
    { id: 1028, src: '/ImageGame/오바마.png'},
    { id: 1029, src: '/ImageGame/오지헌.png'},
    { id: 2011, src: '/ImageGame/올라프.jpg'},
    { id: 2012, src: '/ImageGame/우디.png'},
    { id: 1030, src: '/ImageGame/유관순.png'},
    { id: 35, src: '/ImageGame/유노윤호.jpg'},
    { id: 36, src: '/ImageGame/유아인.jpg'},
    { id: 37, src: '/ImageGame/유연석.jpg'},
    { id: 38, src: '/ImageGame/유이.jpg'},
    { id: 39, src: '/ImageGame/유인나.jpg'},
    { id: 40, src: '/ImageGame/유재석.jpg'},
    { id: 41, src: '/ImageGame/유진.jpg'},
    { id: 42, src: '/ImageGame/유희열.jpg'},
    { id: 43, src: '/ImageGame/윤은혜.jpeg'},
    { id: 44, src: '/ImageGame/윤후.jpeg'},
    { id: 45, src: '/ImageGame/은지원.jpg'},
    { id: 46, src: '/ImageGame/이민호.jpg'},
    { id: 47, src: '/ImageGame/이수근.png'},
    { id: 1031, src: '/ImageGame/이영자.png'},
    { id: 1032, src: '/ImageGame/이은형.png'},
    { id: 48, src: '/ImageGame/이제훈.jpg'},
    { id: 49, src: '/ImageGame/이준기.jpg'},
    { id: 50, src: '/ImageGame/이천수.jpeg'},
    { id: 51, src: '/ImageGame/이효리.jpg'},
    { id: 52, src: '/ImageGame/장나라.jpg'},
    { id: 1033, src: '/ImageGame/장덕진 팀장님.jpeg'},
    { id: 1034, src: '/ImageGame/장도연.png'},
    { id: 53, src: '/ImageGame/전소미.jpg'},
    { id: 54, src: '/ImageGame/정우성.jpeg'},
    { id: 1035, src: '/ImageGame/정은경 본부장.png'},
    { id: 55, src: '/ImageGame/제니.jpg'},
    { id: 1036, src: '/ImageGame/조세호.png'},
    { id: 56, src: '/ImageGame/조이.jpg'},
    { id: 2014, src: '/ImageGame/주디.jpg'},
    { id: 2015, src: '/ImageGame/짱구.jpg'},
    { id: 57, src: '/ImageGame/쯔위.jpg'},
    { id: 58, src: '/ImageGame/차승원.jpg'},
    { id: 1037, src: '/ImageGame/찰리채플린.png'},
    { id: 1038, src: '/ImageGame/최양락.png'},
    { id: 59, src: '/ImageGame/추성훈.jpg'},
    { id: 2016, src: '/ImageGame/토토로.jpeg'},
    { id: 1039, src: '/ImageGame/퇴계 이황.png'},
    { id: 60, src: '/ImageGame/티파니.jpg'},
    { id: 2017, src: '/ImageGame/펭수.jpg'},
    { id: 2018, src: '/ImageGame/피카츄.jpg'},
    { id: 2019, src: '/ImageGame/하쿠.png'},
    { id: 61, src: '/ImageGame/한혜진.jpg'},
    { id: 1040, src: '/ImageGame/헨델.png'},
    { id: 1041, src: '/ImageGame/홍윤화.png'},
  ]

  const [image, setImage] = useState(images[0]);
  const [count, setCount] = useState(0);
  const [imageDisplay, setImageDisplay] = useState(true);
  const [whack, setWhack] = useState(false);
  const [noPage, setNoPage] = useState(false);
  const [noPage2, setNoPage2] = useState(false);

  // 타입스크립트는 타입까지 비교하기 때문에 '===' 사용
  // 따라서, 아닌 경우도 '!==' 이렇게 쓴다.

  useEffect(() => {
    if(image.id !== 0) {
      setTimeout(() => {
        console.log('Whack!!!');  // 꽝이닷
        setImageDisplay(false);
        setWhack(true);
      }, 1250);
    }
  }, [image])

  const upCount = () => {
    if(count !== images.length - 1) {
      setCount(count+1);
      setImage(images[count+1]);
      setImageDisplay(true);
      setWhack(false);
    } else {
      setNoPage2(true);
      setTimeout(() => {
        setNoPage2(false);
      }, 2000);
      // alert('앞으로 안 넘어 가지롱~!');
    }
  }

  const downCount = () => {
    if(count !== 0) {
      setCount(count-1);
      setImage(images[count-1]);
      setImageDisplay(true);
      setWhack(false);
    } else {
      setNoPage(true);
      setTimeout(() => {
        setNoPage(false);
      }, 2000);
      // alert('뒤로 안 넘어 가지롱~!');
    }
  }


  return (
    <div className="ImageGame">
      <Alert severity="error" style={noPage ? {position: 'absolute', top: 25, left: 'calc(50% - 150px)', zIndex: 9999} : {display: 'none', position: 'absolute'}}>
        뒤로 안 넘어 가지롱~! 라라라라라라라 ~!
      </Alert>
      <Alert severity="error" style={noPage2 ? {position: 'absolute', top: 25, left: 'calc(50% - 150px)', zIndex: 9999} : {display: 'none', position: 'absolute'}}>
        앞으로 안 넘어 가지롱~! 라라라라라라라 ~!
      </Alert>
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
      <img src={image.src} alt="" height="500px" style={imageDisplay ? {display: 'block', margin: '100px auto'}: {display: 'none', margin: '100px auto'}}/>
      <div className="whack__wrap" style={whack ? {display: 'block'} : {display: 'none'}}>WHACK!!!</div>
      <p className="goHome"><button onClick={() => document.location.href = "/"}>finish</button></p>
    </div>
  )
}

export default ImageGame;