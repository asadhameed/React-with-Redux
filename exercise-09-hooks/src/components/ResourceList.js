/******************************************************************
 *  the following is class base component so when you call the class base components when ever you render
 * then componentMount methods will call and some time repeat the code
 ********************************************************************/

// import React, { Component } from "react";
// import JsonApi from "../api/jsonplaceholder";
// class ResourceList extends Component {
//   state = { resourceList: [] };
//   async componentDidMount() {
//     const response = await JsonApi.get(this.props.resource);
//     console.log(response.data);
//     this.setState({ resourceList: response.data });
//   }
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await JsonApi.get(this.props.resource);
//       console.log(response.data);
//       this.setState({ resourceList: response.data });
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.resourceList.map((item) => {
//           return <li key={item.id}>{item.title} </li>;
//         })}
//       </div>
//     );
//   }
// }

// export default ResourceList;

/********************************************
 * The function base component is easy with hock
 **********************************************/

// import React, { useState, useEffect } from "react";
// import JsonApi from "../api/jsonplaceholder";
// import useResource from "./useResource";

// const ResourceList = (props) => {
//   //   const [resourceList, setResourceList] = useState([]);
//   //   /** If you put function outside from useEffect then give warning so better keep function
//   //    * inside in the useEffect
//   //    */
//   //   //   async function fetchData() {
//   //   //     const response = await JsonApi.get(props.resource);
//   //   //     setResourceList(response.data);
//   //   //     console.log(response);
//   //   //   }
//   //   useEffect(() => {
//   //     async function fetchData() {
//   //       const response = await JsonApi.get(props.resource);
//   //       setResourceList(response.data);
//   //       console.log(response);
//   //     }
//   //     fetchData();

//   //     /*** Use Arrow function */

//   //     // const fetchData = async () => {
//   //     //     const response = await JsonApi.get(props.resource);
//   //     //     setResourceList(response.data);
//   //     //     console.log(response);
//   //     //   };
//   //     //   fetchData();

//   //     // 2nd way after function you can directly call the function.
//   //     // we can write the upper method on the following way as well
//   //     // (async () => {
//   //     //   const response = await JsonApi.get(props.resource);
//   //     //   setResourceList(response.data);
//   //     //   console.log(response);
//   //     // })();
//   //     // fetchData();
//   //   }, [props.resource]);

//   const resourceList = useResource(props);
//   return (
//     <div>
//       {resourceList.map((item) => {
//         return <li key={item.id}>{item.title} </li>;
//       })}
//     </div>
//   );
// };

// export default ResourceList;

/*************************************
 *  We can define hook to another file and also call it
 ************************************/

import React from "react";
import useResource from "./useResource";

const ResourceList = ({ resource }) => {
  const resourceList = useResource(resource);
  return (
    <div>
      {resourceList.map((item) => {
        return <li key={item.id}>{item.title} </li>;
      })}
    </div>
  );
};

export default ResourceList;
