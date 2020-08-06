import React from "react";
import Carousel from "react-elastic-carousel";

function Block() {
  return (
    <Carousel itemsToShow={1}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>

      {/* <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item> */}
    </Carousel>
  );
}

export default Block;
