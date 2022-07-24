// import React, { useState, Fragment } from "react";
// import Card from "../UI/Card";
// import classes from "./AddUser.module.css";
// import Button from "../UI/Button";
// import ErrorModal from "../UI/ErrorModal";
// const AddUser = (props) => {
//   const [enterUserName, setEnterUserName] = useState("");
//   const [enterUserAge, setEnterUserAge] = useState("");
//   // const [isOpenModal , setOpenModal] = useState(false);
//   // const [errorTitle , setErrorTitle] = useState("")
//   // const [errorMessage , setErrorMessage] = useState("")
//   const [error , setError] = useState();
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     if (enterUserName.trim().length === 0) {
//       // console.log("NO Namee");
//       // setErrorTitle("Invalid User Name")
//       // setErrorMessage("you should give the proper user Name");
//       // setOpenModal(true);

//       setError({
//         title:'Invalid User Name',
//         message:"User Name shouldn't empthy"
//       })
//       return;
//     }
//     if (enterUserAge.trim().length === 0 || enterUserAge < 1) {
//       console.log("No age");

//       setError({
//         title:'Invalid User age',
//         message:"The age should be greater then zerro and  not empthy"
//       })
//       // setErrorTitle("Invalid user Age");
//       // setErrorMessage("The age should be greater then zerro and  not empthy")
//       // setOpenModal(true);
//       return;
//     }
//     props.addNewUser({
//       id: Math.random(),
//       name: enterUserName,
//       age: enterUserAge,
//     });
//     setEnterUserAge("");
//     setEnterUserName("");
//   };

//   const closeModal =()=>{
//     setError(null);
//     // setErrorTitle("")
//     // setErrorMessage("")
//     // setOpenModal(false)
//   }
//   const onChangeNameHandler = (event) => setEnterUserName(event.target.value);

//   const onChangeAgeHandler = (event) => setEnterUserAge(event.target.value);
//   return (
//     <Fragment>
//     {/* {isOpenModal &&   <ErrorModal title="Invalid User Data" message={errorMessage}  onCloseModalHandler={closeModal}></ErrorModal>} */}
//      {error  &&   <ErrorModal  title={error.title } message={error.message}  onCloseModalHandler={closeModal}></ErrorModal>} 
//       <Card className={classes.input}>
//         <form onSubmit={onSubmitHandler}>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             value={enterUserName}
//             onChange={onChangeNameHandler}
//           />
//           <label htmlFor="age">Age (Year)</label>
//           <input
//             id="age"
//             type="number"
//             value={enterUserAge}
//             onChange={onChangeAgeHandler}
//           />

//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </Fragment>
//   );
// };
// export default AddUser;


/**
 *  The Upper is code is working like down. But the down code Use react hook useRef
 *  when useRef hook inside the input name element then we don't need the following hooks
 *  // const [enterUserName, setEnterUserName] = useState("");
  // const [enterUserAge, setEnterUserAge] = useState("");
 *  
 */
import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const userIntPutName = useRef();
  const userIntPutAge  = useRef();
 
  const [error , setError] = useState();
  const onSubmitHandler = (e) => {
    e.preventDefault();
   
    const  enterUserName = userIntPutName.current.value;
    const enterUserAge = userIntPutAge.current.value;
    if (enterUserName.trim().length === 0) {

      setError({
        title:'Invalid User Name',
        message:"User Name shouldn't empthy"
      })
      return;
    }
    if (enterUserAge.trim().length === 0 || enterUserAge < 1) {
      setError({
        title:'Invalid User age',
        message:"The age should be greater then zerro and  not empthy"
      })
      return;
    }
    props.addNewUser({
      id: Math.random(),
      name: enterUserName,
      age: enterUserAge,
    });
    userIntPutName.current.value = "";
    userIntPutAge.current.value = "";
  };

  const closeModal =()=>{
    setError(null);
  }
  return (
    <Fragment>
     {error  &&   <ErrorModal  title={error.title } message={error.message}  onCloseModalHandler={closeModal}></ErrorModal>} 
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            ref= {userIntPutName}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            ref={userIntPutAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddUser;
