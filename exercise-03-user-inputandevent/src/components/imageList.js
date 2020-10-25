import React from "react";
import "./imagelist.css";
import ImageCard from "./ImageCard";

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
  const images = props.images.map((image) => {
    return <ImageCard image={image} key={image.id}></ImageCard>;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
