import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "75", height = "40" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="rgb(var(--color-primary-900))"
      visible={true}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default Loading;
