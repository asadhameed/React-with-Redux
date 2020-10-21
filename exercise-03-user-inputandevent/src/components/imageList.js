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
  const images = props.images.map((image) => {
    return (
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        key={image.id}
      />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
