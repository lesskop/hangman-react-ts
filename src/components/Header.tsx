type Props = {};

const Header = (props: Props) => {
  return (
    <div className="mx-auto pb-10 pt-4 text-center">
      <h1 className="text-4xl font-bold">Виселица</h1>
      <p className="pt-4 font-semibold">
        Угадай слово, чтобы человечка не повесили!
      </p>
    </div>
  );
};

export default Header;
