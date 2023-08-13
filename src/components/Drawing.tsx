const Head = (
  <div className="absolute right-[70px] top-[49px] h-[50px] w-[50px] rounded-full border-[10px] border-black" />
);

const Body = (
  <div className="absolute right-[90px] top-[98px] h-[100px] w-[10px] bg-black" />
);

const RightArm = (
  <div className="absolute right-[20px] top-[130px] h-[10px] w-[70px] origin-bottom-left -rotate-[30deg] bg-black" />
);

const LeftArm = (
  <div className="absolute right-[100px] top-[130px] h-[10px] w-[70px] origin-bottom-right rotate-[30deg] bg-black" />
);

const RightLeg = (
  <div className="absolute right-0 top-[188px] h-[10px] w-[100px] origin-bottom-left rotate-[60deg] bg-black" />
);

const LeftLeg = (
  <div className="absolute right-0 top-[184px] h-[10px] w-[100px] origin-bottom-left rotate-[120deg] bg-black" />
);

type Props = {};

const Drawing = (props: Props) => {
  return (
    <div className="relative">
      {Head}
      {Body}
      {RightArm}
      {LeftArm}
      {RightLeg}
      {LeftLeg}
      <div className="absolute right-[90px] top-0 h-[50px] w-[10px] bg-black" />
      <div className="h-[10px] w-[100px] bg-black" />
      <div className="h-[300px] w-[10px] bg-black" />
      <div className="h-[10px] w-[200px] bg-black" />
    </div>
  );
};

export default Drawing;
