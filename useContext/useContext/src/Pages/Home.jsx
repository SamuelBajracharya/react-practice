import React, { useContext, useEffect } from "react";
import { DarkTheme } from "../App";
import ButtonComp from "../Components/ButtonComp";

function Home() {
  const [toggleDark, setToggleDark] = useContext(DarkTheme);
  useEffect(() => {
    console.log(toggleDark);
  }, [toggleDark]);

  return (
    <div
      className={`${
        toggleDark ? "border-white shadow-gray-100" : "border-gray-900"
      } max-w-[60%] mx-auto my-20 border rounded-lg p-5 shadow-lg`}
    >
      <h1 className={`${toggleDark ? "text-white" : ""} text-[34px] font-bold`}>
        Home
      </h1>
      <div
        className={`${
          toggleDark ? "text-white" : ""
        } text-[20px] flex flex-col gap-4 text-justify`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam
          doloribus est reprehenderit iusto veritatis? Vel perferendis tenetur
          ducimus, molestiae hic necessitatibus quisquam tempore id aut enim
          dolores est voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          architecto labore, consequuntur deleniti veniam atque ad neque tempore
          exercitationem, ab nostrum reprehenderit optio minus quis, soluta
          tenetur harum perspiciatis possimus? Recusandae est alias, error
          tempora repudiandae consequuntur labore repellendus laboriosam eveniet
          nisi sapiente laudantium non quasi porro, et a fuga!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magni
          velit doloremque id, veniam, iste fuga ex necessitatibus impedit
          facilis molestiae consequatur ipsam asperiores! Mollitia inventore
          aliquid architecto non quae?
        </p>
      </div>
      <ButtonComp />
    </div>
  );
}

export default Home;
