import Link from "next/link";
const Header = () => {
  return (
    <>
      <h3>header</h3>
      <Link href="/">home</Link><br />
      <Link href="/todo">todo</Link><br />
      <br />
    </>
  );
};

export default Header;
