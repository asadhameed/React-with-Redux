// import React from "react";
// import Card from "./Card";
// import classes from './ErrorModal.module.css'
// import Button from "./Button";

// const ErrorModal = (props) => {
//   return (
//     <div>
//     <div className={classes.backDrop} onClick={props.onCloseModalHandler} />
        
    
    
//     <Card className={classes.modal}>
//       <header className={classes.header}>
//         <h2>{props.title}</h2>
//       </header>
//       <div className={classes.content}>
//         <p>{props.message}</p>
//       </div>
//       <footer className={classes.actoins}>
//         <Button onClick={props.onCloseModalHandler}>Ok</Button>
//       </footer>
//     </Card>
//     </div>
//   );
// };

// export default ErrorModal;

import React  from "react";
import ReactDOM from 'react-dom'
import Card from "./Card";
import classes from './ErrorModal.module.css'
import Button from "./Button";


const BackDropModal =props => <div className={classes.backDrop} onClick={props.onCloseModalHandler} />

const OverLayModal = props =>{
  return   <Card className={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actoins}>
    <Button onClick={props.onCloseModalHandler}>Ok</Button>
  </footer>
</Card>
}

const ErrorModal = (props) => {
  return (
    <div>
       {ReactDOM.createPortal(<BackDropModal onCloseModalHandler={props.onCloseModalHandler} />, document.getElementById('overlay'))}
       {ReactDOM.createPortal (<OverLayModal title={props.title} message={props.message}  onCloseModalHandler={props.onCloseModalHandler} />, document.getElementById('overlay'))}
    
    </div>
  );
};

export default ErrorModal;

