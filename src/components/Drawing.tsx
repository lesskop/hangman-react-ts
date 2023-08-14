const Head = (
  <div
    key="head"
    className="absolute right-[70px] top-[49px] h-[50px] w-[50px] rounded-full border-[10px] border-black"
  />
);

const Body = (
  <div
    key="body"
    className="absolute right-[90px] top-[98px] h-[100px] w-[10px] bg-black"
  />
);

const RightArm = (
  <div
    key="rightArm"
    className="absolute right-[20px] top-[130px] h-[10px] w-[70px] origin-bottom-left -rotate-[30deg] bg-black"
  />
);

const LeftArm = (
  <div
    key="leftArm"
    className="absolute right-[100px] top-[130px] h-[10px] w-[70px] origin-bottom-right rotate-[30deg] bg-black"
  />
);

const RightLeg = (
  <div
    key="rightLeg"
    className="absolute right-0 top-[188px] h-[10px] w-[100px] origin-bottom-left rotate-[60deg] bg-black"
  />
);

const LeftLeg = (
  <div
    key="leftLeg"
    className="absolute right-0 top-[184px] h-[10px] w-[100px] origin-bottom-left rotate-[120deg] bg-black"
  />
);

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type Props = {
  numberOfGuesses: number;
};

const Drawing = ({ numberOfGuesses }: Props) => {
  return (
    <div className="relative">
      {BodyParts.slice(0, numberOfGuesses)}

      <div className="absolute right-[90px] top-0 h-[50px] w-[10px] bg-black" />
      <div className="h-[10px] w-[100px] bg-black" />
      <div className="h-[300px] w-[10px] bg-black" />
      <div className="h-[10px] w-[200px] bg-black" />
    </div>
  );
};

export default Drawing;
