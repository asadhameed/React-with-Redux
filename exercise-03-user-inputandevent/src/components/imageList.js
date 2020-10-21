import React from "react";

// class ImageList extends React.Component {
//   render() {
//     console.log(this.props.imagesList);
//     return (
//       <div>
//         <ul>
//           {this.props.imagesList.map((item) => (
//             <li key={item.id}>
//               {<img src={item.url.regular} alt={item.alt_description} />}
//               {item.description}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// export default ImageList;

const ImageList = (props) => {
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img src={urls.regular} alt={alt_description} key={id} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
